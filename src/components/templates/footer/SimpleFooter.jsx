import PropTypes from "prop-types";

const SimpleFooter = ({
	text = `© ${new Date().getFullYear()} Creative Portfolio. All rights reserved.`,
	subtext = "Designed with ❤️ using React, GSAP, and Tailwind CSS",
	bgColor = "bg-black",
	textColor = "text-white",
}) => {
	return (
		<footer className={`${bgColor} ${textColor} text-center py-8`}>
			<div className="container mx-auto px-6">
				<p>{text}</p>
				<p className="text-sm text-gray-400 mt-2">{subtext}</p>
			</div>
		</footer>
	);
};

SimpleFooter.propTypes = {
	text: PropTypes.string,
	subtext: PropTypes.string,
	bgColor: PropTypes.string,
	textColor: PropTypes.string,
};

export default SimpleFooter;
