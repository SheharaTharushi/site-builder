import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const GalleryFiltered = () => {
	const categories = [
		{ id: "all", label: "All" },
		{ id: "architecture", label: "Architecture" },
		{ id: "nature", label: "Nature" },
		{ id: "urban", label: "Urban" },
		{ id: "travel", label: "Travel" },
	];

	const galleryItems = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=500&auto=format&fit=crop&q=60",
			alt: "Tall modern skyscraper",
			title: "Modern Heights",
			category: "architecture",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?w=500&auto=format&fit=crop&q=60",
			alt: "Forest valley",
			title: "Morning Valley",
			category: "nature",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=500&auto=format&fit=crop&q=60",
			alt: "Downtown street",
			title: "City Streets",
			category: "urban",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1516563230115-fe75d39a7c4e?w=500&auto=format&fit=crop&q=60",
			alt: "Ancient temple",
			title: "Temple Visit",
			category: "travel",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?w=500&auto=format&fit=crop&q=60",
			alt: "Mountain lake",
			title: "Mountain Reflections",
			category: "nature",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1486728297118-82a07bc48a28?w=500&auto=format&fit=crop&q=60",
			alt: "Glass skyscraper",
			title: "Glass Heights",
			category: "architecture",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1529963183134-61a90db47eaf?w=500&auto=format&fit=crop&q=60",
			alt: "Market scene",
			title: "Local Market",
			category: "travel",
		},
		{
			id: 8,
			src: "https://images.unsplash.com/photo-1444084316824-dc26d6657664?w=500&auto=format&fit=crop&q=60",
			alt: "City night",
			title: "Night Lights",
			category: "urban",
		},
		{
			id: 9,
			src: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?w=500&auto=format&fit=crop&q=60",
			alt: "Waterfall",
			title: "Forest Falls",
			category: "nature",
		},
	];

	const [activeCategory, setActiveCategory] = useState("all");
	const [selectedImage, setSelectedImage] = useState(null);

	const filteredItems =
		activeCategory === "all"
			? galleryItems
			: galleryItems.filter((item) => item.category === activeCategory);

	const handleCategoryChange = (categoryId) => {
		setActiveCategory(categoryId);
	};

	const handleImageClick = (image) => {
		setSelectedImage(image);
	};

	const closeModal = () => {
		setSelectedImage(null);
	};

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
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Filtered Gallery
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore our diverse collection of images from around the world -
						filter by category to find what inspires you.
					</p>
				</motion.div>

				{/* Filter buttons */}
				<motion.div
					className="flex flex-wrap justify-center gap-2 mb-8"
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{categories.map((category) => (
						<motion.button
							key={category.id}
							onClick={() => handleCategoryChange(category.id)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
								activeCategory === category.id
									? "bg-primary text-white"
									: "bg-gray-100 text-gray-700 hover:bg-gray-200"
							}`}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							{category.label}
						</motion.button>
					))}
				</motion.div>

				{/* Gallery grid */}
				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
					variants={containerVariants}
					initial="hidden"
					animate="visible"
				>
					<AnimatePresence>
						{filteredItems.map((item) => (
							<motion.div
								key={item.id}
								className="overflow-hidden rounded-lg shadow-md cursor-pointer"
								variants={itemVariants}
								layout
								onClick={() => handleImageClick(item)}
								whileHover={{
									scale: 1.03,
									transition: { duration: 0.3 },
								}}
								exit={{ opacity: 0, scale: 0.8 }}
							>
								<div className="relative aspect-video group">
									<img
										src={item.src}
										alt={item.alt}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
										<span className="text-white font-medium px-4 py-2 rounded-full border-2 border-white/50">
											View
										</span>
									</div>
								</div>
								<div className="p-4">
									<h3 className="font-semibold text-gray-900">{item.title}</h3>
									<div className="flex justify-between items-center mt-2">
										<span className="text-sm text-gray-500 capitalize">
											{item.category}
										</span>
										<span className="text-sm text-primary">#{item.id}</span>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</motion.div>

				{/* Empty state when no items match filter */}
				{filteredItems.length === 0 && (
					<motion.div
						className="text-center py-12"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
					>
						<svg
							className="w-16 h-16 mx-auto text-gray-300 mb-4"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
							/>
						</svg>
						<h3 className="text-xl font-medium text-gray-700">
							No images found
						</h3>
						<p className="text-gray-500 mt-2">
							Try selecting a different category
						</p>
					</motion.div>
				)}

				{/* Image Modal */}
				<AnimatePresence>
					{selectedImage && (
						<motion.div
							className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeModal}
						>
							<motion.div
								className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden"
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								onClick={(e) => e.stopPropagation()}
							>
								<button
									className="absolute top-4 right-4 bg-black/50 text-white w-8 h-8 rounded-full flex items-center justify-center z-10"
									onClick={closeModal}
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
											d="M6 18L18 6M6 6l12 12"
										></path>
									</svg>
								</button>
								<img
									src={selectedImage.src}
									alt={selectedImage.alt}
									className="w-full h-auto max-h-[80vh] object-contain"
								/>
								<div className="p-4 bg-white">
									<h3 className="text-xl font-semibold">
										{selectedImage.title}
									</h3>
									<p className="text-gray-500 capitalize">
										{selectedImage.category}
									</p>
								</div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default GalleryFiltered;
