import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../BackButton";

const Navigation = ({
  brandName = "Beauty & Care",
  brandColor = "text-rose-500",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract the path parts
  const pathParts = location.pathname.split("/");

  // Determine the mode and construct base path accordingly
  const isBuilderMode = pathParts[1] === "site-builder";
  const isPreviewMode = pathParts[1] === "preview";

  let basePath;
  if (isPreviewMode && pathParts.length >= 4) {
    // For preview mode: /preview/templateId/encodedData
    basePath = `/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}`;
  } else {
    // For other modes: /sites/templateId or /site-builder/templateId
    basePath = `/${pathParts[1]}/${pathParts[2]}`;
  }

  // Create navigation links with the correct base path
  const links = [
    { name: "Home", path: `${basePath}/` },
    { name: "About", path: `${basePath}/about` },
    { name: "Products", path: `${basePath}/products` },
    { name: "Contact", path: `${basePath}/contact` },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle back button click
  const handleBackClick = () => {
    navigate("/sites");
  };

  return (
    <>
      <BackButton onClick={handleBackClick} siteName={brandName} />
      <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky w-full z-40 top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link
                to={`${basePath}/`}
                className={`font-serif text-2xl ${brandColor}`}
              >
                {brandName}
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`py-2 text-sm relative ${
                    location.pathname === link.path
                      ? "text-rose-500"
                      : "text-gray-600 hover:text-rose-500"
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-rose-500"
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block pl-3 pr-4 py-2 text-base font-medium ${
                    location.pathname === link.path
                      ? "text-rose-500 bg-rose-50"
                      : "text-gray-600 hover:text-rose-500 hover:bg-gray-50"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
