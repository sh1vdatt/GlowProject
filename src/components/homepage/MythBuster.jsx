import React from "react";

const MythBuster = () => {
  return (
    <section className="bg-pink-100 rounded-xl mx-4 my-4 overflow-hidden mb-10">
      <div className="text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="h-px w-8 bg-gray-400 mr-2"></div>
          <h3 className="text-xl font-bold text-gray-800 mt-1">Myth buster</h3>
          <div className="h-px w-8 bg-gray-400 ml-2"></div>
        </div>
        <h4 className="text-xl font-semibold text-gray-900 mb-2">
          Natural Ingredients Are Always Better?
        </h4>
        <button className="text-base text-gray-700 mb-4 hover:underline">
          Did you know?
        </button>
      </div>
    </section>
  );
};

export default MythBuster;
