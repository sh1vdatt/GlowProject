import React, { useState, useEffect, useRef } from "react";
import Psoriasis1 from "../../assets/sections/conditions/Psoriasis1.png";
import Psoriasis2 from "../../assets/sections/conditions/Psoriasis2.png";
import Psoriasis3 from "../../assets/sections/conditions/Psoriasis3.png";
import Psoriasis4 from "../../assets/sections/conditions/Psoriasis4.png";

export function SkinConditions() {
  const [positions, setPositions] = useState([0, 0, 0]);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const animationRefs = useRef([null, null, null]);
  const startTimeRefs = useRef([null, null, null]);
  const observerRef = useRef(null);
  const itemsRef = useRef({});

  const conditionsRow1 = [
    { type: "text", content: "Acne", id: "acne" },
    { type: "image", content: Psoriasis1, id: "psoriasis1" },
    { type: "text", content: "Rosacea", id: "rosacea" },
    { type: "image", content: Psoriasis2, id: "psoriasis2" },
  ];
  const conditionsRow2 = [
    { type: "text", content: "Scars", id: "scars" },
    { type: "text", content: "Eczema", id: "eczema" },
    { type: "image", content: Psoriasis3, id: "psoriasis3" },
    { type: "text", content: "Dry skin", id: "dryskin" },
    { type: "text", content: "Whiteheads", id: "whiteheads" },
  ];
  const conditionsRow3 = [
    { type: "text", content: "Inflamed Skin", id: "inflamedskin" },
    { type: "image", content: Psoriasis4, id: "psoriasis4" },
    { type: "text", content: "Allergic Skin", id: "allergicskin" },
    { type: "text", content: "Moles", id: "moles" },
    { type: "text", content: "Pigmentation", id: "pigmentation" },
  ];

  const allRows = [conditionsRow1, conditionsRow2, conditionsRow3];

  // Setup intersection observer
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: "100px", // start loading when item is 100px from viewport
        threshold: 0.1, // trigger when 10% of the item is visible
      }
    );

    // Clean up observer on component unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  // Setup animation
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

  // Register and unregister items for Intersection Observer
  useEffect(() => {
    // Register all refs that exist
    Object.entries(itemsRef.current).forEach(([id, ref]) => {
      if (ref && observerRef.current) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      // Cleanup - unobserve all
      if (observerRef.current) {
        Object.values(itemsRef.current).forEach((ref) => {
          if (ref) observerRef.current.unobserve(ref);
        });
      }
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
          {duplicatedConditions.map((condition, index) => {
            const uniqueId = `${condition.id}-${rowIndex}-${index}`;

            return (
              <div
                key={uniqueId}
                className="flex-shrink-0 rounded-full flex items-center justify-center bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors cursor-pointer overflow-hidden"
                style={{
                  minWidth: condition.type === "text" ? "auto" : "180px",
                  height: "60px",
                }}
                ref={(el) => {
                  if (el && condition.type === "image") {
                    itemsRef.current[uniqueId] = el;
                  }
                }}
                id={uniqueId}
              >
                {condition.type === "image" ? (
                  visibleItems.has(uniqueId) ? (
                    <img
                      src={condition.content}
                      alt="Condition indicator"
                      className="w-full h-full object-cover rounded-full"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 rounded-full" />
                  )
                ) : (
                  <span className="text-gray-700 text-2xl font-light px-8 py-4 whitespace-nowrap">
                    {condition.content}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section className="py-16 text-center">
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
