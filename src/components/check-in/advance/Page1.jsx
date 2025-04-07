import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  X,
  ChevronDown,
  Frown,
  Meh,
  Smile,
  Heart,
  Star,
  BatteryLow,
  BatteryMedium,
  BatteryFull,
  Moon,
} from "lucide-react";

export default function CheckIn() {
  const [activeTab, setActiveTab] = useState("morning");
  const [currentDate, setCurrentDate] = useState("");
  const [formState, setFormState] = useState({
    mood: null,
    energy: null,
    sleep: null,
    factor: null,
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-GB", options));
  }, []);

  const handleSelect = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (field === "factor") setDropdownOpen(false);
  };

  const showEnergyQuestion = formState.mood !== null;
  const showSleepQuestion = formState.energy !== null && showEnergyQuestion;
  const showFactorQuestion = formState.sleep !== null && showSleepQuestion;
  const allQuestionsAnswered = showFactorQuestion && formState.factor !== null;

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const moodOptions = [
    {
      value: "very sad",
      label: "Very sad",
      icon: <Frown className="w-6 h-6 text-red-500" />,
    },
    {
      value: "sad",
      label: "Sad",
      icon: <Frown className="w-6 h-6 text-amber-500" strokeWidth={2} />,
    },
    {
      value: "neutral",
      label: "Neutral",
      icon: <Meh className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "good",
      label: "Good",
      icon: <Smile className="w-6 h-6 text-emerald-500" />,
    },
    {
      value: "great",
      label: "Great",
      icon: <Heart className="w-6 h-6 text-green-700" />,
    },
  ];

  const energyOptions = [
    {
      value: "exhausted",
      label: "Exhausted",
      icon: <BatteryLow className="w-6 h-6 text-red-500" />,
    },
    {
      value: "tired",
      label: "Tired",
      icon: <BatteryLow className="w-6 h-6 text-amber-500" />,
    },
    {
      value: "neutral",
      label: "Neutral",
      icon: <BatteryMedium className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "great",
      label: "Great",
      icon: <BatteryMedium className="w-6 h-6 text-emerald-500" />,
    },
    {
      value: "energized",
      label: "Energized",
      icon: <BatteryFull className="w-6 h-6 text-green-700" />,
    },
  ];

  const sleepOptions = [
    {
      value: "bad",
      label: "Bad",
      icon: <Moon className="w-6 h-6 text-red-500" />,
    },
    {
      value: "normal",
      label: "Normal",
      icon: <Moon className="w-6 h-6 text-orange-500" />,
    },
    {
      value: "good",
      label: "Good",
      icon: <Moon className="w-6 h-6 text-emerald-500" />,
    },
    {
      value: "very good",
      label: "Very good",
      icon: <Star className="w-6 h-6 text-green-700" />,
    },
  ];

  const factorOptions = [
    "Stress",
    "Work",
    "Relationships",
    "Sleep",
    "Weather",
    "Nothing",
  ];

  const OptionButton = ({ option, selected, field }) => (
    <button
      className={`flex flex-col items-center ${
        selected === option.value ? "opacity-100" : "opacity-70"
      }`}
      onClick={() => handleSelect(field, option.value)}
    >
      <div
        className={`w-14 h-14 rounded-xl border flex items-center justify-center ${
          selected === option.value
            ? "border-blue-400 bg-blue-50"
            : "border-gray-200"
        }`}
      >
        {option.icon}
      </div>
      <span className="text-xs mt-1">{option.label}</span>
    </button>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <button className="p-1">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h1 className="text-base font-medium">{currentDate}</h1>
            <button className="p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tab Switcher */}
          <div className="flex border-b">
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "morning"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("morning")}
            >
              Morning
            </button>
            <button
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === "evening"
                  ? "text-black border-b-2 border-black"
                  : "text-gray-400"
              }`}
              onClick={() => setActiveTab("evening")}
            >
              Evening
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex justify-center gap-2 py-3">
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          {/* Main Content */}
          <div className="px-4 py-2">
            {/* Mood Question */}
            <div className="mb-6">
              <h2 className="text-base font-medium mb-4">
                How do you feel this{" "}
                {activeTab === "morning" ? "morning" : "evening"}?
              </h2>
              <div className="grid grid-cols-5 gap-2">
                {moodOptions.map((option) => (
                  <OptionButton
                    key={option.value}
                    option={option}
                    selected={formState.mood}
                    field="mood"
                  />
                ))}
              </div>
            </div>

            {/* Energy Question - Only show if mood is selected */}
            {showEnergyQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  How is your energy level today?
                </h2>
                <div className="grid grid-cols-5 gap-2">
                  {energyOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      selected={formState.energy}
                      field="energy"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sleep Question - Only show if energy is selected */}
            {showSleepQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  How was your sleep last night?
                </h2>
                <div className="grid grid-cols-4 gap-2">
                  {sleepOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      option={option}
                      selected={formState.sleep}
                      field="sleep"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Factor Question - Only show if sleep is selected */}
            {showFactorQuestion && (
              <div className="mb-6 relative">
                <h2 className="text-base font-medium mb-4">
                  Did anything specific affect your mood or energy today?
                </h2>
                <button
                  className="w-full p-3 border rounded-xl flex justify-between items-center"
                  onClick={toggleDropdown}
                >
                  <span
                    className={
                      formState.factor ? "text-black" : "text-gray-400"
                    }
                  >
                    {formState.factor || "Please select"}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      dropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div className="absolute z-10 mt-1 w-full bg-white border rounded-xl shadow-lg">
                    {factorOptions.map((factor) => (
                      <button
                        key={factor}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                        onClick={() => handleSelect("factor", factor)}
                      >
                        {factor}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t ">
          <Link to="/check-in-2">
            <button
              className={`w-full py-3 rounded-xl text-center font-medium  ${
                allQuestionsAnswered
                  ? "bg-black text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
              disabled={!allQuestionsAnswered}
            >
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
