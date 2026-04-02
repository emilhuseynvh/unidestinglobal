import { useState } from "react"

const difficultyLevels = ["Beginner", "Intermediate", "Advanced", "All levels"]

const BasicInfoStep = ({ onNext }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [languages, setLanguages] = useState(["Azerbaijani", "English"])

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 1 of 5 — Basic info</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Tell us about your course</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">A great title and clear description help students decide to enroll. Be specific about what they'll learn.</p>
          </div>
          <button
            onClick={onNext}
            className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Course Details */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Course Details</span>

          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
                Course Title <span className="text-[#8c929c] font-normal">(0/80)</span>
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. IB Biology HL - Complete Exam Preparation 2026"
                className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
              />
              <p className="text-sm text-[#8c929c] leading-5 px-0.5">Clear, specific titles get 3× more clicks than generic ones</p>
            </div>

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
                  Full Description <span className="text-[#8c929c] font-normal">(0/1500)</span>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Describe what studets will learn, who is course for, and what makes it unique..."
                  className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Subjects</label>
                <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                  <span className="text-base text-[#8c929c] leading-6 px-1">Select subject</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Available Courses</label>
                <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
                  <span className="text-base text-[#8c929c] leading-6 px-1">Select course</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Difficulty Level */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Difficulty Level</span>
          <div className="flex flex-wrap gap-3 py-1">
            {difficultyLevels.map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`h-10 px-[10px] rounded-[10px] text-sm font-medium transition-colors ${
                  selectedLevel === level
                    ? "bg-[#0a0c11] text-white"
                    : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"
                }`}
              >
                {level}
              </button>
            ))}
          </div>
        </div>

        {/* Language of Instruction */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Language of Instruction</span>
          <div className="flex flex-wrap gap-3 py-1">
            {languages.map((lang) => (
              <span key={lang} className="h-10 px-[10px] rounded-[10px] bg-[rgba(242,242,244,0.8)] text-sm font-medium text-[#0a0c11] flex items-center">
                {lang}
              </span>
            ))}
            <button className="h-10 px-[10px] rounded-[10px] bg-[rgba(242,242,244,0.8)] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
              Add Language
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoStep
