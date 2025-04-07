import Header from "./Header.jsx";
import BottomNavigation from "../homepage/BottomNavigation.jsx";
import calendarIcon from "../../assets/sections/treatment/calendar.png";

const TrackingPagePaid = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          <Header />

          <div className="px-4 py-6">
            {/* Greeting */}
            <h2 className="text-xl font-bold text-center mb-4">
              Good morning Jane!
            </h2>

            {/* Calendar Icon */}
            <div className="flex justify-center mb-4">
              <div className="p-4">
                <img
                  src={calendarIcon || "/placeholder.svg"}
                  alt="Calendar"
                  className="w-20 h-20"
                />
              </div>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl font-bold text-center mb-4">
              Start tracking and take control of your skin health
            </h1>

            {/* Subheading */}
            <p className="text-center text-gray-700 mb-12">
              You will be proud of your effort from the insight in a long run
            </p>

            {/* Check-In Button */}
            <div className="flex justify-center">
              <button className="bg-gray-800 text-white py-3 px-8 rounded-xl text-lg">
                Check-In Now
              </button>
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

export default TrackingPagePaid;
