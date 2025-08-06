import HeroSimple from "./HeroSimple";
import HeroWithImage from "./HeroWithImage";
import HeroWithVideo from "./HeroWithVideo";
import ColorfulPortfolioHero from "./ColorfulPortfolioHero";

// Import thumbnails
import {
	heroSimpleThumbnail,
	heroWithImageThumbnail,
	heroWithVideoThumbnail,
} from "./thumbnails/index";

// Hero section templates
const heroTemplates = [
	{
		id: "hero-simple",
		name: "Simple Hero",
		description:
			"A clean, minimal hero section with a headline, subtitle, and call-to-action button.",
		component: HeroSimple,
		thumbnail: heroSimpleThumbnail,
		tags: ["minimal", "clean", "simple"],
	},
	{
		id: "hero-with-image",
		name: "Hero with Image",
		description:
			"A hero section with text on the left and an image on the right. Great for showcasing products.",
		component: HeroWithImage,
		thumbnail: heroWithImageThumbnail,
		tags: ["image", "product", "split"],
	},
	{
		id: "hero-with-video",
		name: "Hero with Video Background",
		description:
			"An immersive hero section with a video background and centered content.",
		component: HeroWithVideo,
		thumbnail: heroWithVideoThumbnail,
		tags: ["video", "background", "immersive"],
	},
	{
		id: "colorful-portfolio-hero",
		name: "Colorful Portfolio Hero",
		component: ColorfulPortfolioHero,
		screenshot: "hero-templates/colorful-portfolio-hero.png",
		description:
			"A vibrant hero section with gradient background and smooth animations.",
		category: "hero",
		tags: ["portfolio", "creative", "gradient", "animated"],
	},
];

export default heroTemplates;
