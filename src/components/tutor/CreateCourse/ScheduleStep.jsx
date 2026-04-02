import { useState } from "react"

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const defaultActive = ["Tuesday", "Wednesday", "Thursday", "Friday"]

const recurrenceOptions = [
  { id: "weekly", title: "Weekly — every Thursday", desc: "Repeats every week until end date" },
  { id: "biweekly", title: "Bi-weekly", desc: "Every other week" },
  { id: "onetime", title: "One-time event", desc: "Single session only" },
]

const ScheduleStep = ({ onNext }) => {
  const [activeDays, setActiveDays] = useState(defaultActive)
  const [recurrence, setRecurrence] = useState(null)

  const toggleDay = (day) => {
    setActiveDays((prev) => prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day])
  }

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 3 of 5 — Schedule</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Schedule your live class</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">A strong cover increases click-through rate. Choose an emoji cover or upload a custom image.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Session Date Info */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="px-5 py-4">
          <h3 className="text-base font-semibold text-[#0a0c11] leading-6">Session date  Information</h3>
        </div>
        <div className="px-5 pb-5 flex flex-col gap-5">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-4 py-2 border-b border-black/[0.06]">
            <span className="text-sm text-[#5b616d] leading-5 sm:w-[160px] shrink-0">Session start date</span>
            <span className="text-base font-medium text-[#0a0c11] leading-6">31-03-2026</span>
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-4 py-2">
            <span className="text-sm text-[#5b616d] leading-5 sm:w-[160px] shrink-0">Registration period</span>
            <span className="text-base font-medium text-[#0a0c11] leading-6">25-03-2026 / 30-03-2026</span>
          </div>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="px-5 py-4">
          <h3 className="text-base font-semibold text-[#0a0c11] leading-6">Select your class schedule</h3>
        </div>
        <div className="px-5 pb-5 flex flex-col">
          {days.map((day, i) => {
            const isActive = activeDays.includes(day)
            return (
              <div key={day}>
                <div className={`flex flex-col sm:flex-row sm:items-start justify-between gap-4 py-6`}>
                  <div className="flex items-center gap-[15px] shrink-0">
                    <button onClick={() => toggleDay(day)} className={`w-14 h-8 rounded-[10px] p-[3px] transition-colors ${isActive ? "bg-[#007aff]" : "bg-[#dddfe4]"}`}>
                      <div className={`w-[26px] h-[26px] bg-white rounded-lg shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)] transition-transform ${isActive ? "translate-x-[22px]" : "translate-x-0"}`} />
                    </button>
                    <span className={`text-base leading-6 ${isActive ? "text-[#0a0c11]" : "text-[#5b616d]"}`}>{day}</span>
                  </div>
                  {isActive ? (
                    <div className="flex flex-wrap items-end gap-4 flex-1 max-w-[550px]">
                      <div className="flex-1 min-w-[120px] flex flex-col gap-1">
                        <span className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Duration</span>
                        <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                          <span className="text-sm text-[#8c929c] leading-6 px-1">60 minutes</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[120px] flex flex-col gap-1">
                        <span className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Class start time</span>
                        <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                          <span className="text-sm text-[#8c929c] leading-6 px-1">Select time</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      </div>
                      <div className="flex-1 min-w-[120px] flex flex-col gap-1">
                        <span className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Class end time</span>
                        <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                          <span className="text-sm text-[#8c929c] leading-6 px-1">Select time</span>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <span className="text-base text-[#5b616d] leading-6">Closed</span>
                  )}
                </div>
                {i < days.length - 1 && <div className="h-px bg-black/[0.06]" />}
              </div>
            )
          })}
        </div>
      </div>

      {/* Recurrence */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Recurrence</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {recurrenceOptions.map((opt) => (
            <button key={opt.id} onClick={() => setRecurrence(opt.id)} className={`p-4 rounded-xl border flex items-start gap-2 text-left ${recurrence === opt.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"} bg-white`}>
              <div className="pt-0.5 shrink-0">
                <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${recurrence === opt.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                  {recurrence === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-base font-medium text-[#0a0c11] leading-6">{opt.title}</p>
                <p className="text-sm text-[#5b616d] leading-5">{opt.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ScheduleStep
