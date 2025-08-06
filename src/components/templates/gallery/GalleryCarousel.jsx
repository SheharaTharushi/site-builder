import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const GalleryCarousel = () => {
	const images = [
		{
			id: 1,
			src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&auto=format&fit=crop&q=80",
			alt: "Coastal sunset",
			title: "Sunset Symphony",
			description: "A breathtaking view of the sunset over the ocean horizon",
		},
		{
			id: 2,
			src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&auto=format&fit=crop&q=80",
			alt: "Mountain range",
			title: "Mountain Majesty",
			description: "Towering peaks reaching toward the clear blue sky",
		},
		{
			id: 3,
			src: "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1200&auto=format&fit=crop&q=80",
			alt: "Forest waterfall",
			title: "Cascading Waters",
			description: "Serene waterfall nestled within a lush forest landscape",
		},
		{
			id: 4,
			src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1200&auto=format&fit=crop&q=80",
			alt: "Desert landscape",
			title: "Desert Dreams",
			description: "Golden sand dunes stretching as far as the eye can see",
		},
		{
			id: 5,
			src: "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1200&auto=format&fit=crop&q=80",
			alt: "Autumn forest",
			title: "Autumn Tapestry",
			description: "Vibrant fall colors painting a forest in warm hues",
		},
	];

	const [currentSlide, setCurrentSlide] = useState(0);
	const [isAutoplay, setIsAutoplay] = useState(true);
	const [touchStart, setTouchStart] = useState(0);
	const [touchEnd, setTouchEnd] = useState(0);

	// Auto advance slides
	useEffect(() => {
		let interval;
		if (isAutoplay) {
			interval = setInterval(() => {
				nextSlide();
			}, 5000);
		}
		return () => clearInterval(interval);
	}, [currentSlide, isAutoplay]);

	const goToSlide = (index) => {
		setCurrentSlide(index);
	};

	const nextSlide = () => {
		setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
	};

	const prevSlide = () => {
		setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
	};

	// Touch event handlers for mobile swipe
	const handleTouchStart = (e) => {
		setTouchStart(e.targetTouches[0].clientX);
	};

	const handleTouchMove = (e) => {
		setTouchEnd(e.targetTouches[0].clientX);
	};

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 50) {
			// Swipe left
			nextSlide();
		}

		if (touchStart - touchEnd < -50) {
			// Swipe right
			prevSlide();
		}
	};

	// Pause autoplay when mouse enters the carousel
	const handleMouseEnter = () => {
		setIsAutoplay(false);
	};

	// Resume autoplay when mouse leaves the carousel
	const handleMouseLeave = () => {
		setIsAutoplay(true);
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
						Featured Gallery
					</h2>
					<div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						Explore our stunning collection of photographs showcasing nature's
						beauty in all its forms.
					</p>
				</motion.div>

				<div
					className="relative rounded-xl overflow-hidden shadow-xl mb-10"
					onMouseEnter={handleMouseEnter}
					onMouseLeave={handleMouseLeave}
					onTouchStart={handleTouchStart}
					onTouchMove={handleTouchMove}
					onTouchEnd={handleTouchEnd}
				>
					{/* Main carousel */}
					<div className="relative h-[500px] overflow-hidden">
						{images.map((image, index) => (
							<motion.div
								key={image.id}
								className="absolute inset-0 h-full w-full"
								initial={{ opacity: 0 }}
								animate={{
									opacity: currentSlide === index ? 1 : 0,
									zIndex: currentSlide === index ? 10 : 0,
								}}
								transition={{
									opacity: { duration: 1 },
								}}
							>
								<img
									src={image.src}
									alt={image.alt}
									className="w-full h-full object-cover"
								/>
								<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-8 text-white">
									<h3 className="text-2xl font-bold mb-2">{image.title}</h3>
									<p className="max-w-2xl">{image.description}</p>
								</div>
							</motion.div>
						))}
					</div>

					{/* Navigation arrows */}
					<button
						className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
						onClick={prevSlide}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M15 19l-7-7 7-7"
							></path>
						</svg>
					</button>
					<button
						className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center z-20"
						onClick={nextSlide}
					>
						<svg
							className="w-6 h-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M9 5l7 7-7 7"
							></path>
						</svg>
					</button>

					{/* Slide indicator dots */}
					<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
						{images.map((_, index) => (
							<button
								key={index}
								onClick={() => goToSlide(index)}
								className={`w-3 h-3 rounded-full transition-all ${
									currentSlide === index ? "bg-primary w-6" : "bg-white/60"
								}`}
								aria-label={`Go to slide ${index + 1}`}
							/>
						))}
					</div>
				</div>

				{/* Thumbnail navigation */}
				<motion.div
					className="flex overflow-x-auto space-x-2 pb-4 hide-scrollbar"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.3 }}
				>
					{images.map((image, index) => (
						<motion.div
							key={image.id}
							className={`flex-shrink-0 cursor-pointer overflow-hidden rounded-md ${
								currentSlide === index ? "ring-2 ring-primary" : ""
							}`}
							onClick={() => goToSlide(index)}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<img
								src={image.src}
								alt={`Thumbnail ${index + 1}`}
								className="w-20 h-14 object-cover"
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default GalleryCarousel;
