const lessonTypes = [
  { id: "video", title: "Video", desc: "Pre-recorded video" },
  { id: "quiz", title: "Quiz", desc: "Knowledge check" },
  { id: "article", title: "Article", desc: "Written lesson or note" },
  { id: "resource", title: "Resource file", desc: "PDF, slides, notes" },
]

const LessonTypeSelector = ({ selected, onSelect }) => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {lessonTypes.map((type) => (
        <button
          key={type.id}
          onClick={() => onSelect(type.id)}
          className={`p-4 rounded-xl border flex items-start gap-2 text-left ${
            selected === type.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"
          } bg-white`}
        >
          <div className="w-9 h-9 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" fill="#3b82f6" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" fill="#3b82f6" /></svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-[#0a0c11] leading-6">{type.title}</p>
            <p className="text-sm text-[#5b616d] leading-6">{type.desc}</p>
          </div>
          <div className="pt-0.5 shrink-0">
            <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
              selected === type.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"
            }`}>
              {selected === type.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}

export default LessonTypeSelector
