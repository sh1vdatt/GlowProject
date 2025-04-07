import Header from "./Header.jsx";
import BottomNavigation from "../homepage/BottomNavigation.jsx";
import calendarIcon from "../../assets/sections/treatment/calendar.png";

const TrackingPageFree = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          <Header />

          <div className="px-4 py-6">
            {/* Calendar Icon */}
            <div className="flex justify-center mb-2">
              <div className="rounded-lg">
                <img
                  src={calendarIcon || "/placeholder.svg"}
                  alt="Calendar"
                  className=""
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-center mb-4">
              Get to know how routine affects your skin health
            </h1>

            {/* Subheading */}
            <p className="text-center text-gray-700 mb-8">
              Take less then 2 mins but the outcome is insightful in a long run
            </p>

            {/* Tracker Options */}
            <div className="space-y-4">
              {/* Advanced Tracker */}
              <div className=" border border-gray-400 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Advance Tracker</h2>
                <ul className="mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-lg mr-2">•</span>
                    <span>Check-in twice a day</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-lg mr-2">•</span>
                    <span>Take photo for record</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-lg mr-2">•</span>
                    <span>In-depth understanding of skin health</span>
                  </li>
                </ul>
                <button className="bg-gray-800 text-white py-2 px-6 rounded-md">
                  Upgrade Now
                </button>
              </div>

              {/* Basic Tracker */}
              <div className=" border border-gray-400 rounded-xl p-6">
                <h2 className="text-xl font-bold mb-4">Basic Tracker</h2>
                <ul className="mb-4">
                  <li className="flex items-start mb-2">
                    <span className="text-lg mr-2">•</span>
                    <span>Check-in once a day</span>
                  </li>
                  <li className="flex items-start mb-2">
                    <span className="text-lg mr-2">•</span>
                    <span>General understanding of skin health</span>
                  </li>
                </ul>
                <button className="border border-gray-400 py-2 px-6 rounded-md">
                  Continue
                </button>
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

export default TrackingPageFree;
