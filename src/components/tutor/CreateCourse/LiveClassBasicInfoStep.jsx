import { useState } from "react"

const difficultyLevels = ["Beginner", "Intermediate", "Advanced", "All levels"]

const teachingModes = [
  { id: "online", title: "Online", desc: "Live video sessions from anywhere in the world" },
  { id: "in-person", title: "In-Person", desc: "Face-to-face sessions at a physical location" },
  { id: "hybrid", title: "Hybrid", desc: "Flexible mix of online and in-person sessions" },
]

const classFormats = [
  { id: "1on1", title: "1-on-1", desc: "Personalized sessions for a single student" },
  { id: "group", title: "Group", desc: "Collaborative classes for multiple students" },
]

const LiveClassBasicInfoStep = ({ onNext }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("")
  const [languages, setLanguages] = useState(["Azerbaijani", "English"])
  const [teachingMode, setTeachingMode] = useState(null)
  const [classFormat, setClassFormat] = useState(null)

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 1 of 5 — Class Details</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Describe your live class</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Give students all the info they need to decide if this session is right for them.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Class Details */}
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Class Details</span>
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Class Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="e.g. AP Biology Weekly Group - Spring 2026" className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Full Description <span className="text-[#8c929c] font-normal">(0/1500)</span></label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the topics covered, the teaching style, and what students should expect from each session..." className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-base text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
            </div>
          </div>
        </div>

        {/* Subjects & Courses */}
        <div className="flex flex-col gap-6">
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

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Difficulty Level */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Difficulty Level</span>
          <div className="flex flex-wrap gap-3 py-1">
            {difficultyLevels.map((level) => (
              <button key={level} onClick={() => setSelectedLevel(level)} className={`h-10 px-[10px] rounded-[10px] text-sm font-medium transition-colors ${selectedLevel === level ? "bg-[#0a0c11] text-white" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"}`}>{level}</button>
            ))}
          </div>
        </div>

        {/* Language */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Language of Instruction</span>
          <div className="flex flex-wrap gap-3 py-1">
            {languages.map((lang) => (
              <span key={lang} className="h-10 px-[10px] rounded-[10px] bg-[rgba(242,242,244,0.8)] text-sm font-medium text-[#0a0c11] flex items-center">{lang}</span>
            ))}
            <button className="h-10 px-[10px] rounded-[10px] bg-[rgba(242,242,244,0.8)] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
              Add Language
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Teaching Mode */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Teaching Mode</span>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {teachingModes.map((mode) => (
              <button key={mode.id} onClick={() => setTeachingMode(mode.id)} className={`p-4 rounded-xl border flex items-start gap-2 text-left ${teachingMode === mode.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"} bg-white`}>
                <div className="pt-0.5 shrink-0">
                  <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${teachingMode === mode.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                    {teachingMode === mode.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-[#0a0c11] leading-6">{mode.title}</p>
                  <p className="text-sm text-[#5b616d] leading-5">{mode.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Class Format */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Class Format</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {classFormats.map((fmt) => (
              <button key={fmt.id} onClick={() => setClassFormat(fmt.id)} className={`p-4 rounded-xl border flex items-start gap-2 text-left ${classFormat === fmt.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"} bg-white`}>
                <div className="pt-0.5 shrink-0">
                  <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${classFormat === fmt.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                    {classFormat === fmt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-base font-medium text-[#0a0c11] leading-6">{fmt.title}</p>
                  <p className="text-sm text-[#5b616d] leading-5">{fmt.desc}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-black/[0.06]" />

        {/* Registration Period */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Registration Period</span>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-sm text-[#5b616d] leading-5 px-0.5">Registration opens</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3" width="13.5" height="13.5" rx="1.5" stroke="#8c929c" strokeWidth="1.2" /><path d="M12 1.5v3M6 1.5v3M2.25 7.5h13.5" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" /></svg>
                <span className="text-base text-[#8c929c] leading-6">Select date</span>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="text-sm text-[#5b616d] leading-5 px-0.5">Registration closes</label>
              <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3" width="13.5" height="13.5" rx="1.5" stroke="#8c929c" strokeWidth="1.2" /><path d="M12 1.5v3M6 1.5v3M2.25 7.5h13.5" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" /></svg>
                <span className="text-base text-[#8c929c] leading-6">Select date</span>
              </div>
            </div>
          </div>
        </div>

        {/* Session Start Date */}
        <div className="flex flex-col gap-3">
          <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Session Start Date</span>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#5b616d] leading-5 px-0.5">When would you like your session to start?</label>
            <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer w-full sm:w-1/2">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3" width="13.5" height="13.5" rx="1.5" stroke="#8c929c" strokeWidth="1.2" /><path d="M12 1.5v3M6 1.5v3M2.25 7.5h13.5" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" /></svg>
              <span className="text-base text-[#8c929c] leading-6">Select date</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LiveClassBasicInfoStep
