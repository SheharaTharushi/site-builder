import ContactSimple from "./ContactSimple";
import ContactWithMap from "./ContactWithMap";
import ContactSplit from "./ContactSplit";
import CreativeContact from "./CreativeContact";
import SplitContactWithInfo from "./SplitContactWithInfo";
import SimpleContact from "./SimpleContact";

// Contact section templates
const contactTemplates = [
  {
    id: "contact-simple",
    name: "Simple Contact",
    description:
      "A clean, minimal contact form with essential fields and validation.",
    component: ContactSimple,
    thumbnail:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1100&auto=format&fit=crop",
    tags: ["Contact", "Form", "Simple", "Clean"],
  },
  {
    id: "contact-with-map",
    name: "Contact With Map",
    description: "Contact form with an embedded map showing your location.",
    component: ContactWithMap,
    thumbnail:
      "https://images.unsplash.com/photo-1577563908411-556ebe35f282?q=80&w=1100&auto=format&fit=crop",
    tags: ["Contact", "Map", "Location", "Form"],
  },
  {
    id: "contact-split",
    name: "Split Contact",
    description:
      "Two-column layout with a contact form and detailed company information.",
    component: ContactSplit,
    thumbnail:
      "https://images.unsplash.com/photo-1586880244406-556ebe35f282?q=80&w=1100&auto=format&fit=crop",
    tags: ["Contact", "Two-column", "Information", "Complete"],
  },
  {
    id: "creative-contact",
    name: "Creative Contact Form",
    component: CreativeContact,
    screenshot: "contact-templates/creative-contact.png",
    description:
      "A colorful contact section with gradient background and social icons.",
    category: "contact",
    tags: ["portfolio", "contact", "form", "animated", "social"],
  },
  {
    id: "split-contact-with-info",
    name: "Split Contact with Info",
    description:
      "A modern split layout with contact form and company information, including social media links.",
    component: SplitContactWithInfo,
    thumbnail:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1100&auto=format&fit=crop",
    tags: ["Contact", "Form", "Split Layout", "Social Media", "Info"],
  },
  {
    id: "modern-simple-contact",
    name: "Modern Simple Contact",
    description:
      "A modern contact section with animated form, social links, and contact information.",
    component: SimpleContact,
    thumbnail:
      "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1100&auto=format&fit=crop",
    tags: ["Contact", "Modern", "Animated", "Social Media", "Form"],
  },
];

export default contactTemplates;
