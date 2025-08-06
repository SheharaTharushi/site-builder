import agriBusiness from "./AgriBusiness/siteConfig";
import portfolio from "./Portfolio/siteConfig";
import uxEngineer from "./UXEngineer/siteConfig";
import digitalStore from "./DigitalStore/siteConfig";
import cosmetics from "./Cosmetics/siteConfig";
import educational from "./Educational/siteConfig";
import devfolioPro from "./DevfolioPro/siteConfig";

// Export all site templates
const microsites = [
  educational,
  cosmetics,
  agriBusiness,
  portfolio,
  uxEngineer,
  digitalStore,
  devfolioPro,
  // Add more site templates as they are created
];

// Get all sites
export const getAllSites = () => {
  return microsites;
};

// Get a site by ID
export const getSiteById = (id) => {
  return microsites.find((site) => site.id === id);
};

// Get sites by category
export const getSitesByCategory = (category) => {
  return microsites.filter((site) => site.category === category);
};

export default microsites;
