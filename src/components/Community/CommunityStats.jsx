const CardIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
    <rect x="3" y="6" width="26" height="18" rx="3" stroke="#1a1a2e" strokeWidth="2" />
    <path d="M3 12h26M8 18h6M20 17l2 2 4-4" stroke="#1a1a2e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const stats = [
  { label: "Members", value: "25.000+", iconBg: "bg-[#b9cbf5]" },
  { label: "Discussions", value: "3.400", iconBg: "bg-[#d5f1db]" },
  { label: "Articles", value: "850", iconBg: "bg-[#a2d6f0]" },
  { label: "Study groups", value: "120", iconBg: "bg-[#edd780]" },
]

const CommunityStats = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-[#f6f9fb] rounded-2xl px-3 py-4 flex flex-col items-center gap-6">
          <div className={`w-16 h-16 rounded-full ${stat.iconBg} flex items-center justify-center`}>
            <CardIcon />
          </div>
          <div className="flex flex-col items-center text-center gap-1">
            <span className="text-xs text-[#666]">{stat.label}</span>
            <span className="text-base font-semibold text-black leading-6">{stat.value}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default CommunityStats
