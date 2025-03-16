import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import Logo from "../../../../assets/sections/hero/Logo.png";
import product from "../../../../assets/signup/ProductAnalysis/bottles.png";
import ProductAnalysisForm from "./ProductAnalysisForm";

const ProductScanScreen = () => {
  const navigate = useNavigate();
  const [showAnalysisForm, setShowAnalysisForm] = useState(false);
  const [productType, setProductType] = useState("facial");

  const handleBack = () => {
    navigate("/product-choice");
  };

  return showAnalysisForm ? (
    <ProductAnalysisForm
      productType={productType}
      onBack={() => setShowAnalysisForm(false)}
    />
  ) : (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8 relative">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
        </div>

        <div className="flex justify-center my-8">
          <div className="w-32 h-32">
            <img src={product} alt="Product bottles" />
          </div>
        </div>

        <div className="text-center mb-10">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">
            Know before you apply
          </h1>
          <p className="text-gray-600 mx-4">
            Every great skincare journey starts with the right products. Scan or
            save your favorite products here to keep them organized and tailored
            to your skin's needs.
          </p>
        </div>

        <div className="flex justify-center mb-24">
          <Button
            className="py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium w-full max-w-xs"
            onClick={() => setShowAnalysisForm(true)}
          >
            Scan Your First Product
          </Button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-auto">
          <p>
            Project glow does not store any of the images you take ensuring
            complete privacy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductScanScreen;
