import { useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

export const REGISTER_URL = "https://tagmango.app/97c976eaa8";

const nav = [
  { href: "/masterclass#secrets", label: "The 3 Secrets" },
  { href: "/masterclass#host", label: "Your Host" },
  { href: "/masterclass#impact", label: "Impact" },
  { href: "/masterclass#faq", label: "FAQ" },
] as const;

const navLinkClass =
  "text-foreground/80 hover:text-primary transition-colors text-sm font-medium tracking-wide uppercase";

export function CtaButton({
  children = "Reserve My Free Seat",
  variant = "accent",
  className = "",
}: {
  children?: ReactNode;
  variant?: "accent" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-7 py-3.5 font-semibold text-sm uppercase tracking-wider transition-all duration-300";
  const styles =
    variant === "accent"
      ? "bg-primary text-primary-foreground hover:bg-gold-glow hover:-translate-y-0.5 gold-border-glow"
      : "border border-border text-foreground hover:border-primary hover:text-primary";
  return (
    <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

function MasterclassHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/30 bg-background/95 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-6 py-3">
        <Link to="/" className="flex shrink-0 items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="LeadNorth Consulting" className="h-11 w-auto mix-blend-screen" />
          <span className="font-display text-xl font-bold text-foreground leading-tight">
            LeadNorth <span className="text-gradient-gold">Consulting</span>
          </span>
        </Link>

        <nav className="ml-auto hidden items-center gap-6 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
          <Link to="/masterclass/speaking" className={navLinkClass}>
            Speaking & Press
          </Link>
          <Link to="/" className={navLinkClass}>
            Main site
          </Link>
        </nav>

        <CtaButton className="hidden shrink-0 px-5 py-2.5 text-xs lg:inline-flex">Reserve Free Seat</CtaButton>

        <button
          type="button"
          className="lg:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/30 bg-background/98 lg:hidden">
          <ul className="container mx-auto flex flex-col gap-3 px-6 py-4">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={navLinkClass} onClick={() => setMobileOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/masterclass/speaking" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                Speaking & Press
              </Link>
            </li>
            <li>
              <Link to="/" className={navLinkClass} onClick={() => setMobileOpen(false)}>
                Main site
              </Link>
            </li>
            <li className="pt-2">
              <CtaButton className="w-full justify-center py-3" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function MasterclassFooter() {
  return (
    <footer className="border-t border-border bg-gradient-navy py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <img src={logo} alt="LeadNorth Consulting" className="h-12 w-auto mix-blend-screen" />
            <p className="mt-4 font-display text-xl text-foreground">Transform how you lead.</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Human Edge Leadership Masterclass — build the leadership AI can't replace.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <p className="eyebrow text-primary">Explore</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="transition-colors hover:text-primary">
                      {item.label}
                    </a>
                  </li>
                ))}
                <li>
                  <Link to="/masterclass/speaking" className="transition-colors hover:text-primary">
                    Speaking & Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="eyebrow text-primary">Connect</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link to="/" className="transition-colors hover:text-primary">
                    Main website
                  </Link>
                </li>
                <li>
                  <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-primary">
                    Register for the masterclass
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="mt-10 border-t border-border/40 pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} LeadNorth Consulting. Founded by Vandana Sharma.
        </p>
      </div>
    </footer>
  );
}

export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden">
      <CtaButton className="w-full justify-center py-3.5" />
    </div>
  );
}

export function MasterclassPageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <MasterclassHeader />
      <main className="pb-24 lg:pb-0">{children}</main>
      <MasterclassFooter />
      <MobileCtaBar />
    </div>
  );
}

export function Section({
  children,
  tone = "light",
  className = "",
  id,
}: {
  children: ReactNode;
  tone?: "light" | "grey" | "navy";
  className?: string;
  id?: string;
}) {
  const tones = {
    light: "bg-background",
    grey: "bg-navy-medium",
    navy: "bg-gradient-navy",
  };
  return (
    <section id={id} className={`${tones[tone]} ${className}`}>
      <div className="container mx-auto max-w-6xl px-6 py-20 md:py-28">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  sub,
  align = "center",
  invert = false,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  align?: "center" | "left";
  invert?: boolean;
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className={`eyebrow ${invert ? "text-primary" : "text-primary"}`}>{eyebrow}</p>}
      <h2 className="mt-3 font-display text-3xl font-bold leading-[1.15] md:text-[2.6rem]">{title}</h2>
      {sub && (
        <p className={`mt-4 text-base md:text-lg ${invert ? "text-muted-foreground" : "text-muted-foreground"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}
