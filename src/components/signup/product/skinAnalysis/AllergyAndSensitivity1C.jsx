import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Info } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import skincondition from "../../../../assets/signup/SkinAnalysis/SkinCondition.png";

const SkinConditionsForm = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;
  const [otherCondition, setOtherCondition] = useState("");
  const [selectedConditions, setSelectedConditions] = useState([]);

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
      if (selectedConditions.includes(condition)) {
        setSelectedConditions([]);
      } else {
        setSelectedConditions(["None of the above"]);
      }
      return;
    }

    if (selectedConditions.includes("None of the above")) {
      setSelectedConditions([]);
    }

    if (selectedConditions.includes(condition)) {
      setSelectedConditions(
        selectedConditions.filter((item) => item !== condition)
      );
    } else {
      setSelectedConditions([...selectedConditions, condition]);
    }
  };

  const handleContinue = () => {
    navigate(`/next-step/${skinType}`, {
      state: {
        ...userDetails,
        skinConditions: selectedConditions,
        otherConditionDetails: otherCondition,
      },
    });
  };

  const handleBack = () => {
    navigate(-1);
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
              <img src={skincondition} alt="Skin Condition Icon" />
            </div>
            <h2 className="text-xl font-medium text-gray-800">
              Do you have any skin conditions or sensitivities we should be
              aware of?
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
                    {selectedConditions.includes(condition) && (
                      <div className="w-4 h-4 bg-lime-500 rounded-sm"></div>
                    )}
                  </div>
                  <span className="text-gray-800">{condition}</span>
                </div>
              </div>

              {condition === "Others" &&
                selectedConditions.includes("Others") && (
                  <div className="mt-2 ml-9">
                    <input
                      type="text"
                      placeholder="Please specify"
                      value={otherCondition}
                      onChange={(e) => setOtherCondition(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Button
            className={`w-full h-12 rounded-md font-medium ${
              selectedConditions.length > 0
                ? "bg-lime-200 hover:bg-lime-300"
                : "bg-gray-200"
            } text-gray-800 transition-colors`}
            onClick={handleContinue}
            disabled={selectedConditions.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinConditionsForm;
