import { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { HiSpeakerphone } from "react-icons/hi";
import { MdContactSupport } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import { Link, useLocation } from "react-router-dom";

// Dummy data that will later be replaced with API calls
const dummyUserData = {
  firstName: "Jane",
  lastName: "Chan",
  comprehensiveLevel: 60,
};

const UserProfile = () => {
  // State to store user data
  const [userData, setUserData] = useState(dummyUserData);
  const location = useLocation();

  const getBackPath = () => {
    // Check if location state has previous path
    if (location.state && location.state.from) {
      return location.state.from;
    }

    return "/dashboard-skin";
  };

  // Function to get user initials
  const getUserInitials = () => {
    return `${userData.firstName.charAt(0)}${userData.lastName.charAt(0)}`;
  };

  // Function to get full name
  const getFullName = () => {
    return `${userData.firstName} ${userData.lastName}`;
  };

  //  write the code below for api call

  const handleForwardClick = () => {
    console.log("Forward button clicked");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex items-center p-4 relative">
          <Link to={getBackPath()} className="absolute left-4">
            <IoIosArrowBack size={24} className="text-gray-800" />
          </Link>
          <h1 className="text-lg font-medium w-full text-center">My Profile</h1>
        </div>

        <div className="flex flex-col items-center mt-4 mb-6">
          <div className="w-24 h-24 rounded-full bg-[#e8f87c] flex items-center justify-center mb-3">
            <span className="text-3xl font-bold text-gray-800">
              {getUserInitials()}
            </span>
          </div>
          <h2 className="text-xl font-normal text-gray-800">{getFullName()}</h2>
        </div>

        <div className="border-t border-gray-200 mx-0 "></div>

        <div className="px-0">
          <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
            <div className="flex items-center">
              <CgProfile size={24} className="mr-3 text-gray-600" />
              <span className="font-normal text-gray-800">My Account</span>
            </div>
            <Link to="/my-account">
              <button>
                <IoIosArrowForward size={20} className="text-gray-400" />
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
            <div className="flex items-center">
              <FaSearch size={20} className="mr-3 text-gray-600" />
              <span className="font-normal text-gray-800">
                Comprehensive level
              </span>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-500 mr-2">
                Currently:{" "}
                <span className="font-medium">
                  {userData.comprehensiveLevel}%
                </span>
              </span>
              <Link to="/comprehensive-level">
                <button onClick={handleForwardClick}>
                  <IoIosArrowForward size={20} className="text-gray-400" />
                </button>
              </Link>
            </div>
          </div>

          <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
            <div className="flex items-center">
              <MdSubscriptions size={24} className="mr-3 text-gray-600" />
              <span className="font-normal text-gray-800">Subscription</span>
            </div>
            <button onClick={handleForwardClick}>
              <IoIosArrowForward size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
            <div className="flex items-center">
              <HiSpeakerphone size={24} className="mr-3 text-gray-600" />
              <span className="font-normal text-gray-800">Invite a Friend</span>
            </div>
            <button onClick={handleForwardClick}>
              <IoIosArrowForward size={20} className="text-gray-400" />
            </button>
          </div>

          <div className="flex items-center justify-between py-4 px-5 border-b border-gray-200">
            <div className="flex items-center">
              <MdContactSupport size={24} className="mr-3 text-gray-600" />
              <span className="font-normal text-gray-800">Support</span>
            </div>
            <button onClick={handleForwardClick}>
              <IoIosArrowForward size={20} className="text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
