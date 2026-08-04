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

  // 1. Initialize React Hook Form with Zod Schema
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

  // 2. Watch all form values for Review & Submit (Step 3)
  const formData = watch();

  // 3. Validate only the current step's fields before advancing
  const nextStep = async () => {
    const isStepValid = await trigger(stepFields[step]);
    if (isStepValid) {
      setStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  // 4. Final Submission Handler (Step 3 only)
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
            {step === 1 && <StepOne register={register} errors={errors} />}
            {step === 2 && <StepTwo register={register} errors={errors} />}
            {step === 3 && <StepThree formData={formData} />}

            <WizardFooter
              step={step}
              prevStep={prevStep}
              nextStep={nextStep}
              handleSubmit={handleSubmit(onSubmit)}
              isNextDisabled={false}
            />
          </form>
        )}
      </div>
    </main>
  );
}
