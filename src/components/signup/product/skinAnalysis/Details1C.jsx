import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import Logo from "../../../../assets/sections/hero/Logo.png";
import mirror from "../../../../assets/signup/SkinAnalysis/mirror.png";
import ClearSkin from "../../../../assets/signup/SkinAnalysis/ClearSkin.png";
import Youthful from "../../../../assets/signup/SkinAnalysis/youthful.png";
import Hydration from "../../../../assets/signup/SkinAnalysis/hydration.png";
import Soothing from "../../../../assets/signup/SkinAnalysis/soothing.png";
import Pore from "../../../../assets/signup/SkinAnalysis/pore.png";
import Environmental from "../../../../assets/signup/SkinAnalysis/environmental.png";

const SkinGoalsSelection = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;
  const [selectedGoals, setSelectedGoals] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate(`/allergies/${skinType}`, {
      state: {
        ...userDetails,
        skinGoals: selectedGoals,
      },
    });
  };

  const skinGoals = [
    {
      id: 1,
      title: "Clear and Smooth Skin",
      description:
        "Covers acne, breakouts, scars, pigmentation, and uneven texture.",
      icon: ClearSkin,
    },
    {
      id: 2,
      title: "Youthful Appearance",
      description: "Focuses on fine lines, wrinkles, sagging, and firming.",
      icon: Youthful,
    },
    {
      id: 3,
      title: "Hydration and Radiance",
      description: "Addresses dryness, dullness, and achieving glowing skin.",
      icon: Hydration,
    },
    {
      id: 4,
      title: "Soothing and Protection",
      description:
        "Includes redness, sensitivity, rosacea, and barrier repair.",
      icon: Soothing,
    },
    {
      id: 5,
      title: "Pore and Oil Control",
      description: "Targets excess oil, clogged pores, and enlarged pores.",
      icon: Pore,
    },
    {
      id: 6,
      title: "Environmental Defense",
      description:
        "Protects against sun damage, pollution, and premature aging.",
      icon: Environmental,
    },
  ];

  const toggleGoal = (goalId) => {
    if (selectedGoals.includes(goalId)) {
      setSelectedGoals(selectedGoals.filter((id) => id !== goalId));
    } else {
      setSelectedGoals([...selectedGoals, goalId]);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-6 overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center justify-center mr-4">
            <img src={mirror} alt="Mirror Icon" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              What's your skin goals?
            </h2>
            <p className="text-gray-600">You can select multiple goals.</p>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          {skinGoals.map((goal) => (
            <button
              key={goal.id}
              className={`w-full p-4 rounded-lg border border-gray-200 flex items-center ${
                selectedGoals.includes(goal.id)
                  ? "bg-amber-50 border-amber-300"
                  : "bg-white"
              }`}
              onClick={() => toggleGoal(goal.id)}
            >
              <img
                src={goal.icon}
                alt={goal.title}
                className="w-10 h-10 object-contain"
              />
              <div className="ml-3 text-left">
                <h3 className="font-medium text-gray-800">{goal.title}</h3>
                <p className="text-sm text-gray-600">{goal.description}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-auto mb-4">
          <Button
            className={`w-full ${
              selectedGoals.length > 0
                ? "bg-lime-300 hover:bg-lime-400"
                : "bg-gray-200"
            } text-gray-800 font-medium py-3 rounded-md`}
            onClick={handleContinue}
            disabled={selectedGoals.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SkinGoalsSelection;
