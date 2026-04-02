const defaultSteps = [
  { number: 1, title: "Exam Type", desc: "Choose assessment format" },
  { number: 2, title: "Basic Details", desc: "Title, subject, instructions" },
  { number: 3, title: "Questions", desc: "Add and configure questions" },
  { number: 4, title: "Assign Students", desc: "Select who takes the exam" },
  { number: 5, title: "Settings", desc: "Timing, access & grading" },
  { number: 6, title: "Review & Publish", desc: "Final check before going live" },
]

const ExamTypeStepper = ({ currentStep }) => {
  return (
    <div className="flex flex-col">
      {defaultSteps.map((step, i) => {
        const isActive = step.number === currentStep
        const isCompleted = step.number < currentStep
        const isLast = i === defaultSteps.length - 1

        return (
          <div key={step.number} className="flex gap-3 items-start">
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
                ) : step.number}
              </div>
              {!isLast && <div className="w-px h-8 bg-[#e5e7eb]" />}
            </div>
            <div className="flex flex-col pt-1">
              <span className={`text-base font-medium leading-6 ${
                isActive ? "text-[#007aff]" : isCompleted ? "text-[#0a0c11]" : "text-[#5b616d]"
              }`}>{step.title}</span>
              <span className={`text-sm leading-5 ${isActive ? "text-[#5b616d]" : "text-[#8c929c]"}`}>{step.desc}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ExamTypeStepper
