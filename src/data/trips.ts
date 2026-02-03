import ladakhImage from "@/assets/trip-ladakh.jpg";
import keralaImage from "@/assets/trip-kerala.jpg";

export interface Trip {
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
  highlights: string[];
  inclusions: string[];
  exclusions: string[];
  featured?: boolean;
}

export const trips: Trip[] = [
  {
    id: "ladakh-2025",
    title: "Ladakh: Land of High Passes",
    location: "Leh, Ladakh",
    date: "June 15-25, 2025",
    duration: "10 Days",
    price: "₹45,000",
    seats: 20,
    seatsLeft: 8,
    image: ladakhImage,
    description:
      "Experience the breathtaking beauty of Ladakh with its stunning monasteries, crystal-clear lakes, and majestic mountain passes. This adventure will take you through Pangong Lake, Nubra Valley, and the famous Khardung La.",
    highlights: [
      "Visit Pangong Tso Lake",
      "Stay in Nubra Valley",
      "Cross Khardung La Pass",
      "Explore ancient monasteries",
      "Desert safari on double-humped camels",
    ],
    inclusions: [
      "Accommodation in hotels & camps",
      "All meals included",
      "Transportation in comfortable vehicles",
      "Permits and entry fees",
      "Expert guide & trip leader",
    ],
    exclusions: [
      "Flights to/from Leh",
      "Personal expenses",
      "Travel insurance",
      "Adventure activities",
    ],
    featured: true,
  },
  {
    id: "kerala-2025",
    title: "Kerala Backwaters Escape",
    location: "Kochi, Kerala",
    date: "October 5-12, 2025",
    duration: "7 Days",
    price: "₹35,000",
    seats: 15,
    seatsLeft: 12,
    image: keralaImage,
    description:
      "Discover God's Own Country with its serene backwaters, lush tea plantations, and pristine beaches. Cruise through palm-fringed canals and experience authentic Kerala cuisine.",
    highlights: [
      "Houseboat stay in Alleppey",
      "Munnar tea plantations",
      "Kovalam beach relaxation",
      "Kathakali performance",
      "Ayurvedic spa experience",
    ],
    inclusions: [
      "Houseboat & hotel stays",
      "Breakfast & dinner",
      "AC vehicle transport",
      "All sightseeing",
      "Professional guide",
    ],
    exclusions: [
      "Flights to/from Kochi",
      "Lunch expenses",
      "Personal shopping",
      "Optional activities",
    ],
    featured: false,
  },
];

export const getTrip = (id: string) => trips.find((trip) => trip.id === id);
