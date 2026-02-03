import { Link } from "react-router-dom";
import { Youtube, Instagram, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-ocean flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold">Pratik Jain</span>
                <span className="block text-xs opacity-70">Vlogs</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Exploring India's hidden gems and sharing unforgettable travel experiences with fellow wanderers.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Explore</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Home
              </Link>
              <Link to="/about" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                About Me
              </Link>
              <Link to="/trips" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Upcoming Trips
              </Link>
              <Link to="/book" className="block text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all">
                Book Now
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:contact@pratikjainvlogs.com"
                className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all"
              >
                <Mail className="w-4 h-4" />
                contact@pratikjainvlogs.com
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-serif text-lg font-semibold">Follow Along</h4>
            <div className="flex items-center gap-4">
              <a
                href="https://youtube.com/@pratikjainvlogs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-destructive transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
            <p className="text-xs opacity-60">
              Subscribe for travel vlogs & adventures!
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-60">
            © 2025 Pratik Jain Vlogs. All rights reserved.
          </p>
          <p className="text-sm opacity-60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> for travelers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
