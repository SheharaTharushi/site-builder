import React from "react";
import { motion } from "framer-motion";

const ValuePoint = ({ icon, title, description }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    whileHover={{ scale: 1.05 }}
    className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all"
  >
    <div className="text-3xl text-rose-400 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const BeautyAbout = ({
  title = "Our Story",
  subtitle = "Beauty with Purpose",
  description = "Founded with a passion for natural beauty, we believe in creating products that enhance your natural radiance while being kind to your skin and the environment.",
  imageSrc = "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80",
  imageAlt = "Our natural ingredients",
  valuePoints: providedValuePoints,
}) => {
  // Use provided value points or fallback to defaults
  const valuePoints = providedValuePoints || [
    {
      icon: "🌿",
      title: "Natural Ingredients",
      description:
        "We use only the finest natural ingredients, sourced responsibly from around the world.",
    },
    {
      icon: "🐰",
      title: "Cruelty-Free",
      description:
        "All our products are cruelty-free and never tested on animals.",
    },
    {
      icon: "🌍",
      title: "Eco-Friendly",
      description:
        "Our packaging is sustainable and environmentally conscious.",
    },
    {
      icon: "👩‍⚕️",
      title: "Dermatologist Tested",
      description:
        "All products are tested and approved by certified dermatologists.",
    },
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-light text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600">{subtitle}</p>
        </motion.div>

        {/* Main content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-8 leading-relaxed">{description}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
          </motion.div>
        </div>

        {/* Value Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {valuePoints.map((point, index) => (
            <ValuePoint
              key={index}
              icon={point.icon}
              title={point.title}
              description={point.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyAbout;
