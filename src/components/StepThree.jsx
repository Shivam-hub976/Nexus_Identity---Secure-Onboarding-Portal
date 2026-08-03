export default function StepThree({ formData }) {
  const maskedPassword = "•".repeat(
    formData.password ? formData.password.length : 8,
  );

  return (
    <div className="space-y-5 animate-fadeIn">
      <div>
        <h2 className="text-lg font-semibold text-slate-100 tracking-tight">
          Review & Confirm
        </h2>
        <p className="text-xs text-slate-400 mt-0.5">
          Please verify that all your information is accurate before submitting.
        </p>
      </div>

      {/* Summary Card */}
      <div className="bg-slate-900/60 border border-slate-700/80 rounded-xl p-4 sm:p-5 space-y-4 text-sm">
        {/* Personal Information Section */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-nexus-accent mb-2">
            Personal Information
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
            <div>
              <dt className="text-slate-400">First Name</dt>
              <dd className="font-medium text-slate-100 mt-0.5">
                {formData.firstName || "—"}
              </dd>
            </div>
            <div>
              <dt className="text-slate-400">Last Name</dt>
              <dd className="font-medium text-slate-100 mt-0.5">
                {formData.lastName || "—"}
              </dd>
            </div>
            <div className="sm:col-span-2 mt-1">
              <dt className="text-slate-400">Date of Birth</dt>
              <dd className="font-medium text-slate-100 mt-0.5">
                {formData.dob || "—"}
              </dd>
            </div>
          </dl>
        </div>

        <hr className="border-slate-800" />

        {/* Account Details Section */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-wider text-nexus-accent mb-2">
            Account Credentials
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm">
            <div className="sm:col-span-2">
              <dt className="text-slate-400">Email Address</dt>
              <dd className="font-medium text-slate-100 mt-0.5 break-all">
                {formData.email || "—"}
              </dd>
            </div>
            <div className="sm:col-span-2 mt-1">
              <dt className="text-slate-400">Password</dt>
              <dd className="font-mono text-slate-300 mt-0.5 tracking-widest">
                {maskedPassword}
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="p-3 bg-sky-950/30 border border-sky-800/50 rounded-lg">
        <p className="text-xs text-sky-300">
          By clicking <span className="font-semibold">Submit Registration</span>
          , you confirm that your details are correct.
        </p>
      </div>
    </div>
  );
}
