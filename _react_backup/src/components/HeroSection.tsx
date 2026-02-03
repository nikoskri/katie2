import { Volume2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 pt-20">
      <div className="max-w-5xl">
        <h1 className="hero-text text-foreground mb-8 animate-fade-in">
          I'm Elena <span className="text-muted-foreground italic">[eh-lay-nah]</span>—a professional voice-over artist bringing scripts to life with warmth, clarity & character.
        </h1>
        
        <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Volume2 className="w-5 h-5 text-primary" />
            <span className="font-body text-sm">Available for commercial, narration & character work</span>
          </div>
        </div>
      </div>
      
      {/* Floating indicator */}
      <div className="absolute bottom-12 left-6 md:left-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
        <span className="section-label">/ scroll to explore</span>
      </div>
    </section>
  );
};

export default HeroSection;
