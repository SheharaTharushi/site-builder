import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import BackButton from "../BackButton";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideNav, setHideNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Extract the path parts to determine mode and base path
  const pathParts = location.pathname.split("/");
  const isBuilderMode = pathParts[1] === "builder";
  const isPreviewMode = pathParts[1] === "preview";

  // Construct base path based on mode
  let basePath;
  if (isPreviewMode && pathParts.length >= 4) {
    basePath = `/${pathParts[1]}/${pathParts[2]}/${pathParts[3]}`;
  } else if (pathParts.length >= 3) {
    basePath = `/${pathParts[1]}/${pathParts[2]}`;
  }

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 50; // Amount of scroll before triggering hide

      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        // Scrolling down & past threshold
        setHideNav(true);
      } else {
        // Scrolling up or at top
        setHideNav(false);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);

      // Update active section
      const sections = ["home", "about", "experience", "projects", "contact"];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const element = document.querySelector(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Only show BackButton in preview mode */}
      {isPreviewMode && (
        <button
          onClick={() => navigate(-1)}
          className="fixed top-4 left-4 z-50 text-white hover:text-gray-200"
          aria-label="Go back"
        >
          <BackButton />
        </button>
      )}

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: 0 }}
        animate={{ y: hideNav ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "bg-black/80 backdrop-blur-md" : "bg-black"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to={basePath || "/"} className="text-xl font-bold">
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
                  DevfolioPro
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map(({ name, href }) => (
                  <a
                    key={name}
                    href={href}
                    onClick={(e) => scrollToSection(e, href)}
                    className={`${
                      activeSection === href.slice(1)
                        ? "text-white"
                        : "text-gray-300 hover:text-white"
                    } transition-colors duration-300 px-3 py-2 text-sm font-medium`}
                  >
                    {name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                <span className="sr-only">Open main menu</span>
                {!isMobileMenuOpen ? (
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
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

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? "open" : "closed"}
          variants={{
            open: { opacity: 1, height: "auto" },
            closed: { opacity: 0, height: 0 },
          }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-black/90 backdrop-blur-md overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ name, href }) => (
              <a
                key={name}
                href={href}
                onClick={(e) => scrollToSection(e, href)}
                className={`${
                  activeSection === href.slice(1)
                    ? "text-white bg-white/10"
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
              >
                {name}
              </a>
            ))}
          </div>
        </motion.div>
      </motion.nav>
    </>
  );
};

export default Navigation;