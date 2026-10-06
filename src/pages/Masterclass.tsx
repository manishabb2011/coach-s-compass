import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MasterclassSpeakingSection from "@/components/masterclass/MasterclassSpeakingSection";
import { Check, Compass, Heart, Lightbulb, Minus, Repeat, Sparkles, Target } from "lucide-react";
import {
  CtaButton,
  MasterclassPageShell,
  REGISTER_URL,
  Section,
  SectionHeading,
} from "@/components/masterclass/MasterclassLayout";
import banner from "@/assets/masterclass/webinar-banner-new.png";
import vandana from "@/assets/masterclass/vandana.png";
import cokarmaSpeaking from "@/assets/masterclass/cokarma-speaking.jpg";
import cokarmaGroup from "@/assets/masterclass/cokarma-group.jpg";
import cokarmaCollage from "@/assets/masterclass/cokarma-collage.jpg";
import alumniEdge from "@/assets/masterclass/alumni-edge-poster.jpg";
import powerScarf from "@/assets/masterclass/power-scarf.jpg";

const impactShots = [
  {
    src: cokarmaSpeaking,
    alt: "Vandana Sharma speaking on stage at a CoKarma leadership event",
    tag: "CoKarma",
    title: "Speaking on human leadership",
  },
  {
    src: cokarmaGroup,
    alt: "Vandana Sharma with participants after a CoKarma leadership session",
    tag: "Workshops",
    title: "In the room with leaders",
  },
  {
    src: powerScarf,
    alt: "Power Scarf Awards event featuring Vandana Sharma",
    tag: "Hatke · Power Scarf Awards",
    title: "Recognised on stage",
  },
  {
    src: alumniEdge,
    alt: "Vandana Sharma on the Alumni Edge podcast",
    tag: "Alumni Edge Podcast",
    title: "Conversations on leading better",
  },
  {
    src: cokarmaCollage,
    alt: "Collage of Vandana Sharma at coaching and speaking events",
    tag: "Coaching & training",
    title: "Hundreds of leadership conversations",
  },
];

const problems = [
  "Highly capable — but still struggling to influence people.",
  "Know what to do — but hesitate when decisions get difficult.",
  "Manage tasks well — but struggle to truly lead people.",
  "Have expertise — but lack confidence in how you show up.",
  "Communicate — but still meet misunderstanding or resistance.",
  "Learning AI — but overlooking the human capabilities that make you valuable.",
];

const aiCan = ["Analyse information", "Generate ideas", "Automate tasks", "Make recommendations", "Execute faster"];
const humansDecide = [
  "What matters?",
  "What should we do?",
  "What do I stand for?",
  "Who needs to be brought with us?",
  "What am I willing to own?",
  "What impact do I want to create?",
];

const secrets = [
  {
    n: "Secret 01",
    title: "The Invisible Leadership Gap",
    lede: "Why your biggest leadership challenge may be something you can't see.",
    body: "Underneath the visible behaviour are deeper patterns: Triggers → Reactions → Habits → Leadership Behaviour.",
    learn: [
      "Why self-awareness is the foundation of intentional leadership.",
      "How automatic patterns influence the way you lead.",
      "How your values and identity change your leadership.",
    ],
    hook: "You can't intentionally change a leadership pattern you haven't learned to see.",
  },
  {
    n: "Secret 02",
    title: "The Judgment Advantage",
    lede: "Why AI giving you more answers makes human judgment more important — not less.",
    body: "AI can give you information. Leaders still have to determine what to do with it.",
    learn: [
      "How to separate facts from assumptions.",
      "How to challenge your own thinking.",
      "Why credibility depends on judgment and ownership.",
    ],
    hook: "AI can give you an answer. Leadership determines whether it's the right answer.",
  },
  {
    n: "Secret 03",
    title: "The Human Edge Leadership",
    lede: "Six human leadership capabilities that become more valuable as AI takes over execution.",
    body: "You'll discover the six-part Human Edge Leadership Model — and where your own edge needs strengthening.",
    learn: [
      "Why these capabilities matter in the AI era.",
      "How they work together.",
      "How to start strengthening your own Human Edge Leadership.",
    ],
    hook: "The more AI can do, the more valuable distinctly human leadership becomes.",
  },
];

