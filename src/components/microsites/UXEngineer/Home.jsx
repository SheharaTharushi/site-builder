import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ColorfulPortfolioHero from "../../templates/hero/ColorfulPortfolioHero";
import CreativeAbout from "../../templates/about/CreativeAbout";
import AnimatedPortfolio from "../../templates/gallery/AnimatedPortfolio";
import SkillsSection from "../../templates/features/SkillsSection";
import CreativeContact from "../../templates/contact/CreativeContact";
import SimpleFooter from "../../templates/footer/SimpleFooter";
import Navigation from "./Navigation";
import BackButton from "../BackButton";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const mainRef = useRef(null);

  useEffect(() => {
    // Create smooth scrolling between sections
    const sections = gsap.utils.toArray("section");
    
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        end: "top 20%",
        toggleClass: "active",
        markers: false,
      });
    });

    return () => {
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const portfolioProjects = [
    {
      id: 1,
      title: "User Dashboard Redesign",
      category: "UX/UI Design",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      description: "Complete redesign of a SaaS platform dashboard improving usability metrics by 38%",
      link: "#"
    },
    {
      id: 2,
      title: "Healthcare App",
      category: "Mobile Design & Development",
      imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&auto=format&fit=crop&q=80",
      description: "End-to-end development of a React Native healthcare tracking application",
      link: "#"
    },
    {
      id: 3,
      title: "E-commerce Checkout Flow",
      category: "Interaction Design",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&auto=format&fit=crop&q=80",
      description: "Optimized checkout process reducing abandonment rate by 24%",
      link: "#"
    },
    {
      id: 4,
      title: "Design System",
      category: "Component Library",
      imageUrl: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
      description: "Created comprehensive component library and design system in Figma and React",
      link: "#"
    },
    {
      id: 5,
      title: "Accessibility Audit",
      category: "Web Accessibility",
      imageUrl: "https://images.unsplash.com/photo-1573164713712-03790a178651?w=800&auto=format&fit=crop&q=80",
      description: "Comprehensive WCAG 2.1 AA compliance audit and implementation for enterprise application",
      link: "#"
    },
    {
      id: 6,
      title: "Onboarding Experience",
      category: "User Experience",
      imageUrl: "https://images.unsplash.com/photo-1600132806608-231446b2e7af?w=800&auto=format&fit=crop&q=80",
      description: "Designed and developed interactive onboarding experience increasing user activation by 45%",
      link: "#"
    }
  ];

  const skills = [
    { name: "UI Design", level: 90 },
    { name: "UX Research", level: 85 },
    { name: "React / React Native", level: 80 },
    { name: "CSS / SCSS / Tailwind", level: 95 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "Figma / Adobe XD", level: 90 },
    { name: "Design Systems", level: 80 },
    { name: "Accessibility (WCAG)", level: 85 },
    { name: "Prototyping", level: 90 },
    { name: "Animation / Motion", level: 75 },
  ];

  const aboutParagraphs = [
    "I'm a UX Engineer with 7+ years of experience bridging the gap between design and development. My unique blend of skills allows me to create beautiful, functional interfaces and implement them with clean, efficient code.",
    "With expertise in both design tools like Figma and development frameworks like React, I specialize in creating cohesive experiences from concept to implementation. I'm passionate about accessibility, performance, and creating systems that scale."
  ];

  const socialLinks = [
    { icon: "github", url: "https://github.com/username" },
    { icon: "twitter", url: "https://twitter.com/username" },
    { icon: "linkedin", url: "https://linkedin.com/in/username" },
    { icon: "dribbble", url: "https://dribbble.com/username" }
  ];

  return (
    <div ref={mainRef} className="ux-engineer-portfolio">
      <BackButton />
      <Navigation />
      
      <ColorfulPortfolioHero 
        title="UX Engineer"
        subtitle="Portfolio"
        description="Design Systems • Frontend Development • User Experience"
        color="bg-gradient-to-r from-blue-600 to-violet-600"
        primaryButtonText="View Projects"
        primaryButtonLink="#portfolio"
        secondaryButtonText="About Me"
        secondaryButtonLink="#about"
      />
      
      <CreativeAbout 
        title="About Me"
        color="bg-gradient-to-r from-slate-800 to-slate-900"
        paragraphs={aboutParagraphs}
        buttonText="Download Resume"
        buttonLink="#"
        imageSrc="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80"
        imageAlt="UX Engineer Profile"
        personName="Alex Morgan"
        personRole="UX Engineer & Design Systems Specialist"
      />
      
      <SkillsSection 
        title="My Skills"
        subtitle="Technical Expertise"
        description="My unique combination of design and development skills allows me to create seamless, user-centered experiences."
        skills={skills}
        backgroundColor="bg-white"
        textColor="text-slate-800"
        barColor="bg-gradient-to-r from-blue-500 to-violet-500"
      />
      
      <AnimatedPortfolio 
        title="Portfolio"
        subtitle="Recent Projects"
        description="A selection of my recent work spanning UX design, frontend development, and design systems."
        projects={portfolioProjects}
        backgroundColor="bg-slate-100"
        primaryColor="text-blue-600"
      />
      
      <CreativeContact 
        title="Let's Work Together"
        subtitle="Contact Me"
        description="Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you."
        backgroundColor="bg-gradient-to-r from-blue-600 to-violet-600"
        textColor="text-white"
        buttonColor="bg-white text-blue-600"
        email="hello@uxengineer.com"
        phone="+1 (555) 123-4567"
        socialLinks={socialLinks}
      />
      
      <SimpleFooter 
        text="© 2023 UX Engineer Portfolio. All rights reserved."
        textColor="text-slate-500"
        backgroundColor="bg-slate-900"
        links={[
          { text: "Privacy Policy", url: "#" },
          { text: "Terms of Service", url: "#" }
        ]}
      />
    </div>
  );
};

export default Home; 