import React from "react";
import ingredient from "../../../../assets/signup/SkinAnalysis/ingredient.png";

const IngredientPreferencesContent = ({ formData, updateFormData }) => {
  const { ingredientPreferences = [], specificIngredientsToAvoid = "" } =
    formData || {};

  const preferencesList = [
    "I prefer fragrance-free products",
    "I prefer alcohol-free products",
    "I prefer vegan and cruelty-free products",
    "I avoid specific active ingredients",
    "None of the above",
  ];

  const handlePreferenceChange = (preference) => {
    if (preference === "None of the above") {
      if (ingredientPreferences.includes(preference)) {
        updateFormData({ ingredientPreferences: [] });
      } else {
        updateFormData({ ingredientPreferences: ["None of the above"] });
      }
      return;
    }

    let updatedPreferences = [...ingredientPreferences];

    if (updatedPreferences.includes("None of the above")) {
      updatedPreferences = [];
    }

    if (updatedPreferences.includes(preference)) {
      updatedPreferences = updatedPreferences.filter(
        (item) => item !== preference
      );
    } else {
      updatedPreferences = [...updatedPreferences, preference];
    }

    updateFormData({ ingredientPreferences: updatedPreferences });
  };

  const handleSpecificIngredientsChange = (value) => {
    updateFormData({ specificIngredientsToAvoid: value });
  };

  return (
    <>
      <div className="mb-8">
        <div className="flex items-start gap-4">
          <div className="flex items-center justify-center mr-4">
            <img src={ingredient} alt="Ingredient Icon" />
          </div>
          <h2 className="text-xl font-medium text-gray-800">
            Do you have any specific ingredient preferences or restrictions?
          </h2>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {preferencesList.map((preference, index) => (
          <div key={index}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div
                  className="w-6 h-6 border border-gray-300 flex items-center justify-center rounded cursor-pointer"
                  onClick={() => handlePreferenceChange(preference)}
                >
                  {ingredientPreferences.includes(preference) && (
                    <div className="w-4 h-4 bg-lime-500 rounded-sm"></div>
                  )}
                </div>
                <span className="text-gray-800">{preference}</span>
              </div>
            </div>

            {preference === "I avoid specific active ingredients" &&
              ingredientPreferences.includes(preference) && (
                <div className="mt-2 ml-9">
                  <input
                    type="text"
                    placeholder="Please specify"
                    value={specificIngredientsToAvoid}
                    onChange={(e) =>
                      handleSpecificIngredientsChange(e.target.value)
                    }
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

export default IngredientPreferencesContent;
