const BLOCK_STYLES = {
  gray: { bg: "bg-[#f9fafb]", border: "border-[#d5d7da]", title: "text-[#181d27]", time: "text-[#717680]" },
  blue: { bg: "bg-[#eff8ff]", border: "border-[#84caff]", title: "text-[#007aff]", time: "text-[#007aff]" },
  orange: { bg: "bg-[#fff1f0]", border: "border-[#fda29b]", title: "text-[#e04f16]", time: "text-[#e04f16]" },
  green: { bg: "bg-[#ecfdf3]", border: "border-[#6ce9a6]", title: "text-[#067647]", time: "text-[#067647]", dot: "bg-[#17b26a]" },
  red: { bg: "bg-[#f9fafb]", border: "border-[#d5d7da]", title: "text-[#181d27]", time: "text-[#717680]", dot: "bg-[#f04438]" },
  purple: { bg: "bg-[#f4f3ff]", border: "border-[#b692f6]", title: "text-[#7c3aed]", time: "text-[#7c3aed]", dot: "bg-[#7c3aed]" },
  yellow: { bg: "bg-[#fefce8]", border: "border-[#fde68a]", title: "text-[#a16207]", time: "text-[#a16207]" },
}

const weekDays = [
  { label: "Mon", day: 6 },
  { label: "Tue", day: 7 },
  { label: "Wed", day: 8 },
  { label: "Thur", day: 9 },
  { label: "Fri", day: 10, today: true },
  { label: "Sat", day: 11 },
  { label: "Sun", day: 12 },
]

const weekEvents = {
  0: [
    { title: "Monday st...", time: "", start: 9, dur: 0.75, color: "gray" },
    { title: "Content pl...", time: "11:00 AM", start: 11, dur: 1.5, color: "blue" },
  ],
  1: [
    { title: "One-on-o...", time: "10:00 AM", start: 10, dur: 1.25, color: "orange" },
    { title: "Catch up...", time: "3:30 PM", start: 15.5, dur: 1.5, color: "blue" },
  ],
  2: [
    { title: "Deep work", time: "9:00 AM", start: 9, dur: 1.5, color: "blue" },
    { title: "Design sync", time: "10:30 AM", start: 10.5, dur: 0.75, color: "gray" },
    { title: "SEO planni...", time: "1:30 PM", start: 13.5, dur: 1, color: "gray" },
    { title: "Meetup ev...", time: "3:00 PM", start: 15, dur: 2, color: "yellow" },
  ],
  3: [
    { title: "Lunch wi...", time: "12:00 PM", start: 12, dur: 1.25, color: "green" },
  ],
  4: [
    { title: "Friday sta...", time: "", start: 9, dur: 0.75, color: "gray" },
    { title: "Olivia x Ril...", time: "10:00 AM", start: 10, dur: 1.25, color: "gray" },
    { title: "Product d...", time: "1:30 PM", start: 13.5, dur: 2, color: "gray" },
  ],
  5: [
    { title: "House in...", time: "", start: 11, dur: 0.75, color: "red" },
  ],
  6: [
    { title: "Ava's en...", time: "9:00 AM", start: 13, dur: 1.25, color: "purple" },
  ],
}

const H = 80
const FIRST = 8
const LAST = 17
const NOW = 14 + 20 / 60

const fmtHour = (h) => {
  if (h === 12) return "12 PM"
  return h > 12 ? `${h - 12} PM` : `${h} AM`
}

const EventBlock = ({ ev }) => {
  const s = BLOCK_STYLES[ev.color]
  return (
    <div
      className={`absolute left-0.5 right-0.5 sm:left-1 sm:right-1 ${s.bg} border-l-[3px] ${s.border} rounded-r-md px-1.5 sm:px-2 py-1 sm:py-1.5 overflow-hidden cursor-pointer hover:brightness-[0.97] transition-all`}
      style={{ top: `${(ev.start - FIRST) * H}px`, height: `${ev.dur * H}px` }}
    >
      <div className="flex items-start gap-0.5">
        <div className="min-w-0 flex-1">
          <p className={`text-[11px] sm:text-[12px] font-medium leading-4 truncate ${s.title}`}>{ev.title}</p>
          {ev.time && <p className={`text-[10px] sm:text-[11px] leading-3 mt-0.5 ${s.time}`}>{ev.time}</p>}
        </div>
        {s.dot && <span className={`size-1.5 rounded-full ${s.dot} shrink-0 mt-0.5`} />}
      </div>
    </div>
  )
}

