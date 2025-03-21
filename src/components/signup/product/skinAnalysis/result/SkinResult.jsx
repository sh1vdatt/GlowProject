import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import { Button } from "@/components/ui/button";
import Logo from "../../../../../assets/sections/hero/Logo.png";
import ShareIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/share.svg";
import BackHomeIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/back-hs.png";
import QuestionIcon from "../../../../../assets/signup/SkinAnalysis/skinanalysisresult/question.svg";
import SkinAnalysisResults from "./SkinAnalysisResult";
import Summary from "./Summary";
import SkinIssuesSection from "./SkinIssuesResult";

const ResultsPage = () => {
  const navigate = useNavigate();
  // State to store the results data
  const [resultsData, setResultsData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch data from the local JSON file
  useEffect(() => {
    import("./result.json")
      .then((data) => {
        setResultsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading results data:", error);
        setLoading(false);
      });
  }, []);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-4 px-4 overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="mx-auto ">
            <img src={Logo} alt="Logo" className="h-8" />
          </div>
        </div>

        <div className="flex items-center justify-between text-center text-gray-600 text-sm mb-4">
          <button className="rounded-full" onClick={() => navigate(-1)}>
            <IoIosArrowBack className="h-5 w-5 text-gray-800" />
          </button>
          {getCurrentDate()}
          <button className="">
            <img src={ShareIcon} alt="Share" className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-grow flex flex-col">
          <div className="mb-4">
            {loading ? (
              <div className="p-4 text-center">
                Loading skin analysis results...
              </div>
            ) : (
              <SkinAnalysisResults resultData={resultsData} />
            )}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4"></div>
          <div>
            {loading ? (
              <div className="p-4 text-center">Loading summary...</div>
            ) : (
              <Summary resultData={resultsData} />
            )}
          </div>

          <div className="border-t border-gray-200 pt-4 mb-4"></div>
          <div className="mb-4">
            {loading ? (
              <div className="p-4 text-center">Loading skin issues...</div>
            ) : (
              <SkinIssuesSection resultData={resultsData} />
            )}
          </div>
        </div>

        <div className="mt-auto text-center">
          <div className="border-t border-gray-200 pt-4 mb-4"></div>

          <div className="flex flex-col items-center">
            <Button className="w-[249px] bg-pink-200 hover:bg-pink-300 text-gray-800 font-medium py-3 rounded-full mb-3 flex items-center justify-center">
              <img src={ShareIcon} alt="Share" className="h-5 w-5 mr-2" />
              Share result with friends
            </Button>

            <Button
              className="w-[249px] bg-lime-300 hover:bg-lime-400 text-gray-800 font-medium py-3 rounded-full mb-6 flex items-center justify-center"
              onClick={() => navigate("/")}
            >
              <img src={BackHomeIcon} alt="Back" className="h-5 w-5 mr-2" />
              Back to Home Screen
            </Button>
          </div>

          <div className="bg-blue-100 rounded-xl p-4 mb-4">
            <div className="flex items-start">
              <img
                src={QuestionIcon}
                alt="Question"
                className="mt-1 mr-2 w-5 h-5"
              />
              <div>
                <p className="text-gray-800 font-medium">
                  Did you know some of your skincare products may not be good
                  for you?
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <Button className="mt-2 bg-lime-300 hover:bg-lime-400 text-gray-800 text-sm py-1 px-4 rounded-xl">
                Check with Product Scanner
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
