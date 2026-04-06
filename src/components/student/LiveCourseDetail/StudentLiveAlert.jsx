const StudentLiveAlert = () => {
  return (
    <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-[28px] p-3">
      <div className="bg-white rounded-2xl p-3 flex flex-col gap-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
        <div className="w-8 h-8 rounded-full bg-[rgba(237,64,48,0.12)] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="1.667" y="3.333" width="12.5" height="13.334" rx="2" fill="#ed4030" /><path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" fill="#ed4030" /></svg>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-base font-semibold text-[#0a0c11] leading-6">
            AP Biology Weekly Group — Spring 2026 — Session #7 is  <span className="text-[#df2917]">● LIVE NOW</span>
          </p>
          <p className="text-sm text-[#8c929c] leading-5">Genetics & Inheritance · Aynur Karimova · 12/15 students joined · Started 5 min ago</p>
        </div>
        <div className="flex items-center justify-end">
          <button className="h-8 px-3 rounded-lg bg-[#ed4030] backdrop-blur-[12px] border border-black/[0.09] text-xs font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.333" y="2.667" width="10" height="10.667" rx="1.5" stroke="white" strokeWidth="1.2" /><path d="M11.333 6.667l3.334-2v6.666l-3.334-2V6.667z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Join Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentLiveAlert
