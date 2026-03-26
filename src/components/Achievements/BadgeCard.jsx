const BadgeCard = ({ badge }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-[#f9fafb] aspect-[4/3] flex items-center justify-center p-6 sm:p-8">
        <div className="w-full h-full flex items-center justify-center">
          <div className={`size-32 sm:size-40 rounded-full flex items-center justify-center ${badge.bgColor}`}>
            <div className="flex flex-col items-center gap-1 text-center">
              {badge.icon}
              <p className="text-[14px] sm:text-[16px] font-bold text-white leading-tight uppercase tracking-wide">
                {badge.label}
              </p>
              {badge.sublabel && (
                <p className="text-[10px] sm:text-[11px] font-medium text-white/80">{badge.sublabel}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-0.5">
        <p className="text-[14px] sm:text-[16px] font-medium text-[#181d27] leading-6">{badge.title}</p>
        <p className="text-[12px] sm:text-[13px] text-[#717680] leading-5">Issued On : {badge.issuedOn}</p>
      </div>
    </div>
  )
}

export default BadgeCard
