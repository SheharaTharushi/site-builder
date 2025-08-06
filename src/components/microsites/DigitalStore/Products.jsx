import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const Products = () => {
	const [activeCategory, setActiveCategory] = useState("all");
	const [activeFilter, setActiveFilter] = useState("popular");
	const [searchQuery, setSearchQuery] = useState("");

	// Product categories
	const categories = [
		{ id: "all", name: "All Products" },
		{ id: "ui-kits", name: "UI Kits" },
		{ id: "templates", name: "Templates" },
		{ id: "courses", name: "Courses" },
		{ id: "ebooks", name: "E-Books" },
	];

	// Filters
	const filters = [
		{ id: "popular", name: "Most Popular" },
		{ id: "newest", name: "Newest" },
		{ id: "price-low", name: "Price: Low to High" },
		{ id: "price-high", name: "Price: High to Low" },
	];

	// Product data
	const allProducts = [
		{
			id: 1,
			title: "Complete UI Component Library",
			price: 79,
			image:
				"https://images.unsplash.com/photo-1545235617-9465d2a55698?w=800&auto=format&fit=crop&q=80",
			category: "ui-kits",
			tag: "Bestseller",
			rating: 4.8,
			reviewCount: 124,
		},
		{
			id: 2,
			title: "Web Design Masterclass",
			price: 129,
			image:
				"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80",
			category: "courses",
			rating: 4.7,
			reviewCount: 89,
		},
		{
			id: 3,
			title: "Productivity Framework",
			price: 49,
			image:
				"https://images.unsplash.com/photo-1586473219010-2ffc57b0d282?w=800&auto=format&fit=crop&q=80",
			category: "templates",
			tag: "New",
			rating: 4.5,
			reviewCount: 42,
		},
		{
			id: 4,
			title: "Mobile App Design Toolkit",
			price: 59,
			image:
				"https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80",
			category: "ui-kits",
			rating: 4.6,
			reviewCount: 78,
		},
		{
			id: 5,
			title: "React Development Guide",
			price: 39,
			image:
				"https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
			category: "ebooks",
			rating: 4.4,
			reviewCount: 56,
		},
		{
			id: 6,
			title: "SaaS Website Template",
			price: 89,
			image:
				"https://images.unsplash.com/photo-1520333789090-1afc82db536a?w=800&auto=format&fit=crop&q=80",
			category: "templates",
			rating: 4.9,
			reviewCount: 102,
		},
		{
			id: 7,
			title: "UX Research Playbook",
			price: 45,
			image:
				"https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&auto=format&fit=crop&q=80",
			category: "ebooks",
			tag: "Featured",
			rating: 4.7,
			reviewCount: 63,
		},
		{
			id: 8,
			title: "Design System Fundamentals",
			price: 119,
			image:
				"https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=80",
			category: "courses",
			rating: 4.8,
			reviewCount: 91,
		},
	];

	// Filter products based on active category and search query
	const filteredProducts = allProducts.filter((product) => {
		const matchesCategory =
			activeCategory === "all" || product.category === activeCategory;
		const matchesSearch = product.title
			.toLowerCase()
			.includes(searchQuery.toLowerCase());
		return matchesCategory && matchesSearch;
	});

	// Sort products based on active filter
	const sortedProducts = [...filteredProducts].sort((a, b) => {
		switch (activeFilter) {
			case "newest":
				return b.id - a.id; // Simple proxy for newest
			case "price-low":
				return a.price - b.price;
			case "price-high":
				return b.price - a.price;
			case "popular":
			default:
				return b.reviewCount - a.reviewCount;
		}
	});

	return (
		<div className="digital-store-products">
			<Navigation />

			<div className="pt-24">
				{/* Header */}
				<div className="bg-indigo-600 text-white py-16">
					<div className="container mx-auto px-6">
						<h1 className="text-4xl md:text-5xl font-bold mb-4">
							Digital Products
						</h1>
						<p className="text-indigo-100 text-lg max-w-2xl">
							Browse our curated collection of digital products designed to help
							you create, learn, and grow professionally.
						</p>
					</div>
				</div>

				{/* Main Content */}
				<div className="container mx-auto px-6 py-12">
					{/* Filters and Search */}
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
						{/* Search */}
						<div className="w-full md:w-1/3 relative">
							<input
								type="text"
								placeholder="Search products..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="w-full py-2 pl-10 pr-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
							/>
							<div className="absolute left-3 top-1/2 transform -translate-y-1/2">
								<svg
									className="w-4 h-4 text-gray-500"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									></path>
								</svg>
							</div>
						</div>

						{/* Sort Dropdown */}
						<div className="w-full md:w-auto">
							<select
								value={activeFilter}
								onChange={(e) => setActiveFilter(e.target.value)}
								className="w-full md:w-auto py-2 px-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none bg-white"
							>
								{filters.map((filter) => (
									<option key={filter.id} value={filter.id}>
										{filter.name}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="flex flex-col lg:flex-row gap-8">
						{/* Categories Sidebar */}
						<div className="lg:w-1/4">
							<h3 className="text-lg font-semibold mb-4">Categories</h3>
							<ul className="space-y-2">
								{categories.map((category) => (
									<li key={category.id}>
										<button
											onClick={() => setActiveCategory(category.id)}
											className={`w-full text-left py-2 px-4 rounded-lg transition-colors ${
												activeCategory === category.id
													? "bg-indigo-100 text-indigo-700 font-medium"
													: "hover:bg-gray-100"
											}`}
										>
											{category.name}
										</button>
									</li>
								))}
							</ul>

							{/* Price Range */}
							<div className="mt-8">
								<h3 className="text-lg font-semibold mb-4">Price Range</h3>
								<div className="space-y-2">
									<label className="flex items-center">
										<input
											type="checkbox"
											className="form-checkbox h-5 w-5 text-indigo-600"
										/>
										<span className="ml-2">Under $50</span>
									</label>
									<label className="flex items-center">
										<input
											type="checkbox"
											className="form-checkbox h-5 w-5 text-indigo-600"
										/>
										<span className="ml-2">$50 - $100</span>
									</label>
									<label className="flex items-center">
										<input
											type="checkbox"
											className="form-checkbox h-5 w-5 text-indigo-600"
										/>
										<span className="ml-2">$100 - $200</span>
									</label>
									<label className="flex items-center">
										<input
											type="checkbox"
											className="form-checkbox h-5 w-5 text-indigo-600"
										/>
										<span className="ml-2">$200+</span>
									</label>
								</div>
							</div>

							{/* Ratings */}
							<div className="mt-8">
								<h3 className="text-lg font-semibold mb-4">Ratings</h3>
								<div className="space-y-2">
									{[4, 3, 2, 1].map((rating) => (
										<label key={rating} className="flex items-center">
											<input
												type="checkbox"
												className="form-checkbox h-5 w-5 text-indigo-600"
											/>
											<span className="ml-2 flex items-center">
												{Array.from({ length: 5 }).map((_, i) => (
													<svg
														key={i}
														className={`w-4 h-4 ${
															i < rating ? "text-yellow-400" : "text-gray-300"
														}`}
														fill="currentColor"
														viewBox="0 0 20 20"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
													</svg>
												))}
												<span className="ml-1">& Up</span>
											</span>
										</label>
									))}
								</div>
							</div>
						</div>

						{/* Product Grid */}
						<div className="lg:w-3/4">
							<div className="mb-4">
								<p className="text-gray-600">
									Showing {sortedProducts.length} products
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{sortedProducts.map((product) => (
									<Link
										key={product.id}
										to={`/sites/digitalstore/product/${product.id}`}
										className="group"
									>
										<div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow h-full flex flex-col">
											<div className="relative">
												<img
													src={product.image}
													alt={product.title}
													className="w-full h-48 object-cover"
												/>
												{product.tag && (
													<span className="absolute top-4 right-4 bg-indigo-600 text-white text-xs px-2 py-1 rounded-full">
														{product.tag}
													</span>
												)}
											</div>
											<div className="p-6 flex-grow flex flex-col">
												<div className="flex-grow">
													<span className="text-sm text-gray-500 block mb-1">
														{
															categories.find((c) => c.id === product.category)
																?.name
														}
													</span>
													<h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
														{product.title}
													</h3>
													<div className="flex items-center mb-4">
														<div className="flex items-center">
															{Array.from({ length: 5 }).map((_, i) => (
																<svg
																	key={i}
																	className={`w-4 h-4 ${
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
															<span className="ml-2 text-sm text-gray-600">
																{product.rating} ({product.reviewCount} reviews)
															</span>
														</div>
													</div>
												</div>
												<div className="flex justify-between items-center mt-4">
													<span className="text-2xl font-bold text-gray-900">
														${product.price}
													</span>
													<button className="bg-gray-100 hover:bg-indigo-600 hover:text-white text-indigo-600 font-medium px-4 py-2 rounded-lg transition-colors">
														View Details
													</button>
												</div>
											</div>
										</div>
									</Link>
								))}
							</div>

							{/* Empty State */}
							{sortedProducts.length === 0 && (
								<div className="text-center py-12 bg-gray-50 rounded-lg">
									<svg
										className="w-16 h-16 text-gray-400 mx-auto mb-4"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
										></path>
									</svg>
									<h3 className="text-xl font-semibold mb-2">
										No products found
									</h3>
									<p className="text-gray-600">
										We couldn't find any products matching your criteria. Try
										adjusting your filters or search query.
									</p>
								</div>
							)}
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

export default Products;
