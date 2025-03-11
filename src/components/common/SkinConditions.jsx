import React, { useState, useEffect, useRef } from "react";
import Psoriasis1 from "../../assets/sections/conditions/Psoriasis1.png";
import Psoriasis2 from "../../assets/sections/conditions/Psoriasis2.png";
import Psoriasis3 from "../../assets/sections/conditions/Psoriasis3.png";
import Psoriasis4 from "../../assets/sections/conditions/Psoriasis4.png";

export function SkinConditions() {
  const [positions, setPositions] = useState([0, 0, 0]);
  const animationRefs = useRef([null, null, null]);
  const startTimeRefs = useRef([null, null, null]);

  const conditionsRow1 = [
    { type: "text", content: "Acne" },
    { type: "image", content: Psoriasis1 },
    { type: "text", content: "Rosacea" },
    { type: "image", content: Psoriasis2 },
  ];
  const conditionsRow2 = [
    { type: "text", content: "Scars" },
    { type: "text", content: "Eczema" },
    { type: "image", content: Psoriasis3 },
    { type: "text", content: "Dry skin" },
    { type: "text", content: "Whiteheads" },
  ];
  const conditionsRow3 = [
    { type: "text", content: "Inflamed Skin" },
    { type: "image", content: Psoriasis4 },
    { type: "text", content: "Allergic Skin" },
    { type: "text", content: "Moles" },
    { type: "text", content: "Pigmentation" },
  ];

  const allRows = [conditionsRow1, conditionsRow2, conditionsRow3];

  useEffect(() => {
    const speeds = [0.5, 0.4, 0.6];
    const directions = [1, -1, 1];

    const animate = (rowIndex) => (timestamp) => {
      if (!startTimeRefs.current[rowIndex]) {
        startTimeRefs.current[rowIndex] = timestamp;
      }

      const row = allRows[rowIndex];
      const totalWidth = row.length * 216;

      setPositions((prev) => {
        const newPositions = [...prev];
        newPositions[rowIndex] =
          (prev[rowIndex] + speeds[rowIndex] * directions[rowIndex]) %
          totalWidth;

        if (newPositions[rowIndex] < 0) {
          newPositions[rowIndex] = totalWidth;
        }

        return newPositions;
      });

      animationRefs.current[rowIndex] = requestAnimationFrame(
        animate(rowIndex)
      );
    };

    // Start animations for each row
    for (let i = 0; i < 3; i++) {
      animationRefs.current[i] = requestAnimationFrame(animate(i));
    }

    return () => {
      animationRefs.current.forEach((ref) => {
        if (ref) cancelAnimationFrame(ref);
      });
    };
  }, []);

  const renderConditionRow = (conditions, rowIndex) => {
    const duplicatedConditions = [...conditions, ...conditions, ...conditions];

    return (
      <div className="relative h-16 mb-4 overflow-hidden">
        <div
          className="flex gap-4 absolute"
          style={{
            transform: `translateX(-${positions[rowIndex]}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          {duplicatedConditions.map((condition, index) => (
            <div
              key={`${condition.content}-${index}`}
              className="flex-shrink-0 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer overflow-hidden"
              style={{
                minWidth: condition.type === "text" ? "auto" : "180px",
                height: "60px",
              }}
            >
              {condition.type === "image" ? (
                <img
                  src={condition.content}
                  alt="Condition indicator"
                  className="w-full h-full object-cover rounded-full"
                  loading="eager"
                  decoding="sync"
                />
              ) : (
                <span className="text-gray-700 text-2xl font-light px-8 py-4 whitespace-nowrap">
                  {condition.content}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 text-center ">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 mb-12">
        Reveal the possible cheeky
        <br />
        skin mysteries
      </h2>
      <div className="relative max-w-full">
        {renderConditionRow(conditionsRow1, 0)}
        {renderConditionRow(conditionsRow2, 1)}
        {renderConditionRow(conditionsRow3, 2)}
      </div>
    </section>
  );
}
