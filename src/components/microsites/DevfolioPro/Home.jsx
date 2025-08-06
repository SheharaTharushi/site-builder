import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "./Navigation";
import HeroSectionEditor from "../../layout/HeroSectionEditor";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const defaultContent = {
  hero: {
    backgroundImage:
      "https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2106&q=80",
    greeting: "Hi there 👋, I'm",
    name: "John Developer",
    title: "Full Stack Developer",
    description: "I turn ideas into elegant, functional digital solutions.",
    ctaText: "View My Work",
    ctaLink: "#projects",
  },
  about: {
    title: "About Me",
    bio: [
      "Hi! I'm a passionate Full Stack Developer with 5+ years of experience crafting digital solutions that make a difference.",
      "I specialize in building scalable web applications and creating seamless user experiences using modern technologies and best practices.",
      "When I'm not coding, you'll find me contributing to open-source projects, mentoring junior developers, or exploring new technologies.",
    ],
    stats: [
      { value: "5+", label: "Years Experience" },
      { value: "50+", label: "Projects Completed" },
      { value: "30+", label: "Happy Clients" },
      { value: "15+", label: "Open Source Contributions" },
    ],
    skills: {
      technical: [
        { name: "JavaScript/TypeScript", level: 95 },
        { name: "React & Next.js", level: 90 },
        { name: "Node.js & Express", level: 85 },
        { name: "Python & Django", level: 80 },
        { name: "AWS & Cloud Services", level: 75 },
        { name: "Docker & Kubernetes", level: 70 },
        { name: "MongoDB & PostgreSQL", level: 85 },
        { name: "GraphQL & REST APIs", level: 90 },
      ],
      soft: [
        "Problem Solving",
        "Team Leadership",
        "Agile Methodology",
        "Technical Writing",
        "Project Management",
        "Communication",
        "Mentoring",
        "Time Management",
      ],
    },
  },
  experience: {
    title: "Professional Journey",
    timeline: [
      {
        year: "2023 - Present",
        role: "Senior Full Stack Developer",
        company: "TechVision Solutions",
        description:
          "Leading a team of 6 developers in building scalable web applications using React, Node.js, and AWS. Improved system performance by 40% through microservices architecture implementation.",
      },
      {
        year: "2021 - 2023",
        role: "Full Stack Developer",
        company: "InnovateTech Labs",
        description:
          "Developed and maintained multiple client projects using MERN stack. Implemented CI/CD pipelines and reduced deployment time by 60%.",
      },
      {
        year: "2020 - 2021",
        role: "Frontend Developer",
        company: "Digital Dynamics",
        description:
          "Built responsive web applications using React and Next.js. Collaborated with UX team to implement pixel-perfect designs and improve user engagement by 35%.",
      },
      {
        year: "2019 - 2020",
        role: "Junior Web Developer",
        company: "WebCraft Studios",
        description:
          "Started career developing and maintaining client websites. Worked with HTML, CSS, JavaScript, and PHP. Handled 20+ client projects successfully.",
      },
    ],
  },
  projects: {
    title: "Featured Projects",
    description: "A collection of my recent work and personal projects.",
    categories: ["All", "Web App", "Mobile", "UI/UX", "Backend"],
    items: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description:
          "A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
        category: "Web App",
        image:
          "https://images.unsplash.com/photo-1555421689-d68471e189f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        technologies: ["React", "Node.js", "MongoDB", "Redux", "Stripe"],
        demoLink: "https://ecommerce-demo.dev",
        codeLink: "https://github.com/johndoe/ecommerce",
      },
      {
        id: 2,
        title: "Task Management Mobile App",
        description:
          "A cross-platform mobile app for task management with offline support and team collaboration features.",
        category: "Mobile",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        technologies: ["React Native", "Firebase", "Redux", "TypeScript"],
        demoLink: "https://taskapp-demo.dev",
        codeLink: "https://github.com/johndoe/task-app",
      },
      {
        id: 3,
        title: "AI-Powered Dashboard",
        description:
          "An analytics dashboard with AI-driven insights, interactive charts, and real-time data visualization.",
        category: "UI/UX",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        technologies: ["Vue.js", "D3.js", "TensorFlow.js", "Sass"],
        demoLink: "https://dashboard-demo.dev",
        codeLink: "https://github.com/johndoe/ai-dashboard",
      },
      {
        id: 4,
        title: "Microservices API Gateway",
        description:
          "A high-performance API gateway with service discovery, load balancing, and real-time monitoring.",
        category: "Backend",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        technologies: ["Go", "Docker", "Kubernetes", "gRPC", "Redis"],
        demoLink: "https://api-docs.dev",
        codeLink: "https://github.com/johndoe/api-gateway",
      },
      {
        id: 5,
        title: "Social Media Analytics Platform",
        description:
          "A web application that analyzes social media trends and provides actionable insights using ML.",
        category: "Web App",
        image:
          "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80",
        technologies: [
          "Next.js",
          "Python",
          "PostgreSQL",
          "scikit-learn",
          "AWS",
        ],
        demoLink: "https://social-analytics-demo.dev",
        codeLink: "https://github.com/johndoe/social-analytics",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    description:
      "I'm currently open to new opportunities and collaborations. Feel free to reach out to me!",
    email: "john.developer@example.com",
    phone: "+1234567890",
    location: "San Francisco, CA",
    socialLinks: {
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      github: "https://github.com/johndoe",
      facebook: "https://facebook.com/johndoe",
    },
    formFields: [
      { name: "name", label: "Your Name", type: "text" },
      { name: "email", label: "Your Email", type: "email" },
      { name: "message", label: "Message", type: "textarea" },
    ],
  },
};

