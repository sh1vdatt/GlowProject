import React from "react";
import { IoClose } from "react-icons/io5";
import { IoIosCheckmarkCircle } from "react-icons/io";

const DetailCard = ({ ingredient, onClose }) => {
  if (!ingredient) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-green-50 rounded-xl p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4"
          aria-label="Close"
        >
          <IoClose size={24} />
        </button>

        <h2 className="text-gray-800 font-semibold text-xl mb-4 border-b pb-2">
          {ingredient.name}
        </h2>

        <div className="mb-4 flex items-center">
          <IoIosCheckmarkCircle className="text-green-500 w-6 h-6 mr-2" />
          <span className="font-medium">{ingredient.suitability}</span>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          Based on {ingredient.accuracy}.
        </p>

        <p className="mb-6">{ingredient.description}</p>

        <h3 className="font-medium text-gray-800 mb-2">Function</h3>
        <p className="mb-4">{ingredient.function}</p>

        <h3 className="font-medium text-gray-800 mb-2">Usage</h3>
        <p className="mb-4">{ingredient.usage}</p>

        <h3 className="font-medium text-gray-800 mb-2">Note</h3>
        <p>{ingredient.note}</p>
      </div>
    </div>
  );
};

export default DetailCard;
