import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import microsites from "../microsites/index";

export default function Home() {
	// Animation variants
	const fadeInUp = {
		hidden: { opacity: 0, y: 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.6,
				ease: "easeOut",
			},
		},
	};

	const staggerContainer = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const featureVariants = {
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
		<div className="space-y-24">
			{/* Hero Section */}
			<section className="relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 to-primary/5 rounded-3xl -z-10"></div>
				<div className="py-12 md:py-20 px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
					<motion.div
						className="flex-1 space-y-6 md:space-y-8"
						initial="hidden"
						animate="visible"
						variants={staggerContainer}
					>
						<motion.h1
							className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
							variants={fadeInUp}
						>
							Beautiful Website Sections <br />
							<span className="text-primary">Ready To Use</span>
						</motion.h1>
						<motion.p
							className="text-base md:text-lg text-gray-600 max-w-lg"
							variants={fadeInUp}
						>
							A collection of professionally designed website section templates.
							Just browse, customize, and add to your site - no coding required.
						</motion.p>
						<motion.div className="flex flex-wrap gap-4" variants={fadeInUp}>
							<Link
								to="/templates"
								className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
							>
								<motion.span
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-block"
								>
									Browse Components
								</motion.span>
							</Link>
							<Link
								to="/sites"
								className="px-6 py-3 bg-primary/10 text-primary font-medium rounded-lg hover:bg-primary/20 transition-colors"
							>
								<motion.span
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-block"
								>
									Complete Sites
								</motion.span>
							</Link>
							<Link
								to="/about"
								className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
							>
								<motion.span
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
									className="inline-block"
								>
									Learn More
								</motion.span>
							</Link>
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-16 px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl sm:text-3xl font-bold mb-4">
						Build Your Website Faster
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Our ready-made section templates make website creation simple, even
						if you're not a designer or developer.
					</p>
				</motion.div>

				<motion.div
					className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{[
						{
							title: "Professional Design",
							description:
								"Expertly crafted templates that look great right away",
							icon: "✨",
						},
						{
							title: "Easy to Use",
							description: "Simple point-and-click customization for everyone",
							icon: "👆",
						},
						{
							title: "Fully Customizable",
							description:
								"Change colors, images, and text to match your brand",
							icon: "🎨",
						},
						{
							title: "Mobile Friendly",
							description: "All templates look perfect on any device",
							icon: "📱",
						},
						{
							title: "Quick Setup",
							description: "Add beautiful sections to your website in minutes",
							icon: "⚡",
						},
						{
							title: "No Coding Required",
							description: "Perfect for business owners and content creators",
							icon: "🚫",
						},
					].map((feature, index) => (
						<motion.div
							key={index}
							className="p-6 border border-gray-200 rounded-xl hover:border-primary hover:shadow-md transition-all"
							variants={featureVariants}
							whileHover={{ y: -5 }}
						>
							<motion.div
								className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-2xl mb-4"
								whileHover={{
									rotate: [0, -10, 10, -10, 0],
									transition: { duration: 0.5 },
								}}
							>
								{feature.icon}
							</motion.div>
							<h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
							<p className="text-gray-600">{feature.description}</p>
						</motion.div>
					))}
				</motion.div>
			</section>

			{/* Site Templates Showcase */}
			<section className="py-16 px-4">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "-100px" }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-2xl sm:text-3xl font-bold mb-4">
						Complete Website Templates
					</h2>
					<p className="text-gray-600 max-w-2xl mx-auto">
						Explore our collection of full website templates for different
						industries. Each template includes multiple pages with seamless
						design coordination.
					</p>
				</motion.div>

				<motion.div
					className="grid sm:grid-cols-2 gap-8 mb-10"
					variants={staggerContainer}
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, margin: "-100px" }}
				>
					{microsites.slice(0, 2).map((site) => (
						<motion.div
							key={site.id}
							className="overflow-hidden rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all group"
							variants={featureVariants}
							whileHover={{ y: -5 }}
						>
							<div className="aspect-[16/9] overflow-hidden">
								<img
									src={site.thumbnail}
									alt={site.name}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-semibold mb-2">{site.name}</h3>
								<p className="text-gray-600 mb-4">{site.description}</p>
								<div className="flex flex-wrap gap-2 mb-4">
									{site.tags.map((tag) => (
										<span
											key={tag}
											className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
										>
											{tag}
										</span>
									))}
								</div>
								<Link
									to={`/sites/${site.id}`}
									className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
								>
									<span>View Template</span>
									<svg
										className="ml-2 w-4 h-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M14 5l7 7m0 0l-7 7m7-7H3"
										/>
									</svg>
								</Link>
							</div>
						</motion.div>
					))}
				</motion.div>

				<div className="text-center">
					<Link
						to="/sites"
						className="inline-flex items-center px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors"
					>
						<motion.span
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-block"
						>
							View All Site Templates
						</motion.span>
					</Link>
				</div>
			</section>

			{/* CTA Section */}
			<motion.section
				className="bg-primary/5 py-16 px-6 rounded-3xl text-center mx-4"
				initial={{ opacity: 0, y: 40 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-100px" }}
				transition={{ duration: 0.8 }}
			>
				<motion.h2
					className="text-2xl sm:text-3xl font-bold mb-6"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
				>
					Ready to create your perfect website?
				</motion.h2>
				<motion.p
					className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					Browse our collections of beautiful section templates and complete
					site templates to start building your perfect website today.
				</motion.p>
				<motion.div
					className="flex flex-wrap gap-4 justify-center"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.4 }}
				>
					<Link
						to="/templates"
						className="px-8 py-4 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors inline-block"
					>
						<motion.span
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-block"
						>
							Browse Components
						</motion.span>
					</Link>
					<Link
						to="/sites"
						className="px-8 py-4 border border-primary bg-white text-primary font-medium rounded-lg hover:bg-primary/5 transition-colors inline-block"
					>
						<motion.span
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							className="inline-block"
						>
							Explore Sites
						</motion.span>
					</Link>
				</motion.div>
			</motion.section>
		</div>
	);
}
