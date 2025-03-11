import { useState } from "react";

export function ProgressGraph() {
  const [view, setView] = useState("weekly");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-5xl font-marbley text-center text-purple-400 mb-6">
        We are your skin's lifelong cheerleaders{" "}
        <span role="img" aria-label="kissing face with closed eyes">
          🥳
        </span>
      </h1>
      <p className="text-center max-w-3xl mx-auto mb-16 text-gray-800">
        We constantly refining insights to keep your glow game strong! The daily
        tracker summary empowers you by turning complex skin health metrics into
        easy-to-understand insights, guiding you on your journey to healthier
        skin.
      </p>

      <div className=" rounded-3xl p-8 max-w-5xl mx-auto">
        <div className="relative w-full h-[400px]">
          <img
            src="src/assets/sections/progress/graph.png"
            alt="Skin health progress graph showing improvement over time"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
