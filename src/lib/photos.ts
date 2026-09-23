export type Photo = {
  /** Path under /public, e.g. "/photos/seattle-01.jpg". Omit for a placeholder tile. */
  src?: string;
  /** Real pixel dimensions — required when `src` is set, for correct layout & optimization. */
  width?: number;
  height?: number;
  alt: string;
  city: string;
  /** CSS aspect ratio for placeholder tiles (e.g. "4/5"). Ignored when `src` is set. */
  aspect?: string;
};

export const instagram = {
  handle: "clickedbyapoorv",
  url: "https://www.instagram.com/clickedbyapoorv/",
};

// ─────────────────────────────────────────────────────────────────────────────
// HOW TO ADD REAL PHOTOS
// 1. Drop image files into  public/photos/  (e.g. public/photos/seattle-01.jpg).
//    Tip: download full-res originals from Instagram → Settings → Your activity →
//    Download your information (better quality than the compressed feed images).
// 2. Replace/extend the entries below with:
//      { src: "/photos/seattle-01.jpg", width: 1600, height: 2000,
//        alt: "Sunrise over Elliott Bay", city: "Seattle" }
//    (width/height are the image's real pixel dimensions.)
// 3. The gallery, city filters, and lightbox update automatically.
// ─────────────────────────────────────────────────────────────────────────────

export const photos: Photo[] = [
  { alt: "Placeholder", city: "Rochester", aspect: "4/5" },
  { alt: "Placeholder", city: "Seattle", aspect: "1/1" },
  { alt: "Placeholder", city: "Vancouver", aspect: "3/4" },
  { alt: "Placeholder", city: "Seattle", aspect: "4/5" },
  { alt: "Placeholder", city: "Rochester", aspect: "3/2" },
  { alt: "Placeholder", city: "Vancouver", aspect: "1/1" },
  { alt: "Placeholder", city: "Seattle", aspect: "3/4" },
  { alt: "Placeholder", city: "Vancouver", aspect: "4/5" },
  { alt: "Placeholder", city: "Rochester", aspect: "1/1" },
];

export function photoCities(list: Photo[] = photos): string[] {
  return Array.from(new Set(list.map((p) => p.city))).sort();
}
