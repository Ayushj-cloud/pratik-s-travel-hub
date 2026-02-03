import { useState } from "react";
import { motion } from "framer-motion";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { trips, getTrip } from "@/data/trips";
import { toast } from "sonner";
import { CheckCircle, Upload, Loader2, MapPin, Calendar, IndianRupee, HelpCircle } from "lucide-react";
import { z } from "zod";

// Validation schema
const bookingSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email is too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(15, "Phone number is too long").regex(/^[0-9+\-\s]+$/, "Please enter a valid phone number"),
  seats: z.string().min(1, "Please select number of seats"),
  transactionId: z.string().trim().min(4, "Transaction ID must be at least 4 characters").max(50, "Transaction ID is too long"),
  screenshotUrl: z.string().trim().url("Please enter a valid URL").max(500, "URL is too long"),
  tripId: z.string().min(1, "Please select a trip"),
});

const Book = () => {
  const [searchParams] = useSearchParams();
  const preselectedTrip = searchParams.get("trip");
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    seats: "1",
    transactionId: "",
    screenshotUrl: "",
    tripId: preselectedTrip || "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const selectedTrip = formData.tripId ? getTrip(formData.tripId) : null;

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    try {
      bookingSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsSubmitting(true);

    // Prepare data for Google Sheets
    const timestamp = new Date().toISOString();
    const sheetData = {
      Timestamp: timestamp,
      Name: formData.name.trim(),
      Email: formData.email.trim(),
      Phone: formData.phone.trim(),
      Trip: selectedTrip?.title || formData.tripId,
      Seats: formData.seats,
      TransactionID: formData.transactionId.trim(),
      ScreenshotURL: formData.screenshotUrl.trim(),
    };

    try {
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE";
      
      if (GOOGLE_SCRIPT_URL === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        // Demo mode - simulate submission
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log("Form data (demo mode):", sheetData);
        setIsSubmitted(true);
        toast.success("Booking submitted successfully!");
      } else {
        // Real submission
        await fetch(GOOGLE_SCRIPT_URL, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(sheetData),
        });
        setIsSubmitted(true);
        toast.success("Booking submitted successfully!");
      }
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Failed to submit booking. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <section className="pt-32 pb-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center"
            >
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-secondary" />
              </div>
              <h1 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Booking Submitted!
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Thank you for booking! I'll review your details and get back to you within 24-48 hours with confirmation and next steps.
              </p>
              <div className="bg-card rounded-2xl p-6 shadow-sm mb-8">
                <h3 className="font-semibold text-foreground mb-4">What happens next?</h3>
                <ul className="text-left text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0">1</span>
                    I'll verify your payment details
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0">2</span>
                    You'll receive a confirmation email
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs flex-shrink-0">3</span>
                    Join our WhatsApp group for trip updates
                  </li>
                </ul>
              </div>
              <Button
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    seats: "1",
                    transactionId: "",
                    screenshotUrl: "",
                    tripId: "",
                  });
                }}
                variant="outline"
              >
                Book Another Trip
              </Button>
            </motion.div>
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
      <section className="pt-24 pb-8 lg:pt-32 lg:pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-2xl mx-auto"
          >
            <span className="text-primary font-medium">Reserve Your Spot</span>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
              Book Your <span className="text-gradient-sunset">Adventure</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Fill in your details below to secure your place on our next trip. Limited seats available!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-8 lg:py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 lg:p-8 shadow-elevated space-y-6">
                {/* Trip Selection */}
                <div className="space-y-2">
                  <Label htmlFor="tripId" className="text-foreground font-medium">
                    Select Trip *
                  </Label>
                  <Select
                    value={formData.tripId}
                    onValueChange={(value) => handleChange("tripId", value)}
                  >
                    <SelectTrigger className={errors.tripId ? "border-destructive" : ""}>
                      <SelectValue placeholder="Choose a trip" />
                    </SelectTrigger>
                    <SelectContent>
                      {trips.map((trip) => (
                        <SelectItem key={trip.id} value={trip.id}>
                          {trip.title} - {trip.date}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.tripId && (
                    <p className="text-destructive text-sm">{errors.tripId}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-foreground font-medium">
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-foreground font-medium">
                      Phone Number *
                    </Label>
                    <Input
                      id="phone"
                      placeholder="+91 9876543210"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-destructive text-sm">{errors.phone}</p>
                    )}
                  </div>

                  {/* Seats */}
                  <div className="space-y-2">
                    <Label htmlFor="seats" className="text-foreground font-medium">
                      Number of Seats *
                    </Label>
                    <Select
                      value={formData.seats}
                      onValueChange={(value) => handleChange("seats", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select seats" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} {num === 1 ? "seat" : "seats"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Payment Section */}
                <div className="border-t border-border pt-6">
                  <h3 className="font-serif text-lg font-bold text-foreground mb-4 flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-primary" />
                    Payment Details
                  </h3>
                  <div className="bg-muted/50 rounded-xl p-4 mb-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      Please make the payment via UPI/Bank Transfer and provide the details below:
                    </p>
                    <div className="font-medium text-foreground">
                      UPI: pratikjainvlogs@upi
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Transaction ID */}
                    <div className="space-y-2">
                      <Label htmlFor="transactionId" className="text-foreground font-medium">
                        Transaction ID *
                      </Label>
                      <Input
                        id="transactionId"
                        placeholder="Enter transaction ID"
                        value={formData.transactionId}
                        onChange={(e) => handleChange("transactionId", e.target.value)}
                        className={errors.transactionId ? "border-destructive" : ""}
                      />
                      {errors.transactionId && (
                        <p className="text-destructive text-sm">{errors.transactionId}</p>
                      )}
                    </div>

                    {/* Screenshot URL */}
                    <div className="space-y-2">
                      <Label htmlFor="screenshotUrl" className="text-foreground font-medium flex items-center gap-2">
                        Payment Screenshot URL *
                        <span className="text-muted-foreground text-xs font-normal">(Upload to Imgur/Drive)</span>
                      </Label>
                      <div className="relative">
                        <Input
                          id="screenshotUrl"
                          placeholder="https://imgur.com/..."
                          value={formData.screenshotUrl}
                          onChange={(e) => handleChange("screenshotUrl", e.target.value)}
                          className={`pr-10 ${errors.screenshotUrl ? "border-destructive" : ""}`}
                        />
                        <Upload className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      </div>
                      {errors.screenshotUrl && (
                        <p className="text-destructive text-sm">{errors.screenshotUrl}</p>
                      )}
                    </div>
                  </div>
                </div>

                <Button
                  type="submit"
                  variant="hero"
                  size="xl"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Booking"
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Selected Trip Card */}
              {selectedTrip && (
                <div className="bg-card rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={selectedTrip.image}
                    alt={selectedTrip.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-primary text-sm mb-1">
                      <MapPin className="w-4 h-4" />
                      {selectedTrip.location}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-foreground mb-2">
                      {selectedTrip.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Calendar className="w-4 h-4" />
                      {selectedTrip.date}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-muted-foreground">Price per person</span>
                      <span className="text-xl font-bold text-foreground">{selectedTrip.price}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Help */}
              <div className="bg-muted/50 rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="w-5 h-5 text-primary" />
                  <h4 className="font-semibold text-foreground">Need Help?</h4>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Have questions about the booking process? Reach out!
                </p>
                <a
                  href="mailto:contact@pratikjainvlogs.com"
                  className="text-primary text-sm font-medium hover:underline"
                >
                  contact@pratikjainvlogs.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Book;
