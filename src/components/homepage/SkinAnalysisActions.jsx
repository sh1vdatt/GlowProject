import React from "react";
import { Link } from "react-router-dom";
import skincareBg from "../../assets/SkinAnalysisHomepage/skincare.jpg";
import skinAgeBg from "../../assets/SkinAnalysisHomepage/skinage.jpg";

const SkinAnalysisActions = () => {
  return (
    <div className="space-y-4 m-6">
      {/* Product Scanner Section */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden group"
        style={{
          backgroundImage: `url(${skincareBg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${skincareBg})`,
            backgroundSize: "cover",
            transformOrigin: "center",
          }}
        ></div>
        <div className="relative p-6 text-center z-10">
          <h2 className="text-white text-xl font-semibold mb-4">
            Check if your skincare products are suitable for you
          </h2>
          <Link to="/scan-product">
            <button className="bg-blue-100 text-gray-800 py-3 px-6 rounded-xl text-base hover:bg-blue-200 transition-colors">
              Try Product Scanner
            </button>
          </Link>
        </div>
      </div>

      {/* Age Scanner Section */}
      <div
        className="relative bg-cover bg-center rounded-xl overflow-hidden group"
        style={{
          backgroundImage: `url(${skinAgeBg})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30"></div>
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{
            backgroundImage: `url(${skinAgeBg})`,
            backgroundSize: "cover",
            transformOrigin: "center",
          }}
        ></div>
        <div className="relative p-6 text-center z-10">
          <h2 className="text-white text-xl font-semibold mb-4">
            Curious about your skin age? Check it out with friends now!
          </h2>
          <Link to="/upload-image">
            <button className="bg-orange-500 text-white py-3 px-6 rounded-xl text-base hover:bg-orange-600 transition-colors">
              Try Age Scanner
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysisActions;
