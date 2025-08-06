import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavSimple = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const menuItems = [
		{ name: "Home", href: "#" },
		{ name: "Products", href: "#" },
		{ name: "Services", href: "#" },
		{ name: "About", href: "#" },
		{ name: "Contact", href: "#" },
	];

	return (
		<nav className="bg-white shadow-sm border-b border-gray-100">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0 flex items-center">
							<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
								<span className="text-white font-bold">S</span>
							</div>
							<span className="ml-2 text-xl font-semibold text-gray-800">
								Simple
							</span>
						</div>
					</div>

					{/* Desktop menu */}
					<div className="hidden md:flex items-center space-x-8">
						{menuItems.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className="text-gray-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-200"
							>
								{item.name}
							</a>
						))}
						<a
							href="#"
							className="ml-4 px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition-colors duration-200 text-sm font-medium"
						>
							Get Started
						</a>
					</div>

					{/* Mobile menu button */}
					<div className="flex items-center md:hidden">
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

			{/* Mobile menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						className="md:hidden"
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
					>
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
							{menuItems.map((item) => (
								<a
									key={item.name}
									href={item.href}
									className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-primary hover:bg-gray-50"
								>
									{item.name}
								</a>
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
		</nav>
	);
};

export default NavSimple;
