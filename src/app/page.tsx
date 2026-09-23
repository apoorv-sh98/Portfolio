import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { Section, SectionHeading } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Typewriter } from "@/components/Typewriter";
import { socials, site } from "@/lib/site";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-dots opacity-60" />
        <div
          className="pointer-events-none absolute -top-40 right-0 h-96 w-96 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, color-mix(in oklab, var(--accent) 25%, transparent), transparent)",
          }}
        />
        <Container className="relative grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 font-mono text-sm uppercase tracking-widest text-accent">
              Hi, my name is
            </p>
            <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              <span className="text-gradient">Apoorv Sharma</span>
            </h1>
            <p className="mt-4 text-2xl font-semibold text-muted sm:text-3xl">
              {site.role}
            </p>
            <div className="mt-3 text-lg text-foreground sm:text-xl">
              Currently:{" "}
              <Typewriter words={site.currently} className="text-accent-2" />
            </div>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href="/projects">
                View my work <FiArrowRight />
              </Button>
              <Button href="/personal" variant="outline">
                Explore my life
              </Button>
              <Button href="/resume" variant="ghost">
                <FiDownload /> Resume
              </Button>
            </div>

            <ul className="mt-8 flex items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    aria-label={label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Icon size={18} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="justify-self-center lg:justify-self-end">
            <div className="relative">
              <div
                className="absolute -inset-3 rounded-3xl opacity-40 blur-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent), var(--accent-2))",
                }}
              />
              <Image
                src="/assets/Apoorv_Sharma_image.jpg"
                alt="Apoorv Sharma"
                width={420}
                height={520}
                priority
                className="relative rounded-3xl border border-border object-cover shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Two worlds */}
      <Section className="border-t border-border">
        <SectionHeading
          eyebrow="Two sides, one me"
          title="Pick a world to explore"
          description="This site is part portfolio, part personal journal — the engineering I do, and the life I live around it."
        />
        <div className="grid gap-6 sm:grid-cols-2">
          <WorldCard
            href="/projects"
            eyebrow="Professional"
            title="The engineer"
            body="Projects, experience, and how I think about building reliable systems."
            tone="accent"
          />
          <WorldCard
            href="/personal"
            eyebrow="Personal Life"
            title="The explorer"
            body="Coffee, photography, hikes, and the places I've called home — with an interactive map."
            tone="accent-2"
          />
        </div>
      </Section>

      {/* About preview */}
      <Section className="border-t border-border">
        <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="About" title="A little about me" />
            <p className="max-w-2xl text-base leading-relaxed text-muted">
              I&apos;m a Software Engineer at Amazon, building and scaling backend
              systems. Before this I worked at Clairvoyant Intelligence and
              Amdocs, and earned my Master&apos;s in Computer Science from the
              University of Rochester. I have a soft spot for distributed systems,
              clean design, and backend engineering. Outside work, I&apos;m usually
              chasing a good pour-over or planning the next trail.
            </p>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
              >
                Read more about me <FiArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function WorldCard({
  href,
  eyebrow,
  title,
  body,
  tone,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  tone: "accent" | "accent-2";
}) {
  const ring = tone === "accent" ? "hover:border-accent" : "hover:border-accent-2";
  const label = tone === "accent" ? "text-accent" : "text-accent-2";
  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-surface p-7 transition-all hover:-translate-y-1 hover:shadow-lg ${ring}`}
    >
      <div>
        <p className={`mb-2 font-mono text-xs uppercase tracking-widest ${label}`}>
          {eyebrow}
        </p>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{body}</p>
      </div>
      <span
        className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${label}`}
      >
        Enter{" "}
        <FiArrowRight className="transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
