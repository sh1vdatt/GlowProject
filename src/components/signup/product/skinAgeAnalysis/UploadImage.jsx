import React from "react";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import { Menu, Globe, Scan, Camera } from "lucide-react";

const UploadPhoto = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-300">
      <div className="w-full max-w-md bg-white flex flex-col min-h-screen mx-auto py-8 px-6 relative">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <div className="text-black font-bold text-xl">
              <img src={Logo} alt="Logo" className="h-10" />
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-800">
              <Menu size={24} />
            </button>
            <button className="text-gray-800">
              <Globe size={24} />
            </button>
            <button className="text-gray-800">
              <Scan size={24} />
            </button>
          </div>
        </div>{" "}
        {/* <-- Missing closing div fixed here */}
        {/* Main content */}
        <div className="flex flex-col items-center justify-center flex-grow gap-4">
          {/* Upload icon */}
          <div className="flex flex-col items-center justify-center gap-4">
            {/* Upload button inside a circular container */}
            <Button className="w-16 h-16 bg-purple-400 hover:bg-purple-500 text-white rounded-full flex items-center justify-center">
              <Upload className="w-6 h-6" />
            </Button>
          </div>

          {/* Upload text */}
          <h2 className="text-3xl font-medium text-purple-400 mb-1">
            Upload Photo
          </h2>
          <p className="text-gray-600 mb-2">Tap to select image</p>

          {/* Take selfie button */}
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
