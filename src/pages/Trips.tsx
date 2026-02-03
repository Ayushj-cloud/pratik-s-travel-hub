import { motion } from "framer-motion";
import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TripCard from "@/components/TripCard";
import { Button } from "@/components/ui/button";
import { trips, getTrip } from "@/data/trips";
import { ArrowRight, Check, X, Calendar, Users, MapPin, Clock } from "lucide-react";

const Trips = () => {
  const [searchParams] = useSearchParams();
  const selectedTripId = searchParams.get("id");
  const selectedTrip = selectedTripId ? getTrip(selectedTripId) : null;

  if (selectedTrip) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        
        {/* Trip Detail */}
        <section className="pt-24 pb-8 lg:pt-32">
          <div className="container mx-auto px-4">
            <Link to="/trips" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors">
              ← Back to all trips
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="relative h-[50vh] min-h-[400px]">
          <img
            src={selectedTrip.image}
            alt={selectedTrip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
        </section>

        {/* Details */}
        <section className="py-12 lg:py-20 -mt-32 relative z-10">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                    <MapPin className="w-4 h-4" />
                    {selectedTrip.location}
                  </div>
                  <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mb-4">
                    {selectedTrip.title}
                  </h1>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {selectedTrip.description}
                  </p>
                </motion.div>

                {/* Trip Info Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: Calendar, label: "Dates", value: selectedTrip.date },
                    { icon: Clock, label: "Duration", value: selectedTrip.duration },
                    { icon: Users, label: "Group Size", value: `${selectedTrip.seats} people` },
                    { icon: MapPin, label: "Seats Left", value: `${selectedTrip.seatsLeft} available` },
                  ].map((item) => (
                    <div key={item.label} className="bg-card rounded-xl p-4 shadow-sm">
                      <item.icon className="w-5 h-5 text-primary mb-2" />
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                      <div className="font-semibold text-foreground text-sm">{item.value}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <div className="bg-card rounded-2xl p-6 shadow-elevated">
                  <h3 className="font-serif text-xl font-bold text-foreground mb-4">
                    Trip Highlights
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedTrip.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-foreground text-sm">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-card rounded-2xl p-6 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <Check className="w-5 h-5 text-secondary" />
                      What's Included
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrip.inclusions.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                          <Check className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-card rounded-2xl p-6 shadow-sm">
                    <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                      <X className="w-5 h-5 text-destructive" />
                      What's Not Included
                    </h3>
                    <ul className="space-y-2">
                      {selectedTrip.exclusions.map((item) => (
                        <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                          <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Sidebar - Booking Card */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="sticky top-24 bg-card rounded-2xl p-6 shadow-elevated"
                >
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{selectedTrip.price}</span>
                    <span className="text-muted-foreground"> / person</span>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Trip Dates</span>
                      <span className="font-medium text-foreground">{selectedTrip.date}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="font-medium text-foreground">{selectedTrip.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Available Seats</span>
                      <span className={`font-medium ${selectedTrip.seatsLeft <= 5 ? "text-destructive" : "text-foreground"}`}>
                        {selectedTrip.seatsLeft} left
                      </span>
                    </div>
                  </div>

                  <Link to={`/book?trip=${selectedTrip.id}`}>
                    <Button 
                      variant="hero" 
                      size="lg" 
                      className="w-full"
                      disabled={selectedTrip.seatsLeft === 0}
                    >
                      {selectedTrip.seatsLeft === 0 ? "Sold Out" : "Book This Trip"}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Secure your spot with a booking deposit
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium">Explore With Me</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-6">
              Upcoming <span className="text-gradient-sunset">Adventures</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              I organize two exclusive group trips every year. Each journey is carefully curated for an authentic, immersive experience with fellow travelers who share your passion for exploration.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Trips */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {trips.map((trip) => (
              <Link key={trip.id} to={`/trips?id=${trip.id}`}>
                <TripCard {...trip} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Check out our booking page for FAQs or reach out directly. I'm always happy to help fellow travelers!
            </p>
            <Link to="/book">
              <Button variant="default" size="lg">
                Go to Booking
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Trips;
