import { motion } from "framer-motion";
import { useState } from "react";

const ContactSplit = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
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
				phone: "",
				company: "",
				message: "",
			});
			// Reset success message after 5 seconds
			setTimeout(() => {
				setSubmitted(false);
			}, 5000);
		}, 1500);
	};

	const officeLocations = [
		{
			city: "San Francisco",
			address: "123 Market Street, Suite 400",
			postalCode: "CA 94103",
			phone: "+1 (415) 555-1234",
			email: "sf@example.com",
		},
		{
			city: "New York",
			address: "456 Park Avenue, 5th Floor",
			postalCode: "NY 10022",
			phone: "+1 (212) 555-5678",
			email: "nyc@example.com",
		},
		{
			city: "London",
			address: "10 Oxford Street",
			postalCode: "W1D 1BS, UK",
			phone: "+44 20 7123 4567",
			email: "london@example.com",
		},
	];

	return (
		<section className="bg-white">
			<div className="mx-auto max-w-7xl">
				<div className="grid grid-cols-1 lg:grid-cols-2">
					{/* Company Information Column */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="bg-primary text-white px-6 py-16 sm:px-12 lg:px-16"
					>
						<div className="max-w-lg mx-auto lg:mr-0 lg:ml-auto">
							<div className="mb-12">
								<h2 className="text-3xl font-bold tracking-tight">
									Get in touch
								</h2>
								<p className="mt-4 text-lg opacity-90">
									We'd love to hear from you! Please fill out the form and our
									team will get back to you promptly.
								</p>
							</div>

							<div className="space-y-8">
								<div>
									<h3 className="text-xl font-semibold mb-3">Company Hours</h3>
									<div className="space-y-2">
										<p className="flex justify-between">
											<span>Monday - Friday:</span>
											<span>9:00 AM - 5:00 PM</span>
										</p>
										<p className="flex justify-between">
											<span>Saturday:</span>
											<span>10:00 AM - 2:00 PM</span>
										</p>
										<p className="flex justify-between">
											<span>Sunday:</span>
											<span>Closed</span>
										</p>
									</div>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">Our Offices</h3>
									<div className="space-y-6">
										{officeLocations.map((office, index) => (
											<div key={index} className="space-y-1">
												<h4 className="font-medium text-lg">{office.city}</h4>
												<p className="opacity-90">{office.address}</p>
												<p className="opacity-90">{office.postalCode}</p>
												<p className="opacity-90">{office.phone}</p>
												<p className="opacity-90">{office.email}</p>
											</div>
										))}
									</div>
								</div>

								<div>
									<h3 className="text-xl font-semibold mb-3">
										Follow Us Online
									</h3>
									<div className="flex space-x-4">
										<a
											href="#"
											className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
													clipRule="evenodd"
												></path>
											</svg>
										</a>
										<a
											href="#"
											className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
											</svg>
										</a>
										<a
											href="#"
											className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
													clipRule="evenodd"
												></path>
											</svg>
										</a>
										<a
											href="#"
											className="bg-white bg-opacity-20 rounded-full p-2 hover:bg-opacity-30 transition-colors"
										>
											<svg
												className="w-5 h-5"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
													clipRule="evenodd"
												></path>
											</svg>
										</a>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form Column */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="px-6 py-16 sm:px-12 lg:px-16"
					>
						<div className="max-w-lg mx-auto lg:ml-0 lg:mr-auto">
							{submitted ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.9 }}
									animate={{ opacity: 1, scale: 1 }}
									className="bg-green-50 rounded-lg p-8 text-center"
								>
									<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-500 mb-4">
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
									</div>
									<h3 className="text-xl font-medium text-gray-900 mb-2">
										Message Sent Successfully!
									</h3>
									<p className="text-gray-600">
										Thank you for reaching out to us. A member of our team will
										be in touch with you shortly.
									</p>
								</motion.div>
							) : (
								<form onSubmit={handleSubmit}>
									<h2 className="text-2xl font-bold text-gray-900 mb-6">
										Send us a message
									</h2>

									<div className="space-y-6">
										<div>
											<label
												htmlFor="name"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Full Name <span className="text-red-500">*</span>
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
												<p className="mt-1 text-sm text-red-600">
													{errors.name}
												</p>
											)}
										</div>

										<div>
											<label
												htmlFor="email"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Email Address <span className="text-red-500">*</span>
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
												<p className="mt-1 text-sm text-red-600">
													{errors.email}
												</p>
											)}
										</div>

										<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
											<div>
												<label
													htmlFor="phone"
													className="block text-sm font-medium text-gray-700 mb-1"
												>
													Phone Number
												</label>
												<input
													type="tel"
													id="phone"
													name="phone"
													value={formData.phone}
													onChange={handleChange}
													className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
													placeholder="(123) 456-7890"
												/>
											</div>

											<div>
												<label
													htmlFor="company"
													className="block text-sm font-medium text-gray-700 mb-1"
												>
													Company
												</label>
												<input
													type="text"
													id="company"
													name="company"
													value={formData.company}
													onChange={handleChange}
													className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
													placeholder="Your company"
												/>
											</div>
										</div>

										<div>
											<label
												htmlFor="message"
												className="block text-sm font-medium text-gray-700 mb-1"
											>
												Your Message <span className="text-red-500">*</span>
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
												placeholder="How can we help you?"
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
												className="w-full bg-primary text-white py-3 px-4 rounded-md hover:bg-primary-dark transition duration-300 flex items-center justify-center"
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
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ContactSplit;
