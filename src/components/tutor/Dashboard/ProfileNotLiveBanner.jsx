const ProfileNotLiveBanner = () => {
  return (
    <div className="bg-[#dff3ff] rounded-[20px] p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 overflow-hidden relative">
      <img
        src="/img/guest/cta-decoration.svg"
        alt=""
        className="absolute right-[-150px] top-[-277px] w-[590px] h-[322px] rotate-[-17deg] opacity-20 pointer-events-none select-none hidden sm:block"
      />
      <div className="flex gap-6 items-center relative z-10">
        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="shrink-0">
          <path d="M25.15 4.37C25.78 3.48 27.11 3.79 27.11 4.87V20.49H38.14C38.99 20.49 39.48 21.46 38.99 22.16L19.29 47.47C18.66 48.35 17.33 48.05 17.33 46.97V31.35H6.3C5.45 31.35 4.96 30.38 5.45 29.68L25.15 4.37Z" fill="#007aff" />
        </svg>
        <div className="flex flex-col gap-1">
          <span className="text-base font-semibold text-[#0a0c11] leading-6">Your profile isn't live yet</span>
          <p className="text-sm font-medium text-[#5b616d] leading-5">Students can't find you until you complete setup. Tutors who go live within 24 hours earn their first $100 on average within the first 7 days.</p>
        </div>
      </div>
      <button className="relative z-10 h-10 px-2.5 rounded-[10px] bg-black text-sm font-medium text-white flex items-center gap-1.5 shrink-0 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#222] transition-colors">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 13.5l4.5-4.5-4.5-4.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Finish setup now
      </button>
    </div>
  )
}

export default ProfileNotLiveBanner
