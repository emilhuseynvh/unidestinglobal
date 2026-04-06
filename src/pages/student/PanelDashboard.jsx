import { Link } from "react-router"

const stats = [
  {
    iconBg: "bg-[#e3f6e2]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.5 13.5V4.5a1.5 1.5 0 011.5-1.5h3.75a3 3 0 013 3v9M18.5 13.5V4.5a1.5 1.5 0 00-1.5-1.5h-3.75a3 3 0 00-3 3v9" stroke="#338732" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    value: "24",
    label: "Active Courses",
    badge: "+18%",
    sparkColor: "#86efac",
    sparkPath: "M0 30 C30 28, 60 26, 90 24 C120 22, 140 20, 160 18 C180 16, 200 10, 220 6 C230 4, 234 2, 236 2",
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    value: "76 %",
    label: "Performance",
    badge: "+18%",
    sparkColor: "#93c5fd",
    sparkPath: "M0 28 C30 26, 50 24, 80 20 C100 18, 120 22, 140 16 C160 12, 180 14, 200 8 C220 4, 230 6, 236 4",
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#e4a000" strokeWidth="1.2" /><path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#e4a000" strokeWidth="1.2" strokeLinecap="round" /></svg>,
    value: "3",
    label: "Upcoming Lessons",
    hint: "Rating appears after students leave reviews",
  },
]

const courses = [
  {
    title: "Learn UI/UX Step by Step",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Beginner",
    duration: "6h 40m",
    lessons: "23 lessons",
    language: "English",
    type: "Self-paced",
    enrolled: "34 Enrolled",
    price: "$45",
    oldPrice: "$54.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on...",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Beginner",
    duration: "6h 40m",
    lessons: "23 lessons",
    language: "English",
    type: "Self-paced",
    enrolled: "34 Enrolled",
    price: "$45",
    oldPrice: "$54.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
  },
  {
    title: "AP Biology Weekly Group — Spring 2025",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on...",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Beginner",
    duration: "6h 40m",
    lessons: "23 lessons",
    language: "English",
    type: "Live Class",
    enrolled: "8/14 reserved",
    price: "$45",
    oldPrice: "$54.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
  },
]

