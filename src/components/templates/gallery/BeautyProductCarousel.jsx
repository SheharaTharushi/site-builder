import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BeautyProductCarousel = ({
  title = "Our Products",
  subtitle = "Discover our collection",
  products = [
    {
      id: "product-1",
      name: "Rose Glow Serum",
      description: "Hydrating facial serum with rose extract",
      price: "$45.00",
      image:
        "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80",
    },
    {
      id: "product-2",
      name: "Natural Clay Mask",
      description: "Purifying mask with kaolin clay and botanical extracts",
      price: "$35.00",
      image:
        "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&q=80",
    },
    {
      id: "product-3",
      name: "Vitamin C Brightening Cream",
      description: "Illuminating moisturizer with stable vitamin C",
      price: "$52.00",
      image:
        "https://images.unsplash.com/photo-1570194065650-d99fb4b8271e?auto=format&fit=crop&q=80",
    },
    {
      id: "product-4",
      name: "Hyaluronic Acid Serum",
      description: "Deep hydration serum for plump, dewy skin",
      price: "$48.00",
      image:
        "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&q=80",
    },
    {
      id: "product-5",
      name: "Green Tea Toner",
      description: "Refreshing toner with antioxidant properties",
      price: "$28.00",
      image:
        "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80",
    },
  ],
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Reset currentIndex if it's out of bounds after products change
  React.useEffect(() => {
    if (products && products.length > 0 && currentIndex >= products.length) {
      setCurrentIndex(0);
    }
  }, [products, currentIndex]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection) => {
    if (!products || products.length === 0) return;

    setDirection(newDirection);
    const newIndex =
      (currentIndex + newDirection + products.length) % products.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-xl text-gray-500">{subtitle}</p>
        </div>

        <div className="mt-16 relative h-[400px]">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={products[currentIndex].id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
              className="absolute w-full"
            >
              <div className="flex items-center justify-center">
                <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-2xl">
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <img
                        className="h-48 w-full object-cover md:h-full md:w-48"
                        src={products[currentIndex].image}
                        alt={products[currentIndex].name}
                      />
                    </div>
                    <div className="p-8">
                      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                        {products[currentIndex].price}
                      </div>
                      <a
                        href="#"
                        className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
                      >
                        {products[currentIndex].name}
                      </a>
                      <p className="mt-2 text-gray-500">
                        {products[currentIndex].description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            className="absolute top-1/2 left-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 cursor-pointer z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => paginate(-1)}
            aria-label="Previous product"
          >
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            className="absolute top-1/2 right-4 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 cursor-pointer z-10 w-10 h-10 flex items-center justify-center"
            onClick={() => paginate(1)}
            aria-label="Next product"
          >
            <svg
              className="w-6 h-6 text-gray-800"
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
          </button>

          {/* Navigation Dots */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {products.map((_, index) => (
              <button
                key={`dot-${index}`}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-indigo-500" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeautyProductCarousel;
