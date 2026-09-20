import Image from "next/image";
import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiMail } from "react-icons/fi";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "About" };

const nowLearning = [
  "Frontend development with React",
  "Auth & security with Spring Security",
  "Event streaming with Apache Kafka",
];

export default function AboutPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:items-start">
        <div>
          <SectionHeading eyebrow="About" title="About Me" />
          <div className="space-y-4 text-base leading-relaxed text-muted">
            <p>
              Hello! I&apos;m Apoorv Sharma, a recent Master&apos;s graduate in
              Computer Science from the{" "}
              <span className="font-medium text-foreground">
                University of Rochester
              </span>
              .
            </p>
            <p>
              I previously interned at{" "}
              <span className="font-medium text-foreground">
                DnG Analytics Inc.
              </span>{" "}
              as a Software Engineer during 2023, and worked full-time as a
              Software Developer at{" "}
              <span className="font-medium text-foreground">
                Amdocs Development Center, India
              </span>{" "}
              for about two years.
            </p>
            <p>
              I have a passion for software security and an unwavering commitment
              to optimizing systems. Right now I&apos;m expanding into full-stack
              development.
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
              Currently learning
            </h3>
            <ul className="flex flex-wrap gap-2">
              {nowLearning.map((item) => (
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
