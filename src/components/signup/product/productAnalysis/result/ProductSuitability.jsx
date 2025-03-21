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

const ProductSuitability = () => {
  return (
    <div className="bg-gray-50 rounded-xl p-6 mb-6">
      <div className="flex">
        <div className="w-12 mr-4 flex-shrink-0">
          <div className="w-12 h-12">
            <img src={TrophyIcon} alt="Trophy" className="w-full h-full" />
          </div>
        </div>

        <div className="flex-1 space-y-8">
          <div>
            <h3 className="text-gray-800 font-medium mb-2">Blemish Control</h3>
            <div className="mb-2">
              <span className="bg-amber-400 text-white px-4 py-1 rounded-full text-sm font-medium">
                Not Ideal
              </span>
            </div>
            <p className="text-gray-700">
              Retinol can help, but fragrance and potential irritants could
              trigger sensitivities.
            </p>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-2">Hydration</h3>
            <div className="mb-2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Suitable
              </span>
            </div>
            <p className="text-gray-700">
              Contains hyaluronic acid and glycerin for added moisture.
            </p>
          </div>

          <div>
            <h3 className="text-gray-800 font-medium mb-2">Smooth Texture</h3>
            <div className="mb-2">
              <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                Suitable
              </span>
            </div>
            <p className="text-gray-700">
              Retinol and hyaluronic acid can smooth skin over time.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-xl p-4 border border-gray-200 mt-4">
        <div className="flex items-start">
          <div className="w-10 h-10 mr-2 flex items-center justify-center">
            <img src={SuggestionIcon} alt="Suggestion" />
          </div>
          <div>
            <h4 className="text-gray-800 font-medium mb-1">
              Gentle Suggestion
            </h4>
            <p className="text-gray-700 text-sm">
              Consider using a small amount initially or patch-testing due to
              sensitivity concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSuitability;
