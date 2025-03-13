import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Info } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import ingredient from "../../../../assets/signup/SkinAnalysis/ingredient.png";

const IngredientPreferencesForm = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;
  const [selectedPreferences, setSelectedPreferences] = useState([]);
  const [specificIngredients, setSpecificIngredients] = useState("");

  const preferencesList = [
    "I prefer fragrance-free products",
    "I prefer alcohol-free products",
    "I prefer vegan and cruelty-free products",
    "I avoid specific active ingredients",
    "None of the above",
  ];

  const handlePreferenceChange = (preference) => {
    if (preference === "None of the above") {
      if (selectedPreferences.includes(preference)) {
        setSelectedPreferences([]);
      } else {
        setSelectedPreferences(["None of the above"]);
      }
      return;
    }

    if (selectedPreferences.includes("None of the above")) {
      setSelectedPreferences([]);
    }

    if (selectedPreferences.includes(preference)) {
      setSelectedPreferences(
        selectedPreferences.filter((item) => item !== preference)
      );
    } else {
      setSelectedPreferences([...selectedPreferences, preference]);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate(`/prescribed-skincare/${skinType}`, {
      state: {
        ...userDetails,
        ingredientPreferences: selectedPreferences,
        specificIngredientsToAvoid: specificIngredients,
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8 relative overflow-y-auto">
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
            <div className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center mr-4">
              <img src={ingredient} alt="Skin Condition Icon" />
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
                    {selectedPreferences.includes(preference) && (
                      <div className="w-4 h-4 bg-lime-500 rounded-sm"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{preference}</span>
                </div>
              </div>

              {preference === "I avoid specific active ingredients" &&
                selectedPreferences.includes(preference) && (
                  <div className="mt-2 ml-9">
                    <input
                      type="text"
                      placeholder="Please specify"
                      value={specificIngredients}
                      onChange={(e) => setSpecificIngredients(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl bg-white"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Button
            className={`w-full h-12 rounded-xl font-medium ${
              selectedPreferences.length > 0
                ? "bg-lime-200 hover:bg-lime-300"
                : "bg-gray-200"
            } text-gray-800 transition-colors`}
            onClick={handleContinue}
            disabled={selectedPreferences.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default IngredientPreferencesForm;
