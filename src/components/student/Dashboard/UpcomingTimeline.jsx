import { Link } from "react-router"

const H = 76
const FIRST = 8
const LAST = 17

const events = [
  { title: "English Speaking", time: "9:00 AM", start: 9, dur: 1.25, bg: "bg-[#ecfdf3]", border: "border-[#abefc6]", titleColor: "text-[#067647]", timeColor: "text-[#067647]", live: true, joinable: true },
  { title: "Olivia x Riley", time: "10:00 AM", start: 10.25, dur: 1.75, bg: "bg-[#fefce8]", border: "border-[#fde68a]", titleColor: "text-[#a16207]", timeColor: "text-[#a16207]" },
  { title: "English Speaking", time: "1:30 PM", start: 14, dur: 1.25, bg: "bg-[#fefce8]", border: "border-[#fde68a]", titleColor: "text-[#a16207]", timeColor: "text-[#a16207]" },
]

const NOW = 9

const fmtHour = (h) => {
  if (h === 12) return "12 PM"
  return h > 12 ? `${h - 12} PM` : `${h} AM`
}

const UpcomingTimeline = () => {
  const totalH = (LAST - FIRST) * H
  const hours = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i)
  const nowTop = (NOW - FIRST) * H

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#181d27] leading-tight">
          Upcoming Lessons Timeline
        </h2>
        <p className="text-[13px] sm:text-[14px] text-[#717680] leading-5 mt-1">
          Continue watching the courses you have already started watching.
        </p>
      </div>

      <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-white">
        <div className="px-4 sm:px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e9eaeb]">
          <div className="flex items-center gap-3 sm:gap-4 min-w-0">
            <div className="flex items-center justify-center flex-col bg-[#f0f8ff] border border-[#c3ddfd] rounded-xl size-11 sm:size-12 shrink-0">
              <span className="text-[9px] sm:text-[10px] font-semibold text-[#007aff] leading-none uppercase">Jan</span>
              <span className="text-[16px] sm:text-[18px] font-bold text-[#007aff] leading-none">10</span>
            </div>
            <div className="flex flex-col gap-0.5 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-[15px] sm:text-[18px] font-semibold text-[#181d27] leading-6 truncate">January 10, 2025</span>
                <span className="hidden sm:inline text-[12px] font-medium text-[#414651] bg-[#f5f5f5] border border-[#e9eaeb] rounded-full px-2 py-px whitespace-nowrap">Week 1</span>
              </div>
              <span className="text-[12px] sm:text-[13px] text-[#717680] leading-5">Friday</span>
            </div>
          </div>
          <Link to="/student/schedule" className="text-[13px] sm:text-[14px] font-medium text-[#181d27] border border-[#d5d7da] rounded-lg px-4 py-2 hover:bg-[#f9f9f9] transition-colors whitespace-nowrap shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] self-start sm:self-auto shrink-0">
            View full schedule
          </Link>
        </div>

        <div className="overflow-x-auto">
          <div style={{ minWidth: 400 }}>
            <div className="grid grid-cols-[56px_1fr] sm:grid-cols-[72px_1fr] relative" style={{ height: `${totalH}px` }}>
              <div className="relative border-r border-[#e9eaeb]">
                {hours.slice(1).map((h) => (
                  <div key={h} className="absolute left-0 right-0 flex justify-end pr-2 sm:pr-3 -translate-y-1/2" style={{ top: `${(h - FIRST) * H}px` }}>
                    <span className="text-[11px] sm:text-[12px] font-medium text-[#717680] whitespace-nowrap">{fmtHour(h)}</span>
                  </div>
                ))}
              </div>

              <div className="relative">
                {hours.map((h) => (
                  <div key={h} className="absolute left-0 right-0 border-t border-[#f0f0f0]" style={{ top: `${(h - FIRST) * H}px` }} />
                ))}

                {events.map((ev, i) => (
                  <div
                    key={i}
                    className={`absolute left-2 right-2 sm:left-3 sm:right-3 ${ev.bg} border ${ev.border} rounded-lg px-3 sm:px-4 py-2.5 overflow-hidden`}
                    style={{ top: `${(ev.start - FIRST) * H}px`, height: `${ev.dur * H}px` }}
                  >
                    <div className="flex items-start justify-between gap-2 h-full">
                      <div className="flex flex-col gap-1">
                        <p className={`text-[13px] sm:text-[14px] font-medium leading-5 ${ev.titleColor}`}>{ev.title}</p>
                        <p className={`text-[12px] sm:text-[13px] leading-4 ${ev.timeColor}`}>{ev.time}</p>
                        {ev.live && (
                          <div className="flex items-center gap-1 mt-0.5">
                            <span className="size-[6px] rounded-full bg-[#f04438]" />
                            <span className="text-[11px] sm:text-[12px] font-medium text-[#f04438] bg-[#fef3f2] px-1.5 py-0.5 rounded">Live</span>
                          </div>
                        )}
                      </div>
                      {ev.joinable && (
                        <button className="bg-[#181d27] text-white text-[12px] sm:text-[13px] font-medium px-3 sm:px-4 py-1.5 rounded-lg hover:bg-[#333] transition-colors shrink-0 self-start">
                          Join now
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="absolute left-0 right-0 flex items-center pointer-events-none z-10" style={{ top: `${nowTop}px` }}>
                <div className="w-14 sm:w-18 flex justify-end pr-1.5 shrink-0">
                  <span className="text-[10px] sm:text-[11px] font-semibold text-[#007aff] whitespace-nowrap">9 AM</span>
                </div>
                <div className="size-2 rounded-full bg-[#007aff] shrink-0 -mr-1 z-10" />
                <div className="flex-1 h-0.5 bg-[#007aff]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingTimeline
