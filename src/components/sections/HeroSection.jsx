import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import { FaArrowLeft ,FaArrowRight } from "react-icons/fa";

// Import images
import library1 from "../../assets/library.jpg";
import library2 from "../../assets/library2.jpg";
import library3 from "../../assets/library3.jpg";

const slides = [
  {
    image: library1,
    heading: "Welcome to Library",
    text: "Unlock Knowledge, Explore the World",
  },
  {
    image: library2,
    heading: "Expand Your Horizons",
    text: "Thousands of Books at Your Fingertips",
  },
  {
    image: library3,
    heading: "Read, Learn, Grow",
    text: "Join Our Reading Community Today",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 sec
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Text Content */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
            >
              {slides[current].heading}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 text-gray-100"
            >
              {slides[current].text}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link to="/about">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Explore Now
                </Button>
              </Link>
              <Link to="/enquiry">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-md font-medium text-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
                  Join Today
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Decorative Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
          >
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="text-2xl"
              >
                ↓
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 md:left-8 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 md:p-4 rounded-full text-xl md:text-2xl z-20 transition-all duration-300 hover:scale-110"
        aria-label="Previous slide"
      >
        <FaArrowLeft />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 md:right-8 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-3 md:p-4 rounded-full text-xl md:text-2xl z-20 transition-all duration-300 hover:scale-110"
        aria-label="Next slide"
      >
        <FaArrowRight />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
