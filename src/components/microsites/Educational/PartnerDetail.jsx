import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import Navigation from "./Navigation";
import FooterWithNewsletter from "../../templates/footer/FooterWithNewsletter";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const PartnerDetail = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections = [],
}) => {
  const { partnerId } = useParams();
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const isSiteBuilder = pathParts[1] === "site-builder";

  // Determine correct base path for navigation links
  const basePath = isSiteBuilder
    ? "/builder/educational"
    : "/sites/educational";

  // This would typically come from an API or database
  const defaultPartnerData = {
    partner1: {
      name: "Partner University 1",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop",
      description:
        "A leading global institution with over 100 years of academic excellence.",
      stats: [
        { label: "Founded", value: "1920" },
        { label: "Students", value: "50,000+" },
        { label: "Faculty", value: "2,500+" },
        { label: "Research Centers", value: "100+" },
      ],
      programs: [
        "Joint Research Initiatives",
        "Student Exchange Programs",
        "Dual Degree Programs",
        "Faculty Development",
      ],
      achievements: [
        "Ranked in Top 50 Global Universities",
        "Over 200 Research Patents",
        "25+ Nobel Laureates",
        "Global Impact in Sustainability Research",
      ],
    },
    partner2: {
      name: "Innovation Tech Institute",
      logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
      description:
        "A pioneer in technology education and research, focused on emerging technologies.",
      stats: [
        { label: "Founded", value: "1985" },
        { label: "Students", value: "25,000+" },
        { label: "Research Centers", value: "45+" },
        { label: "Industry Partners", value: "500+" },
      ],
      programs: [
        "Technology Innovation Hub",
        "Industry-Academia Projects",
        "Advanced Research Programs",
        "Entrepreneurship Incubator",
      ],
      achievements: [
        "Leading AI Research Center",
        "100+ Startup Incubations",
        "Technology Innovation Awards",
        "Industry 4.0 Excellence Center",
      ],
    },
    partner3: {
      name: "Global Business School",
      logo: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop",
      description:
        "Excellence in business education with a global perspective.",
      stats: [
        { label: "Founded", value: "1990" },
        { label: "Alumni", value: "75,000+" },
        { label: "Corporate Partners", value: "300+" },
        { label: "Global Campuses", value: "12" },
      ],
      programs: [
        "Executive Education",
        "Global MBA Program",
        "Leadership Development",
        "Corporate Training",
      ],
      achievements: [
        "Top 20 Business School Globally",
        "Triple Crown Accreditation",
        "Excellence in Leadership Education",
        "Sustainable Business Innovation Hub",
      ],
    },
  };

  // Get edited content or use defaults
  const partnerContent =
    sectionEdits?.[`partner-${partnerId}`] || defaultPartnerData[partnerId];
  const partner = partnerContent;

  const renderHeroSection = () => {
    if (deletedSections?.includes(`partner-${partnerId}-hero`)) {
      return (
        <AdvancedSectionEditor
          sectionId={`partner-${partnerId}-hero`}
          sectionName="Partner Hero Section"
          initialContent={{
            name: partner.name,
            description: partner.description,
            logo: partner.logo,
          }}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "name", type: "text", label: "Partner Name" },
            {
              name: "description",
              type: "textarea",
              label: "Partner Description",
            },
            { name: "logo", type: "text", label: "Logo URL" },
          ]}
        />
      );
    }

    const content = (
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24 w-full">
        <div className="w-full px-4">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {partner.name}
              </h1>
              <p className="text-xl text-blue-100">{partner.description}</p>
            </div>
            <div className="md:w-1/3">
              <img
                src={partner.logo}
                alt={partner.name}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    );

    return isSiteBuilder ? (
      <AdvancedSectionEditor
        sectionId={`partner-${partnerId}-hero`}
        sectionName="Partner Hero Section"
        initialContent={{
          name: partner.name,
          description: partner.description,
          logo: partner.logo,
        }}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "name", type: "text", label: "Partner Name" },
          {
            name: "description",
            type: "textarea",
            label: "Partner Description",
          },
          { name: "logo", type: "text", label: "Logo URL" },
        ]}
      >
        {content}
      </AdvancedSectionEditor>
    ) : (
      content
    );
  };

  const renderStatsSection = () => {
    if (deletedSections?.includes(`partner-${partnerId}-stats`)) {
      return (
        <AdvancedSectionEditor
          sectionId={`partner-${partnerId}-stats`}
          sectionName="Partner Stats Section"
          initialContent={{ stats: partner.stats }}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            {
              name: "stats",
              type: "array",
              label: "Statistics",
              itemTemplate: {
                label: { type: "text", label: "Stat Label" },
                value: { type: "text", label: "Stat Value" },
              },
            },
          ]}
        />
      );
    }

    const content = (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partner.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    return isSiteBuilder ? (
      <AdvancedSectionEditor
        sectionId={`partner-${partnerId}-stats`}
        sectionName="Partner Stats Section"
        initialContent={{ stats: partner.stats }}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          {
            name: "stats",
            type: "array",
            label: "Statistics",
            itemTemplate: {
              label: { type: "text", label: "Stat Label" },
              value: { type: "text", label: "Stat Value" },
            },
          },
        ]}
      >
        {content}
      </AdvancedSectionEditor>
    ) : (
      content
    );
  };

  const renderProgramsSection = () => {
    if (deletedSections?.includes(`partner-${partnerId}-programs`)) {
      return (
        <AdvancedSectionEditor
          sectionId={`partner-${partnerId}-programs`}
          sectionName="Programs Section"
          initialContent={{ programs: partner.programs }}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            {
              name: "programs",
              type: "array",
              label: "Programs",
              itemTemplate: { type: "text", label: "Program Name" },
            },
          ]}
        />
      );
    }

    const content = (
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Collaboration Programs
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partner.programs.map((program, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <div className="text-lg font-semibold text-blue-600 mb-2">
                  Program {index + 1}
                </div>
                <div className="text-gray-700">{program}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    return isSiteBuilder ? (
      <AdvancedSectionEditor
        sectionId={`partner-${partnerId}-programs`}
        sectionName="Programs Section"
        initialContent={{ programs: partner.programs }}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          {
            name: "programs",
            type: "array",
            label: "Programs",
            itemTemplate: { type: "text", label: "Program Name" },
          },
        ]}
      >
        {content}
      </AdvancedSectionEditor>
    ) : (
      content
    );
  };

  const renderAchievementsSection = () => {
    if (deletedSections?.includes(`partner-${partnerId}-achievements`)) {
      return (
        <AdvancedSectionEditor
          sectionId={`partner-${partnerId}-achievements`}
          sectionName="Achievements Section"
          initialContent={{ achievements: partner.achievements }}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            {
              name: "achievements",
              type: "array",
              label: "Achievements",
              itemTemplate: { type: "text", label: "Achievement" },
            },
          ]}
        />
      );
    }

    const content = (
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Key Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {partner.achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <div className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="text-gray-800">{achievement}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );

    return isSiteBuilder ? (
      <AdvancedSectionEditor
        sectionId={`partner-${partnerId}-achievements`}
        sectionName="Achievements Section"
        initialContent={{ achievements: partner.achievements }}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          {
            name: "achievements",
            type: "array",
            label: "Achievements",
            itemTemplate: { type: "text", label: "Achievement" },
          },
        ]}
      >
        {content}
      </AdvancedSectionEditor>
    ) : (
      content
    );
  };

  if (!partner) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation
          brandName="EduVision"
          brandColor="text-blue-600"
          basePath={basePath}
        />
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Partner not found
          </h2>
          <Link
            to={basePath}
            className="mt-4 inline-block text-blue-600 hover:text-blue-700"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      <Navigation
        brandName="EduVision"
        brandColor="text-blue-600"
        basePath={basePath}
      />
      <div className="w-full">
        {renderHeroSection()}
        {renderStatsSection()}
        {renderProgramsSection()}
        {renderAchievementsSection()}
      </div>
      <FooterWithNewsletter />
    </div>
  );
};

export default PartnerDetail;