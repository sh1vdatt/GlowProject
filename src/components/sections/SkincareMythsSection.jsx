import React from "react";
import Myth1Image from "../../assets/sections/myths/1.png";
import Myth2Image from "../../assets/sections/myths/2.png";
import Myth3Image from "../../assets/sections/myths/3.png";

export function SkincareMythsSection() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 mt-5">
      <h2 className="text-4xl md:text-5xl font-marbley text-purple-400 text-center mb-16">
        Busting Skincare Myths Like a Pro 🫧
      </h2>

      {/* Desktop layout*/}
      <div className="hidden md:grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <div className="bg-purple-100 rounded-3xl p-8 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-2">— Myth —</div>
          <h3 className="text-xl font-semibold text-center mb-4">
            Oily Skin Doesn't Need Moisturizer
          </h3>
          <div className="font-semibold mb-2">Did you know?</div>
          <p className="text-gray-700 text-center">
            Skipping moisturizer can actually make oily skin worse! When your
            skin is dehydrated, it produces even more oil to compensate. Choose
            a light, oil-free moisturizer to maintain balance.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth1Image}
            alt="Person applying sunscreen"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-purple-100 rounded-3xl p-8 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-2">— Myth —</div>
          <h3 className="text-xl font-semibold text-center mb-4">
            Expensive Products Work Better
          </h3>
          <div className="font-semibold mb-2">Did you know?</div>
          <p className="text-gray-700 text-center">
            Price doesn't always reflect effectiveness. Many affordable products
            contain the same active ingredients found in high-end skincare. It's
            all about finding the right ingredients for your skin type and
            concerns.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth2Image}
            alt="Woman applying moisturizer"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-purple-100 rounded-3xl p-8 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-2">— Myth —</div>
          <h3 className="text-xl font-semibold text-center mb-4">
            You Don't Need Sunscreen on Cloudy Days
          </h3>
          <div className="font-semibold mb-2">Did you know?</div>
          <p className="text-gray-700 text-center">
            Even on cloudy days, 80% of UV rays penetrate the clouds and can
            damage your skin. Wearing sunscreen daily, rain or shine, helps
            prevent premature aging and reduces the risk of skin cancer.
          </p>
        </div>

        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth3Image}
            alt="Woman with freckles"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Mobile layout */}
      <div className="grid grid-cols-2 gap-4 max-w-6xl mx-auto md:hidden">
        {/* First row */}
        <div className="bg-purple-100 rounded-3xl p-4 sm:p-6 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-1 text-sm sm:text-base">
            — Myth —
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Oily Skin Doesn't Need Moisturizer
          </h3>
          <div className="font-semibold mb-1 text-sm">Did you know?</div>
          <p className="text-gray-700 text-center text-xs sm:text-sm">
            Skipping moisturizer can actually make oily skin worse! When your
            skin is dehydrated, it produces even more oil to compensate. Choose
            a light, oil-free moisturizer to maintain balance.
          </p>
        </div>

        {/* First image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth1Image}
            alt="Person applying sunscreen"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Second image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth2Image}
            alt="Woman applying moisturizer"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Second row */}
        <div className="bg-purple-100 rounded-3xl p-4 sm:p-6 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-1 text-sm sm:text-base">
            — Myth —
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            Expensive Products Work Better
          </h3>
          <div className="font-semibold mb-1 text-sm">Did you know?</div>
          <p className="text-gray-700 text-center text-xs sm:text-sm">
            Price doesn't always reflect effectiveness. Many affordable products
            contain the same active ingredients found in high-end skincare. It's
            all about finding the right ingredients for your skin type and
            concerns.
          </p>
        </div>

        {/* Third row */}
        <div className="bg-purple-100 rounded-3xl p-4 sm:p-6 flex flex-col items-center">
          <div className="text-purple-500 font-medium mb-1 text-sm sm:text-base">
            — Myth —
          </div>
          <h3 className="text-lg font-semibold text-center mb-2">
            You Don't Need Sunscreen on Cloudy Days
          </h3>
          <div className="font-semibold mb-1 text-sm">Did you know?</div>
          <p className="text-gray-700 text-center text-xs sm:text-sm">
            Even on cloudy days, 80% of UV rays penetrate the clouds and can
            damage your skin. Wearing sunscreen daily, rain or shine, helps
            prevent premature aging and reduces the risk of skin cancer.
          </p>
        </div>

        {/* Third image */}
        <div className="rounded-3xl overflow-hidden">
          <img
            src={Myth3Image}
            alt="Woman with freckles"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default SkincareMythsSection;
