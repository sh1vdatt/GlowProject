import { useState } from "react";
import GraphImage from "../../assets/sections/progress/graph.png";

export function ProgressGraph() {
  const [view, setView] = useState("weekly");

  return (
    <section className="w-full py-8 md:py-12 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-marbley text-center text-purple-400 mb-4 md:mb-6">
          We are your skin's lifelong cheerleaders{" "}
          <span role="img" aria-label="kissing face with closed eyes">
            🥳
          </span>
        </h1>

        <p className="text-center text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8 md:mb-12 lg:mb-16 text-gray-800 px-4">
          We constantly refining insights to keep your glow game strong! The
          daily tracker summary empowers you by turning complex skin health
          metrics into easy-to-understand insights, guiding you on your journey
          to healthier skin.
        </p>

        <div className="rounded-xl md:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 max-w-5xl mx-auto shadow-sm">
          <div className="relative w-full h-[200px] sm:h-[300px] md:h-[350px] lg:h-[400px]">
            <img
              src={GraphImage}
              alt="Skin health progress graph showing improvement over time"
              loading="lazy"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProgressGraph;
