import Link from "next/link";
import { navLinks } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 py-8">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-2 px-4 sm:px-6 lg:px-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-full border border-border/60 bg-card/70 px-4 py-2 text-sm text-muted-foreground transition hover:bg-accent hover:text-accent-foreground"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
