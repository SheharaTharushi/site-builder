import Home from "./Home";

const siteConfig = {
  id: "devfolio-pro",
  name: "DevfolioPro",
  description:
    "A professional, highly interactive portfolio template for modern developers and designers.",
  thumbnail:
    "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1100&auto=format&fit=crop",
  category: "portfolio",
  tags: ["Portfolio", "Professional", "Developer", "Designer", "Interactive"],
  pages: [
    {
      id: "home",
      name: "Home",
      path: "/",
      component: Home,
      isHome: true,
    },
  ],
  sections: {
    hero: {
      greeting: "Hello, I'm",
      name: "David Chen",
      title: "Software Architect & Full Stack Developer",
      description:
        "Crafting innovative digital solutions with a focus on scalability, performance, and exceptional user experience. Specializing in enterprise applications and cloud architecture.",
      ctaText: "Explore My Work",
      ctaLink: "#projects",
      backgroundImage:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=2000",
    },
    about: {
      title: "About Me",
      bio: [
        "As a Software Architect with 8+ years of experience, I've led the development of enterprise-scale applications that serve millions of users. My expertise spans both front-end and back-end development, with a particular focus on cloud-native solutions and microservices architecture.",
        "Beyond coding, I'm passionate about mentoring developers, writing technical articles, and contributing to open-source projects. I believe in creating software that not only meets business objectives but also delivers exceptional value to end-users.",
      ],
      stats: [
        { value: "8+", label: "Years Experience" },
        { value: "70+", label: "Projects Delivered" },
        { value: "45+", label: "Happy Clients" },
        { value: "15+", label: "Tech Articles" },
      ],
      skills: {
        technical: [
          { name: "Cloud Architecture", level: 95 },
          { name: "React/Next.js", level: 92 },
          { name: "Node.js/Express", level: 90 },
          { name: "AWS Services", level: 88 },
          { name: "System Design", level: 85 },
        ],
        soft: [
          "Technical Leadership",
          "Solution Architecture",
          "Team Mentoring",
          "Project Management",
          "Strategic Planning",
        ],
      },
    },
    experience: {
      title: "Professional Journey",
      timeline: [
        {
          year: "2023 - Present",
          company: "TechVision Global",
          role: "Lead Software Architect",
          description:
            "Leading architecture and development of cloud-native applications serving 2M+ users. Implemented microservices architecture that reduced system latency by 40% and improved scalability.",
        },
        {
          year: "2021 - 2023",
          company: "InnovateTech Solutions",
          role: "Senior Full Stack Developer",
          description:
            "Spearheaded development of enterprise SaaS platforms. Led a team of 8 developers and delivered 12 major projects with 100% client satisfaction.",
        },
        {
          year: "2019 - 2021",
          company: "CloudScale Systems",
          role: "Full Stack Developer",
          description:
            "Developed cloud-based solutions using AWS, React, and Node.js. Reduced deployment time by 60% through CI/CD automation and containerization.",
        },
      ],
    },
    projects: {
      title: "Featured Work",
      description: "Showcasing innovative solutions and technical excellence",
      categories: ["All", "Enterprise", "Cloud", "Web Apps", "Mobile"],
      items: [
        {
          id: 1,
          title: "Enterprise Learning Hub",
          category: "Enterprise",
          description:
            "A scalable learning management platform serving 100K+ users with real-time collaboration features and AI-powered content recommendations.",
          image:
            "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&q=80&w=1400",
          technologies: ["Next.js", "NestJS", "PostgreSQL", "AWS", "Redis"],
          demoLink: "https://enterprise-learning-hub.demo",
          codeLink: "https://github.com/davidchen/elh",
          achievements: [
            "Handled 100K+ concurrent users",
            "99.99% uptime",
            "40% faster loading times",
          ],
        },
        {
          id: 2,
          title: "FinTech Analytics Platform",
          category: "Cloud",
          description:
            "Real-time financial analytics platform processing millions of transactions daily with ML-powered insights and predictive analytics.",
          image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1400",
          technologies: [
            "Python",
            "TensorFlow",
            "Apache Kafka",
            "AWS Lambda",
            "React",
          ],
          demoLink: "https://fintech-analytics.demo",
          codeLink: "https://github.com/davidchen/fintech-analytics",
          achievements: [
            "Processes 5M+ daily transactions",
            "Real-time ML predictions",
            "Reduced analysis time by 65%",
          ],
        },
        {
          id: 3,
          title: "Smart City Mobile Platform",
          category: "Mobile",
          description:
            "IoT-integrated mobile platform for smart city management, featuring real-time monitoring and predictive maintenance.",
          image:
            "https://images.unsplash.com/photo-1573167241911-087b3b9aa09f?auto=format&fit=crop&q=80&w=1400",
          technologies: [
            "React Native",
            "GraphQL",
            "IoT",
            "AWS IoT Core",
            "MongoDB",
          ],
          demoLink: "https://smartcity.demo",
          codeLink: "https://github.com/davidchen/smart-city",
          achievements: [
            "500K+ active users",
            "30% energy savings",
            "Integration with 50K+ IoT devices",
          ],
        },
        {
          id: 4,
          title: "Healthcare AI Assistant",
          category: "Web Apps",
          description:
            "AI-powered healthcare platform for medical professionals, featuring symptom analysis and treatment recommendations.",
          image:
            "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1400",
          technologies: [
            "Vue.js",
            "Python",
            "TensorFlow",
            "FastAPI",
            "PostgreSQL",
          ],
          demoLink: "https://health-ai.demo",
          codeLink: "https://github.com/davidchen/health-ai",
          achievements: [
            "95% diagnosis accuracy",
            "Used by 1000+ medical professionals",
            "HIPAA compliant architecture",
          ],
        },
      ],
    },
    services: {
      title: "What I Offer",
      items: [
        {
          icon: "💻",
          title: "Web Development",
          description:
            "Full-stack development of modern web applications with focus on performance and scalability.",
        },
        {
          icon: "📱",
          title: "Mobile Development",
          description:
            "Cross-platform mobile app development using React Native and Flutter.",
        },
        {
          icon: "🎨",
          title: "UI/UX Design",
          description:
            "Creating intuitive and beautiful user interfaces with focus on user experience.",
        },
        {
          icon: "🚀",
          title: "Cloud Solutions",
          description:
            "Deploying and managing applications on AWS and other cloud platforms.",
        },
      ],
    },
    testimonials: {
      title: "Client Testimonials",
      items: [
        {
          name: "Sarah Johnson",
          role: "CEO at TechStart",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
          text: "Working with Alex was a game-changer for our startup. Their technical expertise and attention to detail helped us launch our platform ahead of schedule.",
        },
        {
          name: "Michael Chen",
          role: "Product Manager at InnovateCo",
          image:
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
          text: "Exceptional developer who consistently delivers high-quality work. Their ability to understand complex requirements and translate them into elegant solutions is remarkable.",
        },
      ],
    },
    contact: {
      title: "Get in Touch",
      description: "Let's discuss your next project",
      email: "hello@devfolio.pro",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      socialLinks: {
        github: "https://github.com",
        linkedin: "https://linkedin.com",
        twitter: "https://twitter.com",
        dribbble: "https://dribbble.com",
      },
      formFields: [
        { name: "name", label: "Your Name", type: "text" },
        { name: "email", label: "Your Email", type: "email" },
        { name: "message", label: "Your Message", type: "textarea" },
      ],
    },
  },
  features: [
    "Modern, minimalist design with bold typography",
    "Interactive project showcase with filtering",
    "Animated skill bars and progress indicators",
    "Dynamic experience timeline",
    "Testimonials carousel",
    "Dark/Light theme support",
    "Responsive design across all devices",
    "Smooth scroll and page transitions",
    "Contact form with validation",
    "Social media integration",
  ],
  demoLink: "/sites/devfolio-pro",
  sitePreview: {
    desktop:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2000",
    mobile:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
};

export default siteConfig;
