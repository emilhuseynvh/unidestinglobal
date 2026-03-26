const VerifiedBadge = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="8" cy="8" r="5" fill="white"/>
    <path d="M8 1.333A1.26 1.26 0 009.173 2l.147.32a1.26 1.26 0 001.1.68h.347c.76 0 1.273.78.96 1.467l-.14.32a1.26 1.26 0 00.26 1.293l.233.26c.527.587.267 1.52-.487 1.747l-.333.1a1.26 1.26 0 00-.86.973l-.06.347c-.14.753-.98 1.14-1.627.727l-.286-.187a1.26 1.26 0 00-1.314 0l-.286.187c-.647.413-1.487.027-1.627-.727l-.06-.347a1.26 1.26 0 00-.86-.973l-.333-.1c-.754-.227-1.014-1.16-.487-1.747l.233-.26a1.26 1.26 0 00.26-1.293l-.14-.32c-.313-.687.2-1.467.96-1.467h.347a1.26 1.26 0 001.1-.68L6.827 2A1.26 1.26 0 008 1.333z" fill="#007AFF"/>
    <path d="M5.667 8l1.666 1.667L10.667 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CamcorderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.333 8.333l4.259-2.13A.833.833 0 0118.833 7v6a.833.833 0 01-1.241.726l-4.259-2.13M3.333 5h8.334c.92 0 1.666.746 1.666 1.667v6.666c0 .92-.746 1.667-1.666 1.667H3.333c-.92 0-1.666-.747-1.666-1.667V6.667c0-.92.746-1.667 1.666-1.667z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BellIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6.667a5 5 0 00-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 12.5 15 6.667zM11.442 17.5a1.667 1.667 0 01-2.884 0" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const badgeStyles = {
  live: {
    bg: "bg-[#ecfdf3]",
    border: "border-[#abefc6]",
    dotColor: "bg-[#17b26a]",
    textColor: "text-[#067647]",
  },
  warning: {
    bg: "bg-[#fffaeb]",
    border: "border-[#fedf89]",
    dotColor: "bg-[#f79009]",
    textColor: "text-[#b54708]",
  },
  danger: {
    bg: "bg-[#fef3f2]",
    border: "border-[#fecdca]",
    dotColor: "bg-[#f04438]",
    textColor: "text-[#b42318]",
  },
}

const CourseCard = ({ course }) => {
  const badge = badgeStyles[course.badgeType]

  return (
    <div className="flex-1 min-w-0 bg-[#fafafa] border border-[#fafafa] rounded-[16px] p-2 flex flex-col gap-[9px]">
      <div className="bg-white rounded-[8px] px-2 py-4 flex flex-col gap-5">
        <div className="flex flex-col gap-2 px-2">
          <div className={`inline-flex items-center gap-1 ${badge.bg} border ${badge.border} rounded-[6px] px-[6px] py-[2px] self-start`}>
            <span className={`size-[6px] rounded-full ${badge.dotColor}`} />
            <span className={`text-[12px] font-medium ${badge.textColor} leading-[18px]`}>
              {course.badgeLabel}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[16px] font-semibold text-[#181d27] leading-[20px]">
              {course.title}
            </h3>
            <p className="text-[14px] text-[#717680] leading-[20px]">
              {course.group}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-[7px] px-2">
          <div className="flex flex-col gap-[2px] items-end">
            <span className="text-[10px] font-medium text-[#717680] leading-[12px]">
              {course.progress}%
            </span>
            <div className="w-full h-[6px] bg-[#e9eaeb] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#270afa] rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
          </div>
          <span className="text-[12px] text-[#717680] leading-[16px]">
            In progress
          </span>
        </div>

        <div className="flex flex-col gap-4 px-2">
          <div className="h-px bg-[#e9eaeb]" />
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full overflow-hidden relative shrink-0">
              <img
                src={course.instructor.avatar}
                alt={course.instructor.name}
                className="size-full object-cover"
              />
              <div className="absolute bottom-0 right-0">
                <VerifiedBadge />
              </div>
            </div>
            <div className="flex flex-col gap-2 min-w-0">
              <span className="text-[12px] font-semibold text-[#181d27] leading-[14px]">
                {course.instructor.name}
              </span>
              <div className="flex items-center gap-2 text-[12px] text-[#717680] leading-[14px]">
                <span>{course.date}</span>
                <span className="size-1 rounded-full bg-[#717680]" />
                <span>{course.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="flex items-center justify-center gap-2 h-10 rounded-[12px] hover:bg-[#f0f0f0] transition-colors w-full">
        {course.action === "join" ? <CamcorderIcon /> : <BellIcon />}
        <span className="text-[16px] font-medium text-[#333] leading-[1.4]">
          {course.action === "join" ? "Join" : "Remind me"}
        </span>
      </button>
    </div>
  )
}

export default CourseCard
