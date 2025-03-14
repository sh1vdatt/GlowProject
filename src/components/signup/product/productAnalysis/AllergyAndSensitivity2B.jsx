import React, { useState } from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Info } from "lucide-react";
import Logo from "../../../../assets/sections/hero/Logo.png";
import Allergies from "../../../../assets/signup/SkinAnalysis/allergies2.png";

const AllergiesSelection = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const location = useLocation();
  const userDetails = location.state;
  const [otherSpecified, setOtherSpecified] = useState("");
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate(`/skin-conditions/${skinType}`, {
      state: {
        ...userDetails,
        specificAllergies: selectedAllergies,
        otherAllergies: otherSpecified,
      },
    });
  };

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
    if (selectedAllergies.includes(allergy)) {
      setSelectedAllergies(
        selectedAllergies.filter((item) => item !== allergy)
      );
    } else {
      setSelectedAllergies([...selectedAllergies, allergy]);
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
                    {selectedAllergies.includes(allergy) && (
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
                selectedAllergies.includes(allergy) && (
                  <div className="mt-2 ml-9">
                    <input
                      type="text"
                      placeholder="Please specify"
                      value={otherSpecified}
                      onChange={(e) => setOtherSpecified(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-xl bg-white"
                    />
                  </div>
                )}
            </div>
          ))}
        </div>

        <div className="mt-auto pt-4">
          <Button
            className="py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium mb-4 w-[186px] flex flex-col items-center mx-auto"
            onClick={handleContinue}
            disabled={selectedAllergies.length === 0}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AllergiesSelection;
