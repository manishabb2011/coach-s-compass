import { Section, SectionHeading } from "@/components/masterclass/MasterclassLayout";
import powerScarf from "@/assets/masterclass/power-scarf.jpg";
import alumni from "@/assets/masterclass/alumni-edge-poster.jpg";

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
    </>
  );
};

export default MasterclassSpeakingSection;
