import React from "react";
import Navigation from "./Navigation";
import FeaturesWithIcons from "../../templates/features/FeaturesWithIcons";
import FeaturesGrid from "../../templates/features/FeaturesGrid";
import FooterSimple from "../../templates/footer/FooterSimple";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Services = ({
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

	// Default content for page header
	const pageHeaderDefaultContent = {
		title: "Agricultural Services & Solutions",
		subtitle:
			"Comprehensive agricultural solutions designed to maximize productivity and sustainability for farms of all sizes.",
	};

	// Default content for services overview
	const servicesOverviewDefaultContent = {
		services: [
			{
				id: 1,
				title: "Crop Management",
				description:
					"Optimize your crop yields with our comprehensive management solutions that include soil analysis, crop selection, and harvest planning.",
				image:
					"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1100&auto=format&fit=crop",
			},
			{
				id: 2,
				title: "Sustainable Farming",
				description:
					"Implement eco-friendly farming practices that reduce environmental impact while maintaining or improving productivity.",
				image:
					"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=1100&auto=format&fit=crop",
			},
			{
				id: 3,
				title: "Precision Agriculture",
				description:
					"Leverage cutting-edge technology including GPS guidance, sensors, drones, and software to optimize returns while preserving resources.",
				image:
					"https://images.unsplash.com/photo-1586771107443-edd31fb5a64d?q=80&w=1100&auto=format&fit=crop",
			},
			{
				id: 4,
				title: "Farm Consulting",
				description:
					"Receive expert advice on all aspects of farm operations, from business planning to regulatory compliance and market access.",
				image:
					"https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1100&auto=format&fit=crop",
			},
		],
	};

	// Default content for pricing section
	const pricingDefaultContent = {
		title: "Transparent Pricing",
		subtitle: "Choose the plan that works best for your agricultural needs.",
		plans: [
			{
				id: 1,
				name: "Basic Plan",
				price: "$499",
				period: "/month",
				description: "Perfect for small farms looking to improve operations.",
				features: [
					"Basic soil analysis",
					"Monthly consultation",
					"Crop planning assistance",
				],
				buttonText: "Get Started",
				popular: false,
			},
			{
				id: 2,
				name: "Standard Plan",
				price: "$999",
				period: "/month",
				description: "Ideal for medium-sized farms with diverse needs.",
				features: [
					"Comprehensive soil analysis",
					"Weekly consultation",
					"Advanced crop planning",
					"Precision agriculture tools",
					"Custom recommendations",
				],
				buttonText: "Get Started",
				popular: true,
			},
			{
				id: 3,
				name: "Premium Plan",
				price: "$1,999",
				period: "/month",
				description: "Complete solution for large agricultural operations.",
				features: [
					"Full-service farm management",
					"Daily monitoring",
					"Advanced analytics",
					"Dedicated account manager",
					"Priority support",
					"Custom integrations",
				],
				buttonText: "Get Started",
				popular: false,
			},
		],
	};

	// Get custom content or use defaults
	const pageHeaderContent =
		sectionEdits?.pageHeader || pageHeaderDefaultContent;
	const servicesOverviewContent = (() => {
		const saved = sectionEdits?.servicesOverview;
		if (saved && saved.services && Array.isArray(saved.services)) {
			return saved;
		}
		return {
			...servicesOverviewDefaultContent,
			...saved,
			services:
				saved?.services && Array.isArray(saved.services)
					? saved.services
					: servicesOverviewDefaultContent.services,
		};
	})();
	const pricingContent = (() => {
		const saved = sectionEdits?.pricing;
		if (saved && saved.plans && Array.isArray(saved.plans)) {
			return saved;
		}
		return {
			...pricingDefaultContent,
			...saved,
			plans:
				saved?.plans && Array.isArray(saved.plans)
					? saved.plans
					: pricingDefaultContent.plans,
		};
	})();

	// Render functions for editable sections
	const renderPageHeaderSection = () => {
		if (deletedSections?.pageHeader) {
			return (
				<AdvancedSectionEditor
					sectionId="pageHeader"
					sectionName="Page Header Section"
					initialContent={pageHeaderDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="pageHeader"
				sectionName="Page Header Section"
				initialContent={pageHeaderContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
			>
				<div className="bg-primary/10 py-16">
					<div className="max-w-7xl mx-auto px-4 text-center">
						<h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
							{pageHeaderContent.title}
						</h1>
						<p className="text-lg text-gray-600 max-w-3xl mx-auto">
							{pageHeaderContent.subtitle}
						</p>
					</div>
				</div>
			</AdvancedSectionEditor>
		);
	};

	const renderServicesOverviewSection = () => {
		if (deletedSections?.servicesOverview) {
			return (
				<AdvancedSectionEditor
					sectionId="servicesOverview"
					sectionName="Services Overview Section"
					initialContent={servicesOverviewDefaultContent}
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
				sectionId="servicesOverview"
				sectionName="Services Overview Section"
				initialContent={servicesOverviewContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["services"]}
			>
				<div className="py-16">
					<div className="max-w-7xl mx-auto px-4">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
							{servicesOverviewContent.services.map((service, index) => (
								<div
									key={service.id || index}
									className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200"
								>
									<div className="h-64 overflow-hidden">
										<img
											src={service.image}
											alt={service.title}
											className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
										/>
									</div>
									<div className="p-6">
										<h3 className="text-xl font-bold text-gray-900 mb-3">
											{service.title}
										</h3>
										<p className="text-gray-600">{service.description}</p>
										<button className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
											Learn more
											<svg
												className="ml-2 w-4 h-4"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M14 5l7 7m0 0l-7 7m7-7H3"
												/>
											</svg>
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</AdvancedSectionEditor>
		);
	};

	const renderPricingSection = () => {
		if (deletedSections?.pricing) {
			return (
				<AdvancedSectionEditor
					sectionId="pricing"
					sectionName="Pricing Section"
					initialContent={pricingDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["plans"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="pricing"
				sectionName="Pricing Section"
				initialContent={pricingContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["plans"]}
			>
				<div className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								{pricingContent.title}
							</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								{pricingContent.subtitle}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{pricingContent.plans.map((plan, index) => (
								<div
									key={plan.id || index}
									className={`bg-white rounded-xl shadow-sm border ${
										plan.popular
											? "border-primary shadow-md relative"
											: "border-gray-200"
									} overflow-hidden`}
								>
									{plan.popular && (
										<div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-sm font-medium">
											Popular
										</div>
									)}
									<div
										className={`p-6 border-b border-gray-200 ${
											plan.popular ? "bg-primary/5" : ""
										}`}
									>
										<h3 className="text-xl font-bold text-gray-900">
											{plan.name}
										</h3>
										<div className="mt-4 flex items-baseline">
											<span className="text-4xl font-extrabold text-gray-900">
												{plan.price}
											</span>
											<span className="ml-1 text-xl text-gray-500">
												{plan.period}
											</span>
										</div>
										<p className="mt-2 text-gray-600">{plan.description}</p>
									</div>
									<div className="p-6">
										<ul className="space-y-4">
											{plan.features.map((feature, featureIndex) => (
												<li key={featureIndex} className="flex items-start">
													<svg
														className="h-6 w-6 text-green-500 mt-0.5"
														fill="none"
														stroke="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															strokeLinecap="round"
															strokeLinejoin="round"
															strokeWidth="2"
															d="M5 13l4 4L19 7"
														/>
													</svg>
													<span className="ml-3 text-gray-700">{feature}</span>
												</li>
											))}
										</ul>
										<button
											className={`mt-8 w-full ${
												plan.popular
													? "bg-primary text-white hover:bg-primary-dark"
													: "bg-white border border-primary text-primary hover:bg-primary hover:text-white"
											} font-medium py-2 px-4 rounded-lg transition-colors`}
										>
											{plan.buttonText}
										</button>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
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

			{/* Page Header */}
			{renderPageHeaderSection()}

			{/* Services Overview */}
			{renderServicesOverviewSection()}

			{/* Features Sections */}
			<FeaturesWithIcons />
			<FeaturesGrid />

			{/* Pricing Section */}
			{renderPricingSection()}

			{/* Footer */}
			<FooterSimple
				companyName={customData?.siteName || "Agri Business"}
				year={new Date().getFullYear()}
				links={navLinks}
			/>
		</div>
	);
};

export default Services;
