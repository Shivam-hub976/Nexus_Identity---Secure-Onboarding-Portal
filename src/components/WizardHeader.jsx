export default function WizardHeader({ step }) {
  const stepTitles = {
    1: "Personal Info",
    2: "Account Details",
    3: "Review & Submit",
  };

  return (
    <div className="mb-6 border-b border-slate-700/50 pb-4">
      <h1 className="text-xl sm:text-2xl font-bold text-nexus-accent tracking-tight">
        Nexus Identity
      </h1>
      <p className="text-slate-400 text-xs sm:text-sm mt-1">
        Step {step} of 3 — {stepTitles[step]}
      </p>
    </div>
  );
}
