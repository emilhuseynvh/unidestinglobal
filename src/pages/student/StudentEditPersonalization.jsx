const subjects = [
  "UX Design", "3D Design", "Illustration", "Craft", "Figma", "Design", "Writing",
  "Web & App Design", "Calligraphy & Typography", "Music & Audio", "Photography",
  "Sketching", "Business", "Product Design", "Marketing", "Product", "Architecture & Spaces",
]

const certifications = [
  "Cisco", "AWS Certified Cloud Practitioner", "Project Management Professional (PMP)",
  "AWS Certified Solutions Architect", "Google User Experience",
]

const StudentEditPersonalization = () => {
  return (
    <div className="max-w-[769px] mx-auto w-full">
      <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
            <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 3 of 5 — Already complete</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Personalization</h1>
              <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your account was created successfully. Here's what we have on file from your registration.</p>
            </div>
            <button className="h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="h-px bg-[#e6e6e6]" />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Language of instruction</span>
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">What are your favorite subjects you are interested in?</h2>
          </div>
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-14 pl-4 pr-2 py-2 flex items-center gap-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input type="text" placeholder="Search for subjects" className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0" />
            <button className="h-10 px-[10px] rounded-full border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              Search
            </button>
          </div>
          <div className="flex flex-wrap gap-3 py-1">
            {subjects.map((s) => (
              <button key={s} className="bg-[rgba(242,242,244,0.8)] h-10 px-[10px] rounded-[10px] text-sm font-medium text-[#0a0c11]">{s}</button>
            ))}
          </div>
        </div>

        <div className="h-px bg-[#e6e6e6]" />

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">We recommend certificate courses</span>
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Are you interested in any certifications?</h2>
          </div>
          <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-14 pl-4 pr-2 py-2 flex items-center gap-0.5">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
            <input type="text" placeholder="Search for certificates" className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0" />
            <button className="h-10 px-[10px] rounded-full border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              Search
            </button>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-base text-[#8c929c] leading-6">Popular Certifications</span>
            <div className="flex flex-wrap gap-3 py-1">
              {certifications.map((c) => (
                <button key={c} className="bg-[rgba(242,242,244,0.8)] h-10 px-[10px] rounded-[10px] text-sm font-medium text-[#0a0c11]">{c}</button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentEditPersonalization
