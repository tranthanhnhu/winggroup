export const PLACEHOLDER_PRODUCT = "/images/placeholders/product.svg";

export function productImage(src: string | null | undefined) {
  return src || PLACEHOLDER_PRODUCT;
}
