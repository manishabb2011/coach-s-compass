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
    title: "Mind Shift Coaching",
    description: "Uncover what's beneath your habits and develop clarity of thought for intentional leadership.",
    tooltip: "Our signature coaching approach helps leaders notice the mental and emotional patterns that influence their choices, enabling them to respond with awareness and responsibility rather than react automatically.",
  },
  {
    image: cardLeadership,
    title: "Leadership Development",
    description: "Build confident, self-aware leaders who navigate complexity with purpose.",
    tooltip: "A transformational program that goes beyond skills and techniques — developing the mindset and awareness needed to pause, reflect, and choose intentionally at every level of leadership.",
  },
  {
    image: cardCareer,
    title: "Career Transition",
    description: "Navigate career changes with clarity, confidence, and intentional direction.",
    tooltip: "Whether you're a university student, early in your career, or pivoting roles — we help you notice the patterns shaping your decisions so you can move forward with purpose and self-trust.",
  },
  {
    image: cardTeam,
    title: "Team Coaching",
    description: "Foster collaboration, trust, and conscious communication within teams.",
    tooltip: "We work with teams to build trust, resolve conflicts, and create alignment — helping every member operate from purpose and conscious choice rather than habitual reaction.",
  },
  {
    image: cardWellness,
    title: "Executive Presence",
    description: "Cultivate the ability to act with awareness, presence, and responsibility.",
    tooltip: "Develop the presence that makes clarity and choice possible — learning to step back from immediate demands and create space to think, feel, and decide with confidence.",
  },
  {
    image: cardStrategy,
    title: "Organisational Consulting",
    description: "Create lasting, transformational change across your organisation — from the inside out.",
    tooltip: "We partner with organisations to create meaningful shifts in thinking at every level, enabling clearer decisions, purposeful leadership, and growth with intention.",
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
          Grounded in mind shift-driven coaching — creating space for insight, reflection, and transformation.
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
