const ParentsDetails = () => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Parent details</h2>
        <p className="text-[14px] font-normal text-[#535862] leading-5">Update your  parent details here.</p>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
        <label className="text-[14px] font-semibold text-[#414651] leading-5 sm:w-[200px] shrink-0">
          Name <span className="text-[#7f56d9]">*</span>
        </label>
        <div className="flex-1 sm:max-w-[512px]">
          <input
            type="text"
            defaultValue="Leyla Naghiyeva"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
        </div>
      </div>


      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
        <label className="text-[14px] font-semibold text-[#414651] leading-5 sm:w-[200px] shrink-0">
          Email <span className="text-[#7f56d9]">*</span>
        </label>
        <div className="flex-1 sm:max-w-[512px]">
          <input
            type="email"
            defaultValue="parent@gamil.com"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8">
        <label className="text-[14px] font-semibold text-[#414651] leading-5 sm:w-[200px] shrink-0">
          Phone number <span className="text-[#7f56d9]">*</span>
        </label>
        <div className="flex-1 sm:max-w-[512px]">
          <div className="w-full h-11 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center px-3.5 gap-2">
            <div className="flex items-center gap-1 shrink-0 cursor-pointer">
              <span className="text-[14px]">🇺🇸</span>
              <span className="text-[14px] font-medium text-[#181d27] leading-6">+1</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="w-px h-5 bg-[#d5d7da]" />
            <input
              type="tel"
              defaultValue="567 86 69"
              className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex items-center justify-end gap-3">
        <button className="h-12 px-5 border border-[#c6c5c8] rounded-2xl text-[16px] font-medium text-black leading-[1.4] hover:bg-[#f9f9f9] transition-colors">
          Cancel
        </button>
        <button className="h-12 px-5 bg-[#007aff] rounded-2xl text-[16px] font-medium text-white leading-[1.4] hover:bg-[#0066d6] transition-colors">
          Save changes
        </button>
      </div>
    </div>
  )
}

export default ParentsDetails