const TutorScheduleSection = () => {
  const totalH = (LAST - FIRST) * H
  const hours = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i)
  const nowTop = (NOW - FIRST) * H

  return (
    <div className="flex flex-col gap-6 items-center w-full">
      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#333] leading-8 self-start">
        My Schedule
      </h2>

      <div className="w-full border border-[#e9eaeb] rounded-xl overflow-hidden bg-white">
        <div className="px-3 sm:px-5 py-3 sm:py-4 flex items-center gap-3 sm:gap-4 border-b border-[#e9eaeb]">
          <div className="flex items-center justify-center flex-col bg-[#f0f8ff] border border-[#c3ddfd] rounded-xl size-11 sm:size-12 shrink-0">
            <span className="text-[9px] sm:text-[10px] font-semibold text-[#007aff] leading-none uppercase">Jan</span>
            <span className="text-[16px] sm:text-[18px] font-bold text-[#007aff] leading-none">10</span>
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-2">
              <span className="text-[15px] sm:text-[18px] font-semibold text-[#181d27] leading-6">January 2025</span>
              <span className="text-[11px] sm:text-[12px] font-medium text-[#414651] leading-[18px] bg-[#f5f5f5] border border-[#e9eaeb] rounded-full px-2 py-px">Week 1</span>
            </div>
            <span className="text-[12px] sm:text-[13px] text-[#717680] leading-5">Jan 1, 2025 – Jan 31, 2025</span>
          </div>
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: 560 }}>
            <div className="grid grid-cols-[48px_repeat(7,1fr)] sm:grid-cols-[64px_repeat(7,1fr)] border-b border-[#e9eaeb]">
              <div className="bg-[#fafafa] border-r border-[#e9eaeb]" />
              {weekDays.map((d, i) => (
                <div key={i} className={`bg-[#fafafa] flex items-center justify-center gap-1 py-2 ${i < 6 ? "border-r border-[#e9eaeb]" : ""}`}>
                  <span className="text-[11px] sm:text-[12px] font-medium text-[#717680]">{d.label}</span>
                  {d.today ? (
                    <span className="size-5 sm:size-6 flex items-center justify-center rounded-full bg-[#007aff] text-white text-[10px] sm:text-[11px] font-semibold leading-none">{d.day}</span>
                  ) : (
                    <span className="text-[11px] sm:text-[12px] font-semibold text-[#414651]">{d.day}</span>
                  )}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-[48px_repeat(7,1fr)] sm:grid-cols-[64px_repeat(7,1fr)] relative" style={{ height: `${totalH}px` }}>
              <div className="relative border-r border-[#e9eaeb]">
                {hours.slice(1).map((h) => (
                  <div key={h} className="absolute left-0 right-0 flex justify-end pr-1.5 sm:pr-2 -translate-y-1/2" style={{ top: `${(h - FIRST) * H}px` }}>
                    <span className="text-[10px] sm:text-[11px] font-medium text-[#717680] whitespace-nowrap">{fmtHour(h)}</span>
                  </div>
                ))}
              </div>

              {weekDays.map((_, colIdx) => (
                <div key={colIdx} className={`relative ${colIdx < 6 ? "border-r border-[#e9eaeb]" : ""}`}>
                  {hours.slice(1).map((h) => (
                    <div key={h} className="absolute left-0 right-0 border-t border-[#f0f0f0]" style={{ top: `${(h - FIRST) * H}px` }} />
                  ))}
                  {(weekEvents[colIdx] || []).map((ev, i) => (
                    <EventBlock key={i} ev={ev} />
                  ))}
                </div>
              ))}

              <div className="absolute left-0 right-0 flex items-center pointer-events-none z-10" style={{ top: `${nowTop}px` }}>
                <div className="w-12 sm:w-16 flex justify-end pr-1 shrink-0">
                  <span className="text-[9px] sm:text-[10px] font-semibold text-[#007aff] whitespace-nowrap">2:20 PM</span>
                </div>
                <div className="size-1.5 sm:size-2 rounded-full bg-[#007aff] shrink-0 -mr-0.5 z-10" />
                <div className="flex-1 h-0.5 bg-[#007aff]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center gap-2 p-1 rounded-2xl">
        <span className="text-[16px] font-medium text-[#007aff] leading-[1.4]">Show more</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default TutorScheduleSection
