const durations = ["5 min", "10 min", "15 min", "20 min", "30 min"]

const LessonDetailsForm = ({ lessonTitle, setLessonTitle, selectedDuration, setSelectedDuration }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col">
        <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Lesson details</h3>
        <p className="text-sm text-[#8c929c] leading-6">Fill in the details for this quiz lesson.</p>
      </div>

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

      {/* Upload Area */}
      <div className="bg-[#f2f2f4] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex flex-col items-center gap-4">
        <div className="w-[88px] h-[88px] rounded-full bg-[#e8efff] flex items-center justify-center relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><rect x="2.778" y="5.556" width="20.833" height="22.223" rx="3.333" fill="#3b82f6" /><path d="M23.611 13.889l6.945-4.167v13.89l-6.945-4.167v-5.556z" fill="#3b82f6" /></svg>
          <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#98b0e9]" />
        </div>
        <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
          <span className="text-base font-semibold text-[#0a0c11] leading-6 text-center">Upload video</span>
          <div className="text-sm text-[#5b616d] leading-5 text-center">
            <p>Drag & drop your video file here, or click to browse.</p>
            <p>MP4, MOV, AVI (max 500 MB)</p>
          </div>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 15V3M3 7.5L9 1.5l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Browse files
        </button>
      </div>

      {/* Duration */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Duration</label>
          <input
            type="text"
            defaultValue="0"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>
        <div className="flex flex-wrap gap-3 py-1">
          {durations.map((d) => (
            <button
              key={d}
              onClick={() => setSelectedDuration(d)}
              className={`h-10 px-[10px] rounded-[10px] text-sm font-medium transition-colors ${
                selectedDuration === d ? "bg-[#0a0c11] text-white" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"
              }`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LessonDetailsForm
