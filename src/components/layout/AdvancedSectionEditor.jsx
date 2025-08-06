import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { validateImageUrl, validateVideoUrl } from "../../utils/validators";

const AdvancedSectionEditor = ({
	sectionId,
	sectionName,
	initialContent,
	onSave,
	onDelete,
	onRestore,
	children,
	isDeleted = false,
	repeatableFields = [], // Fields that can have multiple items (e.g., ['testimonials', 'features'])
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(initialContent || {});
	const [urlValidation, setUrlValidation] = useState({});
	const [expandedRepeatable, setExpandedRepeatable] = useState({});
	const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

	// Update content when initialContent changes
	useEffect(() => {
		if (initialContent) {
			setContent(initialContent);
		}
	}, [initialContent]);

	// Handle open editor
	const handleOpenEditor = (e) => {
		e.stopPropagation();
		setIsEditing(true);
		document.body.style.overflow = "hidden";
	};

	// Handle close editor
	const handleCloseEditor = () => {
		setIsEditing(false);
		document.body.style.overflow = "auto";
		setShowDeleteConfirm(false);
	};

	// Handle save changes
	const handleSaveChanges = () => {
		onSave(sectionId, content);
		handleCloseEditor();
	};

	// Handle input change with validation
	const handleInputChange = async (
		key,
		value,
		index = null,
		parentKey = null
	) => {
		let newContent;

		if (index !== null && parentKey) {
			// Handle nested object properties in array items
			newContent = {
				...content,
				[parentKey]: content[parentKey].map((item, i) =>
					i === index ? { ...item, [key]: value } : item
				),
			};
		} else {
			newContent = {
				...content,
				[key]: value,
			};
		}

		setContent(newContent);

		// Validate URLs
		if (
			key.toLowerCase().includes("image") ||
			key.toLowerCase().includes("img")
		) {
			const isValid = await validateImageUrl(value);
			const fieldId = parentKey
				? `${parentKey}_${key}_${index}`
				: `${key}${index !== null ? `_${index}` : ""}`;
			setUrlValidation((prev) => ({
				...prev,
				[fieldId]: {
					isValid,
					message: isValid
						? "Valid image URL"
						: "Invalid image URL or not accessible",
				},
			}));
		} else if (key.toLowerCase().includes("video")) {
			const isValid = await validateVideoUrl(value);
			const fieldId = parentKey
				? `${parentKey}_${key}_${index}`
				: `${key}${index !== null ? `_${index}` : ""}`;
			setUrlValidation((prev) => ({
				...prev,
				[fieldId]: {
					isValid,
					message: isValid
						? "Valid video URL"
						: "Invalid video URL or not accessible",
				},
			}));
		}
	};

	// Handle adding new item to repeatable field
	const handleAddRepeatableItem = (fieldKey) => {
		const currentArray = content[fieldKey] || [];
		const newItem = getDefaultRepeatableItem(fieldKey);

		setContent((prev) => ({
			...prev,
			[fieldKey]: [...currentArray, newItem],
		}));
	};

	// Handle removing item from repeatable field
	const handleRemoveRepeatableItem = (fieldKey, index) => {
		setContent((prev) => ({
			...prev,
			[fieldKey]: prev[fieldKey].filter((_, i) => i !== index),
		}));
	};

	// Get default item structure for repeatable fields
	const getDefaultRepeatableItem = (fieldKey) => {
		const templates = {
			testimonials: {
				name: "New Testimonial",
				text: "Add testimonial text here...",
				image: "",
				position: "Customer",
			},
			features: {
				title: "New Feature",
				description: "Feature description...",
				icon: "",
				image: "",
			},
			team: {
				name: "Team Member",
				position: "Position",
				image: "",
				bio: "Bio description...",
			},
			gallery: {
				image: "",
				caption: "Image caption",
				alt: "Alt text",
			},
		};

		return templates[fieldKey] || { title: "New Item", content: "Content..." };
	};

	// Toggle repeatable field expansion
	const toggleRepeatableExpansion = (fieldKey) => {
		setExpandedRepeatable((prev) => ({
			...prev,
			[fieldKey]: !prev[fieldKey],
		}));
	};

	// Handle delete section
	const handleDeleteSection = () => {
		setShowDeleteConfirm(true);
	};

	// Confirm delete
	const confirmDelete = () => {
		onDelete(sectionId);
		handleCloseEditor();
	};

	// Handle restore section
	const handleRestoreSection = () => {
		onRestore(sectionId);
	};

	// Render input field for repeatable items
	const renderInputFieldForRepeatable = (key, value, index, parentKey) => {
		const fieldId = `${parentKey}_${key}_${index}`;
		const validation = urlValidation[fieldId];

		// Image URL field
		if (
			key.toLowerCase().includes("image") ||
			key.toLowerCase().includes("img")
		) {
			return (
				<div className="space-y-2">
					<input
						type="url"
						value={value}
						onChange={(e) =>
							handleInputChange(key, e.target.value, index, parentKey)
						}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
							validation
								? validation.isValid
									? "border-green-500"
									: "border-red-500"
								: "border-gray-300"
						}`}
						placeholder="https://example.com/image.jpg"
					/>
					{validation && (
						<p
							className={`text-xs ${
								validation.isValid ? "text-green-600" : "text-red-600"
							}`}
						>
							{validation.message}
						</p>
					)}
					{value && validation?.isValid && (
						<div className="mt-2">
							<img
								src={value}
								alt="Preview"
								className="w-full h-24 object-cover rounded-md border"
								onError={() =>
									setUrlValidation((prev) => ({
										...prev,
										[fieldId]: {
											isValid: false,
											message: "Failed to load image",
										},
									}))
								}
							/>
						</div>
					)}
				</div>
			);
		}

		// Long text field
		if (typeof value === "string" && value.length > 50) {
			return (
				<textarea
					value={value}
					onChange={(e) =>
						handleInputChange(key, e.target.value, index, parentKey)
					}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[60px]"
				/>
			);
		}

		// Regular text field
		return (
			<input
				type="text"
				value={value}
				onChange={(e) =>
					handleInputChange(key, e.target.value, index, parentKey)
				}
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
			/>
		);
	};

	// Render input field based on type
	const renderInputField = (key, value, index = null) => {
		const fieldId = `${key}${index !== null ? `_${index}` : ""}`;
		const validation = urlValidation[fieldId];

		// Image URL field
		if (
			key.toLowerCase().includes("image") ||
			key.toLowerCase().includes("img")
		) {
			return (
				<div className="space-y-2">
					<input
						type="url"
						value={value}
						onChange={(e) => handleInputChange(key, e.target.value, index)}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
							validation
								? validation.isValid
									? "border-green-500"
									: "border-red-500"
								: "border-gray-300"
						}`}
						placeholder="https://example.com/image.jpg"
					/>
					{validation && (
						<p
							className={`text-xs ${
								validation.isValid ? "text-green-600" : "text-red-600"
							}`}
						>
							{validation.message}
						</p>
					)}
					{value && validation?.isValid && (
						<div className="mt-2">
							<img
								src={value}
								alt="Preview"
								className="w-full h-32 object-cover rounded-md border"
								onError={() =>
									setUrlValidation((prev) => ({
										...prev,
										[fieldId]: {
											isValid: false,
											message: "Failed to load image",
										},
									}))
								}
							/>
						</div>
					)}
				</div>
			);
		}

		// Video URL field
		if (key.toLowerCase().includes("video")) {
			return (
				<div className="space-y-2">
					<input
						type="url"
						value={value}
						onChange={(e) => handleInputChange(key, e.target.value, index)}
						className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
							validation
								? validation.isValid
									? "border-green-500"
									: "border-red-500"
								: "border-gray-300"
						}`}
						placeholder="https://example.com/video.mp4"
					/>
					{validation && (
						<p
							className={`text-xs ${
								validation.isValid ? "text-green-600" : "text-red-600"
							}`}
						>
							{validation.message}
						</p>
					)}
				</div>
			);
		}

		// Long text field
		if (typeof value === "string" && value.length > 100) {
			return (
				<textarea
					value={value}
					onChange={(e) => handleInputChange(key, e.target.value, index)}
					className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px]"
				/>
			);
		}

		// Regular text field
		return (
			<input
				type="text"
				value={value}
				onChange={(e) => handleInputChange(key, e.target.value, index)}
				className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
			/>
		);
	};

	// Render repeatable field section
	const renderRepeatableField = (key, array) => {
		const isExpanded = expandedRepeatable[key];

		return (
			<div className="border border-gray-200 rounded-lg overflow-hidden">
				<button
					type="button"
					onClick={() => toggleRepeatableExpansion(key)}
					className="w-full p-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
				>
					<span className="font-medium capitalize">
						{key.replace(/([A-Z])/g, " $1")} ({array.length} items)
					</span>
					<svg
						className={`w-5 h-5 transition-transform ${
							isExpanded ? "rotate-180" : ""
						}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				<AnimatePresence>
					{isExpanded && (
						<div className="border-t border-gray-200">
							<div className="p-3 space-y-4">
								{array.map((item, index) => (
									<div
										key={index}
										className="border border-gray-100 rounded-lg p-3 relative"
									>
										<div className="flex items-center justify-between mb-3">
											<h4 className="font-medium text-sm text-gray-700">
												Item {index + 1}
											</h4>
											<button
												type="button"
												onClick={() => handleRemoveRepeatableItem(key, index)}
												className="text-red-500 hover:text-red-700 p-1"
												title="Remove item"
											>
												<svg
													className="w-4 h-4"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
													/>
												</svg>
											</button>
										</div>

										<div className="space-y-3">
											{Object.entries(item).map(([itemKey, itemValue]) => (
												<div key={itemKey}>
													<label className="block text-xs font-medium text-gray-600 mb-1 capitalize">
														{itemKey.replace(/([A-Z])/g, " $1")}
													</label>
													{renderInputFieldForRepeatable(
														itemKey,
														itemValue,
														index,
														key
													)}
												</div>
											))}
										</div>
									</div>
								))}

								<button
									type="button"
									onClick={() => handleAddRepeatableItem(key)}
									className="w-full p-3 border-2 border-dashed border-gray-300 rounded-lg text-gray-600 hover:border-primary hover:text-primary transition-colors flex items-center justify-center gap-2"
								>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 6v6m0 0v6m0-6h6m-6 0H6"
										/>
									</svg>
									Add New {key.slice(0, -1).replace(/([A-Z])/g, " $1")}
								</button>
							</div>
						</div>
					)}
				</AnimatePresence>
			</div>
		);
	};

	// Check if we're in preview mode (no editing functions provided)
	const isPreviewMode = !onSave || !onDelete || !onRestore;

	// If in preview mode and section is deleted, don't render anything
	if (isPreviewMode && isDeleted) {
		return null;
	}

	// If section is deleted, show restore option (only in edit mode)
	if (isDeleted) {
		return (
			<div className="relative border-2 border-dashed border-red-300 rounded-lg bg-red-50 p-8 text-center">
				<div className="text-red-600 mb-4">
					<svg
						className="w-12 h-12 mx-auto mb-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
					<p className="text-lg font-medium">Section Deleted</p>
					<p className="text-sm">{sectionName} has been removed</p>
				</div>
				<button
					onClick={handleRestoreSection}
					className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
				>
					Restore Section
				</button>
			</div>
		);
	}

	// If in preview mode, just render the children without editing controls
	if (isPreviewMode) {
		return <>{children}</>;
	}

	return (
		<div className="relative group border-2 border-transparent hover:border-primary/20 rounded-lg transition-all duration-300">
			{/* Action Icons - Always visible */}
			<div className="absolute top-4 right-4 z-10 flex gap-2">
				{/* Delete Button */}
				<button
					onClick={handleDeleteSection}
					className="bg-red-500 text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-red-600 transition-colors"
					title="Delete section"
				>
					<svg
						className="h-4 w-4"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
						/>
					</svg>
				</button>

				{/* Edit Button */}
				<button
					onClick={handleOpenEditor}
					className="bg-primary text-white p-2 rounded-full shadow-lg cursor-pointer hover:bg-primary-dark transition-colors overflow-hidden"
				>
					<div className="relative">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-4 w-4"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
						</svg>
						<div className="absolute inset-0 animate-blink-fast bg-white opacity-30 rounded-full"></div>
					</div>
				</button>
			</div>

			{/* Section content */}
			{children}

			{/* Off-canvas Editor Sidebar */}
			<AnimatePresence>
				{isEditing && (
					<>
						<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 editor-backdrop"></div>
						<div className="fixed right-0 top-0 bottom-0 w-full sm:w-[500px] bg-white shadow-2xl z-50 flex flex-col">
							<div className="border-b border-gray-200 p-4 flex justify-between items-center">
								<h2 className="text-lg font-semibold">Edit {sectionName}</h2>
								<div className="flex items-center gap-2">
									<button
										onClick={handleDeleteSection}
										className="text-red-500 hover:text-red-700 p-1"
										title="Delete section"
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
												d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
											/>
										</svg>
									</button>
									<button
										onClick={handleCloseEditor}
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
							</div>

							<div className="flex-1 overflow-y-auto p-4 space-y-6">
								{Object.entries(content).map(([key, value]) => (
									<div key={key} className="space-y-2">
										{/* Check if this is a repeatable field */}
										{repeatableFields.includes(key) && Array.isArray(value) ? (
											<div>
												<label className="block text-sm font-medium text-gray-700 capitalize mb-2">
													{key
														.replace(/([A-Z])/g, " $1")
														.replace(/^./, (str) => str.toUpperCase())}
												</label>
												{renderRepeatableField(key, value)}
											</div>
										) : (
											<div>
												<label className="block text-sm font-medium text-gray-700 capitalize">
													{key
														.replace(/([A-Z])/g, " $1")
														.replace(/^./, (str) => str.toUpperCase())}
												</label>
												{renderInputField(key, value)}
											</div>
										)}
									</div>
								))}
							</div>

							<div className="border-t border-gray-200 p-4 flex justify-end gap-3">
								<button
									onClick={handleCloseEditor}
									className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
								>
									Cancel
								</button>
								<button
									onClick={handleSaveChanges}
									className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-primary-dark"
								>
									Save Changes
								</button>
							</div>
						</div>
					</>
				)}
			</AnimatePresence>

			{/* Delete Confirmation Modal */}
			<AnimatePresence>
				{showDeleteConfirm && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
						<div className="bg-white rounded-xl shadow-xl w-full max-w-md p-6">
							<div className="text-center">
								<div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
									<svg
										className="w-6 h-6 text-red-600"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
										/>
									</svg>
								</div>
								<h3 className="text-lg font-medium text-gray-900 mb-2">
									Delete Section
								</h3>
								<p className="text-gray-600 mb-6">
									Are you sure you want to delete "{sectionName}"? You can
									restore it later if needed.
								</p>
								<div className="flex justify-center gap-3">
									<button
										onClick={() => setShowDeleteConfirm(false)}
										className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
									>
										Cancel
									</button>
									<button
										onClick={confirmDelete}
										className="px-4 py-2 bg-red-500 text-white rounded-md font-medium hover:bg-red-600"
									>
										Delete
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default AdvancedSectionEditor;
