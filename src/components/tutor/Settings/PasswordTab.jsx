const PasswordTab = () => {
  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Password</p>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">Change Password</h2>
          <p className="text-sm text-[#5b616d] leading-5">Please enter your current password to change your password.</p>
        </div>
        <div className="h-px bg-[#e9eaeb] mt-3" />
      </div>

      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Current password</label>
          <input
            type="password"
            defaultValue="12345678"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
          <p className="text-sm text-[#8c929c] leading-5 px-0.5">Your new password must be more than 8 characters.</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">New password</label>
          <input
            type="password"
            defaultValue="12345678"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
          <p className="text-sm text-[#8c929c] leading-5 px-0.5">Your new password must be more than 8 characters.</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Confirm password</label>
          <input
            type="password"
            defaultValue="12345678"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>
      </div>
    </div>
  )
}

export default PasswordTab
