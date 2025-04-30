
export interface DailyOffer {
  day: string;
  title: string;
  description: string;
  price: string;
  image: string;
}

export const dailyOffers: DailyOffer[] = [
  {
    day: "Monday",
    title: "Mediterranean Mondays",
    description: "Start your week with our chef's selection of Mediterranean-inspired dishes featuring fresh seafood and aromatic herbs.",
    price: "₹1,200",
    image: "https://images.unsplash.com/photo-1579684947550-22e945225d9a?q=80&w=2074"
  },
  {
    day: "Tuesday",
    title: "Taste of Tuscany",
    description: "Experience authentic Italian cuisine with handmade pasta and our signature truffle-infused sauces.",
    price: "₹950",
    image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080"
  },
  {
    day: "Wednesday",
    title: "Wine & Dine Wednesday",
    description: "Enjoy our specially curated tasting menu with complimentary wine pairing for each course.",
    price: "₹1,800",
    image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2070"
  },
  {
    day: "Thursday",
    title: "Asian Fusion Feast",
    description: "A contemporary take on Asian classics, featuring umami-rich dishes and exotic spice profiles.",
    price: "₹1,350",
    image: "https://images.unsplash.com/photo-1512003867696-6d5ce6835040?q=80&w=2070"
  },
  {
    day: "Friday",
    title: "Chef's Tasting Experience",
    description: "Five-course seasonal tasting menu showcasing the finest local ingredients and culinary techniques.",
    price: "₹2,200",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=2070"
  },
  {
    day: "Saturday",
    title: "Weekend Brunch Extravaganza",
    description: "Indulge in our famous weekend brunch with free-flowing sparkling wine and decadent dishes.",
    price: "₹1,600",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070"
  },
  {
    day: "Sunday",
    title: "Family Style Sunday",
    description: "Gather around the table for shared platters of comfort food classics with a gourmet twist.",
    price: "₹1,400",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?q=80&w=2070"
  }
];

export const getDayOfWeek = (): string => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const today = new Date().getDay();
  return days[today];
};

export const getTodayOffer = (): DailyOffer => {
  const today = getDayOfWeek();
  return dailyOffers.find(offer => offer.day === today) || dailyOffers[0];
};
