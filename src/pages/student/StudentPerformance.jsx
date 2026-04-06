const gradeMetrics = [
  { label: "Avg exam score", value: 74, color: "bg-[#007aff]" },
  { label: "Session attendance", value: 86, color: "bg-[#06b1f1]" },
  { label: "Course completion", value: 58, color: "bg-[#78daff]" },
  { label: "Practice exercises", value: 70, color: "bg-[#5caaff]" },
]

const sideStats = [
  { value: "14", label: "Day Streak", color: "text-[#ffc30a]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11 1L5 12h5l-1 7 6-11h-5l1-7z" stroke="#ffc30a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { value: "82", label: "Study Hours", color: "text-[#2563eb]", icon: null },
  { value: "#3", label: "Class Rank", color: "text-[#d97706]", icon: null },
]

const kpis = [
  { value: "75%", label: "Avg Exam Score", badge: "+5%", iconBg: "bg-[#e8efff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2 13V5a1.5 1.5 0 011.5-1.5h3.25a3 3 0 013 3v8.5M18 13V5a1.5 1.5 0 00-1.5-1.5h-3.25a3 3 0 00-3 3v8.5" stroke="#2563eb" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { value: "48", label: "Sessions Attended", badge: "+2%", iconBg: "bg-[#e3f6e2]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#338732" strokeWidth="1.2" /><path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" /></svg> },
  { value: "82", label: "Study Hours", badge: "+8 hrs", iconBg: "bg-[#dff3ff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#06b1f1" strokeWidth="1.2" /><path d="M10 5v5l3.333 1.667" stroke="#06b1f1" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
  { value: "21", label: "Best Streak (days)", badge: null, iconBg: "bg-[#fffbc4]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" /></svg> },
]

const courseProgress = [
  { title: "IB Biology HL — Complete Exam Prep", percent: 68, done: "16/24", color: "bg-[#2563eb]" },
  { title: "GCSE Biology Foundation to A*", percent: 40, done: "7/18", color: "bg-[#059669]" },
  { title: "AP Biology Weekly Group (Live)", percent: 58, done: "7/12", color: "bg-[#7c3aed]" },
  { title: "IB Biology SL — Weekly Foundations", percent: 25, done: "2/8", color: "bg-[#d97706]" },
]

const examResults = [
  { title: "IB Biology HL Course", date: "Mar 5, 2026", score: 78, grade: "B", scoreColor: "text-[#2563eb]", barColor: "bg-[#2563eb]", badgeBg: "bg-[#eff6ff]", badgeColor: "text-[#2563eb]", iconBg: "bg-[rgba(64,155,63,0.12)]", iconStroke: "#338732" },
  { title: "AP Biology Unit 3 Quiz", date: "Mar 5, 2026", score: 82, grade: "B+", scoreColor: "text-[#059669]", barColor: "bg-[#059669]", badgeBg: "bg-[#eff6ff]", badgeColor: "text-[#2563eb]", iconBg: "bg-[rgba(255,195,10,0.12)]", iconStroke: "#e4a000", isTrophy: true },
  { title: "GCSE Biology Cell Division", date: "Mar 12, 2026", score: 70, grade: "B-", scoreColor: "text-[#2563eb]", barColor: "bg-[#2563eb]", badgeBg: "bg-[#eff6ff]", badgeColor: "text-[#2563eb]", iconBg: "bg-[rgba(64,155,63,0.12)]", iconStroke: "#338732" },
  { title: "IB Biology HL Practice 1", date: "Mar 19, 2026", score: 64, grade: "C+", scoreColor: "text-[#d97706]", barColor: "bg-[#d97706]", badgeBg: "bg-[#fffbeb]", badgeColor: "text-[#d97706]", iconBg: "bg-[rgba(64,155,63,0.12)]", iconStroke: "#338732" },
]

const StudentPerformance = () => {
  return (
    <div className="px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Performance</h1>
          <p className="text-sm text-[#5b616d] leading-5">Track your learning progress, exam scores and study habits</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] shrink-0 self-start">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Export Report
        </button>
      </div>

      <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden p-5 sm:p-7 flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8 relative">
        <div className="absolute -top-[60px] -right-[60px] w-[240px] h-[240px] bg-[radial-gradient(circle,rgba(37,99,235,0.07)_0%,rgba(37,99,235,0)_70%)] hidden sm:block" />
        <div className="flex-1 min-w-0 flex flex-col sm:flex-row items-center gap-5 sm:gap-6">
          <div className="w-[90px] h-[90px] sm:w-[110px] sm:h-[110px] shrink-0 relative">
            <svg viewBox="0 0 110 110" className="rotate-[-90deg] w-full h-full">
              <circle cx="55" cy="55" r="46" fill="none" stroke="#f2f2f4" strokeWidth="8" />
              <circle cx="55" cy="55" r="46" fill="none" stroke="#2563eb" strokeWidth="8" strokeDasharray={`${2 * Math.PI * 46 * 0.74} ${2 * Math.PI * 46 * 0.26}`} strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[28px] font-extrabold text-[#2563eb] tracking-[-0.84px]">B+</span>
              <span className="text-[13px] font-semibold text-[#9ca3af]">74%</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-lg font-extrabold text-[#0a0c11] leading-6">Overall Performance Grade</span>
            <p className="text-sm text-[#5b616d] leading-5">Based on exam scores, attendance rate, and course completion across all your enrolled courses.</p>
            <div className="flex flex-col gap-[9px] pt-[10px]">
              {gradeMetrics.map((m, i) => (
                <div key={i} className="flex items-center gap-[10px]">
                  <span className="min-w-[130px] text-xs text-[#5b616d] leading-4">{m.label}</span>
                  <div className="flex-1 h-1.5 bg-[#f2f2f4] rounded-[3px] overflow-hidden">
                    <div className={`h-full rounded-[3px] ${m.color}`} style={{ width: `${m.value}%` }} />
                  </div>
                  <span className="min-w-[36px] text-xs font-extrabold text-[#0a0c11] text-right leading-4">{m.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-row lg:flex-col gap-[10px] shrink-0 w-full lg:w-auto">
          {sideStats.map((s, i) => (
            <div key={i} className="bg-[#f9f9fa] border border-black/[0.03] rounded-[10px] flex-1 lg:flex-none min-w-0 lg:min-w-[100px] px-[19px] py-[15px] flex flex-col gap-[3px] items-center">
              <div className="flex items-center gap-1 justify-center">
                {s.icon}
                <span className={`text-[22px] font-extrabold ${s.color} tracking-[-0.66px]`}>{s.value}</span>
              </div>
              <span className="text-[11px] text-[#6b7280] text-center">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpis.map((k, i) => (
          <div key={i} className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-full ${k.iconBg} flex items-center justify-center`}>{k.icon}</div>
              {k.badge && (
                <div className="bg-[rgba(64,155,63,0.12)] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#409b3f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[11px] font-semibold text-[#409b3f] leading-none">{k.badge}</span>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{k.value}</span>
              <span className="text-xs text-[#8c929c] leading-4">{k.label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white border border-black/[0.03] rounded-xl overflow-hidden pb-9">
          <div className="flex items-center gap-2 px-[18px] py-[14px] border-b border-black/[0.03]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Course Progress</span>
          </div>
          <div className="px-[18px] py-[18px] flex flex-col gap-3">
            {courseProgress.map((c, i) => (
              <div key={i} className="flex flex-col gap-[5px]">
                <div className="flex items-center justify-between">
                  <span className="text-[12.5px] text-[#6b7280]">{c.title}</span>
                  <span className="text-[12.5px] font-semibold text-[#1a1d23]">{c.percent}%</span>
                </div>
                <div className="h-1.5 bg-[#eef0f6] rounded-[3px] overflow-hidden">
                  <div className={`h-full rounded-[3px] ${c.color}`} style={{ width: `${c.percent}%` }} />
                </div>
                <span className="text-[11.5px] text-[#9ca3af]">{c.done}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-black/[0.03] rounded-xl overflow-hidden">
          <div className="flex items-center justify-between px-[18px] py-[14px] border-b border-black/[0.03]">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">Recent Exam Results</span>
            </div>
            <button className="text-xs text-[#2563eb]">View all</button>
          </div>
          <div className="px-[18px] py-[18px] flex flex-col">
            {examResults.map((e, i) => (
              <div key={i} className={`flex items-center gap-3 py-3 ${i < examResults.length - 1 ? "border-b border-[#e5e7eb]" : ""}`}>
                <div className={`w-8 h-8 rounded-full ${e.iconBg} flex items-center justify-center shrink-0`}>
                  {e.isTrophy ? (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 2h8v4a4 4 0 01-8 0V2zM3 2H2a1 1 0 00-1 1v1a2 2 0 002 2h.5M13 2h1a1 1 0 011 1v1a2 2 0 01-2 2h-.5M6 10v2M10 10v2M4 14h8" stroke={e.iconStroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  ) : (
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M1.5 11V4a1 1 0 011-1h3a2.5 2.5 0 012.5 2.5V14M14.5 11V4a1 1 0 00-1-1h-3A2.5 2.5 0 008 5.5V14" stroke={e.iconStroke} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  )}
                </div>
                <div className="flex-1 min-w-0 flex flex-col gap-px">
                  <span className="text-sm font-semibold text-[#0a0c11] leading-5">{e.title}</span>
                  <span className="text-xs text-[#5b616d] leading-4">{e.date}</span>
                </div>
                <div className="w-[120px] shrink-0 flex flex-col gap-[3px]">
                  <div className="h-[5px] bg-[#eef0f6] rounded-[3px] overflow-hidden">
                    <div className={`h-full rounded-[3px] ${e.barColor}`} style={{ width: `${e.score}%` }} />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className={`text-[13px] font-extrabold ${e.scoreColor} tracking-[-0.26px]`}>{e.score}%</span>
                    <span className={`${e.badgeBg} ${e.badgeColor} text-[11px] font-bold px-2 py-0.5 rounded-[6px]`}>{e.grade}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentPerformance
