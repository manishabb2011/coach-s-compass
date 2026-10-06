import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  FREE_MASTERCLASS_REGISTER_URL,
  SILVER_CHECKOUT_URL,
  WHATSAPP_GROUP_URL,
  journeySteps,
} from "@/lib/programs";

const ctaBase =
  "inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:bg-gold-glow gold-border-glow";

const ProgramsSection = () => {
  return (
    <section id="programs" className="scroll-mt-28 py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Your Leadership <span className="text-gradient-gold">Journey</span>
        </h2>
        <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
          Start free. Build your leadership foundation. Master leadership through real-world challenges.
        </p>

        <nav
          aria-label="Leadership journey path"
          className="mx-auto mb-14 flex max-w-4xl flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center text-xs font-medium uppercase tracking-wide text-muted-foreground sm:text-sm"
        >
          {journeySteps.map((step, i) => (
            <span key={step.label} className="inline-flex items-center gap-2">
              {i > 0 && <span className="hidden text-primary/50 sm:inline" aria-hidden="true">→</span>}
              {step.href.startsWith("/") ? (
                <Link to={step.href} className="transition-colors hover:text-primary">
                  {step.label}
                </Link>
              ) : (
                <a href={step.href} className="transition-colors hover:text-primary">
                  {step.label}
                </a>
              )}
            </span>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-3 max-w-6xl mx-auto">
          {/* FREE */}
          <article className="flex flex-col rounded-xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-primary/40 hover:gold-border-glow">
            <p className="eyebrow text-primary">FREE</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Human Edge Leadership Masterclass
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">Discover / Build Trust</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              A free leadership masterclass for professionals and first-time managers who want to understand what it
              really takes to lead people effectively in an AI-driven world.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/80">What you get</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground flex-1">
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Free 90 min leadership webinar
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Free access to the Human Edge Leadership Masterclass
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Practical leadership insights and frameworks
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Invitation to the LeadNorth WhatsApp community for updates, mini-challenges and further learning
              </li>
            </ul>
            <a
              href={FREE_MASTERCLASS_REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} mt-8`}
            >
              Reserve My Free Seat
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>

          {/* SILVER */}
          <article className="flex flex-col rounded-xl border border-border bg-gradient-card p-8 transition-all duration-300 hover:border-primary/40 hover:gold-border-glow">
            <p className="eyebrow text-primary">SILVER</p>
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Human Edge Leadership Foundation
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">Learn + Apply</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              For first-time managers, emerging leaders and professionals.
            </p>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/80">Core programme</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Human Edge Leadership Foundation, a 3-day self-paced core course
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Six Blueprints: Inner Compass, Clear Mind, Leadership Authority, Human Connection, Adaptive Edge,
                Purpose & Impact
              </li>
            </ul>
            <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/80">Also included</p>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground flex-1">
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Weekly group coaching call
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                All 6 Blueprint bonus courses
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Leadership resources and templates
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                LeadNorth leadership community access
              </li>
              <li className="flex gap-2">
                <span className="text-primary">·</span>
                Certificate
              </li>
            </ul>
            <a
              href={SILVER_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`${ctaBase} mt-6`}
            >
              Join Foundation Program
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </article>

          {/* DIAMOND */}
          <article className="relative flex flex-col rounded-xl border-2 border-primary/55 bg-gradient-card p-8 shadow-[0_0_40px_hsl(160_70%_45%_/_0.22)] gold-border-glow transition-all duration-300 hover:border-primary/80 hover:shadow-[0_0_48px_hsl(160_70%_45%_/_0.32)] lg:scale-[1.03] lg:z-10">
            <div className="pointer-events-none absolute inset-0 rounded-xl bg-accent-gradient opacity-[0.12]" aria-hidden="true" />
            <div className="relative flex flex-col flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <p className="eyebrow text-primary">DIAMOND</p>
                <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-primary">
                  Premium
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                Human Edge Leadership Mastermind
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">Master + Transform</p>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                A 6-month small-group mastermind for experienced managers, leaders, business owners and high-potential
                professionals who want deeper coaching, accountability, peer learning and individual support.
              </p>
              <p className="mt-5 text-xs font-semibold uppercase tracking-wide text-foreground/80">Core experience</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground flex-1">
                {[
                  "All in Silver plus",
                  "Small cohort of leaders",
                  "Live mastermind calls every month",
                  "Private coaching session every month",
                  "Deep-dive leadership retreats",
                  "Leadership / 360 assessment",
                  "Personal Leadership Blueprint",
                  "Leadership tools and resources",
                  "Continued LeadNorth community access",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-primary">·</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={WHATSAPP_GROUP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`${ctaBase} mt-8`}
              >
                Enquire About Mastermind
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
