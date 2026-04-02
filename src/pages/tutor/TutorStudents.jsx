import { useState } from "react"
import Pagination from "../../components/student/MyCourses/Pagination"
import StudentDetailPanel from "../../components/tutor/StudentDetailPanel"

/* ── Stats ── */
const stats = [
  {
    iconBg: "bg-[rgba(237,64,48,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "24",
    label: "Active Students",
    badge: "+3 vs last month",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[rgba(64,155,63,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16.667 10H12.5l-2.083 5L7.5 5 5.417 10H1.333" stroke="#409b3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "89%",
    label: "Retention Rate",
    badge: "+8% vs last month",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[rgba(255,195,10,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#e4a000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "$355",
    label: "Avg Revenue/Student",
    badge: "+$43",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[rgba(0,122,255,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.5 9.583A7.5 7.5 0 1110.417 2.5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 3.333v3.334h-3.333" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "78%",
    label: "Rebooking Rate",
    badge: "Above avg",
    badgeColor: "text-[#007aff] bg-[rgba(0,122,255,0.1)]",
  },
]

/* ── Students Data ── */
const students = [
  {
    id: 1,
    name: "Aysel Mammadova",
    email: "aysel.m@email.com",
    avatarGradient: "from-[#6366f1] to-[#a78bfa]",
    subject: "UX Entrance",
    lastSession: "5 days ago",
    lastSessionDanger: false,
    progress: 72,
    progressColor: "bg-[#007aff]",
    revenue: "$360",
    status: "Active",
  },
  {
    id: 2,
    name: "Nihat Karimov",
    email: "nihat.k@email.com",
    avatarGradient: "from-[#f97316] to-[#fbbf24]",
    subject: "IB Biology SL",
    lastSession: "21 days ago",
    lastSessionDanger: true,
    progress: 45,
    progressColor: "bg-[#f59e0b]",
    revenue: "$280",
    status: "At Risk",
  },
  {
    id: 3,
    name: "Leyla Hasanova",
    email: "leyla.h@email.com",
    avatarGradient: "from-[#ec4899] to-[#f472b6]",
    subject: "UX Entrance",
    lastSession: "2 days ago",
    lastSessionDanger: false,
    progress: 88,
    progressColor: "bg-[#007aff]",
    revenue: "$420",
    status: "Active",
  },
  {
    id: 4,
    name: "Elvin Guliyev",
    email: "elvin.g@email.com",
    avatarGradient: "from-[#14b8a6] to-[#5eead4]",
    subject: "IB Biology SL",
    lastSession: "1 day ago",
    lastSessionDanger: false,
    progress: 12,
    progressColor: "bg-[#22c55e]",
    revenue: "$45",
    status: "New",
  },
  {
    id: 5,
    name: "Kamala Aliyeva",
    email: "kamala.a@email.com",
    avatarGradient: "from-[#3b82f6] to-[#93c5fd]",
    subject: "UX Entrance",
    lastSession: "3 days ago",
    lastSessionDanger: false,
    progress: 65,
    progressColor: "bg-[#007aff]",
    revenue: "$310",
    status: "Active",
  },
  {
    id: 6,
    name: "Orkhan Nabiyev",
    email: "orkhan.n@email.com",
    avatarGradient: "from-[#ef4444] to-[#f87171]",
    subject: "IB Biology SL",
    lastSession: "14 days ago",
    lastSessionDanger: true,
    progress: 38,
    progressColor: "bg-[#f59e0b]",
    revenue: "$190",
    status: "At Risk",
  },
]

const filterTabs = [
  { label: "All", count: 10 },
  { label: "Active", count: 7 },
  { label: "At Risk", count: 3 },
  { label: "New", count: 1 },
]

const statusStyles = {
  Active: "text-[#007aff] bg-[rgba(0,122,255,0.1)]",
  "At Risk": "text-[#ed4030] bg-[rgba(237,64,48,0.1)]",
  New: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
}

const TutorStudents = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [showAlert, setShowAlert] = useState(true)
  const [selectedStudent, setSelectedStudent] = useState(null)

  const filtered = students.filter((s) => {
    if (activeFilter !== "All" && s.status !== activeFilter) return false
    if (search && !s.name.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      {/* ── Stats Cards ── */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-[#f9f9fa] border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
            <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
            <div className="flex flex-col gap-1">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-[#8c929c] leading-4">{s.label}</span>
                <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full ${s.badgeColor}`}>{s.badge}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── Alert Banner ── */}
      {showAlert && (
        <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3">
          <div className="bg-white rounded-2xl p-3 relative flex flex-col gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
            {/* Close button */}
            <button onClick={() => setShowAlert(false)} className="absolute top-3 right-3 w-6 h-6 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] backdrop-blur-[12px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11 5L5 11M5 5l6 6" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </button>

            {/* Red icon */}
            <div className="w-8 h-8 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#ed4030" strokeWidth="1.5" /><path d="M10 6.667V10M10 13.333h.008" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1 pb-1">
              <p className="text-base font-medium text-[#0a0c11] leading-6">1 student haven't booked in 14+ days</p>
              <p className="text-sm text-[#8c929c] leading-5">Reach out to these students to prevent churn. Students who don't book within 21 days rarely return.</p>
            </div>

            {/* Student card */}
            <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-xl h-[52px] px-2 flex items-center gap-0">
              <div className="w-[42px] pr-[10px] shrink-0">
                <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#ed4030] to-[rgba(237,64,48,0.2)] border border-black/[0.03] flex items-center justify-center">
                  <span className="text-xs font-medium text-white leading-4">NK</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0a0c11] leading-5">Nihat Karimov</span>
                <span className="text-xs text-[#ed4030] leading-4">21 days ago</span>
              </div>
            </div>

            {/* Send nudge */}
            <button className="h-8 px-2 rounded-lg border border-black/[0.06] bg-white backdrop-blur-[12px] text-xs font-medium text-[#5b616d] self-start shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              Send nudge
            </button>
          </div>
        </div>
      )}

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Students</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Manage your student roster, progress and communication</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 11.25l3.75-3.75M9 11.25v-9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export
        </button>
      </div>

      {/* ── Filter Chips ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.label)}
              className={`h-9 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1 transition-colors ${activeFilter === tab.label
                  ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                  : "text-[#8c929c]"
                }`}
            >
              {tab.label}
              <span className="bg-[rgba(6,177,241,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#008ece] flex items-center justify-center">{tab.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button className="h-9 px-3.5 rounded-full border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5">
            All subjects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-xs text-[#8c929c] whitespace-nowrap">
            Showing <span className="font-medium text-[#5b616d]">12</span> exams
          </span>
        </div>
      </div>

      {/* ── Students Table ── */}
      <div className="bg-white border border-black/[0.03] rounded-2xl overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 gap-3">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-base font-semibold text-[#0a0c11]">Students</h3>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-9 pl-3 pr-2 flex items-center gap-1.5 flex-1 sm:w-[220px] min-w-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M14 14l-2.9-2.9m1.567-3.767A5.333 5.333 0 112 7.333a5.333 5.333 0 0110.667 0z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, subject.."
                className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] min-w-0"
              />
            </div>
            <button className="h-9 px-3 rounded-[10px] bg-[#007aff] text-sm font-medium text-white flex items-center gap-1.5 shrink-0 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 10v2.667a1.333 1.333 0 01-1.333 1.333H3.333A1.333 1.333 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Export
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-t border-black/[0.06]">
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Student</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Subject</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Last Session</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Progress</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Revenue</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Status</th>
                <th className="text-left text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((student) => (
                <tr key={student.id} className="border-t border-black/[0.04] hover:bg-[#fafafa] transition-colors">
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${student.avatarGradient} flex items-center justify-center text-xs font-bold text-white shrink-0`}>
                        {student.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-medium text-[#0a0c11]">{student.name}</span>
                        <span className="text-xs text-[#8c929c]">{student.email}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-sm text-[#5b616d]">{student.subject}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`text-sm ${student.lastSessionDanger ? "text-[#ed4030] font-medium italic" : "text-[#5b616d]"}`}>
                      {student.lastSession}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="w-24 flex flex-col gap-0.5">
                      <span className={`text-[10px] font-semibold leading-4 ${student.progressColor === "bg-[#06b1f1]" ? "text-[#06b1f1]" : "text-[#ffc30a]"}`}>{student.progress} %</span>
                      <div className="bg-[#f2f2f4] h-1.5 rounded-full w-full">
                        <div className={`h-1.5 rounded-full ${student.progressColor}`} style={{ width: `${student.progress}%` }} />
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className="text-xs font-semibold text-[#ffc30a] leading-4">{student.revenue}</span>
                  </td>
                  <td className="px-4 py-3.5">
                    <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusStyles[student.status]}`}>
                      {student.status}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <div className="flex items-center gap-2">
                      <button className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <g clip-path="url(#clip0_27957_14474)">
                            <path d="M8.00065 6.33398C7.63246 6.33398 7.33398 6.63246 7.33398 7.00065C7.33398 7.36884 7.63246 7.66732 8.00065 7.66732C8.36884 7.66732 8.66738 7.36884 8.66738 7.00065C8.66738 6.63246 8.36884 6.33398 8.00065 6.33398Z" fill="#5B616D" />
                            <path d="M4.66732 7.00065C4.66732 6.63246 4.96579 6.33398 5.33398 6.33398C5.70217 6.33398 6.00072 6.63246 6.00072 7.00065C6.00072 7.36884 5.70224 7.66732 5.33405 7.66732C4.96586 7.66732 4.66732 7.36884 4.66732 7.00065Z" fill="#5B616D" />
                            <path d="M10.6673 6.33398C10.2991 6.33398 10.0007 6.63246 10.0007 7.00065C10.0007 7.36884 10.2991 7.66732 10.6673 7.66732C11.0355 7.66732 11.3341 7.36884 11.3341 7.00065C11.3341 6.63246 11.0355 6.33398 10.6673 6.33398Z" fill="#5B616D" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.9557 0.833984H5.04558C4.41062 0.83398 3.90358 0.833977 3.49408 0.867435C3.07407 0.901751 2.71281 0.97374 2.38101 1.1428C1.84789 1.41444 1.41444 1.84789 1.1428 2.38101C0.973743 2.71281 0.901754 3.07406 0.867438 3.49407C0.83398 3.90358 0.833983 4.41061 0.833987 5.04557L0.833986 13.9441C0.833967 14.1028 0.833949 14.2543 0.845071 14.3766C0.855861 14.4952 0.882974 14.6877 1.01455 14.8535C1.17161 15.0514 1.40998 15.1674 1.66265 15.1688C1.87431 15.17 2.04253 15.0725 2.14253 15.0078C2.2456 14.9411 2.36479 14.8476 2.48962 14.7496L4.20774 13.4018C4.38447 13.2632 4.42052 13.2378 4.45492 13.2205C4.4946 13.2006 4.53676 13.186 4.58029 13.1772C4.61803 13.1696 4.66204 13.1673 4.88666 13.1673H10.9557C11.5907 13.1673 12.0977 13.1673 12.5072 13.1339C12.9272 13.0996 13.2885 13.0276 13.6203 12.8585C14.1534 12.5869 14.5869 12.1534 14.8585 11.6203C15.0276 11.2885 15.0996 10.9272 15.1339 10.5072C15.1673 10.0977 15.1673 9.59072 15.1673 8.95578V5.04556C15.1673 4.41063 15.1673 3.90357 15.1339 3.49407C15.0996 3.07406 15.0276 2.71281 14.8585 2.38101C14.5869 1.84789 14.1534 1.41444 13.6203 1.1428C13.2885 0.97374 12.9272 0.901751 12.5072 0.867435C12.0977 0.833977 11.5907 0.83398 10.9557 0.833984ZM2.83501 2.03381C3.00233 1.94855 3.21734 1.89338 3.57551 1.86411C3.93951 1.83437 4.40568 1.83398 5.06732 1.83398H10.934C11.5956 1.83398 12.0618 1.83437 12.4258 1.86411C12.784 1.89338 12.999 1.94855 13.1663 2.03381C13.5113 2.20957 13.7917 2.49004 13.9675 2.835C14.0528 3.00233 14.1079 3.21734 14.1372 3.57551C14.1669 3.93951 14.1673 4.40567 14.1673 5.06732V8.93398C14.1673 9.59563 14.1669 10.0618 14.1372 10.4258C14.1079 10.784 14.0528 10.999 13.9675 11.1663C13.7917 11.5113 13.5113 11.7917 13.1663 11.9675C12.999 12.0528 12.784 12.1079 12.4258 12.1372C12.0618 12.1669 11.5956 12.1673 10.934 12.1673L4.85193 12.1673C4.6812 12.1672 4.53058 12.167 4.38206 12.1971C4.25147 12.2235 4.12498 12.2672 4.00593 12.327C3.87053 12.395 3.7521 12.4881 3.61784 12.5936L1.83402 13.9929L1.83399 5.06731C1.83399 4.40567 1.83438 3.93951 1.86412 3.5755C1.89338 3.21734 1.94855 3.00233 2.03381 2.835C2.20958 2.49004 2.49004 2.20957 2.83501 2.03381Z" fill="#5B616D" />
                          </g>
                          <defs>
                            <clipPath id="clip0_27957_14474">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                      <button onClick={() => setSelectedStudent(student)} className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00065 5.16602C6.43401 5.16602 5.16732 6.4327 5.16732 7.99935C5.16732 9.56599 6.43401 10.8327 8.00065 10.8327C9.5673 10.8327 10.834 9.56599 10.834 7.99935C10.834 6.4327 9.5673 5.16602 8.00065 5.16602ZM6.16732 7.99935C6.16732 6.98499 6.98629 6.16602 8.00065 6.16602C9.01501 6.16602 9.83398 6.98499 9.83398 7.99935C9.83398 9.01371 9.01501 9.83268 8.00065 9.83268C6.98629 9.83268 6.16732 9.01371 6.16732 7.99935Z" fill="#5B616D" />
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0291 7.20415C12.6166 0.486638 3.38474 0.486639 0.972244 7.20415C0.787898 7.71745 0.787898 8.28124 0.972244 8.79455C3.38474 15.5121 12.6166 15.5121 15.0291 8.79455C15.2134 8.28124 15.2134 7.71745 15.0291 7.20415ZM1.91339 7.54215C4.00889 1.70731 11.9924 1.70731 14.0879 7.54215C14.1938 7.83695 14.1938 8.16174 14.0879 8.45655C11.9924 14.2914 4.00889 14.2914 1.91339 8.45655C1.80752 8.16174 1.80752 7.83695 1.91339 7.54215Z" fill="#5B616D" />
                        </svg>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="px-4 pb-4">
          <Pagination currentPage={1} totalPages={3} />
        </div>
      </div>
      <StudentDetailPanel isOpen={!!selectedStudent} onClose={() => setSelectedStudent(null)} student={selectedStudent} />
    </div>
  )
}

export default TutorStudents
