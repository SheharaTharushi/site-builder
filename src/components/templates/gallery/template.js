import GalleryBasic from "./GalleryBasic";
import GalleryMasonry from "./GalleryMasonry";
import GalleryCarousel from "./GalleryCarousel";
import GalleryFiltered from "./GalleryFiltered";
import GalleryLightbox from "./GalleryLightbox";
import AnimatedPortfolio from "./AnimatedPortfolio";
import BeautyProductCarousel from "./BeautyProductCarousel";

// Gallery section templates
const galleryTemplates = [
  {
    id: "gallery-basic",
    name: "Basic Gallery Grid",
    description:
      "A simple, clean gallery grid with responsive layout and hover effects.",
    component: GalleryBasic,
    thumbnail:
      "https://images.unsplash.com/photo-1506102383123-c8ef1e872756?q=80&w=1100&auto=format&fit=crop",
    tags: ["Gallery", "Grid", "Simple", "Images"],
  },
  {
    id: "gallery-masonry",
    name: "Masonry Gallery",
    description:
      "A Pinterest-style masonry layout gallery with different sized images.",
    component: GalleryMasonry,
    thumbnail:
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1100&auto=format&fit=crop",
    tags: ["Gallery", "Masonry", "Grid", "Creative"],
  },
  {
    id: "gallery-carousel",
    name: "Gallery Carousel",
    description:
      "A smooth, interactive carousel for showcasing multiple images with navigation.",
    component: GalleryCarousel,
    thumbnail:
      "https://images.unsplash.com/photo-1576872381149-7847515ce5d8?q=80&w=1100&auto=format&fit=crop",
    tags: ["Gallery", "Carousel", "Slideshow", "Interactive"],
  },
  {
    id: "gallery-filtered",
    name: "Filtered Gallery",
    description:
      "A filterable gallery with categories that allows users to sort content.",
    component: GalleryFiltered,
    thumbnail:
      "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=1100&auto=format&fit=crop",
    tags: ["Gallery", "Filter", "Categories", "Sorted"],
  },
  {
    id: "gallery-lightbox",
    name: "Lightbox Gallery",
    description:
      "A gallery with lightbox functionality for full-screen image viewing.",
    component: GalleryLightbox,
    thumbnail:
      "https://images.unsplash.com/photo-1549406490-9a7f86af4f3f?q=80&w=1100&auto=format&fit=crop",
    tags: ["Gallery", "Lightbox", "Fullscreen", "Zoom"],
  },
  {
    id: "animated-portfolio",
    name: "Animated Portfolio Gallery",
    component: AnimatedPortfolio,
    screenshot: "gallery-templates/animated-portfolio.png",
    description:
      "A colorful portfolio gallery with hover effects and animations.",
    category: "gallery",
    tags: ["portfolio", "creative", "gradient", "animated"],
  },
  {
    id: "beauty-product-carousel",
    name: "Beauty Product Carousel",
    description:
      "An elegant carousel showcase for beauty and cosmetic products with product cards, pricing, and purchase options.",
    component: BeautyProductCarousel,
    thumbnail:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    tags: ["Beauty", "Products", "Carousel", "E-commerce"],
  },
];

export default galleryTemplates;
