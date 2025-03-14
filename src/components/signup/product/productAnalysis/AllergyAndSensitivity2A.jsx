import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/sections/hero/Logo.png";
import Allergies from "../../../../assets/signup/SkinAnalysis/allergies1.png";

const AllergiesQuestion = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;
  const [selectedOption, setSelectedOption] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    if (selectedOption !== null) {
      navigate(`/allergies-selection/${skinType}`, {
        state: {
          ...userDetails,
          hasAllergies: selectedOption,
        },
      });
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
        </div>

        <div className="flex justify-center gap-2 mb-8">
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

        <div className="mb-8">
          <div className="flex items-start gap-4">
            <div className="flex items-center justify-center mr-4">
              <img src={Allergies} alt="allergy Icon" />
            </div>
            <h2 className="text-xl font-medium text-gray-800">
              Do you have any known allergies to skincare ingredients?
            </h2>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <Button
            className={`w-full py-4 rounded-full text-center transition ${
              selectedOption === "yes"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedOption("yes")}
          >
            Yes
          </Button>

          <Button
            className={`w-full py-4 rounded-full text-center transition ${
              selectedOption === "no"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedOption("no")}
          >
            No
          </Button>

          <Button
            className={`w-full py-4 rounded-full text-center transition ${
              selectedOption === "unknown"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
            onClick={() => setSelectedOption("unknown")}
          >
            I don't know
          </Button>
        </div>

        <div className="mt-auto">
          <Button
            className="py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium mb-4 w-[186px] flex flex-col items-center mx-auto"
            onClick={handleContinue}
            disabled={selectedOption === null}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllergiesQuestion;
