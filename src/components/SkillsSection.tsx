import { useInView } from "@/hooks/useInView";
import { Sparkles } from "lucide-react";

const skillGroups = [
  {
    title: "Prompt Engineering",
    highlight: true,
    skills: ["Prompt Design", "LLM Optimization", "AI Workflow Automation"],
  },
  {
    title: "Programming",
    skills: ["Python", "C"],
  },
  {
    title: "AI / ML",
    skills: ["Machine Learning Basics", "AI Concepts", "Data Analysis"],
  },
  {
    title: "Libraries",
    skills: ["NumPy", "Matplotlib", "Librosa"],
  },
  {
    title: "Tools",
    skills: ["GitHub", "VS Code"],
  },
];

const SkillsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Technical <span className="text-gradient">Skills</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className={`glass rounded-xl p-6 gradient-border hover:scale-105 transition-all duration-300 ${group.highlight ? "sm:col-span-2 lg:col-span-1 ring-2 ring-accent/30 glow-accent" : ""} ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + gi * 0.1}s` }}
            >
              <div className="flex items-center gap-2 mb-4">
                {group.highlight && <Sparkles className="w-5 h-5 text-accent" />}
                <h3 className={`font-heading font-semibold text-lg ${group.highlight ? "text-gradient" : ""}`}>{group.title}</h3>
                {group.highlight && <span className="ml-auto text-xs font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full">Top Skill</span>}
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map(s => (
                  <span key={s} className={`text-sm px-3 py-1.5 rounded-full ${group.highlight ? "bg-accent/15 text-accent border border-accent/20" : "bg-muted text-muted-foreground"}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
