import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavSidebar = () => {
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [activeMenu, setActiveMenu] = useState("dashboard");
	const [expandedSubmenu, setExpandedSubmenu] = useState(null);

	const toggleSidebar = () => {
		setIsCollapsed(!isCollapsed);
		// Close any open submenus when collapsing
		if (!isCollapsed) {
			setExpandedSubmenu(null);
		}
	};

	const toggleSubmenu = (id) => {
		setExpandedSubmenu(expandedSubmenu === id ? null : id);
	};

	const handleMenuClick = (id) => {
		setActiveMenu(id);
		// If the menu has no submenu, close any open submenu
		const menuItem = menuItems.find((item) => item.id === id);
		if (!menuItem.submenu) {
			setExpandedSubmenu(null);
		}
	};

	// Menu structure
	const menuItems = [
		{
			id: "dashboard",
			name: "Dashboard",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
					/>
				</svg>
			),
		},
		{
			id: "analytics",
			name: "Analytics",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
					/>
				</svg>
			),
			submenu: [
				{ id: "reports", name: "Reports" },
				{ id: "metrics", name: "Metrics" },
				{ id: "performance", name: "Performance" },
			],
		},
		{
			id: "users",
			name: "Users",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
					/>
				</svg>
			),
			submenu: [
				{ id: "manage", name: "Manage Users" },
				{ id: "permissions", name: "Permissions" },
				{ id: "teams", name: "Teams" },
			],
		},
		{
			id: "content",
			name: "Content",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
					/>
				</svg>
			),
		},
		{
			id: "settings",
			name: "Settings",
			icon: (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
					/>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
					/>
				</svg>
			),
			submenu: [
				{ id: "general", name: "General" },
				{ id: "security", name: "Security" },
				{ id: "appearance", name: "Appearance" },
				{ id: "notifications", name: "Notifications" },
			],
		},
	];

	return (
		<div className="flex h-[600px] bg-gray-100 border border-gray-200 rounded-xl overflow-hidden">
			{/* Sidebar */}
			<motion.div
				className={`bg-white h-full border-r border-gray-200 flex flex-col ${
					isCollapsed ? "w-16" : "w-64"
				} transition-width duration-300 ease-in-out`}
				animate={{
					width: isCollapsed ? 64 : 256,
				}}
			>
				{/* Sidebar Header */}
				<div className="p-4 border-b border-gray-200 flex items-center justify-between">
					{!isCollapsed && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="flex items-center"
						>
							<div className="h-8 w-8 bg-primary rounded-md flex items-center justify-center">
								<span className="text-white font-bold">A</span>
							</div>
							<span className="ml-2 text-lg font-semibold text-gray-800">
								Admin
							</span>
						</motion.div>
					)}
					{isCollapsed && (
						<div className="h-8 w-8 mx-auto bg-primary rounded-md flex items-center justify-center">
							<span className="text-white font-bold">A</span>
						</div>
					)}
					<button
						onClick={toggleSidebar}
						className={`text-gray-500 hover:text-gray-600 ${
							isCollapsed ? "mx-auto mt-4" : ""
						}`}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className={`h-5 w-5 transition-transform ${
								isCollapsed ? "transform rotate-180" : ""
							}`}
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
							/>
						</svg>
					</button>
				</div>

				{/* Navigation */}
				<nav className="flex-1 overflow-y-auto py-4">
					<ul className="space-y-1 px-2">
						{menuItems.map((item) => (
							<li key={item.id}>
								<div
									className={`mb-1 ${
										item.submenu && expandedSubmenu === item.id ? "mb-2" : ""
									}`}
								>
									<button
										onClick={() => {
											handleMenuClick(item.id);
											if (item.submenu && !isCollapsed) {
												toggleSubmenu(item.id);
											}
										}}
										className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
											activeMenu === item.id
												? "bg-primary/10 text-primary"
												: "text-gray-600 hover:bg-gray-100"
										}`}
									>
										<div className="flex items-center">
											<span className={`${isCollapsed ? "mx-auto" : ""}`}>
												{item.icon}
											</span>
											{!isCollapsed && (
												<span className="ml-3">{item.name}</span>
											)}
										</div>
										{!isCollapsed && item.submenu && (
											<svg
												className={`ml-1 h-4 w-4 transition-transform ${
													expandedSubmenu === item.id
														? "transform rotate-180"
														: ""
												}`}
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke="currentColor"
											>
												<path
													strokeLinecap="round"
													strokeLinejoin="round"
													strokeWidth={2}
													d="M19 9l-7 7-7-7"
												/>
											</svg>
										)}
									</button>
								</div>

								{/* Submenu */}
								{!isCollapsed && item.submenu && (
									<AnimatePresence>
										{expandedSubmenu === item.id && (
											<motion.ul
												initial={{ opacity: 0, height: 0 }}
												animate={{ opacity: 1, height: "auto" }}
												exit={{ opacity: 0, height: 0 }}
												transition={{ duration: 0.2 }}
												className="ml-8 space-y-1 border-l-2 border-gray-100 pl-2"
											>
												{item.submenu.map((subitem) => (
													<li key={subitem.id}>
														<button
															onClick={() => setActiveMenu(subitem.id)}
															className={`w-full text-left px-3 py-1.5 rounded-md text-sm transition-colors duration-200 ${
																activeMenu === subitem.id
																	? "bg-primary/5 text-primary font-medium"
																	: "text-gray-600 hover:bg-gray-50"
															}`}
														>
															{subitem.name}
														</button>
													</li>
												))}
											</motion.ul>
										)}
									</AnimatePresence>
								)}
							</li>
						))}
					</ul>
				</nav>

				{/* User Profile */}
				<div className="p-4 border-t border-gray-200">
					<div
						className={`flex ${
							isCollapsed ? "justify-center" : "items-center"
						}`}
					>
						<div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
							<span className="text-xs font-medium">JD</span>
						</div>
						{!isCollapsed && (
							<div className="ml-3">
								<p className="text-sm font-medium text-gray-700">John Doe</p>
								<p className="text-xs text-gray-500">Admin</p>
							</div>
						)}
					</div>
				</div>
			</motion.div>

			{/* Main Content */}
			<div className="flex-1 p-6 bg-white">
				<div className="mb-6">
					<h1 className="text-2xl font-bold text-gray-900">
						{activeMenu === "dashboard"
							? "Dashboard"
							: activeMenu === "analytics"
							? "Analytics"
							: activeMenu === "reports"
							? "Reports"
							: activeMenu === "metrics"
							? "Metrics"
							: activeMenu === "performance"
							? "Performance"
							: activeMenu === "users"
							? "Users"
							: activeMenu === "manage"
							? "Manage Users"
							: activeMenu === "permissions"
							? "Permissions"
							: activeMenu === "teams"
							? "Teams"
							: activeMenu === "content"
							? "Content"
							: activeMenu === "settings"
							? "Settings"
							: activeMenu === "general"
							? "General Settings"
							: activeMenu === "security"
							? "Security Settings"
							: activeMenu === "appearance"
							? "Appearance Settings"
							: activeMenu === "notifications"
							? "Notification Settings"
							: ""}
					</h1>
					<p className="text-gray-600 mt-1">
						Welcome to the admin dashboard panel
					</p>
				</div>

				{/* Sample Content */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
					<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
						<h3 className="font-medium text-gray-700 mb-2">Quick Stats</h3>
						<div className="grid grid-cols-2 gap-4">
							<div className="bg-blue-50 p-3 rounded-md">
								<p className="text-xs text-blue-600 font-medium">Users</p>
								<p className="text-xl font-bold text-blue-700">2,456</p>
							</div>
							<div className="bg-green-50 p-3 rounded-md">
								<p className="text-xs text-green-600 font-medium">Revenue</p>
								<p className="text-xl font-bold text-green-700">$3,245</p>
							</div>
							<div className="bg-purple-50 p-3 rounded-md">
								<p className="text-xs text-purple-600 font-medium">Orders</p>
								<p className="text-xl font-bold text-purple-700">456</p>
							</div>
							<div className="bg-yellow-50 p-3 rounded-md">
								<p className="text-xs text-yellow-600 font-medium">
									Conversion
								</p>
								<p className="text-xl font-bold text-yellow-700">3.2%</p>
							</div>
						</div>
					</div>

					<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
						<h3 className="font-medium text-gray-700 mb-2">Recent Activity</h3>
						<ul className="space-y-3">
							<li className="flex items-center text-sm">
								<span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
								<span className="text-gray-600">New user registered</span>
								<span className="ml-auto text-xs text-gray-500">5m ago</span>
							</li>
							<li className="flex items-center text-sm">
								<span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
								<span className="text-gray-600">New order placed</span>
								<span className="ml-auto text-xs text-gray-500">15m ago</span>
							</li>
							<li className="flex items-center text-sm">
								<span className="w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
								<span className="text-gray-600">Payment received</span>
								<span className="ml-auto text-xs text-gray-500">30m ago</span>
							</li>
							<li className="flex items-center text-sm">
								<span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
								<span className="text-gray-600">Server alert resolved</span>
								<span className="ml-auto text-xs text-gray-500">1h ago</span>
							</li>
						</ul>
					</div>
				</div>

				<div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
					<h3 className="font-medium text-gray-700 mb-4">Recent Users</h3>
					<div className="overflow-x-auto">
						<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
										User
									</th>
									<th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
										Role
									</th>
									<th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
										Status
									</th>
									<th className="px-4 py-2 text-xs font-medium text-gray-500 uppercase tracking-wider text-left">
										Joined
									</th>
								</tr>
							</thead>
							<tbody className="bg-white divide-y divide-gray-200">
								<tr>
									<td className="px-4 py-2 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
												<span className="text-xs font-medium text-blue-700">
													JD
												</span>
											</div>
											<div className="ml-3">
												<p className="text-sm font-medium text-gray-900">
													Jane Doe
												</p>
												<p className="text-xs text-gray-500">
													jane@example.com
												</p>
											</div>
										</div>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Admin
									</td>
									<td className="px-4 py-2 whitespace-nowrap">
										<span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
											Active
										</span>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Jan 7, 2023
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
												<span className="text-xs font-medium text-purple-700">
													MS
												</span>
											</div>
											<div className="ml-3">
												<p className="text-sm font-medium text-gray-900">
													Mike Smith
												</p>
												<p className="text-xs text-gray-500">
													mike@example.com
												</p>
											</div>
										</div>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Editor
									</td>
									<td className="px-4 py-2 whitespace-nowrap">
										<span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
											Active
										</span>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Mar 15, 2023
									</td>
								</tr>
								<tr>
									<td className="px-4 py-2 whitespace-nowrap">
										<div className="flex items-center">
											<div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center">
												<span className="text-xs font-medium text-red-700">
													SC
												</span>
											</div>
											<div className="ml-3">
												<p className="text-sm font-medium text-gray-900">
													Sara Clark
												</p>
												<p className="text-xs text-gray-500">
													sara@example.com
												</p>
											</div>
										</div>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Viewer
									</td>
									<td className="px-4 py-2 whitespace-nowrap">
										<span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
											Inactive
										</span>
									</td>
									<td className="px-4 py-2 whitespace-nowrap text-sm text-gray-600">
										Jun 2, 2023
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NavSidebar;
