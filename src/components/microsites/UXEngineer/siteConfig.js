import Home from "./Home";

// UX Engineer Portfolio Site Configuration
const siteConfig = {
	id: "uxengineer",
	name: "UX Engineer Portfolio",
	description:
		"A professional portfolio template for UX Engineers showcasing both design and development skills.",
	thumbnail:
		"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1100&auto=format&fit=crop",
	category: "portfolio",
	tags: [
		"Portfolio",
		"UX",
		"Engineer",
		"Design",
		"Development",
		"Professional",
	],
	pages: [
		{
			id: "home",
			name: "Home",
			path: "/",
			component: Home,
			isHome: true,
		},
	],
	features: [
		"Clean, professional design with subtle animations",
		"Sections for skills, portfolio projects, and process",
		"Interactive UI elements to demonstrate UX/UI abilities",
		"Accessibility-focused design patterns",
		"Single-page layout with smooth section navigation",
	],
	demoLink: "/sites/uxengineer",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
