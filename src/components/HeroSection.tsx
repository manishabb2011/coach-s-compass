import heroImg from "@/assets/hero-coaching.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Professional coaching services"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-foreground leading-tight">
          Unlock Your <span className="text-gradient-gold">Full Potential</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
          Transform your leadership, career, and life with personalized coaching
          that delivers lasting results.
        </p>
        <a
          href="#services"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-colors"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
