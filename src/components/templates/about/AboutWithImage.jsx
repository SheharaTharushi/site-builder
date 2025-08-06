import { motion } from "framer-motion";

const AboutWithImage = () => {
	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Image Column */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="order-2 lg:order-1"
					>
						<div className="relative">
							<div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg z-0"></div>
							<div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-lg z-0"></div>
							<img
								src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80"
								alt="Our team in the office"
								className="rounded-lg shadow-lg relative z-10 w-full h-auto object-cover aspect-[4/3]"
							/>
						</div>
					</motion.div>

					{/* Content Column */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						className="order-1 lg:order-2"
					>
						<div className="mb-6">
							<div className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full mb-3">
								About Us
							</div>
							<h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
								We're Building Digital Experiences That People Love
							</h2>
							<div className="w-20 h-1 bg-primary mb-6"></div>
						</div>

						<p className="text-gray-600 mb-6">
							Founded in 2015, our agency has grown from a small team of
							passionate individuals to a full-service digital studio with
							experts in design, development, marketing, and strategy. We
							believe in creating work that makes a difference for our clients
							and their users.
						</p>

						<div className="grid grid-cols-2 gap-6 mb-8">
							<div>
								<h3 className="text-2xl font-bold text-primary mb-2">250+</h3>
								<p className="text-gray-600">Projects Completed</p>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-primary mb-2">120+</h3>
								<p className="text-gray-600">Happy Clients</p>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-primary mb-2">15+</h3>
								<p className="text-gray-600">Team Members</p>
							</div>
							<div>
								<h3 className="text-2xl font-bold text-primary mb-2">8+</h3>
								<p className="text-gray-600">Years Experience</p>
							</div>
						</div>

						<div className="space-y-4">
							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0 mt-1">
									<svg
										className="w-5 h-5 text-primary"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<p className="text-gray-600">
									<span className="font-medium text-gray-900">
										Innovative Solutions
									</span>{" "}
									- We leverage the latest technologies and methodologies to
									deliver cutting-edge results.
								</p>
							</div>

							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0 mt-1">
									<svg
										className="w-5 h-5 text-primary"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<p className="text-gray-600">
									<span className="font-medium text-gray-900">
										Client-Focused Approach
									</span>{" "}
									- Your success is our success, and we're dedicated to
									exceeding your expectations.
								</p>
							</div>

							<div className="flex items-start space-x-3">
								<div className="flex-shrink-0 mt-1">
									<svg
										className="w-5 h-5 text-primary"
										fill="currentColor"
										viewBox="0 0 20 20"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											fillRule="evenodd"
											d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
											clipRule="evenodd"
										/>
									</svg>
								</div>
								<p className="text-gray-600">
									<span className="font-medium text-gray-900">
										Results-Driven
									</span>{" "}
									- We focus on creating measurable impact that helps your
									business grow.
								</p>
							</div>
						</div>

						<div className="mt-8">
							<a
								href="#"
								className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors mr-4"
							>
								Learn More
							</a>
							<a
								href="#"
								className="inline-block px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-md hover:bg-gray-50 transition-colors"
							>
								Contact Us
							</a>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default AboutWithImage;
