const CourseHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3">
      <div className="w-full lg:w-[378px] h-[214px] rounded-[18px] overflow-hidden shrink-0 border-4 border-white shadow-[0px_16px_48px_-4px_rgba(26,26,26,0.2)]">
        <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=220&fit=crop" alt="Course" className="w-full h-full object-cover" />
      </div>
      <div className="bg-white border border-black/[0.06] rounded-[18px] p-6 flex-1 min-w-0">
        <div className="flex flex-col gap-[10px]">
          <div className="flex flex-wrap gap-2">
            <span className="bg-[rgba(64,155,63,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#338732] flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Published
            </span>
            <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">Self-Paced Course</span>
            <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">Advanced</span>
            <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">Biology</span>
          </div>
          <h1 className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">IB Biology HL — Complete Exam Preparation 2026</h1>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[500px]">Comprehensive IB Biology HL preparation covering all six core topics: Cell Biology, Molecular Biology, Genetics, Ecology, Evolution, and Human Physiology.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-[#5b616d] leading-4">
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.667 14v-1.333a2.667 2.667 0 00-2.667-2.667H4a2.667 2.667 0 00-2.667 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM14 14v-1.333a2.667 2.667 0 00-2-2.58M10 2.087a2.667 2.667 0 010 5.16" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              86 students
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14c-1.467-1.067-3.2-1.6-4.933-1.6-.573 0-1.147.06-1.734.178V3.822A9.2 9.2 0 013.067 3.6C4.8 3.6 6.533 4.133 8 5m0 9c1.467-1.067 3.2-1.6 4.933-1.6.587 0 1.16.06 1.734.178V3.822A9.2 9.2 0 0012.933 3.6C11.2 3.6 9.467 4.133 8 5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              24 lessons · 4 sections
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#5b616d" strokeWidth="1.2" /><path d="M8 4v4l2.667 1.333" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" /></svg>
              ~6.5 hours
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333l2.06 4.174 4.607.674-3.334 3.248.787 4.586L8 11.766l-4.12 2.249.787-4.586L1.333 6.18l4.607-.674L8 1.333z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              4.9 · 142 reviews
            </span>
            <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
            <span className="flex items-center gap-1.5">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333v13.334M11.333 3.333H6.333a2.333 2.333 0 000 4.667h3.334a2.333 2.333 0 010 4.667H4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              $49 one-time
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseHero
