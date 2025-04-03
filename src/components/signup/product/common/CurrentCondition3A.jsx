import React from "react";
import { Button } from "@/components/ui/button";
import prescribtion from "../../../../assets/signup/SkinAnalysis/prescribtion.png";

const PrescribedSkincareContent = ({ formData, updateFormData }) => {
  const { usingPrescribedSkincare = null, prescribedSkincareDetails = "" } =
    formData;

  const handleOptionSelect = (option) => {
    updateFormData({ usingPrescribedSkincare: option });
  };

  const handleSpecificationChange = (e) => {
    updateFormData({ prescribedSkincareDetails: e.target.value });
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={prescribtion} alt="Skin Condition Icon" loading="lazy" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Are you currently using any prescribed or medicated skincare
            products?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            usingPrescribedSkincare === "yes"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
          }`}
          onClick={() => handleOptionSelect("yes")}
        >
          Yes
        </Button>

        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            usingPrescribedSkincare === "no"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
          }`}
          onClick={() => handleOptionSelect("no")}
        >
          No
        </Button>

        <div className="mt-6">
          <p className="text-gray-700 mb-2">
            Please specify if comfortable (Optional)
          </p>
          <input
            type="text"
            placeholder="Specify here"
            className="w-full p-4 border border-gray-300 rounded-xl bg-white"
            value={prescribedSkincareDetails}
            onChange={handleSpecificationChange}
          />
        </div>
      </div>
    </>
  );
};

export default PrescribedSkincareContent;
