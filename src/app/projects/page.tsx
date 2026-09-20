import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiGithub } from "react-icons/fi";

export const metadata: Metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Projects"
        title="Things I've built"
        description="A showcase of my work is on the way. In the meantime, my code lives on GitHub."
      />
      <div className="rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
        <p className="text-muted">
          Project write-ups are coming soon — with descriptions, tech stacks, and
          links.
        </p>
        <div className="mt-6 flex justify-center">
          <Button href="https://github.com/apoorv-sh98" external>
            <FiGithub /> Browse my GitHub
          </Button>
        </div>
      </div>
    </Section>
  );
}
