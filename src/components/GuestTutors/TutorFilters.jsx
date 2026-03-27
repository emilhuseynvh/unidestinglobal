import { useState } from "react"

const subjects = [
  "Economics (160)", "Engineering & Technology (94)", "Health & Medicine (87)",
  "Arts & Humanities (76)", "Business & Economics (82)", "Environmental Science (71)",
  "Social Sciences (88)", "Education & Training (79)", "Media & Communication (73)",
]

const languages = [
  "Azerbaijani (16)", "English (32)", "Turkish (120)",
  "Spanish (45)", "French (60)", "German (75)",
]

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 12.5l-5-5-5 5" stroke="#252525" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const SearchInput = ({ placeholder }) => (
  <div className="bg-[#f5f5f5] rounded-xl flex items-center gap-2 px-4 py-3 w-full">
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
    <input type="text" placeholder={placeholder} className="flex-1 min-w-0 text-[16px] font-medium text-[#181d27] leading-6 outline-none placeholder:text-[#808080] bg-transparent" />
  </div>
)

const Checkbox = () => (
  <div className="size-5 rounded border-2 border-[#e0e0e0] shrink-0" />
)

const Toggle = ({ enabled, onToggle }) => (
  <button onClick={onToggle} className={`relative w-11 h-6 rounded-xl transition-colors ${enabled ? "bg-[#0080ff]" : "bg-[#eceff3]"}`}>
    <span className={`absolute top-0.5 size-5 rounded-full bg-white shadow-sm transition-all duration-200 ${enabled ? "left-[22px]" : "left-0.5"}`} />
  </button>
)

const TutorFilters = () => {
  const [showMoreSubjects, setShowMoreSubjects] = useState(false)
  const [showMoreLangs, setShowMoreLangs] = useState(false)
  const [availableNow, setAvailableNow] = useState(true)
  const [availableWeek, setAvailableWeek] = useState(false)

  return (
    <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 pt-6 pb-8 flex flex-col gap-2 w-full lg:w-[240px] shrink-0">
      <div className="border-b border-[#f5f5f5] px-3 py-2">
        <span className="text-[20px] font-medium text-[#252525] leading-[1.4]">Filters</span>
      </div>

      <div className="flex flex-col py-6">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">I want to study</span>
                <ChevronUp />
              </div>
              <SearchInput placeholder="Type to search" />
              <div className="flex flex-col gap-5">
                {(showMoreSubjects ? subjects : subjects.slice(0, 7)).map((s, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox />
                    <span className="text-[16px] font-normal text-[#333] leading-[1.4]">{s}</span>
                  </label>
                ))}
              </div>
            </div>
            <button onClick={() => setShowMoreSubjects(!showMoreSubjects)} className="flex items-center gap-1 text-[14px] font-medium text-[#007aff] leading-[1.4]">
              {showMoreSubjects ? "Show less" : "Show more"}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={showMoreSubjects ? "rotate-90" : "-rotate-90"}><path d="M12.5 15l-5-5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">Budget</span>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between text-[16px] font-normal text-black leading-[1.5]">
                <span>$100</span>
                <span>$10.000+</span>
              </div>
              <div className="h-1.5 bg-[#e9eaeb] rounded-full relative">
                <div className="absolute left-[5%] right-[10%] top-0 h-full bg-[#007aff] rounded-full" />
                <div className="absolute left-[5%] top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-[#007aff] rounded-full shadow-sm" />
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 size-4 bg-white border-2 border-[#007aff] rounded-full shadow-sm" />
              </div>
              <div className="flex items-center justify-between gap-3">
                <div className="flex flex-col gap-2 w-[99px]">
                  <span className="text-[12px] font-normal text-black leading-[1.4]">Minimum</span>
                  <div className="bg-[#f5f5f5] rounded-2xl h-14 flex items-center px-4">
                    <span className="text-[16px] font-medium text-[#808080] leading-6">$100</span>
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-[99px]">
                  <span className="text-[12px] font-normal text-black leading-[1.4] text-right">Maximum</span>
                  <div className="bg-[#f5f5f5] rounded-2xl h-14 flex items-center px-4">
                    <span className="text-[16px] font-medium text-[#808080] leading-6">$10.000+</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">Languages</span>
                <ChevronUp />
              </div>
              <SearchInput placeholder="Enter language" />
              <div className="flex flex-col gap-5">
                {(showMoreLangs ? languages : languages.slice(0, 5)).map((l, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer">
                    <Checkbox />
                    <span className="text-[16px] font-normal text-[#333] leading-[1.4]">{l}</span>
                  </label>
                ))}
              </div>
            </div>
            <button onClick={() => setShowMoreLangs(!showMoreLangs)} className="flex items-center gap-1 text-[14px] font-medium text-[#007aff] leading-[1.4]">
              {showMoreLangs ? "Show less" : "Show more"}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={showMoreLangs ? "rotate-90" : "-rotate-90"}><path d="M12.5 15l-5-5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">Availability</span>
              <ChevronUp />
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-normal text-[#333] leading-[1.4]">Available now</span>
                <Toggle enabled={availableNow} onToggle={() => setAvailableNow(!availableNow)} />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[16px] font-normal text-[#333] leading-[1.4]">Available this week</span>
                <Toggle enabled={availableWeek} onToggle={() => setAvailableWeek(!availableWeek)} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorFilters
