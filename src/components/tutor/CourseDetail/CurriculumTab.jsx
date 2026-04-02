import { useState } from "react"

const sections = [
  {
    title: "Section 1: Cell Biology",
    info: "3 lessons • 40 min",
    lessons: [],
  },
  {
    title: "Section 2: Molecular Biology",
    info: "2 lessons • 27 min",
    lessons: [
      { title: "DNA Structure & Replication", duration: "22 min", type: "video" },
      { title: "Key Definitions - Molecular Bio", duration: "5 min", type: "file" },
    ],
  },
  {
    title: "Section 3: Cell Signaling",
    info: "3 lessons • 35 min",
    lessons: [
      { title: "Signal Transduction Pathways", duration: "15 min", type: "video" },
      { title: "Receptors & Ligands", duration: "12 min", type: "file" },
    ],
  },
  {
    title: "Section 4: Genetics",
    info: "4 lessons • 40 min",
    lessons: [
      { title: "Mendelian Inheritance", duration: "30 min", type: "video" },
      { title: "Genetic Mutations", duration: "20 min", type: "file" },
    ],
  },
]

const DragIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none" className="shrink-0">
    <circle cx={size * 0.3} cy={size * 0.4} r={size * 0.075} fill="#c3c6cc" />
    <circle cx={size * 0.5} cy={size * 0.4} r={size * 0.075} fill="#c3c6cc" />
    <circle cx={size * 0.3} cy={size * 0.6} r={size * 0.075} fill="#c3c6cc" />
    <circle cx={size * 0.5} cy={size * 0.6} r={size * 0.075} fill="#c3c6cc" />
  </svg>
)

const LessonItem = ({ lesson }) => (
  <div className="bg-white border border-black/[0.06] rounded-xl h-[68px] flex items-center gap-4 px-4">
    <DragIcon size={18} />
    <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${lesson.type === "video" ? "bg-[#e8efff]" : "bg-[rgba(255,195,10,0.12)]"}`}>
      {lesson.type === "video" ? (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" stroke="#3b82f6" strokeWidth="1.5" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="#e4a000" strokeWidth="1.5" /><path d="M11.667 1.667v5h5" stroke="#e4a000" strokeWidth="1.5" /></svg>
      )}
    </div>
    <span className="flex-1 text-base font-medium text-[#0a0c11] leading-6 min-w-0 truncate">{lesson.title}</span>
    <span className="text-sm text-[#5b616d] leading-5 shrink-0">{lesson.duration}</span>
  </div>
)

const CurriculumTab = () => {
  const [openSections, setOpenSections] = useState([1, 2, 3])

  const toggleSection = (i) => {
    setOpenSections((prev) =>
      prev.includes(i) ? prev.filter((s) => s !== i) : [...prev, i]
    )
  }

  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden p-5 flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Course Curriculum</h2>
          <p className="text-sm text-[#5b616d] leading-5">4 sections · 24 lessons · ~6.5 hours of content</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Add section
          </button>
          <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 4.5L6.75 12.75 3 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Save Changes
          </button>
        </div>
      </div>

      {/* Sections */}
      {sections.map((section, i) => (
        <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
          <div className="flex items-center gap-4 px-5 py-4 border-b border-black/[0.03]">
            <DragIcon />
            <div className="flex-1 min-w-0 flex items-center gap-1">
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-semibold text-[#0a0c11] leading-6">{section.title}</h3>
                <p className="text-sm text-[#5b616d] leading-5">{section.info}</p>
              </div>
              <button
                onClick={() => toggleSection(i)}
                className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`transition-transform ${openSections.includes(i) ? "rotate-180" : ""}`}>
                  <path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
          {openSections.includes(i) && section.lessons.length > 0 && (
            <div className="p-5 flex flex-col gap-3">
              {section.lessons.map((lesson, j) => (
                <LessonItem key={j} lesson={lesson} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default CurriculumTab
