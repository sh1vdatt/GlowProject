import { useState, useEffect } from "react";
import { ChevronLeft, X, Image } from "lucide-react";
import { Link } from "react-router-dom";
export default function SkinPhotoNotes() {
  const [activeTab, setActiveTab] = useState("morning");
  const [currentDate, setCurrentDate] = useState("");
  const [note, setNote] = useState("");
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const date = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    setCurrentDate(date.toLocaleDateString("en-GB", options));
  }, []);

  const handleAddPhoto = () => {
    // In a real app, this would handle file selection
    console.log("Add photo clicked");
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const isFormComplete = note.trim().length > 0 || photos.length > 0;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-stone-50 flex flex-col min-h-screen mx-auto relative">
        <div className="flex-1 overflow-y-auto overflow-x-hidden pb-20">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <Link to="/check-in-2">
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
            <div className="w-2 h-2 rounded-full bg-black"></div>
          </div>

          {/* Main Content */}
          <div className="px-4 py-2">
            <h2 className="text-lg font-medium mb-6">
              Take some photos and note about your skin today
            </h2>

            {/* Photo Upload Section */}
            <div className="mb-6">
              <div
                className="w-1/2 border-2 border-dashed border-gray-300 rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer"
                onClick={handleAddPhoto}
              >
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-3">
                  <Image className="w-6 h-6 text-gray-600" />
                </div>
                <p className="text-base font-medium text-gray-800">
                  Add photos
                </p>
              </div>
            </div>

            {/* Notes Section */}
            <div className="mb-6">
              <textarea
                value={note}
                onChange={handleNoteChange}
                className="w-full h-40 p-4 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-1 focus:ring-black"
                placeholder="Write some note about your skin today..."
              ></textarea>
            </div>
          </div>
        </div>

        {/* Finish Button */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t">
          <button
            className={`w-full py-3 rounded-xl text-center font-medium ${
              isFormComplete
                ? "bg-black text-white"
                : "bg-gray-200 text-gray-500"
            }`}
            disabled={!isFormComplete}
          >
            Finish
          </button>
        </div>
      </div>
    </div>
  );
}
