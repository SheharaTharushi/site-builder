import TestimonialSimple from "./TestimonialSimple";
import SimpleTestimonials from "./SimpleTestimonials";

// Define testimonial templates
const testimonialTemplates = [
  {
    id: "testimonial-simple",
    name: "Simple Testimonials",
    description:
      "A clean and simple testimonial grid with customer reviews and ratings.",
    component: TestimonialSimple,
    thumbnail:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop",
    tags: ["Testimonial", "Customer", "Reviews", "Rating"],
    category: "testimonial",
  },
  // Add more testimonial templates as they are created
  {
    id: "testimonial-cards",
    name: "Testimonial Cards",
    description:
      "Modern testimonial cards with customer photos, ratings, and smooth animations.",
    component: SimpleTestimonials,
    thumbnail:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1000&auto=format&fit=crop",
    tags: ["Testimonial", "Cards", "Animated", "Rating", "Modern"],
    category: "testimonial",
  },
];

export default testimonialTemplates;
