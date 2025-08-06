import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

// AgriBusiness Site Configuration
const siteConfig = {
	id: "agri-business",
	name: "Agri Business",
	description:
		"A modern website template for agricultural businesses and farms.",
	thumbnail:
		"https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1100&auto=format&fit=crop",
	category: "business",
	tags: ["Agriculture", "Farm", "Business", "Organic"],
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
			id: "services",
			name: "Services",
			path: "/services",
			component: Services,
		},
		{
			id: "contact",
			name: "Contact",
			path: "/contact",
			component: Contact,
		},
	],
	features: [
		"Responsive design optimized for all devices",
		"Ready-to-use sections for agricultural businesses",
		"Modern and clean UI with smooth animations",
		"SEO-friendly structure",
		"Easy to customize and extend",
	],
	demoLink: "/sites/agri-business",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
