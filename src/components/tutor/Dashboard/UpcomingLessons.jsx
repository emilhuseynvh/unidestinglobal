const lessons = [
  { time: "9 AM", title: "English Speaking", startTime: "9:00 AM", color: "bg-[#22c55e]", textColor: "text-[#22c55e]", bgColor: "bg-[#f0fdf4]", borderColor: "border-[#bbf7d0]", row: 1 },
  { time: "10 AM", title: "Olivia x Riley", startTime: "10:00 AM", color: "bg-[#a855f7]", textColor: "text-[#a855f7]", bgColor: "bg-[#faf5ff]", borderColor: "border-[#e9d5ff]", row: 3 },
  { time: "2 PM", title: "English Speaking", startTime: "1:00 PM", color: "bg-[#f59e0b]", textColor: "text-[#f59e0b]", bgColor: "bg-[#fffbeb]", borderColor: "border-[#fde68a]", row: 9 },
]

const UpcomingLessons = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-[#0a0c11] leading-6">Upcoming Lessons Timeline</h2>
        <p className="text-sm text-[#5b616d] leading-5">Continue watching the courses you have already started watching.</p>
      </div>

      <div className="bg-white border border-[#e9eaeb] rounded-xl overflow-hidden">
        <div className="border-b border-[#e9eaeb] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="border border-[#e9eaeb] rounded-lg overflow-hidden w-12 shrink-0">
              <div className="bg-[#fafafa] text-center py-0.5 text-[10px] font-semibold text-[#717680]">JAN</div>
              <div className="text-center text-base font-bold text-[#6941c6]">10</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-sm sm:text-base font-semibold text-[#181d27]">January 10, 2025</span>
                <span className="px-1.5 py-0.5 rounded-md border border-[#d5d7da] bg-white text-[10px] font-medium text-[#414651]">Week 1</span>
              </div>
              <span className="text-xs sm:text-sm text-[#535862]">Friday</span>
            </div>
          </div>
          <button className="h-9 sm:h-10 px-3 rounded-[10px] bg-[#007aff] text-xs sm:text-sm font-medium text-white hover:bg-[#0066d6] transition-colors whitespace-nowrap shrink-0 w-full sm:w-auto">
            View all schedule
          </button>
        </div>

        <div className="overflow-auto">
          <div className="min-w-[600px] relative">
            {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM"].map((time) => (
              <div key={time} className="flex h-16">
                <div className="w-16 shrink-0 border-r border-[#e9eaeb] bg-[#fdfdfd] relative">
                  <span className="absolute -top-2 right-2 text-xs font-medium text-[#717680]">{time}</span>
                </div>
                <div className="flex-1 border-b border-[#e9eaeb]" />
              </div>
            ))}

            <div className="absolute top-[8px] left-16 right-0 p-1.5" style={{ top: "8px" }}>
              <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-md px-2 py-1.5 h-[52px]">
                <p className="text-xs font-semibold text-[#22c55e]">English Speaking</p>
                <p className="text-xs text-[#22c55e]">9:00 AM</p>
              </div>
            </div>

            <div className="absolute left-16 right-[50%] p-1.5" style={{ top: "72px" }}>
              <div className="bg-[#faf5ff] border border-[#e9d5ff] rounded-md px-2 py-1.5 h-[52px]">
                <p className="text-xs font-semibold text-[#a855f7]">Olivia x Riley</p>
                <p className="text-xs text-[#a855f7]">10:00 AM</p>
              </div>
            </div>

            <div className="absolute left-16 right-0 p-1.5" style={{ top: "264px" }}>
              <div className="bg-[#fffbeb] border border-[#fde68a] rounded-md px-2 py-1.5 h-[52px] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-[#f59e0b]">English Speaking</p>
                  <p className="text-xs text-[#f59e0b]">1:00 PM</p>
                </div>
                <button className="text-xs font-medium text-[#0a0c11]">Join now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UpcomingLessons
