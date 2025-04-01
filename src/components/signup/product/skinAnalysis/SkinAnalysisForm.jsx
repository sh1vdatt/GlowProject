import React, { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/sections/hero/Logo.png";
import UserProfileContent from "../common/Details1A";
import SkinTypeContent from "../common/Details1B";
import SkinGoalsContent from "../common/Details1C";
import AllergiesQuestionContent from "../common/AllergyAndSensitivity2A";
import AllergiesSelectionContent from "../common/AllergyAndSensitivity2B";
import SkinConditionsContent from "../common/AllergyAndSensitivity2C";
import IngredientPreferencesContent from "../common/AllergyAndSensitivity2D";
import PrescribedSkincareContent from "../common/CurrentCondition3A";
import PregnancyQuestionContent from "../common/CurrentCondition3B";

const SkinAnalysisForm = ({
  skinType = "facial",
  withoutImage = false,
  onBack,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    monthOfBirth: "02",
    yearOfBirth: "2003",
    gender: "Female",
    location: "",
    skinType: skinType,

    sensitivity: "",

    skinGoals: [],

    hasAllergies: null,

    specificAllergies: [],
    otherAllergies: "",

    skinConditions: [],
    otherConditionDetails: "",

    ingredientPreferences: [],
    specificIngredientsToAvoid: "",

    usingPrescribedSkincare: null,
    prescribedSkincareDetails: "",

    pregnantOrBreastfeeding: null,

    withoutImage: withoutImage,
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      if (currentStep === 6 && formData.hasAllergies === "no") {
        setCurrentStep(4);
      } else {
        setCurrentStep(currentStep - 1);
      }
    } else if (onBack) {
      onBack();
    }
  };

  const handleContinue = () => {
    if (currentStep < 9) {
      if (currentStep === 4 && formData.hasAllergies === "no") {
        setCurrentStep(6); // Skip to skin conditions
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      // need to fix the function for result analysis and result display page
      console.log("Form completed!", formData);
    }
  };

  const getProgressStep = () => {
    if (currentStep <= 3) return 1;
    if (currentStep <= 7) return 2;
    return 3;
  };

  const isContinueDisabled = () => {
    switch (currentStep) {
      case 1: // User profile
        return !formData.gender || !formData.location;
      case 2: // Skin type
        return !formData.sensitivity;
      case 3: // Skin goals
        return formData.skinGoals.length === 0;
      case 4: // Allergies question
        return formData.hasAllergies === null;
      case 5: // Allergies selection
        return formData.hasAllergies && formData.specificAllergies.length === 0;
      case 6: // Skin conditions
        return formData.skinConditions.length === 0;
      case 7: // Ingredient preferences
        return formData.ingredientPreferences.length === 0;
      case 8: // Prescribed skincare
        return formData.usingPrescribedSkincare === null;
      case 9: // Pregnancy question
        return formData.pregnantOrBreastfeeding === null;
      default:
        return false;
    }
  };

  // Render progress indicators
  const renderProgressIndicators = () => {
    const currentProgress = getProgressStep();

    return (
      <div className="flex justify-center gap-2 mb-8">
        <div
          className={`w-8 h-8 rounded-full ${
            currentProgress >= 1 ? "bg-lime-200" : "bg-gray-200"
          } flex items-center justify-center`}
        >
          1
        </div>
        <div
          className={`w-8 h-8 rounded-full ${
            currentProgress >= 2 ? "bg-lime-200" : "bg-gray-200"
          } flex items-center justify-center`}
        >
          2
        </div>
        <div
          className={`w-8 h-8 rounded-full ${
            currentProgress >= 3 ? "bg-lime-200" : "bg-gray-200"
          } flex items-center justify-center`}
        >
          3
        </div>
      </div>
    );
  };

  // Render the current step's content
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <UserProfileContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 2:
        return (
          <SkinTypeContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <SkinGoalsContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <AllergiesQuestionContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <AllergiesSelectionContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 6:
        return (
          <SkinConditionsContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 7:
        return (
          <IngredientPreferencesContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 8:
        return (
          <PrescribedSkincareContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 9:
        return (
          <PregnancyQuestionContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8 relative overflow-y-auto">
        {/* Header with back button and logo */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
          <div className="w-10"></div>
        </div>

        {/* Progress indicators */}
        {renderProgressIndicators()}

        {/* Current step content */}
        {renderStepContent()}

        {/* Continue button */}
        <div className="mt-auto pt-4">
          <Button
            className="py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium mb-4 w-[186px] flex flex-col items-center mx-auto"
            onClick={handleContinue}
            disabled={isContinueDisabled()}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysisForm;
