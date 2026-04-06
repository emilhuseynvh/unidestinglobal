import { useState } from "react"
import { Link } from "react-router"

const stats = [
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M1.5 13.5V4.5a1.5 1.5 0 011.5-1.5h3.75a3 3 0 013 3v9M18.5 13.5V4.5a1.5 1.5 0 00-1.5-1.5h-3.75a3 3 0 00-3 3v9" stroke="#338732" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "4",
    label: "Active Courses",
    badge: "+18%",
    sparkColor: "#86efac",
    sparkPath: "M0 30 C30 28, 60 26, 90 24 C120 22, 140 20, 160 18 C180 16, 200 10, 220 6 C230 4, 234 2, 236 2",
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.5" y="3" width="11.25" height="12" rx="2" stroke="#007aff" strokeWidth="1.2" />
        <path d="M12.75 7.5L16.5 5.25V12.75L12.75 10.5V7.5Z" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "1",
    label: "Live Class Now",
    liveTag: true,
    sparkColor: "#93c5fd",
    sparkPath: "M0 28 C30 26, 50 24, 80 20 C100 18, 120 22, 140 16 C160 12, 180 14, 200 8 C220 4, 230 6, 236 4",
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "68 %",
    label: "Avg. Progress",
    badge: "+18%",
    sparkColor: "#86efac",
    sparkPath: "M0 30 C20 28, 40 20, 60 22 C80 24, 100 14, 120 16 C140 18, 160 10, 180 8 C200 6, 220 4, 236 6",
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667l2.472 5.01 5.528.808-4 3.9.944 5.505L10 14.275l-4.944 2.615.944-5.505-4-3.9 5.528-.808L10 1.667z" fill="#e4a000" />
      </svg>
    ),
    value: "2",
    label: "Certificates",
    badge: "+18%",
    sparkColor: "#fde68a",
    sparkPath: "M0 30 C30 28, 60 24, 90 22 C120 18, 150 16, 180 12 C200 8, 220 6, 236 4",
  },
]

const filterTabs = [
  { label: "All", count: "08" },
  { label: "In-Progress", count: "06" },
  { label: "Live Classes", count: "02" },
  { label: "Completed", count: "03" },
  { label: "Wishlist", count: "04" },
]

const courses = [
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    tutor: "Aynur Karimova",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Live Class",
    seats: "8/14 seats filled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
    liveNow: true,
  },
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on experience in building real applications.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Live Class",
    seats: "8/14 seats filled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
    registrationTag: "Registration period: 25 Mar - 31 Mar",
  },
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on experience in building real applications.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Live Class",
    seats: "8/14 seats filled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Self-paced",
    seats: "34 Enrolled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
    progress: 89,
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on experience in building real applications.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Self-paced",
    seats: "34 Enrolled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
    progress: 89,
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "The Course takes a deep dive into programming tools and techniques, providing hands-on experience in building real applications.",
    tutor: "Ali Guliyev",
    tutorInitial: "A",
    rating: "4.0",
    reviews: "120 Reviews",
    level: "Intermediate",
    date: "3 April 04:00 AM",
    language: "English",
    type: "Self-paced",
    seats: "34 Enrolled",
    price: "$45",
    oldPrice: "$64.99",
    image: "https://www.figma.com/api/mcp/asset/c14c00fc-da48-4ca8-974a-c915366f72e0",
    progress: 89,
  },
]

