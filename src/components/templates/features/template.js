import FeaturesGrid from "./FeaturesGrid";
import FeaturesWithIcons from "./FeaturesWithIcons";
import FeaturesAlternating from "./FeaturesAlternating";
import SkillsSection from "./SkillsSection";

// Features section templates
const featuresTemplates = [
	{
		id: "features-grid",
		name: "Features Grid",
		description:
			"A responsive grid layout showcasing multiple features with icons and descriptions.",
		component: FeaturesGrid,
		thumbnail:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1100&auto=format&fit=crop",
		tags: ["Features", "Grid", "Icons", "Responsive"],
	},
	{
		id: "features-with-icons",
		name: "Features With Icons",
		description:
			"Clean feature list with modern icons and detailed descriptions.",
		component: FeaturesWithIcons,
		thumbnail:
			"https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1100&auto=format&fit=crop",
		tags: ["Features", "Icons", "Clean", "Modern"],
	},
	{
		id: "features-alternating",
		name: "Alternating Features",
		description:
			"Features displayed in alternating image and text layout for visual appeal.",
		component: FeaturesAlternating,
		thumbnail:
			"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1100&auto=format&fit=crop",
		tags: ["Features", "Alternating", "Image", "Text"],
	},
	{
		id: "skills-section",
		name: "Animated Skills Section",
		component: SkillsSection,
		screenshot: "features-templates/skills-section.png",
		description: "A colorful skills section with animated progress bars.",
		category: "features",
		tags: ["portfolio", "skills", "gradient", "animated"],
	},
];

export default featuresTemplates;
