import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-travel.jpg";

const HeroSection = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight - 80, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Travel adventure"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/30 to-foreground/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-block px-4 py-2 rounded-full bg-primary/20 backdrop-blur-sm text-primary-foreground text-sm font-medium mb-6"
          >
            🌍 Travel Vlogger & Explorer
          </motion.span>

          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Explore India's
            <span className="block text-gradient-ocean">Hidden Wonders</span>
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join me on incredible journeys through breathtaking landscapes, ancient cultures, and unforgettable adventures. Let's create memories together!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/book">
              <Button variant="hero" size="xl">
                Book Your Adventure
              </Button>
            </Link>
            <a
              href="https://youtube.com/@pratikjainvlogs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="heroOutline" size="xl">
                <Play className="w-5 h-5" />
                Watch Vlogs
              </Button>
            </a>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-lg mx-auto"
          >
            {[
              { value: "500K+", label: "Subscribers" },
              { value: "50+", label: "Destinations" },
              { value: "100+", label: "Vlogs" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="text-sm text-primary-foreground/60">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground/60 hover:text-primary-foreground transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
};

export default HeroSection;
