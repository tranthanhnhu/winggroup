#!/usr/bin/env bash
# Build static site and sync out/ → hosting repo (STATIC_DEPLOY_DIR).
# Does NOT touch .git in the hosting repo. Commit/push there manually.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [[ -f .env.local ]]; then
  # shellcheck disable=SC1091
  set -a
  source .env.local
  set +a
fi

if [[ -z "${STATIC_DEPLOY_DIR:-}" ]]; then
  echo "❌ Thiếu STATIC_DEPLOY_DIR trong .env.local"
  echo "   Ví dụ: STATIC_DEPLOY_DIR=/path/to/hostinger-repo"
  exit 1
fi

if [[ ! -d "$STATIC_DEPLOY_DIR" ]]; then
  echo "❌ STATIC_DEPLOY_DIR không tồn tại: $STATIC_DEPLOY_DIR"
  exit 1
fi

echo "→ npm run build (static export → out/ + outhostinger/)"
npm run build

if [[ ! -d out ]]; then
  echo "❌ Không thấy thư mục out/ sau khi build"
  exit 1
fi

echo "→ rsync out/ → $STATIC_DEPLOY_DIR"
# Giữ .git (và .gitignore) của repo hosting; không đẩy .git từ out/
rsync -a --delete \
  --exclude '.git/' \
  --exclude '.gitignore' \
  --exclude '.env' \
  --exclude '.env.*' \
  out/ "$STATIC_DEPLOY_DIR/"

echo "✅ Đã sync. Vào repo hosting để commit & push thủ công:"
echo "   cd \"$STATIC_DEPLOY_DIR\" && git status"
