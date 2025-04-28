import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      <AnimatePresence>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: `url(${slides[current].image})`,
          }}
        >
          {/* Text Content */}
          <div className="relative z-10 text-center text-white p-8 bg-black/40 rounded-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{slides[current].heading}</h2>
            <p className="text-lg md:text-xl mb-6">{slides[current].text}</p>
            <Button>Explore Now</Button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full text-2xl z-20"
      >
        <FaArrowLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 p-2 rounded-full text-2xl z-20"
      >
       <FaArrowRight />
      </button>
    </div>
  );
}
