import React from "react";
import { Link, useLocation } from "react-router-dom";
import NavFull from "../../templates/navigation/NavFull";

const Navigation = ({ brandName = "EduVision", brandColor }) => {
  const location = useLocation();

  // Extract the path parts
  const pathParts = location.pathname.split("/");

  // Determine the mode and construct base path accordingly
  const isBuilderMode = pathParts[1] === "builder";
  const isPreviewMode = pathParts[1] === "preview";

  let basePath;
	if (isPreviewMode && pathParts.length >= 4) {
		// For preview mode: /preview/templateId/encodedData
		basePath = `/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}`;
	} else {
		// For other modes: /sites/templateId or /builder/templateId
		basePath = `/${pathParts[1]}/${pathParts[2]}`;
	}

  // Create navigation links with the correct base path
  const navLinks = [
    { name: "Home", href: `${basePath}/` },
    { name: "About", href: `${basePath}/about` },
    { name: "Courses", href: `${basePath}/courses` },
    { name: "Contact", href: `${basePath}/contact` },
  ];

  return (
    <NavFull
      logo={brandName}
      links={navLinks}
      buttonText="Contact Us"
      buttonLink={`${basePath}/contact`}
      customColor={brandColor}
    />
  );
};

export default Navigation;
