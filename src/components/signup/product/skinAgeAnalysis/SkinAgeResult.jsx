import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "../../../../assets/sections/hero/Logo.png";
import { Share2 } from "lucide-react";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";

import Photo from "../../../../assets/signup/SkinAgeAnalysis/demo-result.jpg";

const SkinAgeResults = ({ onBack }) => {
  const handleUploadNewPhoto = () => {
    onBack();
  };

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

        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          <h2 className="text-3xl font-medium text-purple-400 mb-4">
            Your Skin Age Result:
          </h2>

          <div className="rounded-3xl overflow-hidden mb-4 w-full max-w-sm relative">
            <img src={Photo} alt="Skin age result" className="w-full h-auto" />
          </div>

          <p className="text-center text-gray-800 mb-4">
            Feeling like another round or want to spread the fun with friends?
          </p>

          {/* Action buttons */}
          <Button
            onClick={handleUploadNewPhoto}
            className="w-64 h-12 rounded-full font-medium bg-lime-200 hover:bg-lime-300 text-gray-800 mb-3"
          >
            Upload New Photo
          </Button>

          <Button className="w-64 h-12 rounded-full font-medium bg-lime-200 hover:bg-lime-300 text-gray-800 flex items-center justify-center gap-2">
            <Share2 size={18} />
            Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinAgeResults;
