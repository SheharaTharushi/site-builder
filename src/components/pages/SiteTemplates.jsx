import { useState, useEffect } from "react";
import React from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import microsites, {
	getAllSites,
	getSiteById,
	getSitesByCategory,
} from "../microsites/index";
import LoadingSpinner, { LOADER_TYPES } from "../layout/LoadingSpinner";

export default function SiteTemplates() {
	const navigate = useNavigate();
	const location = useLocation();
	const { siteId } = useParams();

	const [activeCategory, setActiveCategory] = useState("all");
	const [activeSite, setActiveSite] = useState(null);
	const [searchQuery, setSearchQuery] = useState("");
	const [visibleSites, setVisibleSites] = useState(6);
	const [isLoading, setIsLoading] = useState(false);
	const [isSiteLoading, setIsSiteLoading] = useState(false);

	// Site categories
	const siteCategories = [
		{ id: "all", label: "All", icon: "🌐" },
		{ id: "business", label: "Business", icon: "💼" },
		{ id: "portfolio", label: "Portfolio", icon: "🎨" },
		{ id: "ecommerce", label: "E-Commerce", icon: "🛒" },
		{ id: "blog", label: "Blog", icon: "📝" },
	];

	// Get sites for the active category
	const activeCategorySites =
		activeCategory === "all"
			? getAllSites()
			: getSitesByCategory(activeCategory);

	// Filter sites based on search query
	const filteredSites = activeCategorySites.filter(
		(site) =>
			site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			site.tags.some((tag) =>
				tag.toLowerCase().includes(searchQuery.toLowerCase())
			)
	);

	// Sites to display with load more functionality
	const displayedSites = filteredSites.slice(0, visibleSites);
	const hasMoreSites = filteredSites.length > visibleSites;

	// Load more sites
	const loadMoreSites = () => {
		setVisibleSites((prev) => prev + 6);
	};

	// Handle site click
	const handleSiteClick = (site) => {
		setIsSiteLoading(true);
		// Update URL with site ID
		navigate(`/sites/${site.id}`);
	};

	// Handle close preview
	const handleClosePreview = () => {
		setActiveSite(null);
		// Reset URL to category view
		navigate("/sites");
	};

	// Handle category change
	const handleCategoryChange = (categoryId) => {
		if (categoryId !== activeCategory) {
			setIsLoading(true);
			setActiveCategory(categoryId);
			setVisibleSites(6); // Reset visible sites count

			// Simulate loading time for category change
			setTimeout(() => {
				setIsLoading(false);
			}, 800);
		}
	};

	// Handle starting the builder from the site preview
	const handleStartBuilding = () => {
		if (activeSite) {
			navigate(`/builder/${activeSite.id}`, {
				state: {
					formData: {
						siteName: activeSite.name,
						brandColor: "#3B82F6",
						logo: "",
						name: "",
						email: "",
						phone: "",
					},
				},
			});
		}
	};

	// Load site from URL parameter on mount or URL change
	useEffect(() => {
		if (siteId) {
			setIsSiteLoading(true);
			const site = getSiteById(siteId);
			if (site) {
				// Simulate loading time for site
				setTimeout(() => {
					setActiveSite(site);
					setIsSiteLoading(false);

					// Check if we should start building (coming from a shared link)
					if (location.state?.startBuilding) {
						setTimeout(() => {
							handleStartBuilding();
						}, 500);
					}
				}, 800);
			} else {
				// If site not found, redirect to sites page
				navigate("/sites", { replace: true });
				setIsSiteLoading(false);
			}
		} else {
			setActiveSite(null);
		}
	}, [siteId, navigate, location.state]);

	// Turn off site loading when navigating away
	useEffect(() => {
		if (!siteId) {
			setIsSiteLoading(false);
		}
	}, [siteId]);

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
					Site Templates
				</h1>
				<p className="text-lg text-gray-600">
					Browse {getAllSites().length} complete website templates for various
					industries. Each site comes with multiple pages and ready-to-use
					sections.
				</p>
			</motion.section>

			<AnimatePresence mode="wait">
				{isSiteLoading ? (
					<motion.div
						key="site-loading"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="min-h-[500px] flex items-center justify-center"
					>
						<LoadingSpinner
							type={LOADER_TYPES.BEAT}
							text="Loading site preview..."
							size={12}
						/>
					</motion.div>
				) : !activeSite ? (
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
									placeholder="Search site templates..."
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
									{siteCategories.map((category) => (
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
									text="Loading site templates..."
								/>
							</motion.div>
						) : (
							/* Sites Grid */
							<motion.div
								className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4"
								variants={containerVariants}
								initial="hidden"
								animate="visible"
							>
								{displayedSites.length > 0 ? (
									displayedSites.map((site) => (
										<motion.div
											key={site.id}
											className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
											onClick={() => handleSiteClick(site)}
											variants={itemVariants}
											whileHover={{ y: -5 }}
										>
											<div className="aspect-video w-full overflow-hidden relative">
												<img
													src={site.thumbnail}
													alt={site.name}
													className="w-full h-full object-cover"
												/>
												<div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 flex items-center justify-center transition-opacity">
													<motion.span
														className="text-white bg-primary px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
														initial={{ y: 20, opacity: 0 }}
														whileHover={{ scale: 1.05 }}
														animate={{ y: 0, opacity: 0 }}
														whileInView={{ opacity: 0 }}
													>
														View Site Template
													</motion.span>
												</div>
											</div>
											<div className="p-4">
												<h3 className="font-medium text-lg">{site.name}</h3>
												<p className="text-gray-600 text-sm mt-1 line-clamp-2">
													{site.description}
												</p>
												<div className="flex flex-wrap gap-2 mt-3">
													{site.tags.map((tag) => (
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
										<h3 className="text-xl font-medium">
											No site templates found
										</h3>
										<p className="text-gray-600 mt-2">
											Try adjusting your search or selecting a different
											category.
										</p>
									</motion.div>
								)}
							</motion.div>
						)}

						{/* Load More Button */}
						{!isLoading && hasMoreSites && (
							<motion.div
								className="flex justify-center mt-8"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								<motion.button
									onClick={loadMoreSites}
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
									Load More Sites
								</motion.button>
							</motion.div>
						)}
					</motion.div>
				) : (
					/* Site Preview */
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
								<span>{activeSite.name}</span>
								<div className="flex flex-wrap gap-2">
									{activeSite.tags.map((tag) => (
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
								Back to Sites
							</motion.button>
						</motion.div>

						<motion.div
							className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
						>
							<div className="p-4 border-b border-gray-200">
								<p className="text-gray-600">{activeSite.description}</p>
							</div>

							{/* Site Details */}
							<div className="p-6">
								<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
									{/* Preview Images */}
									<div className="space-y-4">
										<h3 className="text-lg font-semibold">Site Preview</h3>
										<div className="rounded-lg overflow-hidden border border-gray-200">
											<img
												src={activeSite.sitePreview.desktop}
												alt={`${activeSite.name} - Desktop Preview`}
												className="w-full"
											/>
										</div>
										<div className="w-1/3 mx-auto rounded-lg overflow-hidden border border-gray-200">
											<img
												src={activeSite.sitePreview.mobile}
												alt={`${activeSite.name} - Mobile Preview`}
												className="w-full"
											/>
										</div>
									</div>

									{/* Site Information */}
									<div className="space-y-6">
										{/* Available Pages */}
										<div>
											<h3 className="text-lg font-semibold mb-3">
												Included Pages
											</h3>
											<div className="space-y-2">
												{activeSite.pages.map((page) => (
													<div
														key={page.id}
														className="flex items-center gap-2 bg-gray-50 p-2 rounded-md"
													>
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
																d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
															/>
														</svg>
														<span>{page.name}</span>
														{page.isHome && (
															<span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
																Home
															</span>
														)}
													</div>
												))}
											</div>
										</div>

										{/* Features */}
										<div>
											<h3 className="text-lg font-semibold mb-3">Features</h3>
											<ul className="list-disc pl-5 space-y-1">
												{activeSite.features.map((feature, index) => (
													<li key={index} className="text-gray-700">
														{feature}
													</li>
												))}
											</ul>
										</div>

										{/* Demo Link and Build Button */}
										<div className="pt-4 flex gap-3">
											<a
												href={activeSite.demoLink}
												target="_blank"
												rel="noopener noreferrer"
												className="inline-block bg-white border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
											>
												View Live Demo
											</a>
											<button
												onClick={handleStartBuilding}
												className="build-site-btn inline-block bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition-colors"
											>
												Build This Site
											</button>
										</div>
									</div>
								</div>
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
									Share this site template:
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
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
