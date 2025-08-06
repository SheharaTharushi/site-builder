import React from "react";
import Navigation from "./Navigation";
import BeautyAbout from "../../templates/about/BeautyAbout";

import TeamGrid from "../../templates/team/TeamGrid";
import FooterSimple from "../../templates/footer/FooterSimple";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const About = ({
  customData = {},
  sectionEdits = {},
  onSectionEdit = () => {},
  onSectionDelete = () => {},
  onSectionRestore = () => {},
  deletedSections = [],
  isBuilder = false,
}) => {
  // Helper function to check if a section is deleted
  const isDeleted = (sectionId) => {
    return (
      Array.isArray(deletedSections) && deletedSections.includes(sectionId)
    );
  };

  // Default content for sections
  const defaultContent = {
    about: {
      title: "Beauty with Nature",
      subtitle: "Elevating Natural Beauty Since 2020",
      description:
        "At our core, we believe in the power of nature to enhance your natural beauty. Our journey began with a simple vision: to create skincare and cosmetics that not only make you look beautiful but also nurture your skin with the finest natural ingredients. Every product in our collection is thoughtfully crafted, combining ancient beauty wisdom with modern science to deliver results you can see and feel.",
      imageSrc:
        "https://images.unsplash.com/photo-1596704017254-9b21569ac17b?q=80&w=2070&auto=format&fit=crop",
      imageAlt: "Natural beauty ingredients and products",
    },

    team: {
      title: "Meet Our Team",
      subtitle: "The Faces Behind Our Success",
      description:
        "Our dedicated team of beauty experts and researchers work tirelessly to bring you the best in natural cosmetics.",
      members: [
        {
          name: "Sarah Johnson",
          role: "Lead Formulator",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
          description: "With over 15 years of experience in natural cosmetics",
        },
        {
          name: "Emily Chen",
          role: "Skincare Specialist",
          image:
            "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop",
          description:
            "Certified dermatologist specializing in natural skincare",
        },
      ],
    },
  };

  // Render functions for each section
  const renderAboutSection = () => {
    if (isDeleted("about")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="about"
              sectionName="About Section"
              initialContent={defaultContent.about}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("about")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.about || defaultContent.about;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="about"
              sectionName="About Section"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("about")}
              onRestore={() => onSectionRestore("about")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Title", type: "text" },
                { key: "subtitle", label: "Subtitle", type: "text" },
                { key: "description", label: "Description", type: "textarea" },
                { key: "imageSrc", label: "Image URL", type: "image" },
                { key: "imageAlt", label: "Image Alt Text", type: "text" },
              ]}
            />
          </div>
        )}
        <BeautyAbout {...content} />
      </div>
    );
  };

  const renderTeamSection = () => {
    if (isDeleted("team")) {
      return (
        <div className="relative py-20">
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="team"
              sectionName="Team Section"
              initialContent={defaultContent.team}
              onSave={onSectionEdit}
              onDelete={onSectionDelete}
              onRestore={() => onSectionRestore("team")}
              isDeleted={true}
            />
          </div>
        </div>
      );
    }

    const content = sectionEdits?.team || defaultContent.team;

    return (
      <div className="relative mt-16">
        {isBuilder && (
          <div className="absolute top-4 right-4 z-50">
            <AdvancedSectionEditor
              sectionId="team"
              sectionName="Team Section"
              initialContent={content}
              onSave={onSectionEdit}
              onDelete={() => onSectionDelete("team")}
              onRestore={() => onSectionRestore("team")}
              isDeleted={false}
              editFields={[
                { key: "title", label: "Title", type: "text" },
                { key: "subtitle", label: "Subtitle", type: "text" },
                { key: "description", label: "Description", type: "textarea" },
                {
                  key: "members",
                  label: "Team Members",
                  type: "array",
                  itemFields: [
                    { key: "name", label: "Name", type: "text" },
                    { key: "role", label: "Role", type: "text" },
                    { key: "image", label: "Photo", type: "image" },
                    { key: "description", label: "Bio", type: "textarea" },
                  ],
                  addItemLabel: "Add Team Member",
                  maxItems: 8,
                },
              ]}
            />
          </div>
        )}
        <TeamGrid {...content} />
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      <div className="pt-16 space-y-16">
        {renderAboutSection()}
        {renderTeamSection()}
        <FooterSimple />
      </div>
    </div>
  );
};

export default About;
