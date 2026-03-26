import { useState, useRef, useEffect } from "react"

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#535862" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.5 15l-5-5 5-5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.5 15l5-5-5-5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChevronDownIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 7.5l5 5 5-5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlusCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6.667v6.666M6.667 10h6.666M17.5 10a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" stroke="white" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const viewOptions = [
  { label: "Month view", value: "month" },
  { label: "Week view", value: "week" },
  { label: "Day view", value: "day" },
]

const CalendarHeader = ({ view, onViewChange }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  const currentLabel = viewOptions.find((o) => o.value === view)?.label

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  return (
    <div className="flex items-center justify-between gap-4 flex-wrap sm:flex-nowrap">
      <div className="flex items-center gap-3 sm:gap-4 min-w-0 shrink-0">
        <div className="flex items-center justify-center flex-col bg-[#f0f8ff] border border-[#c3ddfd] rounded-xl size-12 shrink-0">
          <span className="text-[10px] font-semibold text-[#007aff] leading-none uppercase">Jan</span>
          <span className="text-[18px] font-bold text-[#007aff] leading-none">10</span>
        </div>
        <div className="flex flex-col gap-0.5 min-w-0">
          <div className="flex items-center gap-2">
            <span className="text-[16px] sm:text-[18px] font-semibold text-[#181d27] leading-6 whitespace-nowrap">
              {view === "day" ? "January 10, 2025" : "January 2025"}
            </span>
            <span className="text-[12px] font-medium text-[#414651] leading-[18px] bg-[#f5f5f5] border border-[#e9eaeb] rounded-full px-2 py-px whitespace-nowrap">
              Week 1
            </span>
          </div>
          <span className="text-[13px] text-[#717680] leading-5 whitespace-nowrap">
            {view === "day" ? "Friday" : "Jan 1, 2025 – Jan 31, 2025"}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center justify-center size-10 rounded-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors shrink-0">
          <SearchIcon />
        </button>

        <div className="flex items-center">
          <button className="flex items-center justify-center size-10 rounded-l-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
            <ChevronLeftIcon />
          </button>
          <button className="flex items-center justify-center h-10 px-4 border-y border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
            <span className="text-[14px] font-semibold text-[#414651] leading-5">Today</span>
          </button>
          <button className="flex items-center justify-center size-10 rounded-r-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
            <ChevronRightIcon />
          </button>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center gap-1 h-10 px-2.5 sm:px-4 rounded-lg border border-[#d5d7da] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors"
          >
            <span className="hidden sm:inline text-[14px] font-semibold text-[#414651] leading-5 whitespace-nowrap">
              {currentLabel}
            </span>
            <svg className="sm:hidden shrink-0" width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3" width="13.5" height="12" rx="1.5" stroke="#414651" strokeWidth="1.35"/><path d="M2.25 6h13.5M6 1.5V3.75M12 1.5V3.75" stroke="#414651" strokeWidth="1.35" strokeLinecap="round"/></svg>
            <ChevronDownIcon />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 top-12 bg-white border border-[#e9eaeb] rounded-lg shadow-[0px_4px_6px_-2px_rgba(10,13,18,0.03),0px_12px_16px_-4px_rgba(10,13,18,0.08)] py-1 z-20 min-w-[160px]">
              {viewOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => { onViewChange(option.value); setDropdownOpen(false) }}
                  className={`w-full text-left px-3 py-2 text-[14px] leading-5 transition-colors ${
                    view === option.value
                      ? "text-[#007aff] font-semibold bg-[#f5f5f5]"
                      : "text-[#414651] font-medium hover:bg-[#f9f9f9]"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>

        <button className="flex items-center gap-2 h-10 px-4 bg-[#007aff] rounded-lg hover:bg-[#0066d6] transition-colors shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
          <PlusCircleIcon />
          <span className="hidden sm:inline text-[14px] font-semibold text-white leading-5 whitespace-nowrap">Add lesson</span>
        </button>
      </div>
    </div>
  )
}

export default CalendarHeader
