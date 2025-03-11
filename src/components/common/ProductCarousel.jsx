import { useState, useRef, useEffect } from "react";

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);

  const originalImages = [
    {
      id: 1,
      src: "/src/assets/sections/scanner/1.png",
      alt: "Skincare product image 1",
    },
    {
      id: 2,
      src: "/src/assets/sections/scanner/2.png",
      alt: "Skincare product image 2",
    },
    {
      id: 3,
      src: "/src/assets/sections/scanner/3.png",
      alt: "Skincare product image 3",
    },
    {
      id: 4,
      src: "/src/assets/sections/scanner/4.png",
      alt: "Skincare product image 4",
    },
    {
      id: 5,
      src: "/src/assets/sections/scanner/5.png",
      alt: "Skincare product image 5",
    },
    {
      id: 6,
      src: "/src/assets/sections/scanner/6.png",
      alt: "Skincare product image 6",
    },
    {
      id: 7,
      src: "/src/assets/sections/scanner/7.png",
      alt: "Skincare product image 7",
    },
    {
      id: 8,
      src: "/src/assets/sections/scanner/8.png",
      alt: "Skincare product image 8",
    },
    {
      id: 9,
      src: "/src/assets/sections/scanner/9.png",
      alt: "Skincare product image 9",
    },
  ];

  const productImages = [
    ...originalImages,
    ...originalImages,
    ...originalImages,
    ...originalImages,
  ];

  useEffect(() => {
    let animationFrameId;
    let startTime;
    const duration = 30000;
    const itemWidth = 266;
    const resetPoint = originalImages.length * itemWidth;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      let position = (elapsed * 0.05) % resetPoint;

      setActiveIndex(position / itemWidth);

      if (position >= resetPoint) {
        startTime = timestamp;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [originalImages.length]);

  return (
    <div className="relative overflow-hidden py-8" ref={carouselRef}>
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(-${activeIndex * (250 + 16)}px)`,
          transition: "transform 0ms linear",
        }}
      >
        {productImages.map((image, index) => (
          <div
            key={`${image.id}-${index}`}
            className="relative flex-shrink-0 w-[250px] aspect-square rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300 group"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="sync"
            />

            {hoverIndex === index && (
              <img
                src="/src/assets/sections/scanner/ScanProduct1.png"
                alt="Scan overlay"
                className="absolute inset-0 w-[110%] h-[110%] object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
