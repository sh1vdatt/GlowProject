import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { AreaChart, Area, ResponsiveContainer } from "recharts";
import { IoInformationCircleOutline } from "react-icons/io5";
import HowSkinAnalysed from "../HowSkinAnalysed";

const SkinAnalysisResults = ({ resultData }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentResult] = useState(
    resultData?.results?.[0] || {
      overall_skin_score: 78,
      skin_age: 25,
      comparison_score: 72,
      comprehensive_level: 60,
      skin_type: "Combination",
      sensitivity: "Sensitive",
    }
  );

  const generateBellCurveData = (comparisonScore) => {
    const data = [];
    for (let i = 0; i <= 100; i += 5) {
      const height = Math.exp(-Math.pow((i - 50) / 15, 2));
      data.push({
        x: i,
        y: height,
      });
    }
    return data;
  };

  const bellCurveData = generateBellCurveData(currentResult.comparison_score);

  // Function to toggle the modal
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="bg-yellow-50 rounded-lg p-2">
      {showModal && <HowSkinAnalysed onClose={toggleModal} />}

      <h2 className="text-2xl font-bold mb-6">Facial Skin Analysis Result</h2>

      <div className="flex">
        <div className="flex-1 pr-6">
          <div className="mb-6">
            <p className="text-gray-800 font-medium mb-3">Overall Skin Score</p>
            <div className="w-32 h-32 mx-auto mb-2">
              <CircularProgressbar
                value={currentResult.overall_skin_score}
                text={`${currentResult.overall_skin_score}%`}
                styles={buildStyles({
                  textSize: "22px",
                  pathColor: "#4CAF50",
                  textColor: "#333",
                  trailColor: "#E0E0E0",
                  pathTransitionDuration: 0.5,
                })}
              />
            </div>
          </div>

          <div className="flex items-center mt-3 text-gray-600 text-sm cursor-pointer justify-center">
            <span>How to calculate?</span>
            <IoInformationCircleOutline className="ml-1 w-5 h-5" />
          </div>
          <div className="mt-8">
            <div className="mb-4">
              <p className="text-gray-800 font-medium">Skin Type</p>
              <p className="text-xl font-semibold">{currentResult.skin_type}</p>
            </div>
            <div>
              <p className="text-gray-800 font-medium">Sensitivity</p>
              <p className="text-xl font-semibold">
                {currentResult.sensitivity}
              </p>
            </div>
          </div>
        </div>

        <div className="w-px bg-gray-300 mx-2"></div>

        <div className="flex-1 pl-6">
          <div className="mb-2">
            <p className="text-gray-800 font-medium mb-3">Skin Age</p>
            <div className="flex items-start">
              <div className="mr-4">
                <div className="text-5xl font-semibold">
                  {currentResult.skin_age}
                </div>
                <div className="text-gray-600">years old</div>
              </div>

              <div className="flex-1 mt-4 flex flex-col gap-2">
                <div className="w-full rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-green-500 h-2 rounded-full"
                    style={{ width: "40%" }}
                  ></div>
                </div>

                <div className="w-full rounded-full h-2 overflow-hidden opacity-50">
                  <div
                    className="bg-gray-400 h-2 rounded-full"
                    style={{ width: "80%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 relative h-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={bellCurveData}
                margin={{ top: 5, right: 0, left: 0, bottom: 5 }}
              >
                <defs>
                  <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFF3B0" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#FFF3B0" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="y"
                  stroke="#EECF6D"
                  fill="url(#colorScore)"
                  fillOpacity={1}
                />
              </AreaChart>
            </ResponsiveContainer>

            <div
              className="absolute"
              style={{
                top: "10px",
                left: `${(currentResult.comparison_score / 100) * 100}%`,
                transform: "translateX(-50%)",
              }}
            >
              <div className="relative">
                <div className="bg-white border border-gray-300 rounded-md py-1 px-2 text-sm mb-1 shadow-sm">
                  {currentResult.comparison_score}%
                </div>
                <div className="w-3 h-3 rounded-full bg-green-500 mx-auto"></div>
              </div>
            </div>
          </div>

          <p className="text-gray-700 mt-1 mb-6">
            You're doing better than {currentResult.comparison_score}% of users
            in your age group
          </p>

          <div className="mt-4">
            <p className="text-gray-800 font-medium">Comprehensive level</p>
            <div className="flex items-center mt-2">
              <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                <div
                  className="bg-purple-500 h-2.5 rounded-full"
                  style={{ width: `${currentResult.comprehensive_level}%` }}
                ></div>
              </div>
              <span className="font-semibold ml-3">
                {currentResult.comprehensive_level}%
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        {/* Updated button to open the modal */}
        <button
          className="text-gray-700 font-medium underline"
          onClick={toggleModal}
        >
          How do we analyze your skin?
        </button>
      </div>
    </div>
  );
};

export default SkinAnalysisResults;
