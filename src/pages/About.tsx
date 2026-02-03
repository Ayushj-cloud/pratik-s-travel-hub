import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Youtube, Instagram, Camera, Map, Heart, Award, ArrowRight } from "lucide-react";
import pratikImage from "@/assets/pratik-portrait.jpg";
import heroImage from "@/assets/hero-travel.jpg";

const About = () => {
  const milestones = [
    { year: "2019", title: "Started YouTube Journey", description: "Uploaded my first travel vlog from Goa" },
    { year: "2020", title: "10K Subscribers", description: "Built a community of fellow travelers" },
    { year: "2021", title: "First Group Trip", description: "Organized my first community trip to Ladakh" },
    { year: "2023", title: "500K Subscribers", description: "Reached half a million subscribers!" },
    { year: "2024", title: "10 Group Trips", description: "Successfully organized 10 community trips" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img
            src={heroImage}
            alt="Adventure background"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>

        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium">About Me</span>
            <h1 className="font-serif text-4xl lg:text-6xl font-bold text-foreground mt-2 mb-6">
              The Story Behind <span className="text-gradient-sunset">The Lens</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From a curious traveler with a camera to a full-time content creator, here's my journey of turning passion into purpose.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-ocean rounded-2xl -z-0" />
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-sunset rounded-2xl -z-0" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                Hello, I'm Pratik!
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a travel vlogger, storyteller, and adventure enthusiast from India. What started as a hobby of documenting my weekend trips has now become my life's mission—to inspire millions to explore the incredible beauty of our country.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Every destination has a story, and I believe in capturing not just the places but the emotions, the culture, and the unforgettable moments that make travel so magical. Through my lens, I aim to show you the India that exists beyond tourist brochures.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                But my journey isn't complete without you! That's why I organize exclusive group trips twice a year, where we explore together, create memories, and become a family of wanderers.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="destructive" className="gap-2">
                    <Youtube className="w-5 h-5" />
                    Subscribe on YouTube
                  </Button>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="gap-2">
                    <Instagram className="w-5 h-5" />
                    Follow on Instagram
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Youtube, value: "500K+", label: "YouTube Subscribers" },
              { icon: Camera, value: "100+", label: "Travel Vlogs" },
              { icon: Map, value: "50+", label: "Destinations Covered" },
              { icon: Heart, value: "1000+", label: "Happy Travelers" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-sunset flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium">My Journey</span>
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mt-2">
              Milestones Along the Way
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-sunset flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {milestone.year.slice(2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 flex-1 bg-border mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="text-sm text-primary font-medium mb-1">
                    {milestone.year}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-gradient-ocean relative overflow-hidden">
        <div className="absolute inset-0 bg-foreground/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="w-16 h-16 text-secondary-foreground/80 mx-auto mb-6" />
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-secondary-foreground mb-6">
              Let's Create Memories Together
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-10">
              Ready to be part of our next adventure? Join me on an unforgettable journey!
            </p>
            <Link to="/book">
              <Button variant="heroOutline" size="xl">
                Book Your Adventure
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
