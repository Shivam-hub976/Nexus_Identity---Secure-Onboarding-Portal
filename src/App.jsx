import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import WizardHeader from "./components/WizardHeader";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import WizardFooter from "./components/WizardFooter";
import SuccessScreen from "./components/SuccessScreen";
import { registrationSchema, stepFields } from "./utils/schema";

export default function App() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Initialize React Hook Form with Zod Schema
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registrationSchema),
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      dob: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  // Watch all form values for Review & Submit (Step 3) and conditional validation
  const formData = watch();

  // Validate only the current step's fields before advancing
  const nextStep = async () => {
    const isStepValid = await trigger(stepFields[step]);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // Final Submission Handler (Step 3 only)
  const onSubmit = (data) => {
    if (step !== 3) return;
    console.log("Final Submission Payload:", data);
    setIsSubmitted(true);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (step < 3) await nextStep();
      else if (step === 3) handleSubmit(onSubmit)();
    }
  };

  const handleReset = () => {
    reset();
    setStep(1);
    setIsSubmitted(false);
  };

  // Dynamically disable Next button if current step has errors or empty required fields
  const currentFields = stepFields[step] || [];
  const isNextDisabled = currentFields.some(
    (field) => errors[field] || !formData[field],
  );

  return (
    <main className="min-h-screen bg-nexus-bg flex items-center justify-center p-4 md:p-6 font-sans">
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
            {step === 1 && <StepOne register={register} errors={errors} />}
            {step === 2 && <StepTwo register={register} errors={errors} />}
            {step === 3 && <StepThree formData={formData} />}

            <WizardFooter
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={handleSubmit(onSubmit)}
              isNextDisabled={isNextDisabled}
            />
          </form>
        )}
      </div>
    </main>
  );
}
