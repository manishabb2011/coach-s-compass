import { Eye, Lightbulb, Target } from "lucide-react";

const values = [
  {
    icon: Lightbulb,
    title: "Clarity",
    description:
      "When you can see clearly what's driving your thinking, you're no longer locked into default responses. You start to see options that were always there but invisible to you. That's not a small shift — that's the foundation everything else is built on.",
  },
  {
    icon: Target,
    title: "Choice",
    description:
      "Clarity without action is just awareness. But when you pair that clarity with a genuine choice — a decision that aligns with your values and purpose — action follows naturally. Not forced. Not anxious. Intentional.",
  },
  {
    icon: Eye,
    title: "Presence",
    description:
      "Clarity and choice don't happen in the noise. They happen when you pause. When you step back from the immediate demands and create space to actually think, feel, and decide. Presence isn't a luxury in leadership — it's the skill that holds everything else together.",
  },
];

const ValuesSection = () => {
  return (
    <section id="values" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Our <span className="text-gradient-gold">Values</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto">
          Clarity creates choice. Choice creates action. These are the principles that shape how we work,
          how we coach, and how we show up — every single day.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {values.map((v, i) => (
            <div
              key={i}
              className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <v.icon className="text-primary" size={28} />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-4">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