const humanEdge = [
  { n: "01", title: "Inner Compass", sub: "Know Yourself", Icon: Compass },
  { n: "02", title: "Clear Mind", sub: "Lead With Judgment", Icon: Lightbulb },
  { n: "03", title: "Leadership Authority", sub: "Lead With Influence", Icon: Sparkles },
  { n: "04", title: "Human Connection", sub: "Lead People", Icon: Heart },
  { n: "05", title: "Adaptive Edge", sub: "Lead Through Change", Icon: Repeat },
  { n: "06", title: "Purpose & Impact", sub: "Lead With Purpose", Icon: Target },
];

const forWho = [
  { t: "Professionals", d: "Who want to become more confident, influential and future-ready." },
  { t: "Managers", d: "Who want to move from managing work to genuinely leading people." },
  { t: "Emerging Leaders", d: "Preparing for their next level of responsibility." },
  { t: "Entrepreneurs & Founders", d: "Who know people leadership is critical to growth." },
  { t: "Business Owners", d: "Who want stronger decision-making, influence and adaptability." },
  { t: "Anyone In An AI-Driven Workplace", d: "Who wants to stay relevant without losing their human advantage." },
];

const notFor = [
  "You believe leadership is only about having a title.",
  "You are looking for quick hacks without doing any self-reflection.",
  "You believe technical or AI skills alone will determine your value.",
  "You are unwilling to examine your own leadership patterns.",
];

const walkAway = [
  "Identify the hidden patterns influencing the way you lead.",
  "Understand the difference between managing work and leading people.",
  "Recognise why judgment matters in an AI-powered workplace.",
  "Identify the six Human Edge Leadership capabilities.",
  "See where your own leadership development needs attention.",
  "Identify your first step toward becoming an intentional human leader.",
];

const proof = [
  "15 years of HR, talent & organisational experience",
  "Ireland, the UK & India",
  "ICF-certified coach",
  "Leadership assessment practitioner",
  "Founder, LeadNorth Consulting",
  "Creator of the Human Edge Leadership framework",
];

const agenda = [
  "Why AI is changing what leadership requires.",
  "Managing work vs leading people.",
  "Secret #1 — The Invisible Leadership Gap.",
  "Secret #2 — The Judgment Advantage.",
  "Secret #3 — The Human Edge Leadership.",
  "The six-part Human Edge Leadership Model.",
  "A reflection on where your edge needs strengthening.",
  "Your next step to build stronger human leadership.",
];

const faqs = [
  ["Is the masterclass really free?", "Yes — it's a free live learning experience."],
  ["Do I need to be a manager?", "No. It's for professionals, emerging leaders, managers, entrepreneurs and anyone building stronger leadership."],
  ["Is this an AI training?", "No. You'll learn the human leadership capabilities that matter more as AI changes work."],
  ["Will this be practical?", "Yes. You'll reflect on your own leadership patterns and learn a framework you can apply immediately."],
  ["What happens after?", "You'll have the option to explore Human Leadership Foundations — your Level One pathway step by step."],
];

