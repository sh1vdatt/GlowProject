import React from "react";
import TrophyIcon from "../../../../../assets/signup/ProductAnalysis/ProductAnalysisResult/trophy.png";
import SuggestionIcon from "../../../../../assets/signup/ProductAnalysis/ProductAnalysisResult/suggestion.png";

const SuitabilityBadge = ({ type }) => {
  const baseClasses = "px-3 py-1 rounded-full text-sm font-medium";
  if (type === "Suitable") {
    return (
      <span className={`${baseClasses} bg-green-500 text-white`}>{type}</span>
    );
  }
  return (
    <span className={`${baseClasses} bg-orange-400 text-white`}>Not Ideal</span>
  );
};

const ProductSuitability = ({ suitabilityData }) => {
  if (!suitabilityData) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl p-6 mb-4">
      {/* Categories Sections */}
      {suitabilityData.categories.map((category) => (
        <div key={category.id} className="mb-6">
          <div className="flex items-center mb-2">
            <img src={TrophyIcon} alt="Trophy" className="w-6 h-6 mr-2" />
            <h3 className="text-gray-800 font-medium">{category.name}</h3>
          </div>
          <div className="mb-2">
            <SuitabilityBadge type={category.status} />
          </div>
          <p className="text-gray-700 text-sm">{category.description}</p>
        </div>
      ))}

      {/* Gentle Suggestion Box */}
      <div className="bg-gray-50 rounded-xl p-4">
        <div className="flex items-start">
          <img src={SuggestionIcon} alt="Suggestion" className="w-6 h-6 mr-2" />
          <div>
            <h4 className="text-gray-800 font-medium mb-1">
              {suitabilityData.suggestion.title}
            </h4>
            <p className="text-gray-700 text-sm">
              {suitabilityData.suggestion.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuitability;
