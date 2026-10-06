import vandana from "@/assets/masterclass/vandana.png";

export const vandanaProofTags = [
  "15 years of HR, talent & organisational experience",
  "Ireland, the UK & India",
  "Leadership assessment practitioner",
  "Founder, LeadNorth Consulting",
  "Creator of the Human Edge Leadership framework",
] as const;

type VandanaHostIntroProps = {
  eyebrow?: string;
};

const VandanaHostIntro = ({ eyebrow = "Your host" }: VandanaHostIntroProps) => {
  return (
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
        <p className="eyebrow text-primary">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-semibold md:text-[2.6rem]">Meet Vandana Sharma</h2>
        <p className="mt-2 text-sm font-semibold text-foreground">
          Leadership Mindset Coach · Leadership Assessment Practitioner · Founder, LeadNorth Consulting
        </p>
        <div className="mt-6 space-y-4 text-muted-foreground">
          <p className="text-sm leading-relaxed md:text-base">
            With 15 years across HR, talent and organisational environments in Ireland, the UK and India, Vandana has
            worked closely with professionals, managers and leaders through hiring, talent development, career
            transitions, organisational change and leadership challenges.
          </p>
          <p className="font-display text-lg text-foreground">
            &ldquo;AI may give you more power. Human leadership determines how you use it.&rdquo;
          </p>
        </div>
        <div className="mt-7 flex flex-wrap gap-3">
          {vandanaProofTags.map((p) => (
            <span
              key={p}
              className="rounded-full border border-border/20 bg-secondary/80 px-4 py-2 text-xs font-semibold text-muted-foreground"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VandanaHostIntro;
