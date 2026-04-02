import { useState } from "react"

const BasicDetailsStep = ({ onNext }) => {
  const [title, setTitle] = useState("")
  const [instructions, setInstructions] = useState("")

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 2 of 6 — Exam Type</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Name your exam</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Give the exam a clear title students will recognize. Add context so they know what to expect.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Details */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Details</span>
        <div className="flex flex-col gap-7">
          {/* Exam Title */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Exam Title</label>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. IB Biology HL - Midterm Exam 2026" className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
          </div>

          {/* Subjects + Courses */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Subjects</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                <span className="text-base text-[#8c929c] leading-6 px-1">Select subject</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Available Courses</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                <span className="text-base text-[#8c929c] leading-6 px-1">Select course</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Instructions for students</label>
            <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="e.g. This exam covers Section 1-3 of IB Biology HL. You have 90 minutes. No external resources are permitted. Show all working for calculation questions." className="bg-white border border-black/[0.06] rounded-[10px] min-h-[96px] px-3 py-2 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
            <p className="text-sm text-[#8c929c] leading-5 px-0.5">Displayed at the start of the exam. Be specific about rules, permitted materials, and marking scheme.</p>
          </div>

          {/* Difficulty + Language */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Difficulty Level</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                <span className="text-sm text-[#0a0c11] leading-6 px-1">Beginner</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Language</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                <span className="text-sm text-[#0a0c11] leading-6 px-1">English</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicDetailsStep
