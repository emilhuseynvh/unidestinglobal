import { useState } from "react"
import { Link } from "react-router"
import Pagination from "../../components/student/MyCourses/Pagination"

const stats = [
  { iconBg: "bg-[#e8efff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" stroke="#3b82f6" strokeWidth="1.5" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, value: "2", label: "Total Classes" },
  { iconBg: "bg-[#e3f6e2]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, value: "24", label: "Total Enrolled" },
  { iconBg: "bg-[#dff3ff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, value: "$1,200", label: "Revenue" },
  { iconBg: "bg-[#fffbc4]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.667l2.575 5.216 5.758.842-4.166 4.06.983 5.732L10 14.708l-5.15 2.809.983-5.732-4.166-4.06 5.758-.842L10 1.667z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" /></svg>, value: "4.9", label: "Avg. rating" },
]

const classes = [
  {
    id: 1,
    title: "AP Biology Weekly Group — Spring 2026",
    desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    level: "Intermediate",
    time: "3 April 09:00 AM",
    lang: "English",
    chips: ["Live Class", "8/14 seats filled", "Online"],
    tag: "Filling up fast",
    badge: "Registration period: 26 Mar - 31 Mar",
    price: 45,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
  },
  {
    id: 2,
    title: "AP Biology Weekly Group — Spring 2026",
    desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    level: "Intermediate",
    time: "3 April 09:00 AM",
    lang: "English",
    chips: ["Live Class", "8/14 seats filled", "Online"],
    tag: "Filling up fast",
    badge: "Registration period: 26 Mar - 31 Mar",
    price: 45,
    oldPrice: 54.99,
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=400&h=200&fit=crop",
  },
]

const TutorClasses = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
            <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
            <div className="flex flex-col">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
              <span className="text-xs text-[#8c929c] leading-4">{s.label}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">My Classes</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Manage your live classes and sessions.</p>
        </div>
        <Link to="/tutor/courses/create-live-class" className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors no-underline shrink-0 self-start sm:self-auto">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
          Create Live Class
        </Link>
      </div>

      {/* Search */}
      <div className="bg-white border border-black/[0.03] rounded-2xl p-3">
        <div className="flex flex-wrap items-center gap-3">
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-10 pl-4 pr-2 flex items-center gap-1.5 w-full sm:w-[287px] min-w-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search class by name" className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0" />
          </div>
          <span className="text-xs text-[#8c929c] leading-4 whitespace-nowrap">Showing <span className="font-medium text-[#5b616d]">{classes.length}</span> classes</span>
        </div>
      </div>

      {/* Class Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classes.map((cls) => (
          <Link key={cls.id} to={`/tutor/courses/live/${cls.id}`} className="bg-white border border-black/[0.03] rounded-2xl pb-4 flex flex-col gap-4 relative overflow-hidden hover:shadow-lg transition-shadow no-underline">
            <div className="h-[173px] rounded-t-2xl overflow-hidden">
              <img src={cls.image} alt={cls.title} className="w-full h-full object-cover" />
            </div>
            {cls.badge && (
              <div className="absolute top-[15px] left-[15px] bg-[#ed4030] rounded-[6px] h-6 px-1.5 flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><rect x="1.75" y="2.333" width="10.5" height="9.334" rx="1.5" stroke="white" strokeWidth="1" /><path d="M9.333 1.167v2.333M4.667 1.167v2.333M1.75 5.833h10.5" stroke="white" strokeWidth="1" strokeLinecap="round" /></svg>
                <span className="text-[10px] font-medium text-white leading-4">{cls.badge}</span>
              </div>
            )}
            <div className="flex flex-col gap-6 px-4">
              <div className="flex flex-col gap-3">
                {cls.tag && <span className="bg-[rgba(255,195,10,0.12)] self-start h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">{cls.tag}</span>}
                <div className="flex flex-col gap-2">
                  <h3 className="text-base font-semibold text-[#0a0c11] leading-6 truncate">{cls.title}</h3>
                  <p className="text-xs text-[#8c929c] leading-4 line-clamp-2">{cls.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-[#5b616d] flex-wrap">
                  <span>{cls.level}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                  <span>{cls.time}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                  <span>{cls.lang}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cls.chips.map((chip) => (
                    <span key={chip} className="h-8 px-2 rounded-lg bg-[rgba(242,242,244,0.8)] text-xs font-medium text-[#0a0c11] flex items-center">{chip}</span>
                  ))}
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-semibold text-[#27282a] leading-[30px]">${cls.price}</span>
                <span className="text-sm text-[#27282a] line-through">${cls.oldPrice}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <Pagination currentPage={1} totalPages={1} />
    </div>
  )
}

export default TutorClasses
