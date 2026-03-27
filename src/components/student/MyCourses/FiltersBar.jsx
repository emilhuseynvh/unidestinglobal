const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5l5 5 5-5" stroke="#535862" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SelectDropdown = ({ label, value }) => (
  <div className="flex flex-col gap-1.5 flex-1 min-w-0">
    <span className="text-[14px] font-medium text-[#414651] leading-5">
      {label}
    </span>
    <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] cursor-pointer hover:border-[#a4a7ae] transition-colors">
      <span className="flex-1 text-[16px] font-medium text-[#181d27] leading-6">
        {value}
      </span>
      <ChevronDownIcon />
    </div>
  </div>
)

const FiltersBar = () => {
  return (
    <div className="bg-[#fafafa] rounded-xl p-4 sm:p-5">
      <div className="flex flex-col sm:flex-row sm:items-end gap-3">
        <div className="flex flex-col gap-1.5 w-full sm:w-90 sm:shrink-0">
          <span className="text-[14px] font-medium text-[#414651] leading-5">
            Search for course
          </span>
          <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search"
              className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
            />
            <div className="border border-[#e9eaeb] rounded px-1 py-px hidden sm:block">
              <span className="text-[12px] font-medium text-[#717680] leading-[18px]">
                ⌘K
              </span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 w-full sm:contents">
          <SelectDropdown label="Type" value="All" />
          <SelectDropdown label="Status" value="All" />
          <SelectDropdown label="Progress" value="All" />
        </div>
      </div>
    </div>
  )
}

export default FiltersBar
