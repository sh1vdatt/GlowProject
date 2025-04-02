import React from "react";
import { RxCross2 } from "react-icons/rx";

const HowSkinAnalysed = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-stone-100 w-full max-w-md p-8 rounded-lg relative">
        <button
          onClick={onClose}
          className="absolute top-6 right-6"
          aria-label="Close"
        >
          <RxCross2 size={24} />
        </button>

        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">
            How We Analyze Your Skin and Products
          </h1>

          <div className="space-y-4">
            <p className="text-gray-800">
              Our technology uses advanced AI, trained on over{" "}
              <span className="font-bold">15,000 skin images</span> covering a
              wide range of concerns. It achieves{" "}
              <span className="font-bold">100% accuracy</span> for identifying
              major conditions like acne, redness, and eczema, and{" "}
              <span className="font-bold">over 90% accuracy</span> for subtle
              issues like acne scars.
            </p>

            <p className="text-gray-800">
              Our ingredient recommendations are grounded in science, drawing
              from a database of more than{" "}
              <span className="font-bold">10,000 peer-reviewed studies</span>.
              To ensure we stay at the forefront of skincare innovation, our AI
              is continuously updated with new data and research, learning from
              every analysis to provide even more precise and personalized
              results over time.
            </p>

            <p className="text-gray-800">
              Trust in a system that evolves with science, giving you the
              confidence to care for your skin with the most accurate insights
              available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowSkinAnalysed;
