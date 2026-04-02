const QuizDetailsForm = ({ lessonTitle, setLessonTitle }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Lesson details</h3>
        <p className="text-sm text-[#8c929c] leading-6">Fill in the details for this quiz lesson.</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Lesson title</label>
          <input
            type="text"
            value={lessonTitle}
            onChange={(e) => setLessonTitle(e.target.value)}
            placeholder="e.g. DNA Structure"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Number of questions</label>
          <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
            <span className="text-base text-[#8c929c] leading-6 px-1">5 questions</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Passing Score</label>
          <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
            <span className="text-base text-[#8c929c] leading-6 px-1">%</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Time limit</label>
          <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
            <span className="text-base text-[#8c929c] leading-6 px-1">No limit</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default QuizDetailsForm
