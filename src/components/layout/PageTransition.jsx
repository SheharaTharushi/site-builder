import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Animation variants for page transitions
const pageVariants = {
	initial: {
		opacity: 0,
		y: 8,
	},
	in: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.4,
			ease: "easeInOut",
		},
	},
	out: {
		opacity: 0,
		y: -8,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

// Page transition component that wraps content with animations
const PageTransition = ({ children, className = "" }) => {
	return (
		<motion.div
			className={`w-full ${className}`}
			initial="initial"
			animate="in"
			exit="out"
			variants={pageVariants}
		>
			{children}
		</motion.div>
	);
};

PageTransition.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default PageTransition;
