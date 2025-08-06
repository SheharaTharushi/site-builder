import React from "react";

const SplitContactWithInfo = ({
  title = "Contact Us",
  subtitle = "We're here to help",
  email,
  phone,
  address,
  hours,
  socials = [],
  customColor,
}) => {
  return (
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: customColor || "#1e40af",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r ${
            customColor
              ? "from-current/90 to-current/80"
              : "from-blue-900/90 to-blue-800/90"
          }`}
        ></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Heading with decorative elements */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">{title}</h2>
          {subtitle && <p className="text-lg text-white/90 mb-6">{subtitle}</p>}
          <div className="flex items-center justify-center">
            <div className="h-1 w-20 bg-blue-400"></div>
            <div className="h-1 w-12 mx-2 bg-blue-300"></div>
            <div className="h-1 w-6 bg-blue-200"></div>
          </div>
        </div>

        {/* Split section container with glass effect */}
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left column - Contact Form */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-2xl">
            <form className="space-y-6">
              <div className="space-y-4">
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-blue-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="block w-full pl-10 pr-4 py-3 border-0 bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg
                        className="h-5 w-5 text-blue-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="block w-full pl-10 pr-4 py-3 border-0 bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/90 mb-1"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <svg
                        className="h-5 w-5 text-blue-300"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                      </svg>
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="block w-full pl-10 pr-4 py-3 border-0 bg-white/10 text-white placeholder-blue-200 backdrop-blur-sm rounded-lg focus:ring-2 focus:ring-blue-400 transition duration-200 resize-none"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right column - Contact Information with glass effect */}
          <div className="backdrop-blur-md bg-white/10 p-8 rounded-xl shadow-2xl">
            <div className="space-y-8">
              {/* Location */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                  <svg
                    className="h-6 w-6 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Visit Us
                  </h3>
                  <p className="text-blue-200">
                    123 Business Avenue
                    <br />
                    Suite 456
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                  <svg
                    className="h-6 w-6 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Call Us
                  </h3>
                  <p className="text-blue-200">
                    <a
                      href="tel:+1234567890"
                      className="hover:text-white transition duration-300"
                    >
                      +1 (234) 567-890
                    </a>
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4 group">
                <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                  <svg
                    className="h-6 w-6 text-blue-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    Email Us
                  </h3>
                  <p className="text-blue-200">
                    <a
                      href="mailto:contact@example.com"
                      className="hover:text-white transition duration-300"
                    >
                      contact@example.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="pt-8 mt-8 border-t border-blue-400/30">
                <div className="flex justify-center space-x-6">
                  {/* Facebook */}
                  <a href="#" className="group">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                      <svg
                        className="h-5 w-5 text-blue-200 group-hover:text-white transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M18.77,7.46H14.5V5.9c0-.86.72-1.58,1.58-1.58h2.7V0H14.5C11.14,0,8.45,2.69,8.45,6.03v1.43H5.5v4.34h3v12.66h6V11.8h3.27L18.77,7.46z" />
                      </svg>
                    </div>
                  </a>

                  {/* Twitter */}
                  <a href="#" className="group">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                      <svg
                        className="h-5 w-5 text-blue-200 group-hover:text-white transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953,4.57a10,10,0,0,1-2.825.775,4.958,4.958,0,0,0,2.163-2.723,10.163,10.163,0,0,1-3.127,1.184A4.92,4.92,0,0,0,11.78,8.28,13.938,13.938,0,0,1,1.64,3.162,4.822,4.822,0,0,0,.974,5.708,4.9,4.9,0,0,0,3.2,9.713,4.957,4.957,0,0,1,.96,9.116v.062A4.923,4.923,0,0,0,4.88,14.006a4.957,4.957,0,0,1-2.212.084,4.935,4.935,0,0,0,4.6,3.417,9.868,9.868,0,0,1-6.1,2.1A10.444,10.444,0,0,1,0,19.544,14,14,0,0,0,7.557,21.5,13.9,13.9,0,0,0,21.588,7.977q0-.314-.015-.629A9.935,9.935,0,0,0,24,4.59Z" />
                      </svg>
                    </div>
                  </a>

                  {/* LinkedIn */}
                  <a href="#" className="group">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                      <svg
                        className="h-5 w-5 text-blue-200 group-hover:text-white transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447,20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853,0-2.136,1.445-2.136,2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9,1.637-1.85,3.37-1.85,3.601,0,4.267,2.37,4.267,5.455v6.286zM5.337,7.433c-1.144,0-2.063-.926-2.063-2.065c0-1.138,.92-2.063,2.063-2.063c1.14,0,2.064,.925,2.064,2.063c0,1.139-.925,2.065-2.064,2.065zm1.782,13.019H3.555V9h3.564v11.452zM22.225,0H1.771C.792,0,0,.774,0,1.729v20.542C0,23.227,.792,24,1.771,24h20.451C23.2,24,24,23.227,24,22.271V1.729C24,.774,23.2,0,22.225,0z" />
                      </svg>
                    </div>
                  </a>

                  {/* Instagram */}
                  <a href="#" className="group">
                    <div className="bg-blue-500/20 p-3 rounded-full group-hover:bg-blue-500/30 transition duration-300">
                      <svg
                        className="h-5 w-5 text-blue-200 group-hover:text-white transition duration-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12,2.163c3.204,0,3.584.012,4.85.07,3.252.148,4.771,1.691,4.919,4.919.058,1.265.069,1.645.069,4.849,0,3.205-.012,3.584-.069,4.849-.149,3.225-1.664,4.771-4.919,4.919-1.266.058-1.644.07-4.85.07-3.204,0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849,0-3.204.013-3.583.07-4.849.149-3.227,1.664-4.771,4.919-4.919,1.266-.057,1.645-.069,4.849-.069zm0-2.163c-3.259,0-3.667.014-4.947.072-4.358.2-6.78,2.618-6.98,6.98-.059,1.281-.073,1.689-.073,4.948,0,3.259.014,3.668.072,4.948.2,4.358,2.618,6.78,6.98,6.98,1.281.058,1.689.072,4.948.072,3.259,0,3.668-.014,4.948-.072,4.354-.2,6.782-2.618,6.979-6.98.059-1.28.073-1.689.073-4.948,0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0,5.838c-3.403,0-6.162,2.759-6.162,6.162s2.759,6.163,6.162,6.163,6.162-2.759,6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0,10.162c-2.209,0-4-1.79-4-4,0-2.209,1.791-4,4-4s4,1.791,4,4c0,2.21-1.791,4-4,4zm6.406-11.845c-.796,0-1.441.645-1.441,1.44s.645,1.44,1.441,1.44c.795,0,1.439-.645,1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitContactWithInfo;
