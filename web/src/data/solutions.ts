export type Solution = {
  slug: string;
  title: string;
  subtitle: string;
  bullets: string[];
  categoryId: string;
  image: string;
};

export const solutions: Solution[] = [
  {
    slug: "cay-an-trai",
    title: "Cây ăn trái",
    subtitle: "Từ phục hồi đến nuôi trái chắc khỏe",
    bullets: [
      "Dinh dưỡng: kích rễ, dưỡng bông, lớn trái",
      "Phục hồi sau thu hoạch, xanh lá dày lá",
      "Hỗ trợ hạn chế rụng hoa / trái non",
    ],
    categoryId: "duong-bong-nuoi-trai",
    image: "/images/du-an/du-an-1.jpg",
  },
  {
    slug: "chuyen-lua",
    title: "Lúa",
    subtitle: "Cứng cây – đẻ nhánh – siêu vô gạo",
    bullets: [
      "Dinh dưỡng: cứng cây lùn lóng, đẻ nhánh khỏe",
      "Dưỡng đòng, vô gạo chắc hạt",
      "Tăng đề kháng, hạn chế đổ ngã",
    ],
    categoryId: "chuyen-lua",
    image: "/images/du-an/du-an-2.jpg",
  },
  {
    slug: "chuyen-xoai",
    title: "Xoài",
    subtitle: "Bộ quy trình WIN 01–05 chuyên xoài",
    bullets: [
      "Bật chồi – mập lộc đầu vụ",
      "Siêu ra hoa – đậu trái",
      "Buông đòn – lớn trái đồng đều",
    ],
    categoryId: "chuyen-xoai",
    image: "/images/du-an/du-an-3.jpg",
  },
  {
    slug: "phuc-hoi-cai-tao-dat",
    title: "Phục hồi & cải tạo đất",
    subtitle: "Cân bằng pH, kích rễ, phục hồi cây suy",
    bullets: [
      "Dinh dưỡng hữu cơ, đạm cá, humic",
      "Cải tạo đất, cân bằng pH",
      "Phục hồi cây sau stress / thu hoạch",
    ],
    categoryId: "phuc-hoi",
    image: "/images/du-an/du-an-4.jpg",
  },
  {
    slug: "tao-mam-hoa",
    title: "Tạo mầm hoa",
    subtitle: "Phân hóa mầm, kích bông đồng loạt",
    bullets: [
      "Dinh dưỡng lân cao: MKP, 10-60-10",
      "Xử lý ra hoa nghịch vụ",
      "Già lá nhanh, hạn chế cháy lá",
    ],
    categoryId: "tao-mam",
    image: "/images/banners/slide.png",
  },
  {
    slug: "kich-re",
    title: "Kích rễ khỏe",
    subtitle: "Hạ phèn – siêu ra rễ – dưỡng rễ",
    bullets: [
      "Humic / Super Roots các dạng viên, bột, vảy",
      "Giải độc hữu cơ, mập rễ",
      "Nền tảng cho mọi giai đoạn sau",
    ],
    categoryId: "kich-re-duong-re",
    image: "/images/banners/banner-1.jpg",
  },
];

export function getSolutionBySlug(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
