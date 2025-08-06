// URL validation utilities

export const validateImageUrl = async (url) => {
	if (!url) return false;

	try {
		// Check if it's a valid URL
		new URL(url);

		// Check common image extensions
		const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico)($|\?)/i;
		if (imageExtensions.test(url)) {
			return true;
		}

		// Try to load the image
		return new Promise((resolve) => {
			const img = new Image();
			img.onload = () => resolve(true);
			img.onerror = () => resolve(false);
			img.src = url;

			// Timeout after 5 seconds
			setTimeout(() => resolve(false), 5000);
		});
	} catch (error) {
		return false;
	}
};

export const validateVideoUrl = async (url) => {
	if (!url) return false;

	try {
		// Check if it's a valid URL
		new URL(url);

		// Check common video extensions
		const videoExtensions = /\.(mp4|webm|ogg|avi|mov|wmv|flv|mkv)($|\?)/i;
		if (videoExtensions.test(url)) {
			return true;
		}

		// Check for common video hosting platforms
		const videoHostingPatterns = [
			/youtube\.com\/watch\?v=/i,
			/youtu\.be\//i,
			/vimeo\.com\/\d+/i,
			/dailymotion\.com\/video\//i,
			/wistia\.com\/medias\//i,
			/vidyard\.com\/watch\//i,
		];

		const isHostedVideo = videoHostingPatterns.some((pattern) =>
			pattern.test(url)
		);
		if (isHostedVideo) {
			return true;
		}

		// Try to create a video element to test the URL
		return new Promise((resolve) => {
			const video = document.createElement("video");
			video.onloadedmetadata = () => resolve(true);
			video.onerror = () => resolve(false);
			video.src = url;

			// Timeout after 5 seconds
			setTimeout(() => resolve(false), 5000);
		});
	} catch (error) {
		return false;
	}
};

export const validateUrl = (url) => {
	if (!url) return false;

	try {
		new URL(url);
		return true;
	} catch (error) {
		return false;
	}
};
