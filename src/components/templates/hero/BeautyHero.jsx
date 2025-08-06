import { motion } from "framer-motion";

const BeautyHero = ({
  title = "Natural Beauty Essentials",
  subtitle = "Discover your natural glow",
  description = "Clean, effective skincare made with natural ingredients",
  primaryButtonText = "Shop Now",
  secondaryButtonText = "Learn More",
  primaryButtonLink = "/products",
  secondaryButtonLink = "/about",
  imageSrc = "https://images.unsplash.com/photo-1487412912498-0447578fcca8?auto=format&fit=crop&q=80",
  imageAlt = "Natural beauty products",
}) => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-neutral-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-gray-900">
              {title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-gray-600">
              {subtitle}
            </p>
            <p className="text-gray-600 max-w-lg">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={primaryButtonLink}
                className="inline-block px-8 py-3 bg-rose-200 text-gray-900 rounded-full text-center hover:bg-rose-300 transition-colors"
              >
                {primaryButtonText}
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={secondaryButtonLink}
                className="inline-block px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full text-center hover:bg-gray-900 hover:text-white transition-colors"
              >
                {secondaryButtonText}
              </motion.a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-[60vh] object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BeautyHero;
