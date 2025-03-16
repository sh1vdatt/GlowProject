import React, { useState, useMemo } from "react";
import { ChevronDown } from "lucide-react";
import countryList from "react-select-country-list";
import UserIcon from "../../../../assets/signup/SkinAnalysis/UserLogo.png";

// This is now a content component that will be rendered by SkinAnalysisForm
const UserProfileContent = ({ formData, updateFormData }) => {
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const countries = useMemo(() => countryList().getData(), []);
  const genderOptions = ["Female", "Male", "Other"];

  const handleMonthChange = (e) => {
    updateFormData({ monthOfBirth: e.target.value });
  };

  const handleYearChange = (e) => {
    updateFormData({ yearOfBirth: e.target.value });
  };

  const handleGenderSelect = (selectedGender) => {
    updateFormData({ gender: selectedGender });
    setShowGenderDropdown(false);
  };

  const handleLocationSelect = (selectedLocation) => {
    updateFormData({ location: selectedLocation });
    setShowLocationDropdown(false);
  };

  return (
    <div className="flex-1">
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
            value={formData.monthOfBirth}
            onChange={handleMonthChange}
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
            value={formData.yearOfBirth}
            onChange={handleYearChange}
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
            type="button"
          >
            <span>{formData.gender || "Select gender"}</span>
            <ChevronDown size={20} />
          </button>
          {showGenderDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
              {genderOptions.map((option) => (
                <div
                  key={option}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleGenderSelect(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          We ask about gender to better tailor skincare recommendations based on
          hormonal and biological differences.
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
            type="button"
          >
            <span>{formData.location || "Please select"}</span>
            <ChevronDown size={20} />
          </button>
          {showLocationDropdown && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {countries.map((country) => (
                <div
                  key={country.value}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleLocationSelect(country.label)}
                >
                  {country.label}
                </div>
              ))}
            </div>
          )}
        </div>
        <p className="text-sm text-gray-600 mt-1">
          We collect environmental data that reveal how external factors impact
          your skin health.
        </p>
      </div>
    </div>
  );
};

export default UserProfileContent;
