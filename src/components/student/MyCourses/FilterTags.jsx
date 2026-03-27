const CloseIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 10h10M2.5 5h15M7.5 15h5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterTag = ({ label, onRemove }) => (
  <button
    onClick={onRemove}
    className="flex items-center gap-1 h-10 px-3 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors shrink-0"
  >
    <span className="text-[14px] font-semibold text-[#414651] leading-5 whitespace-nowrap">
      {label}
    </span>
    <CloseIcon />
  </button>
)

const FilterTags = () => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-1">
      <FilterTag label="All time" />
      <FilterTag label="US, AU, +4" />
      <button className="flex items-center gap-2 h-10 px-3 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors shrink-0">
        <FilterIcon />
        <span className="text-[14px] font-semibold text-[#414651] leading-5 whitespace-nowrap">
          Reset filters
        </span>
      </button>
    </div>
  )
}

export default FilterTags
