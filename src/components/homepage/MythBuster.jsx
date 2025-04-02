import { useState, useEffect, useRef } from "react";
import mythsData from "@/components/signup/product/common/skincare-myths.json";

const MythBuster = () => {
  const [selectedMyths, setSelectedMyths] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  // Selecting random myths on component mount
  useEffect(() => {
    const selectRandomMyths = () => {
      if (!mythsData.myths || !Array.isArray(mythsData.myths)) {
        console.error("mythsData.myths is not an array:", mythsData);
        return [];
      }

      const shuffled = [...mythsData.myths];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled.slice(0, 3);
    };

    setSelectedMyths(selectRandomMyths());
  }, []);

  useEffect(() => {
    const autoSwipeInterval = setInterval(() => {
      if (carouselRef.current && selectedMyths.length > 0) {
        const nextIndex = (activeIndex + 1) % selectedMyths.length;
        const cardWidth = carouselRef.current.clientWidth;

        carouselRef.current.scrollTo({
          left: nextIndex * cardWidth,
          behavior: "smooth",
        });

        setActiveIndex(nextIndex);
      }
    }, 2500);

    return () => clearInterval(autoSwipeInterval);
  }, [activeIndex, selectedMyths.length]);

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  if (selectedMyths.length === 0) {
    return (
      <section className="bg-pink-100 rounded-xl mx-4 my-4 overflow-hidden mb-10">
        <div className="text-center py-8">
          <p>Loading myths...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-pink-100 rounded-xl mx-4 my-4 overflow-hidden mb-10">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="h-px w-8 bg-gray-400 mr-2"></div>
          <h3 className="text-xl font-bold text-gray-800 mt-1">Myth buster</h3>
          <div className="h-px w-8 bg-gray-400 ml-2"></div>
        </div>

        <div className="relative">
          {/* Carousel indicator dots */}
          <div className="flex justify-center mb-3">
            <div className="flex space-x-1.5 mb-2">
              {selectedMyths.map((_, index) => (
                <div
                  key={index}
                  className={`w-1.5 h-1.5 rounded-full ${
                    activeIndex === index ? "bg-gray-800" : "bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div
            ref={carouselRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide w-full"
            onScroll={handleScroll}
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              scrollSnapType: "x mandatory",
            }}
          >
            {selectedMyths.map((myth) => (
              <div
                key={myth.id}
                className="flex-shrink-0 w-full snap-center px-4 mx-1 first:ml-0 last:mr-0"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {myth.title}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <button className="text-base text-gray-700 mb-4 hover:underline">
          Did you know?
        </button>
      </div>
    </section>
  );
};

export default MythBuster;
