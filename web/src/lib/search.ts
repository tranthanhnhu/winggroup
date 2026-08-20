import { products, type Product } from "@/data/products";
import { categories } from "@/data/categories";

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function searchProducts(query: string, categoryId?: string): Product[] {
  let list = products;
  if (categoryId) {
    list = list.filter((p) => p.categoryId === categoryId);
  }
  const q = normalize(query);
  if (!q) return list;

  return list
    .map((p) => {
      const hay = normalize(
        [p.name, p.fullName, p.composition, p.usage, p.categoryId].join(" "),
      );
      const cat = categories.find((c) => c.id === p.categoryId);
      const catHay = cat ? normalize(cat.name + " " + cat.short) : "";
      let score = 0;
      if (normalize(p.name).includes(q)) score += 10;
      if (hay.includes(q)) score += 5;
      if (catHay.includes(q)) score += 3;
      q.split(/\s+/).forEach((token) => {
        if (token && hay.includes(token)) score += 1;
      });
      return { p, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.p);
}
