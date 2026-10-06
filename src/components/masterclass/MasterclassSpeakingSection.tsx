import { Section, SectionHeading, CtaButton } from "@/components/masterclass/MasterclassLayout";
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
      <Section tone="grey" id="speaking" className="[&>div]:py-16 md:[&>div]:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <article className="flex flex-col">
            <SectionHeading align="left" eyebrow="In the press" title="Featured coverage" />
            <img
              src={powerScarf}
              alt="Power Scarf Awards speaker announcement featuring Vandana Sharma"
              className="mt-6 w-full rounded-2xl border border-border gold-border-glow"
              loading="lazy"
            />
            <div className="mt-5">
              <p className="eyebrow text-primary">Telangana Tribune</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug md:text-xl">
                Power Scarf Awards in Hyderabad highlights women path creators and real stories
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                Vandana joined the Power Scarf Awards as a speaker for Women Entrepreneur Day at Draper Startup House,
                Hyderabad — supported by TGIC — sharing real stories of leadership, courage and impact.
              </p>
              <a
                href="https://www.telanganatribune.com/power-scarf-awards-in-hyderabad-highlights-women-path-creators-and-real-stories/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex rounded-lg border border-border px-5 py-2.5 font-display text-xs font-semibold uppercase tracking-wide text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Read the article →
              </a>
            </div>
          </article>

          <article className="flex flex-col lg:border-l lg:border-border/40 lg:pl-10">
            <SectionHeading align="left" eyebrow="Podcasts" title="On the mic" />
            <img
              src={alumni}
              alt="The Alumni Edge podcast poster featuring Vandana Sharma"
              className="mt-6 w-full rounded-2xl border border-border gold-border-glow"
              loading="lazy"
            />
            <div className="mt-5">
              <p className="eyebrow text-primary">The Alumni Edge · Aryavarta MANIT Society</p>
              <h3 className="mt-2 font-display text-lg font-semibold leading-snug md:text-xl">
                Where experience inspires innovation: people, purpose, innovation
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                A podcast conversation on real stories, powerful insights and lasting impact — covering 15 years of HR
                experience across Ireland, the UK and India, leading talent strategy at scale, and guiding people
                through complex organisational change.
              </p>
            </div>
          </article>
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
