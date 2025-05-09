import React from "react";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/sections/hero/Logo.png";

const ProductSelection = () => {
  const navigate = useNavigate();

  const handleSkinAnalysis = () => {
    navigate("/skin-area-selection");
  };

  const handleProductAnalysis = () => {
    navigate("/scan-product");
  };

  const handleAgeDetection = () => {
    navigate("/skin-age-analysis-flow");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8">
        <div className="mt-10 mb-12 text-center">
          <img src={Logo} alt="Project Glow" className="h-8 mx-auto" />
        </div>

        <div className="text-center mb-14">
          <h1 className="text-3xl font-semibold mb-4 text-gray-800">
            Choose Your Product
          </h1>
        </div>

        <div className="space-y-6 mb-8 flex flex-col items-center">
          <Button
            className="w-[289px] h-24 rounded-xl font-medium bg-lime-200 text-gray-800 hover:bg-lime-300 transition-colors flex flex-col"
            onClick={handleSkinAnalysis}
          >
            <span className="text-xl font-semibold mb-1">Skin Analysis</span>
            <span className="text-sm">Your skin secrets revealed.</span>
            <span className="text-sm">Just a click!</span>
          </Button>

          <Button
            className="w-[289px] h-24 rounded-xl font-medium bg-sky-200 text-gray-800 hover:bg-blue-300 transition-colors flex flex-col"
            onClick={handleProductAnalysis}
          >
            <span className="text-xl font-semibold mb-1">Product Analysis</span>
            <span className="text-sm">Product promise vs. reality?</span>
            <span className="text-sm">One scan tells all!</span>
          </Button>

          <Button
            className="w-[289px] h-24 rounded-xl font-medium bg-orange-200 text-gray-800 hover:bg-orange-300 transition-colors flex flex-col"
            onClick={handleAgeDetection}
          >
            <span className="text-xl font-semibold mb-1">Age Detection</span>
            <span className="text-sm">Curious about your facial skin age?</span>
            <span className="text-sm">Check it now!</span>
          </Button>
        </div>

        <div className="mt-auto text-center">
          <p className="text-sm text-gray-600 px-4">
            Project glow does not store any of the images you take ensuring
            complete privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSelection;
