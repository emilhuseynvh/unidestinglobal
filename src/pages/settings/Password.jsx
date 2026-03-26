const devices = [
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "22 Jan at 10:40am", active: true, type: "desktop" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "22 Jan at 4:20pm", type: "desktop" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "22 Jan at 12:15pm", type: "desktop" },
  { name: "2024 iPhone 16 Pro", location: "Melbourne, Australia", date: "22 Jan at 7:30am", type: "phone" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "21 Jan at 4:00pm", type: "desktop" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "21 Jan at 3:20pm", type: "desktop" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "21 Jan at 11:15am", type: "desktop" },
  { name: "2024 iPhone 16 Pro", location: "Melbourne, Australia", date: "21 Jan at 8:30am", type: "phone" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "20 Jan at 3:20pm", type: "desktop" },
  { name: "2024 MacBook Pro 14-inch", location: "Melbourne, Australia", date: "20 Jan at 1:10pm", type: "desktop" },
]

const DesktopIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="20" height="14" rx="2" stroke="#717680" strokeWidth="1.5"/>
    <path d="M8 21h8M12 17v4" stroke="#717680" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const PhoneIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="2" width="14" height="20" rx="2" stroke="#717680" strokeWidth="1.5"/>
    <path d="M12 18h.01" stroke="#717680" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const Password = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
      <div className="flex-1 min-w-0 flex flex-col gap-6">
        <div>
          <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Password</h2>
          <p className="text-[14px] font-normal text-[#535862] leading-5">Please enter your current password to change your password.</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            Current password <span className="text-[#7f56d9]">*</span>
          </label>
          <input
            type="password"
            defaultValue="12345678"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            New password <span className="text-[#7f56d9]">*</span>
          </label>
          <input
            type="password"
            defaultValue="12345678"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
          <p className="text-[14px] font-normal text-[#535862] leading-5">Your new password must be more than 8 characters.</p>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            Confirm new password <span className="text-[#7f56d9]">*</span>
          </label>
          <input
            type="password"
            defaultValue="12345678"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
        </div>

        <div className="flex items-center justify-end gap-3 pt-2">
          <button className="h-12 px-5 border border-[#c6c5c8] rounded-2xl text-[16px] font-medium text-black leading-[1.4] hover:bg-[#f9f9f9] transition-colors">
            Cancel
          </button>
          <button className="h-12 px-5 bg-[#007aff] rounded-2xl text-[16px] font-medium text-white leading-[1.4] hover:bg-[#0066d6] transition-colors">
            Update password
          </button>
        </div>
      </div>

      <div className="lg:w-[380px] shrink-0 flex flex-col gap-5">
        <div>
          <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Where you're logged in</h2>
          <p className="text-[14px] font-normal text-[#535862] leading-5">
            We'll alert you via <span className="font-medium text-[#181d27]">chinara@gmail.com</span> if there is any...
          </p>
        </div>

        <div className="flex flex-col">
          {devices.map((device, i) => (
            <div key={i} className="flex items-start gap-3 py-4 border-t border-[#e9eaeb] first:border-t-0">
              <div className="size-10 flex items-center justify-center shrink-0">
                {device.type === "phone" ? <PhoneIcon /> : <DesktopIcon />}
              </div>
              <div className="flex flex-col gap-0.5 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-[14px] font-semibold text-[#181d27] leading-5">{device.name}</span>
                  {device.active && (
                    <span className="flex items-center gap-1 text-[12px] font-medium text-[#17b26a] bg-[#ecfdf3] border border-[#abefc6] rounded-full px-2 py-0.5">
                      <span className="size-1.5 rounded-full bg-[#17b26a]" />
                      Active now
                    </span>
                  )}
                </div>
                <span className="text-[14px] font-normal text-[#535862] leading-5">
                  {device.location} • {device.date}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Password
