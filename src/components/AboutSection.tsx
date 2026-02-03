const AboutSection = () => {
  const skills = [
    "Commercial & Advertising",
    "Documentary Narration",
    "Character & Animation",
    "E-Learning & Training",
    "Audiobook Performance",
    "IVR & Phone Systems",
    "Podcast Production",
    "Multilingual (EN/ES/FR)",
  ];

  const clients = [
    "Fortune 500 Brands",
    "Streaming Platforms",
    "Gaming Studios",
    "Educational Institutions",
    "Healthcare Organizations",
    "Tech Startups",
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">/ about me</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8 font-body">
              With over a decade of experience behind the microphone, I've had the privilege of voicing everything from primetime commercials to beloved animated characters. My home studio is equipped with broadcast-quality gear, ensuring crystal-clear audio delivered on your timeline.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-body">
              Based in Los Angeles, I work with clients across the globe—from indie creators to international agencies. Whether you need a warm, conversational read or a bold, commanding presence, I bring versatility and professionalism to every project.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="section-label mb-6">/ what I do</h3>
              <ul className="space-y-3">
                {skills.map((skill, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="section-label mb-6">/ who I work with</h3>
              <ul className="space-y-3">
                {clients.map((client, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-foreground font-body"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {client}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
