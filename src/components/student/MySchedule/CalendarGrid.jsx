const PILL_STYLES = {
  blue: { bg: "bg-[#eff8ff]", text: "text-[#007aff]", time: "text-[#007aff]" },
  orange: { bg: "bg-[#fff4ed]", text: "text-[#e04f16]", time: "text-[#e04f16]" },
  gray: { bg: "bg-[#f5f5f5]", text: "text-[#414651]", time: "text-[#717680]" },
  red: { bg: "bg-[#fef3f2]", text: "text-[#e31b54]", time: "text-[#e31b54]" },
  purple: { bg: "bg-[#f4f3ff]", text: "text-[#7c3aed]", time: "text-[#7c3aed]" },
  green: { bg: "bg-[#ecfdf3]", text: "text-[#067647]", time: "text-[#717680]", dot: "bg-[#17b26a]" },
  redDot: { bg: "bg-[#fef3f2]", text: "text-[#e31b54]", time: "text-[#717680]", dot: "bg-[#f04438]" },
  purpleDot: { bg: "bg-[#f4f3ff]", text: "text-[#7c3aed]", time: "text-[#717680]", dot: "bg-[#7c3aed]" },
}

const calendarData = [
  [
    { day: 30, outside: true, events: [
      { title: "Monday stand...", time: "9:00 AM" },
      { title: "Coffee with...", time: "11:30 AM", pill: "blue" },
      { title: "Marketing sit...", time: "2:30 PM", pill: "blue" },
    ], more: 2 },
    { day: 31, outside: true, events: [
      { title: "Monday stand...", time: "9:00 AM" },
    ]},
    { day: 1, events: [] },
    { day: 2, events: [
      { title: "One-on-one...", time: "10:00 AM", pill: "orange" },
      { title: "All-hands me...", time: "4:00 PM" },
      { title: "Dinner with...", time: "6:30 PM", pill: "green" },
    ]},
    { day: 3, events: [
      { title: "Friday standup", time: "9:00 AM" },
    ]},
    { day: 4, events: [] },
    { day: 5, events: [
      { title: "House insp...", time: "10:30 AM", pill: "redDot" },
    ]},
  ],
  [
    { day: 6, events: [
      { title: "Monday stand...", time: "9:00 AM" },
      { title: "Content plan...", time: "11:00 AM", pill: "blue" },
    ]},
    { day: 7, events: [
      { title: "One-on-one...", time: "10:00 AM", pill: "orange" },
      { title: "Catch up w/ A...", time: "2:30 PM", pill: "blue" },
    ]},
    { day: 8, events: [
      { title: "Deep work", time: "9:00 AM", pill: "gray" },
      { title: "Design sync", time: "10:30 AM", pill: "gray" },
      { title: "SEO planning", time: "1:30 PM", pill: "gray" },
    ], more: 3 },
    { day: 9, events: [
      { title: "Lunch with...", time: "12:00 PM", pill: "green" },
    ]},
    { day: 10, today: true, events: [
      { title: "Friday standup", time: "9:00 AM" },
      { title: "Olivia x Riley", time: "10:00 AM", pill: "gray" },
      { title: "Product demo", time: "1:30 PM", pill: "gray" },
    ]},
    { day: 11, events: [
      { title: "House insp...", time: "11:00 AM", pill: "redDot" },
    ]},
    { day: 12, events: [
      { title: "Ava's engag...", time: "1:00 PM", pill: "purpleDot" },
    ]},
  ],
  [
    { day: 13, events: [
      { title: "Monday stand...", time: "9:00 AM" },
      { title: "Team lunch", time: "12:15 PM", pill: "red" },
    ]},
    { day: 14, events: [] },
    { day: 15, events: [
      { title: "Product plann...", time: "9:30 AM", pill: "gray" },
    ]},
    { day: 16, events: [
      { title: "Amélie's first...", time: "10:00 AM", pill: "orange" },
      { title: "All-hands me...", time: "4:00 PM" },
    ]},
    { day: 17, events: [
      { title: "Friday standup", time: "9:00 AM" },
      { title: "Coffee w/ Am...", time: "9:30 AM", pill: "gray" },
      { title: "Design feedb...", time: "2:30 PM", pill: "gray" },
    ], more: 1 },
    { day: 18, events: [
      { title: "Half marath...", time: "7:00 AM", pill: "redDot" },
    ]},
    { day: 19, events: [] },
  ],
  [
    { day: 20, events: [
      { title: "Monday stand...", time: "9:00 AM" },
      { title: "Deep work", time: "9:15 AM", pill: "gray" },
    ]},
    { day: 21, events: [
      { title: "Quarterly rev...", time: "11:30 AM", pill: "orange" },
      { title: "Lunch with Za...", time: "1:00 PM", pill: "blue" },
      { title: "Dinner with...", time: "7:00 PM", pill: "green" },
    ]},
    { day: 22, events: [
      { title: "Deep work", time: "9:00 AM", pill: "gray" },
      { title: "Design sync", time: "2:30 PM", pill: "gray" },
    ]},
    { day: 23, events: [
      { title: "Amélie coffee", time: "10:00 AM", pill: "orange" },
    ]},
    { day: 24, events: [
      { title: "Friday standup", time: "9:00 AM" },
      { title: "Accountant", time: "1:45 PM", pill: "purple" },
      { title: "Marketing sit...", time: "2:30 PM", pill: "gray" },
    ], more: 3 },
    { day: 25, events: [] },
    { day: 26, events: [] },
  ],
  [
    { day: 27, events: [
      { title: "Monday stand...", time: "9:00 AM" },
    ]},
    { day: 28, events: [
      { title: "Content plan...", time: "11:00 AM", pill: "blue" },
      { title: "Lunch with A...", time: "12:45 AM", pill: "blue" },
    ]},
    { day: 29, events: [
      { title: "Product plann...", time: "9:30 AM", pill: "gray" },
    ]},
    { day: 30, events: [
      { title: "All-hands me...", time: "4:00 PM" },
      { title: "Team dinner", time: "5:30 PM", pill: "red" },
    ]},
    { day: 31, events: [
      { title: "Friday standup", time: "9:00 AM" },
    ]},
    { day: 1, outside: true, events: [] },
    { day: 2, outside: true, events: [
      { title: "Monday stand...", time: "9:00 AM" },
    ]},
  ],
]

