import { socials, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-border bg-surface/50">
      <Container className="flex flex-col items-center gap-6 py-10 sm:flex-row sm:justify-between">
        <p className="text-sm text-muted">
          © {year} {site.name}. All rights reserved.
        </p>
        <ul className="flex items-center gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border bg-background text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={18} />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}
