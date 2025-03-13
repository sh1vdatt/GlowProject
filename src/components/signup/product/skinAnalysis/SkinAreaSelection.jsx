import React from "react";
import { Button } from "../../../ui/button";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const SkinAreaSelection = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img
              src="src/assets/sections/hero/Logo.png"
              alt="Project Glow"
              className="h-8"
            />
          </div>
          <div className="w-10"></div>
        </div>

        <div className="text-center mt-6 mb-8">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Select skin area for analysis
          </h1>
          <p className="text-gray-700 px-4">
            We analyze your skin to recommend ingredients tailored to your
            unique needs, no more one-size-fits-all routines.
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8 mt-[60px]">
          <Button className="w-[150px] h-40 rounded-xl bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors border border-gray-200 flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                src="src/assets/signup/face.png"
                alt="Facial Skin"
                className="h-20 w-20"
              />
            </div>
            <span className="text-xl font-semibold">Facial Skin</span>
          </Button>

          <Button className="w-[150px] h-40 rounded-xl bg-gray-50 text-gray-800 hover:bg-gray-100 transition-colors border border-gray-200 flex flex-col justify-center items-center">
            <div className="mb-2">
              <img
                src="src/assets/signup/back.png"
                alt="Body Skin"
                className="h-20 w-20"
              />
            </div>
            <span className="text-xl font-semibold">Body Skin</span>
          </Button>
        </div>

        <div className="mt-auto text-center">
          <p className="text-sm text-gray-600 px-4">
            Project Glow does not store any of the images you take, ensuring
            complete privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkinAreaSelection;
