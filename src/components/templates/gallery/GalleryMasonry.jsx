import { motion } from "framer-motion";
import { useState } from "react";

const GalleryMasonry = () => {
	const [hoveredId, setHoveredId] = useState(null);

	const images = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1677531238461-9c32886ef0a4?w=500&auto=format&fit=crop&q=60",
			alt: "Tall architecture",
			className: "col-span-1 row-span-2",
			title: "Concrete Structure",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1677442135146-2378f5880302?w=500&auto=format&fit=crop&q=60",
			alt: "Modern workspace",
			className: "col-span-1 row-span-1",
			title: "Office Space",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1678201790656-75d944ad1609?w=500&auto=format&fit=crop&q=60",
			alt: "Coastal view",
			className: "col-span-1 row-span-1",
			title: "Beach Retreat",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1677483170722-3be64752603f?w=500&auto=format&fit=crop&q=60",
			alt: "Mountain landscape",
			className: "col-span-2 row-span-1",
			title: "Mountain Range",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1677532675209-667703488a1f?w=500&auto=format&fit=crop&q=60",
			alt: "Urban night scene",
			className: "col-span-1 row-span-1",
			title: "City Lights",
		},
		{
			id: 6,
			src: "https://images.unsplash.com/photo-1677329249485-de2122872df1?w=500&auto=format&fit=crop&q=60",
			alt: "Abstract design",
			className: "col-span-1 row-span-1",
			title: "Abstract Art",
		},
		{
			id: 7,
			src: "https://images.unsplash.com/photo-1677243357056-d75fbcde91e9?w=500&auto=format&fit=crop&q=60",
			alt: "Nature close-up",
			className: "col-span-1 row-span-2",
			title: "Natural Forms",
		},
	];

	return (
		<section className="py-16 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl font-bold text-gray-900 mb-4">
						Masonry Gallery
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Our creative portfolio arranged in a dynamic layout that showcases
						the diversity of our work.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-3 gap-4 auto-rows-[200px]"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{images.map((image, index) => (
						<motion.div
							key={image.id}
							className={`${image.className} relative overflow-hidden rounded-lg`}
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
							onMouseEnter={() => setHoveredId(image.id)}
							onMouseLeave={() => setHoveredId(null)}
						>
							<img
								src={image.src}
								alt={image.alt}
								className="w-full h-full object-cover"
							/>
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: hoveredId === image.id ? 1 : 0 }}
								transition={{ duration: 0.3 }}
							>
								<h3 className="text-white text-xl font-semibold mb-1">
									{image.title}
								</h3>
								<motion.div
									className="w-10 h-0.5 bg-white/70 mb-2"
									initial={{ width: 0 }}
									animate={{ width: hoveredId === image.id ? 40 : 0 }}
									transition={{ duration: 0.5 }}
								/>
								<div className="flex space-x-2">
									<button className="text-white text-sm bg-black/30 hover:bg-primary transition-colors px-3 py-1 rounded-full">
										View
									</button>
									<button className="text-white text-sm bg-black/30 hover:bg-primary transition-colors px-3 py-1 rounded-full">
										Share
									</button>
								</div>
							</motion.div>
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
						Load More
					</a>
				</motion.div>
			</div>
		</section>
	);
};

export default GalleryMasonry;
