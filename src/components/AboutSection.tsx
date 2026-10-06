import VandanaHostIntro from "@/components/VandanaHostIntro";

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
                To build a generation of leaders who don't pass their unhealthy patterns on to the people they lead.
              </p>
            </div>
            <div className="bg-gradient-card rounded-xl p-8 border border-border">
              <h3 className="text-xl font-display font-semibold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                Help people lead themselves better, so they can lead others better.
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <VandanaHostIntro />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
