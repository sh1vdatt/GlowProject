import React from "react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import pregnant from "../../../../assets/signup/SkinAnalysis/pregnant.png";

const PregnancyQuestionContent = ({ formData, updateFormData }) => {
  const { pregnantOrBreastfeeding = null } = formData;
  const navigate = useNavigate();

  const handleOptionSelect = (option) => {
    updateFormData({ pregnantOrBreastfeeding: option });
    navigate("/display-result");
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={pregnant} alt="Skin Condition Icon" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Are you pregnant or breastfeeding?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            pregnantOrBreastfeeding === "yes"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
          }`}
          onClick={() => handleOptionSelect("yes")}
        >
          Yes
        </Button>

        <Button
          className={`w-full py-4 rounded-full text-center transition ${
            pregnantOrBreastfeeding === "no"
              ? "bg-blue-600 text-white"
              : "bg-white text-gray-800 hover:bg-gray-100 border border-gray-300"
          }`}
          onClick={() => handleOptionSelect("no")}
        >
          No
        </Button>
      </div>
    </>
  );
};

export default PregnancyQuestionContent;
