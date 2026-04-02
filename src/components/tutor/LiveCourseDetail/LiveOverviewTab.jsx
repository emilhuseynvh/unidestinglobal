const students = [
  { name: "Leyla Mammadova", email: "leyla@email.com", initials: "LM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]" },
  { name: "Sara Rzayeva", email: "sara@email.com", initials: "SR", gradient: "from-[#409b3f] to-[rgba(64,155,63,0.2)]" },
  { name: "Anar Hasanov", email: "anar@email.com", initials: "AH", gradient: "from-[#e4a000] to-[rgba(255,195,10,0.2)]" },
  { name: "Fidan Isayeva", email: "fidan@email.com", initials: "FI", gradient: "from-[#06b1f1] to-[rgba(6,177,241,0.12)]" },
  { name: "Nihat Karimov", email: "nihat@email.com", initials: "NK", gradient: "from-[#ed4030] to-[rgba(237,64,48,0.2)]" },
  { name: "Ali Mammadov", email: "ali@email.com", initials: "AM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]" },
]

const schedule = [
  { label: "Recurrence", value: "Every Thursday" },
  { label: "Time", value: "4:00 PM AZT" },
  { label: "Total sessions", value: "12" },
  { label: "Duration", value: "60 minutes" },
  { label: "End date", value: "Jun 19, 2026" },
]

const reviews = [
  { name: "Leyla M.", initials: "LM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", text: '"Went from 5 to 7 in 3 months. The exam technique sections are incredible."', stars: 5 },
  { name: "Sara R.", initials: "SR", gradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]", text: '"Best IB Biology resource I\'ve found. Clear, structured, exam-focused."', stars: 5 },
]

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-base font-semibold text-[#0a0c11] leading-6">{title}</span>
    </div>
  </div>
)

const LiveOverviewTab = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Upcoming Sessions */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#5b616d" strokeWidth="1.5" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>}
          title="Upcoming Sessions"
        />
        <div className="p-5">
          <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-[28px] p-3">
            <div className="bg-white rounded-2xl p-3 flex flex-col gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
              <div className="w-8 h-8 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" fill="#ed4030" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" fill="#ed4030" /></svg>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base font-semibold text-[#0a0c11] leading-6">
                  AP Biology Weekly Group — Spring 2026 — Session #7 is  <span className="text-[#df2917]">● LIVE NOW</span>
                </p>
                <p className="text-sm text-[#8c929c] leading-5">Genetics & Inheritance · Aynur Karimova · 12/15 students joined · Started 5 min ago</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <button className="h-8 px-2 rounded-lg border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-xs font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333v2.334M8 12.333v2.334M3.287 3.287l1.65 1.65M11.063 11.063l1.65 1.65M1.333 8h2.334M12.333 8h2.334M3.287 12.713l1.65-1.65M11.063 4.937l1.65-1.65" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  Send Reminder
                </button>
                <button className="h-8 px-2 rounded-lg bg-[#ed4030] backdrop-blur-[12px] border border-black/[0.09] text-xs font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.333" y="2.667" width="10" height="10.667" rx="1.5" stroke="white" strokeWidth="1.2" /><path d="M11.333 6.667l3.334-2v6.666l-3.334-2V6.667z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Start Stream
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enrolled Students */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Enrolled students"
        />
        <div className="p-5">
          <div className="flex flex-col">
            {students.map((s, i) => (
              <div key={i} className={`flex items-center gap-2 px-4 py-3 ${i < students.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
                <div className={`w-8 h-8 rounded-full bg-gradient-to-b ${s.gradient} border border-black/[0.03] flex items-center justify-center shrink-0`}>
                  <span className="text-xs font-medium text-white leading-4">{s.initials}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-[#0a0c11] leading-5">{s.name}</span>
                  <span className="text-xs text-[#5b616d] leading-4">{s.email}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" stroke="#5b616d" strokeWidth="1.5" /><rect x="10" y="7" width="4" height="14" rx="1" stroke="#5b616d" strokeWidth="1.5" /><rect x="17" y="3" width="4" height="18" rx="1" stroke="#5b616d" strokeWidth="1.5" /></svg>}
          title="Class Schedule"
        />
        <div className="px-4 py-3.5">
          {schedule.map((item, i) => (
            <div key={i} className={`flex items-center justify-between py-2 ${i < schedule.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <span className="text-xs text-[#8c929c] leading-4">{item.label}</span>
              <span className="text-sm font-semibold text-[#0a0c11] leading-5">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffc30a" stroke="#ffc30a" strokeWidth="1" /></svg>}
          title="Recent Reviews"
        />
        <div className="px-5 py-3.5 flex flex-col gap-1.5">
          {reviews.map((review, i) => (
            <div key={i} className={`flex flex-col gap-1.5 px-3.5 py-3 ${i < reviews.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-b ${review.gradient} border border-black/[0.03] flex items-center justify-center`}>
                  <span className="text-[10px] font-medium text-white leading-4">{review.initials}</span>
                </div>
                <span className="text-xs font-semibold text-[#0a0c11]">{review.name}</span>
                <span className="ml-auto text-sm text-[#0a0c11] leading-5">{"★".repeat(review.stars)}</span>
              </div>
              <p className="text-xs text-[#5b616d] leading-[18px]">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LiveOverviewTab
