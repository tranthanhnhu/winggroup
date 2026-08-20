#!/usr/bin/env bash
# Build static site and sync out/ → hosting repo (STATIC_DEPLOY_DIR).
# Giữ nguyên .git / .gitignore của repo hosting. Commit/push thủ công sau khi sync.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.local ]]; then
  # shellcheck disable=SC1091
  set -a
  # shellcheck source=/dev/null
  source .env.local
  set +a
fi

if [[ -z "${STATIC_DEPLOY_DIR:-}" ]]; then
  echo "❌ Thiếu STATIC_DEPLOY_DIR trong .env.local"
  echo "   Ví dụ: STATIC_DEPLOY_DIR=/Users/apple/Documents/WEBPHANBON/winggroup/outhostinger"
  exit 1
fi

# Chuẩn hóa path tuyệt đối
STATIC_DEPLOY_DIR="$(cd "$STATIC_DEPLOY_DIR" 2>/dev/null && pwd || true)"
if [[ -z "$STATIC_DEPLOY_DIR" || ! -d "$STATIC_DEPLOY_DIR" ]]; then
  echo "❌ STATIC_DEPLOY_DIR không tồn tại. Tạo thư mục (và git init) trước:"
  echo "   mkdir -p /path/to/outhostinger && cd /path/to/outhostinger && git init"
  exit 1
fi

# Không bao giờ sync đè lên chính thư mục build tạm
if [[ "$STATIC_DEPLOY_DIR" == "$ROOT/out" ]]; then
  echo "❌ STATIC_DEPLOY_DIR không được trỏ vào web/out (thư mục build tạm)."
  exit 1
fi

HAD_GIT=0
if [[ -d "$STATIC_DEPLOY_DIR/.git" ]]; then
  HAD_GIT=1
  echo "✓ Phát hiện .git tại $STATIC_DEPLOY_DIR — sẽ được giữ nguyên"
else
  echo "⚠ Chưa có .git trong $STATIC_DEPLOY_DIR"
  echo "  (Nếu đây là repo Hostinger, chạy: cd \"$STATIC_DEPLOY_DIR\" && git init)"
fi

echo "→ next build (static export → out/, build-id để bust cache)"
# Chỉ build — KHÔNG rm -rf / cp đè lên STATIC_DEPLOY_DIR
BUILD_ID="$(date +%s)"
export NEXT_PUBLIC_BUILD_ID="$BUILD_ID"
echo "   NEXT_PUBLIC_BUILD_ID=$BUILD_ID"
npx next build

if [[ ! -d out ]]; then
  echo "❌ Không thấy thư mục out/ sau khi build"
  exit 1
fi

# Ghi build-id + đảm bảo .htaccess có trong out/
echo "$BUILD_ID" > out/build-id.txt
if [[ -f public/.htaccess ]]; then
  cp -f public/.htaccess out/.htaccess
fi

# Stamp meta vào mọi HTML (phòng trường hợp env chưa kịp embed)
# macOS sed cần '' sau -i
while IFS= read -r -d '' f; do
  if ! grep -q "name=\"build-id\"" "$f" 2>/dev/null; then
    sed -i '' "s/<head>/<head><meta name=\"build-id\" content=\"${BUILD_ID}\">/" "$f" || true
  fi
done < <(find out -name '*.html' -print0)

echo "→ rsync out/ → $STATIC_DEPLOY_DIR (giữ .git)"
# --delete: xóa file cũ trong hosting cho khớp out/
# --exclude: tuyệt đối không đụng .git / .gitignore / env
rsync -a --delete \
  --exclude='.git' \
  --exclude='.git/**' \
  --exclude='.gitignore' \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='.DS_Store' \
  out/ "$STATIC_DEPLOY_DIR/"

if [[ "$HAD_GIT" -eq 1 ]]; then
  if [[ ! -d "$STATIC_DEPLOY_DIR/.git" ]]; then
    echo "❌ LỖI: .git đã bị mất sau khi sync — dừng lại."
    exit 1
  fi
  echo "✓ .git vẫn còn sau sync"
fi

echo "✅ Đã sync. Commit & push thủ công trong repo hosting:"
echo "   cd \"$STATIC_DEPLOY_DIR\" && git status"
