import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";

interface AudioCardProps {
  title: string;
  category: string;
  duration: string;
  description?: string;
  index: number;
}

const AudioCard = ({ title, category, duration, description, index }: AudioCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Simulate progress when playing
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          return prev + 0.5;
        });
      }, 100);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <div 
      className="audio-card group cursor-pointer"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-start gap-4">
        <button
          onClick={togglePlay}
          className="play-button flex-shrink-0 group-hover:shadow-xl"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 ml-0" fill="currentColor" />
          ) : (
            <Play className="w-5 h-5 ml-1" fill="currentColor" />
          )}
        </button>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="section-label text-primary">{category}</span>
          </div>
          <h3 className="font-heading text-lg font-medium text-foreground mb-1 truncate">
            {title}
          </h3>
          {description && (
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {description}
            </p>
          )}
          
          {/* Waveform visualization */}
          <div className="flex items-center gap-1 h-8">
            {Array.from({ length: 40 }).map((_, i) => {
              const height = Math.random() * 100;
              const isActive = (i / 40) * 100 <= progress;
              return (
                <div
                  key={i}
                  className={`w-1 rounded-full transition-all duration-150 ${
                    isActive ? "bg-primary" : "bg-muted"
                  } ${isPlaying ? "animate-wave" : ""}`}
                  style={{
                    height: `${20 + height * 0.6}%`,
                    animationDelay: `${i * 0.02}s`,
                    opacity: isActive ? 1 : 0.5,
                  }}
                />
              );
            })}
          </div>
          
          <div className="flex justify-between items-center mt-2">
            <span className="text-xs text-muted-foreground font-body">{duration}</span>
            <span className="text-xs text-muted-foreground font-body opacity-0 group-hover:opacity-100 transition-opacity">
              Click to {isPlaying ? "pause" : "play"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioCard;
