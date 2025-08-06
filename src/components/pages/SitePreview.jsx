import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { getSiteById } from "../microsites/index";

const SitePreview = () => {
	const { templateId, encodedData } = useParams();
	const navigate = useNavigate();
	const location = useLocation();
	const [site, setSite] = useState(null);
	const [formData, setFormData] = useState({});
	const [sectionEdits, setSectionEdits] = useState({});
	const [footprintData, setFootprintData] = useState(null);
	const [showFootprintInfo, setShowFootprintInfo] = useState(false);
	const [currentPath, setCurrentPath] = useState("/");
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		// Get site data
		const siteData = getSiteById(templateId);

		if (!siteData) {
			setError("Template not found");
			setLoading(false);
			return;
		}

		// Try to decode the form data from URL
		try {
			// Decode the URL-safe base64 string and parse the JSON
			const decodedJson = decodeURIComponent(atob(encodedData));
			const compressedData = JSON.parse(decodedJson);

			// Map shortened property names back to full names
			const expandedData = {
				siteName: compressedData.n || "Untitled Site",
				brandColor: compressedData.c || "#3B82F6",
				logo: compressedData.l || "",
			};

			// Extract section edits if available
			if (compressedData.s) {
				setSectionEdits(compressedData.s);
			}

			// Extract footprint data if available
			if (compressedData.f) {
				setFootprintData(compressedData.f);

				// Track preview opening if footprint data exists
				console.log("Preview opened with footprint data:", compressedData.f);
			}

			setFormData(expandedData);
			setSite(siteData);
			setLoading(false);
		} catch (err) {
			console.error("Failed to decode site data:", err);
			setError("Invalid site data");
			setLoading(false);
		}
	}, [templateId, encodedData]);

	// Detect current path for navigation within preview
	useEffect(() => {
		// Extract the subpath from the URL (everything after /preview/templateId/encodedData)
		const expectedBase = `/preview/${templateId}/${encodedData}`;
		const pathParts = location.pathname.split(expectedBase);
		const subPath = pathParts.length > 1 ? pathParts[1] : "/";
		setCurrentPath(subPath);
	}, [location.pathname, templateId, encodedData]);

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
				renderSection={renderSectionForPreview}
				// Note: No editing functions since this is preview only
			/>
		);
	};

	// Handle back to templates
	const handleBackToTemplates = () => {
		navigate("/sites");
	};

	// Create your own version of this site
	const handleCreateYourOwn = () => {
		navigate(`/sites/${templateId}`, {
			state: { startBuilding: true },
		});
	};

	// Create a simple preview version of the section renderer
	// This just outputs the edited content without the edit button
	const renderSectionForPreview = (
		sectionId,
		sectionName,
		defaultContent,
		children
	) => {
		// Just return the children with the correct props using edited content if available
		return React.cloneElement(children, {
			...React.Children.only(children).props,
			...(sectionEdits[sectionId] || {}),
		});
	};

	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center bg-gray-50">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
					<p className="mt-4 text-gray-600">Loading site preview...</p>
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

	return (
		<div className="site-preview">
			{/* Simple Preview Banner */}
			<div className="fixed top-0 left-0 right-0 bg-blue-600 text-white z-40 px-4 py-2 flex items-center justify-between">
				<div className="flex items-center text-sm">
					<span className="hidden sm:inline mr-2">📱</span>
					<span>Shared preview of {formData.siteName || site?.name}</span>
				</div>

				<div className="flex items-center gap-3">
					{footprintData && (
						<button
							onClick={() => setShowFootprintInfo(!showFootprintInfo)}
							className="px-3 py-1.5 bg-white text-blue-600 text-sm rounded-md hover:bg-gray-100 flex items-center gap-1"
							title="View Activity"
						>
							<span>👣</span>
							<span className="hidden sm:inline">Activity</span>
						</button>
					)}
					<button
						className="px-3 py-1.5 bg-white text-blue-600 text-sm rounded-md hover:bg-gray-100"
						onClick={handleCreateYourOwn}
					>
						Create Your Own
					</button>
				</div>
			</div>

			{/* Footprint Information Panel */}
			{showFootprintInfo && footprintData && (
				<div className="fixed top-12 left-0 right-0 bg-blue-50 border-b border-blue-200 z-30 p-4 max-h-96 overflow-y-auto">
					<div className="max-w-6xl mx-auto">
						<div className="flex justify-between items-start mb-4">
							<div>
								<h3 className="font-medium text-blue-800 mb-2 flex items-center">
									<span className="mr-2">👣</span>
									User Activity Summary
								</h3>
								<div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
									<div className="text-center">
										<div className="text-lg font-bold text-blue-600">
											{footprintData.totalActions || 0}
										</div>
										<div className="text-blue-700 text-xs">Total Actions</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-bold text-orange-600">
											{footprintData.actions?.section_edit || 0}
										</div>
										<div className="text-orange-700 text-xs">Content Edits</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-bold text-red-600">
											{footprintData.actions?.section_delete || 0}
										</div>
										<div className="text-red-700 text-xs">Items Deleted</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-bold text-green-600">
											{footprintData.actions?.section_restore || 0}
										</div>
										<div className="text-green-700 text-xs">Items Restored</div>
									</div>
									<div className="text-center">
										<div className="text-lg font-bold text-purple-600">
											{Object.keys(footprintData.sections || {}).length}
										</div>
										<div className="text-purple-700 text-xs">
											Sections Modified
										</div>
									</div>
								</div>
								{footprintData.firstAction && (
									<div className="mt-2 text-xs text-blue-600">
										Session started:{" "}
										{new Date(footprintData.firstAction).toLocaleString()}
									</div>
								)}
							</div>
							<button
								onClick={() => setShowFootprintInfo(false)}
								className="text-blue-500 hover:text-blue-700"
							>
								<svg
									className="h-5 w-5"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
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

						{/* Recent Actions */}
						{footprintData.detailedActions &&
							footprintData.detailedActions.length > 0 && (
								<div className="mt-4 pt-4 border-t border-blue-200">
									<h4 className="font-medium text-blue-800 mb-2">
										Recent Changes:
									</h4>
									<div className="space-y-2 max-h-40 overflow-y-auto">
										{footprintData.detailedActions.map((action, index) => (
											<div
												key={index}
												className="flex items-center text-sm bg-white rounded px-3 py-2"
											>
												<span className="mr-2">
													{action.type === "section_edit" && "✏️"}
													{action.type === "section_delete" && "🗑️"}
													{action.type === "section_restore" && "↩️"}
													{action.type === "form_update" && "📝"}
													{action.type === "color_change" && "🎨"}
													{action.type === "template_selection" && "🏗️"}
													{action.type === "build_request" && "🚀"}
													{action.type === "whatsapp_share" && "📱"}
													{action.type === "link_copy" && "🔗"}
													{action.type === "preview_open" && "👀"}
												</span>
												<div className="flex-1">
													<div className="font-medium text-gray-800">
														{action.type === "section_edit" && "Content Edit"}
														{action.type === "section_delete" &&
															"Section Deleted"}
														{action.type === "section_restore" &&
															"Section Restored"}
														{action.type === "form_update" && "Form Updated"}
														{action.type === "color_change" && "Color Changed"}
														{action.type === "template_selection" &&
															"Template Selected"}
														{action.type === "build_request" &&
															"Build Requested"}
														{action.type === "whatsapp_share" &&
															"Shared on WhatsApp"}
														{action.type === "link_copy" && "Link Copied"}
														{action.type === "preview_open" && "Preview Opened"}
													</div>
													{(action.data?.sectionId ||
														action.data?.pageName) && (
														<div className="text-xs text-gray-500">
															{action.data?.sectionId && (
																<span>Section: {action.data.sectionId}</span>
															)}
															{action.data?.sectionId &&
																action.data?.pageName &&
																" • "}
															{action.data?.pageName && (
																<span>Page: {action.data.pageName}</span>
															)}
														</div>
													)}
												</div>
												<div className="text-xs text-gray-500">
													{new Date(action.timestamp).toLocaleTimeString()}
												</div>
											</div>
										))}
									</div>
								</div>
							)}

						{/* Section Modifications */}
						{footprintData.sections &&
							Object.keys(footprintData.sections).length > 0 && (
								<div className="mt-4 pt-4 border-t border-blue-200">
									<h4 className="font-medium text-blue-800 mb-2">
										Modified Sections:
									</h4>
									<div className="flex flex-wrap gap-2">
										{Object.entries(footprintData.sections).map(
											([sectionId, count]) => (
												<span
													key={sectionId}
													className="px-2 py-1 bg-white text-xs rounded border"
												>
													{sectionId} ({count} edits)
												</span>
											)
										)}
									</div>
								</div>
							)}
					</div>
				</div>
			)}

			{/* Site Content with custom styling based on formData */}
			<div
				className={`pt-12 ${
					showFootprintInfo && footprintData ? "pt-32" : "pt-12"
				}`}
			>
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

				{/* Render the current page component of the selected site */}
				<CurrentPageComponent />
			</div>

			{/* Preview Footer Banner */}
			<div className="fixed bottom-0 left-0 right-0 bg-primary bg-opacity-95 text-white py-3 px-4 flex justify-between items-center">
				<div>
					<p className="text-sm font-medium">
						{(() => {
							const currentPage = site?.pages.find(
								(page) => page.path === currentPath
							);
							const pageName = currentPage?.name || "Home";
							return `Viewing ${pageName} page - Preview of ${
								formData.siteName || "a website"
							} built with our template.`;
						})()}
					</p>
				</div>
				<button
					onClick={handleCreateYourOwn}
					className="bg-white text-primary px-4 py-1.5 rounded font-medium text-sm hover:bg-opacity-90"
				>
					Create Your Own
				</button>
			</div>
		</div>
	);
};

export default SitePreview;