// Predefined skill options
const proficiencyLevels = [
  { value: 95, label: "Expert (95%)" },
  { value: 90, label: "Advanced (90%)" },
  { value: 85, label: "Proficient (85%)" },
  { value: 80, label: "Intermediate (80%)" },
  { value: 75, label: "Competent (75%)" },
  { value: 70, label: "Basic (70%)" },
];

const defaultSkillOptions = {
  technical: [
    "JavaScript/TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "Python & Django",
    "AWS & Cloud Services",
    "Docker & Kubernetes",
    "MongoDB & PostgreSQL",
    "GraphQL & REST APIs",
    "Vue.js & Angular",
    "PHP & Laravel",
    "Java & Spring Boot",
    "DevOps & CI/CD",
    "Mobile Development",
    "System Architecture",
    "Web Security",
    "Ruby on Rails",
    "Go",
    "Rust",
    "Machine Learning",
    "Microservices",
  ],
  soft: [
    "Problem Solving",
    "Team Leadership",
    "Agile Methodology",
    "Technical Writing",
    "Project Management",
    "Communication",
    "Mentoring",
    "Time Management",
    "Strategic Planning",
    "Client Relations",
    "Critical Thinking",
    "Conflict Resolution",
    "Innovation",
    "Adaptability",
    "Collaboration",
    "Public Speaking",
    "Emotional Intelligence",
    "Decision Making",
    "Research",
    "Negotiation",
  ],
};

