const tagStyles = {
  Group: "bg-[#f8f9fc] text-[#363f72] border-[#d5d9eb]",
  Individual: "bg-[#f8f9fc] text-[#363f72] border-[#d5d9eb]",
  Online: "bg-[#f4f3ff] text-[#5925dc] border-[#d9d6fe]",
  Offline: "bg-[#f4f3ff] text-[#5925dc] border-[#d9d6fe]",
}

const statusStyles = {
  Pending: { bg: "bg-[#fffaeb]", border: "border-[#fedf89]", dot: "bg-[#f79009]", text: "text-[#b54708]" },
  Confirmed: { bg: "bg-[#ecfdf3]", border: "border-[#abefc6]", dot: "bg-[#17b26a]", text: "text-[#067647]" },
  "Course Closed": { bg: "bg-[#fef3f2]", border: "border-[#fecdca]", dot: "bg-[#f04438]", text: "text-[#b42318]" },
}

const progressColors = { low: "stroke-[#007aff]", full: "stroke-[#f04438]" }

const ProgressCircle = ({ percent }) => {
  const r = 24, circ = 2 * Math.PI * r, offset = circ - (percent / 100) * circ
  const color = percent >= 100 ? progressColors.full : progressColors.low
  return (
    <div className="flex flex-col items-center gap-2 sm:gap-3 shrink-0">
      <div className="relative size-12 sm:size-16">
        <svg className="size-full -rotate-90" viewBox="0 0 56 56">
          <circle cx="28" cy="28" r={r} fill="none" stroke="#e9eaeb" strokeWidth="3.5" />
          <circle cx="28" cy="28" r={r} fill="none" className={color} strokeWidth="3.5" strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset} />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-[12px] sm:text-[14px] font-semibold text-[#181d27] leading-5">{percent}%</span>
      </div>
      <span className={`text-[12px] sm:text-[14px] font-semibold leading-5 ${percent >= 100 ? "text-[#f04438]" : "text-[#007aff]"}`}>Booked</span>
    </div>
  )
}

const CalendarIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.333 1.333V3.333M10.667 1.333V3.333M2 6h12M3.333 2.667h9.334c.736 0 1.333.597 1.333 1.333v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>)
const ClockIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#808080" strokeWidth="1.2"/><path d="M8 4.667V8l2 1" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>)
const RepeatIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 1.333l2 2-2 2M2 7.333V6a2.667 2.667 0 012.667-2.667h9.333M4 14.667l-2-2 2-2M14 8.667V10A2.667 2.667 0 0111.333 12.667H2" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>)
const UsersIcon = () => (<svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 14v-1.333A2.667 2.667 0 008.667 10H3.333A2.667 2.667 0 00.667 12.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM15.333 14v-1.333a2.667 2.667 0 00-2-2.58M10.667 2.087a2.667 2.667 0 010 5.166" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>)
const AlertIcon = () => (<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2M6 8h.005" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>)

const TutorCourseCard = ({ course }) => {
  const status = statusStyles[course.status]
  const closed = course.status === "Course Closed"

  return (
    <div className="border border-[#e6e6e6] rounded-2xl p-3 sm:p-4 flex flex-col gap-3">
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
        <div className="w-full h-40 sm:w-35 md:w-47 sm:h-auto sm:self-stretch rounded-xl sm:rounded-2xl overflow-hidden shrink-0 bg-[#f5f5f5]">
          <img src={course.image} alt={course.title} className="size-full object-cover" />
        </div>

        <div className="flex-1 flex flex-col gap-2 sm:gap-3 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-0.5 flex-wrap">
              <h3 className="text-[16px] sm:text-[20px] font-semibold text-[#333] leading-[1.4]">{course.title}</h3>
              <div className="flex items-center gap-0.5 shrink-0">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333l1.802 3.652 4.031.589-2.916 2.842.688 4.014L8 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L8 1.168z" fill="#F79009" stroke="#F79009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span className="text-[12px] font-normal text-[#808080] leading-[1.4]">{course.rating}</span>
              </div>
            </div>
            <span className="text-[18px] sm:text-[20px] font-semibold text-black leading-[1.4] shrink-0">${course.price}</span>
          </div>

          <p className="text-[12px] font-normal text-[#808080] leading-[1.4] line-clamp-2">{course.description}</p>

          <div className="flex items-center gap-1">
            <img src={course.instructor.avatar} alt="" className="size-7 sm:size-8 rounded-full object-cover" />
            <span className="text-[13px] sm:text-[14px] font-normal text-[#333] leading-[1.4]">{course.instructor.name}</span>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className={`px-1.5 py-0.5 rounded-md text-[11px] sm:text-[12px] font-medium border leading-[18px] ${tagStyles[course.type]}`}>{course.type}</span>
            <span className={`px-1.5 py-0.5 rounded-md text-[11px] sm:text-[12px] font-medium border leading-[18px] ${tagStyles[course.mode]}`}>{course.mode}</span>
            {status && (
              <span className={`flex items-center gap-1 ${status.bg} border ${status.border} rounded-md px-1.5 py-0.5 text-[11px] sm:text-[12px] font-medium ${status.text} leading-[18px]`}>
                <span className={`size-1.5 rounded-full ${status.dot}`} />
                {course.status}
              </span>
            )}
            {course.daysLeft && (
              <span className="flex items-center gap-1 bg-[#fef3f2] border border-[#fecdca] rounded-md pl-1 pr-1.5 py-0.5 text-[11px] sm:text-[12px] font-medium text-[#b42318] leading-[18px]">
                <AlertIcon />{course.daysLeft}
              </span>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[12px] sm:text-[14px] font-medium text-[#808080] leading-[1.4]">
            <span className="flex items-center gap-1"><CalendarIcon />{course.days}</span>
            <span className="flex items-center gap-1"><ClockIcon />{course.time}</span>
            <span className="flex items-center gap-1"><RepeatIcon />{course.frequency}</span>
            <span className="flex items-center gap-1"><UsersIcon />{course.students}</span>
          </div>
        </div>

        <div className="hidden sm:flex flex-col items-end gap-[59px] shrink-0">
          <div />
          <ProgressCircle percent={course.progress} />
        </div>
      </div>

      <div className="flex sm:hidden items-center justify-between">
        <ProgressCircle percent={course.progress} />
      </div>

      <div className="flex gap-2 sm:gap-3">
        <button className="flex-1 h-10 sm:h-12 border border-[#c6c5c8] rounded-xl sm:rounded-2xl text-[14px] sm:text-[16px] font-medium text-black leading-[1.4] hover:bg-[#f9f9f9] transition-colors">
          Save to my list
        </button>
        <button
          disabled={closed}
          className={`flex-1 h-10 sm:h-12 rounded-xl sm:rounded-2xl text-[14px] sm:text-[16px] font-medium leading-[1.4] transition-colors ${
            closed ? "bg-[#e9eaeb] text-[#a4a7ae] cursor-not-allowed" : "bg-[#007aff] text-white hover:bg-[#0066d6]"
          }`}
        >
          Enroll now
        </button>
      </div>
    </div>
  )
}

export default TutorCourseCard
