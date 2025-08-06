import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import templates, {
	getTemplatesByCategory,
	getTemplateById,
	getAllTemplates,
} from "../templates/index";
import LoadingSpinner, { LOADER_TYPES } from "../layout/LoadingSpinner";

export default function TemplateLibrary() {
	const navigate = useNavigate();
	const location = useLocation();
	const { templateId } = useParams();

	const [activeCategory, setActiveCategory] = useState("all");
	const [activeTemplate, setActiveTemplate] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleTemplates, setVisibleTemplates] = useState(6);
	const [isLoading, setIsLoading] = useState(false);
	const [isTemplateLoading, setIsTemplateLoading] = useState(false);

	// Template categories
	const templateCategories = [
		{ id: "all", label: "All", icon: "🗂️" },
		{ id: "hero", label: "Hero", icon: "✨" },
		{ id: "navigation", label: "Navigation", icon: "🧭" },
		{ id: "about", label: "About", icon: "📄" },
		{ id: "gallery", label: "Gallery", icon: "🖼️" },
		{ id: "team", label: "Team", icon: "👥" },
		{ id: "footer", label: "Footer", icon: "🏁" },
		{ id: "features", label: "Features", icon: "🔍" },
		{ id: "contact", label: "Contact", icon: "📞" },
	];

	// Get templates for the active category
	const activeCategoryTemplates =
		activeCategory === "all"
			? getAllTemplates()
			: getTemplatesByCategory(activeCategory);

	// Filter templates based on search query
	const filteredTemplates = activeCategoryTemplates.filter(
		(template) =>
			template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			template.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			template.tags.some((tag) =>
				tag.toLowerCase().includes(searchQuery.toLowerCase())
			)
	);

	// Templates to display with load more functionality
	const displayedTemplates = filteredTemplates.slice(0, visibleTemplates);
	const hasMoreTemplates = filteredTemplates.length > visibleTemplates;

	// Load more templates
	const loadMoreTemplates = () => {
		setVisibleTemplates((prev) => prev + 6);
	};

	// Handle template click
	const handleTemplateClick = (template) => {
		setIsTemplateLoading(true);
		// Update URL with template ID
		navigate(`/templates/${template.id}`);
	};

	// Handle close preview
	const handleClosePreview = () => {
		setActiveTemplate(null);
		// Reset URL to category view
		navigate("/templates");
	};

	// Handle category change
	const handleCategoryChange = (categoryId) => {
		if (categoryId !== activeCategory) {
			setIsLoading(true);
			setActiveCategory(categoryId);
			setVisibleTemplates(6); // Reset visible templates count

			// Simulate loading time for category change
			setTimeout(() => {
				setIsLoading(false);
			}, 800);
		}
	};

	// Load template from URL parameter on mount or URL change
	useEffect(() => {
		if (templateId) {
			setIsTemplateLoading(true);
			const template = getTemplateById(templateId);
			if (template) {
				// Simulate loading time for template
				setTimeout(() => {
					setActiveTemplate(template);
					setIsTemplateLoading(false);

					// Set the active category based on the template
					const category = Object.entries(templates).find(([_, templates]) =>
						templates.some((t) => t.id === templateId)
					)?.[0];
					if (category) {
						setActiveCategory(category);
					}
				}, 800);
			} else {
				// If template not found, redirect to templates page
				navigate("/templates", { replace: true });
				setIsTemplateLoading(false);
			}
		} else {
			setActiveTemplate(null);
		}
	}, [templateId, navigate]);

	// Turn off template loading when navigating away
	useEffect(() => {
		if (!templateId) {
			setIsTemplateLoading(false);
		}
	}, [templateId]);

	// Animation variants
	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				type: "spring",
				stiffness: 300,
				damping: 24,
			},
		},
	};

	return (
		<div className="space-y-8">
			{/* Header */}
			<motion.section
				className="text-center space-y-4 max-w-3xl mx-auto"
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="text-4xl md:text-5xl font-bold text-gray-800">
					Template Library
				</h1>
				<p className="text-lg text-gray-600">
					Browse {getAllTemplates().length} beautiful, ready-to-use section
					templates for your website. Simply click on any template to preview
					and customize.
				</p>
			</motion.section>

			<AnimatePresence mode="wait">
				{isTemplateLoading ? (
					<motion.div
						key="template-loading"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="min-h-[500px] flex items-center justify-center"
					>
						<LoadingSpinner
							type={LOADER_TYPES.BEAT}
							text="Loading template preview..."
							size={12}
						/>
					</motion.div>
				) : !activeTemplate ? (
					<motion.div
						key="gallery"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						{/* Search Bar */}
						<motion.div
							className="max-w-xl mx-auto mb-8"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<div className="relative">
								<input
									type="text"
									placeholder="Search templates..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									className="w-full py-3 pl-12 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
									disabled={isLoading}
								/>
								<div className="absolute inset-y-0 left-0 flex items-center pl-4">
									<svg
										className="w-5 h-5 text-gray-400"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
										></path>
									</svg>
								</div>
							</div>
						</motion.div>

						{/* Category Navigation - Simplified Button List */}
						<motion.div
							className="flex justify-center flex-wrap gap-2 mb-8 px-4"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<div className="overflow-x-auto pb-2 flex justify-start md:justify-center w-full">
								<div className="flex gap-2 min-w-max">
									{templateCategories.map((category) => (
										<motion.button
											key={category.id}
											onClick={() =>
												!category.disabled && handleCategoryChange(category.id)
											}
											disabled={category.disabled || isLoading}
											className={`px-4 py-2 rounded-md transition-all flex items-center gap-2 ${
												activeCategory === category.id
													? "bg-primary text-white shadow-sm"
													: category.disabled
													? "bg-gray-100 text-gray-400 cursor-not-allowed"
													: "bg-gray-100 text-gray-700 hover:bg-gray-200"
											}`}
											whileHover={!category.disabled ? { scale: 1.05 } : {}}
											whileTap={!category.disabled ? { scale: 0.95 } : {}}
										>
											<span>{category.icon}</span>
											<span>{category.label}</span>
										</motion.button>
									))}
								</div>
							</div>
						</motion.div>

						{/* Loading State */}
						{isLoading ? (
							<motion.div
								className="min-h-[400px] flex items-center justify-center"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								<LoadingSpinner
									type={LOADER_TYPES.PULSE}
									text="Loading templates..."
								/>
							</motion.div>
						) : (
							/* Templates Grid */
							<motion.div
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{displayedTemplates.length > 0 ? (
									displayedTemplates.map((template) => (
										<motion.div
											key={template.id}
											className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
											onClick={() => handleTemplateClick(template)}
											variants={itemVariants}
											whileHover={{ y: -5 }}
										>
											<div className="aspect-video w-full overflow-hidden relative">
												{typeof template.thumbnail === "string" &&
												template.thumbnail.startsWith("/") ? (
													<img
														src={template.thumbnail}
														alt={template.name}
														className="w-full h-full object-cover"
													/>
												) : (
													<div
														className="w-full h-full bg-cover bg-center"
														style={{
															backgroundImage: `url(${template.thumbnail})`,
														}}
													></div>
												)}
												<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-opacity">
													<motion.span
														className="text-white bg-primary px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
														initial={{ y: 20, opacity: 0 }}
														whileHover={{ scale: 1.05 }}
														animate={{ y: 0, opacity: 0 }}
														whileInView={{ opacity: 0 }}
													>
														Preview Template
													</motion.span>
												</div>
											</div>
											<div className="p-4">
												<h3 className="font-medium text-lg">{template.name}</h3>
												<p className="text-gray-600 text-sm mt-1 line-clamp-2">
													{template.description}
												</p>
												<div className="flex flex-wrap gap-2 mt-3">
													{template.tags.map((tag) => (
														<span
															key={tag}
															className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
														>
															{tag}
														</span>
													))}
												</div>
											</div>
										</motion.div>
									))
								) : (
									<motion.div
										className="col-span-full text-center py-12"
										variants={itemVariants}
									>
										<div className="text-5xl mb-4">🔍</div>
										<h3 className="text-xl font-medium">No templates found</h3>
										<p className="text-gray-600 mt-2">
											Try adjusting your search or selecting a different
											category.
										</p>
									</motion.div>
								)}
							</motion.div>
						)}

						{/* Load More Button */}
						{!isLoading && hasMoreTemplates && (
							<motion.div
								className="flex justify-center mt-8"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								<motion.button
									onClick={loadMoreTemplates}
									className="px-6 py-3 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 text-gray-700"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M19 9l-7 7-7-7"
										/>
									</svg>
									Load More Templates
								</motion.button>
							</motion.div>
						)}
					</motion.div>
				) : (
					/* Template Preview */
					<motion.div
						className="space-y-6 px-4"
						key="preview"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
					>
						<motion.div
							className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.1 }}
						>
							<h2 className="text-2xl font-bold flex flex-wrap items-center gap-2">
								<span>{activeTemplate.name}</span>
								<div className="flex flex-wrap gap-2">
									{activeTemplate.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
							</h2>
							<motion.button
								onClick={handleClosePreview}
								className="px-4 py-2 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<svg
									className="w-4 h-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10 19l-7-7m0 0l7-7m-7 7h18"
									></path>
								</svg>
								Back to Templates
							</motion.button>
						</motion.div>

						<motion.div
							className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<div className="p-4 border-b border-gray-200">
								<p className="text-gray-600">{activeTemplate.description}</p>
							</div>

							<div className="overflow-hidden">
								{/* Render the actual component */}
								{React.createElement(activeTemplate.component)}
							</div>
						</motion.div>

						{/* Shareable URL */}
						<motion.div
							className="bg-primary/5 rounded-lg p-4 flex flex-col sm:flex-row items-center justify-between gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<div className="flex items-center gap-2">
								<svg
									className="w-5 h-5 text-primary"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
									/>
								</svg>
								<span className="font-medium whitespace-nowrap">
									Share this template:
								</span>
							</div>
							<div className="flex-1 flex w-full">
								<input
									type="text"
									value={window.location.href}
									readOnly
									className="flex-1 bg-white border border-gray-200 rounded-l-md px-3 py-2 text-sm w-full"
								/>
								<motion.button
									onClick={() => {
										navigator.clipboard.writeText(window.location.href);
										alert("Link copied to clipboard!");
									}}
									className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition-colors whitespace-nowrap"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									Copy
								</motion.button>
							</div>
						</motion.div>

						<motion.div
							className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-6"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							<h3 className="text-xl font-medium mb-4">
								How to use this template
							</h3>
							<div className="space-y-4">
								<div className="flex items-start gap-3">
									<div className="bg-primary/10 text-primary rounded-full p-2 mt-1">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="font-medium">Customize Images</h4>
										<p className="text-gray-600">
											Replace placeholder images with your own visuals that
											match your brand.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="bg-primary/10 text-primary rounded-full p-2 mt-1">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="font-medium">Update Text Content</h4>
										<p className="text-gray-600">
											Change the headings, descriptions, and button text to
											match your message.
										</p>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="bg-primary/10 text-primary rounded-full p-2 mt-1">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
											></path>
										</svg>
									</div>
									<div>
										<h4 className="font-medium">Adjust Colors</h4>
										<p className="text-gray-600">
											Change the color scheme to match your brand's identity.
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
