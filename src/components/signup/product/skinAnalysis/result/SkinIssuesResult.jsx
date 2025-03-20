import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import WrinklesIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/wrinkles.svg";
import DarkSpotIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/darkspot.svg";
import RednessIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/redness.svg";
import AcneIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/acne.svg";
import TextureIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/texture.svg";
import HydrationIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/hydration.svg";
import PoreSizeIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/pore-size.svg";
import DarkCirclesIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/dark-circles.svg";
import SunDamageIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/sun-damage.svg";
import FirmnessIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/firmness.svg";

const SkinIssuesResult = ({ resultData }) => {
  if (!resultData) {
    return <div className="p-4 text-center">Loading skin issues...</div>;
  }

  const activeResult = resultData.results[0];
  const { issues_identified } = activeResult;

  const getSeverityColor = (severity) => {
    switch (severity) {
      case "minimal":
        return "#4CAF50";
      case "mild":
        return "#FF9800";
      case "moderate":
        return "#FF9800";
      case "severe":
        return "#FF5252";
      case "good":
        return "#4CAF50";
      default:
        return "#E0E0E0";
    }
  };

  const getSeverityPercentage = (severity) => {
    switch (severity) {
      case "minimal":
        return 85;
      case "mild":
        return 65;
      case "moderate":
        return 40;
      case "severe":
        return 20;
      case "good":
        return 90;
      default:
        return 50;
    }
  };

  const getIssueIcon = (issueName) => {
    switch (issueName) {
      case "Wrinkles":
        return WrinklesIcon;
      case "Dark spot":
        return DarkSpotIcon;
      case "Redness":
        return RednessIcon;
      case "Acne":
        return AcneIcon;
      case "Texture":
        return TextureIcon;
      case "Hydration":
        return HydrationIcon;
      case "Pore Size":
        return PoreSizeIcon;
      case "Dark Circles":
        return DarkCirclesIcon;
      case "Sun Damage":
        return SunDamageIcon;
      case "Firmness":
        return FirmnessIcon;
      default:
        return null;
    }
  };

  const handleIssueClick = (issueId) => {
    console.log(`Issue clicked: ${issueId}`);
  };

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold mb-3">10 Issues Identified</h2>

      <div className="mb-4">
        <div className="flex items-center mb-2">
          <div className="w-6 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm">Minimal issue</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-6 h-3 bg-orange-400 rounded-full mr-2"></div>
          <span className="text-sm">Mild issue, requires attention</span>
        </div>
        <div className="flex items-center mb-2">
          <div className="w-6 h-3 bg-red-400 rounded-full mr-2"></div>
          <span className="text-sm">Severe issue, needs immediate care</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {issues_identified.map((issue) => (
          <div key={issue.id} className="flex flex-col items-center">
            <div className="w-20 h-20 mb-1 relative">
              <CircularProgressbar
                value={getSeverityPercentage(issue.severity)}
                strokeWidth={10}
                styles={buildStyles({
                  pathColor: getSeverityColor(issue.severity),
                  trailColor: "#f0f0f0",
                  strokeLinecap: "round",
                })}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-sm">
                  <img
                    src={getIssueIcon(issue.name)}
                    alt={issue.name}
                    width="35"
                    height="35"
                    className="w-8 h-8"
                  />
                </div>
              </div>
            </div>

            <button
              onClick={() => handleIssueClick(issue.id)}
              className="flex items-center justify-center w-full text-sm font-medium mt-1 hover:underline py-1 rounded"
            >
              {issue.name}
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                className="ml-1"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkinIssuesResult;
