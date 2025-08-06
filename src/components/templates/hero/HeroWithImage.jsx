import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const HeroWithImage = ({
	title = "Build stunning interfaces with our components",
	subtitle = "Our UI library provides beautiful, accessible, and customizable components that help you create modern web experiences faster than ever before.",
	description,
	imageSrc = "https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=1506&auto=format&fit=crop",
	imageAlt = "Hero visual",
	primaryButtonText = "Get Started",
	secondaryButtonText = "View Demo",
	primaryButtonLink,
	secondaryButtonLink,
	primaryButtonAction,
	secondaryButtonAction,
	reversed = false,
}) => {
	return (
		<section className="py-12 px-6 bg-white overflow-hidden">
			<div className="max-w-7xl mx-auto">
				<div
					className={`flex flex-col ${
						reversed ? "lg:flex-row-reverse" : "lg:flex-row"
					} items-center gap-12 lg:gap-24`}
				>
					<div className="flex-1 space-y-8">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight">
							{title}
						</h1>
						<p className="text-lg text-gray-600">{subtitle || description}</p>
						<div className="flex flex-wrap gap-4">
							{primaryButtonLink ? (
								<Link
									to={primaryButtonLink}
									className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
								>
									{primaryButtonText}
								</Link>
							) : (
								<button
									onClick={primaryButtonAction}
									className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
								>
									{primaryButtonText}
								</button>
							)}

							{secondaryButtonLink ? (
								<Link
									to={secondaryButtonLink}
									className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
								>
									{secondaryButtonText}
								</Link>
							) : (
								<button
									onClick={secondaryButtonAction}
									className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
								>
									{secondaryButtonText}
								</button>
							)}
						</div>
					</div>
					<div className="flex-1 relative">
						<div className="aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-gray-100">
							<img
								src={imageSrc}
								alt={imageAlt}
								className="w-full h-full object-cover"
							/>
						</div>
						{/* Decorative elements */}
						<div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full"></div>
						<div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full"></div>
					</div>
				</div>
			</div>
		</section>
	);
};

HeroWithImage.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	imageSrc: PropTypes.string,
	imageAlt: PropTypes.string,
	primaryButtonText: PropTypes.string,
	secondaryButtonText: PropTypes.string,
	primaryButtonLink: PropTypes.string,
	secondaryButtonLink: PropTypes.string,
	primaryButtonAction: PropTypes.func,
	secondaryButtonAction: PropTypes.func,
	reversed: PropTypes.bool,
};

export default HeroWithImage;
