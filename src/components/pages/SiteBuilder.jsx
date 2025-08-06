import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { getSiteById } from "../microsites/index";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import SectionEditor from "../layout/SectionEditor";
import AdvancedSectionEditor from "../layout/AdvancedSectionEditor";
import WhatsAppMessageModal from "../layout/WhatsAppMessageModal";
import DeletedSectionsPanel from "../layout/DeletedSectionsPanel";
import FootprintPanel from "../layout/FootprintPanel";
import FootprintTracker, {
  FOOTPRINT_ACTIONS,
} from "../../utils/footprintTracker";

const SiteBuilder = () => {
  const { templateId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [site, setSite] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [showWhatsAppModal, setShowWhatsAppModal] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const [additionalNotes, setAdditionalNotes] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const [emailStatus, setEmailStatus] = useState({
    loading: false,
    error: null,
  });
  const [sectionEdits, setSectionEdits] = useState({});
  const [deletedSections, setDeletedSections] = useState({});
  const [showFootprintPanel, setShowFootprintPanel] = useState(false);
  const [footprintTracker, setFootprintTracker] = useState(null);

  // Detect the current subpath
  useEffect(() => {
    // Extract the subpath from the URL (everything after /builder/templateId/)
    const pathParts = location.pathname.split(`/builder/${templateId}`);
    const subPath = pathParts.length > 1 ? pathParts[1] : "/";
    setCurrentPath(subPath);
  }, [location.pathname, templateId]);

  // Get form data from location state or local storage
  const [formData, setFormData] = useState(() => {
    // First try to get from location state
    if (location.state?.formData) {
      // Save to local storage for persistence
      localStorage.setItem(
        `site_builder_data_${templateId}`,
        JSON.stringify(location.state.formData)
      );
      return location.state.formData;
    }

    // If not in location state, try to get from local storage
    const savedData = localStorage.getItem(`site_builder_data_${templateId}`);
    return savedData ? JSON.parse(savedData) : {};
  });

  // Initialize footprint tracker and load data from local storage
  useEffect(() => {
    if (templateId) {
      const tracker = new FootprintTracker(templateId);
      setFootprintTracker(tracker);

      // Track template selection if this is a new session
      const hasTrackedSelection = sessionStorage.getItem(
        `tracked_selection_${templateId}`
      );
      if (!hasTrackedSelection) {
        tracker.track(FOOTPRINT_ACTIONS.TEMPLATE_SELECT, {
          templateId,
          templateName: site?.name,
        });
        sessionStorage.setItem(`tracked_selection_${templateId}`, "true");
      }
    }

    const savedEdits = localStorage.getItem(`section_edits_${templateId}`);
    if (savedEdits) {
      setSectionEdits(JSON.parse(savedEdits));
    }

    const savedDeleted = localStorage.getItem(`deleted_sections_${templateId}`);
    if (savedDeleted) {
      setDeletedSections(JSON.parse(savedDeleted));
    }
  }, [templateId]);

  useEffect(() => {
    // Get site data
    const siteData = getSiteById(templateId);

    if (siteData) {
      setSite(siteData);
      setLoading(false);

      // Generate shareable link
      updateShareableLink(siteData);
    } else {
      setError("Template not found");
      setLoading(false);
    }
  }, [templateId, formData]);

  // Create optimized shareable link including section edits and footprints
  const updateShareableLink = (siteData) => {
    if (!siteData) return;

    // Get complete footprint data for preview
    let footprintData = null;
    if (
      footprintTracker &&
      footprintTracker.getSummary &&
      footprintTracker.getActions
    ) {
      footprintData = footprintTracker.getSummary();
      // Include detailed actions for better preview
      footprintData.detailedActions = footprintTracker.getActions().slice(-10); // Last 10 actions
    }

    // Only include essential data to make the link shorter
    const essentialData = {
      n: formData.siteName, // shortened key names to reduce URL length
      c: formData.brandColor,
      l: formData.logo || null,
      s: sectionEdits, // Include section edits
      f: footprintData, // Include complete footprint data
    };

    // Convert to base64 with URI encoding to handle special characters
    const baseUrl = window.location.origin;
    const compressedData = btoa(
      encodeURIComponent(JSON.stringify(essentialData))
    );
    setShareableLink(`${baseUrl}/preview/${templateId}/${compressedData}`);
  };

  // Update shareable link when section edits or footprints change
  useEffect(() => {
    if (site) {
      updateShareableLink(site);

      // Save section edits to local storage
      localStorage.setItem(
        `section_edits_${templateId}`,
        JSON.stringify(sectionEdits)
      );
    }
  }, [sectionEdits, site, templateId, formData, footprintTracker]);

  // Force update shareable link when footprint data changes
  useEffect(() => {
    if (site && footprintTracker && footprintTracker.getActions) {
      const timer = setTimeout(() => {
        updateShareableLink(site);
      }, 500); // Debounce to avoid too frequent updates

      return () => clearTimeout(timer);
    }
  }, [site, footprintTracker]);

  // Find the current page component based on the path
  const CurrentPageComponent = () => {
    if (!site) return null;

    // Find the matching page or default to home
    const page =
      site.pages.find((page) => page.path === currentPath) ||
      site.pages.find((page) => page.isHome);

    if (!page || !page.component) return null;

    const PageComponent = page.component;

    return (
      <PageComponent
        customData={formData}
        sectionEdits={sectionEdits}
        onSectionEdit={handleSectionSave}
        onSectionDelete={handleSectionDelete}
        onSectionRestore={handleSectionRestore}
        deletedSections={deletedSections}
        isBuilder={true}
      />
    );
  };

  // Handle back to templates
  const handleBackToTemplates = () => {
    navigate("/sites");
  };

  // Handle request build button click
  const handleRequestBuild = () => {
    // Update shareable link with current data including footprints
    if (site) {
      updateShareableLink(site);
    }
    setShowRequestModal(true);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowRequestModal(false);
    setEmailStatus({ loading: false, error: null });
  };

  // Handle WhatsApp button click
  const handleWhatsAppRequest = () => {
    // Update shareable link with latest footprint data before sharing
    if (site) {
      updateShareableLink(site);
    }

    // Track WhatsApp share
    if (footprintTracker) {
      footprintTracker.track(FOOTPRINT_ACTIONS.WHATSAPP_SHARE, {
        siteName: formData.siteName,
        templateName: site?.name,
        sectionEdits: Object.keys(sectionEdits).length,
        additionalNotes: additionalNotes ? additionalNotes.length : 0,
      });
    }
    setShowWhatsAppModal(true);
  };

  // Handle close WhatsApp modal
  const handleCloseWhatsAppModal = () => {
    setShowWhatsAppModal(false);
  };

  // Handle close thank you modal
  const handleCloseThankYou = () => {
    setShowThankYouModal(false);
    navigate("/sites");
  };

  // Handle section content save
  const handleSectionSave = (sectionId, content) => {
    const newEdits = {
      ...sectionEdits,
      [sectionId]: content,
    };
    setSectionEdits(newEdits);

    // Save to local storage for persistence
    localStorage.setItem(
      `section_edits_${templateId}`,
      JSON.stringify(newEdits)
    );

    // Track the edit action
    if (footprintTracker) {
      const currentPage = site?.pages.find((page) => page.path === currentPath);
      footprintTracker.track(FOOTPRINT_ACTIONS.SECTION_EDIT, {
        sectionId,
        contentKeys: Object.keys(content),
        pagePath: currentPath,
        pageName: currentPage?.name || "Home",
        timestamp: new Date().toISOString(),
      });
    }
  };

  // Handle section delete
  const handleSectionDelete = (sectionId) => {
    const newDeleted = {
      ...deletedSections,
      [sectionId]: true,
    };
    setDeletedSections(newDeleted);

    // Save to local storage for persistence
    localStorage.setItem(
      `deleted_sections_${templateId}`,
      JSON.stringify(newDeleted)
    );

    // Track the delete action
    if (footprintTracker) {
      const currentPage = site?.pages.find((page) => page.path === currentPath);
      footprintTracker.track(FOOTPRINT_ACTIONS.SECTION_DELETE, {
        sectionId,
        pagePath: currentPath,
        pageName: currentPage?.name || "Home",
        timestamp: new Date().toISOString(),
      });
    }
  };

  // Handle section restore
  const handleSectionRestore = (sectionId) => {
    const newDeleted = { ...deletedSections };
    delete newDeleted[sectionId];
    setDeletedSections(newDeleted);

    // Save to local storage for persistence
    localStorage.setItem(
      `deleted_sections_${templateId}`,
      JSON.stringify(newDeleted)
    );

    // Track the restore action
    if (footprintTracker) {
      const currentPage = site?.pages.find((page) => page.path === currentPath);
      footprintTracker.track(FOOTPRINT_ACTIONS.SECTION_RESTORE, {
        sectionId,
        pagePath: currentPath,
        pageName: currentPage?.name || "Home",
        timestamp: new Date().toISOString(),
      });
    }
  };

  // Handle clearing all footprints and resetting all changes
  const handleClearAll = () => {
    // Reset all section edits
    setSectionEdits({});

    // Reset all deleted sections
    setDeletedSections({});

    // Reset form data to defaults (keeping only templateId-specific data)
    setFormData({
      siteName: site?.name || "",
      name: "",
      email: "",
      brandColor: "#6366f1",
      logo: null,
    });

    // Clear local storage
    localStorage.removeItem(`section_edits_${templateId}`);
    localStorage.removeItem(`deleted_sections_${templateId}`);
    localStorage.removeItem(`form_data_${templateId}`);

    // Track the reset action
    if (footprintTracker) {
      footprintTracker.track(FOOTPRINT_ACTIONS.TEMPLATE_SELECT, {
        action: "reset_all_changes",
        templateId,
        timestamp: new Date().toISOString(),
      });
    }
  };

  // Handle form submit
  const handleSubmitRequest = (e) => {
    e.preventDefault();
    setEmailStatus({ loading: true, error: null });

    // Track build request
    if (footprintTracker) {
      footprintTracker.track(FOOTPRINT_ACTIONS.BUILD_REQUEST, {
        siteName: formData.siteName,
        templateName: site?.name,
        sectionEdits: Object.keys(sectionEdits).length,
        additionalNotes: additionalNotes ? additionalNotes.length : 0,
        hasWhatsAppShare: false,
      });
    }

    // Prepare EmailJS data
    const templateParams = {
      user_name: formData.name,
      user_email: formData.email,
      user_phone: formData.phone || "Not provided",
      site_name: formData.siteName,
      site_template: site?.name,
      brand_color: formData.brandColor,
      additional_notes: additionalNotes,
      shareable_link: shareableLink,
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_3130q7m",
        "template_eet5tpj",
        templateParams,
        "lUvhrAQToVZLt5Pfq"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmailStatus({ loading: false, error: null });
          setShowRequestModal(false);
          setShowThankYouModal(true);
        },
        (error) => {
          console.log("FAILED...", error);
          setEmailStatus({
            loading: false,
            error: "Failed to send your request. Please try again.",
          });
        }
      );
  };

  // Copy shareable link to clipboard
  const copyShareableLink = () => {
    // Track link copy
    if (footprintTracker) {
      footprintTracker.track(FOOTPRINT_ACTIONS.LINK_COPY, {
        shareableLink: shareableLink,
        siteName: formData.siteName,
      });
    }

    navigator.clipboard.writeText(shareableLink).then(
      () => {
        // Show temporary success message
        const linkCopyBtn = document.getElementById("copy-link-btn");
        if (linkCopyBtn) {
          const originalText = linkCopyBtn.textContent;
          linkCopyBtn.textContent = "Copied!";
          linkCopyBtn.classList.add("bg-green-600");
          setTimeout(() => {
            linkCopyBtn.textContent = originalText;
            linkCopyBtn.classList.remove("bg-green-600");
          }, 2000);
        }
      },
      (err) => console.error("Could not copy text: ", err)
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your site...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-md p-6 bg-white rounded-lg shadow-md">
          <div className="text-red-500 text-5xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Error</h1>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={handleBackToTemplates}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Back to Templates
          </button>
        </div>
      </div>
    );
  }

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  // Process the HomePage component to add section editors
  const EnhancedHomePage = () => {
    if (!site) return null;

    // If there's a specific subpath, render that page instead
    if (currentPath !== "/") {
      return <CurrentPageComponent />;
    }

    // For the home page
    const HomePage = site.pages.find((page) => page.isHome)?.component;
    if (!HomePage) return null;

    // Create a wrapper for the HomePage that provides section editing
    return (
      <div className="editable-site-content">
        <HomePage
          customData={formData}
          sectionEdits={sectionEdits}
          onSectionEdit={handleSectionSave}
          onSectionDelete={handleSectionDelete}
          onSectionRestore={handleSectionRestore}
          deletedSections={deletedSections}
        />
      </div>
    );
  };

  return (
    <div className="site-builder">
      {/* Builder Toolbar */}
      <div className="fixed top-0 left-0 right-0 bg-white shadow-md z-40 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <button
            onClick={handleBackToTemplates}
            className="mr-4 text-gray-600 hover:text-gray-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
          <div>
            <h1 className="font-bold">{formData.siteName || site?.name}</h1>
            <p className="text-xs text-gray-500">
              {(() => {
                const currentPage = site?.pages.find(
                  (page) => page.path === currentPath
                );
                const pageName = currentPage?.name || "Home";
                return `${pageName} - Built with ${site?.name} template`;
              })()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowFootprintPanel(true)}
            className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 flex items-center gap-1"
            title="View Activity Footprints"
          >
            <span>👣</span>
            <span className="hidden sm:inline">Footprints</span>
          </button>
          <div className="text-sm text-gray-600">
            <span className="font-medium">Edit Mode</span>
          </div>
          <button
            className="px-4 py-1.5 bg-primary text-white text-sm rounded-md hover:bg-primary-dark"
            onClick={handleRequestBuild}
          >
            Request Build
          </button>
        </div>
      </div>

      {/* Site Content with custom styling based on formData */}
      <div className="pt-14">
        {/* Apply custom styling based on formData */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
					:root {
						--primary-color: ${formData.brandColor || "#3B82F6"};
					}
					.bg-primary {
						background-color: var(--primary-color) !important;
					}
					.text-primary {
						color: var(--primary-color) !important;
					}
					.border-primary {
						border-color: var(--primary-color) !important;
					}
					.hover\\:bg-primary:hover {
						background-color: var(--primary-color) !important;
					}
					.hover\\:text-primary:hover {
						color: var(--primary-color) !important;
					}
					.hover\\:border-primary:hover {
						border-color: var(--primary-color) !important;
					}
				`,
          }}
        />

        {/* Render the enhanced home page component */}
        <EnhancedHomePage />
      </div>

      {/* Request Build Button (fixed to bottom right) */}
      <div className="fixed bottom-6 right-6 z-30">
        <motion.button
          onClick={handleRequestBuild}
          className="bg-primary text-white px-4 py-3 rounded-full font-medium flex items-center gap-2 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd"
            />
          </svg>
          Request Build
        </motion.button>
      </div>

      {/* Request Build Modal */}
      <AnimatePresence>
        {showRequestModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header Row */}
              <div className="border-b border-gray-200 p-4 flex justify-between items-center flex-shrink-0">
                <h2 className="text-xl font-bold text-gray-800">
                  Request Website Build
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
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
                </button>
              </div>

              {/* Scrollable Content Row */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-6">
                  {/* Build Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                    <h4 className="font-medium mb-3 flex items-center">
                      <svg
                        className="h-5 w-5 mr-2 text-gray-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      Build Request Summary
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="mb-2">
                          <span className="text-gray-600 font-medium">
                            Template:
                          </span>
                          <br />
                          <span className="text-gray-900">{site?.name}</span>
                        </p>
                        <p className="mb-2">
                          <span className="text-gray-600 font-medium">
                            Site Name:
                          </span>
                          <br />
                          <span className="text-gray-900">
                            {formData.siteName}
                          </span>
                        </p>
                        <p className="mb-2">
                          <span className="text-gray-600 font-medium">
                            Contact:
                          </span>
                          <br />
                          <span className="text-gray-900">{formData.name}</span>
                          <br />
                          <span className="text-gray-600 text-xs">
                            {formData.email}
                          </span>
                        </p>
                      </div>
                      <div>
                        <div className="mb-2">
                          <span className="text-gray-600 font-medium">
                            Brand Color:
                          </span>
                          <br />
                          <div className="flex items-center gap-2 mt-1">
                            <div
                              className="w-6 h-6 rounded-full border border-gray-300"
                              style={{ backgroundColor: formData.brandColor }}
                            ></div>
                            <span className="text-gray-900 font-mono">
                              {formData.brandColor}
                            </span>
                          </div>
                        </div>
                        <p className="mb-2">
                          <span className="text-gray-600 font-medium">
                            Section Edits:
                          </span>
                          <br />
                          <span className="text-gray-900">
                            {Object.keys(sectionEdits).length} sections modified
                          </span>
                        </p>
                        {footprintTracker && (
                          <p className="mb-2">
                            <span className="text-gray-600 font-medium">
                              Total Actions:
                            </span>
                            <br />
                            <span className="text-gray-900">
                              {footprintTracker.getSummary().totalActions} user
                              actions
                            </span>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Activity Footprints Summary */}
                  {footprintTracker && (
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-6">
                      <h4 className="font-medium mb-3 flex items-center text-blue-800">
                        <span className="mr-2">👣</span>
                        Activity Summary
                      </h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                        <div className="text-center">
                          <div className="text-lg font-bold text-blue-600">
                            {footprintTracker.getSummary().actions
                              .section_edit || 0}
                          </div>
                          <div className="text-blue-700 text-xs">Edits</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-red-600">
                            {footprintTracker.getSummary().actions
                              .section_delete || 0}
                          </div>
                          <div className="text-red-700 text-xs">Deletes</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-green-600">
                            {footprintTracker.getSummary().actions
                              .section_restore || 0}
                          </div>
                          <div className="text-green-700 text-xs">Restores</div>
                        </div>
                        <div className="text-center">
                          <div className="text-lg font-bold text-orange-600">
                            {
                              Object.keys(
                                footprintTracker.getSummary().sections
                              ).length
                            }
                          </div>
                          <div className="text-orange-700 text-xs">
                            Sections
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200 mb-4">
                    <h4 className="font-medium mb-2 flex items-center text-blue-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-1"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Share Your Design
                    </h4>
                    <p className="text-sm text-blue-600 mb-3">
                      You can share this link with others to show them your
                      design before submitting:
                    </p>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={shareableLink}
                        readOnly
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white text-sm"
                      />
                      <button
                        id="copy-link-btn"
                        type="button"
                        onClick={copyShareableLink}
                        className="px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                        title="Copy to clipboard"
                      >
                        Copy Link
                      </button>
                    </div>
                  </div>

                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Notes (optional)
                  </label>
                  <textarea
                    name="additionalNotes"
                    value={additionalNotes}
                    onChange={(e) => setAdditionalNotes(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px]"
                    placeholder="Any specific requirements or details about your website build..."
                  />
                </div>

                {emailStatus.error && (
                  <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                    {emailStatus.error}
                  </div>
                )}
              </div>

              {/* Footer Row */}
              <div className="border-t border-gray-200 p-4 flex-shrink-0">
                <form onSubmit={handleSubmitRequest}>
                  <div className="flex flex-col sm:flex-row justify-between gap-3">
                    <button
                      type="button"
                      onClick={handleWhatsAppRequest}
                      className="px-4 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 flex items-center gap-2 justify-center"
                      disabled={emailStatus.loading}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                      </svg>
                      Send via WhatsApp
                    </button>

                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={handleCloseModal}
                        className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
                        disabled={emailStatus.loading}
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark flex items-center gap-2"
                        disabled={emailStatus.loading}
                      >
                        {emailStatus.loading ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                            Send via Email
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}

        {/* Thank You Modal */}
        {showThankYouModal && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseThankYou}
          >
            <motion.div
              className="bg-white rounded-xl shadow-xl w-full max-w-lg text-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-green-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h2>
                <p className="text-gray-600 mb-6">
                  Your build request has been sent successfully. We'll be in
                  touch soon regarding your new website.
                </p>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <h4 className="font-medium mb-2 text-left">
                    Share Your Design
                  </h4>
                  <p className="text-sm text-gray-600 mb-3 text-left">
                    Share this link with others to show them your website
                    design:
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={shareableLink}
                      readOnly
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none bg-white"
                    />
                    <button
                      id="copy-link-btn"
                      onClick={copyShareableLink}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
                      title="Copy to clipboard"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
                        <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleCloseThankYou}
                  className="px-6 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* WhatsApp Message Modal */}
      <WhatsAppMessageModal
        isOpen={showWhatsAppModal}
        onClose={handleCloseWhatsAppModal}
        requestData={{
          templateName: site?.name,
          siteName: formData.siteName,
          contactName: formData.name,
          contactEmail: formData.email,
          brandColor: formData.brandColor,
          sectionEdits: Object.keys(sectionEdits).length,
          additionalNotes: additionalNotes,
          shareableLink: shareableLink,
          userActions:
            footprintTracker && footprintTracker.getSummary
              ? (() => {
                  const summary = footprintTracker.getSummary();
                  return {
                    totalActions: summary.totalActions || 0,
                    edits: summary.actions?.section_edit || 0,
                    deletes: summary.actions?.section_delete || 0,
                    restores: summary.actions?.section_restore || 0,
                    sectionsModified: Object.keys(summary.sections || {})
                      .length,
                  };
                })()
              : null,
        }}
      />

      {/* Deleted Sections Panel */}
      <DeletedSectionsPanel
        deletedSections={deletedSections}
        onRestore={handleSectionRestore}
        sectionNames={{
          hero: "Hero Section",
          features: "Features Section",
          gallery: "Gallery Section",
          testimonial: "Testimonial Section",
          aboutTeam: "About Team Section",
          teamGrid: "Team Grid Section",
          about: "About Section",
          services: "Services Section",
          contact: "Contact Section",
        }}
      />

      {/* Footprint Panel */}
      <FootprintPanel
        tracker={footprintTracker}
        isOpen={showFootprintPanel}
        onClose={() => setShowFootprintPanel(false)}
        onClearAll={handleClearAll}
      />
    </div>
  );
};

export default SiteBuilder;
