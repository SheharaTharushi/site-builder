import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import Navigation from "./Navigation";

const ProductDetail = () => {
	const [activeTab, setActiveTab] = useState("description");
	const { productId } = useParams(); // Get product ID from URL params

	// Product data - in a real app, this would come from API based on product ID
	const product = {
		id: 1,
		title: "Complete UI Component Library",
		price: 79,
		discountPrice: 59,
		rating: 4.8,
		reviewCount: 124,
		category: "UI Kit",
		mainImage:
			"https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
		tag: "Bestseller",
		galleryImages: [
			"https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=80",
			"https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=800&auto=format&fit=crop&q=80",
		],
		description:
			"A comprehensive library of UI components for modern web applications. Built with React and Tailwind CSS, this component library provides everything you need to create beautiful, responsive interfaces quickly.",
		features: [
			"150+ pre-built components",
			"Fully responsive design",
			"Dark and light modes",
			"Accessibility compliant",
			"Customizable with Tailwind CSS",
			"TypeScript support",
			"Built-in form validation",
			"Easy to integrate with any React project",
		],
		includes: [
			"Component source files",
			"Documentation",
			"Example applications",
			"6 months of support",
			"Lifetime access to updates",
		],
		relatedProducts: [
			{
				id: 4,
				title: "Mobile App Design Toolkit",
				price: 59,
				image:
					"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
				category: "UI Kit",
			},
			{
				id: 6,
				title: "SaaS Website Template",
				price: 89,
				image:
					"https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=80",
				category: "Template",
			},
			{
				id: 2,
				title: "Web Design Masterclass",
				price: 129,
				image:
					"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
				category: "Course",
			},
		],
		reviews: [
			{
				id: 1,
				name: "Alex M.",
				rating: 5,
				date: "July 15, 2023",
				comment:
					"This component library saved me so much time on my latest project. The components are well-designed and the documentation is excellent.",
				avatar:
					"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80",
			},
			{
				id: 2,
				name: "Sarah K.",
				rating: 4,
				date: "June 28, 2023",
				comment:
					"Great library with a lot of useful components. I had a small issue with the form validation, but the support team was quick to help me resolve it.",
				avatar:
					"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80",
			},
			{
				id: 3,
				name: "Michael P.",
				rating: 5,
				date: "June 10, 2023",
				comment:
					"The quality of these components is excellent. Everything is well thought out and easy to customize. Highly recommended!",
				avatar:
					"https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&auto=format&fit=crop&q=80",
			},
		],
	};

	// Active image for gallery
	const [activeImage, setActiveImage] = useState(product.mainImage);

	// Add debugging console.log to verify URL params and component rendering
	console.log("ProductDetail: Product ID from URL params:", productId);

	return (
		<div className="digital-store-product-detail">
			<Navigation />

			<div className="pt-24">
				{/* Product Detail Section */}
				<div className="container mx-auto px-6 py-12">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Product Gallery */}
						<div className="lg:w-1/2">
							<div className="mb-4 rounded-xl overflow-hidden">
								<img
									src={activeImage}
									alt={product.title}
									className="w-full h-auto object-cover"
								/>
							</div>
							<div className="flex gap-4">
								{product.galleryImages.map((image, index) => (
									<button
										key={index}
										onClick={() => setActiveImage(image)}
										className={`rounded-lg overflow-hidden border-2 ${
											activeImage === image
												? "border-indigo-600"
												: "border-transparent"
										}`}
									>
										<img
											src={image}
											alt={`${product.title} view ${index + 1}`}
											className="w-20 h-20 object-cover"
										/>
									</button>
								))}
							</div>
						</div>

						{/* Product Info */}
						<div className="lg:w-1/2">
							<div className="space-y-4">
								<div className="flex flex-wrap items-center gap-2">
									<span className="text-sm bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
										{product.category}
									</span>
									{product.tag && (
										<span className="text-sm bg-indigo-600 text-white px-2 py-1 rounded-full">
											{product.tag}
										</span>
									)}
								</div>

								<h1 className="text-3xl md:text-4xl font-bold text-gray-900">
									{product.title}
								</h1>

								<div className="flex items-center gap-2">
									<div className="flex">
										{Array.from({ length: 5 }).map((_, i) => (
											<svg
												key={i}
												className={`w-5 h-5 ${
													i < Math.floor(product.rating)
														? "text-yellow-400"
														: "text-gray-300"
												}`}
												fill="currentColor"
												viewBox="0 0 20 20"
											>
												<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
											</svg>
										))}
									</div>
									<span className="text-gray-600">
										{product.rating} ({product.reviewCount} reviews)
									</span>
								</div>

								<div className="flex items-end gap-4">
									{product.discountPrice ? (
										<>
											<span className="text-3xl font-bold text-gray-900">
												${product.discountPrice}
											</span>
											<span className="text-xl text-gray-500 line-through">
												${product.price}
											</span>
											<span className="text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
												Save ${product.price - product.discountPrice}
											</span>
										</>
									) : (
										<span className="text-3xl font-bold text-gray-900">
											${product.price}
										</span>
									)}
								</div>

								<p className="text-gray-600">{product.description}</p>

								<div className="space-y-4 pt-4">
									<button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">
										Add to Cart
									</button>
									<button className="w-full border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition-colors">
										Buy Now
									</button>
								</div>

								<div className="border-t border-gray-200 pt-6">
									<h3 className="font-semibold text-gray-900 mb-2">
										Secure Checkout
									</h3>
									<div className="flex gap-2">
										<div className="bg-gray-100 p-2 rounded">
											<svg
												width="32"
												height="20"
												fill="none"
												viewBox="0 0 32 20"
											>
												<rect width="32" height="20" fill="#1A1F71" rx="4" />
												<path
													fill="#fff"
													d="M12.6 13.5h-1.3L12.1 7h1.3zM20.9 7.2c-.3-.1-.6-.2-1.1-.2-1.2 0-2.1.7-2.1 1.6 0 .6.7 1.1 1.1 1.3.5.2.6.4.6.6 0 .3-.4.5-.8.5-.5 0-.8-.1-1.2-.3l-.2-.1-.2 1c.3.1.8.2 1.3.2 1.3 0 2.1-.7 2.1-1.7 0-.6-.3-1-1-1.3-.4-.2-.7-.3-.7-.6 0-.2.2-.4.6-.4.3 0 .6.1.8.2l.2.1.3-1zM22.8 7h-1c-.3 0-.5.1-.6.3l-1.8 4.5h1.3l.3-.8h1.7l.2.8h1.2L22.8 7zm-1.7 3l.3-1c.1-.3.2-.6.2-.9l.1.9.3 1h-.9zM10.8 7l-1 3-.1-.5c-.2-.7-.7-1.5-1.4-1.9l.9 3.9h1.3L11.9 7h-1.1z"
												/>
												<path
													fill="#F79410"
													d="M7.6 7H5.4l-.1.2c1.7.4 2.8 1.5 3.2 2.8L8 7.5c-.1-.3-.3-.5-.4-.5z"
												/>
											</svg>
										</div>
										<div className="bg-gray-100 p-2 rounded">
											<svg
												width="32"
												height="20"
												fill="none"
												viewBox="0 0 32 20"
											>
												<rect width="32" height="20" fill="#fff" rx="4" />
												<path fill="#FF5F00" d="M12 15h8V5h-8z" />
												<path
													fill="#EB001B"
													d="M12.5 10a7 7 0 015.75-6.98A7 7 0 008 10a7 7 0 0010.25 6.98A7 7 0 0012.5 10z"
												/>
												<path
													fill="#F79E1B"
													d="M24 10a7 7 0 01-5.75 6.98A7 7 0 0024 10z"
												/>
											</svg>
										</div>
										<div className="bg-gray-100 p-2 rounded">
											<svg
												width="32"
												height="20"
												fill="none"
												viewBox="0 0 32 20"
											>
												<rect width="32" height="20" fill="#fff" rx="4" />
												<path
													fill="#253B80"
													d="M13.3 10.5H12c-.1 0-.2.1-.2.2l-.6 3.8c0 .1 0 .2.2.2h.6c.1 0 .2-.1.2-.2l.2-1c0-.1.1-.2.2-.2h.4c.9 0 1.4-.5 1.5-1.3 0-.4 0-.7-.2-.9-.3-.3-.7-.4-1.2-.4h.2zm.1 1.3c-.1.5-.4.5-.8.5h-.2l.1-.7c0-.1.1-.1.2-.1h.1c.2 0 .5 0 .6.2 0 .1 0 .1 0 .1zm3.6-.3h-.6c0-.1-.1-.1-.2-.1h-.6c-.1 0-.2.1-.2.2l-.6 3.8c0 .1 0 .2.2.2h.6c.1 0 .2-.1.2-.2l.2-1.1c0-.1.1-.2.2-.2h.4c.9 0 1.4-.5 1.5-1.3 0-.4 0-.7-.2-.9-.3-.3-.7-.4-1.1-.4h.2zm.1 1.3c-.1.5-.4.5-.8.5h-.2l.1-.7c0-.1.1-.1.2-.1h.1c.2 0 .5 0 .6.2v.1zm2.6.3h-.3c-.1 0-.2.1-.2.2v.2c-.1-.1-.3-.2-.6-.2-.5 0-1 .4-1.1.9 0 .3 0 .5.2.7.2.2.4.3.6.3.2 0 .4-.1.5-.2v.1c0 .1 0 .2.2.2h.6c.1 0 .2-.1.2-.2l.3-2 .1.2c-.2 0-.3-.2-.5-.2zm-1 1.4c0 .1 0 .2-.1.3-.1.1-.2.2-.3.2-.1 0-.2 0-.3-.1-.1-.1-.1-.2-.1-.3 0-.1 0-.3.1-.3.1-.1.2-.2.3-.2.1 0 .2 0 .3.1.1.1.1.2.1.3z"
												/>
											</svg>
										</div>
										<div className="bg-gray-100 p-2 rounded">
											<svg
												width="32"
												height="20"
												fill="none"
												viewBox="0 0 32 20"
											>
												<rect width="32" height="20" fill="#fff" rx="4" />
												<path
													fill="#5F6368"
													d="M15.5 11h-1.2v-1h3v1h-1v3h-.8v-3zm-3.3-1h.8v4h-.8v-4zm-.5 1.5v-.8h2.2v.8h-2.2zm7.1-.7c-.4 0-.7.3-.8.7h1.5c0-.4-.3-.7-.7-.7zm.8 1.2h-1.5c0 .4.3.8.8.8.3 0 .5-.2.6-.3l.5.3c-.3.4-.6.6-1.1.6-.8 0-1.4-.6-1.4-1.5 0-.8.6-1.5 1.4-1.5.8 0 1.4.6 1.3 1.6 0 0 0 .1-.6 0z"
												/>
											</svg>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Product Tabs */}
					<div className="mt-16">
						<div className="border-b border-gray-200">
							<nav className="flex space-x-8">
								{["description", "features", "reviews"].map((tab) => (
									<button
										key={tab}
										onClick={() => setActiveTab(tab)}
										className={`py-4 px-1 border-b-2 font-medium ${
											activeTab === tab
												? "border-indigo-600 text-indigo-600"
												: "border-transparent text-gray-700 hover:text-indigo-600"
										} transition-colors capitalize`}
									>
										{tab}
									</button>
								))}
							</nav>
						</div>

						<div className="py-6">
							{activeTab === "description" && (
								<div className="space-y-4">
									<p className="text-gray-700">{product.description}</p>
									<h3 className="font-semibold text-gray-900 text-lg mt-6">
										What You'll Get
									</h3>
									<ul className="space-y-3">
										{product.includes.map((item, index) => (
											<li key={index} className="flex items-start">
												<svg
													className="w-5 h-5 text-green-500 mr-2 mt-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													></path>
												</svg>
												<span>{item}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{activeTab === "features" && (
								<div className="space-y-6">
									<h3 className="font-semibold text-gray-900 text-lg">
										Key Features
									</h3>
									<ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
										{product.features.map((feature, index) => (
											<li key={index} className="flex items-start">
												<svg
													className="w-5 h-5 text-indigo-600 mr-2 mt-1"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
													></path>
												</svg>
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>
							)}

							{activeTab === "reviews" && (
								<div className="space-y-8">
									<div className="flex items-center justify-between">
										<h3 className="font-semibold text-gray-900 text-lg">
											Customer Reviews
										</h3>
										<button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
											Write a Review
										</button>
									</div>
									<div className="space-y-6">
										{product.reviews.map((review) => (
											<div
												key={review.id}
												className="border-b border-gray-200 pb-6"
											>
												<div className="flex items-center gap-4 mb-3">
													<img
														src={review.avatar}
														alt={review.name}
														className="w-10 h-10 rounded-full object-cover"
													/>
													<div>
														<div className="font-medium">{review.name}</div>
														<div className="text-sm text-gray-500">
															{review.date}
														</div>
													</div>
												</div>
												<div className="flex mb-2">
													{Array.from({ length: 5 }).map((_, i) => (
														<svg
															key={i}
															className={`w-4 h-4 ${
																i < review.rating
																	? "text-yellow-400"
																	: "text-gray-300"
															}`}
															fill="currentColor"
															viewBox="0 0 20 20"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
														</svg>
													))}
												</div>
												<p className="text-gray-700">{review.comment}</p>
											</div>
										))}
									</div>
								</div>
							)}
						</div>
					</div>

					{/* Related Products */}
					<div className="mt-16">
						<h2 className="text-2xl font-bold text-gray-900 mb-6">
							Related Products
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							{product.relatedProducts.map((relatedProduct) => (
								<Link
									key={relatedProduct.id}
									to={`/sites/digitalstore/product/${relatedProduct.id}`}
									className="group"
								>
									<div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
										<div className="relative">
											<img
												src={relatedProduct.image}
												alt={relatedProduct.title}
												className="w-full h-48 object-cover"
											/>
										</div>
										<div className="p-4">
											<span className="text-sm text-gray-500 block mb-1">
												{relatedProduct.category}
											</span>
											<h3 className="text-lg font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
												{relatedProduct.title}
											</h3>
											<div className="flex justify-between items-center">
												<span className="text-xl font-bold text-gray-900">
													${relatedProduct.price}
												</span>
												<button className="text-indigo-600 hover:text-indigo-800 font-medium">
													View
												</button>
											</div>
										</div>
									</div>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8">
				<div className="container mx-auto px-6 text-center">
					<p className="text-gray-400 text-sm">
						© 2023 DigitalStore. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default ProductDetail;
