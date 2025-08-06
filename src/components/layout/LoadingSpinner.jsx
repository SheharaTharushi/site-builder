import { PulseLoader, BeatLoader, ClipLoader } from "react-spinners";
import PropTypes from "prop-types";

// Types of loaders available
const LOADER_TYPES = {
	PULSE: "pulse",
	BEAT: "beat",
	CLIP: "clip",
};

// LoadingSpinner component with different spinner options
const LoadingSpinner = ({
	type = LOADER_TYPES.PULSE,
	color = "#ee6325",
	size = 15,
	fullScreen = false,
	text = "Loading...",
}) => {
	// Select the loader based on type
	const getLoader = () => {
		switch (type) {
			case LOADER_TYPES.BEAT:
				return <BeatLoader color={color} size={size} />;
			case LOADER_TYPES.CLIP:
				return <ClipLoader color={color} size={size * 2} />;
			case LOADER_TYPES.PULSE:
			default:
				return <PulseLoader color={color} size={size} />;
		}
	};

	// For full screen loading overlay
	if (fullScreen) {
		return (
			<div className="fixed inset-0 bg-white bg-opacity-80 flex flex-col items-center justify-center z-50">
				{getLoader()}
				{text && <p className="mt-4 text-gray-700 font-medium">{text}</p>}
			</div>
		);
	}

	// For inline loading
	return (
		<div className="flex flex-col items-center justify-center py-4">
			{getLoader()}
			{text && <p className="mt-2 text-sm text-gray-600">{text}</p>}
		</div>
	);
};

LoadingSpinner.propTypes = {
	type: PropTypes.oneOf(Object.values(LOADER_TYPES)),
	color: PropTypes.string,
	size: PropTypes.number,
	fullScreen: PropTypes.bool,
	text: PropTypes.string,
};

export { LOADER_TYPES };
export default LoadingSpinner;
