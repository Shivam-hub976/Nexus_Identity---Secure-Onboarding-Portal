export default function StepOne({ register, errors }) {
  const inputStyle = (hasError) =>
    `w-full px-3.5 py-2.5 bg-slate-900/90 border rounded-xl text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-2 transition-all duration-150 ${
      hasError
        ? "border-rose-500/80 focus:border-rose-500 focus:ring-rose-500/20"
        : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent/20"
    }`;

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
          placeholder="e.g. Abhishek"
          {...register("firstName")}
          className={inputStyle(errors.firstName)}
        />
        {errors.firstName && (
          <p className="text-rose-400 text-xs mt-1.5 font-medium animate-fadeIn">
            {errors.firstName?.message}
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
          placeholder="e.g. Sharma"
          {...register("lastName")}
          className={inputStyle(errors.lastName)}
        />
        {errors.lastName && (
          <p className="text-rose-400 text-xs mt-1.5 font-medium animate-fadeIn">
            {errors.lastName?.message}
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
          {...register("dob")}
          className={inputStyle(errors.dob)}
        />
        {errors.dob && (
          <p className="text-rose-400 text-xs mt-1.5 font-medium animate-fadeIn">
            {errors.dob?.message}
          </p>
        )}
      </div>
    </div>
  );
}
