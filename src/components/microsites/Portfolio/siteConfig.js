import Home from "./Home";

// Portfolio Site Configuration
const siteConfig = {
	id: "portfolio",
	name: "Creative Portfolio",
	description:
		"A vibrant, eye-catching portfolio template with modern animations and creative design.",
	thumbnail:
		"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1100&auto=format&fit=crop",
	category: "portfolio",
	tags: ["Portfolio", "Creative", "Animation", "Designer", "Developer"],
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
		"Eye-catching animations with GSAP and ScrollTrigger",
		"Vibrant color scheme and modern design",
		"Interactive elements and smooth transitions",
		"Creative typography and text animations",
		"Single-page design with smooth section navigation",
	],
	demoLink: "/sites/portfolio",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
