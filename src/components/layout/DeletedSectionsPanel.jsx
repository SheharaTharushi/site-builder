import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const DeletedSectionsPanel = ({
	deletedSections,
	onRestore,
	sectionNames = {},
}) => {
	const [isOpen, setIsOpen] = useState(false);

	const deletedSectionIds = Object.keys(deletedSections).filter(
		(id) => deletedSections[id]
	);

	if (deletedSectionIds.length === 0) {
		return null;
	}

	const handleRestore = (sectionId) => {
		onRestore(sectionId);
	};

	return (
		<>
			{/* Floating Action Button */}
			<motion.button
				onClick={() => setIsOpen(true)}
				className="fixed bottom-20 left-6 bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition-colors z-30"
				whileHover={{ scale: 1.05 }}
				whileTap={{ scale: 0.95 }}
				title="View deleted sections"
			>
				<div className="relative">
					<svg
						className="h-6 w-6"
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
					<div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
						{deletedSectionIds.length}
					</div>
				</div>
			</motion.button>

			{/* Deleted Sections Modal */}
			<AnimatePresence>
				{isOpen && (
					<div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							className="bg-white rounded-xl shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden"
						>
							{/* Header */}
							<div className="border-b border-gray-200 p-4 flex justify-between items-center">
								<div>
									<h2 className="text-lg font-semibold text-gray-900">
										Deleted Sections
									</h2>
									<p className="text-sm text-gray-600">
										{deletedSectionIds.length} section(s) deleted
									</p>
								</div>
								<button
									onClick={() => setIsOpen(false)}
									className="text-gray-500 hover:text-gray-700"
								>
									<svg
										className="h-6 w-6"
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

							{/* Content */}
							<div className="p-4 max-h-96 overflow-y-auto">
								<div className="space-y-3">
									{deletedSectionIds.map((sectionId, index) => (
										<motion.div
											key={sectionId}
											initial={{ opacity: 0, x: -20 }}
											animate={{ opacity: 1, x: 0 }}
											transition={{ delay: index * 0.1 }}
											className="border border-red-200 rounded-lg p-4 bg-red-50"
										>
											<div className="flex items-center justify-between">
												<div>
													<h3 className="font-medium text-gray-900">
														{sectionNames[sectionId] || sectionId}
													</h3>
													<p className="text-sm text-gray-600">
														Section deleted
													</p>
												</div>
												<button
													onClick={() => handleRestore(sectionId)}
													className="px-3 py-1.5 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 transition-colors flex items-center gap-1"
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
															d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
														/>
													</svg>
													Restore
												</button>
											</div>
										</motion.div>
									))}
								</div>
							</div>

							{/* Footer */}
							<div className="border-t border-gray-200 p-4 bg-gray-50">
								<div className="flex items-center gap-2 text-sm text-gray-600">
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
											d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
									<span>
										Deleted sections are saved locally and can be restored
										anytime.
									</span>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
};

export default DeletedSectionsPanel;
