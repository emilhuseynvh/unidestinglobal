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
    { title: "Monday standup", time: "9:00 AM", start: 9, dur: 0.75, color: "gray" },
    { title: "Content planning", time: "11:00 AM", start: 11, dur: 1.5, color: "blue" },
  ],
  1: [
    { title: "One-on-one with Eva", time: "10:00 AM", start: 10, dur: 1.5, color: "orange" },
    { title: "Catch up w/ Alex", time: "3:30 PM", start: 15.5, dur: 1.5, color: "blue" },
  ],
  2: [
    { title: "Deep work", time: "9:00 AM", start: 9, dur: 1.5, color: "blue" },
    { title: "Design sync", time: "10:30 AM", start: 10.5, dur: 0.75, color: "gray" },
    { title: "SEO planning", time: "1:30 PM", start: 13.5, dur: 1, color: "gray" },
    { title: "Meetup event", time: "3:00 PM", start: 15, dur: 2, color: "yellow" },
  ],
  3: [
    { title: "Lunch with Olivia", time: "12:00 PM", start: 12, dur: 1.25, color: "green" },
  ],
  4: [
    { title: "Friday standup", time: "9:00 AM", start: 9, dur: 0.75, color: "gray" },
    { title: "Olivia x Riley", time: "10:00 AM", start: 10, dur: 1.25, color: "gray" },
    { title: "Product demo", time: "1:30 PM", start: 13.5, dur: 2, color: "gray" },
  ],
  5: [
    { title: "House inspection", time: "11:00 AM", start: 11, dur: 0.75, color: "red" },
  ],
  6: [
    { title: "Ava's engagment p...", time: "1:00 PM", start: 13, dur: 1.25, color: "purple" },
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
      className={`absolute left-1 right-1 ${s.bg} border-l-[3px] ${s.border} rounded-r-md px-2 py-1.5 overflow-hidden cursor-pointer hover:brightness-[0.97] transition-all`}
      style={{
        top: (ev.start - FIRST) * H,
        height: ev.dur * H,
      }}
    >
      <div className="flex items-start gap-1">
        <div className="min-w-0 flex-1">
          <p className={`text-[12px] sm:text-[13px] font-medium leading-4 truncate ${s.title}`}>
            {ev.title}
          </p>
          <p className={`text-[11px] sm:text-[12px] leading-4 mt-0.5 ${s.time}`}>
            {ev.time}
          </p>
        </div>
        {s.dot && <span className={`size-1.5 rounded-full ${s.dot} shrink-0 mt-1`} />}
      </div>
    </div>
  )
}

const WeeklyCalendarGrid = () => {
  const totalH = (LAST - FIRST) * H
  const hours = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i)
  const nowTop = (NOW - FIRST) * H

  return (
    <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-white">
      <div className="overflow-x-auto">
        <div style={{ minWidth: 700 }}>

          <div className="grid grid-cols-[56px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] border-b border-[#e9eaeb]">
            <div className="bg-[#fafafa] border-r border-[#e9eaeb]" />
            {weekDays.map((d, i) => (
              <div
                key={i}
                className={`bg-[#fafafa] flex items-center justify-center gap-1.5 py-2.5 ${
                  i < 6 ? "border-r border-[#e9eaeb]" : ""
                }`}
              >
                <span className="text-[12px] sm:text-[13px] font-medium text-[#717680]">{d.label}</span>
                {d.today ? (
                  <span className="size-6 flex items-center justify-center rounded-full bg-[#007aff] text-white text-[12px] font-semibold leading-none">
                    {d.day}
                  </span>
                ) : (
                  <span className="text-[13px] font-semibold text-[#414651]">{d.day}</span>
                )}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-[56px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] relative" style={{ height: totalH }}>

            <div className="relative border-r border-[#e9eaeb]">
              {hours.slice(1).map((h) => (
                <div
                  key={h}
                  className="absolute left-0 right-0 flex justify-end pr-2 sm:pr-3"
                  style={{ top: (h - FIRST) * H, transform: "translateY(-50%)" }}
                >
                  <span className="text-[11px] sm:text-[12px] font-medium text-[#717680] whitespace-nowrap">
                    {fmtHour(h)}
                  </span>
                </div>
              ))}
            </div>

            {weekDays.map((_, colIdx) => (
              <div
                key={colIdx}
                className={`relative ${colIdx < 6 ? "border-r border-[#e9eaeb]" : ""}`}
              >
                {hours.slice(1).map((h) => (
                  <div
                    key={h}
                    className="absolute left-0 right-0 border-t border-[#f0f0f0]"
                    style={{ top: (h - FIRST) * H }}
                  />
                ))}
                {(weekEvents[colIdx] || []).map((ev, i) => (
                  <EventBlock key={i} ev={ev} />
                ))}
              </div>
            ))}

            <div
              className="absolute left-0 right-0 flex items-center pointer-events-none z-10"
              style={{ top: nowTop }}
            >
              <div className="w-14 sm:w-18 flex justify-end pr-1 sm:pr-1.5 shrink-0">
                <span className="text-[10px] sm:text-[11px] font-semibold text-[#007aff] whitespace-nowrap">
                  2:20 PM
                </span>
              </div>
              <div className="size-2 rounded-full bg-[#007aff] shrink-0 -mr-1 z-10" />
              <div className="flex-1 h-0.5 bg-[#007aff]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default WeeklyCalendarGrid
