import { useRef } from "react";
import { ChevronRight } from "lucide-react";

import blogImage1 from "../../assets/sections/blog/1.png";
import blogImage2 from "../../assets/sections/blog/2.png";
import blogImage3 from "../../assets/sections/blog/3.png";

export function BlogSection() {
  const carouselRef = useRef(null);

  const scrollNext = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 mt-5">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-16">
        Unleash The Treasure Trove:
        <br />
        Blog Articles 📁
      </h2>

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={carouselRef}
          className="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto snap-x snap-mandatory no-scrollbar"
        >
          {[
            {
              title: "Future of Skincare",
              img: blogImage2,
              desc: "Predict future trends in skincare technology, particularly focusing on advancements in scanning and analysis tools like the one offered...",
            },
            {
              title: "Behind The Label",
              img: blogImage1,
              desc: "Explore how the ingredient scanner can help consumers understand complicated product labels and uncover the truth behind the ingredients...",
            },
            {
              title: "Myth vs Reality",
              img: blogImage3,
              desc: "Use the scanner to debunk popular skincare myths by providing scientific facts about ingredients commonly found in beauty products...",
            },
          ].map((blog, index) => (
            <div
              key={index}
              className="group flex-shrink-0 w-[80%] md:w-auto snap-center"
            >
              <div className="aspect-[4/5] rounded-[46%] overflow-hidden mb-6 relative">
                <img
                  src={blog.img}
                  alt={blog.title}
                  loading="lazy"
                  className="object-cover w-full h-full transition-transform group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-3">{blog.title}</h3>
              <hr className="border-black my-3" />
              <p className="text-gray-600 mb-4">{blog.desc}</p>
              <button className="px-6 py-2 bg-lime-200 rounded-full text-gray-700 font-medium hover:bg-lime-300 transition-colors">
                Read More
              </button>
            </div>
          ))}
        </div>

        <button
          onClick={scrollNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md md:hidden"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </section>
  );
}
