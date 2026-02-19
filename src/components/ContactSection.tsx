import { useState } from "react";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Get in <span className="text-gradient-gold">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14">
          Ready to start your transformation? Let's talk.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email</label>
            <input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Message</label>
            <textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-card border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none"
              placeholder="Tell us about your goals..."
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-colors flex items-center justify-center gap-2"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
