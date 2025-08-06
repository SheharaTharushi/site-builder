import AboutSimple from "./AboutSimple";
import AboutWithImage from "./AboutWithImage";
import AboutTeam from "./AboutTeam";
import CreativeAbout from "./CreativeAbout";
import BeautyAbout from "./BeautyAbout";

// About section templates
const aboutTemplates = [
  {
    id: "beauty-about",
    name: "Beauty About Section",
    description:
      "An elegant about section for beauty and cosmetics brands with interactive value points and animations.",
    component: BeautyAbout,
    thumbnail:
      "https://images.unsplash.com/photo-1596704017254-9b21569ac17b?q=80&w=1100&auto=format&fit=crop",
    tags: ["Beauty", "Cosmetics", "Animated", "Interactive"],
  },
  {
    id: "about-simple",
    name: "Simple About Section",
    description:
      "A clean, minimal about section with key information about your company or brand.",
    component: AboutSimple,
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1100&auto=format&fit=crop",
    tags: ["About", "Simple", "Clean", "Company"],
  },
  {
    id: "about-with-image",
    name: "About With Image",
    description:
      "A visually engaging about section with a side image and key company information.",
    component: AboutWithImage,
    thumbnail:
      "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1100&auto=format&fit=crop",
    tags: ["About", "Image", "Story", "Vision"],
  },
  {
    id: "about-team",
    name: "About With Team",
    description:
      "An about section that highlights your team members along with company information.",
    component: AboutTeam,
    thumbnail:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1100&auto=format&fit=crop",
    tags: ["About", "Team", "People", "Leadership"],
  },
  {
    id: "creative-about",
    name: "Creative About Section",
    component: CreativeAbout,
    screenshot: "about-templates/creative-about.png",
    description:
      "A colorful about section with image profile and animated content.",
    category: "about",
    tags: ["portfolio", "creative", "gradient", "animated"],
  },
];

export default aboutTemplates;
