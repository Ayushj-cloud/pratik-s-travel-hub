import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Users, MapPin, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface TripCardProps {
  id: string;
  title: string;
  location: string;
  date: string;
  duration: string;
  price: string;
  seats: number;
  seatsLeft: number;
  image: string;
  description: string;
  featured?: boolean;
}

const TripCard = ({
  id,
  title,
  location,
  date,
  duration,
  price,
  seats: _seats,
  seatsLeft,
  image,
  description,
  featured = false,
}: TripCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`group relative bg-card rounded-2xl overflow-hidden shadow-elevated hover:shadow-2xl transition-all duration-500 ${
        featured ? "lg:col-span-2 lg:grid lg:grid-cols-2" : ""
      }`}
    >
      {/* Image */}
      <div className={`relative overflow-hidden ${featured ? "h-64 lg:h-full" : "h-56"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        
        {/* Badge */}
        {seatsLeft <= 5 && seatsLeft > 0 && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-semibold rounded-full">
            Only {seatsLeft} seats left!
          </span>
        )}
        {seatsLeft === 0 && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-muted text-muted-foreground text-xs font-semibold rounded-full">
            Sold Out
          </span>
        )}
        {featured && seatsLeft > 5 && (
          <span className="absolute top-4 left-4 px-3 py-1 bg-gradient-sunset text-primary-foreground text-xs font-semibold rounded-full">
            Featured Trip
          </span>
        )}

        {/* Price overlay on image */}
        <div className="absolute bottom-4 left-4">
          <span className="text-primary-foreground text-2xl font-bold">{price}</span>
          <span className="text-primary-foreground/70 text-sm"> / person</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
          <MapPin className="w-4 h-4" />
          {location}
        </div>
        
        <h3 className="font-serif text-xl lg:text-2xl font-bold text-card-foreground mb-3 group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {date}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {duration}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link to={`/book?trip=${id}`} className="flex-1">
            <Button
              variant={seatsLeft === 0 ? "outline" : "hero"}
              className="w-full"
              disabled={seatsLeft === 0}
            >
              {seatsLeft === 0 ? "Join Waitlist" : "Book Now"}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TripCard;
