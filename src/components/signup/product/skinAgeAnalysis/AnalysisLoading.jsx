import React, { useEffect, useState } from "react";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import Logo from "../../../../assets/sections/hero/Logo.png";

const SkinAgeLoading = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalDots = 8;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % totalDots);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen mx-auto py-8 px-6 relative">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="text-black font-bold text-xl">
              <img src={Logo} alt="Logo" className="h-10" />
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-800">
              <LuMenu size={24} />
            </button>
            <button className="text-gray-800">
              <FaGlobeAsia size={24} />
            </button>
            <button className="text-gray-800">
              <MdOutlineDocumentScanner size={24} />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center flex-grow">
          <h2 className="text-3xl font-medium text-purple-400 mb-12 px-10">
            Time to unveil your skin age surprise?
          </h2>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {[...Array(totalDots)].map((_, index) => (
              <div
                key={index}
                className={`w-8 h-8 rounded-full transition-all duration-300 ${
                  index % 2 === 0 ? "bg-lime-200" : "bg-purple-400"
                } ${
                  activeIndex === index ? "scale-125 opacity-100" : "opacity-60"
                }`}
              />
            ))}
          </div>

          <p className="text-gray-800 text-lg font-medium">
            Skin Age Analysis in Progress
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinAgeLoading;
