import { useInView } from "@/hooks/useInView";
import { Briefcase, Trophy } from "lucide-react";

const ExperienceSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Work <span className="text-gradient">Experience</span>
        </h2>
        <div className={`max-w-3xl mx-auto glass rounded-xl p-8 gradient-border ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.15s" }}>
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="font-heading text-xl font-semibold">Product Management Intern</h3>
              <p className="text-primary font-medium">SkillCraft Technology</p>
              <div className="mt-4 flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-lg border border-accent/20 w-fit">
                <Trophy className="w-5 h-5 fill-accent" />
                <span className="font-semibold text-sm">Recognised as Intern of the Month</span>
              </div>
              <ul className="mt-5 space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span> Created comprehensive Product Requirement Documents (PRDs)</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span> Developed product roadmaps and strategic planning initiatives</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span> Conducted in-depth competitor analysis and market research</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-1">▹</span> Led user research and synthesised insights into product decisions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
