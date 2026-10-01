import { ArrowRight, MessageCircle } from "lucide-react";
import JoinCircleVisuals from "@/components/JoinCircleVisuals";
import { WHATSAPP_GROUP_URL, joinCircleButtonClass } from "@/lib/circle";

const JoinCircleSection = () => {
  return (
    <section id="join-the-circle" className="relative overflow-hidden bg-gradient-navy py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-1/2 size-[min(90vw,42rem)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary/10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto max-w-6xl rounded-2xl border border-border/40 bg-gradient-card p-8 gold-border-glow md:p-10 lg:p-12">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-8 lg:gap-10">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
              <span className="size-1.5 rounded-full bg-primary shadow-[0_0_12px_hsl(160_70%_45%_/_0.8)]" />
              A WhatsApp community for intentional leaders
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.08] md:text-5xl">
              Find your people.
              <br />
              <span className="text-gradient-gold">Lead with clarity.</span>
            </h2>
            <p className="mt-7 text-lg leading-relaxed text-muted-foreground md:text-xl">
              Join <strong className="font-semibold text-foreground">The LeadNorth Circle ⭐</strong> — a thoughtful
              space for professionals, managers, founders, and emerging leaders who want to grow without losing their
              human edge.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              Scan the QR code with your phone, or tap below to open the group in WhatsApp.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a href={WHATSAPP_GROUP_URL} target="_blank" rel="noopener noreferrer" className={joinCircleButtonClass}>
                <MessageCircle className="size-5" aria-hidden="true" />
                Join the Circle
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
              <span className="text-sm text-muted-foreground">Free to join · Meaningful by design</span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground">
              Come curious. Leave every conversation with a clearer next step.
            </p>
          </div>

          <JoinCircleVisuals />
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinCircleSection;
