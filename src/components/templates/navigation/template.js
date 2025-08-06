import NavSimple from "./NavSimple";
import NavFull from "./NavFull";
import NavMegaMenu from "./NavMegaMenu";
import NavSidebar from "./NavSidebar";
import NavTransparent from "./NavTransparent";

// Navigation templates
const navigationTemplates = [
	{
		id: "nav-simple",
		name: "Simple Navbar",
		description:
			"A clean, minimal navigation bar with essential links and mobile responsiveness.",
		component: NavSimple,
		thumbnail:
			"https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=1100&auto=format&fit=crop",
		tags: ["Navigation", "Simple", "Responsive", "Basic"],
	},
	{
		id: "nav-full",
		name: "Full-Featured Navigation",
		description:
			"A complete navigation with dropdown menus, search, and user authentication elements.",
		component: NavFull,
		thumbnail:
			"https://images.unsplash.com/photo-1517292987719-0369a794ec0f?q=80&w=1100&auto=format&fit=crop",
		tags: ["Navigation", "Advanced", "Dropdown", "Search"],
	},
	{
		id: "nav-mega-menu",
		name: "Mega Menu Navigation",
		description:
			"An expansive navigation with mega menus for complex site structures.",
		component: NavMegaMenu,
		thumbnail:
			"https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?q=80&w=1100&auto=format&fit=crop",
		tags: ["Navigation", "Mega Menu", "E-commerce", "Complex"],
	},
	{
		id: "nav-sidebar",
		name: "Sidebar Navigation",
		description:
			"A vertical sidebar navigation ideal for dashboards and admin interfaces.",
		component: NavSidebar,
		thumbnail:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1100&auto=format&fit=crop",
		tags: ["Navigation", "Sidebar", "Dashboard", "Admin"],
	},
	{
		id: "nav-transparent",
		name: "Transparent Navigation",
		description:
			"A stylish transparent navigation that overlays hero sections with scroll effects.",
		component: NavTransparent,
		thumbnail:
			"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1100&auto=format&fit=crop",
		tags: ["Navigation", "Transparent", "Scroll Effect", "Modern"],
	},
];

export default navigationTemplates;
