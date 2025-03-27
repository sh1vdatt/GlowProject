import React from "react";
import ProfileIcon from "../../assets/sections/hero/Profile-icon.png";

export function DiscoverSection() {
  return (
    <section className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-marbley text-purple-400 leading-tight text-center">
          Discover Your
        </h2>
        <div className="relative flex flex-col md:flex-row items-center justify-center mt-4 md:mt-8">
          <h2 className="text-5xl md:text-7xl font-marbley text-purple-400 leading-tight">
            Youthful Glow
          </h2>
          <div className="flex items-center mt-6 md:mt-0 md:ml-8">
            <div className="relative flex items-center">
              <div className="h-20 w-20 md:h-24 md:w-24 bg-white rounded-full flex items-center justify-center overflow-hidden z-10">
                <img
                  src={ProfileIcon}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-20 w-20 md:h-24 md:w-24 bg-lime-200 rounded-full absolute -right-10 z-0"></div>
            </div>
            <div className="ml-14 text-purple-300 ">
              <p className="font-schibsted text-sm md:text-base">
                Powered by AI.
              </p>
              <p className="font-schibsted text-sm md:text-base">
                Backed by Science.
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-5xl md:text-7xl font-marbley text-purple-400 leading-tight text-center mt-8 md:mt-16">
          with Personalised Skincare
        </h2>
      </div>
    </section>
  );
}

export default DiscoverSection;
