const defaultSteps = [
  { number: 1, title: "Basic Info", desc: "Title, description, level" },
  { number: 2, title: "Cover & Media", desc: "Thumbnail and branding" },
  { number: 3, title: "Curriculum", desc: "Sections and lessons" },
  { number: 4, title: "Pricing", desc: "Free, paid, or subscription" },
  { number: 5, title: "Review & Publish", desc: "Final check and go live" },
]

const CreateCourseStepper = ({ currentStep, steps: customSteps }) => {
  const steps = customSteps || defaultSteps
  return (
    <div className="flex flex-col">
      {steps.map((step, i) => {
        const isActive = step.number === currentStep
        const isCompleted = step.number < currentStep
        const isLast = i === steps.length - 1

        return (
          <div key={step.number} className="flex gap-3 items-start">
            {/* Circle + Line */}
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-medium shrink-0 border ${
                isActive
                  ? "bg-[rgba(0,122,255,0.12)] border-[rgba(0,122,255,0.2)] text-[#007aff]"
                  : isCompleted
                    ? "bg-[#E3EEE4] border-[rgba(64,155,63,0.2)] text-[#338732]"
                    : "bg-[#ececf0] border-black/[0.06] text-[#c3c6cc]"
              }`}>
                {isCompleted ? (
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                ) : (
                  step.number
                )}
              </div>
              {!isLast && (
                <div className="w-px h-8 bg-[#e5e7eb]" />
              )}
            </div>

            {/* Text */}
            <div className="flex flex-col pt-1">
              <span className={`text-base font-medium leading-6 ${
                isActive ? "text-[#007aff]" : isCompleted ? "text-[#0a0c11]" : "text-[#5b616d]"
              }`}>
                {step.title}
              </span>
              <span className={`text-sm leading-5 ${isActive ? "text-[#5b616d]" : "text-[#8c929c]"}`}>
                {step.desc}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default CreateCourseStepper
