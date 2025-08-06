import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import microsites, { getSitesByCategory } from "../microsites/index";

const BuilderModal = ({ onClose }) => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [selectedCategory, setSelectedCategory] = useState(null);
	const [selectedTemplate, setSelectedTemplate] = useState(null);
	const [formData, setFormData] = useState({
		siteName: "",
		brandColor: "#3B82F6",
		logo: "",
		name: "",
		email: "",
		phone: "",
	});

	// Get unique categories
	const categories = [...new Set(microsites.map((site) => site.category))];

	// Get sites for selected category
	const categorySites = selectedCategory
		? getSitesByCategory(selectedCategory)
		: [];

	// Handle category selection
	const handleCategorySelect = (category) => {
		setSelectedCategory(category);
	};

	// Handle template selection
	const handleTemplateSelect = (template) => {
		setSelectedTemplate(template);
	};

	// Handle form input changes
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	// Go to next step
	const goToNextStep = () => {
		if (step === 1 && !selectedTemplate) {
			alert("Please select a template to continue");
			return;
		}

		if (step === 2 && !formData.siteName) {
			alert("Please enter a site name to continue");
			return;
		}

		setStep((prev) => prev + 1);
	};

	// Go to previous step
	const goToPreviousStep = () => {
		setStep((prev) => prev - 1);
	};

	// Handle build button click
	const handleBuild = () => {
		if (!formData.name || !formData.email) {
			alert("Please fill in your name and email");
			return;
		}

		// Navigate to the builder page with the template ID and form data
		navigate(`/builder/${selectedTemplate.id}`, {
			state: {
				templateId: selectedTemplate.id,
				formData,
			},
		});

		onClose();
	};

	// Close modal when clicking outside
	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	// Prevent scrolling when modal is open
	useEffect(() => {
		document.body.style.overflow = "hidden";
		return () => {
			document.body.style.overflow = "auto";
		};
	}, []);

	// Modal animation variants
	const modalVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
	};

	return (
		<div
			className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
			onClick={handleBackdropClick}
		>
			<motion.div
				className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ duration: 0.3 }}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Modal Header */}
				<div className="border-b border-gray-200 p-4 flex justify-between items-center sticky top-0 bg-white z-10">
					<h2 className="text-xl font-bold text-gray-800">
						{step === 1 && "Select a Template"}
						{step === 2 && "Customize Your Site"}
						{step === 3 && "Your Information"}
					</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>

				{/* Progress Steps */}
				<div className="px-6 pt-4">
					<div className="flex items-center justify-between mb-8">
						{[1, 2, 3].map((s) => (
							<div key={s} className="flex flex-col items-center">
								<div
									className={`w-8 h-8 rounded-full flex items-center justify-center font-medium ${
										step >= s
											? "bg-primary text-white"
											: "bg-gray-200 text-gray-600"
									}`}
								>
									{s}
								</div>
								<span className="text-xs mt-1 text-gray-500">
									{s === 1 ? "Template" : s === 2 ? "Customize" : "Contact"}
								</span>
							</div>
						))}
						<div
							className="absolute left-0 right-0 h-0.5 bg-gray-200 -z-10"
							style={{ top: "calc(50% - 16px)" }}
						>
							<div
								className="h-full bg-primary"
								style={{ width: `${(step - 1) * 50}%` }}
							></div>
						</div>
					</div>
				</div>

				{/* Step 1: Template Selection */}
				{step === 1 && (
					<div className="p-6">
						<div className="mb-6">
							<h3 className="text-lg font-medium mb-2">Select a Category</h3>
							<div className="flex flex-wrap gap-2">
								{categories.map((category) => (
									<button
										key={category}
										onClick={() => handleCategorySelect(category)}
										className={`px-3 py-1.5 rounded-full text-sm font-medium ${
											selectedCategory === category
												? "bg-primary text-white"
												: "bg-gray-100 text-gray-700 hover:bg-gray-200"
										}`}
									>
										{category.charAt(0).toUpperCase() + category.slice(1)}
									</button>
								))}
							</div>
						</div>

						{selectedCategory && (
							<div>
								<h3 className="text-lg font-medium mb-4">Select a Template</h3>
								<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
									{categorySites.map((site) => (
										<div
											key={site.id}
											onClick={() => handleTemplateSelect(site)}
											className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
												selectedTemplate?.id === site.id
													? "border-primary ring-2 ring-primary/30"
													: "border-gray-200 hover:border-primary/50"
											}`}
										>
											<div className="aspect-video w-full overflow-hidden">
												<img
													src={site.thumbnail}
													alt={site.name}
													className="w-full h-full object-cover"
												/>
											</div>
											<div className="p-3">
												<h4 className="font-medium">{site.name}</h4>
												<div className="flex flex-wrap gap-1 mt-1">
													{site.tags.slice(0, 2).map((tag, i) => (
														<span
															key={i}
															className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full"
														>
															{tag}
														</span>
													))}
													{site.tags.length > 2 && (
														<span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
															+{site.tags.length - 2} more
														</span>
													)}
												</div>
											</div>
										</div>
									))}
								</div>
							</div>
						)}
					</div>
				)}

				{/* Step 2: Customize Site */}
				{step === 2 && (
					<div className="p-6">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							<div>
								<h3 className="text-lg font-medium mb-4">Site Information</h3>
								<div className="space-y-4">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Site Name
										</label>
										<input
											type="text"
											name="siteName"
											value={formData.siteName}
											onChange={handleInputChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
											placeholder="My Awesome Site"
										/>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Brand Color
										</label>
										<div className="flex items-center gap-3">
											<input
												type="color"
												name="brandColor"
												value={formData.brandColor}
												onChange={handleInputChange}
												className="h-10 w-10 rounded cursor-pointer"
											/>
											<input
												type="text"
												value={formData.brandColor}
												onChange={handleInputChange}
												name="brandColor"
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-700 mb-1">
											Logo URL (optional)
										</label>
										<input
											type="text"
											name="logo"
											value={formData.logo}
											onChange={handleInputChange}
											className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
											placeholder="https://example.com/logo.png"
										/>
									</div>
								</div>
							</div>

							<div>
								<h3 className="text-lg font-medium mb-4">Preview</h3>
								<div className="border border-gray-200 rounded-lg overflow-hidden">
									<div className="bg-gray-50 p-3 border-b border-gray-200 flex items-center">
										<div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
										<div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
										<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
										<div className="text-xs text-gray-500 mx-auto">Preview</div>
									</div>
									<div className="p-4 aspect-video bg-white flex flex-col items-center justify-center">
										{formData.logo ? (
											<img
												src={formData.logo}
												alt="Logo"
												className="h-12 mb-4"
												onError={(e) => {
													e.target.onerror = null;
													e.target.src =
														"https://via.placeholder.com/120x40?text=Logo";
												}}
											/>
										) : (
											<div
												className="h-12 w-40 mb-4 flex items-center justify-center bg-gray-100 rounded"
												style={{ backgroundColor: formData.brandColor + "20" }}
											>
												<span
													className="font-bold text-lg"
													style={{ color: formData.brandColor }}
												>
													{formData.siteName || "LOGO"}
												</span>
											</div>
										)}

										<div className="w-3/4 h-6 bg-gray-100 rounded mb-3"></div>
										<div className="w-1/2 h-4 bg-gray-100 rounded mb-6"></div>

										<div
											className="px-4 py-2 rounded font-medium text-white text-sm"
											style={{ backgroundColor: formData.brandColor }}
										>
											Sample Button
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Step 3: Contact Information */}
				{step === 3 && (
					<div className="p-6">
						<div className="max-w-md mx-auto">
							<h3 className="text-lg font-medium mb-4">Your Information</h3>
							<div className="space-y-4">
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Your Name
									</label>
									<input
										type="text"
										name="name"
										value={formData.name}
										onChange={handleInputChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="John Doe"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Email Address
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleInputChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="john@example.com"
									/>
								</div>

								<div>
									<label className="block text-sm font-medium text-gray-700 mb-1">
										Phone Number (optional)
									</label>
									<input
										type="tel"
										name="phone"
										value={formData.phone}
										onChange={handleInputChange}
										className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="+1 (555) 123-4567"
									/>
								</div>

								<div className="pt-4">
									<div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
										<h4 className="font-medium mb-2">Summary</h4>
										<div className="space-y-1 text-sm">
											<p>
												<span className="text-gray-600">Template:</span>{" "}
												{selectedTemplate?.name}
											</p>
											<p>
												<span className="text-gray-600">Site Name:</span>{" "}
												{formData.siteName}
											</p>
											<div className="flex items-center">
												<span className="text-gray-600 mr-2">Brand Color:</span>
												<div
													className="w-4 h-4 rounded-full inline-block mr-1"
													style={{ backgroundColor: formData.brandColor }}
												></div>
												{formData.brandColor}
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}

				{/* Modal Footer */}
				<div className="border-t border-gray-200 p-4 flex justify-between sticky bottom-0 bg-white">
					<button
						onClick={step === 1 ? onClose : goToPreviousStep}
						className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
					>
						{step === 1 ? "Cancel" : "Back"}
					</button>

					<button
						onClick={step === 3 ? handleBuild : goToNextStep}
						className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark"
					>
						{step === 3 ? "Build Site" : "Continue"}
					</button>
				</div>
			</motion.div>
		</div>
	);
};

export default BuilderModal;
