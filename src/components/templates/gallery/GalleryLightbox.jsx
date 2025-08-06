import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const GalleryLightbox = () => {
	const images = [
		{
			id: 1,
			thumbnail:
				"https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&auto=format&fit=crop&q=80",
			alt: "Scenic mountain view",
			title: "Mountain Range",
			description: "Majestic mountain landscape with vibrant colors at sunset.",
		},
		{
			id: 2,
			thumbnail:
				"https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&auto=format&fit=crop&q=80",
			alt: "Ocean shore",
			title: "Coastal Beauty",
			description: "Serene coastline with gentle waves washing upon the shore.",
		},
		{
			id: 3,
			thumbnail:
				"https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&auto=format&fit=crop&q=80",
			alt: "Field at sunset",
			title: "Golden Fields",
			description:
				"Vast open field bathed in the warm glow of the setting sun.",
		},
		{
			id: 4,
			thumbnail:
				"https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1200&auto=format&fit=crop&q=80",
			alt: "Lake view",
			title: "Alpine Serenity",
			description:
				"Peaceful lake surrounded by towering mountains and pristine forests.",
		},
		{
			id: 5,
			thumbnail:
				"https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?w=1200&auto=format&fit=crop&q=80",
			alt: "Forest pathway",
			title: "Forest Path",
			description: "Mysterious path winding through a dense, misty forest.",
		},
		{
			id: 6,
			thumbnail:
				"https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=1200&auto=format&fit=crop&q=80",
			alt: "Desert landscape",
			title: "Desert Dunes",
			description:
				"Rolling sand dunes stretching to the horizon under a clear blue sky.",
		},
		{
			id: 7,
			thumbnail:
				"https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=1200&auto=format&fit=crop&q=80",
			alt: "Lavender field",
			title: "Lavender Dreams",
			description:
				"Endless rows of fragrant lavender stretching to the horizon.",
		},
		{
			id: 8,
			thumbnail:
				"https://images.unsplash.com/photo-1565118531796-763e5082d113?w=400&auto=format&fit=crop&q=60",
			full: "https://images.unsplash.com/photo-1565118531796-763e5082d113?w=1200&auto=format&fit=crop&q=80",
			alt: "Waterfall",
			title: "Cascading Falls",
			description: "Powerful waterfall cascading down moss-covered rocks.",
		},
	];

	const [selectedImage, setSelectedImage] = useState(null);
	const [lightboxOpen, setLightboxOpen] = useState(false);

	const openLightbox = (image) => {
		setSelectedImage(image);
		setLightboxOpen(true);
		document.body.style.overflow = "hidden";
	};

	const closeLightbox = () => {
		setLightboxOpen(false);
		document.body.style.overflow = "auto";
	};

	const navigateImage = (direction) => {
		const currentIndex = images.findIndex((img) => img.id === selectedImage.id);
		let newIndex;

		if (direction === "next") {
			newIndex = (currentIndex + 1) % images.length;
		} else {
			newIndex = (currentIndex - 1 + images.length) % images.length;
		}

		setSelectedImage(images[newIndex]);
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
						Lightbox Gallery
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Click on any image to view it in fullscreen lightbox mode with
						navigation and image details.
					</p>
				</motion.div>

				<motion.div
					className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					{images.map((image, index) => (
						<motion.div
							key={image.id}
							className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.3, delay: 0.1 * index }}
							whileHover={{ scale: 1.02 }}
							onClick={() => openLightbox(image)}
						>
							<div className="aspect-square overflow-hidden">
								<img
									src={image.thumbnail}
									alt={image.alt}
									className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								/>
								<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
									<div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
										<svg
											className="w-5 h-5 text-white"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
											/>
										</svg>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</motion.div>

				{/* Lightbox Modal */}
				<AnimatePresence>
					{lightboxOpen && selectedImage && (
						<motion.div
							className="fixed inset-0 bg-black z-50 flex items-center justify-center"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.3 }}
						>
							{/* Close button */}
							<button
								className="absolute top-4 right-4 z-20 p-2 text-white hover:text-primary transition-colors"
								onClick={closeLightbox}
							>
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>

							{/* Navigation buttons */}
							<button
								className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white hover:text-primary transition-colors focus:outline-none"
								onClick={() => navigateImage("prev")}
							>
								<svg
									className="w-10 h-10"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 19l-7-7 7-7"
									/>
								</svg>
							</button>

							<button
								className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 text-white hover:text-primary transition-colors focus:outline-none"
								onClick={() => navigateImage("next")}
							>
								<svg
									className="w-10 h-10"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 5l7 7-7 7"
									/>
								</svg>
							</button>

							{/* Current image */}
							<motion.div
								className="w-full h-full flex flex-col items-center justify-center relative"
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								exit={{ opacity: 0, scale: 0.9 }}
								transition={{ duration: 0.3 }}
								key={selectedImage.id}
							>
								<img
									src={selectedImage.full}
									alt={selectedImage.alt}
									className="max-h-[70vh] max-w-full object-contain"
								/>

								{/* Image info */}
								<motion.div
									className="bg-black/70 text-white p-4 absolute bottom-0 left-0 right-0"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 }}
								>
									<h3 className="text-xl font-semibold">
										{selectedImage.title}
									</h3>
									<p className="text-white/80 mt-1">
										{selectedImage.description}
									</p>
									<div className="mt-2 flex justify-between items-center">
										<span className="text-white/60 text-sm">
											Image{" "}
											{images.findIndex((img) => img.id === selectedImage.id) +
												1}{" "}
											of {images.length}
										</span>
										<div className="flex space-x-3">
											<button className="text-white/80 hover:text-white flex items-center gap-1 text-sm">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
													></path>
												</svg>
												Share
											</button>
											<button className="text-white/80 hover:text-white flex items-center gap-1 text-sm">
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
													></path>
												</svg>
												Download
											</button>
										</div>
									</div>
								</motion.div>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
};

export default GalleryLightbox;