const days = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"]
const daysShort = ["M", "T", "W", "T", "F", "S", "S"]

const EventPill = ({ event }) => {
  const style = PILL_STYLES[event.pill]
  return (
    <div className={`flex items-center gap-1 min-w-0 ${style.bg} rounded px-1 sm:px-1.5 py-px cursor-pointer hover:opacity-80 transition-opacity`}>
      {style.dot && <span className={`size-1.5 rounded-full ${style.dot} shrink-0`} />}
      <span className={`text-[11px] sm:text-[12px] font-medium leading-4 sm:leading-[18px] truncate ${style.text}`}>
        {event.title}
      </span>
      <span className={`hidden sm:inline text-[12px] leading-[18px] shrink-0 ml-auto ${style.time}`}>
        {event.time}
      </span>
    </div>
  )
}

const EventPlain = ({ event }) => {
  return (
    <div className="flex items-center gap-1 min-w-0 cursor-pointer hover:opacity-70 transition-opacity px-0.5">
      <span className="text-[11px] sm:text-[12px] font-medium leading-4 sm:leading-[18px] truncate text-[#414651]">
        {event.title}
      </span>
      <span className="hidden sm:inline text-[12px] leading-[18px] shrink-0 ml-auto text-[#717680]">
        {event.time}
      </span>
    </div>
  )
}

const CalendarGrid = () => {
  return (
    <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
      <div className="overflow-x-auto">
        <div style={{ minWidth: 640 }}>
        <div className="grid grid-cols-7 bg-[#fafafa] border-b border-[#e9eaeb]">
          {days.map((day, i) => (
            <div key={day} className="px-1.5 sm:px-3 py-2 sm:py-2.5 text-center border-r border-[#e9eaeb] last:border-r-0">
              <span className="hidden sm:inline text-[12px] font-semibold text-[#717680] leading-[18px]">
                {day}
              </span>
              <span className="sm:hidden text-[11px] font-semibold text-[#717680] leading-4">
                {daysShort[i]}
              </span>
            </div>
          ))}
        </div>

        {calendarData.map((week, weekIdx) => (
          <div key={weekIdx} className="grid grid-cols-7 border-b border-[#e9eaeb] last:border-b-0">
            {week.map((cell, cellIdx) => (
              <div
                key={cellIdx}
                className={`min-h-[90px] sm:min-h-[120px] px-1 sm:px-2 py-1.5 sm:py-2 border-r border-[#e9eaeb] last:border-r-0 flex flex-col gap-0.5 ${
                  cell.outside ? "bg-[#fafafa]" : "bg-white"
                }`}
              >
                <div className="flex items-center justify-start mb-0.5 sm:mb-1 px-0.5">
                  {cell.today ? (
                    <span className="size-6 sm:size-7 flex items-center justify-center rounded-full bg-[#007aff] text-white text-[11px] sm:text-[12px] font-semibold leading-none">
                      {cell.day}
                    </span>
                  ) : (
                    <span className={`text-[12px] sm:text-[13px] font-medium leading-5 ${
                      cell.outside ? "text-[#a4a7ae]" : "text-[#414651]"
                    }`}>
                      {cell.day}
                    </span>
                  )}
                </div>

                <div className="flex flex-col gap-px sm:gap-[3px] min-w-0">
                  {cell.events.map((event, eventIdx) =>
                    event.pill ? (
                      <EventPill key={eventIdx} event={event} />
                    ) : (
                      <EventPlain key={eventIdx} event={event} />
                    )
                  )}
                  {cell.more && (
                    <button className="text-[11px] sm:text-[12px] font-medium text-[#717680] hover:text-[#414651] leading-4 sm:leading-[18px] text-left transition-colors px-0.5">
                      {cell.more} more...
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default CalendarGrid
