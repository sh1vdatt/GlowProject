import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import skincareBg from "../../assets/SkinAnalysisHomepage/skincare.jpg";
import skinAgeBg from "../../assets/SkinAnalysisHomepage/skinage.jpg";
import productHomepageBg from "../../assets/SkinAnalysisHomepage/productcheck.png";
import scan from "../../assets/SkinAnalysisHomepage/scan.png";

const SkinAnalysisActions = ({ pageType = "skin" }) => {
  // Track when images are loaded to avoid visual jumps
  const [imagesLoaded, setImagesLoaded] = useState({
    skincare: false,
    skinAge: false,
    product: false,
    scan: false,
  });

  // Helper function for image loading completion
  const handleImageLoaded = (imageName) => {
    setImagesLoaded((prev) => ({
      ...prev,
      [imageName]: true,
    }));
  };

  return (
    <div className="space-y-4 m-6">
      {pageType === "product" ? (
        <div
          className="relative rounded-xl overflow-hidden group h-[410px]"
          style={{
            backgroundColor: "#f3f4f6", // Placeholder color while loading
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30 z-10"></div>
          <img
            src={productHomepageBg}
            alt="Product analysis background"
            loading="lazy"
            onLoad={() => handleImageLoaded("product")}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
              imagesLoaded.product ? "opacity-100" : "opacity-0"
            }`}
            style={{ transformOrigin: "center" }}
          />

          <img
            src={scan}
            alt="Scan overlay"
            loading="lazy"
            onLoad={() => handleImageLoaded("scan")}
            className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-5"
            style={{ backgroundPosition: "center center" }}
          />

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
          className="relative rounded-xl overflow-hidden group"
          style={{
            backgroundColor: "#f3f4f6", // Placeholder color while loading
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30 z-10"></div>
          <img
            src={skincareBg}
            alt="Skincare background"
            loading="lazy"
            onLoad={() => handleImageLoaded("skincare")}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
              imagesLoaded.skincare ? "opacity-100" : "opacity-0"
            }`}
            style={{ transformOrigin: "center" }}
          />
          <div className="relative p-6 text-center z-20">
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
        className="relative rounded-xl overflow-hidden group"
        style={{
          backgroundColor: "#f3f4f6", // Placeholder color while loading
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20 transition-all duration-300 group-hover:bg-opacity-30 z-10"></div>
        <img
          src={skinAgeBg}
          alt="Skin age background"
          loading="lazy"
          onLoad={() => handleImageLoaded("skinAge")}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            imagesLoaded.skinAge ? "opacity-100" : "opacity-0"
          }`}
          style={{ transformOrigin: "center" }}
        />
        <div className="relative p-6 text-center z-20">
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
