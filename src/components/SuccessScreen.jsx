export default function SuccessScreen({ handleReset }) {
  return (
    <div className="py-8 text-center space-y-5 animate-fadeIn">
      {/* Crisp SVG Checkmark Icon */}
      <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-inner">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.2}
          stroke="currentColor"
          className="w-7 h-7"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 12.75l6 6 9-13.5"
          />
        </svg>
      </div>

      {/* Success Message */}
      <div className="space-y-1.5">
        <h2 className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight">
          Registration Successful!
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 max-w-sm mx-auto leading-relaxed">
          Your onboarding payload has been securely captured. Open your browser
          developer console (
          <code className="text-nexus-accent font-mono">F12</code>) to inspect
          the finalized data object.
        </p>
      </div>

      {/* Reset Action */}
      <div className="pt-3">
        <button
          type="button"
          onClick={handleReset}
          className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white transition-all border border-slate-700 shadow-sm"
        >
          Start New Registration
        </button>
      </div>
    </div>
  );
}
