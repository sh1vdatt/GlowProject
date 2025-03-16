import React from "react";
import skincondition from "../../../../assets/signup/SkinAnalysis/SkinCondition.png";

const SkinConditionsContent = ({ formData, updateFormData }) => {
  const { skinConditions = [], otherConditionDetails = "" } = formData || {};

  const conditionsList = [
    "Eczema",
    "Psoriasis",
    "Rosacea",
    "Frequent Allergic Reactions",
    "Others",
    "None of the above",
  ];

  const handleConditionChange = (condition) => {
    if (condition === "None of the above") {
      if (skinConditions.includes(condition)) {
        updateFormData({ skinConditions: [] });
      } else {
        updateFormData({ skinConditions: ["None of the above"] });
      }
      return;
    }

    let updatedConditions = [...skinConditions];

    if (updatedConditions.includes("None of the above")) {
      updatedConditions = [];
    }

    if (updatedConditions.includes(condition)) {
      updatedConditions = updatedConditions.filter(
        (item) => item !== condition
      );
    } else {
      updatedConditions = [...updatedConditions, condition];
    }

    updateFormData({ skinConditions: updatedConditions });
  };

  const handleOtherConditionChange = (value) => {
    updateFormData({ otherConditionDetails: value });
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={skincondition} alt="Skin Condition Icon" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Do you have any skin conditions or sensitivities we should be aware
            of?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {conditionsList.map((condition, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 border border-gray-300 flex items-center justify-center rounded cursor-pointer"
                  onClick={() => handleConditionChange(condition)}
                >
                  {skinConditions.includes(condition) && (
                    <div className="w-4 h-4 bg-lime-500 rounded-sm"></div>
                  )}
                </div>
                <span className="text-gray-800">{condition}</span>
              </div>
            </div>

            {condition === "Others" && skinConditions.includes("Others") && (
              <div className="mt-2 ml-9">
                <input
                  type="text"
                  placeholder="Please specify"
                  value={otherConditionDetails}
                  onChange={(e) => handleOtherConditionChange(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl bg-white"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default SkinConditionsContent;
