import React from "react";

const defaultTestimonials = [
  {
    id: 1,
    content:
      "Working with this company has transformed our farming operations. Their sustainable solutions have increased our crop yield by 35% while reducing water usage.",
    author: "John Doe",
    position: "Farm Owner",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 2,
    content:
      "The agricultural consulting services provided exceptional value. Their team's knowledge and commitment to excellence made all the difference in our transition to sustainable farming.",
    author: "Sarah Johnson",
    position: "Agricultural Director",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Their precision agriculture solutions have helped us reduce costs and increase efficiency across our entire operation. I highly recommend their services to any serious farmer.",
    author: "Michael Brown",
    position: "Farm Manager",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop",
    rating: 4,
  },
];

const TestimonialSimple = ({
  title = "What Our Clients Say",
  testimonials,
  customTestimonials = defaultTestimonials,
}) => {
  // Use provided testimonials or fallback to customTestimonials or default
  const testimonialsToUse = testimonials || customTestimonials;
  // Generate star ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonialsToUse.map((testimonial, index) => (
            <div
              key={testimonial.id || index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
            >
              <div className="flex items-center mb-4">
                {renderStars(testimonial.rating || 5)}
              </div>
              <p className="text-gray-600 italic mb-6 flex-grow">
                "{testimonial.text || testimonial.content}"
              </p>
              <div className="flex items-center mt-auto">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name || testimonial.author}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {testimonial.name || testimonial.author}
                  </p>
                  <p className="text-sm text-gray-500">
                    {testimonial.role || testimonial.position}
                  </p>
                  {(testimonial.location || testimonial.date) && (
                    <div className="text-xs text-gray-400 mt-1">
                      {testimonial.location && (
                        <span className="flex items-center">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {testimonial.location}
                        </span>
                      )}
                      {testimonial.location && testimonial.date && (
                        <span className="mx-1">·</span>
                      )}
                      {testimonial.date && (
                        <span className="flex items-center">
                          <svg
                            className="w-3 h-3 mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                          </svg>
                          {testimonial.date}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSimple;