const Home = ({
  isBuilder = false,
  siteContent = defaultContent,
  sectionEdits = {},
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections = {},
}) => {
  const [content, setContent] = useState(siteContent);
  const [activeCategory, setActiveCategory] = useState("All");
  const [skillOptions, setSkillOptions] = useState(defaultSkillOptions);

  // Update content when sectionEdits change
  useEffect(() => {
    const updatedContent = { ...siteContent };
    Object.entries(sectionEdits || {}).forEach(
      ([sectionId, sectionContent]) => {
        // Deep merge to preserve nested structure
        updatedContent[sectionId] = {
          ...defaultContent[sectionId], // Base structure
          ...(updatedContent[sectionId] || {}), // Current content
          ...(sectionContent || {}), // New edits
        };
      }
    );
    setContent(updatedContent);
  }, [siteContent, sectionEdits]);

  // Handle section edit
  const handleSectionEdit = (sectionId, sectionContent) => {
    // Update local state immediately with proper structure preservation
    setContent((prevContent) => {
      const updatedSection = {
        ...defaultContent[sectionId], // Start with default structure
        ...(prevContent[sectionId] || {}), // Add current content
        ...(sectionContent || {}), // Add new changes
      };

      return {
        ...prevContent,
        [sectionId]: updatedSection,
      };
    });

    // Notify parent component
    if (onSectionEdit) {
      onSectionEdit(sectionId, sectionContent);
    }
  };

  const handleSectionDelete = (sectionId) => {
    if (onSectionDelete) {
      onSectionDelete(sectionId);
    }
  };

  const handleSectionRestore = (sectionId) => {
    if (onSectionRestore) {
      onSectionRestore(sectionId);
    }
  };

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5 },
  };

  const slideInLeft = {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.7 },
  };

  const HeroSection = () => {
    if (isBuilder) {
      if (deletedSections?.hero) {
        return (
          <AdvancedSectionEditor
            sectionId="hero"
            sectionName="Hero Section"
            initialContent={defaultContent.hero}
            onSave={onSectionEdit}
            onDelete={onSectionDelete}
            onRestore={onSectionRestore}
            isDeleted={true}
          />
        );
      }

      return (
        <AdvancedSectionEditor
          sectionId="hero"
          sectionName="Hero Section"
          initialContent={content.hero}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
        >
          <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative"
          >
            {content?.hero && (
              <>
                <div
                  className="absolute inset-0 bg-cover bg-center z-0"
                  style={{
                    backgroundImage: `url(${content.hero.backgroundImage})`,
                  }}
                >
                  <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="relative z-10 text-white text-center px-4">
                  <p className="text-xl mb-2">{content.hero.greeting}</p>
                  <h1 className="text-5xl font-bold mb-4">
                    {content.hero.name}
                  </h1>
                  <h2 className="text-3xl mb-6">{content.hero.title}</h2>
                  <p className="text-xl mb-8">{content.hero.description}</p>
                  <a
                    href={content.hero.ctaLink}
                    className="bg-primary px-8 py-3 rounded-full hover:bg-primary/80 transition"
                  >
                    {content.hero.ctaText}
                  </a>
                </div>
              </>
            )}
          </section>
        </AdvancedSectionEditor>
      );
    }

    // Regular section render
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative"
      >
        {content?.hero && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center z-0"
              style={{
                backgroundImage: `url(${content.hero.backgroundImage})`,
              }}
            >
              <div className="absolute inset-0 bg-black/50"></div>
            </div>
            <div className="relative z-10 text-white text-center px-4">
              <p className="text-xl mb-2">{content.hero.greeting}</p>
              <h1 className="text-5xl font-bold mb-4">{content.hero.name}</h1>
              <h2 className="text-3xl mb-6">{content.hero.title}</h2>
              <p className="text-xl mb-8">{content.hero.description}</p>
              <a
                href={content.hero.ctaLink}
                className="bg-primary px-8 py-3 rounded-full hover:bg-primary/80 transition"
              >
                {content.hero.ctaText}
              </a>
            </div>
          </>
        )}
      </section>
    );
  };

  const AboutSection = () => {
    if (isBuilder) {
      if (deletedSections?.about) {
        return (
          <AdvancedSectionEditor
            sectionId="about"
            sectionName="About Section"
            initialContent={defaultContent.about}
            onSave={onSectionEdit}
            onDelete={onSectionDelete}
            onRestore={onSectionRestore}
            isDeleted={true}
            repeatableFields={["stats", "skills.technical", "skills.soft"]}
            editFields={{
              title: { type: "text", label: "Section Title" },
              bio: {
                type: "array",
                label: "Biography Paragraphs",
                itemType: "textarea",
              },
              stats: {
                type: "array",
                label: "Statistics",
                itemTemplate: {
                  value: { type: "text", label: "Value" },
                  label: { type: "text", label: "Label" }
                }
              },
              skills: {
                type: "object",
                label: "Skills",
                fields: {
                  technical: {
                    type: "array",
                    label: "Technical Skills",
                    itemTemplate: {
                      name: {
                        type: "select",
                        label: "Skill Name",
                        options: skillOptions.technical.map(skill => ({ value: skill, label: skill }))
                      },
                      level: {
                        type: "select",
                        label: "Proficiency Level",
                        options: proficiencyLevels,
                      }
                    }
                  },
                  soft: {
                    type: "array",
                    label: "Soft Skills",
                    itemType: "select",
                    options: skillOptions.soft.map(skill => ({ value: skill, label: skill })),
                    allowCustom: true,
                  }
                }
              }
            }}
          />
        );
      }

      return (
        <AdvancedSectionEditor
          sectionId="about"
          sectionName="About Section"
          initialContent={content.about}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          repeatableFields={["stats", "skills.technical", "skills.soft"]}
          editFields={{
            title: { type: "text", label: "Section Title" },
            bio: {
              type: "array",
              label: "Biography Paragraphs",
              itemType: "textarea",
            },
            stats: {
              type: "array",
              label: "Statistics",
              itemTemplate: {
                value: { type: "text", label: "Value" },
                label: { type: "text", label: "Label" }
              }
            },
            skills: {
              type: "object",
              label: "Skills",
              fields: {
                technical: {
                  type: "array",
                  label: "Technical Skills",
                  itemTemplate: {
                    name: {
                      type: "select",
                      label: "Skill Name",
                      options: skillOptions.technical.map(skill => ({ value: skill, label: skill }))
                    },
                    level: {
                      type: "select",
                      label: "Proficiency Level",
                      options: proficiencyLevels,
                    }
                  }
                },
                soft: {
                  type: "array",
                  label: "Soft Skills",
                  itemType: "select",
                  options: skillOptions.soft.map(skill => ({ value: skill, label: skill })),
                  allowCustom: true,
                }
              }
            }
          }}
        >
          <section id="about" className="py-20 bg-gray-900">
            {content?.about && (
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {content.about.title}
                </h2>
                <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
                  {Array.isArray(content.about?.bio) ? (
                    content.about.bio.map((paragraph, index) => (
                      <p key={index} className="text-gray-300">
                        {paragraph}
                      </p>
                    ))
                  ) : (
                    <p className="text-gray-300">{content.about?.bio}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                  {Array.isArray(content.about?.stats) &&
                    content.about.stats.map((stat, index) => (
                      <div key={index} className="text-center">
                        <p className="text-3xl font-bold text-white">
                          {stat.value}
                        </p>
                        <p className="text-gray-400">{stat.label}</p>
                      </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 gap-12 mt-16">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Technical Skills
                    </h3>
                    <div className="space-y-4">
                      {Array.isArray(content.about?.skills?.technical) &&
                        content.about.skills.technical.map((skill, index) => (
                          <div key={index}>
                            <div className="flex justify-between mb-2">
                              <span className="text-white">{skill.name}</span>
                              <span className="text-gray-400">{proficiencyLevels.find(p => p.value === skill.level)?.label || `${skill.level}%`}</span>
                            </div>
                            <div className="h-2 bg-gray-700 rounded-full">
                              <div
                                className="h-full bg-primary rounded-full"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-6">
                      Soft Skills
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      {Array.isArray(content.about?.skills?.soft) &&
                        content.about.skills.soft.map((skill, index) => (
                          <div key={index} className="bg-gray-800 p-4 rounded">
                            <p className="text-white">{skill}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
        </AdvancedSectionEditor>
      );
    }

    // Regular section render without builder
    return (
      <section id="about" className="py-20 bg-gray-900">
        {content?.about && (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              {content.about.title}
            </h2>
            <div className="max-w-3xl mx-auto text-gray-300 space-y-4">
              {Array.isArray(content.about?.bio) ? (
                content.about.bio.map((paragraph, index) => (
                  <p key={index} className="text-gray-300">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-gray-300">{content.about?.bio}</p>
              )}
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {Array.isArray(content.about?.stats) &&
                content.about.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                    <p className="text-gray-400">{stat.label}</p>
                  </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  {Array.isArray(content.about?.skills?.technical) &&
                    content.about.skills.technical.map((skill, index) => (
                      <div key={index}>
                        <div className="flex justify-between mb-2">
                          <span className="text-white">{skill.name}</span>
                          <span className="text-gray-400">{proficiencyLevels.find(p => p.value === skill.level)?.label || `${skill.level}%`}</span>
                        </div>
                        <div className="h-2 bg-gray-700 rounded-full">
                          <div
                            className="h-full bg-primary rounded-full"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Soft Skills
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {Array.isArray(content.about?.skills?.soft) &&
                    content.about.skills.soft.map((skill, index) => (
                      <div key={index} className="bg-gray-800 p-4 rounded">
                        <p className="text-white">{skill}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    );
  };

  const ExperienceSection = () => {
    if (isBuilder) {
      if (deletedSections?.experience) {
        return (
          <AdvancedSectionEditor
            sectionId="experience"
            sectionName="Experience Section"
            initialContent={defaultContent.experience}
            onSave={onSectionEdit}
            onDelete={onSectionDelete}
            onRestore={onSectionRestore}
            isDeleted={true}
            repeatableFields={["timeline"]}
          />
        );
      }

      return (
        <AdvancedSectionEditor
          sectionId="experience"
          sectionName="Experience Section"
          initialContent={content.experience}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          repeatableFields={["timeline"]}
        >
          <section id="experience" className="py-20 bg-black">
            {content?.experience && (
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-12 text-center">
                  {content.experience.title}
                </h2>
                <div className="max-w-4xl mx-auto space-y-8">
                  {content.experience.timeline.map((item, index) => (
                    <div key={index} className="bg-gray-900 p-6 rounded-lg">
                      <p className="text-gray-400 mb-2">{item.year}</p>
                      <h3 className="text-xl font-bold text-white">
                        {item.role}
                      </h3>
                      <p className="text-primary mb-4">{item.company}</p>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>
        </AdvancedSectionEditor>
      );
    }

    // Regular section render
    return (
      <section id="experience" className="py-20 bg-black">
        {content?.experience && (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-12 text-center">
              {content.experience.title}
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {content.experience.timeline.map((item, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-400 mb-2">{item.year}</p>
                  <h3 className="text-xl font-bold text-white">{item.role}</h3>
                  <p className="text-primary mb-4">{item.company}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    );
  };

  const ProjectsSection = () => {
    if (isBuilder) {
      if (deletedSections?.projects) {
        return (
          <AdvancedSectionEditor
            sectionId="projects"
            sectionName="Projects Section"
            initialContent={defaultContent.projects}
            onSave={onSectionEdit}
            onDelete={onSectionDelete}
            onRestore={onSectionRestore}
            isDeleted={true}
            repeatableFields={["items"]}
          />
        );
      }

      return (
        <AdvancedSectionEditor
          sectionId="projects"
          sectionName="Projects Section"
          initialContent={content.projects}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          repeatableFields={["items"]}
        >
          <section id="projects" className="py-20 bg-gray-900">
            {content?.projects && (
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">
                  {content.projects.title}
                </h2>
                <p className="text-gray-400 text-center mb-12">
                  {content.projects.description}
                </p>
                <div className="flex justify-center gap-4 mb-12">
                  {Array.isArray(content.projects?.categories) &&
                    content.projects.categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-4 py-2 rounded ${
                          activeCategory === category
                            ? "bg-primary text-white"
                            : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.isArray(content.projects?.items) &&
                    content.projects.items
                      .filter(
                        (project) =>
                          activeCategory === "All" ||
                          project.category === activeCategory
                      )
                      .map((project) => (
                        <div
                          key={project.id}
                          className="bg-black rounded-lg overflow-hidden"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <p className="text-gray-300 mb-4">
                              {project.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.technologies.map((tech, idx) => (
                                <span
                                  key={idx}
                                  className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <div className="flex gap-4">
                              <a
                                href={project.demoLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80"
                              >
                                Live Demo
                              </a>
                              <a
                                href={project.codeLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-primary hover:text-primary/80"
                              >
                                Source Code
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
              </div>
            )}
          </section>
        </AdvancedSectionEditor>
      );
    }

    // Regular section render
    return (
      <section id="projects" className="py-20 bg-gray-900">
        {content?.projects && (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              {content.projects.title}
            </h2>
            <p className="text-gray-400 text-center mb-12">
              {content.projects.description}
            </p>
            <div className="flex justify-center gap-4 mb-12">
              {content.projects.categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded ${
                    activeCategory === category
                      ? "bg-primary text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.projects.items
                .filter(
                  (project) =>
                    activeCategory === "All" ||
                    project.category === activeCategory
                )
                .map((project) => (
                  <div
                    key={project.id}
                    className="bg-black rounded-lg overflow-hidden"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <a
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          Live Demo
                        </a>
                        <a
                          href={project.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </section>
    );
  };

  const ContactSection = () => {
    if (isBuilder) {
      if (deletedSections?.contact) {
        return (
          <AdvancedSectionEditor
            sectionId="contact"
            sectionName="Contact Section"
            initialContent={defaultContent.contact}
            onSave={onSectionEdit}
            onDelete={onSectionDelete}
            onRestore={onSectionRestore}
            isDeleted={true}
          />
        );
      }

      return (
        <AdvancedSectionEditor
          sectionId="contact"
          sectionName="Contact Section"
          initialContent={content.contact}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
        >
          <section id="contact" className="py-20 bg-black">
            {content?.contact && (
              <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-white mb-4 text-center">
                  {content.contact.title}
                </h2>
                <p className="text-gray-400 text-center mb-12">
                  {content.contact.description}
                </p>
                <div className="max-w-3xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Location
                      </h3>
                      <p className="text-gray-400">
                        {content.contact.location}
                      </p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Phone
                      </h3>
                      <a
                        href={`tel:${content.contact.phone}`}
                        className="text-primary hover:text-primary/80"
                      >
                        {content.contact.phone}
                      </a>
                    </div>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Email
                      </h3>
                      <a
                        href={`mailto:${content.contact.email}`}
                        className="text-primary hover:text-primary/80"
                      >
                        {content.contact.email}
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center gap-6 mb-12">
                    {Object.entries(content.contact.socialLinks).map(
                      ([platform, link]) => (
                        <a
                          key={platform}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-400 hover:text-primary text-2xl"
                        >
                          <i className={`fab fa-${platform}`}></i>
                        </a>
                      )
                    )}
                  </div>
                  <form className="space-y-6">
                    {content.contact.formFields.map((field) => (
                      <div key={field.name}>
                        <label
                          htmlFor={field.name}
                          className="block text-white mb-2"
                        >
                          {field.label}
                        </label>
                        {field.type === "textarea" ? (
                          <textarea
                            id={field.name}
                            name={field.name}
                            rows="4"
                            className="w-full bg-gray-900 text-white rounded p-3"
                          />
                        ) : (
                          <input
                            type={field.type}
                            id={field.name}
                            name={field.name}
                            className="w-full bg-gray-900 text-white rounded p-3"
                          />
                        )}
                      </div>
                    ))}
                    <button
                      type="submit"
                      className="w-full bg-primary text-white py-3 rounded hover:bg-primary/80"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            )}
          </section>
        </AdvancedSectionEditor>
      );
    }

    // Regular section render
    return (
      <section id="contact" className="py-20 bg-black">
        {content?.contact && (
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-white mb-4 text-center">
              {content.contact.title}
            </h2>
            <p className="text-gray-400 text-center mb-12">
              {content.contact.description}
            </p>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Location
                  </h3>
                  <p className="text-gray-400">{content.contact.location}</p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <a
                    href={`tel:${content.contact.phone}`}
                    className="text-primary hover:text-primary/80"
                  >
                    {content.contact.phone}
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <a
                    href={`mailto:${content.contact.email}`}
                    className="text-primary hover:text-primary/80"
                  >
                    {content.contact.email}
                  </a>
                </div>
              </div>
              <div className="flex justify-center gap-6 mb-12">
                {Object.entries(content.contact.socialLinks).map(
                  ([platform, link]) => (
                    <a
                      key={platform}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-primary text-2xl"
                    >
                      <i className={`fab fa-${platform}`}></i>
                    </a>
                  )
                )}
              </div>
              <form className="space-y-6">
                {content.contact.formFields.map((field) => (
                  <div key={field.name}>
                    <label
                      htmlFor={field.name}
                      className="block text-white mb-2"
                    >
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.name}
                        name={field.name}
                        rows="4"
                        className="w-full bg-gray-900 text-white rounded p-3"
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.name}
                        name={field.name}
                        className="w-full bg-gray-900 text-white rounded p-3"
                      />
                    )}
                  </div>
                ))}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded hover:bg-primary/80"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        )}
      </section>
    );
  };

  // Main component return
  return (
    <main className="bg-black min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default Home;