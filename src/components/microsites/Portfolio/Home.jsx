import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navigation from "./Navigation";
import BackButton from "../BackButton";

// Import template components
import ColorfulPortfolioHero from "../../templates/hero/ColorfulPortfolioHero";
import CreativeAbout from "../../templates/about/CreativeAbout";
import AnimatedPortfolio from "../../templates/gallery/AnimatedPortfolio";
import SkillsSection from "../../templates/features/SkillsSection";
import CreativeContact from "../../templates/contact/CreativeContact";
import SimpleFooter from "../../templates/footer/SimpleFooter";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Portfolio data
const portfolioData = {
  hero: {
    title: "Creative",
    subtitle: "Portfolio",
    description: "Design & Development",
    color: "bg-gradient-to-r from-violet-600 to-indigo-600",
    textColor: "text-white",
    primaryButtonText: "View Work",
    primaryButtonLink: "#work",
    secondaryButtonText: "Contact Me",
    secondaryButtonLink: "#contact",
  },
  about: {
    title: "About Me",
    color: "bg-gradient-to-r from-amber-500 to-pink-500",
    textColor: "text-white",
    paragraphs: [
      "Hello! I'm a creative professional specializing in design and development. With over 5 years of experience, I've helped businesses and individuals bring their digital visions to life through thoughtful design and clean code.",
      "My approach combines aesthetic sensibility with technical expertise to create engaging, user-focused experiences that not only look beautiful but also function flawlessly across all devices.",
    ],
    buttonText: "My Work",
    buttonLink: "#work",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&auto=format&fit=crop&q=80",
    imageAlt: "Designer",
    personName: "John Doe",
    personRole: "UI/UX Designer & Developer",
  },
  work: {
    title: "My Work",
    description:
      "A selection of my best projects showcasing creativity and technical skills.",
    color: "bg-gradient-to-r from-emerald-400 to-cyan-500",
    textColor: "text-white",
    projects: [
      {
        title: "Mobile App",
        category: "UX/UI Design",
        image:
          "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "E-commerce Website",
        category: "Web Development",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Brand Identity",
        category: "Branding",
        image:
          "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=600&auto=format&fit=crop&q=80",
      },
      {
        title: "Product Design",
        category: "3D Modeling",
        image:
          "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=600&auto=format&fit=crop&q=80",
      },
    ],
    buttonText: "View Project",
  },
  skills: {
    title: "Skills",
    description:
      "The tools and technologies I use to bring creative ideas to life.",
    color: "bg-gradient-to-r from-fuchsia-500 to-purple-600",
    textColor: "text-white",
    skills: [
      { name: "UI/UX Design", level: 90 },
      { name: "React Development", level: 85 },
      { name: "Motion Design", level: 75 },
      { name: "3D Modeling", level: 65 },
      { name: "Branding", level: 80 },
    ],
    tools: [
      "Figma",
      "React",
      "GSAP",
      "Photoshop",
      "Tailwind CSS",
      "Next.js",
      "Blender",
      "Illustrator",
    ],
  },
  contact: {
    title: "Let's Talk",
    description:
      "Have a project in mind? Let's work together to create something amazing.",
    color: "bg-gradient-to-r from-blue-600 to-indigo-700",
    textColor: "text-white",
    buttonText: "Send Message",
    socialLinks: [
      { name: "GitHub", icon: "github", url: "#" },
      { name: "Dribbble", icon: "dribbble", url: "#" },
      { name: "Facebook", icon: "facebook", url: "#" },
      { name: "Twitter", icon: "twitter", url: "#" },
    ],
  },
  footer: {
    text: `© ${new Date().getFullYear()} Creative Portfolio. All rights reserved.`,
    subtext: "Designed with ❤️ using React, GSAP, and Tailwind CSS",
    bgColor: "bg-black",
    textColor: "text-white",
  },
};

const Home = () => {
  useEffect(() => {
    // Cleanup ScrollTrigger when component unmounts
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="overflow-x-hidden">
      <BackButton />
      <Navigation />

      {/* Hero Section */}
      <ColorfulPortfolioHero {...portfolioData.hero} />

      {/* About Section */}
      <CreativeAbout {...portfolioData.about} />

      {/* Work Section */}
      <AnimatedPortfolio {...portfolioData.work} />

      {/* Skills Section */}
      <SkillsSection {...portfolioData.skills} />

      {/* Contact Section */}
      <CreativeContact {...portfolioData.contact} />

      {/* Footer */}
      <SimpleFooter {...portfolioData.footer} />
    </div>
  );
};

export default Home;
