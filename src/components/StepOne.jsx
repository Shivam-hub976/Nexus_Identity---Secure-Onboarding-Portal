export default function StepOne({ formData, errors, handleChange }) {
  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
          Personal Information
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Please enter your legal name and date of birth.
        </p>
      </div>

      {/* First Name Field */}
      <div>
        <label
          htmlFor="firstName"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          First Name <span className="text-nexus-accent">*</span>
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="e.g. Abhishek"
          className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.firstName
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
              : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
          }`}
          required
        />
        {errors.firstName && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.firstName}
          </p>
        )}
      </div>

      {/* Last Name Field */}
      <div>
        <label
          htmlFor="lastName"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          Last Name <span className="text-nexus-accent">*</span>
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="e.g. Sharma"
          className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.lastName
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
              : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
          }`}
          required
        />
        {errors.lastName && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.lastName}
          </p>
        )}
      </div>

      {/* Date of Birth Field */}
      <div>
        <label
          htmlFor="dob"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          Date of Birth <span className="text-nexus-accent">*</span>
        </label>
        <input
          type="date"
          id="dob"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.dob
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
              : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
          }`}
          required
        />
        {errors.dob && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.dob}
          </p>
        )}
      </div>
    </div>
  );
}
