import heroTemplates from "./hero/template";
import navigationTemplates from "./navigation/template";
import aboutTemplates from "./about/template";
import galleryTemplates from "./gallery/template";
import teamTemplates from "./team/template";
import footerTemplates from "./footer/template";
import featuresTemplates from "./features/template";
import contactTemplates from "./contact/template";
import testimonialTemplates from "./testimonial/template";

// Export all template categories
const templates = {
	hero: heroTemplates,
	navigation: navigationTemplates,
	about: aboutTemplates,
	gallery: galleryTemplates,
	team: teamTemplates,
	footer: footerTemplates,
	features: featuresTemplates,
	contact: contactTemplates,
	testimonial: testimonialTemplates,
	// Add more categories as they are created:
	// etc.
};

// Export by category
export const getTemplatesByCategory = (category) => {
	return templates[category] || [];
};

// Export all templates
export const getAllTemplates = () => {
	return Object.values(templates).flat();
};

// Get a specific template by ID
export const getTemplateById = (id) => {
	return getAllTemplates().find((template) => template.id === id);
};

export default templates;
