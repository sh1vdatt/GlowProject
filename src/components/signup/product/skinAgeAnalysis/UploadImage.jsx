import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { FaGlobeAsia } from "react-icons/fa";
import { LuMenu } from "react-icons/lu";
import { Camera } from "lucide-react";

const UploadPhoto = ({ onNext }) => {
  const handleUpload = () => {
    onNext();
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
        </div>{" "}
        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          <div className="flex flex-col items-center justify-center gap-4">
            <Button
              onClick={handleUpload}
              className="w-16 h-16 bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center justify-center"
            >
              <Upload className="w-6 h-6" />
            </Button>
          </div>

          <h2 className="text-3xl font-medium text-purple-400 mb-1">
            Upload Photo
          </h2>
          <p className="text-gray-600 mb-2">Tap to select image</p>

          <Button className="w-64 h-12 rounded-full font-medium bg-lime-200 hover:bg-lime-300 text-gray-800 flex items-center justify-center gap-2">
            <Camera />
            Take a Selfie
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
