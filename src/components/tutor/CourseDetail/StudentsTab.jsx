import { useState } from "react"

const students = [
  { name: "Leyla Mammadova", email: "leyla@email.com", initials: "LM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", enrolled: "Mar 18", progress: 75, progressColor: "text-[#06b1f1]", barColor: "bg-[#06b1f1]", status: "Active", statusBg: "bg-[rgba(6,177,241,0.12)]", statusText: "text-[#008ece]" },
  { name: "Sara Rzayeva", email: "sara@email.com", initials: "SR", gradient: "from-[#409b3f] to-[rgba(64,155,63,0.2)]", enrolled: "Mar 15", progress: 50, progressColor: "text-[#06b1f1]", barColor: "bg-[#06b1f1]", status: "Active", statusBg: "bg-[rgba(6,177,241,0.12)]", statusText: "text-[#008ece]" },
  { name: "Anar Hasanov", email: "anar@email.com", initials: "AH", gradient: "from-[#e4a000] to-[rgba(255,195,10,0.2)]", enrolled: "Mar 10", progress: 68, progressColor: "text-[#06b1f1]", barColor: "bg-[#06b1f1]", status: "Active", statusBg: "bg-[rgba(6,177,241,0.12)]", statusText: "text-[#008ece]" },
  { name: "Fidan Isayeva", email: "fidan@email.com", initials: "FI", gradient: "from-[#06b1f1] to-[rgba(6,177,241,0.12)]", enrolled: "Mar 7", progress: 15, progressColor: "text-[#ffc30a]", barColor: "bg-[#ffc30a]", status: "Started", statusBg: "bg-[rgba(255,195,10,0.12)]", statusText: "text-[#e4a000]" },
  { name: "Nihat Karimov", email: "nihat@email.com", initials: "NK", gradient: "from-[#ed4030] to-[rgba(237,64,48,0.2)]", enrolled: "Mar 4", progress: 38, progressColor: "text-[#ffc30a]", barColor: "bg-[#ffc30a]", status: "Active", statusBg: "bg-[rgba(6,177,241,0.12)]", statusText: "text-[#008ece]" },
  { name: "Ali Mammadov", email: "ali@email.com", initials: "AM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", enrolled: "Feb 28", progress: 100, progressColor: "text-[#409b3f]", barColor: "bg-[#409b3f]", status: "Completing", statusBg: "bg-[rgba(64,155,63,0.12)]", statusText: "text-[#338732]" },
]

const StudentsTab = () => {
  const [search, setSearch] = useState("")

  return (
    <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-5 py-4 border-b border-white/[0.07]">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="text-lg font-semibold text-[#0a0c11] leading-6">Students</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-10 pl-4 pr-2 flex items-center gap-1.5 w-full sm:w-[287px] min-w-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search students"
              className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0"
            />
          </div>
          <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" /><path d="M5.25 6.75L9 3l3.75 3.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Export
          </button>
        </div>
      </div>

      {/* Table Header - hidden on mobile */}
      <div className="hidden sm:grid bg-[#f9f9fa] border-b border-white/[0.07] h-[34px] grid-cols-[1fr_100px_120px_80px] items-center px-4">
        <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Description</span>
        <span className="px-1 text-xs font-semibold text-[#8c929c] uppercase leading-4">Enrolled</span>
        <span className="px-1 text-xs font-semibold text-[#8c929c] uppercase leading-4">Progress</span>
        <span className="px-1 text-[10.5px] font-bold text-[#8c929c] uppercase tracking-[0.735px]">Status</span>
      </div>

      {/* Rows - card layout on mobile, grid on desktop */}
      <div>
        {students.map((s, i) => (
          <div key={i} className="flex flex-col gap-3 p-4 border-b border-black/[0.03] sm:grid sm:grid-cols-[1fr_100px_120px_80px] sm:items-center sm:h-[57px] sm:gap-0 sm:p-0 sm:px-4">
            <div className="flex items-center gap-0 sm:px-1">
              <div className="w-[42px] pr-[10px] shrink-0">
                <div className={`w-8 h-8 rounded-full bg-gradient-to-b ${s.gradient} border border-black/[0.03] flex items-center justify-center`}>
                  <span className="text-xs font-medium text-white leading-4">{s.initials}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0a0c11] leading-5">{s.name}</span>
                <span className="text-xs text-[#5b616d] leading-4">{s.email}</span>
              </div>
            </div>
            <div className="flex items-center justify-between sm:block sm:px-1">
              <span className="text-xs text-[#8c929c] sm:hidden">Enrolled:</span>
              <span className="text-xs text-[#8c929c] leading-4">{s.enrolled}</span>
            </div>
            <div className="flex items-center justify-between sm:block sm:px-1">
              <span className="text-xs text-[#8c929c] sm:hidden">Progress:</span>
              <div className="w-24 flex flex-col gap-0.5">
                <span className={`text-[10px] font-semibold leading-4 ${s.progressColor}`}>{s.progress} %</span>
                <div className="bg-[#f2f2f4] h-1.5 rounded-full w-full">
                  <div className={`h-1.5 rounded-full ${s.barColor}`} style={{ width: `${s.progress}%` }} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between sm:block sm:px-1">
              <span className="text-xs text-[#8c929c] sm:hidden">Status:</span>
              <span className={`${s.statusBg} ${s.statusText} h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center`}>{s.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-lg bg-[#f2f2f4] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.25 4.5L6.75 9l4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="w-8 h-8 rounded-lg border border-black/[0.05] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] flex items-center justify-center text-[13px] font-semibold text-[#0a0c11]">1</button>
          <button className="w-8 h-8 rounded-lg bg-[#f2f2f4] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-end gap-2">
          <span className="hidden sm:inline text-[13px] font-medium text-[#8c929c] leading-5">Results per page:</span>
          <button className="h-8 px-2 rounded-lg border border-black/[0.05] bg-white backdrop-blur-[12px] flex items-center gap-1 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
            <span className="text-xs font-semibold text-[#5b616d] leading-4">5</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentsTab
