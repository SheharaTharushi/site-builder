import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "../pages/Home";
import About from "../pages/About";
import TemplateLibrary from "../pages/TemplateLibrary";
import SiteTemplates from "../pages/SiteTemplates";
import Contact from "../pages/Contact";
import SiteBuilder from "../pages/SiteBuilder";
import SitePreview from "../pages/SitePreview";
import PageTransition from "./PageTransition";
import microsites, { getSiteById } from "../microsites/index";
import BackButton from "../microsites/BackButton";

// AnimatedRoutes component that adds transitions between routes
const AnimatedRoutes = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current route is a microsite page using the same logic as App.jsx
  const pathParts = location.pathname.split("/").filter((part) => part !== "");
  const isMicrositePage =
    (pathParts.length >= 2 &&
      pathParts[0] === "sites" &&
      pathParts[1] !== "") ||
    (pathParts.length >= 3 &&
      pathParts[0] === "site-builder" &&
      pathParts[1] === "sites");

  // Is this a preview or builder page?
  const isBuilderPage = pathParts.length >= 1 && pathParts[0] === "builder";
  const isPreviewPage = pathParts.length >= 1 && pathParts[0] === "preview";

  // Extract site ID from the URL
  const siteId = pathParts.length >= 2 ? pathParts[1] : null;

  // Get site data if we have an ID
  const siteData = siteId ? getSiteById(siteId) : null;
  const siteName = siteData ? siteData.name : null;

  // Function to handle back button click
  const handleBackToLibrary = () => {
    navigate("/sites");
  };

  // Dynamically generate routes for each site's pages
  const siteRoutes = microsites.flatMap((site) => {
    // Regular routes from site configuration
    const regularRoutes = site.pages.map((page) => ({
      path: `/sites/${site.id}${page.path}`,
      element: (
        <>
          {isMicrositePage && (
            <BackButton onClick={handleBackToLibrary} siteName={site.name} />
          )}
          <page.component />
        </>
      ),
    }));

    // Builder routes
    const builderRoutes = site.pages.map((page) => ({
      path: `/site-builder/builder/${site.id}${page.path}`,
      element: (
        <>
          {isMicrositePage && (
            <BackButton onClick={handleBackToLibrary} siteName={site.name} />
          )}
          <page.component isBuilder={true} />
        </>
      ),
    }));

    // Preview routes
    const previewRoutes = site.pages.map((page) => ({
      path: `/preview/sites/${site.id}${page.path}`,
      element: (
        <>
          {isMicrositePage && (
            <BackButton onClick={handleBackToLibrary} siteName={site.name} />
          )}
          <page.component previewMode={true} />
        </>
      ),
    }));

    // Special dynamic routes for product detail pages (if this is an ecommerce site)
    const dynamicRoutes =
      site.category === "ecommerce"
        ? [
            {
              path: `/sites/${site.id}/product/:productId`,
              element: (
                <>
                  {isMicrositePage && (
                    <BackButton
                      onClick={handleBackToLibrary}
                      siteName={site.name}
                    />
                  )}
                  {(() => {
                    const detailPage = site.pages.find(
                      (page) => page.id === "product-detail"
                    );
                    return detailPage ? <detailPage.component /> : null;
                  })()}
                </>
              ),
            },
          ]
        : [];

    // Combine all routes
    return [
      ...regularRoutes,
      ...builderRoutes,
      ...previewRoutes,
      ...dynamicRoutes,
    ];
  });

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/templates"
          element={
            <PageTransition>
              <TemplateLibrary />
            </PageTransition>
          }
        />
        <Route
          path="/templates/:templateId"
          element={
            <PageTransition>
              <TemplateLibrary />
            </PageTransition>
          }
        />
        <Route
          path="/sites"
          element={
            <PageTransition>
              <SiteTemplates />
            </PageTransition>
          }
        />
        <Route
          path="/sites/:siteId"
          element={
            <PageTransition>
              <SiteTemplates />
            </PageTransition>
          }
        />
        {/* Site Builder Routes */}
        <Route path="/builder/:templateId" element={<SiteBuilder />} />
        <Route path="/builder/:templateId/*" element={<SiteBuilder />} />
        {/* Site Preview Routes */}
        <Route
          path="/preview/:templateId/:encodedData"
          element={<SitePreview />}
        />
        <Route
          path="/preview/:templateId/:encodedData/*"
          element={<SitePreview />}
        />
        {/* Dynamic site page routes */}
        {siteRoutes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={<PageTransition>{route.element}</PageTransition>}
          />
        ))}
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/contact"
          element={
            <PageTransition>
              <Contact />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
