import React from "react";
import Navigation from "./Navigation";
import HeroWithImage from "../../templates/hero/HeroWithImage";
import FeaturesAlternating from "../../templates/features/FeaturesAlternating";
import GalleryBasic from "../../templates/gallery/GalleryBasic";
import TestimonialSimple from "../../templates/testimonial/TestimonialSimple";
import FooterSimple from "../../templates/footer/FooterSimple";
import HeroSectionEditor from "../../layout/HeroSectionEditor";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Home = ({
	customData,
	sectionEdits,
	onSectionEdit,
	onSectionDelete,
	onSectionRestore,
	deletedSections,
}) => {
	// Shared nav links moved to Navigation component
	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Contact", href: "/contact" },
	];

	// Default hero content that can be edited - comprehensive content
	const heroDefaultContent = {
		title: "Sustainable Farming Solutions",
		subtitle: "Growing a Better Future Together",
		primaryButtonText: "Get Started",
		secondaryButtonText: "View Demo",
		primaryButtonLink: "/services",
		secondaryButtonLink: "/about",
		imageSrc:
			"https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop",
		imageAlt: "Sustainable farming landscape",
	};

	// Default gallery content with repeatable gallery items
	const galleryDefaultContent = {
		title: "Farm Gallery",
		subtitle: "See our sustainable farming practices in action",
		gallery: [
			{
				image:
					"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&h=400&fit=crop",
				caption: "Organic vegetable farming",
				alt: "Rows of organic vegetables growing in sustainable farm",
			},
			{
				image:
					"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=400&fit=crop",
				caption: "Precision agriculture technology",
				alt: "Modern farming equipment using GPS and data analytics",
			},
			{
				image:
					"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=400&fit=crop",
				caption: "Sustainable crop management",
				alt: "Farmer inspecting healthy crops in sustainable farm",
			},
			{
				image:
					"https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&fit=crop",
				caption: "Harvest season success",
				alt: "Abundant harvest showcasing farming success",
			},
		],
	};

	// Default testimonial content with repeatable testimonials
	const testimonialDefaultContent = {
		title: "What Our Clients Say",
		testimonials: [
			{
				name: "John Smith",
				text: "Working with Agri Business has transformed our farm. Their sustainable methods have increased our yield by 40% while reducing our environmental impact.",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
				position: "Owner, Smith Family Farms",
			},
			{
				name: "Maria Rodriguez",
				text: "The organic farming techniques they introduced have not only improved our crops but also restored the health of our soil. Amazing results!",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b1c3?w=150&h=150&fit=crop&crop=face",
				position: "Sustainable Agriculture Specialist",
			},
			{
				name: "David Chen",
				text: "Their precision agriculture technology helped us optimize water usage and reduce costs by 30%. Highly recommended!",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
				position: "Farm Operations Manager",
			},
		],
	};

	// Default features with repeatable items
	const featuresDefaultContent = {
		title: "Our Agricultural Solutions",
		subtitle: "Modern farming techniques for sustainable growth",
		features: [
			{
				title: "Sustainable Farming",
				description:
					"Eco-friendly farming practices that preserve soil health and increase long-term productivity.",
				icon: "🌱",
				image:
					"https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=300&fit=crop",
			},
			{
				title: "Precision Agriculture",
				description:
					"Advanced technology and data analytics to optimize crop yields and resource usage.",
				icon: "🎯",
				image:
					"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop",
			},
			{
				title: "Crop Consultation",
				description:
					"Expert advice on crop selection, planting strategies, and harvest optimization.",
				icon: "🌾",
				image:
					"https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&h=300&fit=crop",
			},
		],
	};

	// Get custom content or use defaults - with safety checks
	const heroContent = sectionEdits?.hero || heroDefaultContent;
	const featuresContent = (() => {
		const saved = sectionEdits?.features;
		if (saved && saved.features && Array.isArray(saved.features)) {
			return saved;
		}
		// If saved data is corrupted or missing features array, merge with defaults
		return {
			...featuresDefaultContent,
			...saved,
			features:
				saved?.features && Array.isArray(saved.features)
					? saved.features
					: featuresDefaultContent.features,
		};
	})();
	const galleryContent = sectionEdits?.gallery || galleryDefaultContent;
	const testimonialContent =
		sectionEdits?.testimonial || testimonialDefaultContent;

	// Custom render function for hero section
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
				<HeroWithImage
					title={heroContent.title}
					subtitle={heroContent.subtitle}
					primaryButtonText={heroContent.primaryButtonText}
					secondaryButtonText={heroContent.secondaryButtonText}
					primaryButtonLink={heroContent.primaryButtonLink}
					secondaryButtonLink={heroContent.secondaryButtonLink}
					imageSrc={heroContent.imageSrc}
					imageAlt={heroContent.imageAlt}
				/>
			</HeroSectionEditor>
		);
	};

	// Custom render function for features section
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
					repeatableFields={["features"]}
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
				<FeaturesAlternating
					title={featuresContent.title}
					subtitle={featuresContent.subtitle}
					features={featuresContent.features}
				/>
			</AdvancedSectionEditor>
		);
	};

	// Custom render function for gallery section
	const renderGallerySection = () => {
		if (deletedSections?.gallery) {
			return (
				<AdvancedSectionEditor
					sectionId="gallery"
					sectionName="Gallery Section"
					initialContent={galleryDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["gallery"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="gallery"
				sectionName="Gallery Section"
				initialContent={galleryContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["gallery"]}
			>
				<GalleryBasic
					title={galleryContent.title}
					subtitle={galleryContent.subtitle}
					gallery={galleryContent.gallery}
				/>
			</AdvancedSectionEditor>
		);
	};

	// Custom render function for testimonial section
	const renderTestimonialSection = () => {
		if (deletedSections?.testimonial) {
			return (
				<AdvancedSectionEditor
					sectionId="testimonial"
					sectionName="Testimonial Section"
					initialContent={testimonialDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["testimonials"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="testimonial"
				sectionName="Testimonial Section"
				initialContent={testimonialContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["testimonials"]}
			>
				<TestimonialSimple
					title={testimonialContent.title}
					testimonials={testimonialContent.testimonials}
				/>
			</AdvancedSectionEditor>
		);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<Navigation
				brandName={customData?.siteName || "Agri Business"}
				brandColor={customData?.brandColor}
			/>

			{/* Hero Section */}
			{renderHeroSection()}

			{/* Features Section */}
			{renderFeaturesSection()}

			{/* Gallery Section */}
			{renderGallerySection()}

			{/* Testimonial Section */}
			{renderTestimonialSection()}

			{/* Footer */}
			<FooterSimple
				companyName={customData?.siteName || "Agri Business"}
				year={new Date().getFullYear()}
				links={navLinks}
			/>
		</div>
	);
};

export default Home;
