import React from "react";

const Summary = ({ resultData }) => {
  if (!resultData || !resultData.results || resultData.results.length === 0) {
    return (
      <div className="mb-4">
        <p className="text-gray-600 text-center">No summary data available</p>
      </div>
    );
  }

  const skinData = resultData.results[0];

  return (
    <div className="mb-4 px-2">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Summary</h2>
      <p className="text-gray-800 leading-relaxed">{skinData.summary}</p>
    </div>
  );
};

export default Summary;
