import { useState } from "react"

const examTypes = [
  {
    id: "midterm",
    title: "Midterm Exam",
    desc: "Mid-course assessment covering topics studied so far. Typically 60–90 minutes with mixed question types.",
    iconBg: "bg-[#e8efff]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="14" height="16" rx="2" fill="#3b82f6" /><path d="M17 8.5l4-2.5v12l-4-2.5V8.5z" fill="#3b82f6" /></svg>,
  },
  {
    id: "final",
    title: "Final Exam",
    desc: "Comprehensive end-of-course assessment. Typically 90–120 minutes covering all topics.",
    iconBg: "bg-[rgba(255,195,10,0.12)]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L21 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffc30a" /></svg>,
  },
  {
    id: "quiz",
    title: "Quick Quiz",
    desc: "Short knowledge check after a specific lesson or topic. Typically 15–30 minutes, 10–20 questions.",
    iconBg: "bg-[rgba(147,51,234,0.12)]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="8" fill="#9333ea" /><path d="M9.5 9.5a2.5 2.5 0 014.99.5c0 1.67-2.49 2.5-2.49 2.5M12 16h.01" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>,
  },
  {
    id: "practice",
    title: "Practice Test",
    desc: "Ungraded practice run to prepare students. Answers revealed immediately after submission.",
    iconBg: "bg-[rgba(64,155,63,0.12)]",
    icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="8" cy="12" r="3" fill="#409b3f" /><circle cx="16" cy="12" r="3" fill="#409b3f" /></svg>,
  },
]

const ExamTypeStep = ({ onNext }) => {
  const [selectedType, setSelectedType] = useState("midterm")

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 1 of 6 — Exam Type</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">What kind of exam?</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Choose the assessment format that fits your teaching goals. You can add any question type to any format.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Teaching Mode</span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {examTypes.map((type) => (
            <button
              key={type.id}
              onClick={() => setSelectedType(type.id)}
              className={`p-5 rounded-2xl border flex flex-col items-start gap-3 text-left transition-colors ${
                selectedType === type.id ? "border-[rgba(0,122,255,0.4)] bg-white" : "border-black/[0.06] bg-white"
              }`}
            >
              <div className="flex items-start justify-between w-full">
                <div className={`w-10 h-10 rounded-xl ${type.iconBg} flex items-center justify-center`}>
                  {type.icon}
                </div>
                <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                  selectedType === type.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"
                }`}>
                  {selectedType === type.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-base font-semibold text-[#0a0c11] leading-6">{type.title}</span>
                <p className="text-sm text-[#5b616d] leading-5">{type.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ExamTypeStep
