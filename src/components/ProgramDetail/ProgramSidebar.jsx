const ProgramSidebar = () => {
  return (
    <div className="bg-white border border-[#f5f5f5] rounded-2xl overflow-hidden sticky top-6">
      <div className="p-4 flex flex-col gap-4">
        <div className="px-3 flex flex-col gap-2">
          <span className="text-[32px] font-semibold text-black leading-[1.25]">$300</span>
          <div className="flex items-center gap-1.5 text-[14px] font-normal text-[#666] leading-5">
            <span>Per year</span>
            <span className="size-1 rounded-full bg-[#666]" />
            <span>International</span>
          </div>
        </div>

        <div className="bg-[#f5f5f5] rounded-xl px-3 py-2.5 flex items-center gap-2.5">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M9 1.5l1.75 3.5h3.917L11.5 7.917l1.167 3.5L9 9.083 5.333 11.417l1.167-3.5L3.333 5H7.25L9 1.5z" fill="#333" fillOpacity="0.5"/>
          </svg>
          <span className="text-[14px] font-medium text-[#333] leading-5">
            Scholarship Available - up to 100% off
          </span>
        </div>

        <div className="bg-[#fafafa] rounded-xl px-3 py-3 flex flex-col gap-1">
          <span className="text-[12px] font-normal text-[#666] leading-[1.4]">Application deadline</span>
          <span className="text-[22px] font-semibold text-black leading-tight">March 1, 2026</span>
          <span className="text-[12px] font-normal text-[#ea4335] leading-[1.4]">left 8 days</span>
        </div>

        <div className="flex flex-col gap-3 px-3">
          <button className="bg-[#007aff] text-white rounded-full py-3 text-[16px] font-medium leading-[1.4] text-center w-full hover:bg-[#0066d6] transition-colors">
            Apply Now
          </button>
          <button className="border border-[#e6e6e6] rounded-full py-3 text-[16px] font-medium text-black leading-[1.4] text-center w-full hover:bg-[#f5f5f5] transition-colors">
            Save Program
          </button>
        </div>
      </div>

      <div className="h-px bg-[#e9eaeb] mx-4" />

      <div className="p-4 flex flex-col gap-4 px-7">
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[16px] font-medium text-[#333] leading-[1.4]">University of Oxford</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5zM6 12v5c3 3 9 3 12 0v-5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-[16px] font-medium text-[#333] leading-[1.4]">United Kingdom, Oxford</span>
        </div>
        <div className="flex items-center gap-3">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5"/>
            <path d="M12 6v6l4 2" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className="text-[16px] font-medium text-[#333] leading-[1.4]">12 months · Full-time</span>
        </div>
      </div>
    </div>
  )
}

export default ProgramSidebar
