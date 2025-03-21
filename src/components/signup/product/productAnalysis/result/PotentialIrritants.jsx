import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { IoWarningOutline } from "react-icons/io5";

const PotentialIrritants = ({ irritants, onIrritantClick }) => {
  const getStatusIcon = (status) => {
    if (status === "Use with caution!") {
      return <IoIosCheckmarkCircle className="text-amber-400 w-6 h-6" />;
    } else {
      return <IoWarningOutline className="text-red-400 w-6 h-6" />;
    }
  };

  const getStatusDescription = (irritant) => {
    // Use a short description that matches the design
    if (irritant.name === "Retinol") {
      return "May irritate sensitive skin";
    } else if (irritant.name === "Fragrance") {
      return "May irritate sensitive skin or trigger eczema.";
    } else if (irritant.name === "BHT") {
      return "Preservative that can cause mild sensitivity.";
    } else if (irritant.name === "Alcohols") {
      return "Safe fatty alcohols but note that if irritation occurs, discontinue to use.";
    }

    // Fallback to truncating the description
    let description = irritant.description;
    if (description && description.length > 60) {
      description = description.substring(0, 60) + "...";
    }
    return description;
  };

  if (!irritants || irritants.length === 0) {
    return null;
  }

  return (
    <div className="bg-pink-50 rounded-xl p-4 mb-4">
      <div className="mb-3 flex items-center">
        <img
          src="src/assets/signup/ProductAnalysis/ProductAnalysisResult/irritant.png"
          alt="Irritant Icon"
          className="w-6 h-6 mr-2"
        />
        <h2 className="text-gray-800 font-medium text-lg">
          Potential Irritants
        </h2>
      </div>

      <div className="text-gray-700 mb-4">
        These ingredients may not be suitable for your skin.
      </div>

      <div className="divide-y divide-gray-300">
        {irritants.map((irritant) => (
          <div
            key={irritant.id}
            className="py-3 flex justify-between items-center cursor-pointer"
            onClick={() => onIrritantClick(irritant.name)}
          >
            <div className="flex items-center">
              {getStatusIcon(irritant.status)}
              <div className="ml-2">
                <div className="font-medium text-gray-800">{irritant.name}</div>
                <div className="text-gray-600 text-sm">
                  {getStatusDescription(irritant)}
                </div>
              </div>
            </div>
            <GoTriangleRight className="text-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PotentialIrritants;
