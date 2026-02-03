import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  trip: string;
  quote: string;
  rating: number;
  avatar?: string;
}

const TestimonialCard = ({
  name,
  location,
  trip,
  quote,
  rating,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 shadow-elevated relative group hover:shadow-2xl transition-all duration-300"
    >
      {/* Quote Icon */}
      <div className="absolute -top-4 left-6 w-8 h-8 rounded-full bg-gradient-sunset flex items-center justify-center">
        <Quote className="w-4 h-4 text-primary-foreground" />
      </div>

      {/* Stars */}
      <div className="flex items-center gap-1 mb-4 pt-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < rating ? "text-accent fill-accent" : "text-muted"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-card-foreground leading-relaxed mb-6">{quote}</p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-card-foreground">{name}</div>
          <div className="text-sm text-muted-foreground">
            {trip} • {location}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
