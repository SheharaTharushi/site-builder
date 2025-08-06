import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FootprintTracker from "../../utils/footprintTracker";

const FootprintPanel = ({ tracker, isOpen, onClose, onClearAll }) => {
	const [filter, setFilter] = useState("all");
	const [showDetails, setShowDetails] = useState(false);

	if (!tracker) return null;

	const footprints = tracker.getAllFootprints();
	const summary = tracker.getSummary();

	// Filter footprints based on selected filter
	const filteredFootprints =
		filter === "all"
			? footprints
			: footprints.filter((fp) => fp.action === filter);

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
			onClick={handleBackdropClick}
		>
			<motion.div
				className="bg-white rounded-xl shadow-xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 0, y: 20 }}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="border-b border-gray-200 p-4 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
							<span className="text-white text-sm">👣</span>
						</div>
						<div>
							<h2 className="text-xl font-bold text-gray-800">
								User Activity Footprints
							</h2>
							<p className="text-sm text-gray-600">
								Track all changes and interactions
							</p>
						</div>
					</div>
					<button
						onClick={onClose}
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

				{/* Summary Stats */}
				<div className="border-b border-gray-200 p-4 bg-gray-50">
					<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
						<div className="text-center">
							<div className="text-2xl font-bold text-blue-600">
								{summary.totalActions}
							</div>
							<div className="text-sm text-gray-600">Total Actions</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-green-600">
								{Object.keys(summary.sections).length}
							</div>
							<div className="text-sm text-gray-600">Sections Modified</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-orange-600">
								{summary.actions.section_edit || 0}
							</div>
							<div className="text-sm text-gray-600">Edits Made</div>
						</div>
						<div className="text-center">
							<div className="text-2xl font-bold text-red-600">
								{summary.actions.section_delete || 0}
							</div>
							<div className="text-sm text-gray-600">Items Deleted</div>
						</div>
					</div>
				</div>

				{/* Controls */}
				<div className="border-b border-gray-200 p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
					<div className="flex items-center gap-2">
						<label className="text-sm font-medium text-gray-700">Filter:</label>
						<select
							value={filter}
							onChange={(e) => setFilter(e.target.value)}
							className="border border-gray-300 rounded-md px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="all">All Actions</option>
							<option value="section_edit">Edits</option>
							<option value="section_delete">Deletes</option>
							<option value="section_restore">Restores</option>
							<option value="form_update">Form Updates</option>
							<option value="color_change">Color Changes</option>
							<option value="build_request">Build Requests</option>
						</select>
					</div>
					<div className="flex items-center gap-2">
						<button
							onClick={() => setShowDetails(!showDetails)}
							className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-50"
						>
							{showDetails ? "Hide Details" : "Show Details"}
						</button>
						<button
							onClick={() => {
								if (
									confirm(
										"Are you sure you want to clear all footprints and reset all changes? This will restore the site to its original state."
									)
								) {
									tracker.clear();
									if (onClearAll) {
										onClearAll();
									}
									onClose();
								}
							}}
							className="px-3 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600"
						>
							Clear All
						</button>
					</div>
				</div>

				{/* Footprints List */}
				<div className="flex-1 overflow-y-auto max-h-96">
					{filteredFootprints.length === 0 ? (
						<div className="p-8 text-center text-gray-500">
							<div className="text-4xl mb-2">📭</div>
							<p>No footprints found</p>
							<p className="text-sm">Actions you perform will appear here</p>
						</div>
					) : (
						<div className="p-4 space-y-3">
							{filteredFootprints.map((footprint, index) => (
								<motion.div
									key={footprint.id}
									initial={{ opacity: 0, x: -20 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: index * 0.05 }}
									className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
								>
									<div className="flex items-start justify-between">
										<div className="flex items-start gap-3">
											<div className="text-lg">
												{FootprintTracker.getActionIcon(footprint.action)}
											</div>
											<div className="flex-1">
												<div className="font-medium text-gray-900">
													{FootprintTracker.getActionDescription(
														footprint.action,
														footprint.details
													)}
												</div>
												<div className="text-sm text-gray-600">
													{FootprintTracker.formatTimestamp(
														footprint.timestamp
													)}
												</div>
												{showDetails && footprint.details && (
													<div className="mt-2 p-2 bg-gray-100 rounded text-xs">
														<strong>Details:</strong>
														<pre className="mt-1 whitespace-pre-wrap font-mono">
															{JSON.stringify(footprint.details, null, 2)}
														</pre>
													</div>
												)}
											</div>
										</div>
										<div className="text-xs text-gray-400">
											#{footprint.id.toString().slice(-6)}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					)}
				</div>

				{/* Footer */}
				<div className="border-t border-gray-200 p-4 bg-gray-50">
					<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
						<div className="text-sm text-gray-600">
							Session ID: <span className="font-mono">{summary.sessionId}</span>
						</div>
						{summary.firstAction && (
							<div className="text-sm text-gray-600">
								Session started:{" "}
								{FootprintTracker.formatTimestamp(summary.firstAction)}
							</div>
						)}
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default FootprintPanel;
