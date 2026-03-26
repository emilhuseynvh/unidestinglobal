import { useState } from "react"
import MiniCalendar from "./MiniCalendar"
import EventDetail from "./EventDetail"

const BLOCK_STYLES = {
  gray: { bg: "bg-[#f9fafb]", border: "border-[#d5d7da]", title: "text-[#181d27]", time: "text-[#717680]" },
  blue: { bg: "bg-[#eff8ff]", border: "border-[#84caff]", title: "text-[#007aff]", time: "text-[#007aff]" },
}

const dayEvents = [
  { title: "Friday standup", time: "", start: 9, dur: 0.75, color: "gray" },
  { title: "Olivia x Riley", time: "10:00 AM", start: 10, dur: 2.5, color: "blue" },
  { title: "Product demo", time: "1:30 PM", start: 13.5, dur: 2, color: "blue" },
]

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
      className={`absolute left-1 right-1 ${s.bg} border-l-[3px] ${s.border} rounded-r-md px-3 py-2 overflow-hidden cursor-pointer hover:brightness-[0.97] transition-all`}
      style={{
        top: `${(ev.start - FIRST) * H}px`,
        height: `${ev.dur * H}px`,
      }}
    >
      <p className={`text-[13px] sm:text-[14px] font-medium leading-5 ${s.title}`}>
        {ev.title}
      </p>
      {ev.time && (
        <p className={`text-[12px] sm:text-[13px] leading-4 mt-0.5 ${s.time}`}>
          {ev.time}
        </p>
      )}
    </div>
  )
}

const TimeGrid = () => {
  const totalH = (LAST - FIRST) * H
  const hours = Array.from({ length: LAST - FIRST + 1 }, (_, i) => FIRST + i)
  const nowTop = (NOW - FIRST) * H

  return (
    <div
      className="grid grid-cols-[48px_1fr] sm:grid-cols-[72px_1fr] relative"
      style={{ height: `${totalH}px` }}
    >
      <div className="relative border-r border-[#e9eaeb]">
        {hours.slice(1).map((h) => (
          <div
            key={h}
            className="absolute left-0 right-0 flex justify-end pr-1.5 sm:pr-3 -translate-y-1/2"
            style={{ top: `${(h - FIRST) * H}px` }}
          >
            <span className="text-[10px] sm:text-[12px] font-medium text-[#717680] whitespace-nowrap">
              {fmtHour(h)}
            </span>
          </div>
        ))}
      </div>

      <div className="relative">
        {hours.slice(1).map((h) => (
          <div
            key={h}
            className="absolute left-0 right-0 border-t border-[#f0f0f0]"
            style={{ top: `${(h - FIRST) * H}px` }}
          />
        ))}
        {dayEvents.map((ev, i) => (
          <EventBlock key={i} ev={ev} />
        ))}
      </div>

      <div
        className="absolute left-0 right-0 flex items-center pointer-events-none z-10"
        style={{ top: `${nowTop}px` }}
      >
        <div className="w-12 sm:w-18 flex justify-end pr-1 sm:pr-1.5 shrink-0">
          <span className="text-[10px] sm:text-[11px] font-semibold text-[#007aff] whitespace-nowrap">
            2:20 PM
          </span>
        </div>
        <div className="size-2 rounded-full bg-[#007aff] shrink-0 -mr-1 z-10" />
        <div className="flex-1 h-0.5 bg-[#007aff]" />
      </div>
    </div>
  )
}

const DailyCalendarGrid = () => {
  const totalH = (LAST - FIRST) * H
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div>
      <div className="flex gap-6 items-start">
        <div className="flex-1 min-w-0 border border-[#e9eaeb] rounded-xl bg-white">
          <TimeGrid />
        </div>

        <div
          className="hidden lg:flex flex-col w-75 shrink-0 border border-[#e9eaeb] rounded-xl bg-white self-start overflow-hidden"
          style={{ maxHeight: `${totalH}px` }}
        >
          <div className="shrink-0">
            <MiniCalendar />
          </div>
          <div className="border-t border-[#e9eaeb] overflow-y-auto flex-1 min-h-0">
            <EventDetail />
          </div>
        </div>
      </div>

      <button
        onClick={() => setShowSidebar(true)}
        className="lg:hidden fixed bottom-6 right-6 size-14 bg-[#007aff] rounded-full flex items-center justify-center shadow-lg hover:bg-[#0066d6] transition-colors z-40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.5"/>
          <path d="M3 8h18M8 2v4M16 2v4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>

      {showSidebar && (
        <>
          <div className="lg:hidden fixed inset-0 bg-black/30 z-40" onClick={() => setShowSidebar(false)} />
          <div className="lg:hidden fixed right-0 top-0 bottom-0 w-[320px] max-w-[85vw] bg-white z-50 shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[#e9eaeb]">
              <span className="text-[16px] font-semibold text-[#181d27]">Calendar</span>
              <button
                onClick={() => setShowSidebar(false)}
                className="size-9 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M15 5L5 15M5 5l10 10" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            <MiniCalendar />
            <div className="border-t border-[#e9eaeb]">
              <EventDetail />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DailyCalendarGrid
