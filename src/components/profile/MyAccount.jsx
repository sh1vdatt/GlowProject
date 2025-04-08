import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

// Dummy JSON data
const dummyUserData = {
  email: "janechan@gmail.com",
  firstName: "Jane",
  lastName: "Chan",
  monthOfBirth: "02",
  yearOfBirth: "2005",
  gender: "Female",
  location: "Hong Kong",
};

const MyAccount = () => {
  // Initialize state with the dummy JSON data
  const [userData, setUserData] = useState(dummyUserData);

  const handleInputChange = (field, value) => {
    setUserData({
      ...userData,
      [field]: value,
    });
  };

  const handleSignOut = () => {
    console.log("Sign out clicked");
    // To Implement sign out logic
  };

  const handleDeleteAccount = () => {
    console.log("Delete account clicked");
    // To Implement delete account logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        {/* Header */}
        <div className="flex items-center p-4 relative">
          <Link to="/user-profile" className="absolute left-4">
            <IoIosArrowBack size={24} className="text-gray-800" />
          </Link>
          <h1 className="text-lg font-medium w-full text-center">My Account</h1>
        </div>

        {/* Content */}
        <div className="flex flex-col px-6 pt-4 pb-8">
          {/* Profile Photo */}
          <div className="flex flex-row items-center mb-6 gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-400 flex items-center justify-center mb-2">
              <CgProfile size={40} className="text-white" />
            </div>
            <button className="border border-gray-400 rounded-xl py-1 px-4 text-sm text-gray-700">
              Select photo
            </button>
          </div>

          {/* Google Sign-in Info */}
          <div className="mb-6">
            <p className="text-gray-700 mb-2">You're signed in with Google</p>
            <div className="bg-white border border-gray-300 rounded-xl p-3 mb-4">
              <p className="text-gray-500">{userData.email}</p>
            </div>
          </div>

          {/* Display Name */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Display name</label>
            <div className="flex gap-4">
              <input
                type="text"
                className="bg-white border border-gray-300 rounded-xl p-3 w-1/2"
                value={userData.firstName}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
              />
              <input
                type="text"
                className="bg-white border border-gray-300 rounded-xl p-3 w-1/2"
                value={userData.lastName}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
              />
            </div>
          </div>

          {/* Birth Date */}
          <div className="flex gap-4 mb-6">
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Month of birth</label>
              <input
                type="text"
                className="bg-white border border-gray-300 rounded-xl p-3 w-full"
                value={userData.monthOfBirth}
                onChange={(e) =>
                  handleInputChange("monthOfBirth", e.target.value)
                }
              />
            </div>
            <div className="w-1/2">
              <label className="block text-gray-700 mb-2">Year of birth</label>
              <input
                type="text"
                className="bg-white border border-gray-300 rounded-xl p-3 w-full"
                value={userData.yearOfBirth}
                onChange={(e) =>
                  handleInputChange("yearOfBirth", e.target.value)
                }
              />
            </div>
          </div>

          {/* Gender */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Gender</label>
            <div className="relative">
              <select
                className="bg-white border border-gray-300 rounded-xl p-3 w-full appearance-none"
                value={userData.gender}
                onChange={(e) => handleInputChange("gender", e.target.value)}
              >
                <option value="Female">Female</option>
                <option value="Male">Male</option>
                <option value="Other">Other</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="mb-8">
            <label className="block text-gray-700 mb-2">Location</label>
            <div className="relative">
              <select
                className="bg-white border border-gray-300 rounded-xl p-3 w-full appearance-none"
                value={userData.location}
                onChange={(e) => handleInputChange("location", e.target.value)}
              >
                <option value="Hong Kong">Hong Kong</option>
                <option value="Singapore">Singapore</option>
                <option value="Japan">Japan</option>
                <option value="United States">United States</option>
                <option value="United Kingdom">United Kingdom</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-white border border-gray-300 rounded-xl py-3 text-gray-800 font-medium mb-4"
          >
            Sign out
          </button>

          {/* Delete Account */}
          <button
            onClick={handleDeleteAccount}
            className="text-red-500 font-medium text-center"
          >
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
