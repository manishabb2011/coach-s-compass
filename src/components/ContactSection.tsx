import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

const CONTACT_EMAIL = "vandana.sharma@leadnorthconsulting.com";
const OnWebsite_EMAIL = "enquiries@leadnorthconsulting.com";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEl = e.currentTarget;

    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    const nextErrors: { name?: string; email?: string; message?: string } = {};
    if (!name) nextErrors.name = "Please enter your name.";
    if (!email) nextErrors.email = "Please enter your email.";
    else if (!EMAIL_REGEX.test(email)) nextErrors.email = "Please enter a valid email address.";
    if (!message) nextErrors.message = "Please enter a message.";
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    const payload = {
      name,
      email,
      message,
      _subject: "New Contact Form Submission",
      _captcha: "false",
    };

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setErrors({});
        formEl.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          Get in <span className="text-gradient-gold">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14">
          Ready to move from reaction to clarity? Let's start the conversation.
        </p>

        {status === "success" ? (
          <div className="bg-card border border-border rounded-lg px-6 py-12 text-center">
            <CheckCircle className="w-14 h-14 text-primary mx-auto mb-4" strokeWidth={1.5} />
            <h3 className="text-xl font-display font-semibold text-foreground mb-2">
              Message sent
            </h3>
            <p className="text-muted-foreground">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-medium text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring rounded"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <input type="text" name="_honey" style={{ display: "none" }} aria-hidden="true" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={(e) => {
                  setForm((f) => ({ ...f, name: e.target.value }));
                  if (errors.name) setErrors((e) => ({ ...e, name: undefined }));
                }}
                disabled={status === "sending"}
                className={`w-full bg-card border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all disabled:opacity-60 ${errors.name ? "border-destructive focus:ring-destructive" : "border-border"}`}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
              />
              {errors.name && (
                <p id="name-error" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={(e) => {
                  setForm((f) => ({ ...f, email: e.target.value }));
                  if (errors.email) setErrors((e) => ({ ...e, email: undefined }));
                }}
                disabled={status === "sending"}
                className={`w-full bg-card border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all disabled:opacity-60 ${errors.email ? "border-destructive focus:ring-destructive" : "border-border"}`}
                placeholder="your@email.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
              {errors.email && (
                <p id="email-error" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(e) => {
                  setForm((f) => ({ ...f, message: e.target.value }));
                  if (errors.message) setErrors((e) => ({ ...e, message: undefined }));
                }}
                disabled={status === "sending"}
                className={`w-full bg-card border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all resize-none disabled:opacity-60 ${errors.message ? "border-destructive focus:ring-destructive" : "border-border"}`}
                placeholder="Tell us about your leadership goals..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-sm text-destructive" role="alert">
                  {errors.message}
                </p>
              )}
            </div>

            {status === "error" && (
              <p className="text-sm text-destructive">
                Something went wrong. Please try again or email us directly.
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-primary text-primary-foreground py-4 rounded-lg font-semibold text-sm uppercase tracking-wider hover:bg-gold-glow transition-colors flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Prefer email? Write to us at{" "}
                <a
                  href={`mailto:${OnWebsite_EMAIL}`}
                  className="text-muted-foreground hover:text-foreground transition-colors underline underline-offset-2"
                >
                  {OnWebsite_EMAIL}
                </a>
              </p>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection;
