import React from "react";
import PropTypes from "prop-types";
import { AdvancedSectionEditor } from "../../layout/AdvancedSectionEditor";

const defaultContent = {
  heading: "Course Title",
  description:
    "A comprehensive description of the course content and learning outcomes.",
  duration: "4 weeks",
  level: "Intermediate",
  instructor: "Dr. John Smith",
  price: "$299",
  details: [
    "Live online sessions",
    "Hands-on projects",
    "Course materials included",
    "Certificate upon completion",
  ],
  image:
    "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop",
};

const CourseTemplate = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections,
  sectionId,
  isBuilder = false,
}) => {
  const content = {
    ...defaultContent,
    ...customData,
  };

  const editableContent = sectionEdits[sectionId] || content;
  const isDeleted = deletedSections?.includes(sectionId);

  if (isDeleted) {
    return null;
  }

  return (
    <div className="bg-white py-12">
      {isBuilder ? (
        <AdvancedSectionEditor
          content={editableContent}
          onEdit={(newContent) => onSectionEdit(sectionId, newContent)}
          onDelete={() => onSectionDelete(sectionId)}
          onRestore={() => onSectionRestore(sectionId)}
          isDeleted={isDeleted}
        >
          <CourseContent content={editableContent} />
        </AdvancedSectionEditor>
      ) : (
        <CourseContent content={editableContent} />
      )}
    </div>
  );
};

const CourseContent = ({ content }) => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
      <div className="relative">
        <img
          src={content.image}
          alt={content.heading}
          className="w-full rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-10 lg:mt-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          {content.heading}
        </h2>
        <p className="text-gray-600 mb-6">{content.description}</p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-gray-500">Duration:</span>
            <p className="font-semibold">{content.duration}</p>
          </div>
          <div>
            <span className="text-gray-500">Level:</span>
            <p className="font-semibold">{content.level}</p>
          </div>
          <div>
            <span className="text-gray-500">Instructor:</span>
            <p className="font-semibold">{content.instructor}</p>
          </div>
          <div>
            <span className="text-gray-500">Price:</span>
            <p className="font-semibold">{content.price}</p>
          </div>
        </div>
        <ul className="space-y-2">
          {content.details.map((detail, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="h-5 w-5 text-green-500 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7"></path>
              </svg>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

CourseTemplate.propTypes = {
  customData: PropTypes.object,
  sectionEdits: PropTypes.object,
  onSectionEdit: PropTypes.func,
  onSectionDelete: PropTypes.func,
  onSectionRestore: PropTypes.func,
  deletedSections: PropTypes.array,
  sectionId: PropTypes.string,
  isBuilder: PropTypes.bool,
};

CourseContent.propTypes = {
  content: PropTypes.object.isRequired,
};

export default CourseTemplate;
