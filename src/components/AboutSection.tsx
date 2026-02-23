import coachImg from "@/assets/coach-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        {/* Vision & Mission */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-12">
            Our <span className="text-gradient-gold">Purpose</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We see a world where leaders and organisations operate from purpose, clarity, and conscious choice.
                Our focus is on leadership reorientation, transforming thinking patterns so leaders can respond intentionally
                rather than react automatically.
              </p>
            </div>
            <div className="bg-gradient-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                We support individuals and organisations in creating meaningful shifts in thinking so they can
                make clearer decisions, lead with purpose, and grow with intention. We don't do generic development.
                We create lasting, transformational change — from the inside out.
              </p>
            </div>
          </div>
        </div>

        {/* Meet Vandana */}
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 gold-border-glow flex-shrink-0">
            <img
              src={coachImg}
              alt="Vandana Sharma - Founder of LeadNorth Consulting"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Meet <span className="text-gradient-gold">Vandana Sharma</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            Vandana is a passionate advocate for clarity-led, reflective leadership. With over a decade of experience across HR, strategic talent partnering, and organisational transition, she brings a rare combination of organisational insight and deep coaching expertise to her work.
            She spent years working closely with leaders, managers, and teams during periods of significant change, including organisational wind-downs and outplacement, supporting professionals through redundancy, role transitions, and high-pressure decision-making. It was this work that revealed a clear pattern: the leaders who navigated complexity best weren't the most skilled or experienced; they were the most self-aware.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
            She holds a Professional Diploma in Individual, Executive, and Business Coaching and is a certified Leadership Circle Profile (LCP) and Collective Leadership Assessment (CLA) Practitioner. She integrates structured assessments with reflective coaching to help clients notice patterns, build self-trust, and align their leadership with their values and long-term direction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
            Her approach is calm, structured, and insight-driven. It's about creating space for clarity and insight, enabling leaders to make decisions that align with their values, purpose, and goals. Confidence, productivity, and stronger decisions follow naturally from that shift.
            Vandana works with emerging leaders, professionals in transition, and global clients seeking thoughtful, grounded leadership development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
