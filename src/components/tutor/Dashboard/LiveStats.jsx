const stats = [
  {
    iconBg: "bg-[#e8efff]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    topColor: "from-[#3b82f6] to-[#93c5fd]",
    value: "$2,840",
    label: "Monthly earnings",
    change: "+18%",
    changeBg: "bg-[#f0fdf4]",
    changeColor: "text-[#22c55e]",
    chartColor: "#3b82f6",
    extra: [
      { value: "$340", label: "This week" },
      { value: "$18,240", label: "All time" },
    ],
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM17.5 17.5v-1.667a3.333 3.333 0 00-2.5-3.225M12.5 2.608a3.333 3.333 0 010 6.45" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    topColor: "from-[#22c55e] to-[#86efac]",
    value: "24",
    label: "Active students",
    change: "+5%",
    changeBg: "bg-[#f0fdf4]",
    changeColor: "text-[#22c55e]",
    chartColor: "#22c55e",
    extra: [
      { value: "3 new", label: "This month" },
      { value: "89%", label: "Retention" },
    ],
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke="#007aff" strokeWidth="1.5" /><path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    topColor: "from-[#007aff] to-[#93c5fd]",
    value: "48",
    label: "Sessions this month",
    change: "+15%",
    changeBg: "bg-[#f0fdf4]",
    changeColor: "text-[#22c55e]",
    chartColor: "#007aff",
    extra: [
      { value: "3", label: "Today" },
      { value: "96%", label: "Completion" },
    ],
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 1.667l2.575 5.216 5.758.842-4.166 4.06.983 5.732L10 14.708l-5.15 2.809.983-5.732-4.166-4.06 5.758-.842L10 1.667z" fill="#f59e0b" stroke="#f59e0b" strokeWidth="1" /></svg>,
    topColor: "from-[#f59e0b] to-[#fde68a]",
    value: "4.9",
    label: "Average rating",
    change: "+0.2",
    changeBg: "bg-[#f0fdf4]",
    changeColor: "text-[#22c55e]",
    chartColor: "#f59e0b",
    extra: [
      { value: "142", label: "Reviews" },
      { value: "98%", label: "Positive" },
    ],
  },
]

const MiniChart = ({ color }) => (
  <svg width="100%" height="36" viewBox="0 0 236 36" fill="none" preserveAspectRatio="none">
    <path d="M0 30C20 28 40 24 60 20C80 16 100 22 120 18C140 14 160 8 180 12C200 16 220 6 236 4" stroke={color} strokeWidth="2" fill="none" strokeLinecap="round" />
    <path d="M0 30C20 28 40 24 60 20C80 16 100 22 120 18C140 14 160 8 180 12C200 16 220 6 236 4V36H0Z" fill={`${color}15`} />
  </svg>
)

const LiveStats = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="bg-white border border-white/[0.07] rounded-[18px] overflow-hidden flex flex-col">
          <div className={`h-0.5 w-full bg-gradient-to-r ${stat.topColor}`} />
          <div className="p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className={`w-9 h-9 rounded-full ${stat.iconBg} flex items-center justify-center`}>{stat.icon}</div>
              <span className={`text-[11px] font-semibold ${stat.changeColor} ${stat.changeBg} px-1.5 py-0.5 rounded flex items-center gap-1`}>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {stat.change}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{stat.value}</span>
              <span className="text-xs text-[#8c929c] leading-4">{stat.label}</span>
            </div>
            <MiniChart color={stat.chartColor} />
            <div className="flex items-center gap-4 border-t border-black/[0.03] pt-3">
              {stat.extra.map((e, j) => (
                <div key={j} className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-[#0a0c11] leading-5">{e.value}</span>
                  <span className="text-[10px] text-[#8c929c] leading-3">{e.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LiveStats
