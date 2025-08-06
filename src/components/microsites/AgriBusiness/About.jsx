import React from "react";
import Navigation from "./Navigation";
import AboutTeam from "../../templates/about/AboutTeam";
import TeamGrid from "../../templates/team/TeamGrid";
import FooterSimple from "../../templates/footer/FooterSimple";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const About = ({
	customData,
	sectionEdits,
	onSectionEdit,
	onSectionDelete,
	onSectionRestore,
	deletedSections,
}) => {
	// Shared nav links moved to Navigation component
	const navLinks = [
		{ name: "Home", href: "/" },
		{ name: "About", href: "/about" },
		{ name: "Services", href: "/services" },
		{ name: "Contact", href: "/contact" },
	];

	// Default content for About Team section
	const aboutTeamDefaultContent = {
		title: "About Our Company",
		subtitle:
			"Learn about our mission, values, and the dedicated team behind Agri Business.",
		description:
			"Founded in 2005, Agri Business was established with a clear mission - to revolutionize farming practices through sustainable solutions. What began as a small consultancy has grown into a comprehensive agricultural service provider.",
		imageSrc:
			"https://images.unsplash.com/photo-1595508064774-5ff825520bb7?q=80&w=2000&auto=format&fit=crop",
		imageAlt: "Agricultural team working together in sustainable farming",
	};

	// Default content for Team Grid section
	const teamGridDefaultContent = {
		title: "Our Team",
		subtitle: "Meet the experts behind our agricultural innovations",
		team: [
			{
				id: 1,
				name: "John Smith",
				role: "Founder & CEO",
				image:
					"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
				bio: "With over 20 years in sustainable agriculture, John leads our mission to transform farming practices worldwide.",
			},
			{
				id: 2,
				name: "Sarah Johnson",
				role: "Head of Operations",
				image:
					"https://images.unsplash.com/photo-1494790108755-2616b612b1c3?w=300&h=300&fit=crop&crop=face",
				bio: "Sarah oversees our day-to-day operations and ensures seamless delivery of our agricultural solutions.",
			},
			{
				id: 3,
				name: "Michael Chen",
				role: "Agricultural Scientist",
				image:
					"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
				bio: "Michael brings cutting-edge research and scientific expertise to develop innovative farming techniques.",
			},
			{
				id: 4,
				name: "Emily Rodriguez",
				role: "Sustainability Director",
				image:
					"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
				bio: "Emily leads our sustainability initiatives and ensures all our practices meet the highest environmental standards.",
			},
		],
	};

	// Get custom content or use defaults - with safety checks
	const aboutTeamContent = (() => {
		const saved = sectionEdits?.aboutTeam;
		if (saved) {
			return {
				...aboutTeamDefaultContent,
				...saved,
			};
		}
		return aboutTeamDefaultContent;
	})();

	const teamGridContent = (() => {
		const saved = sectionEdits?.teamGrid;
		if (saved && saved.team && Array.isArray(saved.team)) {
			return saved;
		}
		// If saved data is corrupted or missing team array, merge with defaults
		return {
			...teamGridDefaultContent,
			...saved,
			team:
				saved?.team && Array.isArray(saved.team)
					? saved.team
					: teamGridDefaultContent.team,
		};
	})();

	// Custom render function for about team section
	const renderAboutTeamSection = () => {
		if (deletedSections?.aboutTeam) {
			return (
				<AdvancedSectionEditor
					sectionId="aboutTeam"
					sectionName="About Team Section"
					initialContent={aboutTeamDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="aboutTeam"
				sectionName="About Team Section"
				initialContent={aboutTeamContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
			>
				<AboutTeam
					title={aboutTeamContent.title}
					subtitle={aboutTeamContent.subtitle}
					description={aboutTeamContent.description}
					imageSrc={aboutTeamContent.imageSrc}
					imageAlt={aboutTeamContent.imageAlt}
				/>
			</AdvancedSectionEditor>
		);
	};

	// Custom render function for team grid section
	const renderTeamGridSection = () => {
		if (deletedSections?.teamGrid) {
			return (
				<AdvancedSectionEditor
					sectionId="teamGrid"
					sectionName="Team Grid Section"
					initialContent={teamGridDefaultContent}
					onSave={onSectionEdit}
					onDelete={onSectionDelete}
					onRestore={onSectionRestore}
					isDeleted={true}
					repeatableFields={["team"]}
				/>
			);
		}

		return (
			<AdvancedSectionEditor
				sectionId="teamGrid"
				sectionName="Team Grid Section"
				initialContent={teamGridContent}
				onSave={onSectionEdit}
				onDelete={onSectionDelete}
				onRestore={onSectionRestore}
				repeatableFields={["team"]}
			>
				<TeamGrid
					title={teamGridContent.title}
					description={teamGridContent.subtitle}
					teamMembers={teamGridContent.team}
				/>
			</AdvancedSectionEditor>
		);
	};

	return (
		<div className="min-h-screen bg-white">
			{/* Navigation */}
			<Navigation
				brandName={customData?.siteName || "Agri Business"}
				brandColor={customData?.brandColor}
			/>

			{/* About Team Section */}
			{renderAboutTeamSection()}

			{/* Team Grid Section */}
			{renderTeamGridSection()}

			{/* Footer */}
			<FooterSimple
				companyName={customData?.siteName || "Agri Business"}
				year={new Date().getFullYear()}
				links={navLinks}
			/>
		</div>
	);
};

export default About;
