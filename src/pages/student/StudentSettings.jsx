const StudentSettings = () => {
  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Personal Details</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-lg font-semibold text-[#0a0c11] leading-6">Basic Information</span>
          <span className="text-sm text-[#5b616d] leading-5">Update your photo and details here.</span>
        </div>
        <div className="h-px bg-[#e9eaeb]" />
      </div>
      <div className="bg-[#f9f9fa] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex flex-col sm:flex-row items-center gap-6">
        <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0">
          <span className="text-lg font-medium text-white">CH</span>
        </div>
        <div className="flex flex-col gap-2.5 text-center sm:text-left flex-1">
          <div className="flex flex-col gap-1">
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Profile picture</span>
            <span className="text-sm text-[#5b616d] leading-6">A clear, friendly headshot increases bookings by 70%. Use natural lighting and smile.</span>
          </div>
          <button className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] self-center sm:self-start flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Upload photo
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Full name</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="text" defaultValue="Chinara" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Date of birth</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="text" defaultValue="19-04-1995" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email address</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="email" defaultValue="chinara@example.com" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Mobile number</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-1 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-sm text-[#5b616d]">🇺🇸</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 8.75L10 11.25 12.5 8.75" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </div>
            <input type="tel" defaultValue="+1 55 555 55 54" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentSettings
