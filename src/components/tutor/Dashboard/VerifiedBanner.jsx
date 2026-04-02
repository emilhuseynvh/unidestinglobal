const VerifiedBanner = () => {
  return (
    <div className="bg-[#121c20] border border-white/[0.13] rounded-3xl px-6 sm:px-11 py-8 sm:py-10 overflow-hidden">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-[18px] h-0.5 rounded-full bg-[#0267d0]" />
        <span className="text-[11px] font-extrabold text-[#0267d0] uppercase tracking-[2px] leading-3">Getting started</span>
      </div>
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-10">
        <div className="flex flex-col gap-3">
          <div>
            <p className="text-[24px] sm:text-[32px] font-bold text-[#eef0f6] leading-10 tracking-[-0.2px]">You're registered.</p>
            <p className="text-[24px] sm:text-[32px] font-bold text-[#eef0f6] leading-10 tracking-[-0.2px]">Now let's get you</p>
            <p className="text-[24px] sm:text-[32px] font-bold text-[#0267d0] leading-10 tracking-[-0.2px]">your first student.</p>
          </div>
          <p className="text-sm leading-5 max-w-[460px]">
            <span className="text-white/70">Tutors who complete their profile and set their availability within 24 hours are </span>
            <span className="font-extrabold text-white">3× more likely</span>
            <span className="text-white/70"> to receive a booking in their first week.</span>
          </p>
          <button className="h-10 px-3 rounded-[10px] bg-[#007aff] text-sm font-medium text-white self-start flex items-center gap-1.5 mt-3 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.122 2.122 0 013 3L5.625 15.375l-4.125 1.125 1.125-4.125L12.75 2.25z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Complete My Profile
          </button>
        </div>

        <div className="flex flex-col items-center gap-2.5 shrink-0 self-center lg:self-auto">
          <div className="relative w-[140px] h-[140px]">
            <svg className="w-[140px] h-[140px] -rotate-90" viewBox="0 0 140 140">
              <circle cx="70" cy="70" r="60" stroke="#1a2a30" strokeWidth="8" fill="none" />
              <circle cx="70" cy="70" r="60" stroke="#007aff" strokeWidth="8" fill="none" strokeDasharray="377" strokeDashoffset="314" strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-[26.5px] font-bold text-white leading-none">1/6</span>
              <span className="text-[10px] text-white uppercase tracking-[0.5px] mt-1">Setup done</span>
            </div>
          </div>
          <div className="flex gap-4">
            {[
              { value: "—", label: "Students" },
              { value: "—", label: "Lessons" },
              { value: "—", label: "Earnings" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-0.5">
                <span className="text-lg font-bold text-white leading-none">{stat.value}</span>
                <span className="text-[10px] text-white">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default VerifiedBanner
