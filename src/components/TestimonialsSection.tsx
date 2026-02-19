import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "VP of Operations, TechCorp",
    quote: "Working with Elevate Coaching transformed my leadership style. I went from managing tasks to inspiring teams. The results speak for themselves — our team productivity increased by 40%.",
  },
  {
    name: "James Rodriguez",
    role: "Founder & CEO, GreenPath",
    quote: "The career transition coaching gave me the clarity and confidence I needed to launch my own company. I couldn't have done it without this incredible guidance and support.",
  },
  {
    name: "Emily Chen",
    role: "Director of HR, Innovate Inc.",
    quote: "The team coaching sessions were a game-changer for our organization. Communication improved, conflicts reduced, and we finally started working as a truly cohesive unit.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Client <span className="text-gradient-gold">Testimonials</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Hear from leaders who have transformed their careers and lives.
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
