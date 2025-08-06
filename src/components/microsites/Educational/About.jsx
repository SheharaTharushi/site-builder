import React from "react";
import Navigation from "./Navigation";
import AboutTeam from "../../templates/about/AboutTeam";
import FooterWithNewsletter from "../../templates/footer/FooterWithNewsletter";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const About = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections,
}) => {
  // Default content for Vision section
  const visionDefaultContent = {
    title: "Our Vision & Mission",
    vision: {
      title: "Vision",
      description:
        "To be a leading global institution of academic excellence, fostering innovation, critical thinking, and positive societal impact.",
      icon: "🎯",
    },
    mission: {
      title: "Mission",
      description:
        "To provide transformative education, conduct groundbreaking research, and empower students to become responsible global citizens who drive positive change.",
      icon: "🌟",
    },
  };

  // Default content for Team section
  const teamDefaultContent = {
    title: "Leadership Team",
    subtitle:
      "Meet the dedicated professionals shaping our institution's future",
    team: [
      {
        name: "Dr. Sarah Johnson",
        role: "University President",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
        bio: "Ph.D. in Educational Leadership with 20+ years of experience in higher education.",
      },
      {
        name: "Prof. Michael Chen",
        role: "Dean of Academics",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
        bio: "Distinguished scholar with extensive experience in curriculum development.",
      },
      {
        name: "Dr. Emily Rodriguez",
        role: "Head of Research",
        image:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
        bio: "Leading researcher in innovative educational methodologies.",
      },
      {
        name: "Prof. James Wilson",
        role: "Dean of Student Affairs",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
        bio: "Dedicated to enhancing student experience and welfare.",
      },
    ],
  };

  // Default content for Footer section
  const footerDefaultContent = {
    title: "Stay Connected",
    description:
      "Subscribe to our newsletter for updates on programs, events, and university news.",
    socials: [
      { platform: "facebook", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "instagram", url: "#" },
    ],
    quickLinks: [
      { text: "About Us", url: "/about" },
      { text: "Courses", url: "/courses" },
      { text: "Contact", url: "/contact" },
      { text: "Privacy Policy", url: "#" },
    ],
  };

  // Get custom content or use defaults - with safety checks
  const visionContent = sectionEdits?.vision || visionDefaultContent;
  const teamContent = sectionEdits?.team || teamDefaultContent;

  // Render functions for editable sections
  const renderVisionSection = () => {
    if (deletedSections?.vision) {
      return (
        <AdvancedSectionEditor
          sectionId="vision"
          sectionName="Vision & Mission Section"
          initialContent={visionDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "vision.title", type: "text", label: "Vision Title" },
            {
              name: "vision.description",
              type: "textarea",
              label: "Vision Description",
            },
            { name: "vision.icon", type: "text", label: "Vision Icon" },
            { name: "mission.title", type: "text", label: "Mission Title" },
            {
              name: "mission.description",
              type: "textarea",
              label: "Mission Description",
            },
            { name: "mission.icon", type: "text", label: "Mission Icon" },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="vision"
        sectionName="Vision & Mission Section"
        initialContent={visionContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "vision.title", type: "text", label: "Vision Title" },
          {
            name: "vision.description",
            type: "textarea",
            label: "Vision Description",
          },
          { name: "vision.icon", type: "text", label: "Vision Icon" },
          { name: "mission.title", type: "text", label: "Mission Title" },
          {
            name: "mission.description",
            type: "textarea",
            label: "Mission Description",
          },
          { name: "mission.icon", type: "text", label: "Mission Icon" },
        ]}
      >
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {visionContent.title}
              </h2>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">{visionContent.vision.icon}</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {visionContent.vision.title}
                </h3>
                <p className="text-blue-700">
                  {visionContent.vision.description}
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <div className="text-4xl mb-4">
                  {visionContent.mission.icon}
                </div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  {visionContent.mission.title}
                </h3>
                <p className="text-blue-700">
                  {visionContent.mission.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </AdvancedSectionEditor>
    );
  };

  const renderTeamSection = () => {
    if (deletedSections?.team) {
      return (
        <AdvancedSectionEditor
          sectionId="team"
          sectionName="Team Section"
          initialContent={teamDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "subtitle", type: "text", label: "Section Subtitle" },
            {
              name: "team",
              type: "array",
              label: "Team Members",
              itemTemplate: {
                name: { type: "text", label: "Member Name" },
                role: { type: "text", label: "Role" },
                image: { type: "text", label: "Image URL" },
                bio: { type: "textarea", label: "Biography" },
              },
            },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="team"
        sectionName="Team Section"
        initialContent={teamContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "subtitle", type: "text", label: "Section Subtitle" },
          {
            name: "team",
            type: "array",
            label: "Team Members",
            itemTemplate: {
              name: { type: "text", label: "Member Name" },
              role: { type: "text", label: "Role" },
              image: { type: "text", label: "Image URL" },
              bio: { type: "textarea", label: "Biography" },
            },
          },
        ]}
      >
        <AboutTeam {...teamContent} />
      </AdvancedSectionEditor>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        brandName={customData?.siteName || "EduVision"}
        brandColor={customData?.brandColor}
      />

      {/* Vision & Mission Section */}
      {renderVisionSection()}

      {/* Team Section */}
      {renderTeamSection()}

      {/* Footer */}
      <FooterWithNewsletter
        {...footerDefaultContent}
        companyName={customData?.siteName || "EduVision"}
        year={new Date().getFullYear()}
        customColor={customData?.brandColor}
      />
    </div>
  );
};

export default About;
