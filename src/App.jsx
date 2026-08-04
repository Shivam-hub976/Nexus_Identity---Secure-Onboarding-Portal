import { useState } from "react";
import WizardHeader from "./components/WizardHeader";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import WizardFooter from "./components/WizardFooter";
import SuccessScreen from "./components/SuccessScreen";
import {
  initialFormData,
  initialErrors,
  validateField,
  checkStepValidity,
} from "./utils/validation";

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Lifted Form Data & Real-Time Error State
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState(initialErrors);

  // Universal onChange with Real-Time Validation
  const handleChange = (e) => {
    const { name, value } = e.target;
    const nextFormData = { ...formData, [name]: value };
    setFormData(nextFormData);

    const errorMsg = validateField(name, value, nextFormData, setErrors);
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // Derive if the Next button should be enabled/disabled
  const isCurrentStepValid = checkStepValidity(step, formData, errors);

  const nextStep = () => {
    if (isCurrentStepValid) setStep((prev) => Math.min(prev + 1, 3));
  };
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (step !== 3) return;
    console.log("Final Submission Payload:", formData);
    setIsSubmitted(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step < 3 && isCurrentStepValid) nextStep();
      else if (step === 3) handleSubmit(e);
    }
  };

  const handleReset = () => {
    setFormData(initialFormData);
    setErrors(initialErrors);
    setStep(1);
    setIsSubmitted(false);
  };

  return (
    <main className="min-h-screen bg-nexus-bg flex items-center justify-center p-4 md:p-6">
      <div className="bg-nexus-card border border-slate-700/60 rounded-2xl p-6 sm:p-8 max-w-lg w-full shadow-2xl transition-all">
        {!isSubmitted && <WizardHeader step={step} />}

        {isSubmitted ? (
          <SuccessScreen handleReset={handleReset} />
        ) : (
          <form
            onSubmit={(e) => e.preventDefault()}
            onKeyDown={handleKeyDown}
            noValidate
          >
            {step === 1 && (
              <StepOne
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />
            )}
            {step === 2 && (
              <StepTwo
                formData={formData}
                errors={errors}
                handleChange={handleChange}
              />
            )}
            {step === 3 && <StepThree formData={formData} />}

            <WizardFooter
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={handleSubmit}
              isNextDisabled={!isCurrentStepValid}
            />
          </form>
        )}
      </div>
    </main>
  );
}
