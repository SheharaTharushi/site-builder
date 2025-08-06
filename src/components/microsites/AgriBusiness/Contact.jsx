import React from "react";
import Navigation from "./Navigation";
import ContactSplit from "../../templates/contact/ContactSplit";
import ContactWithMap from "../../templates/contact/ContactWithMap";
import FooterSimple from "../../templates/footer/FooterSimple";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Contact = ({
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
		title: "Contact Our Agricultural Experts",
		subtitle:
			"Ready to take your farming operation to the next level? Our agricultural experts are here to answer your questions and provide personalized guidance.",
	};

	// Default content for consultation section
	const consultationDefaultContent = {
		title: "Schedule a Consultation",
		subtitle:
			"Want to discuss your specific farming needs in detail? Schedule a consultation with one of our agricultural experts.",
		consultationTypes: [
			{
				id: 1,
				title: "Virtual Consultation",
				description:
					"Connect with our experts from anywhere via video call for personalized advice.",
				icon: "🕐",
				buttonText: "Book Now",
			},
			{
				id: 2,
				title: "On-Site Visit",
				description:
					"Schedule a visit from our agricultural experts to your farm for in-person assessment.",
				icon: "📍",
				buttonText: "Schedule Visit",
			},
			{
				id: 3,
				title: "Office Appointment",
				description:
					"Visit one of our regional offices to discuss your agricultural needs in person.",
				icon: "🏢",
				buttonText: "Book Appointment",
			},
		],
	};

	// Default content for FAQ section
	const faqDefaultContent = {
		title: "Frequently Asked Questions",
		subtitle:
			"Find answers to common questions about our agricultural services.",
		faqs: [
			{
				id: 1,
				question:
					"How soon can I expect results after implementing your recommendations?",
				answer:
					"Results can vary depending on the specific interventions and your agricultural context. Some changes, like nutrient adjustments, may show benefits in weeks, while others, such as soil health improvements, may take a full growing season to demonstrate significant results.",
			},
			{
				id: 2,
				question:
					"Do you work with small family farms or only large operations?",
				answer:
					"We work with agricultural operations of all sizes, from small family farms to large industrial operations. Our services are scalable, and we tailor our approaches to meet the specific needs and resources of each client.",
			},
			{
				id: 3,
				question: "What geographic regions do you service?",
				answer:
					"Our primary service areas include the Midwest, Southeast, and Pacific Northwest regions. However, we offer virtual consultations nationwide and can arrange on-site visits to other regions for comprehensive projects.",
			},
			{
				id: 4,
				question: "How do your sustainable practices affect crop yields?",
				answer:
					"Our sustainable agricultural practices are designed to maintain or improve yields while reducing environmental impact. Many clients report increased yields within 1-2 growing seasons as soil health improves and more efficient resource use is implemented.",
			},
		],
	};

	// Get custom content or use defaults
	const pageHeaderContent =
		sectionEdits?.pageHeader || pageHeaderDefaultContent;
	const consultationContent = (() => {
		const saved = sectionEdits?.consultation;
		if (
			saved &&
			saved.consultationTypes &&
			Array.isArray(saved.consultationTypes)
		) {
			return saved;
		}
		return {
			...consultationDefaultContent,
			...saved,
			consultationTypes:
				saved?.consultationTypes && Array.isArray(saved.consultationTypes)
					? saved.consultationTypes
					: consultationDefaultContent.consultationTypes,
		};
	})();
	const faqContent = (() => {
		const saved = sectionEdits?.faq;
		if (saved && saved.faqs && Array.isArray(saved.faqs)) {
			return saved;
		}
		return {
			...faqDefaultContent,
			...saved,
			faqs:
				saved?.faqs && Array.isArray(saved.faqs)
					? saved.faqs
					: faqDefaultContent.faqs,
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

	const renderContactFormSection = () => {
		if (deletedSections?.contactForm) {
			return (
				<AdvancedSectionEditor
					sectionId="contactForm"
					sectionName="Contact Form Section"
					initialContent={{}}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="contactForm"
				sectionName="Contact Form Section"
				initialContent={{}}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
			>
				<ContactWithMap />
			</AdvancedSectionEditor>
		);
	};

	const renderConsultationSection = () => {
		if (deletedSections?.consultation) {
			return (
				<AdvancedSectionEditor
					sectionId="consultation"
					sectionName="Consultation Section"
					initialContent={consultationDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["consultationTypes"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="consultation"
				sectionName="Consultation Section"
				initialContent={consultationContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["consultationTypes"]}
			>
				<div className="py-16 bg-gray-50">
					<div className="max-w-7xl mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								{consultationContent.title}
							</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								{consultationContent.subtitle}
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
							{consultationContent.consultationTypes.map(
								(consultation, index) => (
									<div
										key={consultation.id || index}
										className="bg-white p-6 rounded-xl shadow-sm"
									>
										<div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
											<span className="text-2xl">{consultation.icon}</span>
										</div>
										<h3 className="text-xl font-semibold text-gray-900 mb-2">
											{consultation.title}
										</h3>
										<p className="text-gray-600 mb-4">
											{consultation.description}
										</p>
										<button className="text-primary font-medium hover:text-primary-dark transition-colors flex items-center">
											{consultation.buttonText}
											<svg
												className="w-4 h-4 ml-1"
												fill="none"
												stroke="currentColor"
												viewBox="0 0 24 24"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M9 5l7 7-7 7"
												/>
											</svg>
										</button>
									</div>
								)
							)}
						</div>
					</div>
				</div>
			</AdvancedSectionEditor>
		);
	};

	const renderFAQSection = () => {
		if (deletedSections?.faq) {
			return (
				<AdvancedSectionEditor
					sectionId="faq"
					sectionName="FAQ Section"
					initialContent={faqDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["faqs"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="faq"
				sectionName="FAQ Section"
				initialContent={faqContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["faqs"]}
			>
				<div className="py-16">
					<div className="max-w-3xl mx-auto px-4">
						<div className="text-center mb-12">
							<h2 className="text-3xl font-bold text-gray-900 mb-4">
								{faqContent.title}
							</h2>
							<p className="text-lg text-gray-600">{faqContent.subtitle}</p>
						</div>

						<div className="space-y-6">
							{faqContent.faqs.map((faq, index) => (
								<div
									key={faq.id || index}
									className="bg-white rounded-xl shadow-sm border border-gray-200 p-6"
								>
									<h3 className="text-xl font-medium text-gray-900 mb-2">
										{faq.question}
									</h3>
									<p className="text-gray-600">{faq.answer}</p>
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

			{/* Contact Form Section */}
			{renderContactFormSection()}

			{/* Consultation Section */}
			{renderConsultationSection()}

			{/* FAQ Section */}
			{renderFAQSection()}

			{/* Footer */}
			<FooterSimple
				companyName={customData?.siteName || "Agri Business"}
				year={new Date().getFullYear()}
				links={navLinks}
			/>
		</div>
	);
};

export default Contact;
