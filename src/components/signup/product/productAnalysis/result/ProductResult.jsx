import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Logo from "../../../../../assets/sections/hero/Logo.png";
import ShareIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/share.svg";
import BackHomeIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/back-hs.png";
import Tips from "../../../../../assets/signup/ProductAnalysis/ProductAnalysisResult/tips.png";
import Summary from "./Summary";
import KeyIngredients from "./KeyIngredients";
import PotentialIrritants from "./PotentialIrritants";
import DetailCard from "./DetailCard";
import ProductSuitability from "./ProductSuitability";

const ProductResultPage = () => {
  const navigate = useNavigate();
  // State to store the results data
  const [resultsData, setResultsData] = useState(null);
  const [irritantsData, setIrritantsData] = useState(null);
  const [suitabilityData, setSuitabilityData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedIngredient, setSelectedIngredient] = useState(null);

  useEffect(() => {
    // Fetch all data
    Promise.all([
      import("./product-ingredient.json"),
      import("./irritants.json"),
      import("./product-suitability.json"),
    ])
      .then(([productData, irritantsData, suitabilityData]) => {
        setResultsData(productData.default);
        setIrritantsData(irritantsData.irritants);
        setSuitabilityData(suitabilityData.suitabilityAnalysis);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  const handleIngredientClick = (ingredientName) => {
    if (resultsData && resultsData.ingredients) {
      const ingredient = resultsData.ingredients.find(
        (ing) => ing.name === ingredientName
      );
      if (ingredient) {
        console.log("Selected ingredient:", ingredient); // For debugging
        setSelectedIngredient(ingredient);
      }
    }
  };

  const handleIrritantClick = (irritantName) => {
    // Load irritants.json directly
    import("./irritants.json")
      .then((data) => {
        const irritant = data.irritants.find(
          (irr) => irr.name === irritantName
        );
        if (irritant) {
          console.log("Selected irritant:", irritant); // For dchecking
          setSelectedIngredient(irritant); // Using the same detail card for both ingredients and irritants
        }
      })
      .catch((error) => {
        console.error("Error loading irritant data:", error);
      });
  };

  const handleCloseDetailCard = () => {
    setSelectedIngredient(null);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-4 px-4 overflow-y-auto">
        <div className="flex items-center justify-between mb-4">
          <div className="mx-auto ">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>
        </div>

        <div className="flex items-center justify-between text-center text-gray-600 text-sm mb-4">
          <button className="rounded-full" onClick={() => navigate(-1)}>
            <IoIosArrowBack className="h-5 w-5 text-gray-800" />
          </button>
          {getCurrentDate()}
          <button className="">
            <img src={ShareIcon} alt="Share" className="h-5 w-5" />
          </button>
        </div>

        {/* rendering summary component without passing data */}
        <Summary />

        {/* Product Suitability component */}
        {!loading && suitabilityData && (
          <ProductSuitability suitabilityData={suitabilityData} />
        )}

        {/* KeyIngredients with the loaded data */}
        {!loading && resultsData && (
          <KeyIngredients
            ingredients={resultsData.ingredients}
            onIngredientClick={handleIngredientClick}
          />
        )}

        {/* PotentialIrritants component */}
        {!loading && irritantsData && (
          <PotentialIrritants
            irritants={irritantsData}
            onIrritantClick={handleIrritantClick}
          />
        )}

        {/* Detail Card will only render when selectedIngredient is not null */}
        {selectedIngredient && (
          <DetailCard
            ingredient={selectedIngredient}
            onClose={handleCloseDetailCard}
          />
        )}

        <div className="mt-auto">
          <div className="bg-yellow-100 rounded-xl p-4 mb-4">
            <div className="flex items-start ">
              <div className="mr-3">
                <img src={Tips} alt="Tips" className="" />
              </div>
              <div>
                <h3 className="text-gray-800 font-medium text-lg mb-1">
                  Suggested Usage Tips
                </h3>
                <p className="text-gray-700 mb-3">
                  Start by applying this moisturizer every other night and
                  gradually increase frequency as tolerated."
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Reminder:</span> Always use SPF
                  during the day if using retinol products at night.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Button className="w-[250px] bg-blue-200 hover:bg-blue-300 text-gray-800 font-medium py-3 rounded-xl mb-4 ">
              Scan Another Product
            </Button>

            <Button className="w-[249px] bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium py-3 rounded-full mb-3 flex items-center justify-center">
              <img src={ShareIcon} alt="Share" className="h-5 w-5 mr-2" />
              Share result with friends
            </Button>

            <Button
              className="w-[249px] bg-lime-300 hover:bg-lime-400 text-gray-800 font-medium py-3 rounded-full mb-6 flex items-center justify-center"
              onClick={() => navigate("/")}
            >
              <img src={BackHomeIcon} alt="Back" className="h-5 w-5 mr-2" />
              Back to Home Screen
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductResultPage;
