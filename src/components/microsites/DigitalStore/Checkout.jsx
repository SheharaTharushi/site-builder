import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Checkout = () => {
	const [activeStep, setActiveStep] = useState(1);

	// Add useEffect with console.log to verify component mount
	useEffect(() => {
		console.log("Checkout component mounted");
	}, []);

	// Cart items
	const cartItems = [
		{
			id: 1,
			title: "Complete UI Component Library",
			price: 79,
			discountPrice: 59,
			image:
				"https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
			category: "UI Kit",
		},
		{
			id: 3,
			title: "Productivity Framework",
			price: 49,
			discountPrice: null,
			image:
				"https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800&auto=format&fit=crop&q=80",
			category: "Template",
		},
	];

	// Calculate cart totals
	const subtotal = cartItems.reduce(
		(total, item) => total + (item.discountPrice || item.price),
		0
	);
	const tax = parseFloat((subtotal * 0.05).toFixed(2));
	const total = subtotal + tax;

	return (
		<div className="digital-store-checkout">
			<Navigation />

			<div className="pt-24">
				<div className="container mx-auto px-6 py-12">
					<h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
						Checkout
					</h1>

					{/* Checkout Progress */}
					<div className="mb-10">
						<div className="flex items-center justify-between mb-4">
							{[1, 2, 3].map((step) => (
								<div key={step} className="flex flex-col items-center">
									<div
										className={`w-10 h-10 rounded-full flex items-center justify-center font-medium ${
											activeStep === step
												? "bg-indigo-600 text-white"
												: activeStep > step
												? "bg-green-500 text-white"
												: "bg-gray-200 text-gray-600"
										}`}
									>
										{activeStep > step ? (
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
													d="M5 13l4 4L19 7"
												></path>
											</svg>
										) : (
											step
										)}
									</div>
									<span
										className={`mt-2 text-sm ${
											activeStep >= step ? "text-gray-800" : "text-gray-400"
										}`}
									>
										{step === 1
											? "Order Summary"
											: step === 2
											? "Payment Details"
											: "Confirmation"}
									</span>
								</div>
							))}
						</div>
						<div className="relative bg-gray-200 h-1 w-full mt-2">
							<div
								className="absolute inset-0 bg-indigo-600 h-full"
								style={{ width: `${((activeStep - 1) / 2) * 100}%` }}
							></div>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Main Content */}
						<div className="lg:w-2/3">
							{/* Step 1: Order Summary */}
							{activeStep === 1 && (
								<div className="bg-white p-6 shadow-sm rounded-lg">
									<h2 className="text-xl font-semibold mb-4">Your Cart</h2>

									{/* Cart Items */}
									<div className="space-y-4 mb-6">
										{cartItems.map((item) => (
											<div
												key={item.id}
												className="flex items-center justify-between border-b border-gray-200 pb-4"
											>
												<div className="flex items-center">
													<img
														src={item.image}
														alt={item.title}
														className="w-16 h-16 object-cover rounded-md mr-4"
													/>
													<div>
														<h3 className="font-medium">{item.title}</h3>
														<p className="text-sm text-gray-500">
															{item.category}
														</p>
													</div>
												</div>
												<div className="text-right">
													{item.discountPrice ? (
														<div>
															<span className="font-semibold">
																${item.discountPrice}
															</span>
															<span className="text-sm text-gray-500 line-through ml-2">
																${item.price}
															</span>
														</div>
													) : (
														<span className="font-semibold">${item.price}</span>
													)}
													<button className="text-red-500 text-sm mt-1 hover:text-red-700">
														Remove
													</button>
												</div>
											</div>
										))}
									</div>

									{/* Continue Button */}
									<button
										onClick={() => setActiveStep(2)}
										className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
									>
										Continue to Payment
									</button>
								</div>
							)}

							{/* Step 2: Payment Details */}
							{activeStep === 2 && (
								<div className="bg-white p-6 shadow-sm rounded-lg">
									<h2 className="text-xl font-semibold mb-4">
										Payment Details
									</h2>

									<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
										<div className="col-span-2">
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Name on Card
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-lg"
												placeholder="John Smith"
											/>
										</div>
										<div className="col-span-2">
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Card Number
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-lg"
												placeholder="1234 5678 9012 3456"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												Expiry Date
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-lg"
												placeholder="MM/YY"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-700 mb-1">
												CVC
											</label>
											<input
												type="text"
												className="w-full px-3 py-2 border border-gray-300 rounded-lg"
												placeholder="123"
											/>
										</div>
									</div>

									<div className="flex justify-between">
										<button
											onClick={() => setActiveStep(1)}
											className="text-indigo-600 hover:text-indigo-800 font-medium"
										>
											Back to Cart
										</button>
										<button
											onClick={() => setActiveStep(3)}
											className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg"
										>
											Complete Purchase
										</button>
									</div>
								</div>
							)}

							{/* Step 3: Confirmation */}
							{activeStep === 3 && (
								<div className="bg-white p-8 shadow-sm rounded-lg text-center">
									<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
										<svg
											className="w-8 h-8 text-green-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth="2"
												d="M5 13l4 4L19 7"
											></path>
										</svg>
									</div>
									<h2 className="text-2xl font-bold text-gray-900 mb-2">
										Thank You for Your Purchase!
									</h2>
									<p className="text-gray-600 mb-6">
										Your order has been placed successfully. You will receive an
										email with your download links shortly.
									</p>
									<Link
										to="/sites/digitalstore/products"
										className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg"
									>
										Continue Shopping
									</Link>
								</div>
							)}
						</div>

						{/* Order Summary Sidebar */}
						<div className="lg:w-1/3">
							<div className="bg-white p-6 shadow-sm rounded-lg">
								<h2 className="text-xl font-semibold mb-4">Order Summary</h2>
								<div className="space-y-3 mb-6">
									<div className="flex justify-between">
										<span className="text-gray-600">Subtotal</span>
										<span>${subtotal.toFixed(2)}</span>
									</div>
									<div className="flex justify-between">
										<span className="text-gray-600">Tax (5%)</span>
										<span>${tax.toFixed(2)}</span>
									</div>
									<div className="border-t border-gray-200 pt-3 mt-3">
										<div className="flex justify-between font-semibold">
											<span>Total</span>
											<span>${total.toFixed(2)}</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Footer */}
			<footer className="bg-gray-900 text-white py-8 mt-12">
				<div className="container mx-auto px-6 text-center">
					<p className="text-gray-400 text-sm">
						© 2023 DigitalStore. All rights reserved.
					</p>
				</div>
			</footer>
		</div>
	);
};

export default Checkout;
