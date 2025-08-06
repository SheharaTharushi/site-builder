import FooterSimple from "./FooterSimple";
import FooterMultiColumn from "./FooterMultiColumn";
import FooterWithNewsletter from "./FooterWithNewsletter";
import SimpleFooter from "./SimpleFooter";

// Footer section templates
const footerTemplates = [
	{
		id: "footer-simple",
		name: "Simple Footer",
		description:
			"A clean, minimal footer with essential links and social media icons.",
		component: FooterSimple,
		thumbnail:
			"https://images.unsplash.com/photo-1544568100-847c62070fee?q=80&w=1100&auto=format&fit=crop",
		tags: ["Footer", "Simple", "Social Media", "Clean"],
	},
	{
		id: "footer-multi-column",
		name: "Multi-Column Footer",
		description:
			"A comprehensive footer with multiple columns of organized links and information.",
		component: FooterMultiColumn,
		thumbnail:
			"https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1100&auto=format&fit=crop",
		tags: ["Footer", "Multi-column", "Navigation", "Complete"],
	},
	{
		id: "footer-newsletter",
		name: "Footer With Newsletter",
		description:
			"A footer with newsletter subscription form, company information, and links.",
		component: FooterWithNewsletter,
		thumbnail:
			"https://images.unsplash.com/photo-1607703703520-bb638e84caf2?q=80&w=1100&auto=format&fit=crop",
		tags: ["Footer", "Newsletter", "Subscription", "Contact"],
	},
	{
		id: "simple-footer",
		name: "Simple Footer",
		component: SimpleFooter,
		screenshot: "footer-templates/simple-footer.png",
		description: "A simple, minimal footer with copyright and additional text.",
		category: "footer",
		tags: ["simple", "minimal", "dark"],
	},
];

export default footerTemplates;
