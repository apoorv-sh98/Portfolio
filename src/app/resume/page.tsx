import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { FiDownload, FiExternalLink } from "react-icons/fi";

export const metadata: Metadata = { title: "Resume" };

const RESUME = "/resume/ApoorvSharma_Resume.pdf";

export default function ResumePage() {
  return (
    <Section>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="Resume" title="My Resume" />
        <div className="flex gap-3">
          <Button href={RESUME} external>
            <FiDownload /> Download CV
          </Button>
          <Button href={RESUME} variant="outline" external>
            <FiExternalLink /> Open in new tab
          </Button>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-sm">
        <object
          data={`${RESUME}#view=FitH`}
          type="application/pdf"
          className="h-[80vh] w-full"
          aria-label="Apoorv Sharma resume PDF"
        >
          <div className="p-8 text-center text-muted">
            Your browser can&apos;t display the PDF inline.{" "}
            <a href={RESUME} className="text-accent underline" target="_blank" rel="noreferrer">
              Download it here
            </a>
            .
          </div>
        </object>
      </div>
    </Section>
  );
}
