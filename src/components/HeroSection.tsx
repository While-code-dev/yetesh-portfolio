import profileImg from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import ParticleBackground from "./ParticleBackground";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center gradient-bg overflow-hidden">
      <ParticleBackground />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
      <div className="container mx-auto px-4 md:px-8 relative z-10 pt-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left */}
          <div className="flex-1 text-center lg:text-left animate-slide-in-left">
            <p className="text-accent font-medium mb-3 tracking-wider uppercase text-sm">AI Engineer • Python Developer • Prompt Engineering</p>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight">
              BADIGER<br />YETESH
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mx-auto lg:mx-0 mb-4">
              AI Engineer | Python Developer | Prompt Engineering Specialist
            </p>
            <p className="text-primary-foreground/60 max-w-lg mx-auto lg:mx-0 mb-8">
              Building AI-powered solutions that bridge cutting-edge technology and real-world impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">View Projects</a>
              </Button>
              <Button variant="heroOutline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>
          {/* Right – Profile Image */}
          <div className="flex-shrink-0 animate-slide-in-right">
            <div className="relative group">
              {/* Glow halo */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/40 to-accent/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary-foreground/20 group-hover:border-accent/50 transition-all duration-500 group-hover:scale-105">
                <img
                  src={profileImg}
                  alt="Badiger Yetesh – AI Engineer"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
