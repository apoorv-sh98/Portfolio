import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import {
  FiMap,
  FiCoffee,
  FiCamera,
  FiCompass,
  FiHome,
  FiEdit3,
  FiBookOpen,
} from "react-icons/fi";
import type { IconType } from "react-icons";

export const metadata: Metadata = { title: "Personal Life" };

type Feature = {
  title: string;
  body: string;
  icon: IconType;
  status: "soon";
};

const features: Feature[] = [
  {
    title: "Exploration",
    body: "An interactive world map — drop into a place to see everything I did there.",
    icon: FiMap,
    status: "soon",
  },
  {
    title: "Coffee",
    body: "Beans, brew methods, grind notes, and how each choice changes the cup.",
    icon: FiCoffee,
    status: "soon",
  },
  {
    title: "Photography",
    body: "How I learned, and my favorite shots — sorted by city.",
    icon: FiCamera,
    status: "soon",
  },
  {
    title: "New Experiences",
    body: "Hiking, skiing, surfing, and a national-parks checklist.",
    icon: FiCompass,
    status: "soon",
  },
  {
    title: "Places Lived",
    body: "Rochester, Seattle, Vancouver — the cities that shaped me.",
    icon: FiHome,
    status: "soon",
  },
  {
    title: "Blog",
    body: "Notes and stories from work and life.",
    icon: FiEdit3,
    status: "soon",
  },
  {
    title: "Recipes",
    body: "Cuisines I'm exploring in the kitchen.",
    icon: FiBookOpen,
    status: "soon",
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
        {features.map(({ title, body, icon: Icon }) => (
          <div
            key={title}
            className="relative flex flex-col rounded-2xl border border-border bg-surface p-6"
          >
            <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-surface-2 text-accent-2">
              <Icon size={20} />
            </div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">{title}</h3>
              <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Soon
              </span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
