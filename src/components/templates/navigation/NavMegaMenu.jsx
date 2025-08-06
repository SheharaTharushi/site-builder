import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavMegaMenu = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeMegaMenu, setActiveMegaMenu] = useState(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleMegaMenu = (menuId) => {
		setActiveMegaMenu(activeMegaMenu === menuId ? null : menuId);
	};

	// Menu structure
	const menuItems = [
		{
			id: "products",
			name: "Products",
			hasMegaMenu: true,
			columns: [
				{
					title: "Product Categories",
					links: [
						{ name: "Analytics Tools", href: "#" },
						{ name: "Marketing Solutions", href: "#" },
						{ name: "E-commerce Platforms", href: "#" },
						{ name: "CRM Systems", href: "#" },
						{ name: "Design Tools", href: "#" },
					],
				},
				{
					title: "Popular Products",
					links: [
						{ name: "Data Insights Pro", href: "#" },
						{ name: "Campaign Manager", href: "#" },
						{ name: "Store Builder", href: "#" },
						{ name: "Customer Connect", href: "#" },
					],
				},
				{
					title: "Resources",
					links: [
						{ name: "Documentation", href: "#" },
						{ name: "API Reference", href: "#" },
						{ name: "Product Guides", href: "#" },
						{ name: "Tutorials", href: "#" },
					],
				},
				{
					featured: true,
					title: "New Release",
					description:
						"Introducing our latest analytics dashboard with AI-powered insights",
					image:
						"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300&auto=format&fit=crop",
					link: { name: "Learn More", href: "#" },
				},
			],
		},
		{
			id: "solutions",
			name: "Solutions",
			hasMegaMenu: true,
			columns: [
				{
					title: "By Industry",
					links: [
						{ name: "Healthcare", href: "#" },
						{ name: "Finance", href: "#" },
						{ name: "Education", href: "#" },
						{ name: "E-commerce", href: "#" },
						{ name: "Real Estate", href: "#" },
					],
				},
				{
					title: "By Company Size",
					links: [
						{ name: "Enterprise", href: "#" },
						{ name: "Mid-Market", href: "#" },
						{ name: "Small Business", href: "#" },
						{ name: "Startups", href: "#" },
					],
				},
				{
					title: "Case Studies",
					links: [
						{ name: "Success Stories", href: "#" },
						{ name: "Implementation Guides", href: "#" },
						{ name: "ROI Calculator", href: "#" },
						{ name: "Testimonials", href: "#" },
					],
				},
				{
					featured: true,
					title: "Customer Success",
					description:
						"See how leading companies achieved 3x growth with our solutions",
					image:
						"https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=300&auto=format&fit=crop",
					link: { name: "Read Case Study", href: "#" },
				},
			],
		},
		{
			id: "resources",
			name: "Resources",
			hasMegaMenu: true,
			columns: [
				{
					title: "Learning Center",
					links: [
						{ name: "Blog", href: "#" },
						{ name: "Guides & Tutorials", href: "#" },
						{ name: "Webinars", href: "#" },
						{ name: "Knowledge Base", href: "#" },
					],
				},
				{
					title: "Community",
					links: [
						{ name: "Forums", href: "#" },
						{ name: "Events", href: "#" },
						{ name: "User Groups", href: "#" },
						{ name: "Developer Community", href: "#" },
					],
				},
				{
					title: "Support",
					links: [
						{ name: "Help Center", href: "#" },
						{ name: "Contact Support", href: "#" },
						{ name: "System Status", href: "#" },
						{ name: "Training", href: "#" },
					],
				},
				{
					featured: true,
					title: "Resource Hub",
					description:
						"Access all our guides, templates, and resources in one place",
					image:
						"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=300&auto=format&fit=crop",
					link: { name: "Explore Resources", href: "#" },
				},
			],
		},
		{ name: "Pricing", hasMegaMenu: false, href: "#" },
		{ name: "Contact", hasMegaMenu: false, href: "#" },
	];

	return (
		<div className="bg-white">
			<nav className="border-b border-gray-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between h-16">
						<div className="flex items-center">
							<div className="flex-shrink-0 flex items-center">
								<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
									<span className="text-white font-bold">M</span>
								</div>
								<span className="ml-2 text-xl font-semibold text-gray-800">
									MegaNav
								</span>
							</div>
						</div>

						{/* Desktop menu */}
						<div className="hidden lg:flex items-center space-x-8">
							{menuItems.map((item) => (
								<div key={item.id || item.name} className="relative">
									{item.hasMegaMenu ? (
										<button
											onClick={() => toggleMegaMenu(item.id)}
											className={`text-gray-600 hover:text-primary px-3 py-5 text-sm font-medium transition-colors duration-200 flex items-center ${
												activeMegaMenu === item.id ? "text-primary" : ""
											}`}
										>
											{item.name}
											<svg
												className={`ml-1 h-4 w-4 transition-transform ${
													activeMegaMenu === item.id
														? "transform rotate-180"
														: ""
												}`}
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth="2"
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										</button>
									) : (
										<a
											href={item.href}
											className="text-gray-600 hover:text-primary px-3 py-5 text-sm font-medium transition-colors duration-200"
										>
											{item.name}
										</a>
									)}
								</div>
							))}

							<a
								href="#"
								className="ml-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
							>
								Get Started
							</a>
						</div>

						{/* Mobile menu button */}
						<div className="flex items-center lg:hidden">
							<button
								onClick={toggleMenu}
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-primary focus:outline-none"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				{/* Mega Menu Dropdowns */}
				<AnimatePresence>
					{activeMegaMenu && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: "auto" }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-20"
						>
							<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
								<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
									{menuItems
										.find((item) => item.id === activeMegaMenu)
										?.columns.map((column, index) =>
											column.featured ? (
												<div key={index} className="bg-gray-50 rounded-lg p-6">
													<div className="mb-4 overflow-hidden rounded-lg">
														<img
															src={column.image}
															alt={column.title}
															className="w-full h-32 object-cover"
														/>
													</div>
													<h3 className="font-semibold text-lg mb-2 text-gray-900">
														{column.title}
													</h3>
													<p className="text-sm text-gray-600 mb-4">
														{column.description}
													</p>
													<a
														href={column.link.href}
														className="inline-flex items-center text-primary font-medium text-sm"
													>
														{column.link.name}
														<svg
															className="ml-1 w-4 h-4"
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke="currentColor"
														>
															<path
																strokeLinecap="round"
																strokeLinejoin="round"
																strokeWidth={2}
																d="M9 5l7 7-7 7"
															/>
														</svg>
													</a>
												</div>
											) : (
												<div key={index}>
													<h3 className="font-semibold text-gray-900 mb-3">
														{column.title}
													</h3>
													<ul className="space-y-2">
														{column.links.map((link) => (
															<li key={link.name}>
																<a
																	href={link.href}
																	className="text-gray-600 hover:text-primary text-sm"
																>
																	{link.name}
																</a>
															</li>
														))}
													</ul>
												</div>
											)
										)}
								</div>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</nav>

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="lg:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
							{menuItems.map((item) => (
								<div key={item.id || item.name} className="py-1">
									{item.hasMegaMenu ? (
										<>
											<button
												onClick={() => toggleMegaMenu(item.id)}
												className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
											>
												<span>{item.name}</span>
												<svg
													className={`ml-1 h-4 w-4 transition-transform ${
														activeMegaMenu === item.id
															? "transform rotate-180"
															: ""
													}`}
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M19 9l-7 7-7-7"
													/>
												</svg>
											</button>

											<AnimatePresence>
												{activeMegaMenu === item.id && (
													<motion.div
														initial={{ opacity: 0, height: 0 }}
														animate={{ opacity: 1, height: "auto" }}
														exit={{ opacity: 0, height: 0 }}
														transition={{ duration: 0.2 }}
														className="mt-1 pl-4 border-l-2 border-gray-200 space-y-4 py-2"
													>
														{item.columns
															.filter((column) => !column.featured)
															.map((column, index) => (
																<div key={index}>
																	<h4 className="font-medium text-sm text-gray-900 mb-1">
																		{column.title}
																	</h4>
																	<ul className="space-y-1">
																		{column.links.map((link) => (
																			<li key={link.name}>
																				<a
																					href={link.href}
																					className="block px-2 py-1 text-sm text-gray-600 hover:text-primary"
																				>
																					{link.name}
																				</a>
																			</li>
																		))}
																	</ul>
																</div>
															))}

														{/* Featured item in mobile */}
														{item.columns.find((column) => column.featured) && (
															<div className="bg-gray-50 rounded-md p-3 mt-2">
																<h4 className="font-medium text-gray-900">
																	{
																		item.columns.find(
																			(column) => column.featured
																		).title
																	}
																</h4>
																<p className="text-xs text-gray-600 mt-1 mb-2">
																	{
																		item.columns.find(
																			(column) => column.featured
																		).description
																	}
																</p>
																<a
																	href={
																		item.columns.find(
																			(column) => column.featured
																		).link.href
																	}
																	className="text-primary text-sm font-medium flex items-center"
																>
																	{
																		item.columns.find(
																			(column) => column.featured
																		).link.name
																	}
																	<svg
																		className="ml-1 w-4 h-4"
																		xmlns="http://www.w3.org/2000/svg"
																		fill="none"
																		viewBox="0 0 24 24"
																		stroke="currentColor"
																	>
																		<path
																			strokeLinecap="round"
																			strokeLinejoin="round"
																			strokeWidth={2}
																			d="M9 5l7 7-7 7"
																		/>
																	</svg>
																</a>
															</div>
														)}
													</motion.div>
												)}
											</AnimatePresence>
										</>
									) : (
										<a
											href={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
										>
											{item.name}
										</a>
									)}
								</div>
							))}

							<a
								href="#"
								className="block w-full text-center px-4 py-2 mt-4 rounded-md bg-primary text-white hover:bg-primary/90"
							>
								Get Started
							</a>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default NavMegaMenu;
