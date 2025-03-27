import React from "react";
import Header from "./Header";
import SkinAnalysisOverview from "./SkinAnalysisOverview";
import SkinAnalysisActions from "./SkinAnalysisActions";
import SkincareAdvice from "./SkincareAdvice";
import MythBuster from "./MythBuster";
import BottomNavigation from "./BottomNavigation";

const HomePage = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          <Header />
          <SkinAnalysisOverview />
          <SkinAnalysisActions />
          <SkincareAdvice />
          <MythBuster />
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
