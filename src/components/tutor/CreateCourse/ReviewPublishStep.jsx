import { useNavigate } from "react-router"

const reviewSections = [
  {
    title: "Basic Information",
    rows: [
      { label: "Title", value: "IB Biology HL — Complete Exam Preparation 2026" },
      { label: "Description", value: "IB Biology HL — Complete Exam Preparation 2026" },
    ],
  },
  {
    title: "Cover & Media",
    rows: [
      { label: "Cover", value: "🧬 Emoji cover — dark blue background" },
      { label: "Promo video", value: "Not added - optional", muted: true },
    ],
  },
  {
    title: "Curriculum",
    rows: [
      { label: "Structure", value: "4 sections · 12 lessons · 2 quizzes" },
      { label: "Total duration", value: "~6.5 hours of content" },
      { label: "Free previews", badge: { text: "2 previews FREE", color: "bg-[rgba(64,155,63,0.12)] text-[#338732]" } },
    ],
  },
  {
    title: "Pricing",
    rows: [
      { label: "Price", value: "$49 one-time", valueColor: "text-[#007aff]" },
      { label: "Guarantee", badge: { text: "14-day guarantee", color: "bg-[rgba(0,122,255,0.12)] text-[#0267d0]" } },
    ],
  },
]

const ReviewPublishStep = () => {
  const navigate = useNavigate()

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 5 of 5 — Review & Publish</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Ready to go live?</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Review everything before publishing. You can always edit after publishing.</p>
          </div>
          <button onClick={() => navigate("/tutor/courses/published")} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Publish now
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Review Sections */}
      <div className="flex flex-col gap-6">
        {reviewSections.map((section) => (
          <div key={section.title} className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
            {/* Section Header */}
            <div className="bg-[#f9f9fa] border-b border-black/[0.03] px-5 py-4 flex items-center justify-between">
              <span className="text-base font-semibold text-[#0a0c11] leading-6">{section.title}</span>
              <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-4 1 1-4 9.75-9.75z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>

            {/* Rows */}
            <div className="p-5 flex flex-col gap-5">
              {section.rows.map((row, i) => (
                <div key={i} className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-0 px-4 py-2 ${i < section.rows.length - 1 ? "border-b border-black/[0.06]" : ""}`}>
                  <span className="text-sm text-[#5b616d] leading-5 sm:w-[120px] shrink-0">{row.label}</span>
                  <div className="flex-1 min-w-0">
                    {row.badge ? (
                      <span className={`${row.badge.color} h-5 px-1.5 rounded-[6px] text-[10px] font-medium inline-flex items-center`}>{row.badge.text}</span>
                    ) : (
                      <span className={`text-base font-medium leading-6 ${row.valueColor || (row.muted ? "text-[#8c929c]" : "text-[#0a0c11]")}`}>{row.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Info Note */}
      <div className="bg-[rgba(6,177,241,0.12)] rounded-xl p-3 flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="8" stroke="#008ece" strokeWidth="1.5" /><path d="M10 9v4M10 7h.008" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" /></svg>
        <p className="text-sm font-medium text-[#008ece] leading-5">By publishing, your course will be immediately searchable on Unidestin and students can enroll.</p>
      </div>
    </div>
  )
}

export default ReviewPublishStep
