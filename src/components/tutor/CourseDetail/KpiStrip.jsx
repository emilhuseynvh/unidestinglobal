const kpis = [
  { value: "$4,214", label: "Total revenue", change: "+18% vs last month", color: "text-[#007aff]" },
  { value: "86", label: "Enrolled students", change: "+12 this month", color: "text-[#9cda9b]" },
  { value: "68%", label: "Avg completion", change: "+4% vs last month", color: "text-[#5caaff]" },
  { value: "4.9", label: "Average rating", change: "142 reviews", color: "text-[#ffc30a]" },
  { value: "3.2%", label: "Refund rate", change: "Below average", color: "text-[#ff9a90]" },
]

const KpiStrip = () => {
  return (
    <div className="bg-white border-t border-black/[0.06] rounded-[18px] flex flex-wrap">
      {kpis.map((kpi, i) => (
        <div key={i} className={`flex-1 min-w-[180px] px-5 py-4 flex flex-col gap-2 ${i < kpis.length - 1 ? "border-r border-black/[0.06]" : ""}`}>
          <div className="flex flex-col gap-0.5">
            <span className={`text-lg font-extrabold leading-6 ${kpi.color}`}>{kpi.value}</span>
            <span className="text-xs text-[#5b616d] leading-4">{kpi.label}</span>
          </div>
          <span className="bg-[rgba(64,155,63,0.12)] self-start px-1.5 py-0.5 rounded-[20px] text-[10px] font-semibold text-[#409b3f] leading-4 flex items-center gap-1">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 7.5V2.5M2.5 4.583L5 2.083l2.5 2.5" stroke="#409b3f" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            {kpi.change}
          </span>
        </div>
      ))}
    </div>
  )
}

export default KpiStrip
