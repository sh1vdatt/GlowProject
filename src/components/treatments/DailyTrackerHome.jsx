import { useState, useEffect } from "react";
import Header from "./Header.jsx";
import BottomNavigation from "../homepage/BottomNavigation.jsx";
import { FaCircle, FaRegCircle } from "react-icons/fa";
import { BsCircleHalf } from "react-icons/bs";
import skinHealthIcon from "../../assets/sections/treatment/skin-health.svg";
import vitalityIcon from "../../assets/sections/treatment/vitality.svg";

// Dummy data for tracking calendar
const trackingData = {
  currentMonth: "March 2025",
  today: 18,
  dates: [
    { day: 11, status: "complete" },
    { day: 12, status: "complete" },
    { day: 13, status: "complete" },
    { day: 14, status: "partial" },
    { day: 16, status: "partial" },
    { day: 17, status: "complete" },
    { day: 18, status: "empty" },
  ],
  lastTracking: "Yesterday",
};

// Dummy data for health scores
const healthScores = {
  skinHealth: {
    score: 8.7,
    description:
      "Your skin feels smooth, balanced, and radiant. Consider sticking to your routine for optimal results.",
  },
  vitality: {
    score: 9.5,
    description:
      "You're feeling highly energized and happy today. This balance of mood and energy is helping you thrive!",
  },
};

const DailyTrackerHome = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Update time every minute
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  const getGreeting = () => {
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      return "Good morning";
    } else if (hours >= 12 && hours < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  };

  const getCheckInText = () => {
    const hours = currentTime.getHours();

    if (hours >= 5 && hours < 12) {
      return "Morning Check-in";
    } else if (hours >= 12 && hours < 18) {
      return "Afternoon Check-in";
    } else {
      return "Evening Check-in";
    }
  };

  const renderStatusIcon = (status) => {
    switch (status) {
      case "complete":
        return <FaCircle className="text-green-500" />;
      case "partial":
        return (
          <BsCircleHalf
            className="text-green-500"
            style={{ transform: "scaleX(-1)" }}
          />
        );
      case "empty":
      default:
        return <FaRegCircle className="text-gray-300" />;
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          <Header />

          <div className="px-4 py-6">
            <h1 className="text-2xl font-bold text-center mb-6">
              {getGreeting()} Jane!
            </h1>

            <div className="flex justify-between items-center mb-6">
              <p className="text-lg">How's your skin feeling?</p>
              <button className="border border-gray-400 rounded-xl py-2 px-4">
                {getCheckInText()}
              </button>
            </div>

            <div className="mb-6">
              <div className="flex justify-between mb-2">
                <span className="text-gray-700">
                  {trackingData.currentMonth}
                </span>
                <span className="text-gray-700">Today</span>
              </div>

              <div className="flex justify-between mb-1">
                {trackingData.dates.map((date) => (
                  <div key={date.day} className="text-center w-8">
                    <span
                      className={`${
                        date.day === trackingData.today ? "font-bold" : ""
                      }`}
                    >
                      {date.day}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-between mb-4">
                {trackingData.dates.map((date) => (
                  <div
                    key={`status-${date.day}`}
                    className="flex justify-center w-8"
                  >
                    {renderStatusIcon(date.status)}
                  </div>
                ))}
              </div>
            </div>

            <hr className="border-gray-300 mb-4" />

            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-700">
                Last Tracking | {trackingData.lastTracking}
              </span>
              <button className="text-gray-700 underline">View Summary</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="border border-gray-300 rounded-xl p-4">
                <h3 className="text-lg font-medium mb-2">Skin health</h3>
                <div className="flex items-center mb-2">
                  <div className="p-1 mr-2">
                    <img
                      src={skinHealthIcon || "/placeholder.svg"}
                      alt="Skin health"
                    />
                  </div>
                  <span className="text-4xl font-bold text-green-500">
                    {healthScores.skinHealth.score}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {healthScores.skinHealth.description}
                </p>
              </div>

              <div className="border border-gray-300 rounded-xl p-4">
                <h3 className="text-lg font-medium mb-2">Vitality</h3>
                <div className="flex items-center mb-2">
                  <div className="p-1 mr-2">
                    <img
                      src={vitalityIcon || "/placeholder.svg"}
                      alt="Vitality"
                    />
                  </div>
                  <span className="text-4xl font-bold text-green-500">
                    {healthScores.vitality.score}
                  </span>
                </div>
                <p className="text-sm text-gray-700">
                  {healthScores.vitality.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <BottomNavigation />
        </div>
      </div>
    </div>
  );
};

export default DailyTrackerHome;
