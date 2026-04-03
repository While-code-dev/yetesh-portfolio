import { useInView } from "@/hooks/useInView";
import { ExternalLink, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Symptom Risk Analyser",
    desc: "AI-powered tool that analyses symptoms to predict potential health risks using machine learning algorithms.",
    url: "https://github.com/While-code-dev/Symptom-Risk-Analyzer.git",
    featured: true,
    tags: ["Python", "ML", "AI"],
  },
  {
    title: "QR Code Generator",
    desc: "Python-based QR code generation tool with customisable output options.",
    url: "https://github.com/While-code-dev/qr-generator-python.git",
    tags: ["Python"],
  },
  {
    title: "Cafe Management System",
    desc: "Complete management system for cafe operations including orders and billing.",
    url: "https://github.com/While-code-dev/Cafe-Management-System-python.git",
    tags: ["Python"],
  },
  {
    title: "Password Strength Checker",
    desc: "Intelligent password strength analyser with real-time security scoring.",
    url: "https://github.com/While-code-dev/password-strength-checker.git",
    tags: ["Python", "Security"],
  },
  {
    title: "Quiz System with Timer",
    desc: "Interactive quiz platform with countdown timer and score tracking.",
    url: "https://github.com/While-code-dev/Quiz-Management-System-Python.git",
    tags: ["Python"],
  },
  {
    title: "Simple Calendar Generator",
    desc: "Calendar generation utility for any month and year.",
    url: "https://github.com/While-code-dev/Simple-calender-generator.git",
    tags: ["Python"],
  },
  {
    title: "Multiplayer Hangman Game",
    desc: "Classic hangman game with multiplayer functionality for interactive gameplay.",
    url: "https://github.com/While-code-dev/multiplayer-hangman-game-python.git",
    tags: ["Python", "Game"],
  },
];

const ProjectsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`glass rounded-xl overflow-hidden gradient-border group hover:scale-[1.03] transition-all duration-300 ${p.featured ? "sm:col-span-2 lg:col-span-2 ring-2 ring-primary/30 glow-primary" : ""} ${inView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${0.1 + i * 0.08}s` }}
            >
              <div className={`p-6 ${p.featured ? "md:p-8" : ""}`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`font-heading font-semibold ${p.featured ? "text-xl md:text-2xl" : "text-lg"}`}>{p.title}</h3>
                  {p.featured && <Star className="w-5 h-5 text-accent fill-accent flex-shrink-0" />}
                </div>
                <p className="text-muted-foreground text-sm mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map(t => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">{t}</span>
                  ))}
                </div>
                <Button variant="heroOutline" size="sm" asChild>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2">
                    View Code <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
