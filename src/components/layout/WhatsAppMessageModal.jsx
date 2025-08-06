import React, { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS_CONFIG, WHATSAPP_TEMPLATES } from "../../constants/config";

const WhatsAppMessageModal = ({ isOpen, onClose, requestData }) => {
	const [message, setMessage] = useState(() => {
		if (!requestData) return "";
		return WHATSAPP_TEMPLATES.BUILD_REQUEST({
			templateName: requestData.siteName || "Template",
			siteName: requestData.siteName,
			contactName: requestData.contactName,
			contactEmail: requestData.contactEmail,
			brandColor: requestData.brandColor,
			sectionEdits: requestData.sectionEdits,
			additionalNotes: requestData.additionalNotes,
			shareableLink: requestData.shareableLink,
		});
	});

	const handleSendToWhatsApp = () => {
		// Create WhatsApp URL with pre-filled message
		const whatsappNumber = BUSINESS_CONFIG.WHATSAPP_NUMBER;
		const encodedMessage = encodeURIComponent(message);
		const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

		// Open WhatsApp in new window/tab
		window.open(whatsappUrl, "_blank");

		// Close the modal
		onClose();
	};

	const handleBackdropClick = (e) => {
		if (e.target === e.currentTarget) {
			onClose();
		}
	};

	const modalVariants = {
		hidden: { opacity: 0, y: 50 },
		visible: { opacity: 1, y: 0 },
		exit: { opacity: 0, y: 50 },
	};

	if (!isOpen) return null;

	return (
		<div
			className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
			onClick={handleBackdropClick}
		>
			<motion.div
				className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
				variants={modalVariants}
				initial="hidden"
				animate="visible"
				exit="exit"
				transition={{ duration: 0.3 }}
				onClick={(e) => e.stopPropagation()}
			>
				{/* Header */}
				<div className="border-b border-gray-200 p-4 flex justify-between items-center">
					<div className="flex items-center gap-3">
						<div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5 text-white"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
							</svg>
						</div>
						<div>
							<h2 className="text-xl font-bold text-gray-800">
								Send via WhatsApp
							</h2>
							<p className="text-sm text-gray-600">
								Edit your message before sending
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

				{/* Content */}
				<div className="p-6">
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700 mb-2">
							Message to send:
						</label>
						<div className="bg-gray-50 p-3 rounded-lg mb-3">
							<p className="text-sm text-gray-600">
								Sending to:{" "}
								<span className="font-medium">
									+{BUSINESS_CONFIG.WHATSAPP_NUMBER}
								</span>
							</p>
						</div>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full h-80 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none font-mono text-sm"
							placeholder="Type your message here..."
						/>
						<div className="flex justify-between items-center mt-2">
							<p className="text-xs text-gray-500">
								{message.length} characters
							</p>
							<p className="text-xs text-gray-500">
								Tip: You can edit this message before sending
							</p>
						</div>
					</div>
				</div>

				{/* Footer */}
				<div className="border-t border-gray-200 p-4 flex justify-end gap-3">
					<button
						onClick={onClose}
						className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 font-medium hover:bg-gray-50"
					>
						Cancel
					</button>
					<button
						onClick={handleSendToWhatsApp}
						disabled={!message.trim()}
						className="px-6 py-2 bg-green-500 text-white rounded-md font-medium hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
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
				</div>
			</motion.div>
		</div>
	);
};

export default WhatsAppMessageModal;
