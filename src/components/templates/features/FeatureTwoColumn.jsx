import React from "react";
import PropTypes from "prop-types";

const FeatureTwoColumn = ({
	id,
	title,
	description,
	features,
	imageSrc,
	imageAlt,
	backgroundColor = "bg-white",
}) => {
	return (
		<section
			id={id}
			className={`${backgroundColor} py-16 px-4 sm:px-6 lg:px-8`}
		>
			<div className="max-w-7xl mx-auto">
				<div className="text-center mb-16">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="text-lg text-gray-600 max-w-3xl mx-auto">
						{description}
					</p>
				</div>

				<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
					<div className="w-full lg:w-1/2">
						<div className="relative h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
							<img
								src={imageSrc}
								alt={imageAlt}
								className="w-full h-full object-cover"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
						</div>
					</div>

					<div className="w-full lg:w-1/2">
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
							{features.map((feature, index) => (
								<div key={index} className="flex flex-col">
									<div className="mb-3 text-primary">{feature.icon}</div>
									<h3 className="text-xl font-semibold text-gray-900 mb-2">
										{feature.title}
									</h3>
									<p className="text-gray-600">{feature.description}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

FeatureTwoColumn.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	features: PropTypes.arrayOf(
		PropTypes.shape({
			icon: PropTypes.node,
			title: PropTypes.string.isRequired,
			description: PropTypes.string.isRequired,
		})
	).isRequired,
	imageSrc: PropTypes.string.isRequired,
	imageAlt: PropTypes.string.isRequired,
	backgroundColor: PropTypes.string,
};

export default FeatureTwoColumn;
