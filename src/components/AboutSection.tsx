import { useInView } from "@/hooks/useInView";
import { Brain, Lightbulb, Target } from "lucide-react";

const AboutSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-4 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          About <span className="text-gradient">Me</span>
        </h2>
        <p className={`text-muted-foreground text-center max-w-2xl mx-auto mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.1s" }}>
          A Computer Science student specializing in Artificial Intelligence & Machine Learning, passionate about solving real-world challenges through intelligent systems and cutting-edge prompt engineering.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { icon: Brain, title: "AI & ML Enthusiast", desc: "Exploring machine learning algorithms and building predictive models that make an impact." },
            { icon: Lightbulb, title: "Prompt Engineering", desc: "Crafting precise prompts that unlock the full potential of large language models for practical applications." },
            { icon: Target, title: "Problem Solver", desc: "Turning complex challenges into elegant, AI-driven solutions with clean, maintainable Python code." },
          ].map((item, i) => (
            <div key={item.title} className={`glass rounded-xl p-6 gradient-border hover:scale-105 transition-all duration-300 group ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.2 + i * 0.1}s` }}>
              <item.icon className="w-10 h-10 text-primary mb-4 group-hover:text-accent transition-colors" />
              <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
