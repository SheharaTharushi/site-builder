import TeamGrid from "./TeamGrid";
import TeamCards from "./TeamCards";
import TeamFeature from "./TeamFeature";

// Team section templates
const teamTemplates = [
	{
		id: "team-grid",
		name: "Team Grid",
		description:
			"A clean grid layout showcasing team members with their photos and roles.",
		component: TeamGrid,
		thumbnail:
			"https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1100&auto=format&fit=crop",
		tags: ["Team", "Grid", "Members", "Simple"],
		editableProps: {
			title: {
				type: "string",
				label: "Section Title",
				defaultValue: "Meet Our Team",
			},
			description: {
				type: "string",
				label: "Section Description",
				defaultValue:
					"Our talented team of professionals is dedicated to delivering exceptional results for our clients.",
			},
			teamMembers: {
				type: "array",
				label: "Team Members",
				arrayType: {
					name: { type: "string", label: "Name" },
					role: { type: "string", label: "Role" },
					image: { type: "image", label: "Photo" },
					bio: { type: "text", label: "Biography" },
				},
			},
		},
	},
	{
		id: "team-cards",
		name: "Team Cards",
		description:
			"Card-based team presentation with detailed information and social links.",
		component: TeamCards,
		thumbnail:
			"https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1100&auto=format&fit=crop",
		tags: ["Team", "Cards", "Social", "Interactive"],
		editableProps: {
			title: {
				type: "string",
				label: "Section Title",
				defaultValue: "Our Leadership Team",
			},
			description: {
				type: "string",
				label: "Section Description",
				defaultValue:
					"Meet the talented individuals who drive our vision forward and make our success possible.",
			},
			teamMembers: {
				type: "array",
				label: "Team Members",
				arrayType: {
					name: { type: "string", label: "Name" },
					role: { type: "string", label: "Role" },
					image: { type: "image", label: "Photo" },
					bio: { type: "text", label: "Biography" },
					social: {
						type: "object",
						label: "Social Links",
						objectType: {
							twitter: { type: "string", label: "Twitter URL" },
							linkedin: { type: "string", label: "LinkedIn URL" },
							github: { type: "string", label: "GitHub URL" },
							dribbble: { type: "string", label: "Dribbble URL" },
							instagram: { type: "string", label: "Instagram URL" },
						},
					},
				},
			},
		},
	},
	{
		id: "team-feature",
		name: "Team Feature",
		description:
			"Highlight key team members with detailed information and testimonials.",
		component: TeamFeature,
		thumbnail:
			"https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1100&auto=format&fit=crop",
		tags: ["Team", "Feature", "Leadership", "Profile"],
		editableProps: {
			title: {
				type: "string",
				label: "Section Title",
				defaultValue: "Leadership Team",
			},
			description: {
				type: "string",
				label: "Section Description",
				defaultValue:
					"Meet the visionaries who drive our company forward and shape our future.",
			},
			featuredMembers: {
				type: "array",
				label: "Featured Members",
				arrayType: {
					name: { type: "string", label: "Name" },
					role: { type: "string", label: "Role" },
					image: { type: "image", label: "Photo" },
					bio: { type: "text", label: "Biography" },
					quote: { type: "text", label: "Quote" },
					social: {
						type: "object",
						label: "Social Links",
						objectType: {
							twitter: { type: "string", label: "Twitter URL" },
							linkedin: { type: "string", label: "LinkedIn URL" },
							github: { type: "string", label: "GitHub URL" },
							dribbble: { type: "string", label: "Dribbble URL" },
						},
					},
				},
			},
		},
	},
];

export default teamTemplates;
