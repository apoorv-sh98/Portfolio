import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = { title: "Experience" };

type Item = {
  role: string;
  org: string;
  period: string;
  location?: string;
  points: string[];
  kind: "work" | "education";
};

// TODO: refine dates and bullet points with Apoorv's real details.
const timeline: Item[] = [
  {
    role: "M.S. in Computer Science",
    org: "University of Rochester",
    period: "2022 – 2023",
    location: "Rochester, NY",
    kind: "education",
    points: [
      "Graduate coursework across systems, algorithms, and security.",
    ],
  },
  {
    role: "Software Engineer (Intern)",
    org: "DnG Analytics Inc.",
    period: "2023",
    kind: "work",
    points: [
      "Built and shipped software features as a Software Engineer.",
    ],
  },
  {
    role: "Software Developer",
    org: "Amdocs Development Center, India",
    period: "~2 years",
    kind: "work",
    points: [
      "Developed and maintained production software full-time for ~2 years.",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked & studied"
        description="A timeline of my professional and academic journey. (Details are being refined.)"
      />
      <ol className="relative border-l border-border pl-6">
        {timeline.map((item, i) => (
          <li key={i} className="mb-10 last:mb-0">
            <span
              className={`absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background ${
                item.kind === "education" ? "bg-accent-2" : "bg-accent"
              }`}
            />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg font-bold">{item.role}</h3>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-accent">{item.org}</p>
            {item.location && (
              <p className="text-sm text-muted">{item.location}</p>
            )}
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted">
              {item.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
