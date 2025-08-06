import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const NavFull = ({
	logo = "FullNav",
	links = [],
	buttonText = "Get Started",
	buttonLink = "#",
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [isSearchOpen, setIsSearchOpen] = useState(false);
	const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const toggleSearch = () => {
		setIsSearchOpen(!isSearchOpen);
	};

	const toggleUserMenu = () => {
		setIsUserMenuOpen(!isUserMenuOpen);
	};

	const toggleDropdown = (index) => {
		setActiveDropdown(activeDropdown === index ? null : index);
	};

	// Default menu items if none are provided
	const menuItems =
		links.length > 0
			? links.map((link) => ({
					name: link.name,
					href: link.href,
					hasDropdown: !!link.dropdownItems,
					dropdownItems: link.dropdownItems || [],
			  }))
			: [
					{
						name: "Products",
						href: "#",
						hasDropdown: true,
						dropdownItems: [
							{
								name: "Analytics",
								description: "Get insights into your data",
								href: "#",
							},
							{
								name: "Automation",
								description: "Build automated workflows",
								href: "#",
							},
							{
								name: "Reports",
								description: "Keep track of your growth",
								href: "#",
							},
						],
					},
					{
						name: "Solutions",
						href: "#",
						hasDropdown: true,
						dropdownItems: [
							{
								name: "For Startups",
								description: "Scale your business quickly",
								href: "#",
							},
							{
								name: "For Enterprise",
								description: "Advanced tools for large teams",
								href: "#",
							},
							{
								name: "For Personal",
								description: "Individual productivity tools",
								href: "#",
							},
						],
					},
					{ name: "Pricing", href: "#", hasDropdown: false },
					{ name: "Resources", href: "#", hasDropdown: false },
			  ];

	return (
		<nav className="bg-white shadow-md">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
								<span className="text-white font-bold">{logo.charAt(0)}</span>
							</div>
							<span className="ml-2 text-xl font-semibold text-gray-800">
								{logo}
							</span>
						</div>
					</div>

					{/* Desktop menu */}
					<div className="hidden lg:flex items-center space-x-4">
						{menuItems.map((item, index) => (
							<div key={item.name} className="relative">
								<Link
									to={item.href}
									onClick={(e) =>
										item.hasDropdown &&
										(e.preventDefault(), toggleDropdown(index))
									}
									className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
								>
									{item.name}
									{item.hasDropdown && (
										<svg
											className={`ml-1 h-4 w-4 transition-transform ${
												activeDropdown === index ? "transform rotate-180" : ""
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
									)}
								</Link>

								{/* Dropdown menu */}
								<AnimatePresence>
									{item.hasDropdown && activeDropdown === index && (
										<motion.div
											initial={{ opacity: 0, y: 10 }}
											animate={{ opacity: 1, y: 0 }}
											exit={{ opacity: 0, y: 10 }}
											transition={{ duration: 0.2 }}
											className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
										>
											<div className="py-1">
												{item.dropdownItems.map((dropdownItem) => (
													<Link
														key={dropdownItem.name}
														to={dropdownItem.href}
														className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
													>
														<div className="font-medium">
															{dropdownItem.name}
														</div>
														<div className="text-xs text-gray-500">
															{dropdownItem.description}
														</div>
													</Link>
												))}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						))}

						{/* Search button */}
						<button
							onClick={toggleSearch}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
						>
							<svg
								className="h-5 w-5 text-gray-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>

						{/* User menu */}
						<div className="relative ml-3">
							<button
								onClick={toggleUserMenu}
								className="flex items-center space-x-2 text-sm font-medium text-gray-700 hover:text-primary"
							>
								<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
									<span className="text-xs font-medium">JD</span>
								</div>
								<span className="hidden md:block">John Doe</span>
								<svg
									className={`h-4 w-4 transition-transform ${
										isUserMenuOpen ? "transform rotate-180" : ""
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
								{isUserMenuOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										transition={{ duration: 0.2 }}
										className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
									>
										<div className="py-1">
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Your Profile
											</a>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Settings
											</a>
											<a
												href="#"
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											>
												Sign out
											</a>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>

						<Link
							to={buttonLink}
							className="ml-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
						>
							{buttonText}
						</Link>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center lg:hidden">
						<button
							onClick={toggleSearch}
							className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 mr-2"
						>
							<svg
								className="h-5 w-5 text-gray-600"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
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

			{/* Search overlay */}
			<AnimatePresence>
				{isSearchOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="absolute inset-0 bg-black bg-opacity-50 z-20 flex items-start justify-center pt-16"
					>
						<motion.div
							initial={{ y: -50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -50, opacity: 0 }}
							className="bg-white rounded-lg shadow-xl p-4 mx-4 w-full max-w-2xl"
						>
							<div className="flex items-center">
								<svg
									className="h-5 w-5 text-gray-400"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
								<input
									type="text"
									placeholder="Search..."
									className="ml-2 flex-1 outline-none text-gray-700"
									autoFocus
								/>
								<button
									onClick={toggleSearch}
									className="ml-2 p-1 rounded-full hover:bg-gray-100"
								>
									<svg
										className="h-5 w-5 text-gray-500"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
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
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>

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
							{menuItems.map((item, index) => (
								<div key={item.name} className="py-1">
									{item.hasDropdown ? (
										<button
											onClick={() => toggleDropdown(index)}
											className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
										>
											<span>{item.name}</span>
											<svg
												className={`ml-1 h-4 w-4 transition-transform ${
													activeDropdown === index ? "transform rotate-180" : ""
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
										<Link
											to={item.href}
											className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
										>
											{item.name}
										</Link>
									)}

									<AnimatePresence>
										{item.hasDropdown && activeDropdown === index && (
											<motion.div
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.2 }}
												className="mt-1 pl-4 border-l-2 border-gray-200"
											>
												{item.dropdownItems.map((dropdownItem) => (
													<Link
														key={dropdownItem.name}
														to={dropdownItem.href}
														className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md"
													>
														<div className="font-medium">
															{dropdownItem.name}
														</div>
														<div className="text-xs text-gray-500">
															{dropdownItem.description}
														</div>
													</Link>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							))}

							<div className="pt-4 pb-3 border-t border-gray-200">
								<div className="flex items-center px-3">
									<div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
										<span className="text-sm font-medium">JD</span>
									</div>
									<div className="ml-3">
										<div className="text-base font-medium text-gray-800">
											John Doe
										</div>
										<div className="text-sm font-medium text-gray-500">
											john@example.com
										</div>
									</div>
								</div>
								<div className="mt-3 space-y-1">
									<a
										href="#"
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
									>
										Your Profile
									</a>
									<a
										href="#"
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
									>
										Settings
									</a>
									<a
										href="#"
										className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
									>
										Sign out
									</a>
								</div>
							</div>

							<Link
								to={buttonLink}
								className="block w-full text-center px-4 py-2 mt-4 rounded-md bg-primary text-white hover:bg-primary/90"
							>
								{buttonText}
							</Link>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default NavFull;
