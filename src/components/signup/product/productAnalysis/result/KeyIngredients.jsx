import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { IoIosCheckmarkCircle } from "react-icons/io";
import HydratingIcon from "../../../../../assets/signup/ProductAnalysis/ProductAnalysisResult/hydrating.png";
import WrinklesIcon from "../../../../../assets/signup/ProductAnalysis/ProductAnalysisResult/wrinkles.svg";

const KeyIngredients = ({ ingredients, onIngredientClick }) => {
  // Filter ingredients by type
  const hydratingIngredients = ingredients?.filter(
    (ingredient) =>
      ingredient.name === "Glycerin" ||
      ingredient.name === "Hyaluronic Acid" ||
      ingredient.name === "Butylene Glycol"
  );

  const antiWrinkleIngredients = ingredients?.filter(
    (ingredient) =>
      ingredient.name === "Retinol" || ingredient.name === "Vitamin C"
  );

  const handleIngredientClick = (ingredientName) => {
    console.log("Ingredient clicked:", ingredientName); // For debugging
    if (onIngredientClick) {
      onIngredientClick(ingredientName);
    }
  };

  return (
    <div className="bg-green-50 rounded-xl p-6 mb-4">
      <h2 className="text-gray-800 font-semibold text-xl mb-4">
        Key ingredients
      </h2>

      {/* Hydrating Ingredients Section */}
      <div className="mb-6">
        <div className="flex items-center mb-2">
          <div className="relative mr-3">
            <img src={HydratingIcon} alt="Hydrating" />
          </div>
          <div>
            <h3 className="text-gray-800 font-medium">Hydrating Ingredients</h3>
            <p className="text-gray-700 text-sm">
              Perfect for enhancing hydration and smoothing texture.
            </p>
          </div>
        </div>

        {/* Hydrating Ingredients List */}
        {hydratingIngredients?.map((ingredient) => (
          <div
            key={ingredient.id}
            className="flex items-center justify-between py-3 border-t border-gray-200"
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleIngredientClick(ingredient.name)}
            >
              <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center mr-2">
                <IoIosCheckmarkCircle className="text-green-500 w-6 h-6" />
              </div>
              <span className="text-gray-800">{ingredient.name}</span>
            </div>
            <button
              onClick={() => handleIngredientClick(ingredient.name)}
              className="p-2 rounded-full hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label={`View details for ${ingredient.name}`}
              type="button"
            >
              <GoTriangleRight className="text-gray-500" />
            </button>
          </div>
        ))}
      </div>

      {/* Anti-Wrinkle Ingredients Section */}
      <div>
        <div className="flex items-center mb-2">
          <div className="relative mr-3">
            <img src={WrinklesIcon} alt="Anti-Wrinkle" />
          </div>
          <div>
            <h3 className="text-gray-800 font-medium">
              Anti-Wrinkle Ingredients
            </h3>
            <p className="text-gray-700 text-sm">
              Perfect for enhancing hydration and smoothing texture.
            </p>
          </div>
        </div>

        {/* Anti-Wrinkle Ingredients List */}
        {antiWrinkleIngredients?.map((ingredient) => (
          <div
            key={ingredient.id}
            className="flex items-center justify-between py-3 border-t border-gray-200"
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleIngredientClick(ingredient.name)}
            >
              {ingredient.name === "Retinol" ? (
                <div className="bg-yellow-500 rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <IoIosCheckmarkCircle className="text-green-500" />
                </div>
              ) : (
                <div className="bg-white rounded-full h-5 w-5 flex items-center justify-center mr-2">
                  <IoIosCheckmarkCircle className="text-green-500 w-6 h-6" />
                </div>
              )}
              <span className="text-gray-800">{ingredient.name}</span>
            </div>
            <button
              onClick={() => handleIngredientClick(ingredient.name)}
              className="p-2 rounded-full hover:bg-green-100 transition-colors focus:outline-none focus:ring-2 focus:ring-green-300"
              aria-label={`View details for ${ingredient.name}`}
              type="button"
            >
              <GoTriangleRight className="text-gray-500" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KeyIngredients;
