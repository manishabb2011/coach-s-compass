import { useState } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Mariam Amin",
    role: "Strategy @ Uber, Ex-Bain",
    quote: `I am really grateful for having been coached by Vandana using the Leadership Circle 
Assessment. The assessment was much more insightful than I thought and the coaching 
session with Vandana exceeded my expectations. Vandana's coaching style is gentle, she asks 
powerful questions and creates space for reflections and to go deeper. The assessment 
unlocked many insights but particularly gaps between who I am and my values vs what I project 
to others. On top of that what I found powerful is how personal and professional lives are 
intertwined - we uncovered the link between the two during the session which was quite 
unexpected. Lastly, Vandana makes sure you walk away with clear actions helping you move 
forward and improve. Thank you so much Vandana for your time and coaching.`,
  },
  {
    name: "Tom Creedon",
    role: "Human Resources Director- Carelon Global Solutions Ireland",
    quote: `I am delighted to write this recommendation for Vandana, who has been an incredible asset to 
our team in the realms of talent acquisition and talent management. In Carelon as we wind 
down operations Vandana has played a pivotal role in outplacement support, providing 
compassionate and strategic guidance to both departing employees and managers navigating 
through transitions. Her ability to handle sensitive situations with empathy and professionalism 
has helped maintain our company's reputation and morale. In addition, Vandana has been 
instrumental in coaching Associates, interns and university students. Through insightful 
workshops and one-on-one mentorship sessions, she has successfully equipped numerous 
people with the skills and confidence needed to thrive in their careers. Moreover, Vandana is 
highly adept at dealing with managers and leadership teams, earning their trust and respect 
through effective communication and strategic insights. I wholeheartedly recommend Vandana 
to any organization seeking a consummate professional in talent acquisition, talent 
management or coaching. Her expertise, integrity, positive demeanour, and dedication make 
her a true asset to any team.`,
  },
  {
    name: "Cosmina Topircean",
    role: "Project Manager",
    quote: `Vandana is an open-minded person with great empathy skills, active listening and capable of 
holding the space for the person she is listening to. Her agility and leadership are also among 
her strongest skills. I loved working with her and I want to take this opportunity to thank her for 
that.`,
  },
];

const MAX_LENGTH = 200;

const TestimonialsSection = () => {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const toggleExpanded = (index: number) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength).trim() + "...";
  };

  return (
    <section id="testimonials" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4">
          What Leaders <span className="text-gradient-gold">Say</span>
        </h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Hear from leaders who have experienced the shift from reaction to intentional leadership.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => {
            const isExpanded = expanded[i] || false;
            const isLong = t.quote.length > MAX_LENGTH;
            const displayText = isExpanded || !isLong ? t.quote : truncateText(t.quote, MAX_LENGTH);

            return (
              <div
                key={i}
                className="bg-gradient-card rounded-xl p-8 border border-border hover:border-primary/30 transition-all duration-300 flex flex-col"
              >
                <Quote className="text-primary mb-4 flex-shrink-0" size={28} />
                <p className="text-foreground/90 text-sm leading-relaxed mb-6 flex-1 italic">
                  "{displayText}"
                </p>
                {isLong && (
                  <button
                    onClick={() => toggleExpanded(i)}
                    className="text-primary hover:text-primary/80 text-xs font-medium mb-4 self-start transition-colors"
                  >
                    {isExpanded ? "Read less" : "Read more"}
                  </button>
                )}
                <div>
                  <p className="font-display font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
