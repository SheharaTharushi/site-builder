import { motion } from "framer-motion";
import { useState } from "react";

const ContactSimple = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({});
	const [submitting, setSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const validateForm = () => {
		const newErrors = {};
		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}
		if (!formData.email.trim()) {
			newErrors.email = "Email is required";
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			newErrors.email = "Email is invalid";
		}
		if (!formData.subject.trim()) {
			newErrors.subject = "Subject is required";
		}
		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}
		return newErrors;
	};

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
		// Clear error when user types
		if (errors[name]) {
			setErrors((prev) => ({
				...prev,
				[name]: null,
			}));
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newErrors = validateForm();
		if (Object.keys(newErrors).length > 0) {
			setErrors(newErrors);
			return;
		}

		setSubmitting(true);
		// Simulate API call
		setTimeout(() => {
			setSubmitting(false);
			setSubmitted(true);
			setFormData({
				name: "",
				email: "",
				subject: "",
				message: "",
			});
			// Reset success message after 5 seconds
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		}, 1500);
	};

	return (
		<section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-3xl mx-auto">
				<motion.div
					className="text-center mb-12"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						Get in Touch
					</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">
						Have a question or want to work together? Fill out the form below
						and we'll get back to you as soon as possible.
					</p>
				</motion.div>

				<motion.div
					className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{submitted ? (
						<div className="p-8 text-center">
							<motion.div
								initial={{ scale: 0.8, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4"
							>
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M5 13l4 4L19 7"
									/>
								</svg>
							</motion.div>
							<h3 className="text-xl font-medium text-gray-900 mb-2">
								Message Sent!
							</h3>
							<p className="text-gray-600">
								Thank you for contacting us. We'll respond to your message as
								soon as possible.
							</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="p-8">
							<div className="grid grid-cols-1 gap-6">
								<div>
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Your Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary ${
											errors.name
												? "border-red-300 focus:ring-red-500 focus:border-red-500"
												: "border-gray-300"
										}`}
										placeholder="John Doe"
									/>
									{errors.name && (
										<p className="mt-1 text-sm text-red-600">{errors.name}</p>
									)}
								</div>

								<div>
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary ${
											errors.email
												? "border-red-300 focus:ring-red-500 focus:border-red-500"
												: "border-gray-300"
										}`}
										placeholder="john@example.com"
									/>
									{errors.email && (
										<p className="mt-1 text-sm text-red-600">{errors.email}</p>
									)}
								</div>

								<div>
									<label
										htmlFor="subject"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Subject
									</label>
									<input
										type="text"
										id="subject"
										name="subject"
										value={formData.subject}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary ${
											errors.subject
												? "border-red-300 focus:ring-red-500 focus:border-red-500"
												: "border-gray-300"
										}`}
										placeholder="How can we help you?"
									/>
									{errors.subject && (
										<p className="mt-1 text-sm text-red-600">
											{errors.subject}
										</p>
									)}
								</div>

								<div>
									<label
										htmlFor="message"
										className="block text-sm font-medium text-gray-700 mb-1"
									>
										Your Message
									</label>
									<textarea
										id="message"
										name="message"
										rows={5}
										value={formData.message}
										onChange={handleChange}
										className={`w-full px-4 py-2 border rounded-md shadow-sm focus:ring-primary focus:border-primary ${
											errors.message
												? "border-red-300 focus:ring-red-500 focus:border-red-500"
												: "border-gray-300"
										}`}
										placeholder="Tell us what's on your mind..."
									/>
									{errors.message && (
										<p className="mt-1 text-sm text-red-600">
											{errors.message}
										</p>
									)}
								</div>

								<div>
									<button
										type="submit"
										disabled={submitting}
										className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center"
									>
										{submitting ? (
											<>
												<svg
													className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Sending...
											</>
										) : (
											"Send Message"
										)}
									</button>
								</div>
							</div>
						</form>
					)}
				</motion.div>

				<motion.div
					className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-6"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 0.5, delay: 0.2 }}
				>
					<div className="flex items-center text-gray-600">
						<svg
							className="w-5 h-5 mr-2 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
						<span>contact@example.com</span>
					</div>
					<div className="flex items-center text-gray-600">
						<svg
							className="w-5 h-5 mr-2 text-gray-500"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
							/>
						</svg>
						<span>(123) 456-7890</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default ContactSimple;
