import { useState } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"

const daysInit = [
  { name: "Sunday", enabled: false },
  { name: "Monday", enabled: false },
  { name: "Tuesday", enabled: true, openAt: "", closeAt: "" },
  { name: "Wednesday", enabled: true, openAt: "", closeAt: "" },
  { name: "Thursday", enabled: true, openAt: "", closeAt: "" },
  { name: "Friday", enabled: true, openAt: "", closeAt: "" },
  { name: "Saturday", enabled: false },
]

const Toggle = ({ enabled, onToggle }) => (
  <button onClick={onToggle} className="w-14 h-8 relative cursor-pointer shrink-0">
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="bg-gradient-to-b from-[#ececf0] to-[#f9f9fa] rounded-[10px] p-[3px]">
        <div className={`w-12 h-[26px] rounded-lg flex items-center px-[3px] transition-colors ${enabled ? "bg-[#007aff] justify-end" : "bg-[#dddfe4]"}`}>
          <div className="w-[26px] h-5 rounded-md bg-white shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)]" />
        </div>
      </div>
    </div>
  </button>
)

const EditProfileAvailability = () => {
  const [days, setDays] = useState(daysInit)

  const toggleDay = (i) => {
    setDays((prev) => prev.map((d, idx) => idx === i ? { ...d, enabled: !d.enabled } : d))
  }

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={26} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 5 — Not completed</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Set your availability</h1>
                <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Choose when you're available to teach. Students can only book sessions during your open slots — you can update this anytime.</p>
              </div>
              <button className="h-10 px-3 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                Save Changes
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">Asia/Baku — AZT (UTC+4)</span>
              <span className="text-xs text-[#8c929c] leading-4">All time shown your local timezone</span>
            </div>
            <button className="text-sm font-medium text-[#007aff]">Change timezone</button>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Click slots to toggle availability</span>

            <div className="flex flex-col divide-y divide-[#f0f0f0]">
              {days.map((day, i) => (
                <div key={day.name} className="py-4 flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Toggle enabled={day.enabled} onToggle={() => toggleDay(i)} />
                      <span className={`text-sm font-medium leading-6 ${day.enabled ? "text-[#0a0c11]" : "text-[#8c929c]"}`}>{day.name}</span>
                    </div>
                    {!day.enabled && <span className="text-sm text-[#8c929c]">Closed</span>}
                  </div>
                  {day.enabled && (
                    <>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pl-[68px]">
                        <div className="flex flex-col gap-1 flex-1">
                          <span className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Open at</span>
                          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between">
                            <span className="text-sm text-[#5b616d] px-1">Select time</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                          <span className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Close at</span>
                          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between">
                            <span className="text-sm text-[#5b616d] px-1">Select time</span>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          </div>
                        </div>
                      </div>
                      <button className="text-sm font-medium text-[#007aff] self-end flex items-center gap-1">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 3v8M3 7h8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        Add more hours
                      </button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Session Duration</label>
              <div className="border border-black/[0.06] rounded-xl h-10 px-3 flex items-center justify-between">
                <span className="text-sm text-[#0a0c11]">60 minutes</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Buffer Between Sessions</label>
              <div className="border border-black/[0.06] rounded-xl h-10 px-3 flex items-center justify-between">
                <span className="text-sm text-[#0a0c11]">15 minutes</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Advance booking notice</label>
              <div className="border border-black/[0.06] rounded-xl h-10 px-3 flex items-center justify-between">
                <span className="text-sm text-[#0a0c11]">12 hours</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Cancellation policy</label>
              <div className="border border-black/[0.06] rounded-xl h-10 px-3 flex items-center justify-between">
                <span className="text-sm text-[#0a0c11]">Moderate (24h notice)</span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileAvailability
