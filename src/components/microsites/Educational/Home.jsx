import React from "react";
import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import HeroWithVideo from "../../templates/hero/HeroWithVideo";
import FooterWithNewsletter from "../../templates/footer/FooterWithNewsletter";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Home = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections,
}) => {
  // Default content for Hero section
  const heroDefaultContent = {
    title: "Shaping Tomorrow's Leaders Today",
    subtitle:
      "Experience world-class education with industry-leading faculty and innovative programs",
    videoUrl: "./placeholder-video.mp4",
    thumbnailUrl: "./placeholder-video-thumbnail.png",
    cta: {
      primary: {
        text: "Explore Programs",
        link: "/courses",
      },
      secondary: {
        text: "Learn More",
        link: "/about",
      },
    },
  };

  // Default content for Intro section
  const introDefaultContent = {
    title: "Why Choose Us",
    subtitle: "Excellence in Education",
    description:
      "We offer a transformative learning experience designed to prepare you for the challenges of tomorrow. Our commitment to academic excellence, combined with cutting-edge research opportunities and industry partnerships, ensures our students graduate ready to make their mark on the world.",
    stats: [
      { number: "50+", label: "Years of Excellence" },
      { number: "200+", label: "Expert Faculty" },
      { number: "25k+", label: "Alumni Worldwide" },
      { number: "95%", label: "Employment Rate" },
    ],
  };

  // Default content for Partners section
  const partnersDefaultContent = {
    title: "Our Global Partners",
    subtitle: "Leading institutions we collaborate with",
    partners: [
      {
        id: "partner1",
        name: "Partner University 1",
        logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&auto=format&fit=crop",
        description:
          "A leading global institution with over 100 years of academic excellence",
        color: "blue",
      },
      {
        id: "partner2",
        name: "Innovation Tech Institute",
        logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop",
        description: "Pioneer in technology education and research",
        color: "purple",
      },
      {
        id: "partner3",
        name: "Global Business School",
        logo: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?w=800&auto=format&fit=crop",
        description:
          "Excellence in business education with a global perspective",
        color: "green",
      },
    ],
  };

  // Default content for Footer section
  const footerDefaultContent = {
    title: "Stay Connected",
    subtitle: "Subscribe to our newsletter for updates",
    description:
      "Get the latest news and updates about our programs, events, and educational resources.",
    socials: [
      { platform: "facebook", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "instagram", url: "#" },
    ],
    contactInfo: {
      email: "info@eduvision.edu",
      phone: "+1 (555) 123-4567",
      address: "123 Education Street, Learning City, ED 12345",
    },
    links: [
      { text: "About Us", url: "/about" },
      { text: "Programs", url: "/programs" },
      { text: "Contact", url: "/contact" },
      { text: "Privacy Policy", url: "/privacy" },
    ],
  };

  // Get custom content or use defaults
  const heroContent = sectionEdits?.hero || heroDefaultContent;
  const introContent = sectionEdits?.intro || introDefaultContent;
  const partnersContent = sectionEdits?.partners || partnersDefaultContent;
  const footerContent = sectionEdits?.footer || footerDefaultContent;

  // Render functions for editable sections
  const renderHeroSection = () => {
    if (deletedSections?.hero) {
      return (
        <AdvancedSectionEditor
          sectionId="hero"
          sectionName="Hero Section"
          initialContent={heroDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Hero Title" },
            { name: "subtitle", type: "textarea", label: "Hero Subtitle" },
            { name: "videoUrl", type: "text", label: "Video URL" },
            { name: "thumbnailUrl", type: "text", label: "Thumbnail URL" },
            {
              name: "cta.primary.text",
              type: "text",
              label: "First Button Name",
              required: true,
            },
            {
              name: "cta.secondary.text",
              type: "text",
              label: "Second Button Name",
              required: true,
            },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="hero"
        sectionName="Hero Section"
        initialContent={heroContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Hero Title" },
          { name: "subtitle", type: "textarea", label: "Hero Subtitle" },
          { name: "videoUrl", type: "text", label: "Video URL" },
          { name: "thumbnailUrl", type: "text", label: "Thumbnail URL" },
          {
            name: "cta.primary.text",
            type: "text",
            label: "First Button Name",
            required: true,
          },
          {
            name: "cta.secondary.text",
            type: "text",
            label: "Second Button Name",
            required: true,
          },
        ]}
      >
        <HeroWithVideo
          title={heroContent.title}
          subtitle={heroContent.subtitle}
          videoUrl={heroContent.videoUrl}
          thumbnailUrl={heroContent.thumbnailUrl}
          primaryButtonText={heroContent.cta?.primary?.text}
          secondaryButtonText={heroContent.cta?.secondary?.text}
          primaryButtonAction={() =>
            (window.location.href = heroContent.cta?.primary?.link)
          }
          secondaryButtonAction={() =>
            (window.location.href = heroContent.cta?.secondary?.link)
          }
        />
      </AdvancedSectionEditor>
    );
  };

  const renderIntroSection = () => {
    if (deletedSections?.intro) {
      return (
        <AdvancedSectionEditor
          sectionId="intro"
          sectionName="Introduction Section"
          initialContent={introDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "subtitle", type: "text", label: "Section Subtitle" },
            { name: "description", type: "textarea", label: "Description" },
            {
              name: "stats",
              type: "array",
              label: "Statistics",
              itemTemplate: {
                number: { type: "text", label: "Statistic Number" },
                label: { type: "text", label: "Statistic Label" },
              },
            },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="intro"
        sectionName="Introduction Section"
        initialContent={introContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "subtitle", type: "text", label: "Section Subtitle" },
          { name: "description", type: "textarea", label: "Description" },
          {
            name: "stats",
            type: "array",
            label: "Statistics",
            itemTemplate: {
              number: { type: "text", label: "Statistic Number" },
              label: { type: "text", label: "Statistic Label" },
            },
          },
        ]}
      >
        <div className="bg-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                {introContent.title}
              </h2>
              <p className="mt-4 text-xl text-gray-600">
                {introContent.subtitle}
              </p>
              <p className="mt-4 text-lg text-gray-500">
                {introContent.description}
              </p>
            </div>

            <div className="mt-16">
              <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                {introContent.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-extrabold text-blue-600">
                      {stat.number}
                    </div>
                    <div className="mt-2 text-lg font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AdvancedSectionEditor>
    );
  };

  const renderPartnersSection = () => {
    if (deletedSections?.partners) {
      return (
        <AdvancedSectionEditor
          sectionId="partners"
          sectionName="Partners Section"
          initialContent={partnersDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "subtitle", type: "text", label: "Section Subtitle" },
            {
              name: "partners",
              type: "array",
              label: "Partner Companies",
              itemTemplate: {
                id: { type: "text", label: "Partner ID" },
                name: { type: "text", label: "Company Name" },
                logo: { type: "text", label: "Logo URL" },
                description: { type: "textarea", label: "Description" },
                color: { type: "text", label: "Theme Color" },
              },
            },
          ]}
        />
      );
    }

    const partners =
      partnersContent?.partners || partnersDefaultContent.partners;

    const getPartnerLink = (partnerId) => {
      const currentPath = window.location.pathname;
      const pathParts = currentPath.split("/");

      // Check if we're in builder mode by checking for "builder" path part
      const isBuilder = currentPath.includes("/builder/educational");

      if (isBuilder) {
        // For builder mode, maintain the same path structure but add partner
        return `${currentPath}/partner/${partnerId}`;
      }

      // For site mode
      return `/sites/educational/partner/${partnerId}`;
    };

    return (
      <AdvancedSectionEditor
        sectionId="partners"
        sectionName="Partners Section"
        initialContent={partnersContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "subtitle", type: "text", label: "Section Subtitle" },
          {
            name: "partners",
            type: "array",
            label: "Partner Companies",
            itemTemplate: {
              id: { type: "text", label: "Partner ID" },
              name: { type: "text", label: "Company Name" },
              logo: { type: "text", label: "Logo URL" },
              description: { type: "textarea", label: "Description" },
              color: { type: "text", label: "Theme Color" },
            },
          },
        ]}
      >
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {partnersContent?.title || partnersDefaultContent.title}
              </h2>
              {partnersContent?.subtitle && (
                <p className="mt-4 text-xl text-gray-600">
                  {partnersContent.subtitle}
                </p>
              )}
            </div>
            {partners && partners.length > 0 && (
              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {partners.map((partner) => (
                  <Link
                    key={partner.id}
                    to={getPartnerLink(partner.id)}
                    className="block transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    <div className="bg-white overflow-hidden shadow rounded-lg group h-full">
                      <div className="p-6">
                        <div className="flex items-center justify-center h-32 mb-4">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="max-h-full max-w-full object-contain transform transition-transform group-hover:scale-105"
                            onError={(e) => {
                              e.target.src =
                                "https://placehold.co/150x50?text=Logo";
                            }}
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {partner.name}
                          </h3>
                          <p className="mt-2 text-sm text-gray-600">
                            {partner.description}
                          </p>
                          <div className="mt-4 inline-flex items-center text-sm font-medium text-blue-600 group-hover:text-blue-500">
                            View Partnership Details
                            <svg
                              className="ml-1 h-4 w-4"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </AdvancedSectionEditor>
    );
  };

  const renderFooterSection = () => {
    if (deletedSections?.footer) {
      return (
        <AdvancedSectionEditor
          sectionId="footer"
          sectionName="Footer Section"
          initialContent={footerDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Newsletter Title" },
            { name: "subtitle", type: "text", label: "Newsletter Subtitle" },
            {
              name: "description",
              type: "textarea",
              label: "Newsletter Description",
            },
            {
              name: "socials",
              type: "array",
              label: "Social Media Links",
              itemTemplate: {
                platform: {
                  type: "select",
                  label: "Platform",
                  options: ["facebook", "twitter", "linkedin", "instagram"],
                },
                url: { type: "text", label: "Profile URL" },
              },
            },
            { name: "contactInfo.email", type: "text", label: "Contact Email" },
            { name: "contactInfo.phone", type: "text", label: "Contact Phone" },
            { name: "contactInfo.address", type: "text", label: "Address" },
            {
              name: "links",
              type: "array",
              label: "Footer Links",
              itemTemplate: {
                text: { type: "text", label: "Link Text" },
                url: { type: "text", label: "Link URL" },
              },
            },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="footer"
        sectionName="Footer Section"
        initialContent={footerContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Newsletter Title" },
          { name: "subtitle", type: "text", label: "Newsletter Subtitle" },
          {
            name: "description",
            type: "textarea",
            label: "Newsletter Description",
          },
          {
            name: "socials",
            type: "array",
            label: "Social Media Links",
            itemTemplate: {
              platform: {
                type: "select",
                label: "Platform",
                options: ["facebook", "twitter", "linkedin", "instagram"],
              },
              url: { type: "text", label: "Profile URL" },
            },
          },
          { name: "contactInfo.email", type: "text", label: "Contact Email" },
          { name: "contactInfo.phone", type: "text", label: "Contact Phone" },
          { name: "contactInfo.address", type: "text", label: "Address" },
          {
            name: "links",
            type: "array",
            label: "Footer Links",
            itemTemplate: {
              text: { type: "text", label: "Link Text" },
              url: { type: "text", label: "Link URL" },
            },
          },
        ]}
      >
        <FooterWithNewsletter {...footerContent} />
      </AdvancedSectionEditor>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        brandName={customData?.siteName || "EduVision"}
        brandColor={customData?.brandColor}
      />

      {/* Hero Section */}
      {renderHeroSection()}

      {/* Intro Section */}
      {renderIntroSection()}

      {/* Partners Section */}
      {renderPartnersSection()}

      {/* Footer */}
      {renderFooterSection()}
    </div>
  );
};

export default Home;
