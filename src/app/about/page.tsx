import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiMail } from "react-icons/fi";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const focusAreas = [
  "Distributed systems",
  "Backend engineering",
  "Concurrency & coroutines",
  "Cloud (AWS)",
];

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Hello! I&apos;m Apoorv Sharma, a{" "}
              <span className="font-medium text-foreground">Software Engineer</span>{" "}
              at{" "}
              <span className="font-medium text-foreground">Amazon</span> in the
              Seattle area, building and scaling backend systems.
            </p>
            <p>
              Before Amazon, I built virtualized infrastructure and automation at{" "}
              <span className="font-medium text-foreground">
                Clairvoyant Intelligence
              </span>{" "}
              (formerly D&amp;G Analytics), and engineered messaging and security
              systems for Telstra&apos;s OSS platform at{" "}
              <span className="font-medium text-foreground">
                Amdocs
              </span>
              . I hold a Master&apos;s in Computer Science from the{" "}
              <span className="font-medium text-foreground">
                University of Rochester
              </span>
              .
            </p>
            <p>
              I care about reliable distributed systems, clean design, and
              optimizing the things that matter. Outside work, I&apos;m usually
              chasing a good pour-over or planning the next trail.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
              Focus areas
            </h3>
            <ul className="flex flex-wrap gap-2">
              {focusAreas.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Button href={`mailto:${site.email}`} external>
              <FiMail /> Get in touch
            </Button>
          </div>
        </div>

        <div className="justify-self-center lg:justify-self-end">
          <Image
            src="/assets/Apoorv_Sharma_image.jpg"
            alt="Apoorv Sharma"
            width={380}
            height={470}
            className="rounded-3xl border border-border object-cover shadow-lg"
          />
        </div>
      </div>
    </Section>
  );
}
