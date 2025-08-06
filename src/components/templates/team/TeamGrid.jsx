import { motion } from "framer-motion";

const defaultTeamMembers = [
	{
		id: 1,
		name: "Jane Cooper",
		role: "CEO & Founder",
		image:
			"https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250&auto=format&fit=crop",
		bio: "Jane has over 15 years of experience in the tech industry and founded our company in 2010.",
	},
	{
		id: 2,
		name: "Michael Foster",
		role: "CTO",
		image:
			"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?q=80&w=250&auto=format&fit=crop",
		bio: "Michael leads our engineering team and has a background in building scalable cloud solutions.",
	},
	{
		id: 3,
		name: "Dries Vincent",
		role: "Lead Designer",
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=250&auto=format&fit=crop",
		bio: "Dries brings a unique perspective to design with his background in both UX and graphic design.",
	},
	{
		id: 4,
		name: "Lindsay Walton",
		role: "Front-end Developer",
		image:
			"https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=250&auto=format&fit=crop",
		bio: "Lindsay specializes in creating beautiful, responsive user interfaces with modern frameworks.",
	},
	{
		id: 5,
		name: "Tom Cook",
		role: "Product Manager",
		image:
			"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250&auto=format&fit=crop",
		bio: "Tom has a keen eye for product development and user experience optimization.",
	},
	{
		id: 6,
		name: "Emily Johnson",
		role: "Marketing Director",
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250&auto=format&fit=crop",
		bio: "Emily leads our marketing initiatives with a data-driven approach to growth and brand awareness.",
	},
	{
		id: 7,
		name: "David Wilson",
		role: "Backend Developer",
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=250&auto=format&fit=crop",
		bio: "David is an expert in building secure, scalable backend systems and infrastructure.",
	},
	{
		id: 8,
		name: "Sarah Chen",
		role: "UX Researcher",
		image:
			"https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=250&auto=format&fit=crop",
		bio: "Sarah helps us understand user needs through qualitative and quantitative research methods.",
	},
];

const TeamGrid = ({
	title = "Meet Our Team",
	description = "Our talented team of professionals is dedicated to delivering exceptional results for our clients.",
	teamMembers = defaultTeamMembers,
}) => {
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

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{teamMembers.map((member, index) => (
						<motion.div
							key={member.id}
							className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
						>
							<div className="aspect-w-1 aspect-h-1 w-full">
								<img
									src={member.image}
									alt={`${member.name}, ${member.role}`}
									className="w-full h-64 object-cover object-center"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-lg font-medium text-gray-900 mb-1">
									{member.name}
								</h3>
								<p className="text-sm text-primary mb-3">{member.role}</p>
								<p className="text-gray-600 text-sm">{member.bio}</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default TeamGrid;
