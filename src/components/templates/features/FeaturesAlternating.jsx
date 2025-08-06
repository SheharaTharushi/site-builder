import { motion } from "framer-motion";

const FeaturesAlternating = ({
  title = "Designed for Your Success",
  subtitle = "We've built powerful features that help you work smarter, not harder. Discover how our platform can transform your workflow.",
  features: providedFeatures,
}) => {
  const defaultFeatures = [
    {
      id: 1,
      title: "Intuitive Dashboard",
      description:
        "Our easy-to-use dashboard provides a complete overview of your project's performance. Track key metrics, analyze trends, and make data-driven decisions all in one place.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
      imageAlt: "Dashboard analytics interface",
      bulletPoints: [
        "Real-time data visualization",
        "Customizable widgets and layouts",
        "Export reports in multiple formats",
      ],
    },
    {
      id: 2,
      title: "Streamlined Collaboration",
      description:
        "Work seamlessly with your team members, no matter where they are. Our collaboration tools make it easy to share files, assign tasks, and communicate in real-time.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop",
      imageAlt: "Team collaboration session",
      bulletPoints: [
        "Integrated chat and messaging",
        "Task assignment and tracking",
        "Shared calendars and schedules",
      ],
    },
    {
      id: 3,
      title: "Enterprise-Grade Security",
      description:
        "Your data's security is our top priority. We use advanced encryption and security protocols to ensure that your information is always protected from unauthorized access.",
      image:
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",
      imageAlt: "Security encryption concept",
      bulletPoints: [
        "End-to-end encryption",
        "Regular security audits",
        "Compliance with industry standards",
      ],
    },
  ];

  // Use provided features or fallback to default
  const features =
    providedFeatures &&
    Array.isArray(providedFeatures) &&
    providedFeatures.length > 0
      ? providedFeatures
      : defaultFeatures;

  // Normalize features to ensure they have all required properties
  const normalizedFeatures = features.map((feature, index) => ({
    id: feature.id || index + 1,
    title: feature.title || "Untitled Feature",
    description: feature.description || "No description available",
    subDescription: feature.subDescription || "",
    image:
      feature.imageUrl ||
      feature.image ||
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop",
    imageAlt: feature.imageAlt || feature.title || "Feature image",
    learnMoreUrl: feature.learnMoreUrl || "#",
    bulletPoints:
      feature.bulletPoints ||
      (feature.description ? [feature.description] : ["Feature description"]),
  }));

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">
            Key Features
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        <div className="space-y-24">
          {normalizedFeatures.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } items-center gap-12 lg:gap-16`}
            >
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={feature.image}
                    alt={feature.imageAlt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  {feature.description}
                </p>
                {feature.subDescription && (
                  <p className="text-md text-gray-500 mb-6">
                    {feature.subDescription}
                  </p>
                )}
                {feature.learnMoreUrl && (
                  <a
                    href={feature.learnMoreUrl}
                    className="inline-flex items-center text-primary hover:text-primary-dark font-semibold transition-colors"
                  >
                    Learn More
                    <svg
                      className="ml-2 w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesAlternating;
