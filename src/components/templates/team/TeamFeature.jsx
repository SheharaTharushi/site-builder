import { motion } from "framer-motion";
import { useState } from "react";

const defaultFeaturedMembers = [
	{
		id: 1,
		name: "Jane Cooper",
		role: "CEO & Founder",
		image:
			"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
		bio: "Jane has over 15 years of experience in the tech industry and founded our company in 2010. Her vision and leadership have guided us through exponential growth and multiple successful product launches.",
		quote:
			"Success is not final, failure is not fatal: it is the courage to continue that counts.",
		social: {
			twitter: "#",
			linkedin: "#",
		},
	},
	{
		id: 2,
		name: "Michael Foster",
		role: "CTO",
		image:
			"https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=600&auto=format&fit=crop",
		bio: "Michael leads our engineering team with over a decade of experience building scalable cloud solutions. He previously worked at several Fortune 500 companies before joining our leadership team in 2015.",
		quote: "Innovation distinguishes between a leader and a follower.",
		social: {
			twitter: "#",
			linkedin: "#",
			github: "#",
		},
	},
	{
		id: 3,
		name: "Dries Vincent",
		role: "Creative Director",
		image:
			"https://images.unsplash.com/photo-1548449112-96a38a643324?q=80&w=600&auto=format&fit=crop",
		bio: "Dries brings a unique perspective to design with his background in both UX and graphic design. His award-winning work has been featured in multiple design publications and conferences worldwide.",
		quote:
			"Design is not just what it looks like and feels like. Design is how it works.",
		social: {
			twitter: "#",
			linkedin: "#",
			dribbble: "#",
		},
	},
];

const TeamFeature = ({
	title = "Leadership Team",
	description = "Meet the visionaries who drive our company forward and shape our future.",
	featuredMembers = defaultFeaturedMembers,
}) => {
	const [activeMember, setActiveMember] = useState(featuredMembers[0].id);

	const selectedMember = featuredMembers.find(
		(member) => member.id === activeMember
	);

	return (
		<section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-7xl mx-auto">
				<motion.div
					className="text-center mb-16"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
						{title}
					</h2>
					<p className="max-w-2xl mx-auto text-lg text-gray-600">
						{description}
					</p>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
					<div className="col-span-1">
						<div className="bg-gray-50 rounded-xl p-6">
							<nav className="space-y-1" aria-label="Team members">
								{featuredMembers.map((member) => (
									<button
										key={member.id}
										onClick={() => setActiveMember(member.id)}
										className={`w-full flex items-center px-3 py-3 text-left rounded-lg transition-colors ${
											activeMember === member.id
												? "bg-primary text-white"
												: "text-gray-700 hover:bg-gray-100"
										}`}
										aria-current={
											activeMember === member.id ? "page" : undefined
										}
									>
										<img
											className="h-10 w-10 rounded-full object-cover mr-4"
											src={member.image}
											alt={member.name}
										/>
										<div>
											<div
												className={`font-medium ${
													activeMember === member.id
														? "text-white"
														: "text-gray-900"
												}`}
											>
												{member.name}
											</div>
											<div
												className={`text-sm ${
													activeMember === member.id
														? "text-primary-light"
														: "text-gray-500"
												}`}
											>
												{member.role}
											</div>
										</div>
									</button>
								))}
							</nav>
						</div>
					</div>

					<motion.div
						className="col-span-1 lg:col-span-2"
						key={selectedMember.id}
						initial={{ opacity: 0, x: 20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="bg-white rounded-xl overflow-hidden shadow-lg">
							<div className="md:flex">
								<div className="md:flex-shrink-0 md:w-1/3">
									<img
										className="h-full w-full object-cover md:h-full"
										src={selectedMember.image}
										alt={selectedMember.name}
									/>
								</div>
								<div className="p-8 md:w-2/3">
									<div className="flex items-center justify-between mb-2">
										<div>
											<h3 className="text-2xl font-bold text-gray-900">
												{selectedMember.name}
											</h3>
											<p className="text-primary font-medium">
												{selectedMember.role}
											</p>
										</div>
										<div className="flex space-x-3">
											{selectedMember.social.twitter && (
												<a
													href={selectedMember.social.twitter}
													className="text-gray-400 hover:text-primary transition-colors"
													aria-label="Twitter"
												>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
													</svg>
												</a>
											)}
											{selectedMember.social.linkedin && (
												<a
													href={selectedMember.social.linkedin}
													className="text-gray-400 hover:text-primary transition-colors"
													aria-label="LinkedIn"
												>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
													</svg>
												</a>
											)}
											{selectedMember.social.github && (
												<a
													href={selectedMember.social.github}
													className="text-gray-400 hover:text-primary transition-colors"
													aria-label="GitHub"
												>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															fillRule="evenodd"
															d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
															clipRule="evenodd"
														/>
													</svg>
												</a>
											)}
											{selectedMember.social.dribbble && (
												<a
													href={selectedMember.social.dribbble}
													className="text-gray-400 hover:text-primary transition-colors"
													aria-label="Dribbble"
												>
													<svg
														className="h-5 w-5"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path
															fillRule="evenodd"
															d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm10.125 11.65c-1.35-.575-2.65-.725-3.8-.475-.175-.4-.35-.8-.55-1.175 1.425-.65 2.6-1.525 3.525-2.675.9 1.275 1.425 2.75 1.5 4.325h-.675zm-1.45-5c-.8 1.05-1.85 1.85-3.15 2.4-.675-1.25-1.4-2.475-2.25-3.625 1.025-.25 2.125-.25 3.3.025C19.5 5.375 20.125 5.975 20.675 6.65zM12.3 4.8c.85 1.125 1.6 2.35 2.275 3.65-2.5.725-5.175.75-7.675.05C7.9 6.375 9.775 5.025 12.3 4.8zM3.75 12c0-.125 0-.25.025-.375 2.875.875 5.975.8 8.825-.075C13 12.5 13.375 13.5 13.7 14.475c-3.075.875-5.4 2.525-6.95 5.025-1.85-1.975-3-4.6-3-7.5zm4.525 8.075c1.4-2.275 3.475-3.775 6.275-4.575C15.1 17.8 15.7 20 16.05 22.3c-1.225.55-2.625.85-4.05.85-1.425 0-2.7-.275-3.9-.825-.075-.55-.025-1.275.175-2.25zm10.5-1.675c-.325-2.075-.875-4.15-1.4-6.15 1-.125 2.025-.05 3.125.425.5.2.975.5 1.425.825-.425 2.225-1.5 4.125-3.15 4.9z"
															clipRule="evenodd"
														/>
													</svg>
												</a>
											)}
										</div>
									</div>

									<div className="mt-4">
										<p className="text-gray-600 leading-relaxed">
											{selectedMember.bio}
										</p>
									</div>

									<div className="mt-6 border-t border-gray-100 pt-6">
										<blockquote className="italic text-gray-800 text-lg">
											"{selectedMember.quote}"
										</blockquote>
									</div>

									<div className="mt-6">
										<button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary">
											Get in touch
										</button>
									</div>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default TeamFeature;
