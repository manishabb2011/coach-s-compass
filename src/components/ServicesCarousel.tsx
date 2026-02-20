import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import cardExecutive from "@/assets/card-executive.jpg";
import cardLeadership from "@/assets/card-leadership.jpg";
import cardCareer from "@/assets/card-career.jpg";
import cardTeam from "@/assets/card-team.jpg";
import cardWellness from "@/assets/card-wellness.jpg";
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
    tooltip: "Break down silos and fix culture drift. This assessment aligns your leadership team, improving collective effectiveness through Assessment and coaching sessions. The CLA is a robust view of where employees view current collective leadership effectiveness compared to the desired collective effectiveness. The “gap” in collective effectiveness, between current and desired, instantly reveals opportunities for development, targeted workshops and a roadmap for integration.",
  },
];

const ServicesCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-secondary/80 backdrop-blur-sm p-2 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4 px-2"
            style={{ scrollbarWidth: "none" }}
          >
            {services.map((s, i) => (
              <Tooltip key={i}>
                <TooltipTrigger asChild>
                  <div className="min-w-[300px] max-w-[300px] snap-start bg-gradient-card rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:gold-border-glow group cursor-pointer flex-shrink-0">
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
                </TooltipTrigger>
                <TooltipContent side="bottom" className="max-w-xs bg-secondary text-secondary-foreground border-border p-4">
                  <p className="text-sm leading-relaxed">{s.tooltip}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
