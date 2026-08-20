# Wingroup Web (Next.js)

Website mới của **CÔNG TY TNHH SÀI GÒN WINGROUP** — giao diện kiểu Tanixa, dữ liệu sản phẩm từ Excel phân phối, ảnh copy độc lập trong `public/` (không phụ thuộc `../output` khi chạy).

## Chạy local

```bash
cd web
npm install
npm run dev
```

Mở http://localhost:3000

## Build

```bash
cd web
npm run build
npm start
```

## Cấu trúc chính

- `src/data/` — products (Excel), categories, dealers, posts, projects, company, solutions
- `src/components/` — Header, Hero, CategoryGrid, MobileStickyNav (Tanixa-style), search, catalog…
- `public/images/` — logo, banners, products, placeholders
- `CAN_BO_SUNG.md` — danh sách dữ liệu còn thiếu

## Không có

- Giỏ hàng / thanh toán / đăng nhập
