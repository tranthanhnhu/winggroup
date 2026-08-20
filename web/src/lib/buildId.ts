/** Gắn vào asset public/ để bust cache Hostinger sau mỗi lần deploy */
export const BUILD_ID = process.env.NEXT_PUBLIC_BUILD_ID || "";

export function withBuildId(src: string): string {
  if (!BUILD_ID) return src;
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}v=${BUILD_ID}`;
}
