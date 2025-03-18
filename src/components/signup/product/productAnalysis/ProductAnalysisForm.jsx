import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/sections/hero/Logo.png";
import UserProfileContent from "../common/Details1A";
import AllergiesQuestionContent from "../common/AllergyAndSensitivity2A";
import AllergiesSelectionContent from "../common/AllergyAndSensitivity2B";
import SkinConditionsContent from "../common/AllergyAndSensitivity2C";
import IngredientPreferencesContent from "../common/AllergyAndSensitivity2D";
import PregnancyQuestionContent from "../common/CurrentCondition3B";

const ProductAnalysisForm = ({
  productType = "facial",
  withoutImage = false,
  onBack,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    gender: "Female",
    location: "",
    productType: productType,
    sensitivity: "",
    hasAllergies: null,
    specificAllergies: [],
    otherAllergies: "",
    skinConditions: [],
    otherConditionDetails: "",
    ingredientPreferences: [],
    specificIngredientsToAvoid: "",
    pregnantOrBreastfeeding: null,
    withoutImage: withoutImage,
  });

  const updateFormData = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const handleContinue = () => {
    if (currentStep < 6) {
      if (currentStep === 2 && formData.hasAllergies === false) {
        setCurrentStep(4);
      } else {
        setCurrentStep(currentStep + 1);
      }
    } else {
      console.log("Form completed!", formData);
    }
  };

  const getProgressStep = () => {
    if (currentStep <= 1) return 1;
    if (currentStep <= 5) return 2;
    return 3;
  };

  const isContinueDisabled = () => {
    switch (currentStep) {
      case 1:
        return !formData.gender || !formData.location;
      case 2:
        return formData.hasAllergies === null;
      case 3:
        return formData.hasAllergies && formData.specificAllergies.length === 0;
      case 4:
        return formData.skinConditions.length === 0;
      case 5:
        return formData.ingredientPreferences.length === 0;
      case 6:
        return formData.pregnantOrBreastfeeding === null;
      default:
        return false;
    }
  };

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
          <AllergiesQuestionContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 3:
        return (
          <AllergiesSelectionContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 4:
        return (
          <SkinConditionsContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 5:
        return (
          <IngredientPreferencesContent
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      case 6:
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
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
          <div className="w-10"></div>
        </div>

        {renderProgressIndicators()}

        {renderStepContent()}

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

export default ProductAnalysisForm;
