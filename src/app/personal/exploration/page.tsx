import type { Metadata } from "next";
import Link from "next/link";
import { FiArrowRight, FiCamera, FiMapPin } from "react-icons/fi";
import { Section, SectionHeading } from "@/components/ui/Section";
import { WorldMap } from "@/components/exploration/WorldMap";
import { locations } from "@/lib/locations";
import { photos } from "@/lib/photos";

export const metadata: Metadata = { title: "Exploration" };

function photoCount(city?: string) {
  return city ? photos.filter((p) => p.city === city).length : 0;
}

export default function ExplorationPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Personal Life · Exploration"
        title="Places I've explored"
        description="Every pin is somewhere I've wandered with a camera. Tap one on the map — or a card below — to see what I found there."
      />

      <WorldMap />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {locations.map((loc) => {
          const count = photoCount(loc.photoCity);
          return (
            <Link
              key={loc.slug}
              href={`/personal/exploration/${loc.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent-2 hover:shadow-lg"
            >
              <div className="flex items-center gap-2 text-accent-2">
                <FiMapPin size={16} />
                <span className="font-mono text-xs uppercase tracking-widest">
                  {loc.region}, {loc.country}
                </span>
              </div>
              <h3 className="mt-2 text-xl font-bold">{loc.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                {loc.blurb}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm font-semibold">
                <span className="inline-flex items-center gap-1.5 text-accent-2">
                  Explore{" "}
                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </span>
                {count > 0 && (
                  <span className="inline-flex items-center gap-1 text-muted">
                    <FiCamera size={13} /> {count}
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
