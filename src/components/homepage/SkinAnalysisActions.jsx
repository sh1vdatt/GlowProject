import React from "react";
import { Link } from "react-router-dom";
import skincareBg from "../../assets/SkinAnalysisHomepage/skincare.jpg";
import skinAgeBg from "../../assets/SkinAnalysisHomepage/skinage.jpg";
import productHomepageBg from "../../assets/SkinAnalysisHomepage/productcheck.png";
import scan from "../../assets/SkinAnalysisHomepage/scan.png";

const SkinAnalysisActions = ({ pageType = "skin" }) => {
  return (
    <div className="space-y-4 m-6">
      {pageType === "product" ? (
        <div
          className="relative bg-cover bg-center rounded-xl overflow-hidden group h-[410px]"
          style={{
            backgroundImage: `url(${productHomepageBg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30"></div>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
            style={{
              backgroundImage: `url(${productHomepageBg})`,
              backgroundSize: "cover",
              transformOrigin: "center",
            }}
          ></div>

          <div
            className="absolute inset-0 bg-center bg-no-repeat opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-5"
            style={{
              backgroundImage: `url(${scan})`,
              backgroundSize: "80%",
              backgroundPosition: "center center",
            }}
          ></div>

          <div className="relative p-6 text-center z-10 mt-[265px]">
            <h2 className="text-black text-xl font-semibold mb-4">
              Reveal the secrets of your skin
            </h2>
            <Link to="/skin-area-selection">
              <button className="bg-yellow-300 text-gray-800 py-3 px-6 rounded-xl text-base hover:bg-yellow-400 transition-colors">
                Get Your Skin Analysis
              </button>
            </Link>
          </div>
        </div>
      ) : (
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
            <h2 className="text-black text-xl font-semibold mb-4">
              Check if your skincare products are suitable for you
            </h2>
            <Link to="/scan-product">
              <button className="bg-blue-100 text-gray-800 py-3 px-6 rounded-xl text-base hover:bg-blue-200 transition-colors">
                Try Product Scanner
              </button>
            </Link>
          </div>
        </div>
      )}

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
          <h2 className="text-black text-xl font-semibold mb-4">
            Curious about your skin age? Check it out with friends now!
          </h2>
          <Link to="/upload-image">
            <button className="bg-orange-500 text-black py-3 px-6 rounded-xl text-base hover:bg-orange-600 transition-colors">
              {pageType === "product"
                ? "Try Skin Age Detector"
                : "Try Age Scanner"}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysisActions;
