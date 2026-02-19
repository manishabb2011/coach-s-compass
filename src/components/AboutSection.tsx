import coachImg from "@/assets/coach-portrait.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-navy">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-primary/30 gold-border-glow flex-shrink-0">
            <img
              src={coachImg}
              alt="Coach Sarah Thompson"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              About <span className="text-gradient-gold">the Coach</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Sarah Thompson is an ICF-certified executive coach with over 15 years of experience
              helping leaders and organizations achieve breakthrough results. After a distinguished
              career in Fortune 500 leadership, she founded Elevate Coaching to make transformative
              coaching accessible to professionals at every stage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Her approach blends evidence-based methodologies with deep empathy, creating a safe
              yet challenging space for growth. Sarah has coached over 500 leaders across 20
              industries and holds certifications in positive psychology, team dynamics, and
              organizational development.
            </p>
            <div className="flex gap-8">
              <div>
                <p className="text-3xl font-display font-bold text-primary">500+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Leaders Coached</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">15+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-display font-bold text-primary">98%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
