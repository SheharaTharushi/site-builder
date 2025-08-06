# 🚀 Developer Handover Guide: Template & Microsite System

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [File Structure & Organization](#file-structure--organization)
3. [Creating New Templates](#creating-new-templates)
4. [Creating New Microsites](#creating-new-microsites)
5. [Adding Content Management](#adding-content-management)
6. [Implementing Edit/Delete Functionality](#implementing-editdelete-functionality)
7. [Best Practices & Conventions](#best-practices--conventions)
8. [Practical Examples](#practical-examples)
9. [WhatsApp Integration](#whatsapp-integration)
10. [Troubleshooting Guide](#troubleshooting-guide)

---

## 📖 Project Overview

This is a **React-based website builder** that allows users to:

- Choose from pre-built microsite templates
- Customize content through an intuitive editing interface
- Add/edit/delete sections dynamically
- Save changes to localStorage
- Request website builds via email/WhatsApp

### 🏗️ Architecture Overview

```
User Flow: Template Selection → Content Editing → Build Request
├── Template Library (microsites)
├── Content Editor (AdvancedSectionEditor)
├── State Management (localStorage)
└── Build Request System (Email/WhatsApp)
```

---

## 📁 File Structure & Organization

### Core Directory Structure

```
src/
├── components/
│   ├── microsites/           # Complete website templates
│   │   ├── AgriBusiness/     # Example microsite
│   │   │   ├── Home.jsx      # Homepage component
│   │   │   ├── About.jsx     # About page component
│   │   │   ├── Services.jsx  # Services page component
│   │   │   ├── Contact.jsx   # Contact page component
│   │   │   ├── Navigation.jsx # Site navigation
│   │   │   └── siteConfig.js # Site configuration
│   │   └── index.js          # Microsite registry
│   ├── templates/            # Reusable UI components
│   │   ├── hero/            # Hero section templates
│   │   ├── features/        # Features section templates
│   │   ├── gallery/         # Gallery section templates
│   │   ├── testimonial/     # Testimonial templates
│   │   ├── about/           # About section templates
│   │   ├── team/            # Team section templates
│   │   └── footer/          # Footer templates
│   ├── layout/              # Layout & editing components
│   │   ├── AdvancedSectionEditor.jsx
│   │   ├── HeroSectionEditor.jsx
│   │   └── DeletedSectionsPanel.jsx
│   └── pages/               # Main application pages
│       ├── SiteBuilder.jsx  # Main editing interface
│       └── SitePreview.jsx  # Preview mode
├── constants/
│   └── config.js           # App configuration
└── utils/
    └── validators.js       # URL validation utilities
```

### 🎯 Key Principles

1. **Separation of Concerns**: Templates are pure UI, microsites combine templates
2. **Reusability**: Templates can be used across multiple microsites
3. **Consistency**: All microsites follow the same structure and patterns
4. **Maintainability**: Clear naming conventions and organized folders

---

## 🎨 Creating New Templates

Templates are reusable UI components that can be used across multiple microsites.

### Step 1: Create Template Component

**Example: Creating a new CTA (Call-to-Action) template**

```jsx
// src/components/templates/cta/CTASimple.jsx
import { motion } from "framer-motion";

const CTASimple = ({
	title = "Ready to Get Started?",
	subtitle = "Join thousands of satisfied customers today",
	primaryButtonText = "Get Started",
	secondaryButtonText = "Learn More",
	primaryButtonLink = "/signup",
	secondaryButtonLink = "/about",
	backgroundImage,
}) => {
	return (
		<section className="relative py-20 px-4 sm:px-6 lg:px-8">
			{/* Background Image */}
			{backgroundImage && (
				<div className="absolute inset-0">
					<img
						src={backgroundImage}
						alt="Background"
						className="w-full h-full object-cover"
					/>
					<div className="absolute inset-0 bg-black/60"></div>
				</div>
			)}

			<div className="relative max-w-4xl mx-auto text-center">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
						{title}
					</h2>
					<p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
						{subtitle}
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center">
						<a
							href={primaryButtonLink}
							className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
						>
							{primaryButtonText}
						</a>
						<a
							href={secondaryButtonLink}
							className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
						>
							{secondaryButtonText}
						</a>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default CTASimple;
```

### Step 2: Template Requirements Checklist

✅ **Props with Defaults**: Always provide sensible default values  
✅ **Responsive Design**: Mobile-first approach using Tailwind classes  
✅ **Animations**: Use framer-motion for smooth interactions  
✅ **Accessibility**: Proper alt texts, semantic HTML, ARIA labels  
✅ **Styling**: Use Tailwind CSS with design system colors  
✅ **Performance**: Optimize images, lazy loading where appropriate

### Step 3: Template Variants

Create multiple variants for flexibility:

```
templates/cta/
├── CTASimple.jsx        # Basic CTA with buttons
├── CTAWithImage.jsx     # CTA with background image
├── CTAMinimal.jsx       # Minimal text-only CTA
└── CTANewsletter.jsx    # CTA with email signup
```

---

## 🏢 Creating New Microsites

Microsites are complete website templates that combine multiple templates into a cohesive experience.

### Step 1: Create Microsite Directory

```
src/components/microsites/TechStartup/
├── Home.jsx           # Homepage
├── About.jsx          # About page
├── Services.jsx       # Services page
├── Contact.jsx        # Contact page
├── Navigation.jsx     # Site navigation
└── siteConfig.js     # Site configuration
```

### Step 2: Create siteConfig.js

```javascript
// src/components/microsites/TechStartup/siteConfig.js
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";

const siteConfig = {
	id: "tech-startup",
	name: "Tech Startup",
	description: "Modern website template for technology startups",
	thumbnail:
		"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1100&auto=format&fit=crop",
	category: "business",
	tags: ["Technology", "Startup", "SaaS", "Modern"],

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
		"Modern and clean UI with smooth animations",
		"SEO-friendly structure",
		"Easy to customize and extend",
	],

	demoLink: "/sites/tech-startup",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
```

### Step 3: Create Navigation Component

```jsx
// src/components/microsites/TechStartup/Navigation.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navigation = ({
	brandName = "Tech Startup",
	brandColor = "#3B82F6",
	logo,
}) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Contact", href: "/contact" },
	];

	return (
		<nav className="bg-white shadow-sm border-b">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					{/* Brand */}
					<div className="flex items-center">
						{logo ? (
							<img src={logo} alt={brandName} className="h-8 w-auto" />
						) : (
							<span className="text-xl font-bold" style={{ color: brandColor }}>
								{brandName}
							</span>
						)}
					</div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex space-x-8">
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="text-gray-700 hover:text-primary transition-colors"
							>
								{link.name}
							</a>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="md:hidden p-2"
					>
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16M4 18h16"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden py-4"
					>
						{navLinks.map((link) => (
							<a
								key={link.name}
								href={link.href}
								className="block py-2 text-gray-700 hover:text-primary transition-colors"
							>
								{link.name}
							</a>
						))}
					</motion.div>
				)}
			</div>
		</nav>
	);
};

export default Navigation;
```

### Step 4: Register New Microsite

```javascript
// src/components/microsites/index.js
import agriBusiness from "./AgriBusiness/siteConfig";
import techStartup from "./TechStartup/siteConfig"; // Add new import

const sites = [
	agriBusiness,
	techStartup, // Register new microsite
];

export const getSiteById = (id) => sites.find((site) => site.id === id);
export const getAllSites = () => sites;
export default sites;
```

---

## ✏️ Adding Content Management

### Step 1: Define Content Structure

Create default content objects for each section:

```jsx
// Example: Home.jsx with content management
const Home = ({
	customData,
	sectionEdits,
	onSectionEdit,
	onSectionDelete,
	onSectionRestore,
	deletedSections,
}) => {
	// Define default content structures
	const heroDefaultContent = {
		title: "Transform Your Business",
		subtitle: "Revolutionary solutions for modern challenges",
		primaryButtonText: "Get Started",
		secondaryButtonText: "Learn More",
		primaryButtonLink: "/contact",
		secondaryButtonLink: "/about",
		imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
		imageAlt: "Hero image",
	};

	const featuresDefaultContent = {
		title: "Why Choose Us",
		subtitle: "Powerful features that set us apart",
		features: [
			{
				title: "Innovation",
				description: "Cutting-edge technology solutions",
				icon: "⚡",
				image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
			},
			// ... more features
		],
	};

	// Content with safety checks
	const heroContent = sectionEdits?.hero || heroDefaultContent;
	const featuresContent = (() => {
		const saved = sectionEdits?.features;
		if (saved && saved.features && Array.isArray(saved.features)) {
			return saved;
		}
		return {
			...featuresDefaultContent,
			...saved,
			features:
				saved?.features && Array.isArray(saved.features)
					? saved.features
					: featuresDefaultContent.features,
		};
	})();

	// ... render functions
};
```

### Step 2: Content Structure Guidelines

**🔥 Required Fields for Each Content Type:**

**Hero Sections:**

```javascript
{
	title: "Main headline",
	subtitle: "Supporting text",
	primaryButtonText: "Primary CTA",
	secondaryButtonText: "Secondary CTA",
	primaryButtonLink: "/link1",
	secondaryButtonLink: "/link2",
	imageSrc: "https://...",
	imageAlt: "Alt text"
}
```

**Repeatable Content (Features, Team, Gallery):**

```javascript
{
	title: "Section title",
	subtitle: "Section subtitle",
	[arrayField]: [
		{
			title: "Item title",
			description: "Item description",
			image: "https://...",
			// ... other fields
		}
	]
}
```

**Content Safety Patterns:**

```javascript
// Always validate arrays
const safeContent = (() => {
	const saved = sectionEdits?.sectionId;
	if (saved && saved.arrayField && Array.isArray(saved.arrayField)) {
		return saved;
	}
	return {
		...defaultContent,
		...saved,
		arrayField:
			saved?.arrayField && Array.isArray(saved.arrayField)
				? saved.arrayField
				: defaultContent.arrayField,
	};
})();
```

---

## ⚙️ Implementing Edit/Delete Functionality

### Step 1: Import Required Components

```jsx
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";
import HeroSectionEditor from "../../layout/HeroSectionEditor"; // For hero sections
```

### Step 2: Create Render Functions

```jsx
// For regular sections with AdvancedSectionEditor
const renderFeaturesSection = () => {
	if (deletedSections?.features) {
		return (
			<AdvancedSectionEditor
				sectionId="features"
				sectionName="Features Section"
				initialContent={featuresDefaultContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				isDeleted={true}
				repeatableFields={["features"]} // For arrays
			/>
		);
	}

	return (
		<AdvancedSectionEditor
			sectionId="features"
			sectionName="Features Section"
			initialContent={featuresContent}
			onSave={onSectionEdit}
			onDelete={onSectionDelete}
			onRestore={onSectionRestore}
			repeatableFields={["features"]}
		>
			<FeaturesTemplate
				title={featuresContent.title}
				subtitle={featuresContent.subtitle}
				features={featuresContent.features}
			/>
		</AdvancedSectionEditor>
	);
};

// For hero sections with HeroSectionEditor
const renderHeroSection = () => {
	if (deletedSections?.hero) {
		return (
			<HeroSectionEditor
				sectionId="hero"
				sectionName="Hero Section"
				initialContent={heroDefaultContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				isDeleted={true}
			/>
		);
	}

	return (
		<HeroSectionEditor
			sectionId="hero"
			sectionName="Hero Section"
			initialContent={heroContent}
			onSave={onSectionEdit}
			onDelete={onSectionDelete}
			onRestore={onSectionRestore}
		>
			<HeroTemplate
				title={heroContent.title}
				subtitle={heroContent.subtitle}
				// ... other props
			/>
		</HeroSectionEditor>
	);
};
```

### Step 3: Render in JSX

```jsx
return (
	<div className="min-h-screen bg-white">
		<Navigation
			brandName={customData?.siteName || "Site Name"}
			brandColor={customData?.brandColor}
		/>

		{/* Use render functions */}
		{renderHeroSection()}
		{renderFeaturesSection()}

		<Footer />
	</div>
);
```

### Step 4: Editor Types & When to Use

**🎯 HeroSectionEditor:**

- Use for: Hero sections, simple content blocks
- Features: Basic text/image fields, URL validation
- Best for: Sections with fixed structure

**🎯 AdvancedSectionEditor:**

- Use for: Complex sections with repeatable content
- Features: Accordion interface, add/remove items, arrays
- Best for: Features, testimonials, team members, galleries

**🎯 RepeatableFields Array:**

```javascript
// Specify which fields are arrays that can be managed
repeatableFields={["features", "testimonials", "team", "gallery"]}
```

---

## 💡 Best Practices & Conventions

### 🎨 Design System

**Colors:**

```css
/* Primary colors defined in CSS variables */
--primary-color: #3b82f6 (customizable) .bg-primary, .text-primary, .border-primary;
```

**Spacing:**

```jsx
// Consistent section spacing
className = "py-16 px-4 sm:px-6 lg:px-8"; // Sections
className = "max-w-7xl mx-auto"; // Container
className = "space-y-8"; // Vertical spacing
```

**Typography:**

```jsx
// Heading hierarchy
h1: "text-4xl md:text-5xl font-bold"; // Main titles
h2: "text-3xl md:text-4xl font-bold"; // Section titles
h3: "text-2xl md:text-3xl font-bold"; // Subsection titles
p: "text-lg text-gray-600"; // Body text
```

### 📝 Naming Conventions

**Files:**

- PascalCase for components: `HeroWithImage.jsx`
- camelCase for utilities: `validateImageUrl.js`
- kebab-case for folders: `agri-business/`

**Variables:**

```javascript
// Content objects
const heroDefaultContent = {};
const featuresDefaultContent = {};

// Render functions
const renderHeroSection = () => {};
const renderFeaturesSection = () => {};

// Section IDs (match object keys)
sectionId = "hero"; // matches sectionEdits.hero
sectionId = "features"; // matches sectionEdits.features
sectionId = "teamGrid"; // matches sectionEdits.teamGrid
```

**Props Pattern:**

```jsx
// Always destructure props with defaults
const Component = ({
	title = "Default Title",
	subtitle = "Default Subtitle",
	customData,
	sectionEdits,
	onSectionEdit,
	onSectionDelete,
	onSectionRestore,
	deletedSections,
}) => {
	// Component logic
};
```

### 🔒 Data Safety

**Always validate arrays:**

```javascript
// ❌ Wrong - can crash if undefined
features.map(feature => ...)

// ✅ Correct - safe with fallback
(features || []).map(feature => ...)

// ✅ Better - validate in content getter
const featuresContent = (() => {
	const saved = sectionEdits?.features;
	if (saved && saved.features && Array.isArray(saved.features)) {
		return saved;
	}
	return defaultContent;
})();
```

**URL Validation:**

```javascript
// URLs should always have fallbacks
imageSrc: feature.image || "https://images.unsplash.com/default-image";
imageAlt: feature.imageAlt || feature.title || "Default alt text";
```

### 🚀 Performance

**Image Optimization:**

```jsx
// Always specify dimensions for layout stability
<img
	src={imageSrc}
	alt={imageAlt}
	className="w-full h-64 object-cover" // Fixed height
	loading="lazy" // Lazy loading
/>
```

**Motion Performance:**

```jsx
// Use efficient animation properties
initial={{ opacity: 0, y: 30 }}      // ✅ Good
animate={{ opacity: 1, y: 0 }}        // ✅ Good

initial={{ left: -100 }}              // ❌ Causes layout shifts
animate={{ left: 0 }}                 // ❌ Causes layout shifts
```

---

## 📚 Practical Examples

### Example 1: Adding a New Services Section

Let's walk through adding a complete services section to the AgriBusiness microsite:

**Step 1: Create Template Component**

```jsx
// src/components/templates/services/ServicesGrid.jsx
import { motion } from "framer-motion";

const ServicesGrid = ({
	title = "Our Services",
	subtitle = "Comprehensive solutions for your business",
	services = [],
}) => {
	return (
		<section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{(services || []).map((service, index) => (
						<motion.div
							key={service.id || index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="bg-white rounded-lg shadow-lg overflow-hidden"
						>
							{service.image && (
								<img
									src={service.image}
									alt={service.imageAlt || service.title}
									className="w-full h-48 object-cover"
								/>
							)}
							<div className="p-6">
								<div className="text-4xl mb-4">{service.icon}</div>
								<h3 className="text-xl font-bold text-gray-900 mb-3">
									{service.title}
								</h3>
								<p className="text-gray-600 mb-4">{service.description}</p>
								{service.price && (
									<div className="text-2xl font-bold text-primary">
										{service.price}
									</div>
								)}
								{service.features && (
									<ul className="mt-4 space-y-2">
										{service.features.map((feature, idx) => (
											<li
												key={idx}
												className="flex items-center text-sm text-gray-600"
											>
												<span className="text-green-500 mr-2">✓</span>
												{feature}
											</li>
										))}
									</ul>
								)}
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default ServicesGrid;
```

**Step 2: Add to AgriBusiness Home.jsx**

```jsx
// Add import
import ServicesGrid from "../../templates/services/ServicesGrid";

// Add default content
const servicesDefaultContent = {
	title: "Our Agricultural Services",
	subtitle: "Comprehensive farming solutions for modern agriculture",
	services: [
		{
			id: 1,
			title: "Crop Consultation",
			description: "Expert advice on crop selection and management",
			icon: "🌱",
			image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d",
			imageAlt: "Crop consultation service",
			price: "Starting at $100",
			features: [
				"Soil analysis",
				"Crop recommendations",
				"Growth monitoring",
				"Harvest planning",
			],
		},
		{
			id: 2,
			title: "Equipment Rental",
			description: "Modern farming equipment for rent",
			icon: "🚜",
			image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30",
			imageAlt: "Farm equipment rental",
			price: "From $50/day",
			features: [
				"Latest machinery",
				"Maintenance included",
				"Operator training",
				"Flexible terms",
			],
		},
		{
			id: 3,
			title: "Organic Certification",
			description: "Get your farm certified for organic production",
			icon: "🏆",
			image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae",
			imageAlt: "Organic certification service",
			price: "Contact for quote",
			features: [
				"Documentation help",
				"Inspection support",
				"Compliance guidance",
				"Certification maintenance",
			],
		},
	],
};

// Add content safety check
const servicesContent = (() => {
	const saved = sectionEdits?.services;
	if (saved && saved.services && Array.isArray(saved.services)) {
		return saved;
	}
	return {
		...servicesDefaultContent,
		...saved,
		services:
			saved?.services && Array.isArray(saved.services)
				? saved.services
				: servicesDefaultContent.services,
	};
})();

// Add render function
const renderServicesSection = () => {
	if (deletedSections?.services) {
		return (
			<AdvancedSectionEditor
				sectionId="services"
				sectionName="Services Section"
				initialContent={servicesDefaultContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				isDeleted={true}
				repeatableFields={["services"]}
			/>
		);
	}

	return (
		<AdvancedSectionEditor
			sectionId="services"
			sectionName="Services Section"
			initialContent={servicesContent}
			onSave={onSectionEdit}
			onDelete={onSectionDelete}
			onRestore={onSectionRestore}
			repeatableFields={["services"]}
		>
			<ServicesGrid
				title={servicesContent.title}
				subtitle={servicesContent.subtitle}
				services={servicesContent.services}
			/>
		</AdvancedSectionEditor>
	);
};

// Add to JSX render
return (
	<div className="min-h-screen bg-white">
		<Navigation /* ... */ />
		{renderHeroSection()}
		{renderFeaturesSection()}
		{renderServicesSection()} {/* ← Add here */}
		{renderGallerySection()}
		{/* ... other sections */}
	</div>
);
```

**Step 3: Update DeletedSectionsPanel**

```jsx
// src/components/layout/DeletedSectionsPanel.jsx
const sectionNames = {
	// ... existing sections
	services: "Services Section",
};
```

### Example 2: Creating a Complete New Microsite

Let's create a "Restaurant" microsite from scratch:

**Step 1: Create Directory Structure**

```
src/components/microsites/Restaurant/
├── Home.jsx
├── Menu.jsx
├── About.jsx
├── Contact.jsx
├── Navigation.jsx
└── siteConfig.js
```

**Step 2: Create siteConfig.js**

```javascript
// src/components/microsites/Restaurant/siteConfig.js
import Home from "./Home";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";

const siteConfig = {
	id: "restaurant",
	name: "Restaurant",
	description: "Professional website template for restaurants and cafes",
	thumbnail:
		"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1100&auto=format&fit=crop",
	category: "hospitality",
	tags: ["Restaurant", "Food", "Dining", "Hospitality"],

	pages: [
		{
			id: "home",
			name: "Home",
			path: "/",
			component: Home,
			isHome: true,
		},
		{
			id: "menu",
			name: "Menu",
			path: "/menu",
			component: Menu,
		},
		{
			id: "about",
			name: "About",
			path: "/about",
			component: About,
		},
		{
			id: "contact",
			name: "Contact",
			path: "/contact",
			component: Contact,
		},
	],

	features: [
		"Beautiful food photography showcase",
		"Interactive menu with categories",
		"Online reservation system",
		"Location and contact information",
		"Social media integration",
	],

	demoLink: "/sites/restaurant",
	sitePreview: {
		desktop:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2000&auto=format&fit=crop",
		mobile:
			"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=800&auto=format&fit=crop",
	},
};

export default siteConfig;
```

**Step 3: Create Home.jsx with Full Edit Functionality**

```jsx
// src/components/microsites/Restaurant/Home.jsx
import React from "react";
import Navigation from "./Navigation";
import HeroSectionEditor from "../../layout/HeroSectionEditor";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

// Import templates
import FooterSimple from "../../templates/footer/FooterSimple";

const Home = ({
	customData,
	sectionEdits,
	onSectionEdit,
	onSectionDelete,
	onSectionRestore,
	deletedSections,
}) => {
	// Default content structures
	const heroDefaultContent = {
		title: "Welcome to Bella Vista",
		subtitle: "Authentic Italian cuisine in the heart of the city",
		primaryButtonText: "View Menu",
		secondaryButtonText: "Make Reservation",
		primaryButtonLink: "/menu",
		secondaryButtonLink: "/contact",
		imageSrc: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
		imageAlt: "Restaurant interior",
	};

	const menuPreviewDefaultContent = {
		title: "Our Signature Dishes",
		subtitle: "Crafted with love using the finest ingredients",
		dishes: [
			{
				id: 1,
				name: "Pasta Carbonara",
				description: "Classic Roman pasta with eggs, cheese, and pancetta",
				price: "$18",
				image: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5",
				category: "pasta",
				isVegetarian: false,
			},
			{
				id: 2,
				name: "Margherita Pizza",
				description:
					"Fresh mozzarella, tomatoes, and basil on wood-fired crust",
				price: "$16",
				image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
				category: "pizza",
				isVegetarian: true,
			},
			{
				id: 3,
				name: "Tiramisu",
				description: "Traditional Italian dessert with coffee and mascarpone",
				price: "$8",
				image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9",
				category: "dessert",
				isVegetarian: true,
			},
		],
	};

	// Content with safety checks
	const heroContent = sectionEdits?.hero || heroDefaultContent;

	const menuPreviewContent = (() => {
		const saved = sectionEdits?.menuPreview;
		if (saved && saved.dishes && Array.isArray(saved.dishes)) {
			return saved;
		}
		return {
			...menuPreviewDefaultContent,
			...saved,
			dishes:
				saved?.dishes && Array.isArray(saved.dishes)
					? saved.dishes
					: menuPreviewDefaultContent.dishes,
		};
	})();

	// Render functions
	const renderHeroSection = () => {
		if (deletedSections?.hero) {
			return (
				<HeroSectionEditor
					sectionId="hero"
					sectionName="Hero Section"
					initialContent={heroDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
				/>
			);
		}

		return (
			<HeroSectionEditor
				sectionId="hero"
				sectionName="Hero Section"
				initialContent={heroContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
			>
				<section className="relative h-screen flex items-center justify-center">
					<div className="absolute inset-0">
						<img
							src={heroContent.imageSrc}
							alt={heroContent.imageAlt}
							className="w-full h-full object-cover"
						/>
						<div className="absolute inset-0 bg-black/50"></div>
					</div>
					<div className="relative text-center text-white max-w-4xl mx-auto px-4">
						<h1 className="text-5xl md:text-6xl font-bold mb-6">
							{heroContent.title}
						</h1>
						<p className="text-xl md:text-2xl mb-8">{heroContent.subtitle}</p>
						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<a
								href={heroContent.primaryButtonLink}
								className="px-8 py-3 bg-yellow-600 text-white font-semibold rounded-lg hover:bg-yellow-700 transition-colors"
							>
								{heroContent.primaryButtonText}
							</a>
							<a
								href={heroContent.secondaryButtonLink}
								className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
							>
								{heroContent.secondaryButtonText}
							</a>
						</div>
					</div>
				</section>
			</HeroSectionEditor>
		);
	};

	const renderMenuPreviewSection = () => {
		if (deletedSections?.menuPreview) {
			return (
				<AdvancedSectionEditor
					sectionId="menuPreview"
					sectionName="Menu Preview"
					initialContent={menuPreviewDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["dishes"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="menuPreview"
				sectionName="Menu Preview"
				initialContent={menuPreviewContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["dishes"]}
			>
				<section className="py-16 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								{menuPreviewContent.title}
							</h2>
							<p className="text-xl text-gray-600">
								{menuPreviewContent.subtitle}
							</p>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{(menuPreviewContent.dishes || []).map((dish, index) => (
								<div
									key={dish.id || index}
									className="bg-white rounded-lg shadow-lg overflow-hidden"
								>
									<img
										src={dish.image}
										alt={dish.name}
										className="w-full h-48 object-cover"
									/>
									<div className="p-6">
										<div className="flex justify-between items-start mb-2">
											<h3 className="text-xl font-bold text-gray-900">
												{dish.name}
											</h3>
											<span className="text-2xl font-bold text-yellow-600">
												{dish.price}
											</span>
										</div>
										<p className="text-gray-600 mb-3">{dish.description}</p>
										<div className="flex items-center gap-2">
											<span className="px-2 py-1 bg-gray-100 text-gray-600 text-sm rounded">
												{dish.category}
											</span>
											{dish.isVegetarian && (
												<span className="px-2 py-1 bg-green-100 text-green-600 text-sm rounded">
													Vegetarian
												</span>
											)}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>
			</AdvancedSectionEditor>
		);
	};

	return (
		<div className="min-h-screen bg-white">
			<Navigation
				brandName={customData?.siteName || "Bella Vista"}
				brandColor={customData?.brandColor || "#D97706"}
			/>

			{renderHeroSection()}
			{renderMenuPreviewSection()}

			<FooterSimple />
		</div>
	);
};

export default Home;
```

**Step 4: Register the Microsite**

```javascript
// src/components/microsites/index.js
import agriBusiness from "./AgriBusiness/siteConfig";
import restaurant from "./Restaurant/siteConfig"; // Add import

const sites = [
	agriBusiness,
	restaurant, // Add to array
];

export const getSiteById = (id) => sites.find((site) => site.id === id);
export const getAllSites = () => sites;
export default sites;
```

---

## 🔗 WhatsApp Integration

The system includes WhatsApp integration for build requests. Here's how to maintain and extend it:

### Current Implementation

**Configuration:**

```javascript
// src/constants/config.js
export const WHATSAPP_CONFIG = {
	phoneNumber: "0764067093",
	defaultMessage:
		"Hi! I'm interested in building a website using your template system.",
};

export const MESSAGE_TEMPLATES = {
	siteRequest: (siteData) => {
		const {
			templateName,
			siteName,
			contactEmail,
			brandColor,
			sectionEdits,
			notes,
			shareableLink,
		} = siteData;

		return `🌟 *Website Build Request* 🌟

📋 *Template:* ${templateName || "Not specified"}
🏢 *Site Name:* ${siteName || "Not specified"}
📧 *Contact Email:* ${contactEmail || "Not specified"}
🎨 *Brand Color:* ${brandColor || "Not specified"}

📝 *Content Changes:*
${
	Object.keys(sectionEdits || {}).length > 0
		? Object.keys(sectionEdits)
				.map((section) => `• ${section} section modified`)
				.join("\n")
		: "• No custom changes made"
}

💬 *Additional Notes:*
${notes || "None provided"}

🔗 *Preview Link:* ${shareableLink || "Not available"}

Looking forward to working with you! 🚀`;
	},
};
```

**WhatsApp Message Modal:**

```jsx
// src/components/layout/WhatsAppMessageModal.jsx
// Full component for editing messages before sending
```

### Adding WhatsApp to New Features

**For Build Requests:**

```jsx
// In SiteBuilder.jsx or any component
import { WHATSAPP_CONFIG, MESSAGE_TEMPLATES } from "../constants/config";

const handleWhatsAppRequest = () => {
	const message = MESSAGE_TEMPLATES.siteRequest({
		templateName: selectedSite?.name,
		siteName: formData.siteName,
		contactEmail: formData.contactEmail,
		brandColor: formData.brandColor,
		sectionEdits,
		notes: formData.notes,
		shareableLink: `${window.location.origin}/preview/${selectedSite?.id}`,
	});

	setWhatsAppMessage(message);
	setShowWhatsAppModal(true);
};
```

**For Custom Requests:**

```javascript
// Add new message template
export const MESSAGE_TEMPLATES = {
	// ... existing templates
	customFeature: (data) => {
		return `🔧 *Custom Feature Request* 🔧

📋 *Request Type:* ${data.type}
📝 *Description:* ${data.description}
💰 *Budget Range:* ${data.budget}
📅 *Timeline:* ${data.timeline}

Let's discuss your custom requirements! 🤝`;
	},
};
```

---

## 🐛 Troubleshooting Guide

### Common Issues & Solutions

**1. "Cannot read properties of undefined (reading 'map')"**

```javascript
// Problem: Array is undefined
features.map(...)

// Solution: Add safety check
(features || []).map(...)

// Better: Validate in content structure
const safeFeatures = content.features && Array.isArray(content.features)
	? content.features
	: defaultFeatures;
```

**2. "Section edit modal shows empty fields"**

```javascript
// Problem: Content not syncing with initialContent
const [content, setContent] = useState(initialContent || {});

// Solution: Add useEffect to sync
useEffect(() => {
	if (initialContent) {
		setContent(initialContent);
	}
}, [initialContent]);
```

**3. "Edit/Delete buttons not working"**

```javascript
// Problem: Props not passed correctly
<PageComponent />

// Solution: Pass all required props
<PageComponent
	customData={formData}
	sectionEdits={sectionEdits}
	onSectionEdit={handleSectionSave}    // ← Required
	onSectionDelete={handleSectionDelete} // ← Required
	onSectionRestore={handleSectionRestore} // ← Required
	deletedSections={deletedSections}    // ← Required
/>
```

**4. "Component structure mismatch"**

```javascript
// Problem: Template expects different props than provided
<FeaturesTemplate features={features} />  // Template expects this
content.items = [...] // But content has this

// Solution: Normalize data structure
const normalizedContent = {
	...content,
	features: content.items || content.features || []
};
```

**5. "LocalStorage data corruption"**

```javascript
// Problem: Saved data loses array structure
localStorage corrupted → features becomes string

// Solution: Add validation layers
const validateContent = (saved) => {
	if (!saved) return defaultContent;

	return {
		...defaultContent,
		...saved,
		features: Array.isArray(saved.features)
			? saved.features
			: defaultContent.features
	};
};
```

### 🔍 Debugging Tips

**1. Console Logging:**

```javascript
// Debug content structure
console.log("Section content:", content);
console.log("Repeatable fields:", repeatableFields);
console.log("Section edits:", sectionEdits);

// Debug props
console.log("Component props:", {
	customData,
	sectionEdits,
	onSectionEdit,
	deletedSections,
});
```

**2. LocalStorage Inspection:**

```javascript
// Check saved data in browser console
localStorage.getItem("section_edits_agri-business");
localStorage.getItem("deleted_sections_agri-business");

// Clear corrupted data
localStorage.removeItem("section_edits_agri-business");
```

**3. Prop Validation:**

```javascript
// Add prop type checking (development only)
Component.propTypes = {
	customData: PropTypes.object,
	sectionEdits: PropTypes.object,
	onSectionEdit: PropTypes.func.isRequired,
	onSectionDelete: PropTypes.func.isRequired,
	// ...
};
```

---

## 🎯 Quick Reference Checklist

### ✅ Creating New Template

- [ ] Create component in `/templates/[category]/`
- [ ] Add props with sensible defaults
- [ ] Implement responsive design
- [ ] Add framer-motion animations
- [ ] Include accessibility features
- [ ] Test with different content lengths

### ✅ Creating New Microsite

- [ ] Create folder in `/microsites/[name]/`
- [ ] Create `siteConfig.js` with all required fields
- [ ] Create page components (Home, About, etc.)
- [ ] Create Navigation component
- [ ] Register in `/microsites/index.js`
- [ ] Test template selection and preview

### ✅ Adding Content Management

- [ ] Define default content structures
- [ ] Add safety checks for arrays/objects
- [ ] Implement content validation
- [ ] Test with empty/corrupted localStorage

### ✅ Adding Edit/Delete Functionality

- [ ] Import AdvancedSectionEditor/HeroSectionEditor
- [ ] Create render functions for each section
- [ ] Pass all required props correctly
- [ ] Specify repeatableFields for arrays
- [ ] Add section to DeletedSectionsPanel
- [ ] Test edit/save/delete/restore flow

### ✅ Testing Checklist

- [ ] Template displays correctly
- [ ] Edit modal opens with current content
- [ ] Save functionality works
- [ ] Delete/restore works
- [ ] Content persists after refresh
- [ ] Mobile responsive
- [ ] URL validation works
- [ ] Array management (add/remove items)

---

## 📞 Need Help?

**Common Resources:**

- 📚 [Tailwind CSS Docs](https://tailwindcss.com/docs)
- 🎭 [Framer Motion Docs](https://www.framer.com/motion/)
- ⚛️ [React Docs](https://react.dev/)

**Code Patterns:**

- Check existing AgriBusiness microsite for examples
- Follow the same patterns for consistency
- Use the troubleshooting guide for common issues

**Testing:**

- Always test with both empty and populated content
- Test mobile responsiveness
- Verify localStorage persistence
- Check error boundaries

---

_Happy coding! 🚀_

---

### 🔧 Component Architecture Patterns

**Editor Wrapper Pattern:**

```jsx
// Standard pattern for all editable sections
const renderSectionName = () => {
	if (deletedSections?.sectionId) {
		return (
			<EditorComponent
				sectionId="sectionId"
				sectionName="Display Name"
				initialContent={defaultContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				isDeleted={true}
				// Only for arrays:
				repeatableFields={["arrayFieldName"]}
			/>
		);
	}

	return (
		<EditorComponent
			sectionId="sectionId"
			sectionName="Display Name"
			initialContent={validatedContent}
			onSave={onSectionEdit}
			onDelete={onSectionDelete}
			onRestore={onSectionRestore}
			// Only for arrays:
			repeatableFields={["arrayFieldName"]}
		>
			<TemplateComponent {...validatedContent} />
		</EditorComponent>
	);
};
```

**Content Safety Pattern:**

```jsx
// For simple content (no arrays)
const simpleContent = sectionEdits?.sectionId || defaultContent;

// For complex content (with arrays)
const complexContent = (() => {
	const saved = sectionEdits?.sectionId;
	if (saved && saved.arrayField && Array.isArray(saved.arrayField)) {
		return saved;
	}
	return {
		...defaultContent,
		...saved,
		arrayField:
			saved?.arrayField && Array.isArray(saved.arrayField)
				? saved.arrayField
				: defaultContent.arrayField,
	};
})();
```

### 📋 Development Workflow

**Daily Development Process:**

1. **Planning Phase**

   - Identify the section/feature to add
   - Plan the content structure
   - Choose the appropriate editor type

2. **Implementation Phase**

   - Create/update template component
   - Add content management to microsite
   - Implement render functions
   - Test edit/save/delete functionality

3. **Testing Phase**

   - Test with empty localStorage
   - Test with corrupted data
   - Test all edit/delete/restore flows
   - Verify mobile responsiveness

4. **Integration Phase**
   - Update DeletedSectionsPanel if needed
   - Add to any relevant registration files
   - Document any new patterns

### 🎯 Quality Assurance Checklist

**Before Committing Code:**

**✅ Functionality**

- [ ] Component renders without errors
- [ ] Edit modal opens with current content
- [ ] Save functionality works correctly
- [ ] Delete/restore functionality works
- [ ] Content persists after browser refresh

**✅ Data Safety**

- [ ] Arrays are validated before mapping
- [ ] Default content is provided for all fields
- [ ] Corrupted localStorage doesn't crash the app
- [ ] Content structure matches template expectations

**✅ User Experience**

- [ ] Edit/delete buttons are always visible
- [ ] Loading states are handled gracefully
- [ ] Error messages are user-friendly
- [ ] Mobile interface is fully functional

**✅ Code Quality**

- [ ] Components follow naming conventions
- [ ] Props have sensible defaults
- [ ] Code is properly commented
- [ ] No console errors or warnings

### 🚀 Advanced Features

**Custom Field Types:**
You can extend the AdvancedSectionEditor to support custom field types:

```jsx
// In AdvancedSectionEditor.jsx, add new field type detection
const getFieldType = (key, value) => {
	if (key.includes("color")) return "color";
	if (key.includes("date")) return "date";
	if (key.includes("phone")) return "tel";
	if (key.includes("email")) return "email";
	if (key.includes("url") || key.includes("link")) return "url";
	if (key.includes("image") || key.includes("img")) return "url";
	if (key.includes("video")) return "url";
	if (typeof value === "number") return "number";
	if (typeof value === "boolean") return "checkbox";
	if (value && value.length > 100) return "textarea";
	return "text";
};
```

**Performance Optimization:**

```jsx
// Use React.memo for expensive renders
const ExpensiveComponent = React.memo(({ data }) => {
	// Component logic
});

// Use useCallback for stable function references
const handleSectionEdit = useCallback((sectionId, content) => {
	// Handle edit logic
}, []);

// Use useMemo for expensive calculations
const processedData = useMemo(() => {
	return data.map((item) => processItem(item));
}, [data]);
```

### 📱 Mobile-First Considerations

**Responsive Design Patterns:**

```jsx
// Standard responsive classes
className = "px-4 sm:px-6 lg:px-8"; // Padding
className = "text-base sm:text-lg md:text-xl"; // Typography
className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"; // Layouts
className = "flex flex-col sm:flex-row"; // Direction changes
className = "space-y-4 sm:space-y-0 sm:space-x-4"; // Spacing adjustments
```

**Touch-Friendly Interfaces:**

```jsx
// Minimum touch target size (44px)
className = "min-h-[44px] min-w-[44px]";
// Adequate spacing between interactive elements
className = "space-y-3 sm:space-y-2";
```

### 🌐 SEO & Accessibility

**SEO Best Practices:**

```jsx
// Semantic HTML structure
<main>
  <section>
    <header>
      <h1>Page Title</h1>
      <h2>Section Title</h2>
    </header>
    <article>
      <h3>Article Title</h3>
    </article>
  </section>
</main>

// Meta tags (add to page head)
<title>Descriptive Page Title</title>
<meta name="description" content="Page description" />
<meta property="og:title" content="Social media title" />
<meta property="og:image" content="Social media image" />
```

**Accessibility Requirements:**

```jsx
// Always include alt text
<img src="..." alt="Descriptive alt text" />

// Use semantic buttons
<button type="button" aria-label="Edit section">✏️</button>

// Proper form labels
<label htmlFor="title">Title</label>
<input id="title" name="title" />

// Skip links for keyboard navigation
<a href="#main-content" className="sr-only focus:not-sr-only">
  Skip to main content
</a>
```

---

**Last Updated**: December 2024  
**Version**: 2.0  
**Maintainer**: Senior Developer Team

---

## 💬 Support & Maintenance

**For Questions:**

- Check this guide first for common patterns
- Review existing AgriBusiness implementation for examples
- Use browser dev tools to debug localStorage and state issues

**For Updates:**

- Always test new components thoroughly
- Update this guide when adding new patterns
- Maintain backward compatibility with existing microsites

**Remember:** The goal is to make adding new content as simple as following the established patterns. When in doubt, copy the structure from an existing working section and modify it for your needs.

_Happy coding, and may your builds be bug-free! 🚀✨_
