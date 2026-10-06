import { useState } from "react";
import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import Footer from "@/components/Footer";

export const REGISTER_URL = "https://tagmango.app/97c976eaa8";

const nav = [
  { href: "/masterclass#secrets", label: "The 3 Secrets" },
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
            <li className="pt-2">
              <CtaButton className="w-full justify-center py-3" />
            </li>
          </ul>
        </div>
      )}
    </header>
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
      <Footer />
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
    <section id={id} className={`${tones[tone]} scroll-mt-28 ${className}`}>
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
