import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const HeroWithVideo = ({
  title = "Create Immersive Web Experiences",
  subtitle = "Engage your audience with dynamic content and interactive components that bring your website to life.",
  videoUrl = "./placeholder-video.mp4",
  thumbnailUrl = "./placeholder-video-thumbnail.png",
  overlayOpacity = 0.5,
  primaryButtonText = "Get Started",
  secondaryButtonText = "Learn More",
  primaryButtonAction = () => console.log("Primary button clicked"),
  secondaryButtonAction = () => console.log("Secondary button clicked"),
}) => {
  const videoRef = useRef(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const fallbackThumbnail = "https://placehold.co/1920x1080?text=Welcome";
  const [thumbnailError, setThumbnailError] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedData = () => {
      setIsVideoLoaded(true);
      playVideo();
      setHasVideoError(false); // Reset error state if video loads successfully
    };

    const handleError = (error) => {
      console.warn("Video loading error:", error);
      setHasVideoError(true);
      setIsVideoLoaded(false);
    };

    const playVideo = async () => {
      try {
        video.muted = true;
        video.loop = true; // Ensure video loops
        await video.play();
      } catch (error) {
        console.warn("Video autoplay prevented:", error);
        // Show a play button or fallback to thumbnail
        setHasVideoError(true);
      }
    };

    // Reset states when video URL changes
    setIsVideoLoaded(false);
    setHasVideoError(false);

    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);

    return () => {
      if (video) {
        video.removeEventListener("loadeddata", handleLoadedData);
        video.removeEventListener("error", handleError);
        video.pause();
      }
    };
  }, []);

  const handleThumbnailError = () => {
    setThumbnailError(true);
  };

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        {!hasVideoError ? (
          <video
            ref={videoRef}
            className="absolute w-full h-full object-cover"
            playsInline
            loop
            muted
            poster={thumbnailError ? fallbackThumbnail : thumbnailUrl}
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={thumbnailError ? fallbackThumbnail : thumbnailUrl}
            alt="Hero Background"
            className="absolute w-full h-full object-cover"
            onError={handleThumbnailError}
          />
        )}
        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        ></div>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="min-h-[80vh] flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto animate-fade-in-delayed">
              {subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-delayed">
              <button
                onClick={primaryButtonAction}
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                {primaryButtonText}
              </button>
              <button
                onClick={secondaryButtonAction}
                className="px-10 py-4 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg font-semibold transition duration-300 transform hover:scale-105"
              >
                {secondaryButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroWithVideo.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  videoUrl: PropTypes.string,
  thumbnailUrl: PropTypes.string,
  overlayOpacity: PropTypes.number,
  primaryButtonText: PropTypes.string,
  secondaryButtonText: PropTypes.string,
  primaryButtonAction: PropTypes.func,
  secondaryButtonAction: PropTypes.func,
};

export default HeroWithVideo;
