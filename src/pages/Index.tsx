import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import TripCard from "@/components/TripCard";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { trips } from "@/data/trips";
import { testimonials } from "@/data/testimonials";
import { ArrowRight, Camera, Users, Mountain, Star } from "lucide-react";
import pratikImage from "@/assets/pratik-portrait.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <HeroSection />

      {/* About Preview */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-elevated">
                <img
                  src={pratikImage}
                  alt="Pratik Jain"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-sunset rounded-2xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-primary font-medium">Hello, I'm</span>
              <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground">
                Pratik Jain
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A passionate travel vlogger who believes that the best stories are found between the pages of a passport. For the past 5 years, I've been exploring India's hidden gems and sharing my adventures with millions of fellow travelers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My mission? To show you that adventure is not just for the privileged few. Join me as I prove that extraordinary experiences await those who dare to explore.
              </p>

              <div className="grid grid-cols-3 gap-4 py-6">
                {[
                  { icon: Camera, label: "Content Creator" },
                  { icon: Mountain, label: "Explorer" },
                  { icon: Users, label: "Community Leader" },
                ].map((item) => (
                  <div key={item.label} className="text-center">
                    <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-2">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-xs text-muted-foreground">{item.label}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button variant="outline" size="lg">
                  Read My Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Trips */}
      <section className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium">Upcoming Adventures</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Join the Journey
            </h2>
            <p className="text-muted-foreground text-lg">
              Curated travel experiences designed for unforgettable memories. Limited seats, unlimited adventures.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {trips.map((trip) => (
              <TripCard key={trip.id} {...trip} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link to="/trips">
              <Button variant="default" size="lg">
                View All Trips
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium">What Travelers Say</span>
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Stories from the Road
            </h2>
            <p className="text-muted-foreground text-lg">
              Real experiences from fellow adventurers who've joined our community.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} {...testimonial} />
            ))}
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-card rounded-full shadow-sm">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <span className="text-muted-foreground">
                <strong className="text-foreground">4.9/5</strong> from 200+ happy travelers
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 bg-gradient-sunset relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready for Your Next Adventure?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-10">
              Don't just watch the vlogs—become part of the story. Book your spot today and create memories that last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/book">
                <Button variant="heroOutline" size="xl">
                  Book Now
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/trips">
                <Button variant="ghost" size="xl" className="text-primary-foreground hover:bg-primary-foreground/10">
                  Explore Trips
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