const emptyStats = [
  { iconBg: "bg-[#e3f6e2]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M1.5 13.5V4.5a1.5 1.5 0 011.5-1.5h3.75a3 3 0 013 3v9M18.5 13.5V4.5a1.5 1.5 0 00-1.5-1.5h-3.75a3 3 0 00-3 3v9" stroke="#338732" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>, value: "0", label: "Active Courses", hint: "Share your profile link to attract your first student" },
  { iconBg: "bg-[#dff3ff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>, value: "0 %", label: "Performance", hint: "Set availability so students can book you" },
  { iconBg: "bg-[#fffbc4]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#e4a000" strokeWidth="1.2" /><path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#e4a000" strokeWidth="1.2" strokeLinecap="round" /></svg>, value: "—", label: "Upcoming Lessons", hint: "Rating appears after students leave reviews" },
]

const PanelDashboard = () => {
  const isActive = true

  return (
    <div className="py-6 sm:py-8 flex flex-col gap-8 sm:gap-10">
      {!isActive && (
        <div className="bg-[#0a0c11] rounded-2xl p-5 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center gap-6">
          <div className="flex-1 flex flex-col gap-3 min-w-0">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-sm bg-[#4f8ef7]" />
              <span className="text-[11px] font-bold text-[#4f8ef7] uppercase tracking-[1.1px]">Getting started</span>
            </div>
            <h2 className="text-xl sm:text-[28px] font-bold text-white leading-7 sm:leading-10">
              You're registered.<br />Now let's get you<br /><span className="text-[#4f8ef7]">your first course.</span>
            </h2>
            <p className="text-sm text-white/60 leading-5 max-w-[431px]">
              Tutors who complete their profile and set their availability within 24 hours are <strong className="text-white">3× more likely</strong> to receive a booking in their first week.
            </p>
            <button className="self-start h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white flex items-center gap-1.5 mt-2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 5.25L6.75 13.5 3 9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Complete Profile
            </button>
          </div>
          <div className="flex flex-row lg:flex-col items-center gap-4 shrink-0 w-full lg:w-auto">
            <div className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] relative shrink-0">
              <svg width="100%" height="100%" viewBox="0 0 140 140" className="-rotate-90">
                <circle cx="70" cy="70" r="60" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="8" />
                <circle cx="70" cy="70" r="60" fill="none" stroke="#4f8ef7" strokeWidth="8" strokeLinecap="round" strokeDasharray="377" strokeDashoffset="314" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-lg sm:text-[22px] font-bold text-white">1/6</span>
                <span className="text-[10px] text-white/50 uppercase tracking-wider">Setup done</span>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-white/40">—</span>
                <span className="text-[10px] text-white/40">Courses</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-white/40">—</span>
                <span className="text-[10px] text-white/40">Lessons</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-sm font-semibold text-white/40">—</span>
                <span className="text-[10px] text-white/40">Performance</span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex flex-col gap-2">
        <h2 className="text-base font-semibold text-[#0a0c11] leading-6">Your stats will appear here</h2>
        <p className="text-sm text-[#5b616d] leading-5">Complete your profile to unlock analytics and start tracking your growth</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {(isActive ? stats : emptyStats).map((stat) => (
          <div key={stat.label} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col justify-between min-h-[148px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-full ${stat.iconBg} flex items-center justify-center`}>{stat.icon}</div>
                {stat.badge && (
                  <div className="bg-[#e3f6e2] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-[11px] font-semibold text-[#338732] leading-none">{stat.badge}</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{stat.value}</span>
                <span className="text-xs text-[#5b616d] leading-4">{stat.label}</span>
              </div>
            </div>
            {stat.sparkPath && (
              <svg className="w-full h-9" viewBox="0 0 236 36" fill="none" preserveAspectRatio="none">
                <path d={`${stat.sparkPath} L236 36 L0 36 Z`} fill={stat.sparkColor} fillOpacity="0.3" />
                <path d={stat.sparkPath} stroke={stat.sparkColor} strokeWidth="2" fill="none" strokeLinecap="round" />
              </svg>
            )}
            {stat.hint && (
              <div className="bg-[#f9f9fa] border border-dashed border-black/[0.06] rounded-lg px-2 py-2.5 flex gap-2 items-start">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="shrink-0 mt-[3px]"><circle cx="6" cy="6" r="5" stroke="#5b616d" strokeWidth="1" /><path d="M6 5v2.5" stroke="#5b616d" strokeWidth="1" strokeLinecap="round" /><circle cx="6" cy="3.5" r="0.5" fill="#5b616d" /></svg>
                <span className="text-xs text-[#5b616d] leading-4">{stat.hint}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {isActive && <div className="backdrop-blur-[12px] bg-black/[0.03] rounded-2xl sm:rounded-[28px] p-2 sm:p-3">
        <div className="bg-white rounded-xl sm:rounded-2xl p-3 flex flex-col gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]">
          <div className="w-8 h-8 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="3" y="5" width="14" height="10" rx="2" fill="#ed4030" /><path d="M8 8l2.5 2L13 8" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
          <div className="flex flex-col gap-1 pb-1">
            <p className="text-sm sm:text-base font-semibold text-[#0a0c11] leading-5 sm:leading-6">
              AP Biology Weekly Group — Spring 2026 — Session #7 is {"  "}
              <span className="font-semibold text-[#df2917]">● LIVE NOW</span>
            </p>
            <p className="text-xs sm:text-sm text-[#8c929c] leading-4 sm:leading-5">
              Genetics & Inheritance · Aynur Karimova · 12/15 students joined · Started 5 min ago
            </p>
          </div>
          <div className="flex justify-end">
            <button className="h-8 px-2 rounded-lg bg-[#ed4030] border border-black/[0.09] text-xs font-medium text-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
              Join Now
            </button>
          </div>
        </div>
      </div>}

      {isActive ? (
        <>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg font-semibold text-[#0a0c11]">My Courses</h2>
              <p className="text-sm text-[#5b616d] leading-5">Complete your profile to unlock analytics and start tracking your growth</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {courses.map((course, i) => (
                <Link key={i} to={`/student/panel/courses/${i + 1}`} className="bg-white border border-black/[0.03] rounded-2xl overflow-hidden flex flex-col gap-4 pb-4 no-underline hover:shadow-[0px_3px_12px_rgba(0,0,0,0.06)] transition-shadow">
                  <div className="h-[173px] relative overflow-hidden rounded-t-2xl">
                    <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                  <div className="px-4 flex flex-col gap-6">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-center gap-1.5 py-0.5">
                        <span className="text-sm font-semibold text-[#0a0c11] leading-5">{course.rating}</span>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333l1.947 3.947 4.353.636-3.15 3.07.744 4.334L8 11.263l-3.894 2.057.744-4.334-3.15-3.07 4.353-.636L8 1.333z" fill="#f5a623" /></svg>
                        <span className="text-sm text-[#8c929c] leading-5">Rating</span>
                        <span className="text-sm text-[#8c929c] leading-5">({course.reviews})</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-1">
                          <h3 className="text-base font-semibold text-[#0a0c11] leading-6 truncate">{course.title}</h3>
                          <p className="text-xs text-[#8c929c] leading-4 line-clamp-2">{course.description}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center backdrop-blur-[12px]">
                            <span className="text-[10px] font-medium text-white leading-4">{course.tutorInitial}</span>
                          </div>
                          <span className="text-xs font-medium text-[#5b616d] leading-4">{course.tutor}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-medium text-[#5b616d] leading-5">{course.level}</span>
                        <div className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                        <span className="text-sm font-medium text-[#5b616d] leading-5">{course.duration}</span>
                        <div className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                        <span className="text-sm font-medium text-[#5b616d] leading-5">{course.lessons}</span>
                        <div className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                        <span className="text-sm font-medium text-[#5b616d] leading-5">{course.language}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[rgba(242,242,244,0.8)] h-8 px-2 rounded-lg text-xs font-medium text-[#0a0c11] flex items-center gap-1.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 11V4a1 1 0 011-1h3a2.5 2.5 0 012.5 2.5V14M14.5 11V4a1 1 0 00-1-1h-3A2.5 2.5 0 008 5.5V14" stroke="#0a0c11" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          {course.type}
                        </span>
                        <span className="bg-[rgba(242,242,244,0.8)] h-8 px-2 rounded-lg text-xs font-medium text-[#0a0c11] flex items-center gap-1.5">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 14v-1.333A2.667 2.667 0 008.667 10H7.333a2.667 2.667 0 00-2.666 2.667V14" stroke="#0a0c11" strokeWidth="1.1" strokeLinecap="round" /><circle cx="8" cy="5.333" r="2.667" stroke="#0a0c11" strokeWidth="1.1" /></svg>
                          {course.enrolled}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-[#27282a] leading-[30px]">{course.price}</span>
                      <span className="text-sm text-[#27282a] line-through leading-5">{course.oldPrice}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div className="flex flex-col gap-1">
                <h2 className="text-lg font-semibold text-[#0a0c11]">My Schedule</h2>
                <p className="text-sm text-[#5b616d] leading-5">Complete your profile to unlock analytics and start tracking your growth</p>
              </div>
              <Link to="/student/panel/schedule" className="text-sm font-medium text-[#007aff] hover:underline shrink-0">View full schedule</Link>
            </div>
            <div className="bg-white border border-black/[0.03] rounded-[18px] p-4 sm:p-5 overflow-hidden">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-5">
                <div className="flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2" y="3" width="14" height="12" rx="2" stroke="#0a0c11" strokeWidth="1.2" /><path d="M12 1.5v3M6 1.5v3M2 7.5h14" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" /></svg>
                  <span className="text-sm font-semibold text-[#0a0c11]">January 10, 2025</span>
                </div>
                <span className="text-xs text-[#8c929c] bg-[#f2f2f4] px-2 py-0.5 rounded-md">Week 1</span>
              </div>
              <div className="flex">
                <div className="w-12 sm:w-16 shrink-0 flex flex-col">
                  {["9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM"].map((time) => (
                    <div key={time} className="h-14 sm:h-16 flex items-start"><span className="text-[10px] sm:text-xs text-[#8c929c]">{time}</span></div>
                  ))}
                </div>
                <div className="flex-1 relative border-l border-[#f2f2f4]">
                  {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
                    <div key={idx} className="h-14 sm:h-16 border-b border-[#f2f2f4]" />
                  ))}
                  <div className="absolute left-1 sm:left-2 right-1 sm:right-2 top-0 h-[78px] sm:h-[88px] bg-[#e3f6e2] border border-[#bbf7d0] rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-xs sm:text-sm font-medium text-[#15803d]">English Speaking</span>
                    <span className="text-[10px] sm:text-xs text-[#22c55e]">9:00 AM</span>
                    <span className="text-[10px] text-[#22c55e]">▲ Live</span>
                  </div>
                  <div className="absolute left-1 sm:left-2 right-1 sm:right-2 top-[84px] sm:top-[96px] h-[78px] sm:h-[88px] bg-[#dbeafe] border border-[#93c5fd] rounded-lg sm:rounded-xl p-2 sm:p-3 flex flex-col gap-0.5 sm:gap-1">
                    <span className="text-xs sm:text-sm font-medium text-[#1d4ed8]">Mock Office</span>
                    <span className="text-[10px] sm:text-xs text-[#3b82f6]">10:30 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
            <div className="bg-[#f9f9fa] border-b border-black/[0.06] px-4 sm:px-6 py-4 sm:py-5 flex flex-col gap-1">
              <h3 className="text-base font-semibold text-[#0a0c11] leading-6">Get your first Course</h3>
              <p className="text-sm text-[#5b616d] leading-5">Once your profile is live, share your unique link everywhere — social media, WhatsApp, or email.</p>
            </div>
            <div className="flex flex-col items-center pt-6 sm:pt-8 pb-8 sm:pb-10 px-4 sm:px-6 gap-5">
              <div className="relative">
                <div className="w-[100px] h-[100px] rounded-full bg-[#f2f2f4] flex items-center justify-center">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M6 32V14a3 3 0 013-3h7.5a6 6 0 016 6V32M34 32V14a3 3 0 00-3-3h-7.5a6 6 0 00-6 6V32" stroke="#5b616d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-black/[0.09]" />
              </div>
              <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
                <h4 className="text-base font-extrabold text-[#0a0c11] leading-6 text-center">No any course yet</h4>
                <p className="text-sm text-[#5b616d] leading-5 text-center">Your profile isn't live until you complete setup. Finish the steps above and students will start finding you.</p>
              </div>
              <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.5" /><path d="M15 15l-3-3" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                Browse Courses
              </button>
              <div className="relative flex items-center justify-center w-full">
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-0">
                  <div className="w-[50px] h-px bg-black/[0.06]" />
                  <span className="text-xs text-[#5b616d] px-3 whitespace-nowrap">quick search</span>
                  <div className="w-[50px] h-px bg-black/[0.06]" />
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-2.5 justify-center mt-2">
                <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1.5 13.5V4.5a1.5 1.5 0 011.5-1.5h3.75a3 3 0 013 3v9M16.5 13.5V4.5a1.5 1.5 0 00-1.5-1.5h-3.75a3 3 0 00-3 3v9" stroke="#5b616d" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Self-paced courses
                </button>
                <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="3" width="11.25" height="12" rx="2" stroke="#5b616d" strokeWidth="1.2" /><path d="M12.75 7.5L16.5 5.25V12.75L12.75 10.5V7.5Z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Live Class Courses
                </button>
                <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 13.5V4.5a1.5 1.5 0 011.5-1.5H12v11.25" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" /><path d="M5.25 15.75H15V12H5.25a1.5 1.5 0 000 3z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Certificates Courses
                </button>
              </div>
            </div>
          </div>

          <div className="bg-[#dff3ff] rounded-[20px] p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:justify-between relative overflow-hidden">
            <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0 z-10">
              <div className="shrink-0 w-9 h-9 sm:w-11 sm:h-11">
                <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                  <path d="M24.004 2.32775C24.5223 1.60208 25.6667 1.96878 25.6667 2.86055V18.3334H34.8854C35.631 18.3334 36.0646 19.1762 35.6312 19.783L19.996 41.6724C19.4775 42.3981 18.3333 42.0314 18.3333 41.1397V25.6667H9.11456C8.36898 25.6667 7.93529 24.8241 8.36865 24.2173L24.004 2.32775Z" fill="#007AFF" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <span className="text-base font-semibold text-[#0a0c11] leading-6">Your profile isn't live yet</span>
                <p className="text-sm font-medium text-[#5b616d] leading-5">Students can't find you until you complete setup. Tutors who go live within 24 hours earn their first $100 on average within the first 7 days.</p>
              </div>
            </div>
            <button className="shrink-0 h-10 px-[10px] rounded-[10px] bg-black backdrop-blur-[12px] border border-black/[0.09] text-xs sm:text-sm font-medium text-white flex items-center gap-1.5 z-10 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] self-end sm:self-auto">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 9l2.25 2.25L13.5 6.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Finish setup now
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default PanelDashboard
