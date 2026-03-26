const tagStyles = {
  Group: "bg-[#f5f5f5] text-[#414651] border-[#e9eaeb]",
  Individual: "bg-[#f5f5f5] text-[#414651] border-[#e9eaeb]",
  Online: "bg-[#007aff] text-white border-[#007aff]",
  Offline: "bg-[#414651] text-white border-[#414651]",
}

const statusStyles = {
  Pending: { dot: "bg-[#f79009]", text: "text-[#f79009]" },
  "Course Closed": { dot: "bg-[#f04438]", text: "text-[#f04438]" },
}

const progressColors = {
  80: "stroke-[#007aff]",
  50: "stroke-[#007aff]",
  100: "stroke-[#f04438]",
}

const ProgressCircle = ({ percent }) => {
  const r = 22
  const circ = 2 * Math.PI * r
  const offset = circ - (percent / 100) * circ
  const color = progressColors[percent] || "stroke-[#007aff]"

  return (
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="relative size-14 sm:size-16">
        <svg className="size-full -rotate-90" viewBox="0 0 52 52">
          <circle cx="26" cy="26" r={r} fill="none" stroke="#e9eaeb" strokeWidth="3" />
          <circle cx="26" cy="26" r={r} fill="none" className={color} strokeWidth="3" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[13px] font-semibold text-[#181d27]">
          {percent}%
        </span>
      </div>
      <span className="text-[12px] font-medium text-[#007aff]">Booked</span>
    </div>
  )
}

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M4.667 1.167V2.917M9.333 1.167V2.917M1.75 5.542h10.5M2.917 2.333h8.166c.645 0 1.167.522 1.167 1.167v8.167c0 .644-.522 1.166-1.167 1.166H2.917c-.644 0-1.167-.522-1.167-1.166V3.5c0-.645.523-1.167 1.167-1.167z" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const ClockIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="5.25" stroke="#717680" strokeWidth="1.2"/><path d="M7 4.083V7l1.75.875" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const RepeatIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M10.5 1.167l1.75 1.75-1.75 1.75M1.75 6.417V5.25a2.333 2.333 0 012.333-2.333h8.167M3.5 12.833l-1.75-1.75 1.75-1.75M12.25 7.583V8.75a2.333 2.333 0 01-2.333 2.333H1.75" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const UsersIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M9.917 12.25v-1.167a2.333 2.333 0 00-2.334-2.333H2.917a2.333 2.333 0 00-2.334 2.333v1.167M5.25 6.417A2.333 2.333 0 105.25 1.75a2.333 2.333 0 000 4.667zM13.417 12.25v-1.167a2.333 2.333 0 00-1.75-2.258M9.333 1.825a2.334 2.334 0 010 4.519" stroke="#717680" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const AlertIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2M6 8h.005" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
)

const CourseCard = ({ course }) => {
  const status = statusStyles[course.status]

  return (
    <div className="border border-[#e9eaeb] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 hover:shadow-[0px_4px_8px_-2px_rgba(10,13,18,0.05)] transition-shadow">
      <div className="w-full sm:w-[160px] md:w-[180px] h-[140px] sm:h-auto rounded-lg overflow-hidden shrink-0 bg-[#f5f5f5]">
        <img src={course.image} alt={course.title} className="size-full object-cover" />
      </div>

      <div className="flex-1 flex flex-col gap-2.5 min-w-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-1.5 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-[16px] sm:text-[18px] font-semibold text-[#181d27] leading-6">{course.title}</h3>
              <div className="flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1.167l1.802 3.652 4.031.589-2.916 2.842.688 4.014L7 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L7 1.168z" fill="#F79009" stroke="#F79009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[13px] font-medium text-[#414651]">{course.rating}</span>
              </div>
            </div>
            <p className="text-[13px] sm:text-[14px] text-[#535862] leading-5 line-clamp-2">{course.description}</p>
          </div>
          <span className="text-[18px] sm:text-[20px] font-semibold text-[#181d27] whitespace-nowrap shrink-0">${course.price}</span>
        </div>

        <div className="flex items-center gap-2">
          <img src={course.instructor.avatar} alt="" className="size-6 rounded-full object-cover" />
          <span className="text-[13px] font-medium text-[#414651]">{course.instructor.name}</span>
        </div>

        <div className="flex flex-wrap items-center gap-1.5">
          <span className={`px-2 py-0.5 rounded text-[11px] sm:text-[12px] font-medium border ${tagStyles[course.type]}`}>{course.type}</span>
          <span className={`px-2 py-0.5 rounded text-[11px] sm:text-[12px] font-medium border ${tagStyles[course.mode]}`}>{course.mode}</span>
          {status && (
            <span className={`flex items-center gap-1 text-[11px] sm:text-[12px] font-medium ${status.text}`}>
              <span className={`size-1.5 rounded-full ${status.dot}`} />
              {course.status}
            </span>
          )}
          {course.daysLeft && (
            <span className="flex items-center gap-1 text-[11px] sm:text-[12px] font-medium text-[#f04438]">
              <AlertIcon />
              {course.daysLeft}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-[12px] sm:text-[13px] text-[#717680]">
          <span className="flex items-center gap-1.5"><CalendarIcon />{course.days}</span>
          <span className="flex items-center gap-1.5"><ClockIcon />{course.time}</span>
          <span className="flex items-center gap-1.5"><RepeatIcon />{course.frequency}</span>
          <span className="flex items-center gap-1.5"><UsersIcon />{course.students}</span>
        </div>
      </div>

      <ProgressCircle percent={course.progress} />
    </div>
  )
}

export default CourseCard
