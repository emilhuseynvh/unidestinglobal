import { useState } from "react"

const learningPoints = [
  "Cell biology & organelles in depth",
  "DNA replication & protein synthesis",
  "Mendelian genetics & inheritance",
  "Ecosystem dynamics & ecology",
  "Paper 1 & 2 exam technique",
  "Model answers for all question types",
]

const overviewSections = [
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
]

const quickStats = [
  { label: "Published", value: "Jan 14, 2026" },
  { label: "Last updated", value: "2 days ago" },
  { label: "Total views", value: "2,418" },
  { label: "Conversion rate", value: "3.6%", valueColor: "text-[#409b3f]" },
  { label: "Avg. study time/week", value: "2.4 hrs" },
  { label: "Active this week", value: "34 students" },
]

const reviews = [
  {
    name: "Leyla M.",
    initials: "LM",
    avatarGradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]",
    text: '"Went from 5 to 7 in 3 months. The exam technique sections are incredible."',
    stars: 5,
  },
  {
    name: "Sara R.",
    initials: "SR",
    avatarGradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]",
    text: '"Best IB Biology resource I\'ve found. Clear, structured, exam-focused."',
    stars: 5,
  },
]

const SectionHeader = ({ icon, title, onEdit }) => (
  <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-base font-semibold text-[#0a0c11] leading-6">{title}</span>
    </div>
    {onEdit && (
      <button className="text-sm font-medium text-[#007aff] flex items-center gap-0.5" onClick={onEdit}>
        Edit
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M11.333 2A1.886 1.886 0 0114 4.667l-8.667 8.666L2 14l.667-3.333L11.333 2z" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
    )}
  </div>
)

const DragIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className="shrink-0">
    <circle cx="6" cy="8" r="1.5" fill="#c3c6cc" /><circle cx="10" cy="8" r="1.5" fill="#c3c6cc" />
    <circle cx="6" cy="12" r="1.5" fill="#c3c6cc" /><circle cx="10" cy="12" r="1.5" fill="#c3c6cc" />
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

const OverviewTab = () => {
  const [openSection, setOpenSection] = useState(1)

  return (
    <div className="flex flex-col gap-6">
      {/* Course Description */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Course Description"
          onEdit={() => {}}
        />
        <div className="p-5 flex flex-col gap-5">
          <p className="text-sm text-[#5b616d] leading-5">This course covers all six IB Biology HL core topics with exam-focused explanations, past paper walkthroughs, and model answers. Students who complete this course have consistently improved their IB scores by 1–2 grades.</p>
          <div className="flex flex-col gap-3.5">
            <span className="text-[11px] font-semibold text-[#5b616d] uppercase tracking-[2px] leading-3">What students will learn</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {learningPoints.map((point) => (
                <div key={point} className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl px-3 py-2.5 flex items-center gap-2">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0"><path d="M15 4.5L6.75 12.75 3 9" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[12.5px] text-[#5b616d] leading-[17.5px]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Curriculum Preview */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 19c-2.2-1.6-4.8-2.4-7.4-2.4-.7 0-1.4.07-2.1.21V5.19c.7-.14 1.4-.21 2.1-.21 2.6 0 5.2.8 7.4 2.4m0 11.6c2.2-1.6 4.8-2.4 7.4-2.4.7 0 1.4.07 2.1.21V5.19c-.7-.14-1.4-.21-2.1-.21-2.6 0-5.2.8-7.4 2.4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Curriculum Preview"
          onEdit={() => {}}
        />
        <div className="p-5 flex flex-col gap-5">
          {overviewSections.map((section, i) => (
            <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
              <div className="flex items-center gap-4 px-5 py-4 border-b border-black/[0.03]">
                <DragIcon />
                <div className="flex-1 min-w-0 flex items-center gap-1">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-[#0a0c11] leading-6">{section.title}</h3>
                    <p className="text-sm text-[#5b616d] leading-5">{section.info}</p>
                  </div>
                  <button onClick={() => setOpenSection(openSection === i ? -1 : i)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className={`transition-transform ${openSection === i ? "rotate-180" : ""}`}>
                      <path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              {openSection === i && section.lessons.length > 0 && (
                <div className="p-5 flex flex-col gap-3">
                  {section.lessons.map((lesson, j) => (
                    <LessonItem key={j} lesson={lesson} />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="px-5 py-4 border-t border-black/[0.06]">
          <button className="text-sm font-medium text-[#007aff] flex items-center gap-0.5">
            View all 10 lessons
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8.667 4l4 4-4 4" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>

      {/* Pricing & Access */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Pricing & Access"
          onEdit={() => {}}
        />
        <div className="p-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl p-[17px] flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-[#8c929c] uppercase tracking-[2px] leading-3">Current price</span>
              <span className="text-[22px] font-extrabold text-[#0a0c11] leading-7 tracking-[-0.2px]">$49</span>
              <span className="text-xs text-[#5b616d] leading-4">One-time purchase · Lifetime access</span>
            </div>
            <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl p-[17px] flex flex-col gap-2">
              <span className="text-[11px] font-semibold text-[#8c929c] uppercase tracking-[2px] leading-3">Access settings</span>
              <div className="flex flex-col gap-1.5">
                {["30-day money-back guarantee", "Certificate on completion", "2 free preview lessons"].map((item) => (
                  <div key={item} className="flex items-center gap-[7px]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M13.333 4L6 11.333 2.667 8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    <span className="text-xs text-[#5b616d] leading-4">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" stroke="#5b616d" strokeWidth="1.5" /><rect x="10" y="7" width="4" height="14" rx="1" stroke="#5b616d" strokeWidth="1.5" /><rect x="17" y="3" width="4" height="18" rx="1" stroke="#5b616d" strokeWidth="1.5" /></svg>
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Quick Stats</span>
          </div>
        </div>
        <div className="px-4 py-3.5">
          {quickStats.map((stat, i) => (
            <div key={i} className={`flex items-center justify-between py-2 ${i < quickStats.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <span className="text-xs text-[#8c929c] leading-4">{stat.label}</span>
              <span className={`text-sm font-semibold leading-5 ${stat.valueColor || "text-[#0a0c11]"}`}>{stat.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffc30a" stroke="#ffc30a" strokeWidth="1" /></svg>
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Recent Reviews</span>
          </div>
        </div>
        <div className="px-5 py-3.5 flex flex-col gap-1.5">
          {reviews.map((review, i) => (
            <div key={i} className={`flex flex-col gap-1.5 px-3.5 py-3 ${i < reviews.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-b ${review.avatarGradient} border border-black/[0.03] flex items-center justify-center`}>
                  <span className="text-[10px] font-medium text-white leading-4">{review.initials}</span>
                </div>
                <span className="text-xs font-semibold text-[#0a0c11]">{review.name}</span>
                <span className="ml-auto text-sm text-[#0a0c11] leading-5">{"★".repeat(review.stars)}</span>
              </div>
              <p className="text-xs text-[#5b616d] leading-[18px]">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OverviewTab
