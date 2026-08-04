export default function WizardFooter({
  step,
  prevStep,
  nextStep,
  handleSubmit,
  isNextDisabled,
}) {
  return (
    <div className="flex justify-between items-center mt-8 pt-5 border-t border-slate-700/50">
      {/* Back Button */}
      <button
        type="button"
        onClick={prevStep}
        disabled={step === 1}
        className="px-4 py-2 text-sm font-medium rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
      >
        Back
      </button>

      {/* Next Button for Steps 1 & 2 -> Submit Button ONLY on Step 3 */}
      {step === 1 || step === 2 ? (
        <button
          type="button"
          onClick={nextStep}
          disabled={isNextDisabled}
          className="px-6 py-2 text-sm font-semibold rounded-lg bg-nexus-accent text-slate-900 hover:bg-sky-300 disabled:opacity-40 disabled:cursor-not-allowed transition-all shadow-md"
        >
          Next
        </button>
      ) : (
        <button
          type="button"
          onClick={handleSubmit}
          className="px-6 py-2 text-sm font-semibold rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 transition-all shadow-md"
        >
          Submit Registration
        </button>
      )}
    </div>
  );
}
