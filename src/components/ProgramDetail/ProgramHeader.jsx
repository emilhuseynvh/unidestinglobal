const imgUniversity = "https://www.figma.com/api/mcp/asset/2d2414cd-3b8b-4e97-b514-12f4b6e72c5a"

const tags = ["Master's Degree", "United Kingdom", "12 months", "English", "Scholarship Available"]

const ProgramHeader = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[14px] font-normal text-[#666] leading-5">
          Study Abroad &gt; Programs &gt; MSc Computer Science
        </span>
        <div className="h-px bg-[#e9eaeb]" />
      </div>

      <div className="flex items-center gap-2">
        <div className="size-16 rounded-[30px] border border-[#e6e6e6] overflow-hidden shrink-0">
          <img src={imgUniversity} alt="Stanford University" className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-[16px] font-medium text-black leading-6">Stanford University</span>
          <span className="text-[14px] font-normal text-[#666] leading-5">Stanford, California, USA</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <h1 className="text-[32px] sm:text-[36px] font-semibold text-black leading-[1.25]">
          MSc Computer Science
        </h1>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span key={tag} className="bg-[#f5f5f5] rounded-full px-3 py-1.5 text-[14px] font-medium text-[#333] leading-[1.4] flex items-center gap-1.5">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.167l1.75 3.5h3.917L9.5 7.583l1.167 3.5L7 8.75 3.333 11.083l1.167-3.5L1.333 4.667H5.25L7 1.167z" fill="#333" fillOpacity="0.4"/>
              </svg>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-end gap-8 sm:gap-12">
        <div className="flex flex-col">
          <span className="text-[32px] sm:text-[36px] font-bold text-black leading-tight">$300</span>
          <span className="text-[14px] font-normal text-[#666] leading-5">Tution / Year</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[24px] sm:text-[28px] font-bold text-black leading-tight">12 months</span>
          <span className="text-[14px] font-normal text-[#666] leading-5">Duration</span>
        </div>
        <div className="flex flex-col">
          <span className="text-[24px] sm:text-[28px] font-bold text-black leading-tight">Sep 2026</span>
          <span className="text-[14px] font-normal text-[#666] leading-5">Next intake</span>
        </div>
      </div>
    </div>
  )
}

export default ProgramHeader
