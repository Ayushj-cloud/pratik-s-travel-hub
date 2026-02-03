export interface Testimonial {
  id: string;
  name: string;
  location: string;
  trip: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Rahul Sharma",
    location: "Mumbai",
    trip: "Ladakh 2024",
    quote:
      "The Ladakh trip was absolutely life-changing! Pratik's energy and knowledge made every moment special. The group was amazing and I made friends for life.",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Patel",
    location: "Bangalore",
    trip: "Kerala 2024",
    quote:
      "From the houseboat experience to the tea plantations, every detail was perfectly planned. Pratik goes above and beyond to ensure everyone has the best time!",
    rating: 5,
  },
  {
    id: "3",
    name: "Amit Kumar",
    location: "Delhi",
    trip: "Ladakh 2024",
    quote:
      "As a solo traveler, I was nervous at first, but Pratik made sure everyone felt included. The vlog-style documentation of our trip was an amazing bonus!",
    rating: 5,
  },
];
