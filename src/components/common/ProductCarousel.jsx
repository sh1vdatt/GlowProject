import { useState, useRef, useEffect } from "react";
import Image1 from "../../assets/sections/scanner/1.png";
import Image2 from "../../assets/sections/scanner/2.png";
import Image3 from "../../assets/sections/scanner/3.png";
import Image4 from "../../assets/sections/scanner/4.png";
import Image5 from "../../assets/sections/scanner/5.png";
import Image6 from "../../assets/sections/scanner/6.png";
import Image7 from "../../assets/sections/scanner/7.png";
import Image8 from "../../assets/sections/scanner/8.png";
import Image9 from "../../assets/sections/scanner/9.png";
import ScanProductOverlay from "../../assets/sections/scanner/ScanProduct1.png";

export function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: 10 });
  const observerRef = useRef(null);
  const itemRefs = useRef({});

  const originalImages = [
    {
      id: 1,
      src: Image1,
      alt: "Skincare product image 1",
    },
    {
      id: 2,
      src: Image2,
      alt: "Skincare product image 2",
    },
    {
      id: 3,
      src: Image3,
      alt: "Skincare product image 3",
    },
    {
      id: 4,
      src: Image4,
      alt: "Skincare product image 4",
    },
    {
      id: 5,
      src: Image5,
      alt: "Skincare product image 5",
    },
    {
      id: 6,
      src: Image6,
      alt: "Skincare product image 6",
    },
    {
      id: 7,
      src: Image7,
      alt: "Skincare product image 7",
    },
    {
      id: 8,
      src: Image8,
      alt: "Skincare product image 8",
    },
    {
      id: 9,
      src: Image9,
      alt: "Skincare product image 9",
    },
  ];

  const productImages = [
    ...originalImages,
    ...originalImages,
    ...originalImages,
    ...originalImages,
  ];

  // Update visible range based on activeIndex
  useEffect(() => {
    const start = Math.max(0, Math.floor(activeIndex) - 3);
    const end = Math.min(productImages.length - 1, Math.ceil(activeIndex) + 8);
    setVisibleRange({ start, end });
  }, [activeIndex, productImages.length]);

  // Animation loop for carousel
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

  // Setup Intersection Observer for lazy loading
  useEffect(() => {
    if ("IntersectionObserver" in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const imgElement = entry.target.querySelector("img");
              if (imgElement && imgElement.dataset.src) {
                imgElement.src = imgElement.dataset.src;
                imgElement.removeAttribute("data-src");
              }
              observerRef.current.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: "200px",
          threshold: 0.1,
        }
      );

      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
  }, []);

  // Observe newly visible items
  useEffect(() => {
    if (observerRef.current) {
      Object.values(itemRefs.current).forEach((ref) => {
        if (ref) {
          observerRef.current.observe(ref);
        }
      });
    }
  }, [visibleRange]);

  // Function to check if image should load eagerly (for initially visible images)
  const shouldLoadEagerly = (index) => {
    return index >= visibleRange.start - 2 && index <= visibleRange.start + 5;
  };

  return (
    <div className="relative overflow-hidden py-8" ref={carouselRef}>
      <div
        className="flex gap-4"
        style={{
          transform: `translateX(-${activeIndex * (250 + 16)}px)`,
          transition: "transform 0ms linear",
        }}
      >
        {productImages.map((image, index) => {
          const isInVisibleRange =
            index >= visibleRange.start && index <= visibleRange.end;
          const loadEagerly = shouldLoadEagerly(index);

          return isInVisibleRange ? (
            <div
              key={`${image.id}-${index}`}
              className="relative flex-shrink-0 w-[250px] aspect-square rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300 group"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <img
                src={loadEagerly ? image.src : undefined}
                data-src={!loadEagerly ? image.src : undefined}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading={loadEagerly ? "eager" : "lazy"}
                decoding={loadEagerly ? "sync" : "async"}
              />

              {hoverIndex === index && (
                <img
                  src={ScanProductOverlay}
                  alt="Scan overlay"
                  className="absolute inset-0 w-[110%] h-[110%] object-cover"
                />
              )}
            </div>
          ) : (
            <div
              key={`${image.id}-${index}`}
              className="relative flex-shrink-0 w-[250px] aspect-square rounded-3xl overflow-hidden bg-white shadow-sm transition-all duration-300 group"
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductCarousel;
