export type Dealer = {
  id: string;
  name: string;
  address: string;
  phone: string | null;
  region: string | null;
  image: string;
};

export const dealers: Dealer[] = [
  {
    id: "thuy-tien",
    name: "Cửa hàng VTNN Thùy Tiên",
    address: "Cửa hàng Vật tư nông nghiệp Thùy Tiên — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/thuy-tien.jpg",
  },
  {
    id: "thuy-tien-3",
    name: "Cửa hàng VTNN Thùy Tiên 3",
    address: "Cửa hàng VTNN Thùy Tiên 3 — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/thuy-tien-3.jpg",
  },
  {
    id: "cho-giong",
    name: "Cửa hàng VTNN Chợ Giồng",
    address: "Cửa hàng Vật tư nông nghiệp Chợ Giồng — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/cho-giong.jpg",
  },
  {
    id: "quoc-vuong",
    name: "Cửa hàng BVTV Quốc Vương",
    address: "Cửa hàng BVTV Quốc Vương — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/quoc-vuong.jpg",
  },
  {
    id: "huu-thanh",
    name: "Cửa hàng VTNN Hữu Thạnh",
    address: "Cửa hàng VTNN Hữu Thạnh — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/huu-thanh.jpg",
  },
  {
    id: "ut-dieu",
    name: "Cửa hàng VTNN Út Diệu",
    address: "Cửa hàng VTNN Út Diệu — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/ut-dieu.jpg",
  },
  {
    id: "tam-dat",
    name: "Cửa hàng VTNN Tâm Đạt",
    address: "Cửa hàng VTNN Tâm Đạt — Đại lý phân phối Wingroup",
    phone: "0945444184",
    region: null,
    image: "/images/cua-hang/tam-dat.jpg",
  },
  {
    id: "thien-bao-gia-lai",
    name: "Cửa hàng nông nghiệp số 5 Thiên Bảo - Gia Lai",
    address: "Cửa hàng nông nghiệp số 5, Thiên Bảo, Gia Lai",
    phone: "0945444184",
    region: "Gia Lai",
    image: "/images/cua-hang/thien-bao-gia-lai.jpg",
  },
];
