import { motion } from "framer-motion";
import { useState } from "react";

const FooterWithNewsletter = () => {
	const currentYear = new Date().getFullYear();
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState(null);

	const handleSubscribe = (e) => {
		e.preventDefault();

		// Simulate API request
		setStatus("loading");

		setTimeout(() => {
			if (email && email.includes("@")) {
				setStatus("success");
				setEmail("");
			} else {
				setStatus("error");
			}
		}, 1000);
	};

	return (
		<footer className="bg-gray-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-7 gap-8">
					{/* Company Info */}
					<motion.div
						className="lg:col-span-2"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<a href="#" className="inline-block">
							<span className="text-2xl font-bold text-white">
								Brand<span className="text-primary">Name</span>
							</span>
						</a>
						<p className="mt-4 text-gray-400 max-w-md">
							We help businesses transform their ideas into digital reality with
							high-quality solutions tailored to your needs.
						</p>
						<div className="flex space-x-4 mt-6">
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300"
								aria-label="Facebook"
							>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300"
								aria-label="Twitter"
							>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300"
								aria-label="Instagram"
							>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-white transition-colors duration-300"
								aria-label="LinkedIn"
							>
								<svg
									className="h-6 w-6"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										fillRule="evenodd"
										d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
										clipRule="evenodd"
									/>
								</svg>
							</a>
						</div>
					</motion.div>

					{/* Quick Links */}
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.1 }}
					>
						<h3 className="text-sm font-semibold text-white tracking-wider uppercase">
							Company
						</h3>
						<ul className="mt-4 space-y-3">
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									Careers
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									Our Team
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									News
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Services */}
					<motion.div
						className="lg:col-span-1"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
					>
						<h3 className="text-sm font-semibold text-white tracking-wider uppercase">
							Services
						</h3>
						<ul className="mt-4 space-y-3">
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									Web Development
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									Mobile Apps
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									UI/UX Design
								</a>
							</li>
							<li>
								<a
									href="#"
									className="text-base text-gray-400 hover:text-white transition-colors duration-300"
								>
									Digital Marketing
								</a>
							</li>
						</ul>
					</motion.div>

					{/* Newsletter */}
					<motion.div
						className="lg:col-span-3"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						<h3 className="text-sm font-semibold text-white tracking-wider uppercase">
							Subscribe to our newsletter
						</h3>
						<p className="mt-4 text-base text-gray-400">
							Get the latest news, updates and special offers delivered directly
							to your inbox.
						</p>
						<form onSubmit={handleSubscribe} className="mt-4">
							<div className="flex flex-col sm:flex-row gap-3">
								<div className="flex-grow">
									<label htmlFor="email-address" className="sr-only">
										Email address
									</label>
									<input
										id="email-address"
										name="email"
										type="email"
										autoComplete="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="w-full min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
										placeholder="Enter your email"
									/>
								</div>
								<div>
									<button
										type="submit"
										className="flex items-center justify-center w-full px-5 py-2 text-base font-medium text-white bg-primary border border-transparent rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
										disabled={status === "loading"}
									>
										{status === "loading" ? (
											<svg
												className="w-5 h-5 text-white animate-spin"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
											>
												<circle
													className="opacity-25"
													cx="12"
													cy="12"
													r="10"
													stroke="currentColor"
													strokeWidth="4"
												></circle>
												<path
													className="opacity-75"
													fill="currentColor"
													d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
												></path>
											</svg>
										) : (
											"Subscribe"
										)}
									</button>
								</div>
							</div>
							{status === "success" && (
								<p className="mt-2 text-sm text-green-400">
									Thank you for subscribing to our newsletter!
								</p>
							)}
							{status === "error" && (
								<p className="mt-2 text-sm text-red-400">
									Please enter a valid email address.
								</p>
							)}
						</form>
						<p className="mt-3 text-sm text-gray-500">
							We care about your data. Read our{" "}
							<a href="#" className="text-gray-400 hover:text-white underline">
								Privacy Policy
							</a>
							.
						</p>
					</motion.div>
				</div>

				<motion.div
					className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.4 }}
				>
					<p className="text-base text-gray-400">
						&copy; {currentYear} BrandName. All rights reserved.
					</p>
					<div className="mt-4 md:mt-0 flex flex-wrap justify-center md:justify-start space-x-6">
						<a
							href="#"
							className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
						>
							Privacy Policy
						</a>
						<a
							href="#"
							className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
						>
							Terms of Service
						</a>
						<a
							href="#"
							className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
						>
							Cookie Policy
						</a>
						<a
							href="#"
							className="text-sm text-gray-400 hover:text-white transition-colors duration-300"
						>
							Sitemap
						</a>
					</div>
				</motion.div>
			</div>
		</footer>
	);
};

export default FooterWithNewsletter;
