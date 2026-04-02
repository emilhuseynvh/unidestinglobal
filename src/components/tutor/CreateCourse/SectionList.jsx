import { useState } from "react"

const initialSections = [
  {
    id: 1,
    title: "Section 1: Cell Biology",
    info: "3 lessons • 40 min",
    lessons: [],
    expanded: false,
  },
  {
    id: 2,
    title: "Section 2: Molecular Biology",
    info: "2 lessons • 27 min",
    expanded: true,
    lessons: [
      { id: 1, title: "DNA Structure & Replication", duration: "22 min", type: "video" },
      { id: 2, title: "Key Definitions - Molecular Bio", duration: "5 min", type: "file" },
    ],
  },
  {
    id: 3,
    title: "Section 3: Genetics",
    info: "1 lessons • 0 min",
    expanded: true,
    lessons: [
      { id: 1, title: "Past Papaer PDF", duration: "Resource", type: "resource" },
    ],
  },
]

const DragIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className="shrink-0">
    <circle cx="7" cy="6" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="6" r="1.2" fill="#c3c6cc" />
    <circle cx="7" cy="10" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="10" r="1.2" fill="#c3c6cc" />
    <circle cx="7" cy="14" r="1.2" fill="#c3c6cc" /><circle cx="11" cy="14" r="1.2" fill="#c3c6cc" />
  </svg>
)

const IconBtn = ({ children }) => (
  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
    {children}
  </button>
)

const EditIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-4 1 1-4 9.75-9.75z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
const PlusIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
const MoreIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="4" r="1.5" fill="#5b616d" /><circle cx="9" cy="9" r="1.5" fill="#5b616d" /><circle cx="9" cy="14" r="1.5" fill="#5b616d" /></svg>
const DeleteIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5z" stroke="#ed4030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
const ChevronIcon = ({ open }) => <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}><path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
const PreviewIcon = () => <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="#5b616d" strokeWidth="1.2" /><circle cx="9" cy="9" r="3" stroke="#5b616d" strokeWidth="1.2" /></svg>

const lessonIcons = {
  video: <div className="w-9 h-9 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" fill="#3b82f6" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" fill="#3b82f6" /></svg></div>,
  file: <div className="w-9 h-9 rounded-full bg-[rgba(255,195,10,0.12)] flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke="#e4a000" strokeWidth="1.5" /><path d="M11.667 1.667v5h5" stroke="#e4a000" strokeWidth="1.5" /></svg></div>,
  resource: <div className="w-9 h-9 rounded-full bg-[rgba(64,155,63,0.12)] flex items-center justify-center shrink-0"><svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 1.667v5a1.667 1.667 0 001.667 1.666H17.5M10 16.667c3.222 0 5.833-2.612 5.833-5.834V5.833l-4.166-4.166H6.667a2.5 2.5 0 00-2.5 2.5v7.5c0 3.222 2.611 5.833 5.833 5.833z" stroke="#409b3f" strokeWidth="1.5" /></svg></div>,
}

const SectionList = () => {
  const [sections, setSections] = useState(initialSections)

  const toggleSection = (id) => {
    setSections(sections.map((s) => s.id === id ? { ...s, expanded: !s.expanded } : s))
  }

  return (
    <div className="flex flex-col gap-4">
      {sections.map((section) => (
        <div key={section.id} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
          {/* Section Header */}
          <div className="flex items-center gap-4 px-5 py-4 border-b border-black/[0.03]">
            <DragIcon />
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-[#0a0c11] leading-6">{section.title}</h3>
              <p className="text-sm text-[#5b616d] leading-5">{section.info}</p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-2">
                <IconBtn><EditIcon /></IconBtn>
                <IconBtn><PlusIcon /></IconBtn>
                <IconBtn><MoreIcon /></IconBtn>
                <IconBtn><DeleteIcon /></IconBtn>
              </div>
              <button onClick={() => toggleSection(section.id)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                <ChevronIcon open={section.expanded} />
              </button>
            </div>
          </div>

          {/* Lessons */}
          {section.expanded && section.lessons.length > 0 && (
            <div className="p-5 flex flex-col gap-3">
              {section.lessons.map((lesson) => (
                <div key={lesson.id} className="bg-white border border-black/[0.06] rounded-xl h-[68px] flex items-center gap-4 px-4">
                  <DragIcon size={18} />
                  {lessonIcons[lesson.type]}
                  <span className="flex-1 text-base font-medium text-[#0a0c11] leading-6 min-w-0 truncate">{lesson.title}</span>
                  <span className="text-sm text-[#5b616d] leading-5 shrink-0">{lesson.duration}</span>
                  <div className="flex items-center gap-2 shrink-0">
                    <IconBtn><PreviewIcon /></IconBtn>
                    <IconBtn><EditIcon /></IconBtn>
                    <IconBtn><DeleteIcon /></IconBtn>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default SectionList
