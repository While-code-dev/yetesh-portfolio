import { useInView } from "@/hooks/useInView";
import { Award, GraduationCap } from "lucide-react";

const certs = {
  "AI / ML Certifications": [
    "Machine Learning Fundamentals",
    "AI Concepts & Applications",
    "Data Science with Python",
  ],
  "Microsoft Certifications": [
    "Microsoft Office Specialist",
    "Azure AI Fundamentals",
  ],
};

const extras = [
  "Government Quiz Competitions",
  "Non-Core Technical Certifications",
];

const CertificationsSection = () => {
  const { ref, inView } = useInView();

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-4 md:px-8">
        <h2 className={`font-heading text-3xl md:text-4xl font-bold text-center mb-12 ${inView ? "animate-fade-in-up" : "opacity-0"}`}>
          Certifications & <span className="text-gradient">Activities</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
          {Object.entries(certs).map(([group, items], gi) => (
            <div key={group} className={`glass rounded-xl p-6 gradient-border ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: `${0.1 + gi * 0.1}s` }}>
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-primary" />
                <h3 className="font-heading font-semibold text-lg">{group}</h3>
              </div>
              <ul className="space-y-2">
                {items.map(c => (
                  <li key={c} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent mt-0.5">✦</span>{c}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={`max-w-4xl mx-auto glass rounded-xl p-6 gradient-border ${inView ? "animate-fade-in-up" : "opacity-0"}`} style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <h3 className="font-heading font-semibold text-lg">Extracurricular</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {extras.map(e => (
              <span key={e} className="text-sm px-3 py-1.5 rounded-full bg-muted text-muted-foreground">{e}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
