import React from "react";
import { Button } from "../../../ui/button";
import Allergies from "../../../../assets/signup/SkinAnalysis/allergies1.png";

const AllergiesQuestionContent = ({ formData, updateFormData }) => {
  const { hasAllergies } = formData || {};

  const handleOptionSelect = (option) => {
    updateFormData({ hasAllergies: option });
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={Allergies} alt="allergy Icon" loading="lazy" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Do you have any known allergies to skincare ingredients?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            hasAllergies === "yes"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => handleOptionSelect("yes")}
        >
          Yes
        </Button>

        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            hasAllergies === "no"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => handleOptionSelect("no")}
        >
          No
        </Button>

        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            hasAllergies === "unknown"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
          onClick={() => handleOptionSelect("unknown")}
        >
          I don't know
        </Button>
      </div>
    </>
  );
};

export default AllergiesQuestionContent;
