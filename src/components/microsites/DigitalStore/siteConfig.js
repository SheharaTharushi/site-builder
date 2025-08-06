import Home from "./Home";
import Products from "./Products";
import ProductDetail from "./ProductDetail";
import Checkout from "./Checkout";

// Digital Store Site Configuration
const siteConfig = {
	id: "digitalstore",
	name: "Digital Product Store",
	description:
		"A modern e-commerce template for selling digital products, courses, and downloadable content.",
	thumbnail:
		"https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=1100&auto=format&fit=crop",
	category: "ecommerce",
	tags: ["E-commerce", "Digital Products", "Store", "Download", "Course"],
	pages: [
		{
			id: "home",
			name: "Home",
			path: "/",
			component: Home,
			isHome: true,
		},
		{
			id: "products",
			name: "Products",
			path: "/products",
			component: Products,
		},
		{
			id: "product-detail",
			name: "Product Detail",
			path: "/product/:productId",
			component: ProductDetail,
		},
		{
			id: "checkout",
			name: "Checkout",
			path: "/checkout",
			component: Checkout,
		},
	],
	features: [
		"Clean, modern design optimized for digital product sales",
		"Optimized product pages with feature highlights",
		"Secure checkout process with multiple payment options",
		"Download management system for digital products",
		"Marketing sections including testimonials and product benefits",
	],
	demoLink: "/sites/digitalstore",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1613243555988-441166d4d6fd?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
