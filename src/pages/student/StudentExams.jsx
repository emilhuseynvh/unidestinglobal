import { useState } from "react"
import { Link } from "react-router"

const kpis = [
  { value: "7", label: "Exams Assigned", iconBg: "bg-[#e8efff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 2.5h8a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2v-11a2 2 0 012-2z" stroke="#007aff" strokeWidth="1.2" /><path d="M7.5 7.5h5M7.5 10.5h3" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" /><circle cx="15" cy="15" r="4" stroke="#007aff" strokeWidth="1.2" /><path d="M14 15h2M15 14v2" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" /></svg>, badge: null },
  { value: "3", label: "Completed", iconBg: "bg-[#e3f6e2]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 2.5h8a2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2v-11a2 2 0 012-2z" stroke="#338732" strokeWidth="1.2" /><path d="M7.5 7.5h5M7.5 10.5h3" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" /><circle cx="15" cy="15" r="4" stroke="#338732" strokeWidth="1.2" /><path d="M13.5 15l1 1 2-2" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>, badge: "74%", badgeColor: "bg-[rgba(64,155,63,0.12)] text-[#409b3f]" },
  { value: "2", label: "Upcoming", iconBg: "bg-[#dff3ff]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#06b1f1" strokeWidth="1.2" /><path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#06b1f1" strokeWidth="1.2" strokeLinecap="round" /></svg>, badge: "Soon", badgeColor: "bg-[rgba(0,122,255,0.12)] text-[#007aff]" },
  { value: "74%", label: "Average Score", iconBg: "bg-[#fffbc4]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 15V9.167M8.333 15V5M11.667 15V7.5M15 15V10.833" stroke="#d97706" strokeWidth="1.5" strokeLinecap="round" /></svg>, badge: null },
  { value: "1", label: "Missed", iconBg: "bg-[rgba(237,64,48,0.12)]", icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#ed4030" strokeWidth="1.2" /><path d="M10 6.667V10M10 13.333h.008" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>, badge: null },
]

const filterTabs = [
  { label: "All", count: 7 },
  { label: "Upcoming", count: 2 },
  { label: "Available Now", count: 1 },
  { label: "Graded", count: 3 },
  { label: "Missed", count: 1 },
]

const exams = [
  { id: 1, title: "IB Biology HL — Midterm Exam", course: "IB Biology HL", questions: 40, passingScore: "79%", avgScore: null, date: "Mar 10, 2026 · 2:00 PM", status: "upcoming", type: "Midterm Exam", progressColor: "bg-[#007aff]", progressWidth: 0, iconBg: "bg-[#f2f2f4]" },
  { id: 2, title: "AP Biology — Unit 3 Quiz: Genetics & Here...", course: "AP Biology", questions: 8, passingScore: "69%", avgScore: "82%", avgScoreColor: "text-[#409b3f]", date: "Mar 10, 2026 · 2:00 PM", status: "graded", result: "passed", type: "Quiz", progressColor: "bg-[#409b3f]", progressWidth: 82, iconBg: "bg-[rgba(255,195,10,0.12)]" },
  { id: 3, title: "AP Biology — Genetics Quiz", course: "IB Biology HL", questions: 8, passingScore: "75%", avgScore: null, date: "Mar 13, 2026 · 2:00 PM", status: "upcoming", type: "Quiz", progressColor: "bg-[#007aff]", progressWidth: 0, iconBg: "bg-[#f2f2f4]" },
  { id: 4, title: "IB Biology HL — Final Exam 2026", course: "IB Biology HL", questions: 40, passingScore: "79%", avgScore: null, date: "Today, 10:00 AM", status: "available", type: "Final Exam", progressColor: "bg-[#007aff]", progressWidth: 0, iconBg: "bg-[#f2f2f4]" },
  { id: 5, title: "AP Biology — Unit 3 Quiz: Genetics & Here...", course: "AP Biology", questions: 8, passingScore: "75%", avgScore: "76%", avgScoreColor: "text-[#409b3f]", date: "Mar 10, 2026 · 2:00 PM", status: "graded", result: "passed", type: "Quiz", progressColor: "bg-[#409b3f]", progressWidth: 76, iconBg: "bg-[rgba(255,195,10,0.12)]" },
  { id: 6, title: "AP Biology — Midterm Exam: Biochemistry...", course: "IB Biology HL", questions: 40, passingScore: "79%", avgScore: null, date: "Mar 1, 2026 · 2:00 PM", status: "missed", type: "Midterm Exam", progressColor: "bg-[#ed4030]", progressWidth: 0, iconBg: "bg-[#f2f2f4]" },
  { id: 7, title: "IB Biology HL — Evolution & Genetics", course: "AP Biology", questions: 8, passingScore: "80%", avgScore: "75%", avgScoreColor: "text-[#ed4030]", date: "Mar 10, 2026 · 2:00 PM", status: "graded", result: "failed", type: "Final Exam", progressColor: "bg-[#ed4030]", progressWidth: 75, iconBg: "bg-[rgba(255,195,10,0.12)]" },
]

const statusConfig = {
  upcoming: { label: "Upcoming", dot: "bg-[#007aff]", bg: "bg-[rgba(0,122,255,0.12)]", text: "text-[#007aff]" },
  available: { label: "Available Now", dot: "bg-[#409b3f]", bg: "bg-[rgba(64,155,63,0.12)]", text: "text-[#338732]" },
  graded: { label: "Graded", dot: "bg-[#0a0c11]", bg: "bg-[#f2f2f4]", text: "text-[#0a0c11]" },
  missed: { label: "Missed", dot: "bg-[#ed4030]", bg: "bg-[rgba(237,64,48,0.12)]", text: "text-[#ed4030]" },
}

const typeConfig = {
  "Midterm Exam": { bg: "bg-[rgba(0,122,255,0.12)]", text: "text-[#007aff]" },
  Quiz: { bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  "Final Exam": { bg: "bg-[rgba(237,64,48,0.12)]", text: "text-[#df2917]" },
}

const questionReview = [
  {
    question: "What is the primary function of the mitochondria?",
    correct: true,
    options: [
      { label: "A", text: "Protein synthesis", selected: false, isCorrect: false },
      { label: "B", text: "Lipid storage", selected: false, isCorrect: false },
      { label: "C", text: "ATP production", selected: true, isCorrect: true },
      { label: "D", text: "Energy metabolism", selected: false, isCorrect: false },
    ],
  },
  {
    question: "Which organelle contains DNA in a eukaryotic cell?",
    correct: false,
    options: [
      { label: "A", text: "Protein synthesis", selected: false, isCorrect: false },
      { label: "B", text: "Mitochondria", selected: false, isCorrect: true },
      { label: "C", text: "Energy metabolism", selected: false, isCorrect: false },
      { label: "D", text: "Endoplasmic reticulum", selected: true, isCorrect: false },
    ],
    correctAnswer: "Mitochondria",
  },
]

const ExamDetailModal = ({ exam, onClose }) => {
  const st = statusConfig[exam.status]
  const tp = typeConfig[exam.type] || { bg: "bg-[#f2f2f4]", text: "text-[#5b616d]" }
  const isGraded = exam.status === "graded"
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative bg-white rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] w-full max-w-[520px] max-h-[90vh] overflow-y-auto flex flex-col gap-6 p-5" onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
            <h2 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">Exam Details</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
          <div className="flex flex-col gap-[10px] pb-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <span className={`${st.bg} ${st.text} h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-1`}>
                <span className="font-medium">●</span>
                {st.label}
              </span>
              <span className={`${tp.bg} ${tp.text} h-7 px-1.5 rounded-lg text-xs font-medium flex items-center`}>{exam.type}</span>
              {exam.result === "passed" && (
                <span className="bg-[rgba(64,155,63,0.12)] text-[#338732] h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Passed
                </span>
              )}
              {exam.result === "failed" && (
                <span className="bg-[rgba(237,64,48,0.12)] text-[#df2917] h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-0.5">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M12 4L4 12M4 4l8 8" stroke="#df2917" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  Failed
                </span>
              )}
            </div>
            <h3 className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">{exam.title}</h3>
            <p className="text-base text-[#5b616d] leading-6">Interactive weekly live sessions covering AP Biology curriculum with Q&A, practice problems, and exam strategy. Recordings included.</p>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center">
                <span className="text-xs font-medium text-white">LM</span>
              </div>
              <span className="text-sm font-medium text-[#5b616d] leading-5">Leyla Mammadova</span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-[#5b616d] leading-5">
              <span>{exam.date}</span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
              <span>{exam.questions} questions</span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
              <span>90 min</span>
            </div>
          </div>
        </div>
        <div className="border-t border-b border-black/[0.03] flex h-[80px]">
          <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 justify-center px-3.5 py-3">
            <span className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">{exam.questions}</span>
            <span className="text-[10px] font-medium text-[#5b616d] leading-4">QUESTIONS</span>
          </div>
          <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 justify-center px-3.5 py-3">
            <span className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">{exam.passingScore}</span>
            <span className="text-[10px] font-medium text-[#5b616d] leading-4">PASSING SCORE</span>
          </div>
          <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 justify-center px-3.5 py-3">
            <span className={`text-[25px] font-semibold leading-9 tracking-[-0.2px] ${isGraded ? "text-[#409b3f]" : "text-[#06b1f1]"}`}>{exam.avgScore || "-"}</span>
            <span className="text-[10px] font-medium text-[#5b616d] leading-4">AVG. SCORE</span>
          </div>
          <div className="flex-1 flex flex-col gap-0.5 justify-center px-3.5 py-3">
            <span className={`text-[25px] font-semibold leading-9 tracking-[-0.2px] capitalize ${isGraded ? "text-[#5b616d]" : "text-[#007aff]"}`}>{exam.status === "available" ? "Available" : exam.status}</span>
            <span className="text-[10px] font-medium text-[#5b616d] leading-4">STATUS</span>
          </div>
        </div>
        {isGraded && (
          <>
            <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl p-5 flex gap-4">
              <div className="bg-white border border-black/[0.03] rounded-2xl px-4 py-3 flex flex-col items-center gap-1 shrink-0">
                <span className="text-xs text-[#8c929c] leading-4">Your Grade</span>
                <span className="text-[32px] font-bold text-[#409b3f] leading-10 tracking-[-0.2px]">{exam.avgScore}</span>
                <span className="bg-[rgba(64,155,63,0.12)] text-[#338732] h-7 px-1.5 rounded-lg text-xs font-medium flex items-center">Grade A</span>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                {[
                  { label: "Correct answers", value: "3/5", percent: 60, color: "bg-[#409b3f]" },
                  { label: "Incorrect answers", value: "1", percent: 7, color: "bg-[#ed4030]" },
                  { label: "Skipped", value: "1", percent: 7, color: "bg-[#afb3bb]" },
                ].map((bar, i) => (
                  <div key={i} className="flex items-center gap-1">
                    <span className="text-[10px] font-medium text-[#8c929c] leading-4 w-[83px] shrink-0">{bar.label}</span>
                    <div className="flex-1 h-1.5 bg-[#f2f2f4] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${bar.color}`} style={{ width: `${bar.percent}%` }} />
                    </div>
                    <span className="text-[10px] font-medium text-[#8c929c] leading-4 w-6 text-right shrink-0">{bar.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <span className="text-lg font-semibold text-[#0a0c11] leading-6">Question Review</span>
              {questionReview.map((q, qi) => (
                <div key={qi} className="flex flex-col gap-3">
                  <div className="flex items-center gap-1.5 px-0.5">
                    <span className="text-base font-medium text-[#0a0c11] leading-6">{qi + 1}. {q.question}</span>
                    {q.correct ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" fill="#409b3f" /><path d="M5 8l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ) : (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="8" r="7" fill="#ed4030" /><path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    )}
                  </div>
                  <div className="flex flex-col gap-3">
                    {q.options.map((opt, oi) => (
                      <div
                        key={oi}
                        className={`flex items-start gap-1 px-2 py-1 rounded-lg ${
                          opt.selected && opt.isCorrect ? "bg-[rgba(64,155,63,0.12)] text-[#409b3f]" :
                          opt.selected && !opt.isCorrect ? "bg-[rgba(237,64,48,0.12)] text-[#df2917]" : ""
                        }`}
                      >
                        <span className={`text-base font-semibold leading-6 ${opt.selected && opt.isCorrect ? "text-[#409b3f]" : opt.selected && !opt.isCorrect ? "text-[#df2917]" : "text-[#0a0c11]"}`}>{opt.label}.</span>
                        <span className={`text-sm font-medium leading-6 ${opt.selected && opt.isCorrect ? "text-[#409b3f]" : opt.selected && !opt.isCorrect ? "text-[#df2917]" : "text-[#5b616d]"}`}>{opt.text}</span>
                      </div>
                    ))}
                    {q.correctAnswer && (
                      <div className="bg-[#f9f9fa] border-l-2 border-black/[0.06] rounded-r-lg flex items-center gap-1 px-2 py-1.5">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M16.667 5L7.5 14.167 3.333 10" stroke="#409b3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        <span className="text-xs text-[#8c929c] leading-4">Correct answer:</span>
                        <span className="text-sm font-semibold text-[#5b616d] leading-5">{q.correctAnswer}</span>
                      </div>
                    )}
                  </div>
                  {qi < questionReview.length - 1 && <div className="h-px bg-black/[0.06]" />}
                </div>
              ))}
            </div>
          </>
        )}
        <div className="flex flex-col gap-6 items-end">
          <div className="h-px w-full bg-black/[0.06]" />
          <div className="flex items-center gap-3">
            {exam.status === "available" ? (
              <Link to={`/student/panel/exams/take/${exam.id}`} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] no-underline">
                Start Exam
              </Link>
            ) : (
              <>
                <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Download exam sheet
                </button>
                {isGraded && (
                  <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                    Retry as Practice
                  </button>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const StudentExams = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [selectedExam, setSelectedExam] = useState(null)

  const filteredExams = activeFilter === "All"
    ? exams
    : activeFilter === "Available Now"
      ? exams.filter((e) => e.status === "available")
      : exams.filter((e) => e.status === activeFilter.toLowerCase())

  return (
    <div className="px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-4">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Exams</h1>
          <p className="text-sm text-[#5b616d] leading-5">Assigned assessments, practice tests and results</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] shrink-0 self-start">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Export CSV
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {kpis.map((k, i) => (
          <div key={i} className="bg-white border border-white/[0.07] rounded-[18px] overflow-hidden p-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-full ${k.iconBg} flex items-center justify-center`}>{k.icon}</div>
              {k.badge && (
                <span className={`${k.badgeColor} text-[11px] font-semibold px-[7px] py-[3px] rounded-[20px]`}>{k.badge}</span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{k.value}</span>
              <span className="text-xs text-[#8c929c] leading-4">{k.label}</span>
            </div>
          </div>
        ))}
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
              <span className="bg-[rgba(0,122,255,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center justify-center">{tab.count}</span>
            </button>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-10 pl-4 pr-2 flex items-center gap-1.5 w-full sm:w-[220px] min-w-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input type="text" placeholder="Search exams" value={search} onChange={(e) => setSearch(e.target.value)} className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0" />
          </div>
          <span className="text-xs text-[#8c929c] whitespace-nowrap hidden sm:inline">Showing <span className="font-medium text-[#5b616d]">{filteredExams.length}</span> exams</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            All types
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            All Courses
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3.5 5.25L7 8.75l3.5-3.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredExams.map((exam) => {
          const st = statusConfig[exam.status]
          const tp = typeConfig[exam.type] || { bg: "bg-[#f2f2f4]", text: "text-[#5b616d]" }
          return (
            <div key={exam.id} onClick={() => setSelectedExam(exam)} className="bg-white border border-black/[0.03] rounded-2xl flex flex-col cursor-pointer hover:shadow-[0px_3px_12px_rgba(0,0,0,0.06)] transition-shadow">
              <div className="px-[13px] py-[14px] flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className={`w-14 h-14 rounded-full ${exam.iconBg} flex items-center justify-center shrink-0`}>
                    {exam.status === "graded" ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 3h12v6a6 6 0 01-12 0V3zM4.5 3H3a1.5 1.5 0 00-1.5 1.5V6a3 3 0 003 3h.75M19.5 3H21a1.5 1.5 0 011.5 1.5V6a3 3 0 01-3 3h-.75M9 15v3M15 15v3M6 21h12" stroke="#e4a000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M7 2h10a2 2 0 012 2v14a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="#007aff" strokeWidth="1.3" /><path d="M9 7h6M9 10.5h4" stroke="#007aff" strokeWidth="1.3" strokeLinecap="round" /><circle cx="17" cy="17" r="5" stroke="#007aff" strokeWidth="1.3" /><path d="M16 17h2M17 16v2" stroke="#007aff" strokeWidth="1.3" strokeLinecap="round" /></svg>
                    )}
                  </div>
                  <div className="flex items-center gap-2 flex-wrap justify-end">
                    <span className={`${st.bg} ${st.text} h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-1`}>
                      <span className="font-medium">●</span>
                      {st.label}
                    </span>
                    <span className={`${tp.bg} ${tp.text} h-7 px-1.5 rounded-lg text-xs font-medium flex items-center`}>{exam.type}</span>
                    {exam.result === "passed" && (
                      <span className="bg-[rgba(64,155,63,0.12)] text-[#338732] h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        Passed
                      </span>
                    )}
                    {exam.result === "failed" && (
                      <span className="bg-[rgba(237,64,48,0.12)] text-[#df2917] h-7 px-1.5 rounded-lg text-xs font-medium flex items-center gap-0.5">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="#df2917" strokeWidth="1.5" strokeLinecap="round" /></svg>
                        Failed
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col gap-[3px]">
                    <h3 className="text-base font-semibold text-[#0a0c11] leading-6 truncate pr-[70px]">{exam.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-[#5b616d] leading-4">
                      <span>{exam.course}</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                      <span>{exam.questions} questions</span>
                      <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                      <span>90 min</span>
                    </div>
                  </div>
                  {exam.progressWidth > 0 ? (
                    <div className="h-1 bg-[#f2f2f4] rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${exam.progressColor}`} style={{ width: `${exam.progressWidth}%` }} />
                    </div>
                  ) : (
                    <div className="h-1" />
                  )}
                </div>
              </div>
              <div className="border-t border-b border-black/[0.03] flex h-[68px]">
                <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 justify-center px-3.5 py-3">
                  <span className="text-base font-extrabold text-[#0a0c11] leading-6">{exam.questions}</span>
                  <span className="text-[10px] font-medium text-[#5b616d] leading-4">QUESTIONS</span>
                </div>
                <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 justify-center px-3.5 py-3">
                  <span className="text-base font-extrabold text-[#0a0c11] leading-6">{exam.passingScore}</span>
                  <span className="text-[10px] font-medium text-[#5b616d] leading-4">PASSING SCORE</span>
                </div>
                <div className="flex-1 flex flex-col gap-0.5 justify-center px-3.5 py-3">
                  <span className={`text-base font-extrabold leading-6 ${exam.avgScore ? exam.avgScoreColor : "text-[#8c929c]"}`}>{exam.avgScore || "-"}</span>
                  <span className="text-[10px] font-medium text-[#5b616d] leading-4">AVG SCORE</span>
                </div>
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-2 text-xs text-[#5b616d] leading-4">
                  <span>{exam.date.split(" · ")[0]}</span>
                  <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
                  <span>{exam.date.split(" · ")[1]}</span>
                </div>
                {exam.status === "available" && (
                  <button className="h-8 px-3 rounded-lg bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-xs font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                    Start Exam
                  </button>
                )}
              </div>
            </div>
          )
        })}
      </div>
      {selectedExam && <ExamDetailModal exam={selectedExam} onClose={() => setSelectedExam(null)} />}
    </div>
  )
}

export default StudentExams
