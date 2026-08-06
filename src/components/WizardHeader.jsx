export default function WizardHeader({ step }) {
  const stepTitles = {
    1: "Personal Information",
    2: "Account Details",
    3: "Review & Submit",
  };

  // Calculate percentage for the visual progress bar (33.3%, 66.6%, or 100%)
  const progressPercentage = (step / 3) * 100;

  return (
    <div className="mb-6 border-b border-slate-700/60 pb-5">
      <div className="flex justify-between items-baseline mb-2">
        <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          Nexus <span className="text-nexus-accent">Identity</span>
        </h1>
        <span className="text-xs sm:text-sm font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-800/90 border border-slate-700/80 text-slate-300">
          Step {step} of 3
        </span>
      </div>

      <p className="text-slate-400 text-xs sm:text-sm mb-3.5">
        {stepTitles[step]}
      </p>

      {/* Dynamic Visual Progress Bar */}
      <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden border border-slate-700/40">
        <div
          className="bg-nexus-accent h-full rounded-full transition-all duration-300 ease-out shadow-sm"
          style={{ width: `${progressPercentage}%` }}
        />
      </div>
    </div>
  );
}
