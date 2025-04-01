import { useState } from "react";
import { Clock, ShoppingCart, Microscope, Brain } from "lucide-react";

// Image imports for Scanner features
import ScannerFeature1 from "../../assets/sections/features/product scanner/1.png";
import ScannerFeature2 from "../../assets/sections/features/product scanner/2.png";
import ScannerFeature3 from "../../assets/sections/features/product scanner/3.png";
import ScannerFeature4 from "../../assets/sections/features/product scanner/4.png";

// Image imports for Analysis features
import AnalysisFeature1 from "../../assets/sections/features/skin analysis/1.png";
import AnalysisFeature2 from "../../assets/sections/features/skin analysis/2.png";
import AnalysisFeature3 from "../../assets/sections/features/skin analysis/3.png";
import AnalysisFeature4 from "../../assets/sections/features/skin analysis/4.png";

const noScrollbarStyles = `
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export function FeatureTabs() {
  const [selectedTab, setSelectedTab] = useState("scanner");
  const [hoveredCard, setHoveredCard] = useState(null);

  const scannerFeatures = [
    {
      id: 1,
      title: "Ingredient Transparency",
      description: "Know exactly what you're applying to your skin and why.",
      color: "bg-pink-200",
      icon: Clock,
      image: ScannerFeature1,
    },
    {
      id: 2,
      title: "Backed by Science",
      description:
        "Analysis based on a database of over 1.5 million medical research studies and dermatology publications.",
      color: "bg-lime-200",
      icon: Microscope,
      image: ScannerFeature2,
    },
    {
      id: 3,
      title: "Savvy Choices for Better, Safer Skincare",
      description: "Get unbiased, research-backed information you can trust.",
      color: "bg-blue-200",
      icon: Brain,
      image: ScannerFeature3,
    },
    {
      id: 4,
      title: "Products Just a Tap Away",
      description:
        "Shop curated recommendations directly through our platform.",
      color: "bg-orange-200",
      icon: ShoppingCart,
      image: ScannerFeature4,
    },
  ];

  const analysisFeatures = [
    {
      id: 1,
      title: "Personalized Skin Profile",
      description:
        "Receive a detailed analysis of your unique skin characteristics and concerns.",
      color: "bg-purple-200",
      icon: Brain,
      image: AnalysisFeature1,
    },
    {
      id: 2,
      title: "Advanced Diagnostics",
      description:
        "Our AI-powered analysis identifies underlying skin conditions often missed by the naked eye.",
      color: "bg-blue-200",
      icon: Microscope,
      image: AnalysisFeature2,
    },
    {
      id: 3,
      title: "Customized Treatment Plans",
      description:
        "Get tailored skincare routines based on your specific skin needs and goals.",
      color: "bg-green-200",
      icon: Clock,
      image: AnalysisFeature3,
    },
    {
      id: 4,
      title: "Progress Tracking",
      description:
        "Monitor improvements and adjust your regimen as your skin evolves.",
      color: "bg-yellow-200",
      icon: ShoppingCart,
      image: AnalysisFeature4,
    },
  ];

  const features =
    selectedTab === "scanner" ? scannerFeatures : analysisFeatures;

  return (
    <>
      <style jsx>{noScrollbarStyles}</style>
      <div className="py-16">
        <div className="flex justify-center space-x-4 mb-12">
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTab === "scanner"
                ? "bg-lime-200 text-gray-900"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("scanner")}
          >
            Product Scanner
          </button>
          <button
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedTab === "analysis"
                ? "bg-lime-200 text-gray-900"
                : "bg-gray-100 text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => setSelectedTab("analysis")}
          >
            Skin Analysis
          </button>
        </div>

        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-8">
            {selectedTab === "scanner" ? (
              <>
                Play Detective and Find Out
                <br />
                What's in Your Skincare Mix
              </>
            ) : (
              <>
                Unlock the Secrets of
                <br />
                Your Skin 🔓
              </>
            )}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {selectedTab === "scanner"
              ? "Unlock the secrets of your skincare products and understand exactly what you're applying to your skin."
              : "Our platform analyzes your unique skin profile and educates you on the scientific effects of each ingredient, ensuring you achieve your skincare goals with precision and understanding."}
          </p>
          <div
            className="overflow-x-auto flex gap-4 lg:grid lg:grid-cols-4 lg:gap-6 scroll-smooth snap-x snap-mandatory scrollbar-none no-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`${feature.color} rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer flex-shrink-0 w-64 snap-center md:w-1/2 lg:w-auto`}
                onMouseEnter={() => setHoveredCard(feature.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ display: "flex", flexDirection: "column" }}
              >
                <div className="p-4 pb-3">
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">
                      {String(feature.id).padStart(2, "0")}.
                    </span>
                    <feature.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                </div>

                <div className="relative w-full pt-[75%] overflow-hidden mt-auto">
                  <img
                    src={feature.image || "/placeholder.svg"}
                    alt={feature.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>

                <div
                  className={`absolute inset-0 p-4 ${
                    feature.color
                  } transition-opacity duration-300 ${
                    hoveredCard === feature.id
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex items-start justify-between mb-1">
                    <span className="text-sm font-medium text-gray-600">
                      {String(feature.id).padStart(2, "0")}.
                    </span>
                    <feature.icon className="w-5 h-5 text-gray-600" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <div className="mt-2">
                    <hr className="border-gray-400 mb-2" />
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
