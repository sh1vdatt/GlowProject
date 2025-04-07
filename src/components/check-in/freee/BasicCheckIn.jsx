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
  BatteryLow,
  BatteryMedium,
  BatteryFull,
} from "lucide-react";

export default function BasicCheckIn() {
  const [currentDate, setCurrentDate] = useState("");
  const [formState, setFormState] = useState({
    mood: null,
    energy: null,
    affectFactor: null,
    skinFeel: [],
    concerns: [],
  });
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-GB", options));
  }, []);

  const handleSelect = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (field === "affectFactor") setDropdownOpen(false);
  };

  const toggleSkinFeel = (feel) => {
    setFormState((prev) => {
      let updatedFeel = [...prev.skinFeel];

      if (updatedFeel.includes(feel)) {
        updatedFeel = updatedFeel.filter((item) => item !== feel);
      } else {
        updatedFeel.push(feel);
      }

      return { ...prev, skinFeel: updatedFeel };
    });
  };

  const toggleConcern = (concern) => {
    setFormState((prev) => {
      if (concern === "no concerns") {
        return { ...prev, concerns: [concern] };
      }

      let updatedConcerns = prev.concerns.filter(
        (item) => item !== "no concerns"
      );

      if (updatedConcerns.includes(concern)) {
        updatedConcerns = updatedConcerns.filter((item) => item !== concern);
      } else {
        updatedConcerns.push(concern);
      }

      return { ...prev, concerns: updatedConcerns };
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const showEnergyQuestion = formState.mood !== null;
  const showAffectFactorQuestion =
    formState.energy !== null && showEnergyQuestion;
  const showSkinFeelQuestion =
    formState.affectFactor !== null && showAffectFactorQuestion;
  const showConcernsQuestion =
    formState.skinFeel.length > 0 && showSkinFeelQuestion;
  const allQuestionsAnswered =
    showConcernsQuestion && formState.concerns.length > 0;

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

  const affectFactorOptions = [
    "Stress",
    "Work",
    "Relationships",
    "Sleep",
    "Weather",
    "Nothing",
  ];

  const skinFeelOptions = [
    {
      value: "dry",
      label: "Dry",
    },
    {
      value: "oily",
      label: "Oily",
    },
    {
      value: "balanced",
      label: "Balanced",
    },
    {
      value: "sensitive",
      label: "Sensitive",
    },
    {
      value: "irritated",
      label: "Irritated",
    },
  ];

  const concernOptions = [
    {
      value: "acne",
      label: "Acne",
    },
    {
      value: "flakiness",
      label: "Flakiness",
    },
    {
      value: "fine lines",
      label: "Fine lines",
    },
    {
      value: "itching",
      label: "Itching",
    },
    {
      value: "redness",
      label: "Redness",
    },
    {
      value: "no concerns",
      label: "No concerns",
    },
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

  const MultiOptionButton = ({ value, label, selected, onClick }) => (
    <button
      className={`py-3 px-4 rounded-xl border ${
        selected.includes(value)
          ? "border-black bg-white"
          : "border-gray-300 text-gray-800"
      }`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-100 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-16">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/">
              <button className="p-1">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </Link>
            <h1 className="text-base font-medium">{currentDate}</h1>
            <button className="p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Content */}
          <div className="px-4 py-2">
            {/* Mood Question - Always visible */}
            <div className="mb-6">
              <h2 className="text-base font-medium mb-4">
                How do you feel today?
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

            {/* Energy Level Question - Only show if mood is selected */}
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

            {/* Affect Factor Question - Only show if energy level is selected */}
            {showAffectFactorQuestion && (
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
                      formState.affectFactor ? "text-black" : "text-gray-400"
                    }
                  >
                    {formState.affectFactor || "Please select"}
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
                    {affectFactorOptions.map((factor) => (
                      <button
                        key={factor}
                        className="w-full text-left px-4 py-3 hover:bg-gray-100 border-b last:border-b-0"
                        onClick={() => handleSelect("affectFactor", factor)}
                      >
                        {factor}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Skin Feel Question - Only show if affect factor is selected */}
            {showSkinFeelQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  How does your skin feel this morning?
                </h2>
                <div className="grid grid-cols-3 gap-2 mb-2">
                  {skinFeelOptions.slice(0, 3).map((option) => (
                    <MultiOptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.skinFeel}
                      onClick={toggleSkinFeel}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {skinFeelOptions.slice(3).map((option) => (
                    <MultiOptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.skinFeel}
                      onClick={toggleSkinFeel}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Concerns Question - Only show if skin feel is selected */}
            {showConcernsQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-1">
                  Do you notice any specific concerns?
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  You can select more than 1 answer.
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {concernOptions.map((option) => (
                    <MultiOptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.concerns}
                      onClick={toggleConcern}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t ">
          <button
            className={`w-full py-3 rounded-xl text-center font-medium ${
              allQuestionsAnswered
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            disabled={!allQuestionsAnswered}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}
