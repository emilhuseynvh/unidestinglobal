const StudentEditBio = () => {
  return (
    <div className="max-w-[769px] mx-auto w-full">
      <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
            <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 2 of 5 — Not completed</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Write your bio</h1>
              <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your bio is the first thing students read. Be specific about your qualifications, teaching style, and who you help best.</p>
            </div>
            <button className="h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="h-px bg-[#e6e6e6]" />

        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-1 px-0.5">
            <span className="text-base font-medium text-[#5b616d] leading-6">Your Bio</span>
            <span className="text-base text-[#8c929c] leading-6">(0/600)</span>
          </div>
          <div className="border border-black/[0.06] rounded-xl p-3 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <textarea
              defaultValue="Hi, I'm Chinara - a Biology tutor specialising in IB HL, AP. I hold BSc in Molecular Biology from Baku State University and have 4 years of teaching experience."
              className="w-full min-h-[104px] text-sm text-[#0a0c11] leading-6 outline-none px-0.5 resize-none"
            />
          </div>
          <span className="text-sm text-[#8c929c] leading-5 px-0.5">Minimum 80 characters. Write in the first person — "I help students..." not "She helps..."</span>
        </div>
      </div>
    </div>
  )
}

export default StudentEditBio
