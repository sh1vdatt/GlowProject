import React, { useState, useMemo } from "react";
import { Button } from "../../../ui/button";
import { ChevronDown } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import countryList from "react-select-country-list";
import Logo from "../../../../assets/sections/hero/Logo.png";
import UserIcon from "../../../../assets/signup/SkinAnalysis/UserLogo.png";

const UserProfileForm = () => {
  const navigate = useNavigate();
  const { skinType } = useParams();
  const [monthOfBirth, setMonthOfBirth] = useState("02");
  const [yearOfBirth, setYearOfBirth] = useState("2003");
  const [gender, setGender] = useState("Female");
  const [location, setLocation] = useState("");
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const countries = useMemo(() => countryList().getData(), []);

  const handleBack = () => {
    navigate(-1);
  };

  const genderOptions = ["Female", "Male", "Other"];

  const handleContinue = () => {
    console.log("Form submitted:", {
      monthOfBirth,
      yearOfBirth,
      gender,
      location,
    });
    // Navigate to skin type selection with user details in state
    navigate(`/skin-type/${skinType}`, {
      state: {
        monthOfBirth,
        yearOfBirth,
        gender,
        location,
      },
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-grey-100">
      <div className="w-full max-w-md bg-yellow-50 flex flex-col min-h-screen mx-auto py-8 px-8">
        {/* Back button and logo */}
        <div className="flex items-center justify-between mb-6">
          <button className="p-2" onClick={handleBack}>
            <IoIosArrowBack className="h-6 w-6 text-gray-800" />
          </button>
          <div className="mx-auto">
            <img src={Logo} alt="Project Glow" className="h-8" />
          </div>
          <div className="w-10"></div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            <div className="w-8 h-8 rounded-full bg-lime-200 flex items-center justify-center">
              1
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              2
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
              3
            </div>
          </div>
        </div>

        <div className="flex items-start mb-4">
          <div className="flex items-center justify-center mr-4">
            <img src={UserIcon} alt="User Icon" />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-1">
              Tell us a bit about yourself to get a personalized analysis
            </h2>
          </div>
        </div>

        <div className="flex space-x-4 mb-2 mt-8">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Month of birth
            </label>
            <input
              type="text"
              value={monthOfBirth}
              onChange={(e) => setMonthOfBirth(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="02"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Year of birth
            </label>
            <input
              type="text"
              value={yearOfBirth}
              onChange={(e) => setYearOfBirth(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-500"
              placeholder="2003"
            />
          </div>
        </div>
        <p className="text-sm text-gray-600 mb-6">
          You'll get a more accurate analysis
        </p>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            What is your gender?
          </label>
          <div className="relative">
            <button
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white flex justify-between items-center"
              onClick={() => setShowGenderDropdown(!showGenderDropdown)}
            >
              <span>{gender || "Select gender"}</span>
              <ChevronDown size={20} />
            </button>
            {showGenderDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                {genderOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setGender(option);
                      setShowGenderDropdown(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            We ask about gender to better tailor skincare recommendations based
            on hormonal and biological differences.
          </p>
        </div>

        <div className="mb-8">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Where is your location?
          </label>
          <div className="relative">
            <button
              className="w-full px-4 py-3 border border-gray-300 rounded-md bg-white flex justify-between items-center"
              onClick={() => setShowLocationDropdown(!showLocationDropdown)}
            >
              <span>{location || "Please select"}</span>
              <ChevronDown size={20} />
            </button>
            {showLocationDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <div
                    key={country.value}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => {
                      setLocation(country.label);
                      setShowLocationDropdown(false);
                    }}
                  >
                    {country.label}
                  </div>
                ))}
              </div>
            )}
          </div>
          <p className="text-sm text-gray-600 mt-1">
            We collect environmental data that reveal how external factors
            impact your skin health.
          </p>
        </div>

        <Button
          onClick={handleContinue}
          className="w-full py-4 bg-lime-200 text-gray-800 rounded-full hover:bg-lime-300 transition-colors text-lg font-medium"
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default UserProfileForm;
