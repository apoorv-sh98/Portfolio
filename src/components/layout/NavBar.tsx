"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { professionalNav, personalHref } from "@/lib/site";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `text-sm font-medium transition-colors ${
      isActive(href) ? "text-accent" : "text-muted hover:text-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image src="/assets/logo.svg" alt="" width={40} height={40} priority />
          <span className="hidden text-base font-bold tracking-tight sm:block">
            Apoorv Sharma
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 md:flex">
          {professionalNav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass(item.href)}>
              {item.label}
            </Link>
          ))}
          <Link
            href={personalHref}
            className={`rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors ${
              isActive(personalHref)
                ? "border-accent-2 text-accent-2"
                : "border-border text-foreground hover:border-accent-2 hover:text-accent-2"
            }`}
          >
            Personal Life
          </Link>
          <ThemeToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid h-9 w-9 place-items-center rounded-full border border-border bg-surface"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1 px-4 py-4 sm:px-6">
            {professionalNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2 text-base ${
                  isActive(item.href)
                    ? "bg-surface text-accent"
                    : "text-foreground hover:bg-surface"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={personalHref}
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg px-3 py-2 text-base font-semibold text-accent-2 hover:bg-surface"
            >
              Personal Life
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
