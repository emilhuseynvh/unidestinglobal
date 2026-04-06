import { useState } from "react"
import { Link } from "react-router"

const steps = [
  { number: 1, title: "Overview", desc: "Title, description, level" },
  { number: 2, title: "Rules", desc: "Thumbnail and branding" },
  { number: 3, title: "Confirm", desc: "Seats and enrollment fee" },
]

const stats = [
  { value: "8", label: "QUESTIONS", color: "text-[#0a0c11]" },
  { value: "69%", label: "PASSING SCORE", color: "text-[#0a0c11]" },
  { value: "40 min", label: "TIME LIMIT", color: "text-[#409b3f]" },
  { value: "1 attempt", label: "ATTEMPTS ALLOWED", color: "text-[#ed4030]" },
  { value: "40 pts", label: "TOTAL MARKS", color: "text-[#0a0c11]" },
]

const breakdown = [
  { label: "2 Multi choice questions", points: "1 point each", bg: "bg-[rgba(64,155,63,0.12)]", text: "text-[#338732]" },
  { label: "1 True/False", points: "1 point each", bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  { label: "1 Shot answer", points: "3 points each", bg: "bg-[rgba(237,64,48,0.12)]", text: "text-[#df2917]" },
]

const rules = [
  { title: "No external resources", desc: "You may not use textbooks, notes, websites, calculators, or any other materials during the exam unless specifically permitted by your tutor.", tag: "Strict", tagBg: "bg-[rgba(237,64,48,0.12)]", tagText: "text-[#df2917]", iconBg: "bg-[rgba(237,64,48,0.12)]", iconColor: "#ed4030" },
  { title: "No copy-paste or tab switching", desc: "Copy-paste is disabled in this exam. Leaving the exam tab repeatedly may be flagged for review. Stay focused on the exam window.", tag: "Enforced", tagBg: "bg-[rgba(237,64,48,0.12)]", tagText: "text-[#df2917]", iconBg: "bg-[rgba(237,64,48,0.12)]", iconColor: "#ed4030" },
  { title: "Timer runs continuously", desc: "Once started, the 40-minute countdown cannot be paused. If you close or refresh the page, the timer continues and your progress is auto-saved.", tag: "Important", tagBg: "bg-[rgba(255,195,10,0.12)]", tagText: "text-[#e4a000]", iconBg: "bg-[rgba(255,195,10,0.12)]", iconColor: "#e4a000" },
  { title: "Answer order can be changed", desc: "You can navigate freely between all questions using the question navigator. Change any answer at any time before submitting.", tag: "Allowed", tagBg: "bg-[rgba(6,177,241,0.12)]", tagText: "text-[#008ece]", iconBg: "bg-[rgba(0,122,255,0.12)]", iconColor: "#007aff" },
  { title: "Progress is auto-saved", desc: "Your answers are saved automatically every 30 seconds. If your connection drops, your progress will be restored when you reconnect.", tag: "Enabled", tagBg: "bg-[rgba(64,155,63,0.12)]", tagText: "text-[#338732]", iconBg: "bg-[rgba(64,155,63,0.12)]", iconColor: "#409b3f" },
]

const InfoIcon = ({ color }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke={color} strokeWidth="1.5" /><path d="M10 7v0M10 10v3" stroke={color} strokeWidth="1.5" strokeLinecap="round" /></svg>
)

const StepOverview = () => (
  <>
    <div className="border-t border-b border-black/[0.03] flex flex-wrap">
      {stats.map((s, i) => (
        <div key={i} className={`flex-1 min-w-[100px] flex flex-col gap-0.5 items-center justify-center px-3.5 py-3 ${i < stats.length - 1 ? "border-r border-black/[0.03]" : ""}`}>
          <span className={`text-[25px] font-semibold leading-9 tracking-[-0.2px] ${s.color}`}>{s.value}</span>
          <span className="text-[10px] font-medium text-[#5b616d] leading-4 text-center">{s.label}</span>
        </div>
      ))}
    </div>
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
      <div className="bg-[#f9f9fa] border-b border-black/[0.03] flex items-center justify-between px-5 py-4">
        <span className="text-base font-semibold text-[#0a0c11] leading-6">Question breakdown</span>
        <span className="text-sm font-semibold text-[#5b616d] leading-5">40 total marks</span>
      </div>
      <div className="p-5 flex flex-col gap-5">
        {breakdown.map((item, i) => (
          <div key={i} className={`flex items-center justify-between px-4 py-2 ${i < breakdown.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
            <span className={`${item.bg} ${item.text} h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center`}>{item.label}</span>
            <span className="text-sm font-medium text-[#5b616d] leading-5">{item.points}</span>
          </div>
        ))}
      </div>
    </div>
  </>
)

const confirmations = [
  "I have read and understood the exam rules and will not use any external resources or assistance during this exam.",
  "I understand this is my only attempt and the timer cannot be paused once started. I am ready to begin now.",
]

const warnings = [
  { text: <><span>You have </span><span className="font-semibold">1 attempt only.</span><span> This exam cannot be retaken without tutor permission.</span></>, bg: "bg-[rgba(255,195,10,0.12)]", iconColor: "#b47500", textColor: "text-[#b47500]" },
  { text: <><span>The timer starts </span><span className="font-semibold">immediately</span><span> and cannot be paused once the exam begins.</span></>, bg: "bg-[rgba(255,195,10,0.12)]", iconColor: "#b47500", textColor: "text-[#b47500]" },
  { text: "Your answers are auto-saved every 30 seconds. You can navigate between questions freely.", bg: "bg-[rgba(6,177,241,0.12)]", iconColor: "#008ece", textColor: "text-[#008ece]" },
]

const StepRules = () => (
  <div className="flex flex-col gap-3">
    {rules.map((rule, i) => (
      <div key={i} className="bg-white rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)] p-3 flex items-center justify-between gap-4">
        <div className="flex gap-4 items-start">
          <div className={`w-8 h-8 rounded-full ${rule.iconBg} flex items-center justify-center shrink-0`}>
            <InfoIcon color={rule.iconColor} />
          </div>
          <div className="flex flex-col gap-0 px-1">
            <span className="text-base font-semibold text-[#0a0c11] leading-6">{rule.title}</span>
            <span className="text-sm text-[#8c929c] leading-5">{rule.desc}</span>
          </div>
        </div>
        <span className={`${rule.tagBg} ${rule.tagText} h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center shrink-0`}>{rule.tag}</span>
      </div>
    ))}
  </div>
)

const StepConfirm = ({ checked, onToggle }) => (
  <div className="flex flex-col gap-8">
    <div className="bg-[#f9f9fa] border border-dashed border-black/[0.06] rounded-xl flex flex-col items-center justify-center gap-4 px-4 py-8">
      <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center relative">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M25 5l5 5-15 15H10v-5L25 5zM5 35h30" stroke="#007aff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#98b0e9]" />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        <span className="text-lg font-semibold text-[#0a0c11] leading-6">Ready to begin?</span>
        <span className="text-sm text-[#5b616d] leading-5 text-center max-w-[376px]">Once you click "Start Exam", the 40-minute timer will start immediately and cannot be paused.</span>
      </div>
    </div>

    <div className="border-t border-b border-black/[0.03] flex">
      <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 items-center justify-center px-3.5 py-3">
        <span className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">20</span>
        <span className="text-[10px] font-medium text-[#5b616d] leading-4 text-center">QUESTIONS</span>
      </div>
      <div className="flex-1 border-r border-black/[0.03] flex flex-col gap-0.5 items-center justify-center px-3.5 py-3">
        <span className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">69%</span>
        <span className="text-[10px] font-medium text-[#5b616d] leading-4 text-center">PASSING SCORE</span>
      </div>
      <div className="flex-1 flex flex-col gap-0.5 items-center justify-center px-3.5 py-3">
        <span className="text-[25px] font-semibold text-[#409b3f] leading-9 tracking-[-0.2px]">40 min</span>
        <span className="text-[10px] font-medium text-[#5b616d] leading-4 text-center">TIME LIMIT</span>
      </div>
    </div>

    <div className="flex flex-col gap-3">
      {warnings.map((w, i) => (
        <div key={i} className={`${w.bg} rounded-xl p-3 flex items-center gap-3 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03)]`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="7.5" stroke={w.iconColor} strokeWidth="1.5" /><path d="M10 7v0M10 10v3" stroke={w.iconColor} strokeWidth="1.5" strokeLinecap="round" /></svg>
          <span className={`text-sm font-medium ${w.textColor} leading-5 flex-1`}>{w.text}</span>
        </div>
      ))}
      {confirmations.map((text, i) => (
        <div key={i} className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl p-4 flex items-center gap-2 cursor-pointer" onClick={() => onToggle(i)}>
          <div className="shrink-0 w-5 h-5">
            {checked[i] ? (
              <div className="w-5 h-5 rounded-[6px] bg-[#007aff] flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            ) : (
              <div className="w-5 h-5 rounded-[6px] border-2 border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white" />
            )}
          </div>
          <span className="text-xs font-semibold text-[#0a0c11] leading-4">{text}</span>
        </div>
      ))}
    </div>
  </div>
)

const TakeExam = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [rulesChecked, setRulesChecked] = useState([false, false])

  const toggleCheck = (index) => {
    setRulesChecked((prev) => prev.map((v, i) => (i === index ? !v : v)))
  }

  const allChecked = rulesChecked.every(Boolean)

  const stepTitles = [
    { step: "Step 1 of 3", heading: "Overview of the Assessment" },
    { step: "Step 2 of 3", heading: "Exam Rules & Conduct" },
    { step: "Step 3 of 3", heading: "Confirm & Start" },
  ]

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex flex-col">
      <div className="bg-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)] h-[72px] shrink-0" />

      <div className="flex-1 flex flex-col lg:flex-row gap-4 px-6 lg:px-12 pt-6 pb-24">
        <div className="lg:w-[324px] shrink-0 flex flex-col gap-8">
          <Link to="/student/panel/exams" className="flex items-center gap-0.5 text-sm font-medium text-[#5b616d] no-underline hover:text-[#007aff] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Back to My Courses
          </Link>

          <div className="flex flex-col">
            {steps.map((step, i) => {
              const isActive = step.number === currentStep
              const isDone = step.number < currentStep
              return (
                <div key={step.number}>
                  <div className="flex gap-3 items-start">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-base font-medium leading-6 ${
                      isActive
                        ? "bg-[rgba(0,122,255,0.12)] border border-[rgba(0,122,255,0.2)] text-[#007aff]"
                        : isDone
                          ? "bg-[rgba(64,155,63,0.12)] border border-[rgba(64,155,63,0.2)] text-[#338732]"
                          : "bg-[#ececf0] border border-black/[0.06] text-[#c3c6cc]"
                    }`}>
                      {isDone ? (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      ) : step.number}
                    </div>
                    <div className="flex flex-col">
                      <span className={`text-base font-medium leading-6 ${isActive ? "text-[#007aff]" : isDone ? "text-[#0a0c11]" : "text-[#5b616d]"}`}>{step.title}</span>
                      <span className={`text-sm leading-5 ${isActive ? "text-[#5b616d]" : "text-[#8c929c]"}`}>{step.desc}</span>
                    </div>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="ml-4 h-8 border-l border-dashed border-[#c3c6cc]" />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex-1 bg-white rounded-2xl p-6 flex flex-col gap-8 min-w-0">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">{stepTitles[currentStep - 1]?.step}</span>
            </div>
            <div className="flex flex-col gap-[10.9px]">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">{stepTitles[currentStep - 1]?.heading}</h1>
              <div className="h-px bg-black/[0.06]" />
              <div className="flex flex-col gap-1">
                <span className="text-lg font-semibold text-[#0a0c11] leading-6">GCSE Biology — Unit Test: Ecology & Environment</span>
                <span className="text-sm text-[#5b616d] leading-6">20 questions · 40 min · Sara Rzayeva</span>
                <span className="bg-[rgba(0,122,255,0.12)] text-[#0267d0] h-6 px-1.5 rounded-lg text-xs font-medium inline-flex items-center self-start">Midterm Exam</span>
              </div>
            </div>
          </div>

          {currentStep === 1 && <StepOverview />}
          {currentStep === 2 && <StepRules />}
          {currentStep === 3 && <StepConfirm checked={rulesChecked} onToggle={toggleCheck} />}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white px-6 lg:px-12 py-6 flex items-center justify-between z-30">
        <button
          disabled={currentStep === 1}
          onClick={() => setCurrentStep((s) => Math.max(1, s - 1))}
          className={`h-10 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1.5 ${
            currentStep === 1
              ? "bg-[#f2f2f4] text-[#c3c6cc]"
              : "border border-black/[0.06] bg-white text-[#5b616d] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]"
          }`}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.25 4.5L6.75 9l4.5 4.5" stroke={currentStep === 1 ? "#c3c6cc" : "#5b616d"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Previous
        </button>
        <div className="flex items-center gap-3">
          <Link to="/student/panel/exams" className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] no-underline">
            Save & Exit
          </Link>
          {currentStep === 3 && allChecked ? (
            <Link to="/student/panel/exams/questions/1" className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] no-underline">
              Start Exam
            </Link>
          ) : currentStep === 3 && !allChecked ? (
            <button disabled className="h-10 px-[10px] rounded-[10px] bg-[#f2f2f4] text-sm font-medium text-[#c3c6cc] flex items-center gap-1.5 cursor-not-allowed">
              Start Exam
            </button>
          ) : (
            <button
              onClick={() => setCurrentStep((s) => Math.min(3, s + 1))}
              className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]"
            >
              Continue
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default TakeExam
