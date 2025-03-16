import React from "react";
import { Info } from "lucide-react";
import Allergies from "../../../../assets/signup/SkinAnalysis/allergies2.png";

const AllergiesSelectionContent = ({ formData, updateFormData }) => {
  const { specificAllergies = [], otherAllergies = "" } = formData || {};

  const allergiesList = [
    "Alpha-Hydroxy Acids (AHAs)",
    "BHAs",
    "Essential Oils",
    "Fragrance or Perfumes",
    "Formaldehyde",
    "Hydroquinone",
    "Lanolin",
    "Nickel",
    "Preservatives",
    "Retinoids or Retinol",
    "Sunscreen Ingredients",
    "Sulfates",
    "Others (Please specify)",
    "I'm not sure about any of these",
  ];

  const handleAllergiesChange = (allergy) => {
    if (specificAllergies.includes(allergy)) {
      updateFormData({
        specificAllergies: specificAllergies.filter((item) => item !== allergy),
      });
    } else {
      updateFormData({
        specificAllergies: [...specificAllergies, allergy],
      });
    }
  };

  const handleOtherAllergiesChange = (value) => {
    updateFormData({ otherAllergies: value });
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={Allergies} alt="Allergies Icon" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Are you allergic to any of these common skincare ingredients?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {allergiesList.map((allergy, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 border border-gray-300 flex items-center justify-center rounded cursor-pointer"
                  onClick={() => handleAllergiesChange(allergy)}
                >
                  {specificAllergies.includes(allergy) && (
                    <div className="w-4 h-4 bg-lime-500 rounded-sm"></div>
                  )}
                </div>
                <span className="text-gray-800">{allergy}</span>
              </div>
              <button className="text-gray-400">
                <Info size={16} />
              </button>
            </div>

            {allergy === "Others (Please specify)" &&
              specificAllergies.includes(allergy) && (
                <div className="mt-2 ml-9">
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={otherAllergies}
                    onChange={(e) => handleOtherAllergiesChange(e.target.value)}
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

export default AllergiesSelectionContent;
