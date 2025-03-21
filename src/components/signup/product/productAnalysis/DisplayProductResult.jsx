import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import mythsData from "@/components/signup/product/common/skincare-myths.json";
import loading from "../../../../assets/signup/loading.png";
import result from "../../../../assets/signup/result.png";

const DisplayResultContent = ({ formData, updateFormData }) => {
  const navigate = useNavigate();
  const [isAnalysisComplete, setIsAnalysisComplete] = useState(false);
  const [selectedMyths, setSelectedMyths] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnalysisComplete(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

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

  const handleScroll = () => {
    if (carouselRef.current) {
      const scrollPosition = carouselRef.current.scrollLeft;
      const cardWidth = carouselRef.current.clientWidth;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  const cardColors = ["bg-pink-300", "bg-lime-300", "bg-sky-300"];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto mt-2 py-8 px-8 relative">
        <div className="flex items-center justify-between mb-6 mx-auto">
          <img src={Logo} alt="Project Glow" className="h-8" />
        </div>

        <div className="flex flex-col items-center mb-6">
          {!isAnalysisComplete ? (
            <>
              <div className="flex justify-center items-center mb-4">
                <img
                  src={loading}
                  alt="Loading..."
                  className="h-10  animate-pulse"
                />
              </div>
              <p className="text-xl font-medium text-gray-800">
                AI-Analysis in Progress
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center justify-center mb-2">
                <img src={result} alt="Analysis Complete" />
              </div>
              <div className="bg-lime-200 px-4 py-1.5 rounded-xl">
                <button
                  className="text-xl font-medium text-gray-800"
                  onClick={() => navigate("/product-analysis-result")}
                >
                  Your report is ready
                </button>
              </div>
            </>
          )}
        </div>

        <div className="flex-grow flex items-center px-4">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-hide w-full"
            onScroll={handleScroll}
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {selectedMyths.map((myth, index) => (
              <div
                key={myth.id}
                className={`${
                  cardColors[index % cardColors.length]
                } flex-shrink-0 w-full snap-center rounded-xl p-5 mx-1 first:ml-0 last:mr-0 relative flex flex-col items-center text-center min-h-[270px] flex-grow`}
              >
                <div className="flex justify-center mb-3">
                  <div className="flex space-x-1.5 mb-2">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === 0 ? "bg-gray-800" : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === 1 ? "bg-gray-800" : "bg-gray-400"
                      }`}
                    ></div>
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        index === 2 ? "bg-gray-800" : "bg-gray-400"
                      }`}
                    ></div>
                  </div>
                </div>
                <div className="">
                  <p className="text-xs text-gray-800 font-medium mb-4">
                    — Myth —
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-6">
                    {myth.title}
                  </h3>
                </div>
                <div className="mt-2">
                  <p className="text-base font-medium text-gray-800 mb-2">
                    Did you know?
                  </p>
                  <p className="text-sm text-gray-700">{myth.fact}</p>
                </div>
                <div className="absolute bottom-3 right-3">
                  <ChevronRight size={20} className="text-gray-800" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayResultContent;
