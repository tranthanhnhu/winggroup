export type Category = {
  id: string;
  name: string;
  short: string;
  description: string;
  icon: string;
  productCount: number;
};

export const categories: Category[] = [
  {
    "id": "phuc-hoi",
    "name": "Sản phẩm phục hồi",
    "short": "Phục hồi",
    "description": "Phục hồi cây suy kiệt, kích rễ, bật chồi, xanh lá sau thu hoạch hoặc stress.",
    "icon": "refresh-leaf",
    "productCount": 17
  },
  {
    "id": "ho-tro",
    "name": "Sản phẩm hỗ trợ",
    "short": "Hỗ trợ",
    "description": "Dinh dưỡng và hỗ trợ dùng cho mọi giai đoạn canh tác.",
    "icon": "support",
    "productCount": 15
  },
  {
    "id": "tao-mam",
    "name": "Sản phẩm tạo mầm",
    "short": "Tạo mầm",
    "description": "Phân hóa mầm hoa, kích ra hoa đồng loạt, xử lý nghịch vụ.",
    "icon": "sprout",
    "productCount": 7
  },
  {
    "id": "duong-bong-nuoi-trai",
    "name": "Dưỡng bông, nuôi trái",
    "short": "Dưỡng bông",
    "description": "Dưỡng bông, tăng đậu trái, lớn trái, hạn chế rụng hoa/trái non.",
    "icon": "bloom",
    "productCount": 13
  },
  {
    "id": "kich-re-duong-re",
    "name": "Kích rễ, dưỡng rễ",
    "short": "Kích rễ",
    "description": "Hạ phèn, giải độc, siêu ra rễ, dưỡng rễ khỏe.",
    "icon": "roots",
    "productCount": 9
  },
  {
    "id": "chuyen-xoai",
    "name": "Bộ chuyên xoài",
    "short": "Chuyên xoài",
    "description": "Quy trình phân bón chuyên cho xoài từ bật chồi đến lớn trái.",
    "icon": "mango",
    "productCount": 5
  },
  {
    "id": "chuyen-lua",
    "name": "Bộ chuyên lúa",
    "short": "Chuyên lúa",
    "description": "Cứng cây, đẻ nhánh, dưỡng đòng, siêu vô gạo cho lúa.",
    "icon": "rice",
    "productCount": 5
  }
];

export function getCategoryById(id: string) {
  return categories.find((c) => c.id === id);
}
