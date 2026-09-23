import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";
import { projects, type Project } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A selection of my work — spanning systems, machine learning, algorithms, and a little 3D. More detail and demos coming soon."
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-dashed border-border bg-surface p-8 text-center">
        <p className="text-muted">Want to see everything I&apos;m tinkering with?</p>
        <div className="mt-4 flex justify-center">
          <Button href="https://github.com/apoorv-sh98" external>
            <FiGithub /> Browse my GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { title, description, tags, repo, demo, featured } = project;
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border bg-surface p-6 transition-all hover:-translate-y-1 hover:shadow-lg ${
        featured ? "border-accent/40" : "border-border hover:border-accent"
      }`}
    >
      {featured && (
        <span className="absolute right-4 top-4 inline-flex items-center gap-1 rounded-full bg-accent/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
          <FiStar size={10} /> Featured
        </span>
      )}

      <h3 className="pr-16 text-lg font-bold">{title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {description}
      </p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tags.map((t) => (
          <li
            key={t}
            className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center gap-4 text-sm font-semibold">
        {repo && (
          <a
            href={repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
          >
            <FiGithub /> Code
          </a>
        )}
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-foreground transition-colors hover:text-accent"
          >
            <FiExternalLink /> Demo
          </a>
        )}
      </div>
    </article>
  );
}
