import React, { useState } from "react";
import Navigation from "./Navigation";
import SplitContactWithInfo from "../../templates/contact/SplitContactWithInfo";
import FooterWithNewsletter from "../../templates/footer/FooterWithNewsletter";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Contact = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections = {},
}) => {
  const [openFAQs, setOpenFAQs] = useState(new Set());

  // Default content for Contact section
  const contactFormDefaultContent = {
    title: "Get in Touch",
    subtitle: "We're here to help and answer any question you might have",
    email: "admissions@eduvision.edu",
    phone: "+1 (555) 123-4567",
    address: "123 University Avenue, Education City, EC 12345",
    hours: "Monday – Friday: 9:00 AM – 5:00 PM",
    socials: [
      { platform: "facebook", url: "#" },
      { platform: "twitter", url: "#" },
      { platform: "linkedin", url: "#" },
      { platform: "instagram", url: "#" },
    ],
  };

  // Default content for FAQ section
  const faqDefaultContent = {
    title: "Frequently Asked Questions",
    subtitle: "Find answers to common questions about our educational programs",
    faqs: [
      {
        question: "What are the admission requirements?",
        answer:
          "Our admission requirements include academic transcripts, letters of recommendation, and a personal statement. Some programs may have additional specific requirements.",
      },
      {
        question: "Are scholarships available?",
        answer:
          "Yes, we offer various scholarships based on academic merit, financial need, and specific talents. Our financial aid office can provide detailed information about available opportunities.",
      },
      {
        question: "Can I transfer credits from another institution?",
        answer:
          "Yes, we accept transfer credits from accredited institutions. Each case is evaluated individually by our academic committee.",
      },
    ],
  };

  // Get custom content or use defaults
  const contactFormContent =
    sectionEdits?.contactForm || contactFormDefaultContent;
  const faqContent = (() => {
    const saved = sectionEdits?.faq;
    if (saved && saved.faqs && Array.isArray(saved.faqs)) {
      return saved;
    }
    return {
      ...faqDefaultContent,
      ...saved,
      faqs:
        saved?.faqs && Array.isArray(saved.faqs)
          ? saved.faqs
          : faqDefaultContent.faqs,
    };
  })();

  const renderContactFormSection = () => {
    if (deletedSections?.contactForm) {
      return (
        <AdvancedSectionEditor
          sectionId="contactForm"
          sectionName="Contact Form Section"
          initialContent={contactFormDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "subtitle", type: "text", label: "Section Subtitle" },
            { name: "email", type: "text", label: "Contact Email" },
            { name: "phone", type: "text", label: "Contact Phone" },
            { name: "address", type: "text", label: "Address" },
            { name: "hours", type: "text", label: "Business Hours" },
            { name: "customColor", type: "color", label: "Background Color" },
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
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="contactForm"
        sectionName="Contact Form Section"
        initialContent={contactFormContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "subtitle", type: "text", label: "Section Subtitle" },
          { name: "email", type: "text", label: "Contact Email" },
          { name: "phone", type: "text", label: "Contact Phone" },
          { name: "address", type: "text", label: "Address" },
          { name: "hours", type: "text", label: "Business Hours" },
          { name: "customColor", type: "color", label: "Background Color" },
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
        ]}
      >
        <div className="bg-white">
          <SplitContactWithInfo {...contactFormContent} />
        </div>
      </AdvancedSectionEditor>
    );
  };

  const renderFaqSection = () => {
    if (deletedSections?.faq) {
      return (
        <AdvancedSectionEditor
          sectionId="faq"
          sectionName="FAQ Section"
          initialContent={faqDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
          editFields={[
            { name: "title", type: "text", label: "Section Title" },
            { name: "subtitle", type: "text", label: "Section Subtitle" },
            {
              name: "faqs",
              type: "array",
              label: "FAQ Items",
              itemTemplate: {
                question: { type: "text", label: "Question" },
                answer: { type: "textarea", label: "Answer" },
              },
            },
          ]}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="faq"
        sectionName="FAQ Section"
        initialContent={faqContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
        editFields={[
          { name: "title", type: "text", label: "Section Title" },
          { name: "subtitle", type: "text", label: "Section Subtitle" },
          {
            name: "faqs",
            type: "array",
            label: "FAQ Items",
            itemTemplate: {
              question: { type: "text", label: "Question" },
              answer: { type: "textarea", label: "Answer" },
            },
          },
        ]}
      >
        {/* FAQ Content */}
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                {faqContent.title}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                {faqContent.subtitle}
              </p>
            </div>
            <div className="mt-12">
              <dl className="space-y-6">
                {faqContent.faqs.map((faq, index) => (
                  <div key={index} className="pt-6">
                    <button
                      className="text-left w-full flex justify-between items-start text-gray-400"
                      onClick={() => {
                        setOpenFAQs((prev) => {
                          const newSet = new Set(prev);
                          if (newSet.has(index)) {
                            newSet.delete(index);
                          } else {
                            newSet.add(index);
                          }
                          return newSet;
                        });
                      }}
                    >
                      <span className="font-medium text-gray-900">
                        {faq.question}
                      </span>
                      <span
                        className={`ml-6 ${
                          openFAQs.has(index) ? "transform rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {openFAQs.has(index) && (
                      <dd className="mt-2 pr-12">
                        <p className="text-base text-gray-500">{faq.answer}</p>
                      </dd>
                    )}
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </AdvancedSectionEditor>
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation
        brandName={customData?.siteName || "EduVision"}
        brandColor={customData?.brandColor}
      />

      {/* Contact Form Section */}
      {renderContactFormSection()}

      {/* FAQ Section */}
      {renderFaqSection()}

      {/* Footer */}
      <FooterWithNewsletter
        companyName={customData?.siteName || "EduVision"}
        year={new Date().getFullYear()}
        customColor={customData?.brandColor}
      />
    </div>
  );
};

export default Contact;