const renderCourseCard = (course, i) => (
  <Link key={i} to={course.type === "Live Class" ? `/student/panel/courses/live/${i + 1}` : `/student/panel/courses/${i + 1}`} className="bg-white border border-black/[0.03] rounded-2xl overflow-hidden flex flex-col gap-4 pb-4 no-underline hover:shadow-[0px_3px_12px_rgba(0,0,0,0.06)] transition-shadow">
    <div className="h-[173px] relative overflow-hidden rounded-t-2xl">
      <img src={course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover" />
      {course.progress !== undefined && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-black/10">
          <div className="h-full bg-[#007aff] rounded-r-full" style={{ width: `${course.progress}%` }} />
        </div>
      )}
      {course.liveNow && (
        <div className="absolute top-3 left-3 bg-[#ed4030] text-white text-[11px] font-bold px-2.5 py-1 rounded-lg flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          Live now
        </div>
      )}
      {course.registrationTag && (
        <div className="absolute top-3 left-3 bg-[#e3f6e2] text-[#338732] text-[11px] font-bold px-2.5 py-1 rounded-lg">
          {course.registrationTag}
        </div>
      )}
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
          <span className="text-sm font-medium text-[#5b616d] leading-5">{course.date}</span>
          <div className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
          <span className="text-sm font-medium text-[#5b616d] leading-5">{course.language}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="bg-[rgba(242,242,244,0.8)] h-8 px-2 rounded-lg text-xs font-medium text-[#0a0c11] flex items-center gap-1.5">
            {course.type === "Live Class" ? (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.5" y="3" width="9" height="9.5" rx="1.5" stroke="#0a0c11" strokeWidth="1.1" /><path d="M10.5 6.5L14 4.5V11.5L10.5 9.5V6.5Z" stroke="#0a0c11" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 11V4a1 1 0 011-1h3a2.5 2.5 0 012.5 2.5V14M14.5 11V4a1 1 0 00-1-1h-3A2.5 2.5 0 008 5.5V14" stroke="#0a0c11" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
            )}
            {course.type}
          </span>
          <span className="bg-[rgba(242,242,244,0.8)] h-8 px-2 rounded-lg text-xs font-medium text-[#0a0c11] flex items-center gap-1.5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 14v-1.333A2.667 2.667 0 008.667 10H7.333a2.667 2.667 0 00-2.666 2.667V14" stroke="#0a0c11" strokeWidth="1.1" strokeLinecap="round" /><circle cx="8" cy="5.333" r="2.667" stroke="#0a0c11" strokeWidth="1.1" /></svg>
            {course.seats}
          </span>
          {course.progress !== undefined && (
            <span className="bg-[rgba(0,122,255,0.08)] h-8 px-2 rounded-lg text-xs font-medium text-[#007aff] flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5.5" stroke="#007aff" strokeWidth="1.1" /><path d="M8 4v4l2.5 1.5" stroke="#007aff" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
              {course.progress}%
            </span>
          )}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-xl font-semibold text-[#27282a] leading-[30px]">{course.price}</span>
        <span className="text-sm text-[#27282a] line-through leading-5">{course.oldPrice}</span>
      </div>
    </div>
  </Link>
)

const StudentMyCourses = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")

  return (
    <div className="py-6 sm:py-8 flex flex-col gap-8 sm:gap-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col justify-between min-h-[148px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
                {s.badge && (
                  <div className="bg-[#e3f6e2] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-[11px] font-semibold text-[#338732] leading-none">{s.badge}</span>
                  </div>
                )}
                {s.liveTag && (
                  <div className="bg-[rgba(237,64,48,0.12)] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#ed4030] animate-pulse" />
                    <span className="text-[11px] font-bold text-[#ed4030] leading-none">Live</span>
                  </div>
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
                <span className="text-xs text-[#5b616d] leading-4">{s.label}</span>
              </div>
            </div>
            <svg className="w-full h-9" viewBox="0 0 236 36" fill="none" preserveAspectRatio="none">
              <path d={`${s.sparkPath} L236 36 L0 36 Z`} fill={s.sparkColor} fillOpacity="0.3" />
              <path d={s.sparkPath} stroke={s.sparkColor} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      <div className="backdrop-blur-[12px] bg-black/[0.03] rounded-2xl sm:rounded-[28px] p-2 sm:p-3">
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
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">My Courses</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your account has created successfully. Here's what we have on file from your registration.</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shrink-0 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M6.75 3.75h-3a1.5 1.5 0 00-1.5 1.5v9a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-3M10.5 2.25h5.25v5.25M7.5 10.5L15.75 2.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Explore Courses
        </button>
      </div>

      <div className="bg-white border border-black/[0.03] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.label)}
              className={`h-9 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1 transition-colors ${
                activeFilter === tab.label
                  ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                  : "text-[#8c929c]"
              }`}
            >
              {tab.label}
              <span className="bg-[rgba(0,122,255,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center justify-center">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
        <div className="relative">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <circle cx="8" cy="8" r="5.5" stroke="#8c929c" strokeWidth="1.3" />
            <path d="M15 15l-3-3" stroke="#8c929c" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search courses by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-white border border-black/[0.06] rounded-xl h-10 pl-9 pr-3 text-sm text-[#0a0c11] placeholder:text-[#8c929c] outline-none w-full sm:w-[240px]"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            All subjects
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            Sort: Recent
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <span className="text-xs text-[#8c929c] whitespace-nowrap">
          Showing <span className="font-medium text-[#5b616d]">8</span> courses
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course, i) => renderCourseCard(course, i))}
      </div>
    </div>
  )
}

export default StudentMyCourses
