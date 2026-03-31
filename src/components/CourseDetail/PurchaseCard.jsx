const UsersIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GraduationIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 15l-7-4.5L12 6l7 4.5L12 15z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 12.5v4.5c0 1.657 2.239 3 5 3s5-1.343 5-3v-4.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ClockIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="#333" strokeWidth="1.5" />
    <path d="M12 6v6l4 2" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MobileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="5" y="3" width="14" height="18" rx="2" stroke="#333" strokeWidth="1.5" />
    <path d="M12 18h.01" stroke="#333" strokeWidth="2" strokeLinecap="round" />
  </svg>
)

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 3l14 9-14 9V3z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const AudioIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 6v12M8 9v6M16 9v6M4 11v2M20 11v2" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const features = [
  { Icon: UsersIcon, text: "2949 students" },
  { Icon: GraduationIcon, text: "15 lectures" },
  { Icon: ClockIcon, text: "12h 28m" },
  { Icon: MobileIcon, text: "Access on mobile and TV" },
  { Icon: PlayIcon, text: "Full lifetime access" },
  { Icon: AudioIcon, text: "Audio description in existing audio" },
]

const PurchaseCard = () => {
  return (
    <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 py-5 flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <span className="text-[32px] font-semibold text-[#333] leading-[1.4]">$14.99</span>
        <div className="flex items-center gap-1">
          <span className="px-2 py-1.5 rounded-[15px] border-[0.5px] border-[#e6e6e6] text-xs text-[#333]">SALE</span>
          <span className="text-xs text-[#ea4335]">This offer ends in 16h : 41m : 10s</span>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <button className="h-12 w-full rounded-xl bg-[#007aff] text-white text-base font-medium shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
          Add to cart
        </button>
        <button className="h-12 w-full rounded-xl border border-black/[0.06] bg-[#f2f2f4]/80 text-base font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ec] transition-colors">
          Add to wishlist
        </button>
        <div className="h-px bg-[#e6e6e6] mt-4" />
      </div>

      <div className="flex flex-col gap-4 px-4">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-2">
            <f.Icon />
            <span className="text-base text-[#333] leading-[1.4]">{f.text}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PurchaseCard
