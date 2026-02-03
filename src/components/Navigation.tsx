import { useState, useEffect } from "react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <button
          onClick={() => scrollToSection("hero")}
          className="font-heading text-xl font-medium text-foreground hover:text-primary transition-colors"
        >
          Elena Voice
        </button>
        
        <div className="flex gap-8">
          <button
            onClick={() => scrollToSection("samples")}
            className="nav-link"
          >
            Samples
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="nav-link"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
