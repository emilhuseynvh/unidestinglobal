import { useState } from "react"
import { Link } from "react-router"
import Pagination from "../../components/student/MyCourses/Pagination"

const stats = [
  {
    iconBg: "bg-[#e8efff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 17.5c-1.833-1.334-4-2-6.167-2a11.5 11.5 0 00-2.5.278v-11.5a11.5 11.5 0 012.5-.278c2.167 0 4.334.666 6.167 2m0 11.5c1.833-1.334 4-2 6.167-2a11.5 11.5 0 012.5.278v-11.5a11.5 11.5 0 00-2.5-.278c-2.167 0-4.334.666-6.167 2" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "4",
    label: "Total Courses",
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "148",
    label: "Total Enrolled",
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "$3,240",
    label: "Course revenue",
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667l2.575 5.216 5.758.842-4.166 4.06.983 5.732L10 14.708l-5.15 2.809.983-5.732-4.166-4.06 5.758-.842L10 1.667z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" />
      </svg>
    ),
    value: "4.8",
    label: "Avg. rating",
  },
]

const filterTabs = []

const courses = [
  {
    id: 2,
    type: "self",
    title: "Learn UI/UX Step by Step",
    desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    level: "Beginner",
    time: "6h 40m",
    lessons: "23 lessons",
    lang: "English",
    chips: ["Self-paced", "34 Enrolled"],
    rating: 4.0,
    reviews: 120,
    price: 45,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=400&h=200&fit=crop",
  },
  {
    id: 3,
    type: "self",
    title: "Learn UI/UX Step by Step",
    desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    level: "Beginner",
    time: "6h 40m",
    lessons: "23 lessons",
    lang: "English",
    chips: ["Self-paced", "34 Enrolled"],
    rating: 4.0,
    reviews: 120,
    price: 45,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=200&fit=crop",
  },
  {
    id: 5,
    type: "self",
    title: "Learn UI/UX Step by Step",
    desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    level: "Beginner",
    time: "6h 40m",
    lessons: "23 lessons",
    lang: "English",
    chips: ["Self-paced", "34 Enrolled"],
    rating: 4.0,
    reviews: 120,
    price: 45,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=200&fit=crop",
  },
]

const chipIcons = {
  "Live Class": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.333" y="2.667" width="10" height="10.667" rx="1.5" fill="#5b616d" />
      <path d="M11.333 6.667l3.334-2v6.666l-3.334-2V6.667z" fill="#5b616d" />
    </svg>
  ),
  "Self-paced": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 14.667A6.667 6.667 0 108 1.333a6.667 6.667 0 000 13.334z" fill="#5b616d" />
      <path d="M6.667 5.333L10.667 8l-4 2.667V5.333z" fill="white" />
    </svg>
  ),
  "Online": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.333A6.667 6.667 0 1014.667 8 6.667 6.667 0 008 1.333zM1.333 8h13.334" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8 1.333A10.2 10.2 0 0110.667 8 10.2 10.2 0 018 14.667 10.2 10.2 0 015.333 8 10.2 10.2 0 018 1.333z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
}

const getChipIcon = (chip) => {
  if (chip.includes("seats filled") || chip.includes("Enrolled")) {
    return (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M10.667 14v-1.333a2.667 2.667 0 00-2.667-2.667H4a2.667 2.667 0 00-2.667 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM14 14v-1.333a2.667 2.667 0 00-2-2.58M10 2.087a2.667 2.667 0 010 5.16" fill="#5b616d" />
      </svg>
    )
  }
  return chipIcons[chip] || null
}

const TutorCourses = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#f9f9fa] border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
            <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
            <div className="flex flex-col">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
              <span className="text-xs text-[#8c929c] leading-4">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* My Courses Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">My Courses</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your account was created successfully. Here's what we have on file from your registration.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <Link to="/tutor/courses/create-self-paced" className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors no-underline">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Create Self-paced Course
          </Link>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white border border-black/[0.03] rounded-2xl p-3">
        <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between gap-3">
          {/* Right side */}
          <div className="flex flex-wrap items-center gap-3 w-full xl:w-auto">
            <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-10 pl-4 pr-2 flex items-center gap-1.5 w-full sm:w-[287px] min-w-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                <path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search course by name"
                className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0"
              />
            </div>
            <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1 shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
              Type of course
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <span className="text-xs text-[#8c929c] leading-4 whitespace-nowrap">
              Showing <span className="font-medium text-[#5b616d]">5</span> courses
            </span>
          </div>
        </div>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {courses.map((course) => (
          <Link key={course.id} to={course.type === "live" ? `/tutor/courses/live/${course.id}` : `/tutor/courses/${course.id}`} className="bg-white border border-black/[0.03] rounded-2xl pb-4 flex flex-col gap-4 relative overflow-hidden hover:shadow-lg transition-shadow no-underline">
            <div className="h-[173px] rounded-t-2xl overflow-hidden">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
            </div>

            {course.badge && (
              <div className="absolute top-[15px] left-[15px] bg-[#ed4030] rounded-[6px] h-6 px-1.5 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <rect x="1.75" y="2.333" width="10.5" height="9.334" rx="1.5" stroke="white" strokeWidth="1" />
                  <path d="M9.333 1.167v2.333M4.667 1.167v2.333M1.75 5.833h10.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
                </svg>
                <span className="text-[10px] font-medium text-white leading-4">
                  {course.badge}
                </span>
              </div>
            )}

            <div className="flex flex-col gap-6 px-4">
              <div className="flex flex-col gap-3">
                {course.tag && (
                  <span className="bg-[rgba(255,195,10,0.12)] self-start h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">
                    {course.tag}
                  </span>
                )}

                {course.rating !== undefined && (
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-semibold text-[#0a0c11]">{course.rating}</span>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="#f59e0b">
                      <path d="M7 1l1.8 3.65 4.03.59-2.92 2.84.69 4.01L7 10.33l-3.6 1.76.69-4.01L1.17 5.24l4.03-.59L7 1z" />
                    </svg>
                    <span className="text-sm text-[#8c929c]">Rating ({course.reviews} Reviews)</span>
                  </div>
                )}

                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-base font-semibold text-[#0a0c11] leading-6 truncate">{course.title}</h3>
                    <p className="text-xs text-[#8c929c] leading-4 line-clamp-2">{course.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-medium text-[#5b616d] flex-wrap">
                  <span>{course.level}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                  <span>{course.time}</span>
                  {course.lessons && (
                    <>
                      <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                      <span>{course.lessons}</span>
                    </>
                  )}
                  <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                  <span>{course.lang}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {course.chips.map((chip) => (
                    <span key={chip} className="h-8 px-2 rounded-lg bg-[rgba(242,242,244,0.8)] text-xs font-medium text-[#0a0c11] flex items-center gap-1.5">
                      {getChipIcon(chip)}
                      {chip}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-[#27282a] leading-[30px]">${course.price}</span>
                <span className="text-sm text-[#27282a] line-through">${course.oldPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination currentPage={1} totalPages={5} />
    </div>
  )
}

export default TutorCourses
