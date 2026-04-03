const InfoIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="#8c929c" strokeWidth="1" />
    <path d="M6 4.5V6.5" stroke="#8c929c" strokeWidth="1" strokeLinecap="round" />
    <circle cx="6" cy="8.5" r="0.5" fill="#8c929c" />
  </svg>
)

const stats = [
  {
    iconBg: "bg-[#e8efff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "$0",
    label: "Monthly earnings",
    hint: "Earnings unlock after your first completed lesson",
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "0",
    label: "Active students",
    hint: "Share your profile link to attract your first student",
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke="#3b82f6" strokeWidth="1.5" /><path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    value: "0",
    label: "Sessions completed",
    hint: "Set availability so students can book you",
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667l2.575 5.216 5.758.842-4.166 4.06.983 5.732L10 14.708l-5.15 2.809.983-5.732-4.166-4.06 5.758-.842L10 1.667z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "–",
    label: "Average rating",
    hint: "Rating appears after students leave reviews",
  },
]

const StatsCards = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col">
        <h2 className="text-base font-semibold text-[#0a0c11] leading-6">Your stats will appear here</h2>
        <p className="text-sm text-[#5b616d] leading-5">Complete your profile to unlock analytics and start tracking your growth</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] p-5 flex flex-col items-center overflow-hidden">
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-4">
                <div className={`w-9 h-9 rounded-full ${stat.iconBg} flex items-center justify-center`}>
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <span className="text-[25px] font-bold text-[#c3c6cc] leading-9 tracking-[-0.2px]">{stat.value}</span>
                  <span className="text-xs text-[#c3c6cc] leading-4">{stat.label}</span>
                </div>
              </div>
              <div className="bg-[#f9f9fa] border border-dashed border-black/[0.06] rounded-lg px-2 py-2.5 flex gap-2 items-start">
                <div className="shrink-0 mt-[3px]">
                  <InfoIcon />
                </div>
                <span className="text-xs text-[#5b616d] leading-4">{stat.hint}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StatsCards
