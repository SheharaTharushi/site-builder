import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavTransparent = () => {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleDropdown = (index) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			setIsScrolled(scrollPosition > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// Menu structure
	const menuItems = [
		{
			name: "Home",
			href: "#",
		},
		{
			name: "About",
			href: "#",
			hasDropdown: true,
			dropdownItems: [
				{ name: "Our Story", href: "#" },
				{ name: "Team", href: "#" },
				{ name: "Careers", href: "#" },
			],
		},
		{
			name: "Services",
			href: "#",
			hasDropdown: true,
			dropdownItems: [
				{ name: "Web Design", href: "#" },
				{ name: "Development", href: "#" },
				{ name: "Digital Marketing", href: "#" },
				{ name: "Content Creation", href: "#" },
			],
		},
		{
			name: "Portfolio",
			href: "#",
		},
		{
			name: "Contact",
			href: "#",
		},
	];

	return (
		<>
			{/* Hero section to show transparency effect */}
			<div className="h-[600px] relative">
				{/* Background Image */}
				<div
					className="absolute inset-0 bg-cover bg-center z-0"
					style={{
						backgroundImage:
							"url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1740&auto=format&fit=crop')",
					}}
				>
					{/* Gradient overlay for better text visibility */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>
				</div>

				{/* Navigation */}
				<motion.nav
					className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
						isScrolled
							? "bg-white text-gray-800 shadow-md py-3"
							: "bg-transparent text-white py-5"
					}`}
					initial={{ y: -100 }}
					animate={{ y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
						<div className="flex justify-between items-center">
							<div className="flex items-center">
								<div
									className={`flex-shrink-0 flex items-center ${
										isScrolled ? "text-primary" : "text-white"
									}`}
								>
									<div
										className={`h-8 w-8 rounded-md flex items-center justify-center ${
											isScrolled
												? "bg-primary text-white"
												: "bg-white text-primary"
										}`}
									>
										<span className="font-bold">T</span>
									</div>
									<span className="ml-2 text-xl font-semibold">
										Transparent
									</span>
								</div>
							</div>

							{/* Desktop menu */}
							<div className="hidden md:flex items-center space-x-8">
								{menuItems.map((item, index) => (
									<div key={item.name} className="relative">
										{item.hasDropdown ? (
											<button
												onClick={() => toggleDropdown(index)}
												className={`text-sm font-medium transition-colors duration-200 flex items-center ${
													isScrolled
														? "text-gray-700 hover:text-primary"
														: "text-white hover:text-white/80"
												}`}
											>
												{item.name}
												<svg
													className={`ml-1 h-4 w-4 transition-transform ${
														activeDropdown === index
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
												className={`text-sm font-medium transition-colors duration-200 ${
													isScrolled
														? "text-gray-700 hover:text-primary"
														: "text-white hover:text-white/80"
												}`}
											>
												{item.name}
											</a>
										)}

										{/* Dropdown menu */}
										<AnimatePresence>
											{item.hasDropdown && activeDropdown === index && (
												<motion.div
													initial={{ opacity: 0, y: 10 }}
													animate={{ opacity: 1, y: 0 }}
													exit={{ opacity: 0, y: 10 }}
													transition={{ duration: 0.2 }}
													className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
												>
													<div className="py-1">
														{item.dropdownItems.map((dropdownItem) => (
															<a
																key={dropdownItem.name}
																href={dropdownItem.href}
																className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
															>
																{dropdownItem.name}
															</a>
														))}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								))}

								<a
									href="#"
									className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
										isScrolled
											? "bg-primary text-white hover:bg-primary/90"
											: "bg-white text-primary hover:bg-white/90"
									}`}
								>
									Get Started
								</a>
							</div>

							{/* Mobile menu button */}
							<div className="flex items-center md:hidden">
								<button
									onClick={toggleMenu}
									className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
										isScrolled
											? "text-gray-700 hover:text-primary"
											: "text-white hover:text-white/80"
									}`}
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

					{/* Mobile menu */}
					<AnimatePresence>
						{isOpen && (
							<motion.div
								className="md:hidden bg-white"
								initial={{ opacity: 0, height: 0 }}
								animate={{ opacity: 1, height: "auto" }}
								exit={{ opacity: 0, height: 0 }}
								transition={{ duration: 0.3 }}
							>
								<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
									{menuItems.map((item, index) => (
										<div key={item.name} className="py-1">
											{item.hasDropdown ? (
												<>
													<button
														onClick={() => toggleDropdown(index)}
														className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
													>
														<span>{item.name}</span>
														<svg
															className={`ml-1 h-4 w-4 transition-transform ${
																activeDropdown === index
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
														{activeDropdown === index && (
															<motion.div
																initial={{ opacity: 0, height: 0 }}
																animate={{ opacity: 1, height: "auto" }}
																exit={{ opacity: 0, height: 0 }}
																transition={{ duration: 0.2 }}
																className="mt-1 pl-4 border-l-2 border-gray-200"
															>
																{item.dropdownItems.map((dropdownItem) => (
																	<a
																		key={dropdownItem.name}
																		href={dropdownItem.href}
																		className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
																	>
																		{dropdownItem.name}
																	</a>
																))}
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
				</motion.nav>

				{/* Hero Content */}
				<div className="relative z-10 flex items-center justify-center h-full text-center px-4">
					<div className="max-w-3xl">
						<motion.h1
							className="text-4xl md:text-5xl font-bold text-white mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Beautiful Transparent Navigation
						</motion.h1>
						<motion.p
							className="text-xl text-white/90 mb-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4 }}
						>
							A stylish navigation bar that changes appearance on scroll,
							perfect for landing pages and modern websites.
						</motion.p>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.6 }}
							className="flex flex-col sm:flex-row gap-4 justify-center"
						>
							<a
								href="#"
								className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-colors"
							>
								Get Started
							</a>
							<a
								href="#"
								className="px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-md font-medium hover:bg-white/30 transition-colors"
							>
								Learn More
							</a>
						</motion.div>
					</div>
				</div>
			</div>
		</>
	);
};

export default NavTransparent;
