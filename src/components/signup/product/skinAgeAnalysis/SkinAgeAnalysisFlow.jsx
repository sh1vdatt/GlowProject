import React, { useState, useEffect } from "react";
import SkinAgeLoading from "./AnalysisLoading";
import PhotoConfirmation from "./PhotoConfirmation";
import SkinAgeResults from "./SkinAgeResult";
import UploadPhoto from "./UploadImage";

const SkingAgeAnalysisFlow = () => {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => {
        setStep(4);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      {step === 1 && <UploadPhoto onNext={handleNext} />}
      {step === 2 && (
        <PhotoConfirmation onNext={handleNext} onBack={handleBack} />
      )}
      {step === 3 && <SkinAgeLoading />}
      {step === 4 && <SkinAgeResults onBack={() => setStep(1)} />}
    </div>
  );
};

export default SkingAgeAnalysisFlow;
