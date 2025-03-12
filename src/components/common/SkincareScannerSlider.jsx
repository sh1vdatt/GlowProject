import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import slide1 from "../../assets/sections/discover/1slide.png";
import slide2Main from "../../assets/sections/discover/2SlideA.png";
import slide2Badge from "../../assets/sections/discover/2SlideB.png";
import slide2Summary from "../../assets/sections/discover/2SlideC.png";
import slide3b from "../../assets/sections/discover/3SlideA.png";
import slide3a from "../../assets/sections/discover/3SlideB.png";
import slide4 from "../../assets/sections/discover/4SlideA.png";
import slide4b from "../../assets/sections/discover/4SlideB.png";
import slide5 from "../../assets/sections/discover/5Slide.gif";

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

export function SkincareScannerSlider() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 5;

  const slides = [
    {
      id: 1,
      title: "1. Snap Your Product Labels",
      content:
        "Quickly capture your skincare labels with your device and get instant feedback on ingredients and their effects. It's like having a skincare genie in your pocket, helping you make smart choices for your glowing skin!",
      src: slide1,
      altText: "Phone showing skincare product label scanning",
      overlays: [],
    },
    {
      id: 2,
      title: "2. Peek Before You Pamper: Know Your Product Before You Apply",
      content:
        "Grab your fun-filled report! It includes your skincare product's score and a neat summary analysis, helping you figure out just how right it is for your skin care needs.",
      src: slide2Main,
      altText: "Phone showing scan result",
      overlays: [
        {
          type: "image",
          src: slide2Badge,
          alt: "Product score badge",
          className: "",
          imageClassName:
            "w-[250px] h-[76px] absolute bottom-[81px] -left-[60px] rounded-xl shadow-md",
        },
        {
          type: "image",
          src: slide2Summary,
          alt: "Product summary",
          imageClassName:
            "w-[300px] h-[86px] absolute -bottom-[8px] left-[20px] rounded-xl shadow-md",
        },
      ],
    },
    {
      id: 3,
      title: "3. Peep your product's ingredient analysis now",
      content:
        "Discover the secrets behind your favorite products with our ingredient analysis. See what works for your skin and what might not be ideal for your specific needs.",
      src: slide3b,
      imageClassName: "w-[280px] h-[407px]",
      altText: "Ingredient analysis card",
      overlays: [
        {
          type: "image",
          src: slide3a,
          alt: "More ingredient details",
          imageClassName:
            "w-[280px] h-[409px] absolute -top-[145px] -left-[260px] transform translate-x-[50%] rounded-xl shadow-md",
        },
      ],
    },
    {
      id: 4,
      title: "4. Find Your Perfect Match!",
      content:
        "Get personalized product suggestions that cater specifically to your needs, ensuring you effortlessly discover the ideal skincare goodies that align with your preferences and enhance your beauty routine.",
      src: slide4,
      altText: "Phone showing skincare product matching",
      overlays: [
        {
          type: "image",
          src: slide4b,
          alt: "Product recommendations",
          imageClassName:
            "w-[204px] h-[320px] absolute bottom-[14px] -right-[100px] rounded-xl shadow-md",
        },
      ],
    },
    {
      id: 5,
      title: "5. Share the result with your favourite people",
      content:
        "See how you can effortlessly share the product analysis with your friends and family! What you waiting for?",
      src: slide5,
      altText: "Phone showing sharing skincare analysis",
      overlays: [],
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
    <section className="py-16 flex flex-col md:flex-row gap-8 items-center">
      <div className="md:w-1/2">
        <div className="relative mx-auto w-[280px] h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-[280px] h-auto"
            >
              {currentSlide.src && (
                <img
                  src={currentSlide.src}
                  alt={currentSlide.altText}
                  className="w-full h-full object-cover rounded-[32px]"
                />
              )}

              <AnimatePresence>
                {currentSlide.overlays &&
                  currentSlide.overlays.map((overlay, index) => (
                    <motion.img
                      key={`${activeSlide}-overlay-${index}`}
                      src={overlay.src}
                      alt={overlay.alt}
                      className={overlay.imageClassName}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    />
                  ))}
              </AnimatePresence>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="md:w-1/2 mt-8 ">
        {activeSlide === 0 && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-marbley text-purple-400 mb-6"
          >
            Curious about how the
            <br />
            skincare product scanner
            <br />
            works its magic? ✨🔍
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
        <div className="flex items-center gap-4 mt-4">
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
