const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 7.5l5 5 5-5" stroke="#535862" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2.5" y="3.333" width="15" height="13.333" rx="1.667" stroke="#535862" strokeWidth="1.5"/>
    <path d="M2.5 6.667h15M6.667 1.667V4.167M13.333 1.667V4.167" stroke="#535862" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const SelectDropdown = ({ label, value, className = "" }) => (
  <div className={`flex flex-col gap-1.5 ${className}`}>
    <span className="text-[14px] font-medium text-[#414651] leading-5">{label}</span>
    <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:border-[#a4a7ae] transition-colors">
      <span className="flex-1 text-[16px] font-medium text-[#181d27] leading-6">{value}</span>
      <ChevronDownIcon />
    </div>
  </div>
)

const TutorFilters = () => {
  return (
    <div className="bg-[#fafafa] rounded-xl p-4 sm:p-5 flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div className="flex flex-col gap-1.5 sm:col-span-2 lg:col-span-1">
          <span className="text-[14px] font-medium text-[#414651] leading-5">Search for tutors</span>
          <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
            />
            <div className="hidden sm:block border border-[#e9eaeb] rounded px-1 py-px">
              <span className="text-[12px] font-medium text-[#717680] leading-[18px]">⌘K</span>
            </div>
          </div>
        </div>
        <SelectDropdown label="Type" value="All" />
        <SelectDropdown label="Price per lesson" value="All" />
        <SelectDropdown label="Language" value="All" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <SelectDropdown label="Field" value="All" />
        <div className="flex flex-col gap-1.5">
          <span className="text-[14px] font-medium text-[#414651] leading-5">Available</span>
          <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:border-[#a4a7ae] transition-colors">
            <CalendarIcon />
            <span className="flex-1 text-[14px] sm:text-[16px] font-medium text-[#181d27] leading-6 whitespace-nowrap">
              Jan 10, 2025 – Jan 16, 2025
            </span>
          </div>
        </div>
        <SelectDropdown label="Language" value="All" />
      </div>
    </div>
  )
}

export default TutorFilters
