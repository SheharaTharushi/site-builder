import { motion } from "framer-motion";

const GalleryBasic = ({
	title = "Our Gallery",
	subtitle = "Explore our collection of stunning images that showcase our work and inspire creativity.",
	gallery: providedGallery,
}) => {
	const defaultImages = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1541845157-a6d2d100c931?w=500&auto=format&fit=crop&q=60",
			alt: "Architectural photo",
			title: "Modern Architecture",
			description: "Contemporary building with geometric design",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=500&auto=format&fit=crop&q=60",
			alt: "Landscape photo",
			title: "Mountain Lake",
			description: "Serene mountain lake with reflection",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=500&auto=format&fit=crop&q=60",
			alt: "Nature photo",
			title: "Coastal Sunset",
			description: "Golden sunset over the coastline",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=500&auto=format&fit=crop&q=60",
			alt: "Forest photo",
			title: "Misty Forest",
			description: "Morning fog in a dense forest",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1536782376847-5c9d14d97cc0?w=500&auto=format&fit=crop&q=60",
			alt: "City photo",
			title: "Urban Skyline",
			description: "City skyline at twilight hour",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60",
			alt: "Nature photo",
			title: "Forest Path",
			description: "Winding path through autumn forest",
		},
	];

	// Use provided gallery or fallback to default
	const images = providedGallery || defaultImages;

	return (
		<section className="py-16 bg-white">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{images.map((image, index) => (
						<motion.div
							key={image.id || index}
							className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
							whileHover={{ y: -5 }}
						>
							<div className="relative aspect-video overflow-hidden">
								<img
									src={image.image || image.src}
									alt={image.alt}
									className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
									<h3 className="text-white text-xl font-semibold mb-1">
										{image.title || image.caption}
									</h3>
									<p className="text-white/80 text-sm">
										{image.description || image.caption}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				<motion.div
					className="mt-10 text-center"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.8 }}
				>
					<a
						href="#"
						className="inline-block px-6 py-3 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors"
					>
						View All Gallery
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default GalleryBasic;
