import { useState } from "react"

const studyFields = [
  { label: "Economics", count: 160 },
  { label: "Engineering & Technology", count: 94 },
  { label: "Health & Medicine", count: 87 },
  { label: "Arts & Humanities", count: 76 },
  { label: "Business & Economics", count: 82 },
  { label: "Environmental Science", count: 71 },
  { label: "Social Sciences", count: 88 },
  { label: "Education & Training", count: 79 },
  { label: "Media & Communication", count: 73 },
]

const destinations = [
  { label: "Azerbaijan", count: 16 },
  { label: "United Kingdom", count: 32 },
  { label: "United States of America", count: 120 },
  { label: "Ukraine", count: 51 },
  { label: "Canada", count: 24 },
  { label: "Germany", count: 45 },
  { label: "Australia", count: 30 },
  { label: "Japan", count: 28 },
]

const deliveryMethods = ["On-campus", "Online", "Blended learning"]

const programTypes = [
  "Study Program",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Full-time internship",
  "Part-time internship",
  "MBA",
]

const languages = [
  { label: "Azerbaijani", count: 16 },
  { label: "English", count: 32 },
  { label: "Turkish", count: 120 },
  { label: "Spanish", count: 45 },
  { label: "French", count: 60 },
  { label: "German", count: 75 },
  { label: "Italian", count: 50 },
]

const scholarshipTypes = ["Full", "Partial", "Tuition waiver"]

