const schedule = [
  { label: "Recurrence", value: "Every Thursday" },
  { label: "Time", value: "4:00 PM AZT" },
  { label: "Total sessions", value: "12" },
  { label: "Duration", value: "60 minutes" },
  { label: "End date", value: "Jun 19, 2026" },
]

const learningItems = [
  "Cell biology & organelles in depth",
  "DNA replication & protein synthesis",
  "Mendelian genetics & inheritance",
  "Ecosystem dynamics & ecology",
  "Paper 1 & 2 exam technique",
  "Model answers for all question types",
]

const classIncludes = [
  { icon: "video", text: "12 live sessions (60 min each)" },
  { icon: "download", text: "Downloadable session recordings" },
  { icon: "file", text: "Study materials & handouts" },
  { icon: "message", text: "Direct Q&A with instructor" },
  { icon: "award", text: "Certificate of completion" },
  { icon: "users", text: "Small group (max 15 students)" },
]

const SectionHeader = ({ icon, title }) => (
  <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-base font-semibold text-[#0a0c11] leading-6">{title}</span>
    </div>
  </div>
)

const StudentLiveOverviewTab = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Course Description */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Course Description"
        />
        <div className="p-5 flex flex-col gap-5">
          <p className="text-sm text-[#5b616d] leading-5">
            This course covers all six IB Biology HL core topics with exam-focused explanations, past paper walkthroughs, and model answers. Students who complete this course have consistently improved their IB scores by 1–2 grades.
          </p>

          {/* What students will learn */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#8c929c] uppercase tracking-[0.7px] leading-4">What students will learn</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {learningItems.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M13.333 4L6 11.333 2.667 8" stroke="#409b3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-sm text-[#0a0c11] leading-5">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* This class includes */}
          <div className="flex flex-col gap-3">
            <span className="text-[10px] font-bold text-[#8c929c] uppercase tracking-[0.7px] leading-4">This class includes</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {classIncludes.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  {item.icon === "video" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><rect x="1.333" y="2.667" width="10" height="10.667" rx="1.5" stroke="#007aff" strokeWidth="1.2" /><path d="M11.333 6.667l3.334-2v6.666l-3.334-2V6.667z" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {item.icon === "download" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M2 10.667v2a1.333 1.333 0 001.333 1.333h9.334A1.333 1.333 0 0014 12.667v-2M4.667 7.333L8 10.667l3.333-3.334M8 10.667V2" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {item.icon === "file" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M9.333 1.333H4A1.333 1.333 0 002.667 2.667v10.666A1.333 1.333 0 004 14.667h8A1.333 1.333 0 0013.333 13.333V5.333l-4-4z" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M9.333 1.333v4h4" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {item.icon === "message" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M14 7.667a5.316 5.316 0 01-.573 2.4 5.4 5.4 0 01-4.827 3 5.316 5.316 0 01-2.4-.573L2 14l1.507-4.2A5.316 5.316 0 012.933 7.4a5.4 5.4 0 013-4.827A5.316 5.316 0 018.333 2h.317a5.387 5.387 0 015.35 5.35v.317z" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {item.icon === "award" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><circle cx="8" cy="6" r="4" stroke="#007aff" strokeWidth="1.2" /><path d="M5.21 9.36L4.667 14l3.333-2 3.333 2-.543-4.64" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  {item.icon === "users" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0"><path d="M10.667 14v-1.333a2.667 2.667 0 00-2.667-2.667H4a2.667 2.667 0 00-2.667 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM14 14v-1.333a2.667 2.667 0 00-2-2.58M10 2.087a2.667 2.667 0 010 5.16" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  <span className="text-sm text-[#0a0c11] leading-5">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Class Schedule */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="18" rx="2" stroke="#5b616d" strokeWidth="1.5" /><path d="M16 2v4M8 2v4M3 10h18" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>}
          title="Class Schedule"
        />
        <div className="px-4 py-3.5">
          {schedule.map((item, i) => (
            <div key={i} className={`flex items-center justify-between py-2 ${i < schedule.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <span className="text-xs text-[#8c929c] leading-4">{item.label}</span>
              <span className="text-sm font-semibold text-[#0a0c11] leading-5">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Instructor */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
          title="Instructor"
        />
        <div className="p-5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0">
              <span className="text-sm font-medium text-white">AK</span>
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-sm font-semibold text-[#0a0c11] leading-5">Aynur Karimova</span>
              <span className="text-xs text-[#5b616d] leading-4">AP Biology · 8 years experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Reviews */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
        <SectionHeader
          icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="#ffc30a" stroke="#ffc30a" strokeWidth="1" /></svg>}
          title="Recent Reviews"
        />
        <div className="px-5 py-3.5 flex flex-col gap-1.5">
          {[
            { name: "Leyla M.", initials: "LM", gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]", text: '"Went from 5 to 7 in 3 months. The exam technique sections are incredible."', stars: 5 },
            { name: "Sara R.", initials: "SR", gradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]", text: '"Best IB Biology resource I\'ve found. Clear, structured, exam-focused."', stars: 5 },
          ].map((review, i) => (
            <div key={i} className={`flex flex-col gap-1.5 px-3.5 py-3 ${i < 1 ? "border-b border-black/[0.03]" : ""}`}>
              <div className="flex items-center gap-2">
                <div className={`w-6 h-6 rounded-full bg-gradient-to-b ${review.gradient} border border-black/[0.03] flex items-center justify-center`}>
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

export default StudentLiveOverviewTab
