import { useState } from "react"
import { Link } from "react-router"
import ExamDetailPanel from "../../components/tutor/ExamDetailPanel"

const stats = [
  {
    iconBg: "bg-[#e8efff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "10",
    label: "Total Exams Created",
    badge: "+3 vs last month",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "86",
    label: "Total Submissions",
    badge: "+24 vs last month",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[rgba(6,177,241,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16.667 10H12.5l-2.083 5L7.5 5 5.417 10H1.333" stroke="#06b1f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "74%",
    label: "Avg Score",
    badge: "+6% vs last month",
    badgeColor: "text-[#22c55e] bg-[rgba(34,197,94,0.1)]",
  },
  {
    iconBg: "bg-[#e8efff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M17.5 9.583A7.5 7.5 0 1110.417 2.5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M17.5 3.333v3.334h-3.333" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "2",
    label: "Published now",
    badge: "Active Exams",
    badgeColor: "text-[#007aff] bg-[rgba(0,122,255,0.1)]",
  },
  {
    iconBg: "bg-[rgba(255,195,10,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="#e4a000" strokeWidth="1.5" />
        <path d="M10 6.667V10M10 13.333h.008" stroke="#e4a000" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "8",
    label: "Awaiting Grading",
    badge: "Need attention",
    badgeColor: "text-[#e4a000] bg-[rgba(255,195,10,0.12)]",
  },
]

const filterTabs = [
  { label: "All", count: 16 },
  { label: "Published", count: 2 },
  { label: "Scheduled", count: 2 },
  { label: "Ended", count: 2 },
]

const exams = [
  {
    id: 1,
    title: "IB Biology HL — Midterm Exam",
    subtitle: "IB Biology HL • 40 questions • 90 min",
    status: "Ended",
    type: "Midterm",
    iconColor: "bg-[#e8efff] text-[#3b82f6]",
    assigned: 14,
    submitted: 12,
    avgScore: "78%",
    scoreColor: "text-[#338732]",
    date: "Mar 10, 2026",
  },
  {
    id: 2,
    title: "AP Biology — Unit 3 Quiz",
    subtitle: "AP Biology • 20 questions • 45 min",
    status: "Ended",
    type: "Quiz",
    iconColor: "bg-[#e3f6e2] text-[#338732]",
    assigned: 8,
    submitted: 8,
    avgScore: "88%",
    scoreColor: "text-[#338732]",
    date: "Mar 5, 2026",
  },
  {
    id: 3,
    title: "AP Biology — Genetics Quiz",
    subtitle: "AP Biology • 15 questions • 30 min",
    status: "Active",
    type: "Quiz",
    iconColor: "bg-[#e3f6e2] text-[#338732]",
    assigned: 8,
    submitted: 0,
    avgScore: null,
    scoreColor: "text-[#8c929c]",
    date: "Today, 4:00 PM",
  },
  {
    id: 4,
    title: "IB Biology HL — Final Exam 2026",
    subtitle: "IB Biology HL • 60 questions • 120 min",
    status: "Scheduled",
    type: "Final",
    iconColor: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
    assigned: 8,
    submitted: 0,
    avgScore: null,
    scoreColor: "text-[#8c929c]",
    date: "Apr 15, 2026",
  },
  {
    id: 5,
    title: "Uni Entrance — Biology Diagnostic",
    subtitle: "Biology • 25 questions • 60 min",
    status: "Scheduled",
    type: "Quiz",
    iconColor: "bg-[#e3f6e2] text-[#338732]",
    assigned: 8,
    submitted: 0,
    avgScore: null,
    scoreColor: "text-[#8c929c]",
    date: "Apr 15, 2026",
  },
  {
    id: 6,
    title: "GCSE Biology — Human Physiology",
    subtitle: "GCSE Biology • 30 questions • 60 min",
    status: "Active",
    type: "Midterm",
    iconColor: "bg-[#e8efff] text-[#3b82f6]",
    assigned: 8,
    submitted: 0,
    avgScore: null,
    scoreColor: "text-[#8c929c]",
    date: "Today, 4:00 PM",
  },
  {
    id: 7,
    title: "IB Biology HL — Evolution & Genetics",
    subtitle: "IB Biology HL • 50 questions • 100 min",
    status: "Ended",
    type: "Final",
    iconColor: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
    assigned: 8,
    submitted: 8,
    avgScore: "67%",
    scoreColor: "text-[#e4a000]",
    date: "Mar 5, 2026",
  },
  {
    id: 8,
    title: "IB Biology SL — Midterm Exam",
    subtitle: "IB Biology SL • 35 questions • 75 min",
    status: "Ended",
    type: "Midterm",
    iconColor: "bg-[#e8efff] text-[#3b82f6]",
    assigned: 8,
    submitted: 8,
    avgScore: "67%",
    scoreColor: "text-[#e4a000]",
    date: "Mar 5, 2026",
  },
]

const statusStyles = {
  Ended: "bg-[rgba(237,64,48,0.12)] text-[#df2917]",
  Scheduled: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
  Active: "bg-[rgba(64,155,63,0.12)] text-[#338732]",
}

const typeStyles = {
  Midterm: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
  Quiz: "bg-[rgba(64,155,63,0.12)] text-[#338732]",
  Final: "bg-[rgba(237,64,48,0.12)] text-[#df2917]",
}

const TutorExams = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedExam, setSelectedExam] = useState(null)
  const [search, setSearch] = useState("")

  const filtered = exams.filter((e) => {
    if (activeFilter !== "All" && e.status !== activeFilter) return false
    if (search && !e.title.toLowerCase().includes(search.toLowerCase())) return false
    return true
  })

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
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

      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Exams</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Create, manage and grade your students' assessment</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 11.25l3.75-3.75M9 11.25v-9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Export results
          </button>
          <Link to="/tutor/exams/create" className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors no-underline">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 3v12M3 9h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Create new exam
          </Link>
        </div>
      </div>

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
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-9 pl-3 pr-2 flex items-center gap-1.5 w-full sm:w-[220px] min-w-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
              <path d="M14 14l-2.9-2.9m1.567-3.767A5.333 5.333 0 112 7.333a5.333 5.333 0 0110.667 0z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exams"
              className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] min-w-0"
            />
          </div>
          <button className="h-9 px-3.5 rounded-full border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shrink-0">
            Type of exam
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <span className="text-xs text-[#8c929c] whitespace-nowrap">
            Showing <span className="font-medium text-[#5b616d]">{filtered.length}</span> exams
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((exam) => (
          <div key={exam.id} className="bg-white border border-black/[0.03] rounded-2xl p-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className={`text-[11px] font-medium px-2 py-1 rounded-lg ${statusStyles[exam.status]}`}>{exam.status}</span>
              <span className={`text-[11px] font-medium px-2 py-1 rounded-lg ${typeStyles[exam.type]}`}>{exam.type}</span>
            </div>

            <div className="flex items-start gap-3">
              <div className={`w-9 h-9 rounded-full ${exam.iconColor.split(" ")[0]} flex items-center justify-center shrink-0`}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                  <path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M11.667 1.667v5h5M13.333 10.833H6.667M13.333 14.167H6.667M8.333 7.5H6.667" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-base font-semibold text-[#0a0c11] leading-6 truncate">{exam.title}</h3>
                <p className="text-xs text-[#8c929c] leading-4">{exam.subtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider">{exam.assigned} Assigned</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold text-[#8c929c] uppercase tracking-wider">{exam.submitted} Submitted</span>
              </div>
              <div className="flex flex-col">
                <span className={`text-[11px] font-semibold uppercase tracking-wider ${exam.scoreColor}`}>
                  {exam.avgScore ? exam.avgScore : "-"} Avg Score
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1 border-t border-black/[0.04]">
              <span className="text-xs text-[#8c929c]">{exam.date}</span>
              <div className="flex items-center gap-2">
                <button className="w-7 h-7 rounded-full border border-black/[0.06] bg-white flex items-center justify-center hover:bg-[#f9f9fa] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M6.417 2.333h-3.5a1.167 1.167 0 00-1.167 1.167v7a1.167 1.167 0 001.167 1.167h7A1.167 1.167 0 0011.083 10.5V7" stroke="#5b616d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10.208 1.458a1.238 1.238 0 011.75 1.75L7 8.167l-2.333.583L5.25 6.417l4.958-4.959z" stroke="#5b616d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button onClick={() => setSelectedExam(exam)} className="w-7 h-7 rounded-full border border-black/[0.06] bg-white flex items-center justify-center hover:bg-[#f9f9fa] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M5.833 6.417a1.167 1.167 0 100 2.333 1.167 1.167 0 000-2.333z" fill="#5b616d" />
                    <path fillRule="evenodd" clipRule="evenodd" d="M1.167 7.583a7.59 7.59 0 014.666-4.083 7.59 7.59 0 014.667 4.083 7.59 7.59 0 01-4.667 4.084A7.59 7.59 0 011.167 7.583z" stroke="#5b616d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button className="w-7 h-7 rounded-full border border-black/[0.06] bg-white flex items-center justify-center hover:bg-[#f9f9fa] transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.75 3.5h10.5M4.667 3.5V2.333a1.167 1.167 0 011.166-1.166h2.334a1.167 1.167 0 011.166 1.166V3.5m1.75 0v8.167a1.167 1.167 0 01-1.166 1.166H4.083a1.167 1.167 0 01-1.166-1.166V3.5h8.166z" stroke="#5b616d" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <ExamDetailPanel isOpen={!!selectedExam} onClose={() => setSelectedExam(null)} exam={selectedExam} />
    </div>
  )
}

export default TutorExams
