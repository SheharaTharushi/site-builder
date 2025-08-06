// Import React for JSX support
import React from "react";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";

// Cosmetics Site Configuration
const siteConfig = {
  id: "cosmetics",
  name: "Beauty & Care",
  description: "A modern website template for beauty and cosmetics businesses.",
  thumbnail:
    "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=1100&auto=format&fit=crop",
  category: "business",
  tags: ["Cosmetics", "Beauty", "Skincare", "Makeup"],

  // Define the site pages and their components
  pages: [
    {
      id: "home",
      name: "Home",
      path: "/",
      component: Home,
      isHome: true,
    },
    {
      id: "about",
      name: "About Us",
      path: "/about",
      component: About,
    },
    {
      id: "products",
      name: "Our Products",
      path: "/products",
      component: Products,
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact",
      component: Contact,
    },
  ],

  // Default content for sections
  defaultContent: {
    hero: {
      title: "Beauty & Care",
      subtitle: "Discover Your Natural Beauty",
      description: "Premium beauty products for your daily skincare routine",
      primaryButtonText: "Shop Now",
      secondaryButtonText: "Learn More",
      primaryButtonLink: "/products",
      secondaryButtonLink: "/about",
      imageSrc:
        "https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=2000&auto=format&fit=crop",
      imageAlt: "Beauty products display",
    },
    features: {
      sectionTitle: "Key Features",
      title: "Our Products",
      subtitle: "Discover Our Premium Collection",
      buttonText: "View All Products",
      buttonLink: "/products",
      features: [
        {
          title: "Natural Ingredients",
          description: "Made with 100% natural and organic ingredients",
          icon: "leaf",
          image:
            "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=600&h=400&fit=crop",
        },
        {
          title: "Cruelty Free",
          description: "Never tested on animals, always ethical",
          icon: "heart",
        },
        {
          title: "Premium Quality",
          description: "High-quality products for best results",
          icon: "star",
        },
      ],
    },
    products: {
      title: "Featured Products",
      subtitle: "Discover Our Collection",
      products: [
        {
          id: "product-1",
          name: "Natural Moisturizer",
          description:
            "Hydrating face cream with natural extracts and essential oils",
          price: "$29.99",
          image:
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
        },
        {
          id: "product-2",
          name: "Rose Facial Serum",
          description: "Brightening serum with rose extract and vitamin C",
          price: "$34.99",
          image:
            "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80",
        },
        {
          id: "product-3",
          name: "Clay Face Mask",
          description:
            "Purifying mask with natural clay and botanical extracts",
          price: "$24.99",
          image:
            "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80",
        },
      ],
    },
    testimonials: {
      title: "Customer Reviews",
      subtitle: "What Our Customers Say",
      testimonials: [
        {
          id: "testimonial-1",
          image:
            "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
          name: "Sarah Johnson",
          role: "Beauty Enthusiast",
          content:
            "The natural moisturizer has completely transformed my skincare routine. My skin feels so much healthier and more radiant!",
          rating: "5",
          location: "New York, USA",
          date: "June 2025",
        },
        {
          id: "testimonial-2",
          image:
            "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop",
          name: "Emily Davis",
          role: "Professional Makeup Artist",
          content:
            "I use these products both personally and professionally. The quality is outstanding and my clients love the results.",
          rating: "5",
          location: "Los Angeles, USA",
          date: "May 2025",
        },
        {
          id: "testimonial-3",
          image:
            "https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=150&h=150&fit=crop",
          name: "Michelle Chang",
          role: "Skincare Blogger",
          content:
            "Finally found a brand that truly delivers on their promises. The ingredients are pure and the results are amazing.",
          rating: "5",
          location: "San Francisco, USA",
          date: "June 2025",
        },
      ],
    },
    footer: {
      brandName: "Beauty & Care",
      tagline: "Your Beauty, Our Priority",
      links: [
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Products", href: "/products" },
        { text: "Contact", href: "/contact" },
      ],
      social: [
        { platform: "Instagram", href: "#" },
        { platform: "Facebook", href: "#" },
        { platform: "Twitter", href: "#" },
      ],
    },
  },
};

export default siteConfig;
