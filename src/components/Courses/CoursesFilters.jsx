import { useState } from "react"

const categories = [
  { name: "Economics", count: 160 },
  { name: "Engineering & Technology", count: 94 },
  { name: "Health & Medicine", count: 87 },
  { name: "Arts & Humanities", count: 76 },
  { name: "Business & Economics", count: 82 },
  { name: "Environmental Science", count: 71 },
  { name: "Social Sciences", count: 88 },
  { name: "Education & Training", count: 79 },
  { name: "Media & Communication", count: 73 },
]

const languages = [
  { name: "Azerbaijani", count: 16 },
  { name: "English", count: 32 },
  { name: "Turkish", count: 120 },
  { name: "Spanish", count: 45 },
  { name: "French", count: 60 },
  { name: "German", count: 75 },
]

const deliveryMethods = [
  { name: "On-campus", icon: "sofa" },
  { name: "Online", icon: "cursor" },
  { name: "Offline", icon: "cursor" },
  { name: "Blended learning", icon: "sparkles" },
]

const SofaIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.25 9.75v3h13.5v-3M3 6.75v3a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-3a1.5 1.5 0 00-1.5-1.5h-9A1.5 1.5 0 003 6.75z" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4.5 12.75v1.5M13.5 12.75v1.5" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const CursorIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M3 3l5.25 12 1.875-4.875L15 8.25 3 3z" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.125 10.125L15 15" stroke="#333" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SparklesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5l1.286 3.857L14.143 6.643l-3.857 1.286L9 11.786 7.714 7.929 3.857 6.643l3.857-1.286L9 1.5zM3.75 12l.643 1.929L6.321 14.571l-1.929.643L3.75 17.143l-.643-1.929L1.179 14.571l1.929-.643L3.75 12zM14.25 10.5l.643 1.929 1.929.643-1.929.643-.643 1.929-.643-1.929-1.929-.643 1.929-.643.643-1.929z" fill="#333" />
  </svg>
)

const ChevronUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M15 12.5l-5-5-5 5" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ShowMoreIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 8l5 5 5-5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const iconMap = { sofa: SofaIcon, cursor: CursorIcon, sparkles: SparklesIcon }

const CoursesFilters = () => {
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [availableNow, setAvailableNow] = useState(true)
  const [availableThisWeek, setAvailableThisWeek] = useState(true)

  const toggleItem = (list, setList, name) => {
    setList((prev) => prev.includes(name) ? prev.filter((c) => c !== name) : [...prev, name])
  }

  return (
    <div className="w-full lg:w-[356px] shrink-0 py-6">
      <div className="flex flex-col gap-8 px-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#252525] leading-[1.5]">I want to study</span>
            <ChevronUpIcon />
          </div>
          <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
            <SearchIcon />
            <input type="text" placeholder="Type to search" className="bg-transparent flex-1 text-base font-medium placeholder:text-[#808080] focus:outline-none leading-6" />
          </div>
          <div className="flex flex-col gap-5">
            {categories.map((cat) => (
              <label key={cat.name} className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => toggleItem(selectedCategories, setSelectedCategories, cat.name)}
                  className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                    selectedCategories.includes(cat.name) ? "bg-[#007aff] border-[#007aff]" : "border-[#e0e0e0]"
                  }`}
                >
                  {selectedCategories.includes(cat.name) && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
                <span className="text-base text-[#333] leading-[1.4]">{cat.name} ({cat.count})</span>
              </label>
            ))}
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[#007aff] self-start">
            Show more <ShowMoreIcon />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-base font-semibold text-[#252525] leading-[1.5]">Budget</span>
          <div className="flex flex-col gap-3">
            <div className="flex justify-between text-base text-black leading-[1.5]">
              <span>$100</span>
              <span>$10.000+</span>
            </div>
            <div className="w-full h-[6px] bg-[#007aff] rounded-full relative">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[7px] h-[10px] bg-[#252525] rounded-full" />
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[7px] h-[10px] bg-[#252525] rounded-full" />
            </div>
            <div className="flex justify-between gap-6">
              <div className="flex flex-col gap-2 w-[99px]">
                <span className="text-xs text-black leading-[1.4]">Minimum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center">
                  <span className="text-base font-medium text-[#808080] leading-6">$100</span>
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[99px] items-end">
                <span className="text-xs text-black leading-[1.4] text-right">Maximum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center w-full">
                  <span className="text-base font-medium text-[#808080] leading-6">$10.000+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <span className="text-base font-semibold text-[#252525] leading-[1.5]">Delivery method</span>
          <div className="flex flex-wrap gap-3">
            {deliveryMethods.map((method) => {
              const Icon = iconMap[method.icon]
              return (
                <button key={method.name} className="flex items-center gap-2 px-3 py-2.5 rounded-3xl bg-[#f5f5f5] text-sm font-medium text-[#333] hover:bg-[#e8e8ec] transition-colors leading-[1.4]">
                  <Icon />
                  {method.name}
                </button>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#252525] leading-[1.5]">Languages</span>
            <ChevronUpIcon />
          </div>
          <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
            <SearchIcon />
            <input type="text" placeholder="Enter language" className="bg-transparent flex-1 text-base font-medium placeholder:text-[#808080] focus:outline-none leading-6" />
          </div>
          <div className="flex flex-col gap-5">
            {languages.map((lang) => (
              <label key={lang.name} className="flex items-center gap-3 cursor-pointer">
                <div
                  onClick={() => toggleItem(selectedLanguages, setSelectedLanguages, lang.name)}
                  className={`w-5 h-5 rounded border-2 shrink-0 flex items-center justify-center transition-colors ${
                    selectedLanguages.includes(lang.name) ? "bg-[#007aff] border-[#007aff]" : "border-[#e0e0e0]"
                  }`}
                >
                  {selectedLanguages.includes(lang.name) && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2.5 6l2.5 2.5 4.5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
                <span className="text-base text-[#333] leading-[1.4]">{lang.name} ({lang.count})</span>
              </label>
            ))}
          </div>
          <button className="flex items-center gap-1 text-sm font-medium text-[#007aff] self-start">
            Show more <ShowMoreIcon />
          </button>
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="text-base font-semibold text-[#252525] leading-[1.5]">Availability</span>
            <ChevronUpIcon />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-base text-[#333] leading-[1.4]">Available now</span>
              <button onClick={() => setAvailableNow(!availableNow)} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${availableNow ? "bg-[#007aff]" : "bg-[#dddfe4]"}`}>
                <div className={`w-[18px] h-[18px] rounded-md bg-white shadow transition-transform ${availableNow ? "translate-x-[14px]" : "translate-x-0"}`} />
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-base text-[#333] leading-[1.4]">Available this week</span>
              <button onClick={() => setAvailableThisWeek(!availableThisWeek)} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${availableThisWeek ? "bg-[#007aff]" : "bg-[#dddfe4]"}`}>
                <div className={`w-[18px] h-[18px] rounded-md bg-white shadow transition-transform ${availableThisWeek ? "translate-x-[14px]" : "translate-x-0"}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesFilters
