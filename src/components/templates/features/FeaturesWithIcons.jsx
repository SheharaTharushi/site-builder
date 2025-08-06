import { motion } from "framer-motion";

const FeaturesWithIcons = () => {
	const features = [
		{
			id: 1,
			title: "Cloud Storage",
			description:
				"Store and access your data securely in the cloud, with automatic backups and version control.",
			icon: (
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
						d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
					/>
				</svg>
			),
		},
		{
			id: 2,
			title: "Advanced Analytics",
			description:
				"Powerful analytics tools to help you understand your data and make informed decisions.",
			icon: (
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
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
		},
		{
			id: 3,
			title: "Secure Authentication",
			description:
				"Multi-factor authentication and advanced security features to keep your data safe.",
			icon: (
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
						d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
					/>
				</svg>
			),
		},
		{
			id: 4,
			title: "Smart Automation",
			description:
				"Automate repetitive tasks and workflows to save time and increase productivity.",
			icon: (
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
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
		},
	];

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
			},
		},
	};

	const itemVariants = {
		hidden: { opacity: 0, x: -20 },
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				duration: 0.4,
			},
		},
	};

	return (
		<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-center mb-16"
				>
					<span className="text-primary font-semibold tracking-wider uppercase text-sm">
						Why Choose Us
					</span>
					<h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Features That Make Us Different
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						We've designed our features to help businesses like yours succeed in
						a competitive digital landscape.
					</p>
				</motion.div>

				<motion.div
					variants={containerVariants}
					initial="hidden"
					animate="visible"
					className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10"
				>
					{features.map((feature) => (
						<motion.div
							key={feature.id}
							variants={itemVariants}
							className="relative"
						>
							<div className="absolute flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
								{feature.icon}
							</div>
							<div className="ml-16">
								<h3 className="text-xl font-medium text-gray-900">
									{feature.title}
								</h3>
								<p className="mt-2 text-base text-gray-600">
									{feature.description}
								</p>
								<div className="mt-4">
									<a
										href="#"
										className="text-primary font-medium flex items-center hover:text-primary-dark transition-colors"
									>
										Learn more
										<svg
											className="ml-1 h-4 w-4"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
										>
											<path
												fillRule="evenodd"
												d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.6 }}
					className="mt-16 bg-white p-8 rounded-xl shadow-sm border border-gray-200"
				>
					<div className="flex flex-col md:flex-row items-center justify-between gap-6">
						<div>
							<h3 className="text-2xl font-bold text-gray-900">
								Ready to get started?
							</h3>
							<p className="mt-2 text-gray-600">
								Join thousands of satisfied customers using our solution.
							</p>
						</div>
						<button className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-dark transition duration-300 whitespace-nowrap">
							Start Free Trial
						</button>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default FeaturesWithIcons;
