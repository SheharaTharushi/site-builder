import { useEffect } from "react";
import { gsap } from "gsap";
import PropTypes from "prop-types";

const ColorfulPortfolioHero = ({
	title = "Creative",
	subtitle = "Portfolio",
	description = "Design & Development",
	color = "bg-gradient-to-r from-violet-600 to-indigo-600",
	textColor = "text-white",
	primaryButtonText = "View Work",
	primaryButtonLink = "#work",
	secondaryButtonText = "Contact Me",
	secondaryButtonLink = "#contact",
}) => {
	useEffect(() => {
		// Hero section text animation
		const heroTitle = document.querySelector(".hero-title");
		const heroSubtitle = document.querySelector(".hero-subtitle");

		if (heroTitle && heroSubtitle) {
			gsap.from(heroTitle, {
				duration: 1.5,
				y: 100,
				opacity: 0,
				ease: "power4.out",
			});

			gsap.from(heroSubtitle, {
				duration: 1.5,
				y: 50,
				opacity: 0,
				delay: 0.3,
				ease: "power4.out",
			});
		}
	}, []);

	return (
		<section
			id="hero"
			className={`min-h-screen ${color} flex items-center justify-center ${textColor} relative overflow-hidden`}
		>
			<div className="absolute inset-0 opacity-20">
				{[...Array(20)].map((_, i) => (
					<div
						key={i}
						className="absolute rounded-full bg-white"
						style={{
							top: `${Math.random() * 100}%`,
							left: `${Math.random() * 100}%`,
							width: `${Math.random() * 300 + 50}px`,
							height: `${Math.random() * 300 + 50}px`,
							opacity: Math.random() * 0.5,
						}}
					/>
				))}
			</div>
			<div className="container mx-auto px-6 text-center relative z-10">
				<h1 className="hero-title text-7xl sm:text-8xl md:text-9xl font-bold mb-6 tracking-tighter">
					<span className="block">{title}</span>
					<span className="block">{subtitle}</span>
				</h1>
				<p className="hero-subtitle text-xl md:text-2xl mb-12 opacity-90">
					{description}
				</p>
				<div className="flex justify-center space-x-4">
					<a
						href={primaryButtonLink}
						className="px-8 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105"
					>
						{primaryButtonText}
					</a>
					<a
						href={secondaryButtonLink}
						className="px-8 py-3 border-2 border-white font-semibold rounded-full hover:bg-white hover:text-indigo-600 transition-all transform hover:scale-105"
					>
						{secondaryButtonText}
					</a>
				</div>

				<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
					<svg
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24"
						className="text-white"
					>
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 9l-7 7-7-7"
						></path>
					</svg>
				</div>
			</div>
		</section>
	);
};

ColorfulPortfolioHero.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	color: PropTypes.string,
	textColor: PropTypes.string,
	primaryButtonText: PropTypes.string,
	primaryButtonLink: PropTypes.string,
	secondaryButtonText: PropTypes.string,
	secondaryButtonLink: PropTypes.string,
};

export default ColorfulPortfolioHero;
