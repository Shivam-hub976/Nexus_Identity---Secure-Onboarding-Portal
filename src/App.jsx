import { useState } from "react";
import WizardHeader from "./components/WizardHeader";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import WizardFooter from "./components/WizardFooter";
import SuccessScreen from "./components/SuccessScreen";

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Only fires when the Submit Registration button on Step 3 is clicked
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (step !== 3) return;

    console.log("Final Submission Payload:", formData);
    setIsSubmitted(true);
  };

  // Safely advance steps with the Enter key without ever triggering submission
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step < 3) {
        nextStep();
      } else {
        handleSubmit(e);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
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
          /* Neutralize native form auto-submit completely */
          <form
            onSubmit={(e) => e.preventDefault()}
            onKeyDown={handleKeyDown}
            noValidate
          >
            {step === 1 && (
              <StepOne formData={formData} handleChange={handleChange} />
            )}
            {step === 2 && (
              <StepTwo formData={formData} handleChange={handleChange} />
            )}
            {step === 3 && <StepThree formData={formData} />}

            <WizardFooter
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={handleSubmit}
            />
          </form>
        )}
      </div>
    </main>
  );
}
