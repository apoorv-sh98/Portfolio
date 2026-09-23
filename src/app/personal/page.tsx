import type { Metadata } from "next";
import Link from "next/link";
import {
  FiMap,
  FiCoffee,
  FiCamera,
  FiCompass,
  FiHome,
  FiEdit3,
  FiBookOpen,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Personal Life" };

type Feature = {
  title: string;
  body: string;
  icon: IconType;
  href?: string;
};

const features: Feature[] = [
  {
    title: "Photography",
    body: "How I learned, and my favorite shots — sorted by city.",
    icon: FiCamera,
    href: "/personal/photography",
  },
  {
    title: "Exploration",
    body: "An interactive world map — drop into a place to see everything I did there.",
    icon: FiMap,
    href: "/personal/exploration",
  },
  {
    title: "Coffee",
    body: "Beans, brew methods, grind notes, and how each choice changes the cup.",
    icon: FiCoffee,
  },
  {
    title: "New Experiences",
    body: "Hiking, skiing, surfing, and a national-parks checklist.",
    icon: FiCompass,
  },
  {
    title: "Places Lived",
    body: "Rochester, Seattle, Vancouver — the cities that shaped me.",
    icon: FiHome,
  },
  {
    title: "Blog",
    body: "Notes and stories from work and life.",
    icon: FiEdit3,
  },
  {
    title: "Recipes",
    body: "Cuisines I'm exploring in the kitchen.",
    icon: FiBookOpen,
  },
];

export default function PersonalPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Personal Life"
        title="Life beyond the code"
        description="The coffee I brew, the trails I hike, the photos I take, and the places I explore. New sections are landing here soon."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </Section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { title, body, icon: Icon, href } = feature;

  const inner = (
    <>
      <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-accent-2">
        <Icon size={20} />
      </div>
      <div className="flex items-center gap-2">
        <h3 className="text-lg font-bold">{title}</h3>
        {!href && (
          <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
            Soon
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      {href && (
        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-2">
          Explore{" "}
          <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition-all hover:-translate-y-1 hover:border-accent-2 hover:shadow-lg"
      >
        {inner}
      </Link>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl border border-border bg-surface p-6">
      {inner}
    </div>
  );
}
