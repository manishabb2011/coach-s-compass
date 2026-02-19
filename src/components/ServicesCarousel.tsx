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
    title: "Executive Coaching",
    description: "Personalized 1-on-1 sessions for senior leaders seeking peak performance.",
    tooltip: "Our executive coaching program helps C-suite leaders and senior managers develop strategic thinking, emotional intelligence, and decisive leadership skills through tailored sessions.",
  },
  {
    image: cardLeadership,
    title: "Leadership Development",
    description: "Build confident, inspiring leaders at every level of your organization.",
    tooltip: "A comprehensive program combining workshops, assessments, and ongoing mentorship to cultivate next-generation leaders who drive results and inspire teams.",
  },
  {
    image: cardCareer,
    title: "Career Transition",
    description: "Navigate career changes with clarity, confidence, and a strategic plan.",
    tooltip: "Whether you're pivoting industries or climbing the ladder, our career transition coaching provides clarity, actionable strategies, and the confidence to make bold moves.",
  },
  {
    image: cardTeam,
    title: "Team Coaching",
    description: "Strengthen collaboration, communication, and team dynamics.",
    tooltip: "Unlock your team's potential through facilitated sessions that improve trust, resolve conflicts, and align everyone around shared goals for maximum impact.",
  },
  {
    image: cardWellness,
    title: "Wellness & Balance",
    description: "Achieve sustainable success without sacrificing your well-being.",
    tooltip: "Integrating mindfulness, stress management, and work-life integration strategies so you can perform at your best while maintaining health and happiness.",
  },
  {
    image: cardStrategy,
    title: "Business Strategy",
    description: "Clarify your vision and build a roadmap for sustainable growth.",
    tooltip: "Partner with an experienced strategist to define your business vision, set measurable goals, and create an actionable roadmap that drives sustainable, scalable growth.",
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
          Our <span className="text-gradient-gold">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Tailored coaching solutions designed to meet you where you are and take you where you want to go.
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
