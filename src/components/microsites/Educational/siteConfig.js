import Home from "./Home";
import About from "./About";
import Courses from "./Courses";
import Contact from "./Contact";
import PartnerDetail from "./PartnerDetail";

// Educational Site Configuration
const siteConfig = {
  id: "educational",
  name: "University Site",
  description:
    "A modern website template for educational institutions and universities.",
  thumbnail:
    "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1100&auto=format&fit=crop",
  category: "business",
  tags: ["Education", "University", "Academic", "Higher Education"],
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
      id: "courses",
      name: "Courses",
      path: "/courses",
      component: Courses,
    },
    {
      id: "contact",
      name: "Contact",
      path: "/contact",
      component: Contact,
    },
    {
      id: "partner-detail",
      name: "Partner Details",
      path: "/partner/:partnerId",
      component: PartnerDetail,
    },
  ],
  features: [
    "Responsive design optimized for all devices",
    "Ready-to-use sections for educational institutions",
    "Modern and clean UI with smooth animations",
    "Course catalog integration",
    "Easy to customize and extend",
  ],
  demoLink: "/sites/educational",
  sitePreview: {
    desktop:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2000&auto=format&fit=crop",
    mobile:
      "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800&auto=format&fit=crop",
  },
};

export default siteConfig;
