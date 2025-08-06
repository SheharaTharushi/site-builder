import React from "react";
import PropTypes from "prop-types";

const HeroSimple = ({
	title = "Beautiful UI for Modern Web Apps",
	subtitle = "A comprehensive library of customizable UI components built with React and Tailwind CSS. Perfect for crafting modern, responsive interfaces.",
	primaryButtonText = "Get Started",
	secondaryButtonText = "Learn More",
	primaryButtonAction = () => console.log("Primary button clicked"),
	secondaryButtonAction = () => console.log("Secondary button clicked"),
}) => {
	return (
		<section className="py-20 px-6 bg-gradient-to-br from-gray-50 to-white">
			<div className="max-w-5xl mx-auto text-center">
				<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
					{title}
				</h1>
				<p className="text-lg text-gray-600 max-w-2xl mx-auto mb-10">
					{subtitle}
				</p>
				<div className="flex flex-wrap justify-center gap-4">
					<button
						onClick={primaryButtonAction}
						className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
					>
						{primaryButtonText}
					</button>
					<button
						onClick={secondaryButtonAction}
						className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-primary hover:text-primary transition-colors"
					>
						{secondaryButtonText}
					</button>
				</div>
			</div>
		</section>
	);
};

HeroSimple.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	primaryButtonText: PropTypes.string,
	secondaryButtonText: PropTypes.string,
	primaryButtonAction: PropTypes.func,
	secondaryButtonAction: PropTypes.func,
};

export default HeroSimple;
