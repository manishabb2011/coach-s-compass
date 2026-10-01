import { Section, SectionHeading, CtaButton } from "@/components/masterclass/MasterclassLayout";
import speaking from "@/assets/masterclass/cokarma-speaking.jpg";
import group from "@/assets/masterclass/cokarma-group.jpg";
import collage from "@/assets/masterclass/cokarma-collage.jpg";
import powerScarf from "@/assets/masterclass/power-scarf.jpg";
import alumni from "@/assets/masterclass/alumni-edge-poster.jpg";

const topics = [
  { t: "Human Leadership In The AI Era", d: "Why the human capabilities matter more as AI becomes more capable." },
  { t: "The Invisible Leadership Gap", d: "Triggers, patterns and the self-awareness that changes behaviour." },
  { t: "From Managing Work To Leading People", d: "The shift emerging leaders and managers must make." },
  { t: "Mindset, Judgment & Intentional Choices", d: "Decision-making and ownership under pressure and change." },
];

const MasterclassSpeakingSection = () => {
  return (
    <>
      <Section tone="navy" id="speaking">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-primary">Speaking · Panels · Podcasts</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
            Conversations on leading like a human
          </h2>
          <p className="mt-6 text-muted-foreground">
            Vandana speaks at coworking communities, startup houses, colleges and corporate forums — and joins podcast
            conversations on leadership, mindset and careers in an AI-driven world.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <img
            src={speaking}
            alt="Vandana Sharma speaking on a panel at CoKarma Coworking Space"
            className="h-72 w-full rounded-2xl border border-border object-cover gold-border-glow md:h-80"
            loading="lazy"
          />
          <img
            src={group}
            alt="Group photo with attendees after a leadership session at CoKarma"
            className="h-72 w-full rounded-2xl border border-border object-cover gold-border-glow md:h-80"
            loading="lazy"
          />
          <img
            src={collage}
            alt="Highlights from a leadership session: audience, speaker and attendees"
            className="h-72 w-full rounded-2xl border border-border object-cover gold-border-glow md:h-80"
            loading="lazy"
          />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="In the press" title="Featured coverage" />
        <div className="mt-12 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <img
            src={powerScarf}
            alt="Power Scarf Awards speaker announcement featuring Vandana Sharma"
            className="w-full rounded-2xl border border-border gold-border-glow"
            loading="lazy"
          />
          <div>
            <p className="eyebrow text-primary">Telangana Tribune</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Power Scarf Awards in Hyderabad highlights women path creators and real stories
            </h3>
            <p className="mt-4 text-muted-foreground">
              Vandana joined the Power Scarf Awards as a speaker for Women Entrepreneur Day at Draper Startup House,
              Hyderabad — supported by TGIC — sharing real stories of leadership, courage and impact.
            </p>
            <a
              href="https://www.telanganatribune.com/power-scarf-awards-in-hyderabad-highlights-women-path-creators-and-real-stories/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-lg border border-border px-6 py-3 font-display text-sm font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Read the article →
            </a>
          </div>
        </div>
      </Section>

      <Section tone="grey">
        <SectionHeading eyebrow="Podcasts" title="On the mic" />
        <div className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="eyebrow text-primary">The Alumni Edge · Aryavarta MANIT Society</p>
            <h3 className="mt-3 font-display text-2xl font-semibold">
              Where experience inspires innovation: people, purpose, innovation
            </h3>
            <p className="mt-4 text-muted-foreground">
              A podcast conversation on real stories, powerful insights and lasting impact — covering 15 years of HR
              experience across Ireland, the UK and India, leading talent strategy at scale, and guiding people through
              complex organisational change.
            </p>
          </div>
          <img
            src={alumni}
            alt="The Alumni Edge podcast poster featuring Vandana Sharma"
            className="w-full rounded-2xl border border-border gold-border-glow"
            loading="lazy"
          />
        </div>
      </Section>

      <Section tone="light">
        <SectionHeading eyebrow="Signature topics" title="What Vandana speaks about" />
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {topics.map((t) => (
            <div key={t.t} className="card-soft lift p-7">
              <div className="h-1 w-10 rounded-full bg-accent-gradient" />
              <h3 className="mt-5 font-display text-lg font-semibold">{t.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-14 text-center">
          <CtaButton className="px-9 py-4 text-base" />
        </div>
      </Section>
    </>
  );
};

export default MasterclassSpeakingSection;
