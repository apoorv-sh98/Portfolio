import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FiArrowLeft, FiMapPin } from "react-icons/fi";
import { Section } from "@/components/ui/Section";
import { PhotoGallery } from "@/components/photography/PhotoGallery";
import { locations, getLocation } from "@/lib/locations";
import { photos } from "@/lib/photos";

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const loc = getLocation(slug);
  return { title: loc ? loc.name : "Exploration" };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const loc = getLocation(slug);
  if (!loc) notFound();

  const locPhotos = loc.photoCity
    ? photos.filter((p) => p.city === loc.photoCity)
    : [];

  return (
    <Section>
      <Link
        href="/personal/exploration"
        className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-muted transition-colors hover:text-foreground"
      >
        <FiArrowLeft /> Back to the map
      </Link>

      <div className="mb-10 max-w-2xl">
        <div className="flex items-center gap-2 text-accent-2">
          <FiMapPin size={16} />
          <span className="font-mono text-sm uppercase tracking-widest">
            {loc.region}, {loc.country}
          </span>
        </div>
        <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {loc.name}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-muted">{loc.blurb}</p>
      </div>

      {locPhotos.length > 0 ? (
        <PhotoGallery photos={locPhotos} showFilter={false} />
      ) : (
        <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center text-muted">
          Photos and stories from {loc.name} are coming soon.
        </div>
      )}
    </Section>
  );
}
