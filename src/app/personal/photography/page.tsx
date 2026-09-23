import type { Metadata } from "next";
import { FaInstagram } from "react-icons/fa";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhotoGallery } from "@/components/photography/PhotoGallery";
import { photos, instagram } from "@/lib/photos";

export const metadata: Metadata = { title: "Photography" };

export default function PhotographyPage() {
  return (
    <Section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Photography"
          title="Through my lens"
          description="A curated set of my favorite shots, sorted by city. For the full, always-updating feed, find me on Instagram."
        />
        <Button href={instagram.url} external className="bg-gradient-to-r from-accent to-accent-2">
          <FaInstagram /> @{instagram.handle}
        </Button>
      </div>

      <PhotoGallery photos={photos} />

      <p className="mt-10 text-center text-sm text-muted">
        More photos coming soon — follow{" "}
        <a
          href={instagram.url}
          target="_blank"
          rel="noreferrer"
          className="font-medium text-accent hover:underline"
        >
          @{instagram.handle}
        </a>{" "}
        for the latest.
      </p>
    </Section>
  );
}
