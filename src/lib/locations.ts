export type Location = {
  slug: string;
  name: string;
  region: string;
  country: string;
  /** [longitude, latitude] — order used by react-simple-maps. */
  coordinates: [number, number];
  blurb: string;
  /** Links to photos in photos.ts by their `city` value. */
  photoCity?: string;
};

export const locations: Location[] = [
  {
    slug: "seattle",
    name: "Seattle",
    region: "Washington",
    country: "USA",
    coordinates: [-122.3321, 47.6062],
    blurb:
      "Home base in the Pacific Northwest — coffee, the Spheres, and endless weekend escapes to the mountains and coast.",
    photoCity: "Seattle",
  },
  {
    slug: "mount-rainier",
    name: "Mount Rainier",
    region: "Washington",
    country: "USA",
    coordinates: [-121.7603, 46.8523],
    blurb:
      "An icy giant a couple of hours from Seattle. Alpine meadows, marmots, and first light glowing on the glaciers.",
    photoCity: "Mount Rainier",
  },
  {
    slug: "olympic",
    name: "Olympic National Park",
    region: "Washington",
    country: "USA",
    coordinates: [-123.6044, 47.8021],
    blurb:
      "Rainforests, waterfalls, and rugged coastline — from Sol Duc Falls to hand-fed Canada jays up on the ridges.",
    photoCity: "Olympic",
  },
  {
    slug: "death-valley",
    name: "Death Valley",
    region: "California",
    country: "USA",
    coordinates: [-117.0794, 36.5323],
    blurb:
      "The hottest, lowest, driest place I've stood. Salt flats, badlands, and impossibly quiet sunrises.",
    photoCity: "Death Valley",
  },
  {
    slug: "joshua-tree",
    name: "Joshua Tree",
    region: "California",
    country: "USA",
    coordinates: [-115.901, 33.8734],
    blurb:
      "Where the Mojave meets the Colorado desert — twisted trees standing against snow-dusted peaks.",
    photoCity: "Joshua Tree",
  },
  {
    slug: "rochester",
    name: "Rochester",
    region: "New York",
    country: "USA",
    coordinates: [-77.6088, 43.1566],
    blurb:
      "Where my Master's journey happened — snowy winters, lakeside walks, and the University of Rochester.",
  },
  {
    slug: "vancouver",
    name: "Vancouver",
    region: "British Columbia",
    country: "Canada",
    coordinates: [-123.1207, 49.2827],
    blurb: "Mountains meeting the sea on Canada's west coast — a city on the list to explore more.",
  },
];

export function getLocation(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
