import { useState, useEffect } from "react";
import { ChevronLeft, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function SkinCheckIn() {
  const [activeTab, setActiveTab] = useState("morning");
  const [currentDate, setCurrentDate] = useState("");
  const [formState, setFormState] = useState({
    skinFeel: null,
    concerns: [],
    texture: null,
    appearance: null,
    sensitivity: null,
  });

  useEffect(() => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-GB", options));
  }, []);

  const handleSelect = (field, value) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
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

  const showConcernsQuestion = formState.skinFeel !== null;
  const showTextureQuestion =
    formState.concerns.length > 0 && showConcernsQuestion;
  const showAppearanceQuestion =
    formState.texture !== null && showTextureQuestion;
  const showSensitivityQuestion =
    formState.appearance !== null && showAppearanceQuestion;
  const allQuestionsAnswered =
    showSensitivityQuestion && formState.sensitivity !== null;

  const OptionButton = ({ value, label, selected, field, onClick }) => (
    <button
      className={`py-3 px-4 rounded-xl border ${
        selected === value
          ? "border-black bg-black text-white"
          : "border-gray-300 text-gray-800"
      }`}
      onClick={() => onClick(field, value)}
    >
      {label}
    </button>
  );

  const MultiOptionButton = ({ value, label, selected, onClick }) => (
    <button
      className={`py-3 px-4 rounded-xl border ${
        selected.includes(value)
          ? "border-black bg-black text-white"
          : "border-gray-300 text-gray-800"
      }`}
      onClick={() => onClick(value)}
    >
      {label}
    </button>
  );

  const skinFeelOptions = [
    { value: "dry", label: "Dry" },
    { value: "oily", label: "Oily" },
    { value: "balanced", label: "Balanced" },
    { value: "sensitive", label: "Sensitive" },
    { value: "irritated", label: "Irritated" },
  ];

  const concernOptions = [
    { value: "acne", label: "Acne" },
    { value: "flakiness", label: "Flakiness" },
    { value: "fine lines", label: "Fine lines" },
    { value: "itching", label: "Itching" },
    { value: "redness", label: "Redness" },
    { value: "no concerns", label: "No concerns" },
  ];

  const textureOptions = [
    { value: "smooth", label: "Smooth" },
    { value: "bumpy", label: "Bumpy" },
    { value: "rough", label: "Rough" },
    { value: "uneven", label: "Uneven" },
  ];

  const appearanceOptions = [
    { value: "glowing", label: "Glowing" },
    { value: "dull", label: "Dull" },
    { value: "clear", label: "Clear" },
    { value: "blemished", label: "Blemished" },
    { value: "uneven tone", label: "Uneven tone" },
  ];

  const sensitivityOptions = [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "somewhat", label: "Somewhat" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-50 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/check-in">
              <button className="p-1">
                <ChevronLeft className="w-5 h-5" />
              </button>
            </Link>
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
            <div className="w-2 h-2 rounded-full bg-black"></div>
            <div className="w-2 h-2 rounded-full bg-gray-300"></div>
          </div>

          {/* Main Content */}
          <div className="px-4 py-2">
            {/* Skin Feel Question - Always visible */}
            <div className="mb-6">
              <h2 className="text-base font-medium mb-4">
                How does your skin feel this{" "}
                {activeTab === "morning" ? "morning" : "evening"}?
              </h2>
              <div className="grid grid-cols-3 gap-2 mb-2">
                {skinFeelOptions.slice(0, 3).map((option) => (
                  <OptionButton
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    selected={formState.skinFeel}
                    field="skinFeel"
                    onClick={handleSelect}
                  />
                ))}
              </div>
              <div className="grid grid-cols-2 gap-2">
                {skinFeelOptions.slice(3).map((option) => (
                  <OptionButton
                    key={option.value}
                    value={option.value}
                    label={option.label}
                    selected={formState.skinFeel}
                    field="skinFeel"
                    onClick={handleSelect}
                  />
                ))}
              </div>
            </div>

            {/* Concerns Question  */}
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

            {/* Texture Question */}
            {showTextureQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  How does your skin texture feel?
                </h2>
                <div className="grid grid-cols-2 gap-2">
                  {textureOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.texture}
                      field="texture"
                      onClick={handleSelect}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Appearance Question */}
            {showAppearanceQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  How would you rate your skin's appearance?
                </h2>
                <div className="grid grid-cols-2 gap-2 mb-2">
                  {appearanceOptions.slice(0, 4).map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.appearance}
                      field="appearance"
                      onClick={handleSelect}
                    />
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {appearanceOptions.slice(4).map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.appearance}
                      field="appearance"
                      onClick={handleSelect}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Sensitivity Question  */}
            {showSensitivityQuestion && (
              <div className="mb-6">
                <h2 className="text-base font-medium mb-4">
                  Is your skin more sensitive than usual?
                </h2>
                <div className="grid grid-cols-3 gap-2">
                  {sensitivityOptions.map((option) => (
                    <OptionButton
                      key={option.value}
                      value={option.value}
                      label={option.label}
                      selected={formState.sensitivity}
                      field="sensitivity"
                      onClick={handleSelect}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Continue Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t ">
          <Link to="/check-in-3">
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
          </Link>
        </div>
      </div>
    </div>
  );
}
