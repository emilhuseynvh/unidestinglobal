const StudentSettingsPassword = () => {
  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Password</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-lg font-semibold text-[#0a0c11] leading-6">Change Password</span>
          <span className="text-sm text-[#5b616d] leading-5">Please enter your current password to change your password.</span>
        </div>
        <div className="h-px bg-[#e9eaeb]" />
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Current password</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="password" defaultValue="••••••••" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
          <span className="text-sm text-[#8c929c] leading-5 px-0.5">Your new password must be more than 8 characters.</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">New password</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="password" defaultValue="••••••••" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
          <span className="text-sm text-[#8c929c] leading-5 px-0.5">Your new password must be more than 8 characters.</span>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Confirm password</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="password" defaultValue="••••••••" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSettingsPassword
