import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/sections/hero/Logo.png";
import SkinType from "../../../../assets/signup/SkinAnalysis/SkinType.png";

const SkinTypeSelection = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;

  const [selectedSkinType, setSelectedSkinType] = useState("");
  const [selectedSensitivity, setSelectedSensitivity] = useState("");

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate(`/skin-goals/${skinType}`, {
      state: {
        ...userDetails,
        skinType: selectedSkinType,
        sensitivity: selectedSensitivity,
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8 relative">
        {/* Back button */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
          <div className="w-10"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center justify-center mr-4">
            <img src={SkinType} alt="User Icon" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-1 mt-4">
              What's your skin type?
            </h2>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-gray-600 mb-4">Select one</p>

          <div className="grid grid-cols-3 gap-3 mb-8">
            {["Normal", "Oily", "Dry"].map((type) => (
              <Button
                key={type}
                variant="outline"
                className={`py-3 px-4 rounded-full border-2 ${
                  selectedSkinType === type
                    ? "border-lime-500 bg-lime-50"
                    : "border-gray-300 bg-white"
                } text-gray-800 hover:bg-gray-100`}
                onClick={() => setSelectedSkinType(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3 mb-8">
            {["Combination", "I don't know"].map((type) => (
              <Button
                key={type}
                variant="outline"
                className={`py-3 px-4 rounded-full border-2 ${
                  selectedSkinType === type
                    ? "border-lime-500 bg-lime-50"
                    : "border-gray-300 bg-white"
                } text-gray-800 hover:bg-gray-100`}
                onClick={() => setSelectedSkinType(type)}
              >
                {type}
              </Button>
            ))}
          </div>

          <p className="text-gray-600 mb-4">Sensitive</p>

          <div className="grid grid-cols-3 gap-3">
            {["Yes", "No", "I don't know"].map((option) => (
              <Button
                key={option}
                variant="outline"
                className={`py-3 px-4 rounded-full border-2 ${
                  selectedSensitivity === option
                    ? "border-lime-500 bg-lime-50"
                    : "border-gray-300 bg-white"
                } text-gray-800 hover:bg-gray-100`}
                onClick={() => setSelectedSensitivity(option)}
              >
                {option}
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-auto mb-6">
          <Button
            onClick={handleContinue}
            disabled={!selectedSkinType || !selectedSensitivity}
            className="py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium mb-4 w-[186px] flex flex-col items-center mx-auto"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinTypeSelection;
