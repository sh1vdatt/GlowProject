import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slide3A from "../../assets/sections/SkinAnalysisSlider/3SlideA.png";
import slide3B from "../../assets/sections/SkinAnalysisSlider/3SlideB.png";
import slide4A from "../../assets/sections/SkinAnalysisSlider/4SlideA.png";
import slide4B from "../../assets/sections/SkinAnalysisSlider/4SlideB.png";
import Slide1 from "../../assets/sections/SkinAnalysisSlider/1Slide.png";
import Slide2 from "../../assets/sections/SkinAnalysisSlider/2Slide.png";

function SliderNavigation({ activeSlide, totalSlides, onPrev, onNext }) {
  return (
    <div className="flex gap-2">
      <button
        onClick={onPrev}
        disabled={activeSlide === 0}
        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
          activeSlide === 0
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-lime-100 hover:bg-lime-200"
        }`}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={onNext}
        disabled={activeSlide === totalSlides - 1}
        className={`h-10 w-10 rounded-full flex items-center justify-center transition-all ${
          activeSlide === totalSlides - 1
            ? "bg-gray-300 cursor-not-allowed"
            : "bg-lime-100 hover:bg-lime-200"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}

export function SkinAnalysisSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  const slides = [
    {
      id: 1,
      title: "1. Upload Your Photos or Take a Snap",
      content:
        "Beauty and Brains! Our AI, trained on over 75,000 images, uses its smarty-pants tech to analyze your skin with 99% accuracy.",
      src: Slide1,
      altText: "Phone showing photo upload interface",
    },
    {
      id: 2,
      title: "1. Get Your Personalized Skin Analysis",
      content:
        "Our AI examines multiple aspects of your skin including texture, tone, spots, wrinkles, and more to provide a comprehensive analysis of your skin's current condition.",
      src: Slide2,
      altText: "Phone showing skin analysis results",
    },
    {
      id: 3,
      title: "2. Discover Your Skin's Needs",
      content:
        "Based on your analysis, we'll identify your skin's specific needs and concerns, helping you understand exactly what your skin requires for optimal health.",
      src: slide3A,
      altText: "Phone showing skin needs assessment",
      overlays: [
        {
          type: "image",
          src: slide3B,
          alt: "Skin needs assessment",
          className: "",
          imageClassName:
            "w-[200px] h-[247px] absolute bottom-[24px] -left-[180px] rounded-xl ",
        },
      ],
    },
    {
      id: 4,
      title: "3. Get Tailored Product Recommendations",
      content:
        "Receive personalized product recommendations based on your skin analysis, ensuring you get the most effective products for your unique skin needs.",
      src: slide4A,
      altText: "Phone showing product recommendations",
      overlays: [
        {
          type: "image",
          src: slide4B,
          alt: "Product recommendations",
          className: "",
          imageClassName:
            "w-[180px] h-[310px] absolute bottom-[32px] -left-[160px] rounded-xl ",
        },
      ],
    },
  ];

  const nextSlide = () => {
    if (activeSlide < totalSlides - 1) {
      setActiveSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
  };

  const currentSlide = slides[activeSlide];

  return (
    <section className="py-16 flex flex-col md:flex-row-reverse gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-[280px] h-auto"
            >
              <img
                src={currentSlide.src}
                alt={currentSlide.altText}
                className="object-cover w-full h-full rounded-[32px]"
                loading="lazy"
              />

              <AnimatePresence>
                {currentSlide.overlays &&
                  currentSlide.overlays.map((overlay, index) => (
                    <motion.img
                      key={`${activeSlide}-overlay-${index}`}
                      src={overlay.src}
                      alt={overlay.alt}
                      className={overlay.imageClassName}
                      loading="lazy"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="md:w-1/2">
        {activeSlide === 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6"
          >
            How does our fabulous
            <br />
            facial and body skin
            <br />
            analysis work? ✨
          </motion.h2>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h3 className="text-xl text-purple-400 mb-4 font-schibsted">
              {currentSlide.title}
            </h3>
            <p className="text-gray-700 font-schibsted leading-relaxed">
              {currentSlide.content}
            </p>
          </motion.div>
        </AnimatePresence>
        <div className="flex items-center gap-4">
          <SliderNavigation
            activeSlide={activeSlide}
            totalSlides={totalSlides}
            onPrev={prevSlide}
            onNext={nextSlide}
          />
        </div>
      </div>
    </section>
  );
}

export default SkinAnalysisSlider;
