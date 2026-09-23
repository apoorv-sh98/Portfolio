export type Photo = {
  /** Path under /public, e.g. "/photos/dv1.jpg". Omit for a placeholder tile. */
  src?: string;
  /** Real pixel dimensions — required when `src` is set, for correct layout & optimization. */
  width?: number;
  height?: number;
  /** Caption shown under the photo and in the lightbox — the location it was taken. */
  alt: string;
  /** Grouping used by the city filter. */
  city: string;
  /** CSS aspect ratio for placeholder tiles only. */
  aspect?: string;
};

export const instagram = {
  handle: "clickedbyapoorv",
  url: "https://www.instagram.com/clickedbyapoorv/",
};

// ─────────────────────────────────────────────────────────────────────────────
// ADD / EDIT PHOTOS
// • Files live in public/photos/ (already resized to max 2000px, metadata stripped).
// • Each entry's `alt` is the caption/location shown under the photo.
// • Captions marked "(check)" below are my best guess — correct as needed.
// ─────────────────────────────────────────────────────────────────────────────

export const photos: Photo[] = [
  { src: "/photos/dv1.jpg", width: 2000, height: 1333, alt: "Badwater Basin, Death Valley", city: "Death Valley" },
  { src: "/photos/dv3.jpg", width: 2000, height: 1333, alt: "Sunrise at Zabriskie Point, Death Valley", city: "Death Valley" },
  { src: "/photos/olm3.jpg", width: 1333, height: 2000, alt: "Sol Duc Falls, Olympic National Park", city: "Olympic" },
  { src: "/photos/mtr1.jpg", width: 2000, height: 1333, alt: "Mount Rainier at first light", city: "Mount Rainier" },
  { src: "/photos/jt1.jpg", width: 1333, height: 2000, alt: "Joshua Tree National Park, California", city: "Joshua Tree" },
  { src: "/photos/olm1.jpg", width: 1333, height: 2000, alt: "A curious Canada jay, Olympic National Park", city: "Olympic" },
  { src: "/photos/sea1.jpg", width: 1333, height: 2000, alt: "The Spheres, Seattle", city: "Seattle" },
  { src: "/photos/mtr4.jpg", width: 2000, height: 1333, alt: "Mount Rainier National Park, Washington", city: "Mount Rainier" },
  { src: "/photos/dv2.jpg", width: 2000, height: 1333, alt: "Devil's Golf Course, Death Valley (check)", city: "Death Valley" },
  { src: "/photos/olm2.jpg", width: 1333, height: 2000, alt: "A Canada jay, Olympic National Park", city: "Olympic" },
  { src: "/photos/mtr8.jpg", width: 1333, height: 2000, alt: "Meadows below Mount Rainier, Sunrise", city: "Mount Rainier" },
  { src: "/photos/mtr5.jpg", width: 2000, height: 1333, alt: "A hoary marmot, Mount Rainier", city: "Mount Rainier" },
  { src: "/photos/mtr10.jpg", width: 1333, height: 2000, alt: "A ground squirrel, Mount Rainier", city: "Mount Rainier" },
  { src: "/photos/olm4.jpg", width: 1333, height: 2000, alt: "Cape Flattery lighthouse, Olympic Peninsula (check)", city: "Olympic" },
  { src: "/photos/dv4.jpg", width: 2000, height: 1333, alt: "Out in the desert, Death Valley", city: "Death Valley" },
  { src: "/photos/mtr3.jpg", width: 2000, height: 1333, alt: "Mount Rainier National Park, Washington", city: "Mount Rainier" },
  { src: "/photos/mtr6.jpg", width: 2000, height: 1333, alt: "Mount Rainier National Park, Washington", city: "Mount Rainier" },
  { src: "/photos/mtr7.jpg", width: 1333, height: 2000, alt: "Mount Rainier National Park, Washington", city: "Mount Rainier" },
  { src: "/photos/mtr9.jpg", width: 1333, height: 2000, alt: "Mount Rainier National Park, Washington", city: "Mount Rainier" },
];

export function photoCities(list: Photo[] = photos): string[] {
  return Array.from(new Set(list.map((p) => p.city))).sort();
}
