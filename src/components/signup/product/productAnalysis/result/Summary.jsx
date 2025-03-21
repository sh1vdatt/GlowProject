import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import productImage from "/src/assets/signup/ProductAnalysis/ProductAnalysisResult/image.png";
import productBlurImage from "/src/assets/signup/ProductAnalysis/ProductAnalysisResult/image-blur.jpg";
import { CiCirclePlus } from "react-icons/ci";

const Summary = ({ productData }) => {
  const defaultData = {
    name: "Analysed Product",
    rating: "7.5/10",
    ratingText: "Suitable for you!",
    summary: "Mostly Suitable but may cause mild irritation.",
    inUse: true,
  };

  const data = productData || defaultData;

  return (
    <div className="mb-8">
      <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">
        {data.name}
      </h2>

      <div className="relative w-full h-[300px] mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${productBlurImage})`,
          }}
        ></div>

        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src={productImage}
            alt="Product Image"
            className="max-h-[280px] max-w-[80%] object-contain"
          />
        </div>

        <div className="absolute top-4 right-4 z-10">
          <button className="bg-gray-100 rounded-full p-3 opacity-90 hover:opacity-100">
            <MdFavoriteBorder className="text-gray-500 text-2xl" />
          </button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <div className="bg-green-500 text-white px-4 py-2 rounded-xl mr-3">
            <div className="text-lg font-bold">{data.rating}</div>
          </div>
          <div className="text-lg text-green-700 font-medium">
            {data.ratingText}
          </div>
        </div>

        <div className="flex flex-col items-center">
          <button className="flex flex-col items-center">
            <CiCirclePlus className="h-8 w-8 text-gray-500 " />
            <span className="text-sm text-gray-700">In-Use</span>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mb-6">
        <button className="text-l font-medium text-gray-800 underline">
          How do we analyze the product for you?
        </button>
      </div>

      <div className="bg-blue-100 rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-1">Summary</h3>
        <p className="text-sm text-gray-800">{data.summary}</p>
      </div>
    </div>
  );
};

export default Summary;
