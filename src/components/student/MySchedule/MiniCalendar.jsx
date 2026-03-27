const DAYS = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"]

const weeks = [
  [30, 31, 1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10, 11, 12],
  [13, 14, 15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 1, 2],
  [3, 4, 5, 6, 7, 8, 9],
]

const MiniCalendar = () => {
  const isOutside = (wi, day) =>
    (wi === 0 && (day === 30 || day === 31)) || (wi === 4 && (day === 1 || day === 2)) || wi === 5

  const isToday = (wi, day) => wi === 1 && day === 10
  const hasDot = (wi, day) => (wi === 0 && day === 1) || (wi === 4 && day === 30) || (wi === 5 && day === 4)

  return (
    <div className="flex flex-col gap-3 p-3">
      <div className="flex items-center justify-between px-1">
        <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8l4-4" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <span className="text-[14px] font-semibold text-[#181d27] leading-5">January 2025</span>
        <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 4l4 4-4 4" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-7">
        {DAYS.map((d) => (
          <div key={d} className="flex items-center justify-center size-10">
            <span className="text-[13px] font-medium text-[#717680]">{d}</span>
          </div>
        ))}
        {weeks.map((week, wi) =>
          week.map((day, di) => {
            const outside = isOutside(wi, day)
            const today = isToday(wi, day)
            const dot = hasDot(wi, day)
            return (
              <div key={`${wi}-${di}`} className="flex flex-col items-center justify-center size-10 relative">
                <button
                  className={`size-8 flex items-center justify-center rounded-full text-[13px] font-medium transition-colors ${
                    today
                      ? "bg-[#7f56d9] text-white font-semibold"
                      : outside
                        ? "text-[#717680] hover:bg-[#f5f5f5]"
                        : "text-[#414651] hover:bg-[#f5f5f5]"
                  }`}
                >
                  {day}
                </button>
                {dot && <span className="absolute bottom-0.5 size-1 rounded-full bg-[#7f56d9]" />}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}

export default MiniCalendar
