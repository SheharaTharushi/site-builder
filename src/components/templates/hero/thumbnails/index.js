// This file exports placeholder images for thumbnails
// In a real project, you would use actual image files

// Function to generate a colored rectangle with text as SVG data URL
const generateThumbnail = (text, bgColor) => {
	const svg = `
    <svg width="400" height="225" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="225" fill="${bgColor}" />
      <text x="50%" y="50%" font-family="Arial" font-size="24" fill="white" text-anchor="middle" dominant-baseline="middle">${text}</text>
    </svg>
  `;

	return `data:image/svg+xml;base64,${btoa(svg)}`;
};

// Generate placeholder thumbnails
export const heroSimpleThumbnail = generateThumbnail("Simple Hero", "#ee6325");
export const heroWithImageThumbnail = generateThumbnail(
	"Hero with Image",
	"#ee6325"
);

// For video thumbnail, we'll use the actual image file from public directory
// We create a function that returns the path to the public file
export const heroWithVideoThumbnail = "/placeholder-video-thumbnail.png";

export default {
	heroSimpleThumbnail,
	heroWithImageThumbnail,
	heroWithVideoThumbnail,
};
