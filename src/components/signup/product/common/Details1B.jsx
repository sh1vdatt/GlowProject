import React from "react";
import { Button } from "../../../ui/button";
import SkinType from "../../../../assets/signup/SkinAnalysis/SkinType.png";

const SkinTypeContent = ({ formData, updateFormData }) => {
  const { skinType = "", sensitivity = "" } = formData;

  const handleSkinTypeChange = (type) => {
    updateFormData({ skinType: type });
  };

  const handleSensitivityChange = (option) => {
    updateFormData({ sensitivity: option });
  };

  return (
    <>
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
                skinType === type
                  ? "border-lime-500 bg-lime-50"
                  : "border-gray-300 bg-white"
              } text-gray-800 hover:bg-gray-100`}
              onClick={() => handleSkinTypeChange(type)}
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
                skinType === type
                  ? "border-lime-500 bg-lime-50"
                  : "border-gray-300 bg-white"
              } text-gray-800 hover:bg-gray-100`}
              onClick={() => handleSkinTypeChange(type)}
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
                sensitivity === option
                  ? "border-lime-500 bg-lime-50"
                  : "border-gray-300 bg-white"
              } text-gray-800 hover:bg-gray-100`}
              onClick={() => handleSensitivityChange(option)}
            >
              {option}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default SkinTypeContent;
