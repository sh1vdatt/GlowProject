import React from "react";
import { Link } from "react-router-dom";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";

// dummy data, later will be replaced with api calls
const skinData = {
  currentMonth: "March 2025",
  today: 27,
  dates: [
    { day: 20, status: "complete" },
    { day: 21, status: "complete" },
    { day: 22, status: "complete" },
    { day: 23, status: "partial" },
    { day: 24, status: "partial" },
    { day: 25, status: "complete" },
    { day: 26, status: "empty" },
  ],
  skinScore: 78,
  skinAge: 25,
  reportCount: 1,
  comprehensiveLevel: 60,
};

export default function SkinAnalysisDashboard() {
  // Function to determine status text and color based on score
  const getScoreStatus = (score) => {
    if (score > 75) return { text: "Good!", color: "text-green-500" };
    if (score > 50) return { text: "Fair", color: "text-yellow-500" };
    return { text: "Poor", color: "text-red-500" };
  };

  const scoreStatus = getScoreStatus(skinData.skinScore);

  const renderStatusIcon = (status) => {
    switch (status) {
      case "complete":
        return <FaCircle className="text-green-500 text-xl" />;
      case "partial":
        return (
          <BsCircleHalf
            className="text-green-500 text-xl"
            style={{ transform: "scaleX(-1)" }}
          />
        );
      case "empty":
      default:
        return <FaRegCircle className="text-gray-300 text-xl" />;
    }
  };

  return (
    <div className="bg-yellow-50 p-6 rounded-xl max-w-md mx-auto">
      <div className="flex justify-between mb-4">
        <h2 className="text-base leading-[22px] font-medium text-gray-800">
          {skinData.currentMonth}
        </h2>
        <span className="text-base leading-[22px] font-medium text-gray-800">
          Today
        </span>
      </div>

      {/* Date numbers */}
      <div className="flex justify-between mb-2">
        {skinData.dates.map((date) => (
          <div key={date.day} className="text-center">
            <button
              className={`text-l hover:underline ${
                date.day === skinData.today
                  ? "font-bold border-b-2 border-black"
                  : "text-gray-500"
              }`}
            >
              {date.day}
            </button>
          </div>
        ))}
      </div>

      {/* Status circles */}
      <div className="flex justify-between mb-4">
        {skinData.dates.map((date) => (
          <div key={`icon-${date.day}`} className="flex justify-center">
            {renderStatusIcon(date.status)}
          </div>
        ))}
      </div>

      <hr className="border-gray-300 mb-6" />

      {/* Metrics section */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="border-r border-gray-300 pr-4">
          <h3 className="text-base leading-[22px] font-medium text-gray-800 mb-2">
            Skin Score
          </h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {skinData.skinScore}
            </span>
            <span className="text-l text-gray-600">/100</span>
            <span className={`ml-2 ${scoreStatus.color}`}>
              {scoreStatus.text}
            </span>
          </div>
        </div>

        <div className="border-r border-gray-300 px-4">
          <h3 className="text-base leading-[22px] font-medium text-gray-800 mb-2">
            Skin Age
          </h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {skinData.skinAge}
            </span>
            <span className="text-xs text-gray-600 ml-1">Years old</span>
          </div>
        </div>

        <div className="pl-4">
          <h3 className="text-base leading-[22px] font-medium text-gray-800 mb-2">
            Analysis Report
          </h3>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-gray-800">
              {skinData.reportCount}
            </span>
            <Link
              to="/reports"
              className="text-xs text-gray-600 ml-2 underline"
            >
              Read latest
            </Link>
          </div>
        </div>
      </div>

      {/* Comprehensive level section */}
      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <h3 className="text-base leading-[22px] font-medium text-gray-800">
            Comprehensive level
          </h3>
          <Link
            to="/comprehensive"
            className="text-base leading-[22px] text-gray-800 underline"
          >
            What is it about?
          </Link>
        </div>

        <div className="flex items-center">
          <div className="h-4 bg-gray-200 rounded-full flex-grow mr-4">
            <div
              className="h-4 bg-purple-500 rounded-full"
              style={{ width: `${skinData.comprehensiveLevel}%` }}
            ></div>
          </div>
          <span className="text-3xl font-bold text-gray-800">
            {skinData.comprehensiveLevel}%
          </span>
        </div>
      </div>

      <button
        onClick={() => {
          /* handle scheduling logic */
        }}
        className="w-auto py-2 px-4 border-2 border-gray-800 rounded-full text-base font-medium bg-white transition-colors inline-block"
      >
        Schedule Next Skin Analysis
      </button>

      <hr className="border-gray-300 mt-6" />
    </div>
  );
}
