import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SectionEditor = ({
	sectionId,
	sectionName,
	initialContent,
	onSave,
	children,
}) => {
	const [isEditing, setIsEditing] = useState(false);
	const [content, setContent] = useState(initialContent || {});
	const [showIcon, setShowIcon] = useState(false);

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
	};

	// Handle save changes
	const handleSaveChanges = () => {
		onSave(sectionId, content);
		handleCloseEditor();
	};

	// Handle input change
	const handleInputChange = (key, value) => {
		setContent((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	// Handle outside click
	useEffect(() => {
		const handleOutsideClick = (e) => {
			if (isEditing && e.target.classList.contains("editor-backdrop")) {
				handleCloseEditor();
			}
		};

		document.addEventListener("click", handleOutsideClick);
		return () => document.removeEventListener("click", handleOutsideClick);
	}, [isEditing]);

	// Animation variants for the editor sidebar
	const editorVariants = {
		hidden: { x: "100%", opacity: 0 },
		visible: { x: 0, opacity: 1, transition: { type: "tween", duration: 0.3 } },
		exit: {
			x: "100%",
			opacity: 0,
			transition: { type: "tween", duration: 0.2 },
		},
	};

	// Check if we're in preview mode (no editing functions provided)
	const isPreviewMode = !onSave;

	// If in preview mode, just render the children without editing controls
	if (isPreviewMode) {
		return <>{children}</>;
	}

	return (
		<div
			className="relative group border-2 border-transparent hover:border-primary/20 rounded-lg transition-all duration-300"
			onMouseEnter={() => setShowIcon(true)}
			onMouseLeave={() => setShowIcon(false)}
		>
			{/* Pencil Edit Icon - blinking */}
			<AnimatePresence>
				{showIcon && (
					<motion.button
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.8 }}
						onClick={handleOpenEditor}
						className="absolute top-4 right-4 z-10 bg-primary text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-primary-dark transition-colors overflow-hidden"
					>
						<div className="relative">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
							</svg>
							<div className="absolute inset-0 animate-blink-fast bg-white opacity-30 rounded-full"></div>
						</div>
					</motion.button>
				)}
			</AnimatePresence>

			{/* Section content */}
			{children}

			{/* Off-canvas Editor Sidebar */}
			<AnimatePresence>
				{isEditing && (
					<>
						<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 editor-backdrop"></div>
						<motion.div
							className="fixed right-0 top-0 bottom-0 w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col"
							variants={editorVariants}
							initial="hidden"
							animate="visible"
							exit="exit"
						>
							<div className="border-b border-gray-200 p-4 flex justify-between items-center">
								<h2 className="text-lg font-semibold">Edit {sectionName}</h2>
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

							<div className="flex-1 overflow-y-auto p-4 space-y-4">
								{Object.entries(content).map(([key, value]) => (
									<div key={key} className="space-y-1">
										<label className="block text-sm font-medium text-gray-700 capitalize">
											{key
												.replace(/([A-Z])/g, " $1")
												.replace(/^./, (str) => str.toUpperCase())}
										</label>
										{typeof value === "string" && value.length > 100 ? (
											<textarea
												value={value}
												onChange={(e) => handleInputChange(key, e.target.value)}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent min-h-[100px]"
											/>
										) : (
											<input
												type="text"
												value={value}
												onChange={(e) => handleInputChange(key, e.target.value)}
												className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
											/>
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
						</motion.div>
					</>
				)}
			</AnimatePresence>
		</div>
	);
};

export default SectionEditor;
