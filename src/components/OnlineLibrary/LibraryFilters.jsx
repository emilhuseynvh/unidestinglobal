import { useState } from "react"

const formats = [
  { label: "All Formats", count: 2300 },
  { label: "PDF Documents", count: 2300 },
  { label: "E-Books", count: 1500 },
  { label: "Worksheets", count: 1200 },
  { label: "Audio", count: 3000 },
  { label: "Video", count: 3000 },
  { label: "Presentations", count: 3000 },
]

const categoryFilters = [
  { label: "IELTS / TOEFL", count: 2300 },
  { label: "Programming", count: 2300 },
  { label: "Mathematics", count: 1500 },
  { label: "Languages", count: 1200 },
  { label: "Business", count: 3000 },
  { label: "Science", count: 3000 },
]

const levels = [
  { label: "Beginner", icon: "sofa" },
  { label: "Intermediate", icon: "cursor" },
  { label: "Advanced", icon: "cursor" },
]

const languages = [
  { label: "Azerbaijani", count: 16 },
  { label: "English", count: 32 },
  { label: "Turkish", count: 120 },
  { label: "Spanish", count: 45 },
  { label: "French", count: 60 },
  { label: "German", count: 75 },
]

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M15 12.5l-5-5-5 5" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterSection = ({ title, hasChevron = true, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex flex-col gap-5">
      <div
        className={`flex items-center justify-between ${hasChevron ? "cursor-pointer" : ""}`}
        onClick={() => hasChevron && setOpen(!open)}
      >
        <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">{title}</span>
        {hasChevron && (
          <div className={`transition-transform ${open ? "" : "rotate-180"}`}>
            <ChevronUp />
          </div>
        )}
      </div>
      {open && children}
    </div>
  )
}

const CheckboxItem = ({ label, count, checked, onChange }) => (
  <label className="flex items-center justify-between cursor-pointer">
    <div className="flex items-center gap-3">
      <div className={`size-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${checked ? "bg-[#007aff] border-[#007aff]" : "border-[#e0e0e0]"}`}>
        {checked && (
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6l2.5 2.5 4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        )}
      </div>
      <span className="text-[16px] font-normal text-[#333] leading-[1.4]">{label}</span>
    </div>
    {count !== undefined && (
      <span className="text-[16px] font-normal text-[#999] leading-[1.4]">{count}</span>
    )}
  </label>
)

const LibraryFilters = () => {
  const [selectedFormats, setSelectedFormats] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedLevels, setSelectedLevels] = useState([])
  const [selectedLanguages, setSelectedLanguages] = useState([])

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  return (
    <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 pt-6 pb-8">
      <div className="border-b border-[#f5f5f5] px-3 py-2 mb-6">
        <h3 className="text-[20px] font-medium text-[#252525] leading-[1.4]">Filters</h3>
      </div>

      <div className="flex flex-col gap-8">
        <FilterSection title="Format">
          <div className="flex flex-col gap-5">
            {formats.map((f) => (
              <CheckboxItem
                key={f.label}
                label={f.label}
                count={f.count}
                checked={selectedFormats.includes(f.label)}
                onChange={() => toggle(selectedFormats, setSelectedFormats, f.label)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Category">
          <div className="flex flex-col gap-5">
            {categoryFilters.map((c) => (
              <CheckboxItem
                key={c.label}
                label={c.label}
                count={c.count}
                checked={selectedCategories.includes(c.label)}
                onChange={() => toggle(selectedCategories, setSelectedCategories, c.label)}
              />
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Price" hasChevron={false}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-[16px] font-normal text-black leading-[1.5]">
              <span>$100</span>
              <span>$10.000+</span>
            </div>
            <div className="relative w-full h-[6px]">
              <div className="absolute inset-0 bg-[#e0e0e0] rounded-full" />
              <div className="absolute left-[10%] right-[30%] top-0 h-full bg-[#007aff] rounded-full" />
              <div className="absolute left-[10%] top-1/2 -translate-y-1/2 -translate-x-1/2 size-3 bg-white border-2 border-[#007aff] rounded-full" />
              <div className="absolute right-[30%] top-1/2 -translate-y-1/2 translate-x-1/2 size-3 bg-white border-2 border-[#007aff] rounded-full" />
            </div>
            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="flex flex-col gap-2 w-[99px]">
                <span className="text-[12px] font-normal text-black leading-[1.4]">Minimum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center">
                  <input
                    type="text"
                    placeholder="$100"
                    className="bg-transparent w-full text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[99px]">
                <span className="text-[12px] font-normal text-black leading-[1.4] text-right">Maximum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center">
                  <input
                    type="text"
                    placeholder="$10.000+"
                    className="bg-transparent w-full text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Level" hasChevron={false}>
          <div className="flex flex-wrap gap-3">
            {levels.map((level) => (
              <button
                key={level.label}
                onClick={() => toggle(selectedLevels, setSelectedLevels, level.label)}
                className={`flex items-center gap-2 px-3 py-2.5 rounded-3xl text-[14px] font-medium leading-[1.4] transition-colors ${
                  selectedLevels.includes(level.label)
                    ? "bg-[#007aff] text-white"
                    : "bg-[#f5f5f5] text-[#333]"
                }`}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
                  <path d="M9 2l2 4.5H15l-3.5 3 1.5 4.5L9 11.5 5 14l1.5-4.5L3 6.5h4L9 2z" stroke={selectedLevels.includes(level.label) ? "white" : "#333"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {level.label}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Languages">
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input
                type="text"
                placeholder="Enter language"
                className="flex-1 bg-transparent text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6"
              />
            </div>
            <div className="flex flex-col gap-5">
              {languages.map((l) => (
                <CheckboxItem
                  key={l.label}
                  label={`${l.label} (${l.count})`}
                  checked={selectedLanguages.includes(l.label)}
                  onChange={() => toggle(selectedLanguages, setSelectedLanguages, l.label)}
                />
              ))}
            </div>
            <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] flex items-center gap-1 self-start">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </FilterSection>
      </div>
    </div>
  )
}

export default LibraryFilters
