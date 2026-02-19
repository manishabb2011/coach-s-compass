import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Senior Leadership Team",
    role: "Global Technology Firm",
    quote: "Working with LeadNorth transformed how our leadership team operates. We moved from reactive decision-making to intentional, values-driven leadership. The shift was profound and lasting.",
  },
  {
    name: "Programme Participant",
    role: "Career Transition Coaching",
    quote: "Vandana's coaching gave me the clarity to see the patterns driving my decisions. For the first time, I felt genuinely in control of my career direction — not just responding to what came at me.",
  },
  {
    name: "HR Director",
    role: "Financial Services Organisation",
    quote: "The mind shift approach is unlike any development programme we've used before. It created real, sustainable change in how our managers lead — not just new techniques, but a fundamentally different way of thinking.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          What Leaders <span className="text-gradient-gold">Say</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Hear from leaders who have experienced the shift from reaction to intentional leadership.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
            >
              <Quote className="text-primary mb-4 flex-shrink-0" size={28} />
              <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-1 italic">
                "{t.quote}"
              </p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
