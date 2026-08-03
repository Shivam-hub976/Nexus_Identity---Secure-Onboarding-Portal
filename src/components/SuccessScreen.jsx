export default function SuccessScreen({ handleReset }) {
  return (
    <div className="py-8 text-center space-y-4 animate-fadeIn">
      {/* Checkmark Icon */}
      <div className="w-12 h-12 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
        ✓
      </div>

      {/* Success Message */}
      <h2 className="text-xl font-bold text-slate-100">
        Registration Successful!
      </h2>
      <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto">
        Your onboarding payload has been securely captured. Open your browser
        developer console (<code className="text-nexus-accent">F12</code>) to
        inspect the finalized data object.
      </p>

      {/* Reset Action */}
      <div className="pt-4">
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-slate-700"
        >
          Start New Registration
        </button>
      </div>
    </div>
  );
}
