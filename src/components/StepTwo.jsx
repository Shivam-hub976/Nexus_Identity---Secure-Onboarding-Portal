import { useState } from "react";

export default function StepTwo({ formData, errors, handleChange }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
          Account Details
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Set up your login credentials and security password.
        </p>
      </div>

      {/* Email Field */}
      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          Email Address <span className="text-nexus-accent">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="abhishek@nexusidentity.com"
          className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.email
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
              : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
          }`}
          required
        />
        {errors.email && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password Field with Eyeball Icon Toggle */}
      <div>
        <label
          htmlFor="password"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          Password <span className="text-nexus-accent">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Minimum 8 characters"
            className={`w-full pl-3.5 pr-11 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
              errors.password
                ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
                : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
            }`}
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-nexus-accent focus:outline-none transition-colors"
          >
            {showPassword ? (
              /* Slashed Eyeball Icon (Hide) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            ) : (
              /* Open Eyeball Icon (Show) */
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            )}
          </button>
        </div>
        {errors.password && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.password}
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5"
        >
          Confirm Password <span className="text-nexus-accent">*</span>
        </label>
        <input
          type={showPassword ? "text" : "password"}
          id="confirmPassword"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          className={`w-full px-3.5 py-2.5 bg-slate-900/80 border rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:ring-1 transition-all ${
            errors.confirmPassword
              ? "border-rose-500 focus:border-rose-500 focus:ring-rose-500"
              : "border-slate-700/80 focus:border-nexus-accent focus:ring-nexus-accent"
          }`}
          required
        />
        {errors.confirmPassword && (
          <p className="text-rose-400 text-xs mt-1 font-medium animate-fadeIn">
            {errors.confirmPassword}
          </p>
        )}
      </div>
    </div>
  );
}
