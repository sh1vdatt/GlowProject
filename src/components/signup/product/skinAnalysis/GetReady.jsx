import React from "react";
import { Button } from "../../../ui/button";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import Logo from "../../../../assets/sections/hero/Logo.png";
import BunImage from "../../../../assets/signup/SkinAnalysis/Bun.png";
import RelaxFaceImage from "../../../../assets/signup/SkinAnalysis/RelaxFace.png";
import GoodLightImage from "../../../../assets/signup/SkinAnalysis/GoodLight.png";
import NoMakeupImage from "../../../../assets/signup/SkinAnalysis/Nomakeup.png";

const GetReadyScreen = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();

  const handleReady = () => {
    navigate(`/skin-analysis/${skinType}`);
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleAnalysisWithoutImage = () => {
    navigate(`/analysis-without-image/${skinType}`);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8 relative">
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
          <div className="w-10"></div>
        </div>

        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Get Ready</h1>
          <p className="text-gray-600 mt-2">
            Take a {skinType === "facial" ? "selfie" : "photo"} of your{" "}
            {skinType} skin, and let our AI analyze it.
          </p>
        </div>

        <div className="bg-white rounded-xl p-6 mb-6 ">
          <div className="space-y-6">
            {/* Instruction 1 */}
            <div className="flex items-center">
              <img src={BunImage} alt="Instruction 1" className="w-12 h-12" />
              <div className="ml-4">
                <p className="font-medium">
                  Pull your hair back to keep your face clear.
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={RelaxFaceImage}
                alt="Instruction 2"
                className="w-12 h-12"
              />
              <div className="ml-4">
                <p className="font-medium">
                  Relax your face – no need to smile!
                </p>
              </div>
            </div>

            <div className="flex items-center">
              <img
                src={GoodLightImage}
                alt="Instruction 3"
                className="w-12 h-12"
              />
              <div className="ml-4">
                <p className="font-medium">
                  Find good lighting to brighten your photo.
                </p>
              </div>
            </div>

            <div className="flex items-center ">
              <img
                src={NoMakeupImage}
                alt="Instruction 4"
                className="w-12 h-12"
              />
              <div className="ml-4">
                <p className="font-medium">
                  Remove any makeup for an accurate scan.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 mb-6 text-center">
          By clicking 'I'm Ready', you agree to let us use your photo to analyze
          your skin. Your data will be processed securely and deleted once
          results are delivered. See our Privacy Policy for details.
        </div>

        <Button
          className="w-full py-4 bg-lime-200 text-gray-800 hover:bg-lime-300 rounded-xl font-medium mb-4"
          onClick={handleReady}
        >
          I'm Ready
        </Button>

        <div className="text-center">
          <button
            onClick={handleAnalysisWithoutImage}
            className="text-gray-800 font-medium underline"
          >
            Analysis without image
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetReadyScreen;
