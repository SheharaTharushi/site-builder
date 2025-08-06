import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BuilderModal from "./BuilderModal";

const BuilderButton = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

	return (
		<>
			<motion.button
				onClick={openModal}
				className="bg-gradient-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-lg font-medium flex items-center gap-2 hover:shadow-md transition-all"
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
						d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
						clipRule="evenodd"
					/>
				</svg>
				Build Site
			</motion.button>

			<AnimatePresence>
				{isModalOpen && <BuilderModal onClose={closeModal} />}
			</AnimatePresence>
		</>
	);
};

export default BuilderButton;
