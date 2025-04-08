import { IoIosArrowBack } from "react-icons/io";
import { MdOutlineLock } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { MdError, MdKeyboardArrowRight } from "react-icons/md";
import { RiFolderUploadLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useState } from "react";

const ComprehensiveLevel = () => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleItemClick = (itemId) => {
    console.log(`Item ${itemId} clicked`);
    // If Health Reports item is clicked (id: 1), unlock the upload functionality
    if (itemId === 1) {
      setIsUnlocked(true);
    }
  };

  const assessmentItems = [
    {
      id: 1,
      title: "Health Reports",
      completed: false,
      showWarning: isUnlocked,
    },
    { id: 2, title: "Skin Type", completed: true },
    { id: 3, title: "Skin Goals", completed: true },
    { id: 4, title: "Allergic to skincare ingredients", completed: true },
    { id: 5, title: "Skin conditions or sensitivities", completed: true },
    { id: 6, title: "Specific ingredient preferences", completed: true },
    { id: 7, title: "Pregnancy or Breastfeeding", completed: true },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex items-center p-4 relative">
          <Link to="/user-profile" className="absolute left-4">
            <IoIosArrowBack size={24} className="text-gray-800" />
          </Link>
          <h1 className="text-lg font-medium w-full text-center">
            Comprehensive level
          </h1>
        </div>

        <div className="flex flex-col px-6 pt-4 pb-8">
          <div className="text-center mb-6">
            <h2 className="text-xl font-medium text-gray-800 mb-4">
              Current comprehensive level
            </h2>
            <div className="text-6xl font-bold text-gray-800 mb-4">60%</div>
            <p className="text-gray-700 text-center">
              Upload health reports to get more personalized analysis for your
              skin health and product recommendation.
            </p>
          </div>

          {isUnlocked ? (
            <Link
              to="/health-report"
              className="flex items-center justify-center bg-orange-500 text-white rounded-xl py-3 mb-6"
            >
              <RiFolderUploadLine size={20} className="mr-2" />
              Upload health reports
            </Link>
          ) : (
            <div className="flex items-center justify-center bg-gray-500 text-white rounded-xl py-3 mb-6">
              <MdOutlineLock size={20} className="mr-2" />
              <span>Unlock to upload health reports</span>
            </div>
          )}

          {/* Divider */}
          <div className="border-t border-gray-300 my-2"></div>

          {/* Assessment Items */}
          <div className="flex flex-col">
            {assessmentItems.map((item) => (
              <div key={item.id} className="border-b border-gray-300 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {item.completed ? (
                      <FaCheckCircle
                        size={20}
                        className="text-green-500 mr-3"
                      />
                    ) : item.showWarning ? (
                      <MdError size={20} className="text-amber-500 mr-3" />
                    ) : (
                      <MdOutlineLock size={20} className="text-red-500 mr-3" />
                    )}
                    <span className="text-gray-800">{item.title}</span>
                  </div>
                  <button
                    onClick={() => handleItemClick(item.id)}
                    className="p-1 focus:outline-none"
                  >
                    <MdKeyboardArrowRight size={24} className="text-gray-500" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveLevel;
