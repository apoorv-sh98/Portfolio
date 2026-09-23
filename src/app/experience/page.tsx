import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiDownload } from "react-icons/fi";
import { workExperience, education, skills, type Job } from "@/lib/experience";

export const metadata: Metadata = { title: "Experience" };

export default function ExperiencePage() {
  return (
    <Section>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked & studied"
        />
        <Button href="/resume/ApoorvSharma_Resume.pdf" variant="outline" external>
          <FiDownload /> Download CV
        </Button>
      </div>

      {/* Work */}
      <ol className="relative border-l border-border pl-6">
        {workExperience.map((job, i) => (
          <JobItem key={i} job={job} />
        ))}
      </ol>

      {/* Education */}
      <h3 className="mb-6 mt-16 text-2xl font-bold tracking-tight">Education</h3>
      <ol className="relative border-l border-border pl-6">
        {education.map((ed, i) => (
          <li key={i} className="mb-8 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent-2" />
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h4 className="text-lg font-bold">{ed.school}</h4>
              <span className="font-mono text-xs uppercase tracking-widest text-muted">
                {ed.period}
              </span>
            </div>
            <p className="text-sm font-medium text-accent">{ed.degree}</p>
            <p className="text-sm text-muted">{ed.location}</p>
          </li>
        ))}
      </ol>

      {/* Skills */}
      <h3 className="mb-6 mt-16 text-2xl font-bold tracking-tight">Skills</h3>
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category}>
            <h4 className="mb-3 font-mono text-sm uppercase tracking-widest text-accent">
              {group.category}
            </h4>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function JobItem({ job }: { job: Job }) {
  return (
    <li className="mb-10 last:mb-0">
      <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full border-2 border-background bg-accent" />
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-lg font-bold">
          {job.role}{" "}
          <span className="font-normal text-muted">· {job.org}</span>
        </h3>
        <span className="font-mono text-xs uppercase tracking-widest text-muted">
          {job.period}
        </span>
      </div>
      <p className="text-sm text-muted">
        {job.orgNote && <span className="italic">{job.orgNote} · </span>}
        {job.location}
      </p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
        {job.points.map((p, j) => (
          <li key={j}>{p}</li>
        ))}
      </ul>
    </li>
  );
}
