const GetFirstStudent = () => {
  return (
    <div className="bg-white border border-white/[0.07] rounded-[18px] overflow-hidden">
      <div className="border-b border-black/[0.03] px-6 py-5 flex flex-col gap-1">
        <h2 className="text-base font-semibold text-[#0a0c11] leading-6">Get your first student</h2>
        <p className="text-sm text-[#5b616d] leading-5">Once your profile is live, share your unique link everywhere — social media, WhatsApp, or email.</p>
      </div>

      <div className="flex flex-col items-center gap-5 px-6 pt-8 pb-10">
        <div className="relative">
          <div className="w-[100px] h-[100px] rounded-full bg-[#f2f2f4] flex items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M26.667 35v-3.333a6.667 6.667 0 00-6.667-6.667H10a6.667 6.667 0 00-6.667 6.667V35M15 18.333a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM36.667 35v-3.333a6.667 6.667 0 00-5-6.45M25 5.117a6.667 6.667 0 010 12.9" stroke="#c3c6cc" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="absolute -inset-2 rounded-[58px] border border-dashed border-black/[0.09]" />
        </div>

        <div className="flex flex-col items-center gap-1.5 max-w-[376px] text-center">
          <span className="text-base font-extrabold text-[#0a0c11] leading-6">No students yet</span>
          <p className="text-sm text-[#5b616d] leading-5">
            Your profile isn't live until you complete setup. Finish the steps above and students will start finding you.
          </p>
        </div>

        <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-12 sm:h-14 pl-3 sm:pl-4 pr-2 py-2 flex items-center gap-0.5 w-full max-w-[424px] overflow-hidden">
          <span className="flex-1 min-w-0 text-xs sm:text-sm font-medium text-[#5b616d] leading-5 px-1 sm:px-2 truncate">unidestin.io/tutor/chinara-n</span>
          <button className="h-8 sm:h-10 px-2 sm:px-2.5 rounded-full bg-[#007aff] text-xs sm:text-sm font-medium text-white flex items-center gap-1 sm:gap-1.5 shrink-0 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors whitespace-nowrap">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-4 h-4 sm:w-[18px] sm:h-[18px]"><rect x="5" y="2" width="9" height="9" rx="1.5" stroke="white" strokeWidth="1.2" /><path d="M3.5 6H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" /></svg>
            Copy link
          </button>
        </div>

        <div className="flex items-center gap-0 w-[180px] sm:w-[200px]">
          <div className="h-px bg-black/[0.06] flex-1" />
          <span className="text-xs text-[#5b616d] leading-4 px-3 whitespace-nowrap">or share via</span>
          <div className="h-px bg-black/[0.06] flex-1" />
        </div>

        <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-2.5">
          {[
            { label: "Telegram", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 2.25L8.25 9.75M15.75 2.25l-4.5 13.5L8.25 9.75m7.5-7.5L2.25 6.75l6 3" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            { label: "Whatsapp", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12 6.75a4.5 4.5 0 00-7.5 3.375c0 .825.225 1.6.612 2.263L4.5 15l2.7-.6A4.48 4.48 0 009 15a4.5 4.5 0 003-7.875" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
            { label: "Email", icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 2.25L8.25 9.75M15.75 2.25l-4.5 13.5L8.25 9.75m7.5-7.5L2.25 6.75l6 3" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg> },
          ].map((item) => (
            <button key={item.label} className="h-10 px-2.5 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors">
              {item.icon}
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GetFirstStudent
