import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const [isHoveringBack, setIsHoveringBack] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/sites");
  };

  return (
    <div className="fixed top-4 left-4 z-50">
      <button
        onClick={handleBack}
        onMouseEnter={() => setIsHoveringBack(true)}
        onMouseLeave={() => setIsHoveringBack(false)}
        className="flex items-center justify-center p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
        aria-label="Back to site templates"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-700"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isHoveringBack && (
        <div className="absolute top-full left-0 mt-1 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap">
          Back to Sites
        </div>
      )}
    </div>
  );
};

export default BackButton;