const ChevronUp = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
    <path d="M15 12.5l-5-5-5 5" stroke="#252525" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterSection = ({ title, hasChevron = true, children }) => {
  const [open, setOpen] = useState(true)
  return (
    <div className="flex flex-col gap-5">
      <div className={`flex items-center justify-between ${hasChevron ? "cursor-pointer" : ""}`} onClick={() => hasChevron && setOpen(!open)}>
        <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">{title}</span>
        {hasChevron && <div className={`transition-transform ${open ? "" : "rotate-180"}`}><ChevronUp /></div>}
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
    {count !== undefined && <span className="text-[16px] font-normal text-[#999] leading-[1.4]">{count}</span>}
  </label>
)

const ProgramsFilters = () => {
  const [selectedFields, setSelectedFields] = useState([])
  const [selectedDest, setSelectedDest] = useState([])
  const [selectedDelivery, setSelectedDelivery] = useState([])
  const [selectedTypes, setSelectedTypes] = useState([])
  const [selectedLangs, setSelectedLangs] = useState([])
  const [selectedScholarship, setSelectedScholarship] = useState([])
  const [scholarshipEnabled, setScholarshipEnabled] = useState(false)

  const toggle = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val])
  }

  return (
    <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 pt-6 pb-8">
      <div className="border-b border-[#f5f5f5] px-3 py-2 mb-6">
        <h3 className="text-[20px] font-medium text-[#252525] leading-[1.4]">Filters</h3>
      </div>

      <div className="flex flex-col gap-8">
        <FilterSection title="I want to study">
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="text" placeholder="Type to search" className="flex-1 bg-transparent text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6" />
            </div>
            <div className="flex flex-col gap-5">
              {studyFields.map((f) => (
                <CheckboxItem key={f.label} label={`${f.label} (${f.count})`} checked={selectedFields.includes(f.label)} onChange={() => toggle(selectedFields, setSelectedFields, f.label)} />
              ))}
            </div>
            <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] flex items-center gap-1 self-start">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </FilterSection>

        <FilterSection title="Destination">
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="text" placeholder="Enter location" className="flex-1 bg-transparent text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6" />
            </div>
            <div className="flex flex-col gap-5">
              {destinations.map((d) => (
                <CheckboxItem key={d.label} label={`${d.label} (${d.count})`} checked={selectedDest.includes(d.label)} onChange={() => toggle(selectedDest, setSelectedDest, d.label)} />
              ))}
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Budget" hasChevron={false}>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between text-[16px] font-normal text-black leading-[1.5]">
              <span>$100</span>
              <span>$10.000+</span>
            </div>
            <div className="relative w-full h-[6px]">
              <div className="absolute inset-0 bg-[#e0e0e0] rounded-full" />
              <div className="absolute left-[10%] right-[30%] top-0 h-full bg-[#007aff] rounded-full" />
            </div>
            <div className="flex items-center justify-between gap-4 mt-1">
              <div className="flex flex-col gap-2 w-[99px]">
                <span className="text-[12px] font-normal text-black leading-[1.4]">Minimum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center">
                  <input type="text" placeholder="$100" className="bg-transparent w-full text-[16px] font-medium placeholder:text-[#808080] outline-none leading-6" />
                </div>
              </div>
              <div className="flex flex-col gap-2 w-[99px]">
                <span className="text-[12px] font-normal text-black leading-[1.4] text-right">Maximum</span>
                <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center">
                  <input type="text" placeholder="$6000+" className="bg-transparent w-full text-[16px] font-medium placeholder:text-[#808080] outline-none leading-6" />
                </div>
              </div>
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Total estimate cost" hasChevron={false}>
          <div className="flex items-center justify-between gap-4">
            <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center flex-1">
              <input type="text" placeholder="$50" className="bg-transparent w-full text-[16px] font-medium placeholder:text-[#808080] outline-none leading-6" />
            </div>
            <div className="bg-[#f5f5f5] rounded-2xl h-14 px-4 flex items-center flex-1">
              <input type="text" placeholder="$6000+" className="bg-transparent w-full text-[16px] font-medium placeholder:text-[#808080] outline-none leading-6" />
            </div>
          </div>
        </FilterSection>

        <FilterSection title="Delivery method" hasChevron={false}>
          <div className="flex flex-wrap gap-3">
            {deliveryMethods.map((m) => (
              <button key={m} onClick={() => toggle(selectedDelivery, setSelectedDelivery, m)} className={`flex items-center gap-2 px-3 py-2.5 rounded-3xl text-[14px] font-medium leading-[1.4] transition-colors ${selectedDelivery.includes(m) ? "bg-[#007aff] text-white" : "bg-[#f5f5f5] text-[#333]"}`}>
                {m}
              </button>
            ))}
          </div>
        </FilterSection>

        <FilterSection title="Program Type">
          <div className="flex flex-col gap-5">
            {programTypes.map((t) => (
              <CheckboxItem key={t} label={t} checked={selectedTypes.includes(t)} onChange={() => toggle(selectedTypes, setSelectedTypes, t)} />
            ))}
            <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] flex items-center gap-1 self-start">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </FilterSection>

        <FilterSection title="Languages">
          <div className="flex flex-col gap-4">
            <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <input type="text" placeholder="Enter language" className="flex-1 bg-transparent text-[16px] font-medium placeholder:text-[#808080] outline-none leading-6" />
            </div>
            <div className="flex flex-col gap-5">
              {languages.map((l) => (
                <CheckboxItem key={l.label} label={`${l.label} (${l.count})`} checked={selectedLangs.includes(l.label)} onChange={() => toggle(selectedLangs, setSelectedLangs, l.label)} />
              ))}
            </div>
            <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] flex items-center gap-1 self-start">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </FilterSection>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <span className="text-[16px] font-semibold text-[#252525] leading-[1.5]">Scholarship available</span>
            <button onClick={() => setScholarshipEnabled(!scholarshipEnabled)} className={`w-11 h-6 rounded-full transition-colors ${scholarshipEnabled ? "bg-[#007aff]" : "bg-[#e0e0e0]"}`}>
              <div className={`size-5 bg-white rounded-full shadow transition-transform ${scholarshipEnabled ? "translate-x-5" : "translate-x-0.5"}`} />
            </button>
          </div>
          {scholarshipEnabled && (
            <div className="flex flex-wrap gap-3">
              {scholarshipTypes.map((s) => (
                <button key={s} onClick={() => toggle(selectedScholarship, setSelectedScholarship, s)} className={`flex items-center gap-2 px-3 py-2.5 rounded-3xl text-[14px] font-medium leading-[1.4] transition-colors ${selectedScholarship.includes(s) ? "bg-[#007aff] text-white" : "bg-[#f5f5f5] text-[#333]"}`}>
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProgramsFilters
