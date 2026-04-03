import { useNavigate } from "react-router"

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-3.75 1.05L3.3 12.3l9.45-10.05z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const InfoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8" stroke="#008ece" strokeWidth="1.5" />
    <path d="M10 9v4M10 7h.008" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const ReviewCard = ({ title, onEdit, children }) => (
  <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
    <div className="bg-[#f9f9fa] border-b border-black/[0.03] px-5 py-4 flex items-center justify-between">
      <span className="text-base font-semibold text-[#0a0c11] leading-6">{title}</span>
      {onEdit && (
        <button onClick={onEdit} className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
          <EditIcon />
        </button>
      )}
    </div>
    <div className="p-5 flex flex-col gap-5">
      {children}
    </div>
  </div>
)

const ReviewRow = ({ label, value, isLast }) => (
  <div className={`flex items-center justify-between px-4 py-2 ${!isLast ? "border-b border-black/[0.06]" : ""}`}>
    <span className="text-sm text-[#5b616d] leading-5">{label}</span>
    <span className="text-base font-medium text-[#0a0c11] leading-6">{value}</span>
  </div>
)

const ReviewPublishStep = ({ onGoToStep }) => {
  const navigate = useNavigate()

  const handlePublish = () => {
    navigate("/tutor/exams/published")
  }

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 6 of 6 — Review & Publish</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Ready to publish?</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Check everything before making the exam available to students.</p>
          </div>
          <button onClick={handlePublish} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Publish Exam
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Review Cards */}
      <div className="flex flex-col gap-6">
        {/* Exam Details */}
        <ReviewCard title="Exam Details" onEdit={() => onGoToStep?.(2)}>
          <ReviewRow label="Title" value="IB Biology HL — Midterm Exam 2026" />
          <ReviewRow label="Type" value="Midterm Exam" />
          <ReviewRow label="Subject" value="IB Biology HL" isLast />
        </ReviewCard>

        {/* Questions */}
        <ReviewCard title="Questions" onEdit={() => onGoToStep?.(3)}>
          <ReviewRow label="Total questions" value="4" />
          <ReviewRow label="Total marks" value="10 Points" />
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm text-[#5b616d] leading-5">Types</span>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[rgba(64,155,63,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#338732] inline-flex items-center">1 MCQ</span>
              <span className="bg-[rgba(6,177,241,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#008ece] inline-flex items-center">1 T/F</span>
              <span className="bg-[rgba(237,64,48,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#df2917] inline-flex items-center">1 Short answer</span>
              <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] inline-flex items-center">1 Essay</span>
            </div>
          </div>
        </ReviewCard>

        {/* Students Assigned */}
        <ReviewCard title="Students Assigned" onEdit={() => onGoToStep?.(4)}>
          <ReviewRow label="Assigned to" value="4 students" isLast />
        </ReviewCard>

        {/* Settings */}
        <ReviewCard title="Settings" onEdit={() => onGoToStep?.(5)}>
          <ReviewRow label="Scheduled for" value="April 15, 2026 at 2:00 PM" />
          <ReviewRow label="Time limit" value="60 minutes" />
          <ReviewRow label="Passing score" value="60 %" />
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm text-[#5b616d] leading-5">Auto-grading</span>
            <span className="text-base font-medium text-[#409b3f] leading-6">&#10003; Enabled for MCQ & T/F</span>
          </div>
        </ReviewCard>
      </div>

      {/* Info Note */}
      <div className="bg-[rgba(6,177,241,0.12)] rounded-xl p-3 flex items-center gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]">
        <div className="shrink-0">
          <InfoIcon />
        </div>
        <p className="text-sm font-medium text-[#008ece] leading-5">
          Once published, the exam will become visible to assigned students and will activate automatically at the scheduled time. You can still edit questions until 1 hour before the exam starts.
        </p>
      </div>
    </div>
  )
}

export default ReviewPublishStep
