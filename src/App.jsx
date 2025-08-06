import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import viteLogo from "/vite.svg";
import AnimatedRoutes from "./components/layout/AnimatedRoutes";
import LoadingSpinner from "./components/layout/LoadingSpinner";
import BuilderButton from "./components/layout/BuilderButton";

// Import pages
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import TemplateLibrary from "./components/pages/TemplateLibrary";
import Contact from "./components/pages/Contact";
import SiteTemplates from "./components/pages/SiteTemplates";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Menu items shared between desktop and mobile
  const menuItems = [
    { path: "/", label: "Home" },
    { path: "/templates", label: "Template Library" },
    { path: "/sites", label: "Site Templates" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact Us" },
  ];

  // Show loader during initial load
  if (isLoading) {
    return (
      <LoadingSpinner
        fullScreen
        type="beat"
        text="Loading amazing templates..."
      />
    );
  }

  return (
    <Router basename="/site-builder">
      <AppContent
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        toggleMenu={toggleMenu}
        menuItems={menuItems}
      />
    </Router>
  );
}

// Separate component to access useLocation hook
function AppContent({ isMenuOpen, setIsMenuOpen, toggleMenu, menuItems }) {
  const location = useLocation();

  // Check if current route is a microsite page - match sites/{id}/ format
  // This checks if path has at least 3 segments where the first two are /sites/{siteId}
  const pathParts = location.pathname.split("/").filter((part) => part !== "");
  const isMicrositePage =
    pathParts.length >= 2 && pathParts[0] === "sites" && pathParts[1] !== "";

  // Check if current route is the builder or preview page
  const isBuilderPage = pathParts.length >= 1 && pathParts[0] === "builder";
  const isPreviewPage = pathParts.length >= 1 && pathParts[0] === "preview";

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  // Don't show header or footer on microsite, builder, or preview pages
  const showHeaderFooter = !isMicrositePage && !isBuilderPage && !isPreviewPage;

  return (
    <div
      className={`min-h-screen flex flex-col ${
        showHeaderFooter ? "items-center bg-white text-gray-800 p-4" : "p-0"
      }`}
    >
      {showHeaderFooter && (
        <header className="w-full max-w-6xl mb-8">
          <nav className="flex justify-between items-center py-4">
            <div className="flex items-center gap-4 z-20">
              <div className="bg-primary rounded-full p-2">
                <img src={viteLogo} className="h-6 w-6" alt="Vite logo" />
              </div>
              <span className="text-xl font-bold text-primary">
                Section Templates
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              <ul className="flex gap-6 text-gray-600">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`hover:text-primary transition-colors font-medium ${
                        location.pathname === item.path ||
                        (location.pathname.startsWith("/templates/") &&
                          item.path === "/templates") ||
                        (location.pathname.startsWith("/sites/") &&
                          item.path === "/sites")
                          ? "text-primary"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <BuilderButton />
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden z-20">
              <button
                onClick={toggleMenu}
                className="p-2 focus:outline-none"
                aria-label="Toggle menu"
              >
                <div className={`w-6 relative ${isMenuOpen ? "mt-1" : ""}`}>
                  <AnimatePresence>
                    {isMenuOpen ? (
                      <>
                        <span className="w-6 h-0.5 bg-gray-800 block mb-1.5 origin-center transform rotate-45 translate-y-2"></span>
                        <span className="w-6 h-0.5 bg-gray-800 block mb-1.5 opacity-0"></span>
                        <span className="w-6 h-0.5 bg-gray-800 block origin-center transform -rotate-45 -translate-y-2"></span>
                      </>
                    ) : (
                      <>
                        <span className="w-6 h-0.5 bg-gray-800 block mb-1.5"></span>
                        <span className="w-6 h-0.5 bg-gray-800 block mb-1.5"></span>
                        <span className="w-6 h-0.5 bg-gray-800 block"></span>
                      </>
                    )}
                  </AnimatePresence>
                </div>
              </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
              {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-10 md:hidden">
                  <div className="flex flex-col items-center justify-center h-full">
                    <ul className="flex flex-col gap-6 text-center">
                      {menuItems.map((item) => (
                        <li key={item.path}>
                          <Link
                            to={item.path}
                            className={`text-2xl font-medium hover:text-primary transition-colors ${
                              location.pathname === item.path ||
                              (location.pathname.startsWith("/templates/") &&
                                item.path === "/templates") ||
                              (location.pathname.startsWith("/sites/") &&
                                item.path === "/sites")
                                ? "text-primary"
                                : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                      <li className="mt-4">
                        <BuilderButton />
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </AnimatePresence>
          </nav>
        </header>
      )}

      <main
        className={`w-full ${showHeaderFooter ? "max-w-6xl" : ""} flex-grow`}
      >
        <AnimatedRoutes />
      </main>

      {showHeaderFooter && (
        <footer className="w-full max-w-6xl py-6 mt-12 text-center text-sm text-gray-500 border-t border-gray-200">
          © {new Date().getFullYear()} Section Templates. Built with Vite +
          React + Tailwind CSS.
        </footer>
      )}
    </div>
  );
}

export default App;
