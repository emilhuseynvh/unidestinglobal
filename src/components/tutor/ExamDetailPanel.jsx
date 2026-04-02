import { useState, useEffect } from "react"

const scoreDistribution = [
  { label: "A(90-100)", count: 2, color: "bg-[rgba(64,155,63,0.12)]", barColor: "bg-[rgba(64,155,63,0.2)]", height: "h-[30px]" },
  { label: "B(80-89)", count: 4, color: "bg-[rgba(0,122,255,0.12)]", barColor: "bg-[rgba(0,122,255,0.2)]", height: "h-[55px]" },
  { label: "C(70-79)", count: 6, color: "bg-[rgba(0,122,255,0.12)]", barColor: "bg-[rgba(6,177,241,0.2)]", height: "h-[92px]" },
  { label: "D(60-69)", count: 3, color: "bg-[rgba(255,195,10,0.12)]", barColor: "bg-[rgba(255,195,10,0.2)]", height: "h-[45px]" },
  { label: "E(50-59)", count: 1, color: "bg-[rgba(255,195,10,0.12)]", barColor: "bg-[rgba(255,195,10,0.12)]", height: "h-[13px]" },
  { label: "F(0-49)", count: 0, color: "bg-[#f9f9fa]", barColor: "", height: "" },
]

const studentResults = [
  { name: "Leyla Mammadova", email: "leyla@email.com", initials: "LM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", score: 82, grade: "A", gradeBg: "bg-[rgba(64,155,63,0.12)] text-[#338732]", time: "90 min", barWidth: "73%" },
  { name: "Harun Zeynalov", email: "harun.z@example.com", initials: "HZ", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", score: 75, grade: "B+", gradeBg: "bg-[rgba(0,122,255,0.12)] text-[#5caaff]", time: "85 min", barWidth: "59%" },
  { name: "Nigar Jafarli", email: "nigar.j@email.com", initials: "NJ", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", score: 68, grade: "C", gradeBg: "bg-[rgba(6,177,241,0.12)] text-[#06b1f1]", time: "95 min", barWidth: "48%" },
  { name: "Tural Mehdiyev", email: "tural.m@example.com", initials: "TM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", score: 91, grade: "A+", gradeBg: "bg-[rgba(64,155,63,0.12)] text-[#338732]", time: "80 min", barWidth: "100%" },
]

const ExamDetailPanel = ({ isOpen, onClose, exam }) => {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setAnimating(true)
      requestAnimationFrame(() => { requestAnimationFrame(() => setVisible(true)) })
    } else {
      document.body.style.overflow = ""
      setVisible(false)
      const timer = setTimeout(() => setAnimating(false), 300)
      return () => clearTimeout(timer)
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen && !animating) return null
  if (!exam) return null

  const handleClose = () => { setVisible(false); setTimeout(onClose, 300) }

  const hasData = exam.submitted > 0

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} onClick={handleClose} />
      <div className={`relative w-full max-w-[672px] my-4 mr-4 bg-white rounded-[18px] shadow-[0px_20px_60px_-12px_rgba(0,0,0,0.15)] overflow-y-auto transition-transform duration-300 ease-out ${visible ? "translate-x-0" : "translate-x-[calc(100%+16px)]"}`}>
        <div className="p-5 flex flex-col gap-6">
          {/* Header */}
          <div className="flex flex-col gap-6 border-b border-black/[0.06] pb-4">
            <div className="flex items-start justify-between">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold text-[#8c929c] uppercase tracking-[2px] leading-3">Quiz · AP Biology</span>
                <h2 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">{exam.title || "AP Biology — Unit 3 Quiz"}</h2>
              </div>
              <button onClick={handleClose} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>
            <div className="h-px bg-black/[0.06]" />
            <div className="flex items-center justify-between flex-wrap gap-2">
              <div className="flex items-center gap-1.5">
                {hasData ? (
                  <span className="h-6 px-1.5 rounded-lg border border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-xs font-medium text-[#0a0c11]">Ended</span>
                ) : (
                  <span className="bg-[rgba(0,122,255,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#0267d0] flex items-center">Scheduled</span>
                )}
                <span className="text-sm text-[#5b616d] leading-5">{exam.date || "Mar 5, 2026"}</span>
                <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                <span className="text-sm text-[#5b616d] leading-5">40 questions</span>
                <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                <span className="text-sm text-[#5b616d] leading-5">90 min</span>
              </div>
              {hasData && <span className="bg-[rgba(64,155,63,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#338732] flex items-center">Class Grade B+</span>}
            </div>
          </div>

          {/* KPI Strip */}
          <div className="flex border-t border-b border-black/[0.03] py-px">
            {(hasData ? [
              { value: "14", label: "ASSIGNED", color: "text-[#0a0c11]" },
              { value: "12", label: "SUBMITTED", color: "text-[#0a0c11]" },
              { value: "82%", label: "AVG SCORE", color: "text-[#06b1f1]" },
              { value: "100%", label: "PASS RATE", color: "text-[#409b3f]" },
            ] : [
              { value: "14", label: "ASSIGNED", color: "text-[#0a0c11]" },
              { value: "0", label: "SUBMITTED", color: "text-[#8c929c]" },
              { value: "-", label: "AVG SCORE", color: "text-[#8c929c]" },
              { value: "-", label: "PASS RATE", color: "text-[#8c929c]" },
            ]).map((kpi, i) => (
              <div key={i} className={`flex-1 py-3 flex flex-col gap-0.5 ${i > 0 ? "border-l border-black/[0.03] pl-3.5" : ""}`}>
                <span className={`text-[25px] font-semibold leading-9 tracking-[-0.2px] ${kpi.color}`}>{kpi.value}</span>
                <span className="text-[10px] font-medium text-[#5b616d] leading-4">{kpi.label}</span>
              </div>
            ))}
          </div>

          {hasData ? (
          <>
          {/* Score Distribution */}
          <div className="flex flex-col gap-3">
            <span className="text-base font-medium text-[#0a0c11] leading-6">Score distribution</span>
            <div className="flex gap-3 h-[132px]">
              {scoreDistribution.map((bar, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end">
                  <div className={`w-full ${bar.color} rounded-t-xl relative`} style={{ height: bar.count > 0 ? `${Math.max(13, bar.count * 15)}px` : "96px" }}>
                    {bar.barColor && <div className={`absolute top-0 left-0 w-full ${bar.barColor} rounded-t-xl ${bar.height}`} />}
                  </div>
                  <div className="flex flex-col items-center mt-1">
                    <span className="text-[10px] text-[#8c929c] leading-4 text-center">{bar.label}</span>
                    <span className="text-sm font-semibold text-[#0a0c11] leading-5">{bar.count}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Students Results */}
          <div className="flex flex-col gap-4">
            <span className="text-base font-medium text-[#0a0c11] leading-6">Students Results</span>
            <div className="flex flex-col">
              {studentResults.map((s, i) => (
                <div key={i} className={`flex items-center py-3 px-4 ${i < studentResults.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
                  <div className="flex items-center gap-2 w-[180px] shrink-0">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-b ${s.gradient} border border-black/[0.03] flex items-center justify-center`}>
                      <span className="text-xs font-medium text-white leading-4">{s.initials}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-[#0a0c11] leading-5">{s.name}</span>
                      <span className="text-xs text-[#5b616d] leading-4">{s.email}</span>
                    </div>
                  </div>
                  <div className="flex-1 flex items-center gap-3 min-w-0">
                    <div className="flex-1 flex items-center gap-0.5">
                      <div className="flex-1 bg-[#f2f2f4] h-1.5 rounded-full">
                        <div className="bg-[#06b1f1] h-1.5 rounded-full" style={{ width: s.barWidth }} />
                      </div>
                      <span className="text-sm font-semibold text-[#06b1f1] leading-6 w-12 text-right">{s.score} %</span>
                    </div>
                    <span className={`${s.gradeBg} h-7 px-2 rounded-lg text-xs font-medium flex items-center`}>{s.grade}</span>
                    <span className="text-sm text-[#5b616d] leading-5 w-14 text-right">{s.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          </>
          ) : (
            <div className="flex flex-col gap-4">
              <span className="text-base font-medium text-[#0a0c11] leading-6">Students Results</span>
              <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl px-4 py-10 flex flex-col items-center gap-4">
                <div className="w-[88px] h-[88px] rounded-full bg-[#f2f2f4] flex items-center justify-center relative">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M26.667 35v-2.667a5.333 5.333 0 00-5.334-5.333H10a5.333 5.333 0 00-5.333 5.333V35M15.667 21.667a5.333 5.333 0 100-10.667 5.333 5.333 0 000 10.667zM35 35v-2.667a5.333 5.333 0 00-4-5.16M25 11.173a5.333 5.333 0 010 10.32" stroke="#8c929c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-black/[0.09]" />
                </div>
                <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
                  <span className="text-base font-semibold text-[#0a0c11] leading-6 text-center">No submission yet</span>
                  <p className="text-sm text-[#5b616d] leading-5 text-center">Results will appear here once students complete the exam.</p>
                </div>
              </div>
            </div>
          )}

          {/* Footer */}
          <div className="flex flex-col gap-6">
            <div className="h-px bg-black/[0.06]" />
            <div className="flex items-center justify-end gap-3">
              <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                {hasData ? (
                  <><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 11.25l3.75-3.75M9 11.25v-9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>Export results</>
                ) : (
                  <><svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-4 1 1-4 9.75-9.75z" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>Edit exam</>
                )}
              </button>
              <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M14 2H6a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2z" stroke="white" strokeWidth="1.2" /><path d="M10 2v4h4" stroke="white" strokeWidth="1.2" /></svg>
                {hasData ? "Duplicate quiz" : "Duplicate exam"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExamDetailPanel
