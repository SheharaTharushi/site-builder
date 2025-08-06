import { motion } from "framer-motion";
import { useState } from "react";

const defaultTeamMembers = [
	{
		id: 1,
		name: "Jane Cooper",
		role: "CEO & Founder",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
		bio: "Jane has over 15 years of experience in the tech industry and founded our company in 2010.",
		social: {
			twitter: "#",
			linkedin: "#",
			github: "#",
		},
	},
	{
		id: 2,
		name: "Michael Foster",
		role: "CTO",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=250&auto=format&fit=crop",
		bio: "Michael leads our engineering team and has a background in building scalable cloud solutions.",
		social: {
			twitter: "#",
			linkedin: "#",
			github: "#",
		},
	},
	{
		id: 3,
		name: "Dries Vincent",
		role: "Lead Designer",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
		bio: "Dries brings a unique perspective to design with his background in both UX and graphic design.",
		social: {
			twitter: "#",
			linkedin: "#",
			dribbble: "#",
		},
	},
	{
		id: 4,
		name: "Lindsay Walton",
		role: "Front-end Developer",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&auto=format&fit=crop",
		bio: "Lindsay specializes in creating beautiful, responsive user interfaces with modern frameworks.",
		social: {
			twitter: "#",
			linkedin: "#",
			github: "#",
		},
	},
	{
		id: 5,
		name: "Tom Cook",
		role: "Product Manager",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
		bio: "Tom has a keen eye for product development and user experience optimization.",
		social: {
			twitter: "#",
			linkedin: "#",
		},
	},
	{
		id: 6,
		name: "Emily Johnson",
		role: "Marketing Director",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop",
		bio: "Emily leads our marketing initiatives with a data-driven approach to growth and brand awareness.",
		social: {
			twitter: "#",
			linkedin: "#",
			instagram: "#",
		},
	},
];

const TeamCards = ({
	title = "Our Leadership Team",
	description = "Meet the talented individuals who drive our vision forward and make our success possible.",
	teamMembers = defaultTeamMembers,
}) => {
	const [activeCard, setActiveCard] = useState(null);

	return (
		<section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
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

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.id}
							className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 ${
								activeCard === member.id
									? "ring-2 ring-primary scale-[1.02]"
									: "hover:shadow-xl"
							}`}
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							onMouseEnter={() => setActiveCard(member.id)}
							onMouseLeave={() => setActiveCard(null)}
						>
							<div className="relative">
								<img
									src={member.image}
									alt={`${member.name}, ${member.role}`}
									className="w-full h-72 object-cover object-center"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
								<div className="absolute bottom-0 w-full p-5">
									<h3 className="text-xl font-semibold text-white">
										{member.name}
									</h3>
									<p className="text-primary-light font-medium">
										{member.role}
									</p>
								</div>
							</div>

							<div className="p-6">
								<p className="text-gray-600">{member.bio}</p>

								<div className="mt-6 pt-4 border-t border-gray-100 flex justify-between items-center">
									<div className="flex space-x-3">
										{member.social.twitter && (
											<a
												href={member.social.twitter}
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
										{member.social.linkedin && (
											<a
												href={member.social.linkedin}
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
										{member.social.github && (
											<a
												href={member.social.github}
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
										{member.social.dribbble && (
											<a
												href={member.social.dribbble}
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
										{member.social.instagram && (
											<a
												href={member.social.instagram}
												className="text-gray-400 hover:text-primary transition-colors"
												aria-label="Instagram"
											>
												<svg
													className="h-5 w-5"
													fill="currentColor"
													viewBox="0 0 24 24"
												>
													<path
														fillRule="evenodd"
														d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
														clipRule="evenodd"
													/>
												</svg>
											</a>
										)}
									</div>
									<button className="text-sm font-medium text-primary hover:text-primary-dark transition-colors">
										Contact
									</button>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamCards;
