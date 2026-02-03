import AudioCard from "./AudioCard";

const audioSamples = [
  {
    title: "Luxury Brand Campaign",
    category: "Commercial",
    duration: "0:32",
    description: "Warm, sophisticated tone for a high-end jewelry brand television spot.",
  },
  {
    title: "Documentary: Ocean Depths",
    category: "Narration",
    duration: "1:45",
    description: "Calm, educational narration for a nature documentary series.",
  },
  {
    title: "Mobile Game Character",
    category: "Character",
    duration: "0:58",
    description: "Playful, energetic voice for an animated mobile game protagonist.",
  },
  {
    title: "Corporate Training Module",
    category: "E-Learning",
    duration: "2:15",
    description: "Clear, engaging instructional voice for employee onboarding.",
  },
  {
    title: "Audiobook: Romance Novel",
    category: "Audiobook",
    duration: "1:30",
    description: "Expressive, emotional reading from a bestselling romance title.",
  },
  {
    title: "Tech Product Launch",
    category: "Commercial",
    duration: "0:45",
    description: "Modern, confident delivery for a startup's product announcement.",
  },
  {
    title: "Children's Animated Series",
    category: "Character",
    duration: "0:40",
    description: "Multiple character voices for a popular children's TV show.",
  },
  {
    title: "Medical Explainer",
    category: "E-Learning",
    duration: "1:20",
    description: "Trustworthy, reassuring tone for patient education content.",
  },
];

const SamplesSection = () => {
  return (
    <section id="samples" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="section-label">/ voice samples</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {audioSamples.map((sample, index) => (
            <AudioCard
              key={index}
              title={sample.title}
              category={sample.category}
              duration={sample.duration}
              description={sample.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SamplesSection;
