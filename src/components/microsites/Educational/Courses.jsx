import React from "react";
import Navigation from "./Navigation";
import FooterWithNewsletter from "../../templates/footer/FooterWithNewsletter";
import FeaturesWithIcons from "../../templates/features/FeaturesWithIcons";
import AdvancedSectionEditor from "../../layout/AdvancedSectionEditor";

const Courses = ({
  customData,
  sectionEdits,
  onSectionEdit,
  onSectionDelete,
  onSectionRestore,
  deletedSections,
}) => {
  // Default content for Courses section
  const coursesDefaultContent = {
    title: "Our Programs",
    subtitle: "Discover Your Path to Success",
    courses: [
      {
        id: "computer-science",
        title: "Bachelor of Computer Science",
        description:
          "Develop cutting-edge software and solve complex computational problems",
        image:
          "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
      },
      {
        id: "business-administration",
        title: "Business Administration",
        description:
          "Master the principles of business management and leadership",
        image:
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&h=300&fit=crop",
      },
      {
        id: "data-science",
        title: "Data Science",
        description: "Learn to analyze and interpret complex data sets",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
      },
      {
        id: "digital-marketing",
        title: "Digital Marketing",
        description: "Master modern marketing strategies and tools",
        image:
          "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&h=300&fit=crop",
      },
      {
        id: "artificial-intelligence",
        title: "Artificial Intelligence",
        description: "Explore the cutting edge of AI and machine learning",
        image:
          "https://images.unsplash.com/photo-1555255707-c07966088b7b?w=500&h=300&fit=crop",
      },
    ],
  };

  // Default content for Course Info section
  const courseInfoDefaultContent = {
    duration: "4 Years",
    qualification: "Bachelor's Degree",
    startDates: "February & July",
    features: [
      {
        title: "Expert Faculty",
        description:
          "Learn from industry professionals and experienced academics",
        icon: "👨‍🏫",
      },
      {
        title: "Modern Facilities",
        description: "Access to state-of-the-art learning resources",
        icon: "🏛️",
      },
      {
        title: "Career Support",
        description: "Dedicated career guidance and placement assistance",
        icon: "💼",
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
  const coursesContent = (() => {
    const saved = sectionEdits?.courses;
    if (saved && saved.courses && Array.isArray(saved.courses)) {
      return saved;
    }
    return {
      ...coursesDefaultContent,
      ...saved,
      courses:
        saved?.courses && Array.isArray(saved.courses)
          ? saved.courses
          : coursesDefaultContent.courses,
    };
  })();

  const courseInfoContent = (() => {
    const saved = sectionEdits?.courseInfo;
    if (saved && saved.features && Array.isArray(saved.features)) {
      return saved;
    }
    return {
      ...courseInfoDefaultContent,
      ...saved,
      features:
        saved?.features && Array.isArray(saved.features)
          ? saved.features
          : courseInfoDefaultContent.features,
    };
  })();

  const footerContent = (() => {
    const saved = sectionEdits?.footer;
    if (saved) {
      return {
        ...footerDefaultContent,
        ...saved,
      };
    }
    return footerDefaultContent;
  })();

  // Render functions for editable sections
  const renderCoursesSection = () => {
    if (deletedSections?.courses) {
      return (
        <AdvancedSectionEditor
          sectionId="courses"
          sectionName="Courses Section"
          initialContent={coursesDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="courses"
        sectionName="Courses Section"
        initialContent={coursesContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
      >
        <div className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title and Subtitle Section */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {coursesContent.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {coursesContent.subtitle}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coursesContent.courses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {course.title}
                    </h3>
                    <p className="text-gray-600">{course.description}</p>
                    <button className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                      Read Description
                      <svg
                        className="ml-2 w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AdvancedSectionEditor>
    );
  };

  const renderCourseInfoSection = () => {
    if (deletedSections?.courseInfo) {
      return (
        <AdvancedSectionEditor
          sectionId="courseInfo"
          sectionName="Course Information Section"
          initialContent={courseInfoDefaultContent}
          onSave={onSectionEdit}
          onDelete={onSectionDelete}
          onRestore={onSectionRestore}
          isDeleted={true}
        />
      );
    }

    return (
      <AdvancedSectionEditor
        sectionId="courseInfo"
        sectionName="Course Information Section"
        initialContent={courseInfoContent}
        onSave={onSectionEdit}
        onDelete={onSectionDelete}
        onRestore={onSectionRestore}
      >
        <div className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Course Information
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Everything you need to know about our programs
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-2">⏱️ Duration</div>
                <div className="font-semibold">
                  {courseInfoContent.duration}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-2">🎓 Qualification</div>
                <div className="font-semibold">
                  {courseInfoContent.qualification}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="text-blue-600 mb-2">📅 Start Dates</div>
                <div className="font-semibold">
                  {courseInfoContent.startDates}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900">
                Program Features
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                What makes our programs unique
              </p>
            </div>
            <FeaturesWithIcons features={courseInfoContent.features} />
          </div>
        </div>
      </AdvancedSectionEditor>
    );
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation
        brandName={customData?.siteName || "EduVision"}
        brandColor={customData?.brandColor}
      />

      {/* Course Listings Section */}
      {renderCoursesSection()}

      {/* Course Information and Features */}
      {renderCourseInfoSection()}

      {/* Footer */}
      <FooterWithNewsletter
        {...footerContent}
        companyName={customData?.siteName || "EduVision"}
        year={new Date().getFullYear()}
        customColor={customData?.brandColor}
      />
    </div>
  );
};

export default Courses;
