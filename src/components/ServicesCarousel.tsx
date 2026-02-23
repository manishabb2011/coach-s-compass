import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useIsMobile } from "@/hooks/use-mobile";

import cardExecutive from "@/assets/card-executive.jpg";
import cardLeadership from "@/assets/card-leadership.jpg";
import cardCareer from "@/assets/card-career.jpg";
import cardTeam from "@/assets/card-team.jpg";
import cardWellness from "@/assets/card-wellness.jpeg";
import cardStrategy from "@/assets/card-strategy.jpg";

const services = [
  {
    image: cardExecutive,
    title: "Career Coaching",
    description: "For undergraduate, postgraduate and final-year students seeking clarity in choosing their career direction and next steps.",
    tooltip: "Get clarity on your career path. We help you move past decision paralysis by mapping your strengths and building a concrete action plan for your next steps.",
  },
  {
    image: cardLeadership,
    title: "Career Transition Program",
    description: "For professionals navigating redundancy, career shifts, or major professional change who need structured clarity and direction.",
    tooltip: "Navigate redundancy or career shifts with confidence. This program provides a structured audit of your skills and a strategy to reposition yourself for your next big role.",
  },
  {
    image: cardCareer,
    title: "Leadership Support Coaching (On Demand)",
    description: "For professionals facing urgent team challenges or difficult decisions who need immediate, structured guidance.",
    tooltip: "Fast-track your way through a leadership crisis or a tough decision. A high-impact, 45-minute session designed to give you immediate clarity and a summary of your best move.",
  },
  {
    image: cardTeam,
    title: "Leadership Clarity Program",
    description: "For first-time and mid-level managers in growing organisations who want to strengthen their leadership capability and improve team performance.",
    tooltip: "Move from reactive to creative leadership. With our data-driven approach, we’ll help you bridge delegation gaps and boost team productivity through our structured sessions.",
  },
  {
    image: cardWellness,
    title: "Leadership Circle® Individual Profile",
    description: "For senior leaders, executives and directors seeking deeper insight into their leadership patterns and impact.",
    tooltip: "Reveal the underlying patterns shaping your leadership. The Leadership Circle Profile® offers a clear snapshot of how your behaviours and mindset either strengthen or limit your impact, followed by an expert debrief to turn insight into intentional action.",
  },
  {
    image: cardStrategy,
    title: "Collective Leadership Assessment (CLA) for Teams ",
    description: "For leadership teams in organisations with 50+ employees looking to improve alignment, collaboration and collective effectiveness.",
    tooltip: `Break down silos and fix culture drift by aligning your leadership team. This assessment provides a robust view of your current versus desired collective effectiveness, instantly revealing the "gap" and providing a clear roadmap for development and integration through targeted coaching.`,
  },
];

const ServicesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [openPopupIndex, setOpenPopupIndex] = useState<number | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenPopupIndex(null);
    };
    if (openPopupIndex !== null) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [openPopupIndex]);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
    setTimeout(checkScroll, 400);
  };

  return (
    <section id="services" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          How We <span className="text-gradient-gold">Work</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
           Grounded in clarity-led, reflective coaching -creating space 
for insight, pattern awareness, and intentional transformation.
        </p>

        <div className="relative">
          {canScrollLeft && (
            <button
              onClick={() => scroll("left")}
              className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex flex-col gap-6 md:flex-row md:overflow-x-auto md:scrollbar-hide md:snap-x md:snap-mandatory md:pb-4 md:px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((s, i) => {
              const card = (
                <div
                  key={i}
                  className="w-full md:min-w-[300px] md:max-w-[300px] md:snap-start bg-gradient-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:gold-border-glow group cursor-pointer flex-shrink-0"
                  onClick={isMobile ? () => setOpenPopupIndex(i) : undefined}
                  role={isMobile ? "button" : undefined}
                  tabIndex={isMobile ? 0 : undefined}
                  onKeyDown={isMobile ? (e) => e.key === "Enter" && setOpenPopupIndex(i) : undefined}
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-display font-semibold mb-2 text-foreground">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </div>
                </div>
              );
              if (isMobile) {
                return card;
              }
              return (
                <Tooltip key={i}>
                  <TooltipTrigger asChild>{card}</TooltipTrigger>
                  <TooltipContent side="bottom" className="max-w-xs bg-secondary text-secondary-foreground border-border p-4">
                    <p className="text-sm leading-relaxed">{s.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </div>

          {isMobile && openPopupIndex !== null && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 animate-in fade-in-0"
              onClick={() => setOpenPopupIndex(null)}
              role="button"
              tabIndex={0}
              aria-label="Close"
              onKeyDown={(e) => e.key === "Escape" && setOpenPopupIndex(null)}
            >
              <div
                className="max-w-sm w-full bg-secondary text-secondary-foreground border border-border rounded-lg p-5 shadow-lg animate-in zoom-in-95 fade-in-0"
                onClick={(e) => e.stopPropagation()}
              >
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {services[openPopupIndex].title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {services[openPopupIndex].tooltip}
                </p>
                <p className="mt-3 text-xs text-muted-foreground">Tap outside to close</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