const Masterclass = () => {
  const [active, setActive] = useState(0);
  const { hash } = useLocation();

  useEffect(() => {
    document.title = "Human Edge Leadership Masterclass | LeadNorth Consulting";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Free live masterclass with Vandana Sharma: discover your inner game of leadership and the three leadership secrets to stay relevant in the AI era.",
      );
    }
  }, []);

  useEffect(() => {
    if (!hash) return;
    const id = hash.replace("#", "");
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    });
  }, [hash]);

  return (
    <MasterclassPageShell>
      <section className="relative overflow-hidden bg-gradient-navy text-foreground">
        <div
          className="pointer-events-none absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full opacity-30 blur-3xl bg-accent-gradient"
        />
        <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-16 md:pt-14 md:pb-20">
          <img
            src={banner}
            alt="Human Edge Leadership Masterclass — a free live masterclass with Vandana Sharma: Build The Human Edge Leadership AI Can't Replace"
            className="w-full rounded-3xl border border-border/15 gold-border-glow"
            loading="eager"
          />
          <div className="mt-10 grid items-center gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div>
              <h1 className="text-3xl leading-[1.1] font-semibold md:text-5xl">
                Build The <span className="text-gradient-gold">Human Edge Leadership</span> AI Can't Replace
              </h1>
              <p className="mt-4 font-display text-lg text-primary">Discover your inner game of leadership.</p>
              <p className="mt-4 max-w-xl text-base text-muted-foreground md:text-lg">
                Explore the Human Edge Leadership Model and learn the three leadership shifts that help you think more
                clearly, lead people more effectively, adapt to change and create meaningful impact in an AI-powered
                world.
              </p>
            </div>
            <div className="card-soft p-7 text-foreground">
              <p className="eyebrow text-primary">Free live masterclass</p>
              <p className="mt-2 font-display text-lg font-semibold">Live online · 90 minutes</p>
              <p className="text-sm text-muted-foreground">Date & time confirmed on registration</p>
              <CtaButton className="mt-5 w-full justify-center px-8 py-4 text-base" />
              <p className="mt-4 text-xs text-muted-foreground">
                No leadership title required. Just bring your curiosity and a real leadership challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section tone="light">
        <SectionHeading
          eyebrow="The real gap"
          title="AI May Be Changing Your Work. But Is It Changing The Way You Lead?"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {problems.map((p) => (
            <div key={p} className="card-soft lift flex gap-4 p-6">
              <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent-gradient" />
              <p className="text-[0.975rem] text-muted-foreground">{p}</p>
            </div>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-primary/25 bg-secondary p-8 text-center">
          <p className="font-display text-xl leading-snug md:text-2xl">
            The future of leadership isn't about becoming more like AI. It's about becoming better at the things that
            make you human.
          </p>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading
          invert
          eyebrow="The big idea"
          title="AI Can Amplify Your Work. Your Human Leadership Determines Your Impact."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border/15 bg-secondary/80 p-8">
            <p className="eyebrow text-muted-foreground">AI can increasingly</p>
            <ul className="mt-5 space-y-3">
              {aiCan.map((a) => (
                <li key={a} className="flex items-center gap-3 text-muted-foreground">
                  <span className="h-px w-6 bg-border" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-8">
            <p className="eyebrow text-primary">But leaders still decide</p>
            <ul className="mt-5 space-y-3">
              {humansDecide.map((a) => (
                <li key={a} className="flex items-center gap-3 font-display text-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section tone="navy" id="secrets">
        <div className="max-w-3xl">
          <p className="eyebrow text-primary">Inside the masterclass</p>
          <h2 className="mt-3 text-3xl font-semibold md:text-5xl">The Three Secrets</h2>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          {secrets.map((s, i) => (
            <button
              key={s.n}
              type="button"
              onClick={() => setActive(i)}
              className={
                active === i
                  ? "rounded-full bg-primary px-6 py-3 font-display text-sm font-semibold text-primary-foreground gold-border-glow"
                  : "rounded-full border border-border bg-secondary/80 px-6 py-3 font-display text-sm font-semibold text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              }
            >
              {s.n} · {s.title}
            </button>
          ))}
        </div>

        <div className="glow-frame mt-8">
          <div className="glass-card grid gap-10 p-8 md:grid-cols-2 md:p-12">
            <div>
              <h3 className="text-2xl font-semibold md:text-3xl">{secrets[active]!.title}</h3>
              <p className="mt-4 text-lg text-foreground">{secrets[active]!.lede}</p>
              <p className="mt-4 text-muted-foreground">{secrets[active]!.body}</p>
              <p className="mt-6 border-l-2 border-primary pl-4 font-display text-lg text-primary italic">
                "{secrets[active]!.hook}"
              </p>
            </div>
            <div className="rounded-2xl border border-border/10 bg-secondary/80 p-7">
              <p className="eyebrow text-primary">You will learn</p>
              <ul className="mt-6 space-y-4">
                {secrets[active]!.learn.map((l) => (
                  <li key={l} className="flex items-start gap-3 text-muted-foreground">
                    <span className="mt-0.5 rounded-full bg-primary/20 p-1">
                      <Check className="h-3.5 w-3.5 text-primary" strokeWidth={3} />
                    </span>
                    <span className="text-sm">{l}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Fit check" title="Is This Masterclass For You?" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="card-soft overflow-hidden p-0">
            <div className="h-2 bg-accent-gradient" />
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold">Who this is for</h3>
              <ul className="mt-7 space-y-5">
                {forWho.map((f) => (
                  <li key={f.t} className="text-sm text-muted-foreground">
                    <span className="block font-display font-semibold text-foreground">{f.t}</span>
                    {f.d}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border bg-secondary">
            <div className="h-2 bg-border" />
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold text-muted-foreground">Who this is not for</h3>
              <ul className="mt-7 space-y-5">
                {notFor.map((n) => (
                  <li key={n} className="flex gap-3 text-sm text-muted-foreground">
                    <Minus className="mt-0.5 h-4 w-4 shrink-0 text-border" />
                    {n}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-gradient-navy text-foreground gold-border-glow">
            <div className="h-2 bg-primary" />
            <div className="p-8">
              <h3 className="font-display text-xl font-semibold">What you'll walk away with</h3>
              <ul className="mt-7 space-y-4">
                {walkAway.map((w) => (
                  <li key={w} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={2.5} />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="navy" id="host">
        <div className="grid items-center gap-12 md:grid-cols-[0.85fr_1.15fr]">
          <div className="relative">
            <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-accent-gradient opacity-25" />
            <img
              src={vandana}
              alt="Vandana Sharma, Leadership Mindset Coach and Founder of LeadNorth Consulting"
              className="relative w-full rounded-3xl object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow text-primary">Your host</p>
            <h2 className="mt-3 text-3xl font-semibold md:text-[2.6rem]">Meet Vandana Sharma</h2>
            <p className="mt-2 text-sm font-semibold text-foreground">
              Leadership Mindset Coach · ICF-Certified Coach · Leadership Assessment Practitioner · Founder, LeadNorth
              Consulting
            </p>
            <div className="mt-6 space-y-4 text-muted-foreground">
              <p>
                With 15 years across HR, talent and organisational environments in Ireland, the UK and India, Vandana
                has worked closely with professionals, managers and leaders through hiring, talent development, career
                transitions, organisational change and leadership challenges.
              </p>
              <p className="font-display text-lg text-foreground">
                "AI may give you more power. Human leadership determines how you use it."
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              {proof.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-border/20 bg-secondary/80 px-4 py-2 text-xs font-semibold text-muted-foreground"
                >
                  {p}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/"
                className="inline-flex items-center gap-2 rounded-full border border-border/25 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Main website →
              </Link>
              <a
                href="#impact"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-primary hover:underline"
              >
                Speaking & press
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="grey" id="impact">
        <SectionHeading
          eyebrow="Real impact"
          title="Changing How People Lead — Through Coaching, Training & Public Speaking"
          sub="From coaching conversations and leadership workshops to stages, panels and podcasts — Vandana has helped hundreds of professionals and leaders shift the way they think, decide and lead."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {impactShots.map((s, i) => (
            <figure
              key={s.alt}
              className={`card-soft lift group relative overflow-hidden p-0 ${i === 0 ? "md:col-span-2" : ""}`}
            >
              <img
                src={s.src}
                alt={s.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] ${i === 0 ? "h-72 md:h-96" : "h-72"}`}
                loading="lazy"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 to-transparent p-6">
                <p className="eyebrow text-primary">{s.tag}</p>
                <p className="mt-1 font-display text-lg font-semibold text-foreground">{s.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-center">
          {["Coaching", "Leadership training", "Keynotes & panels", "Podcasts"].map((t) => (
            <span key={t} className="font-display text-sm font-semibold tracking-wide text-primary uppercase">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="#speaking" className="font-display text-sm font-semibold text-primary hover:underline">
            See speaking, press & podcasts →
          </a>
        </div>
      </Section>

      <MasterclassSpeakingSection />

      <Section tone="navy" id="framework">
        <div className="flex items-center gap-5">
          <p className="eyebrow shrink-0 text-primary">The six-part Human Edge Leadership Model</p>
          <div className="h-px w-full bg-gradient-to-r from-primary/40 to-transparent" />
        </div>
        <p className="mt-6 max-w-2xl text-muted-foreground">
          Six human leadership capabilities that become more valuable as AI takes over more execution.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {humanEdge.map(({ n, title, sub, Icon }) => (
            <div
              key={n}
              className="glass-card lift flex items-center gap-4 p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="eyebrow text-muted-foreground/70">{n}</p>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="text-sm text-primary">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="grey">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="Agenda" title="What Happens Inside The Free Masterclass" />
            <ol className="mt-8 space-y-4">
              {agenda.map((a, i) => (
                <li key={a} className="flex gap-4 border-b border-border pb-4">
                  <span className="font-display text-sm font-semibold text-primary">{i + 1}.</span>
                  <p className="text-sm text-muted-foreground">{a}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="self-start rounded-3xl border border-primary/40 bg-secondary p-8 md:p-10">
            <p className="eyebrow text-primary">Free bonus when you attend live</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">Human Edge Leadership Self-Reflection</h3>
            <p className="mt-4 text-muted-foreground">
              Attend live and receive a practical self-reflection worksheet to identify your current leadership
              strengths, patterns and areas for growth across the Human Edge Leadership model.
            </p>
            <p className="mt-4 font-display text-lg">
              You won't just listen to the masterclass. You'll start seeing your own leadership differently.
            </p>
            <CtaButton className="mt-8 w-full" />
          </div>
        </div>
      </Section>

      <Section tone="navy">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold md:text-[2.8rem]">Ready To Build Your Human Edge Leadership?</h2>
          <p className="mt-5 text-muted-foreground">
            Join the free Human Edge Leadership Masterclass and discover the three leadership secrets that can help you
            remain relevant, influential and human in an AI-powered world.
          </p>
          <CtaButton className="mt-9 px-10 py-4 text-base" />
        </div>
      </Section>

      <Section tone="light" id="faq">
        <SectionHeading eyebrow="FAQ" title="Questions, Answered" />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-5">
              <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-base font-semibold">
                {q}
                <span className="text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </Section>

      <section className="bg-gradient-navy border-y border-border">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center text-foreground md:py-24">
          <h2 className="text-3xl font-semibold md:text-5xl">Build The Human Edge Leadership AI Can't Replace</h2>
          <p className="mt-5 text-muted-foreground">Free live Human Edge Leadership Masterclass · Limited seats</p>
          <a
            href={REGISTER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex items-center gap-2 rounded-lg bg-primary px-10 py-4 font-display text-base font-semibold uppercase tracking-wider text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-gold-glow gold-border-glow"
          >
            Reserve My Free Seat →
          </a>
        </div>
      </section>
    </MasterclassPageShell>
  );
};

export default Masterclass;
