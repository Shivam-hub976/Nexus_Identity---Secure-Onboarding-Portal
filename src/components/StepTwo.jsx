import { useState } from "react";

export default function StepTwo({ formData, handleChange }) {
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
          className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-all"
          required
        />
      </div>

      {/* Password Field with Show/Hide Toggle */}
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
            className="w-full pl-3.5 pr-20 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-all"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-nexus-accent hover:text-sky-300 focus:outline-none transition-colors"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
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
          className="w-full px-3.5 py-2.5 bg-slate-900/80 border border-slate-700/80 rounded-lg text-slate-100 placeholder-slate-500 text-sm focus:outline-none focus:border-nexus-accent focus:ring-1 focus:ring-nexus-accent transition-all"
          required
        />
      </div>
    </div>
  );
}
