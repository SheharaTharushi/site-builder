import { useState } from "react";

export default function Contact() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// In a real app, you'd handle form submission here
		console.log("Form submitted:", formState);
		alert("Form submitted successfully!");
		setFormState({
			name: "",
			email: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className="space-y-16">
			{/* Header */}
			<section className="text-center max-w-3xl mx-auto px-4">
				<div className="inline-block bg-primary/10 text-primary font-medium px-4 py-2 rounded-full mb-6">
					Get In Touch
				</div>
				<h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
				<p className="text-lg text-gray-600">
					Have questions about our UI library? Want to contribute or report a
					bug? We'd love to hear from you.
				</p>
			</section>

			{/* Contact Section */}
			<section className="grid md:grid-cols-3 gap-8 px-4">
				{/* Contact Info */}
				<div className="md:col-span-1 space-y-8">
					<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Email Us</h3>
						<p className="text-gray-600 mb-4">
							We'll respond as soon as possible
						</p>
						<a
							href="mailto:support@uilib.com"
							className="text-primary hover:underline font-medium"
						>
							support@uilib.com
						</a>
					</div>

					<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Live Chat</h3>
						<p className="text-gray-600 mb-4">
							Available Monday-Friday, 9am-5pm
						</p>
						<button className="text-primary hover:underline font-medium">
							Start a conversation
						</button>
					</div>

					<div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-shadow">
						<div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
								/>
							</svg>
						</div>
						<h3 className="text-lg font-semibold mb-2">Office</h3>
						<p className="text-gray-600 mb-1">123 UI Street</p>
						<p className="text-gray-600 mb-1">San Francisco, CA 94107</p>
						<p className="text-gray-600">United States</p>
					</div>
				</div>

				{/* Contact Form */}
				<div className="md:col-span-2">
					<div className="bg-white p-8 rounded-xl border border-gray-200">
						<h2 className="text-2xl font-bold mb-6">Send us a message</h2>
						<form onSubmit={handleSubmit} className="space-y-6">
							<div className="grid md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="block text-sm font-medium text-gray-700"
									>
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formState.name}
										onChange={handleChange}
										className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="John Doe"
										required
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="block text-sm font-medium text-gray-700"
									>
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formState.email}
										onChange={handleChange}
										className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
										placeholder="john@example.com"
										required
									/>
								</div>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="subject"
									className="block text-sm font-medium text-gray-700"
								>
									Subject
								</label>
								<input
									type="text"
									id="subject"
									name="subject"
									value={formState.subject}
									onChange={handleChange}
									className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="How can we help you?"
									required
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="message"
									className="block text-sm font-medium text-gray-700"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									value={formState.message}
									onChange={handleChange}
									rows={6}
									className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
									placeholder="Your message here..."
									required
								></textarea>
							</div>

							<div>
								<button
									type="submit"
									className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
								>
									Send Message
								</button>
							</div>
						</form>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="px-4 max-w-4xl mx-auto">
				<div className="text-center mb-12">
					<h2 className="text-3xl font-bold mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-gray-600">
						Find quick answers to common questions about our UI library.
					</p>
				</div>

				<div className="space-y-4">
					{[
						{
							question: "How do I install the UI library?",
							answer:
								"You can install our UI library using npm or yarn. Simply run `npm install ui-library` or `yarn add ui-library` in your project directory.",
						},
						{
							question: "Is the library compatible with React 19?",
							answer:
								"Yes, our UI library is fully compatible with React 19 and takes advantage of its new features.",
						},
						{
							question: "Can I customize the components to match my brand?",
							answer:
								"Absolutely! All components are built with Tailwind CSS and are fully customizable. You can adjust colors, spacing, typography, and more.",
						},
						{
							question: "Do you provide support for TypeScript?",
							answer:
								"Yes, our library includes TypeScript definitions for all components, making it easy to use in TypeScript projects.",
						},
					].map((faq, index) => (
						<div
							key={index}
							className="border border-gray-200 rounded-lg overflow-hidden"
						>
							<details className="group">
								<summary className="flex justify-between items-center p-5 cursor-pointer">
									<h3 className="font-medium text-lg">{faq.question}</h3>
									<span className="text-primary group-open:rotate-180 transition-transform">
										<svg
											className="w-5 h-5"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M19 9l-7 7-7-7"
											></path>
										</svg>
									</span>
								</summary>
								<div className="px-5 pb-5 pt-0">
									<p className="text-gray-600">{faq.answer}</p>
								</div>
							</details>
						</div>
					))}
				</div>
			</section>

			{/* Map Section */}
			<section className="bg-gray-50 py-12 px-4">
				<div className="max-w-6xl mx-auto">
					<div className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 aspect-[16/9] flex items-center justify-center">
						<div className="text-center p-8">
							<div className="bg-primary/10 text-primary font-medium px-4 py-2 rounded-lg inline-block mb-4">
								<svg
									className="w-6 h-6 inline-block mr-2"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									></path>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									></path>
								</svg>
								Map Placeholder
							</div>
							<p className="text-gray-600">
								In a real application, an interactive map would be displayed
								here.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
