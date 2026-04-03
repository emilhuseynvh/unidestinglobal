import { useState } from "react"

/* ── Stats ── */
const stats = [
  {
    iconBg: "bg-[#e8efff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#4f8ef7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "$2,840",
    label: "Total Earnings",
    badge: "+18%",
    sparkColor: "#bdd0fb",
    sparkPath: "M0 30 C20 28, 40 20, 60 22 C80 24, 100 14, 120 16 C140 18, 160 10, 180 8 C200 6, 220 4, 236 6",
    sparkFill: true,
  },
  {
    iconBg: "bg-[#dff3ff]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#007aff" strokeWidth="1.2" />
        <path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    value: "142",
    label: "Sessions completed",
    badge: "+15%",
    sparkColor: "#93c5fd",
    sparkPath: "M0 28 C30 26, 50 24, 80 20 C100 18, 120 22, 140 16 C160 12, 180 14, 200 8 C220 4, 230 6, 236 4",
    sparkFill: true,
  },
  {
    iconBg: "bg-[#e3f6e2]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M14.167 17.5v-1.667a3.333 3.333 0 00-3.334-3.333H9.167a3.333 3.333 0 00-3.334 3.333V17.5" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="6.667" r="3.333" stroke="#338732" strokeWidth="1.5" />
      </svg>
    ),
    value: "24",
    label: "Active students",
    badge: "+15%",
    sparkColor: "#86efac",
    sparkPath: "M0 30 C30 28, 60 26, 90 24 C120 22, 140 20, 160 18 C180 16, 200 10, 220 6 C230 4, 234 2, 236 2",
    sparkFill: true,
  },
  {
    iconBg: "bg-[#fffbc4]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M2.5 15l3.75-5 3.75 3.75L13.75 7.5 17.5 5" stroke="#e4a000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    value: "$59.7",
    label: "Avg. Earnings / Session",
    badge: "+15%",
    sparkColor: "#fde68a",
    sparkPath: "M0 30 C30 28, 60 24, 90 22 C120 18, 150 16, 180 12 C200 8, 220 6, 236 4",
    sparkFill: true,
  },
]

/* ── Filter Tabs ── */
const filterTabs = [
  { label: "All", count: 10 },
  { label: "Live Courses", count: 2 },
  { label: "Courses", count: 3 },
  { label: "Payout", count: 5 },
]

/* ── Transactions Data ── */
const transactions = [
  { id: 1, title: "IB Biology HL — Lesson 14", subtitle: "Leyla Mammadova", date: "Mar 18", type: "Lesson", amount: "+$20", negative: false, status: "Paid", iconBg: "bg-[#dff3ff]", iconType: "calendar" },
  { id: 2, title: "IB Biology HL Course", subtitle: "86 students enrolled", date: "Mar 15", type: "Payout", amount: "+$4,214", negative: false, status: "Paid", iconBg: "bg-[rgba(64,155,63,0.12)]", iconType: "book" },
  { id: 3, title: "AP Biology Group — Session 7", subtitle: "12 attendees", date: "Mar 10", type: "Live", amount: "+$300", negative: false, status: "Paid", iconBg: "bg-[rgba(240,96,96,0.1)]", iconType: "live" },
  { id: 4, title: "Payout — Mar 7", subtitle: "Visa •••• 4211", date: "Mar 7", type: "Payout", amount: "-$1,240", negative: true, status: "Paid", iconBg: "bg-[#e8efff]", iconType: "dollar" },
  { id: 5, title: "IB Biology HL — Lesson 13", subtitle: "Leyla Mammadova", date: "Mar 4", type: "Lesson", amount: "+$20", negative: false, status: "Paid", iconBg: "bg-[#dff3ff]", iconType: "calendar" },
  { id: 6, title: "GCSE Biology Foundation Course", subtitle: "44 students enrolled", date: "Feb 28", type: "Payout", amount: "+$880", negative: false, status: "Paid", iconBg: "bg-[rgba(64,155,63,0.12)]", iconType: "book" },
  { id: 7, title: "IB Biology HL — Lesson 12 (refund)", subtitle: "Sara Rzayeva", date: "Feb 24", type: "Lesson", amount: "-$20", negative: true, status: "Refunded", iconBg: "bg-[#dff3ff]", iconType: "calendar" },
  { id: 8, title: "Payout — Feb 21", subtitle: "Visa •••• 4211", date: "Feb 21", type: "Payout", amount: "-$2,180", negative: true, status: "Paid", iconBg: "bg-[#e8efff]", iconType: "dollar" },
]

const typeStyles = {
  Lesson: "bg-[rgba(0,122,255,0.12)] text-[#0267d0]",
  Payout: "bg-[rgba(64,155,63,0.12)] text-[#409b3f]",
  Live: "bg-[rgba(240,96,96,0.1)] text-[#f06060]",
}

const payoutTypeStyle = "bg-[#e8efff] text-[#98b0e9]"

const statusStyles = {
  Paid: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
  Refunded: "bg-[rgba(237,64,48,0.12)] text-[#df2917]",
}

/* ── Breakdown Data ── */
const breakdownData = [
  { label: "1-on-1 Lessons", amount: "$5,282", percent: 62, color: "bg-[#f5a623]", dotColor: "bg-[#f5a623]" },
  { label: "Courses", amount: "$2,045", percent: 24, color: "bg-[#4f8ef7]", dotColor: "bg-[#4f8ef7]" },
  { label: "Live Classes", amount: "$1,193", percent: 54, color: "bg-[#a78bfa]", dotColor: "bg-[#a78bfa]" },
]

/* ── Top Earning Sources ── */
const topSources = [
  { rank: 1, title: "IB Biology HL Course", subtitle: "86 students enrolled", amount: "$4,214", iconBg: "bg-[rgba(64,155,63,0.12)]", iconType: "book" },
  { rank: 2, title: "IB Biology HL — Lesson 13", subtitle: "Leyla Mammadova", amount: "$1,120", iconBg: "bg-[#dff3ff]", iconType: "calendar" },
  { rank: 3, title: "GCSE Biology Foundation Course", subtitle: "44 students enrolled", amount: "$1,200", iconBg: "bg-[rgba(64,155,63,0.12)]", iconType: "book" },
  { rank: 4, title: "IB Biology HL — Lesson 12", subtitle: "Sara Rzayeva", amount: "$840", iconBg: "bg-[#dff3ff]", iconType: "calendar" },
  { rank: 5, title: "AP Biology Group — Session 7", subtitle: "12 attendees", amount: "$480", iconBg: "bg-[rgba(64,155,63,0.12)]", iconType: "book" },
]

const TutorEarnings = () => {
  const [activeFilter, setActiveFilter] = useState("All")
  const [filters, setFilters] = useState(filterTabs.map((t) => t.label))

  const removeFilter = (label) => {
    setFilters((prev) => prev.filter((f) => f !== label))
  }

  const visibleTabs = filterTabs.filter((t) => filters.includes(t.label))

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      {/* ── Stats Cards ── */}
      <div className="flex gap-4 overflow-x-auto pb-1 -mb-1 scrollbar-hide">
        {stats.map((s, i) => (
          <div key={i} className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden p-5 flex flex-col justify-between min-w-[220px] flex-1 min-h-[148px]">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <div className={`w-9 h-9 rounded-full ${s.iconBg} flex items-center justify-center`}>{s.icon}</div>
                <div className="bg-[#e3f6e2] flex items-center gap-[3px] px-[7px] py-[3px] rounded-[20px]">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M2 7l3-4 3 4" stroke="#338732" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[11px] font-semibold text-[#338732] leading-none">{s.badge}</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[25px] font-bold text-[#0a0c11] leading-9 tracking-[-0.2px]">{s.value}</span>
                <span className="text-xs text-[#5b616d] leading-4">{s.label}</span>
              </div>
            </div>
            <svg className="w-full h-9" viewBox="0 0 236 36" fill="none" preserveAspectRatio="none">
              {s.sparkFill && (
                <path d={`${s.sparkPath} L236 36 L0 36 Z`} fill={s.sparkColor} fillOpacity="0.3" />
              )}
              <path d={s.sparkPath} stroke={s.sparkColor} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        ))}
      </div>

      {/* ── Header ── */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Earnings</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Track your income, payouts and financial overview</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 11.25l3.75-3.75M9 11.25v-9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Export CSV
        </button>
      </div>

      {/* ── Filter Chips ── */}
      <div className="bg-white border border-black/[0.03] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex flex-wrap items-center gap-1.5">
          {filterTabs.map((tab) => (
            <button
              key={tab.label}
              onClick={() => setActiveFilter(tab.label)}
              className={`h-9 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1 transition-colors ${
                activeFilter === tab.label
                  ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                  : "text-[#8c929c]"
              }`}
            >
              {tab.label}
              <span className="bg-[rgba(0,122,255,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center justify-center">
                {tab.count}
              </span>
            </button>
          ))}
        </div>
        <span className="text-xs text-[#8c929c] whitespace-nowrap">
          Showing <span className="font-medium text-[#5b616d]">12</span> transactions
        </span>
      </div>

      {/* ── Earnings Table ── */}
      <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
        <div className="flex items-center gap-2 px-5 py-4 border-b border-white/[0.07]">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="1" width="12" height="12" rx="2" stroke="#0a0c11" strokeWidth="1.2" />
            <path d="M1 5h12M5 1v12M9 1v12" stroke="#0a0c11" strokeWidth="1.2" />
          </svg>
          <span className="text-[13.5px] font-bold text-[#0a0c11] tracking-[-0.14px]">Earnings</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px]">
            <thead>
              <tr className="bg-[#f9f9fa] border-b border-black/[0.06]">
                <th className="text-left text-[10.5px] font-bold text-[#5c6180] uppercase tracking-[0.735px] px-4 py-2.5">Description</th>
                <th className="text-left text-[10.5px] font-bold text-[#5c6180] uppercase tracking-[0.735px] px-4 py-2.5 w-[100px]">Date</th>
                <th className="text-left text-[10.5px] font-bold text-[#5c6180] uppercase tracking-[0.735px] px-4 py-2.5 w-[120px]">Type</th>
                <th className="text-left text-[10.5px] font-bold text-[#5c6180] uppercase tracking-[0.735px] px-4 py-2.5 w-[110px]">Amount</th>
                <th className="text-left text-[10.5px] font-bold text-[#5c6180] uppercase tracking-[0.735px] px-4 py-2.5 w-[80px]">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((tx) => (
                <tr key={tx.id} className="border-t border-black/[0.04] hover:bg-[#f9f9fa] transition-colors">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-8 h-8 rounded-full ${tx.iconBg} flex items-center justify-center shrink-0`}>
                        {tx.iconType === "calendar" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2.667" width="12" height="11.333" rx="1.5" stroke="#007aff" strokeWidth="1.1" /><path d="M2 5.333h12M5.333 1.333v2.667M10.667 1.333v2.667" stroke="#007aff" strokeWidth="1.1" strokeLinecap="round" /></svg>}
                        {tx.iconType === "book" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.667 12V4a1.333 1.333 0 011.333-1.333h8v9.333" stroke="#338732" strokeWidth="1.1" strokeLinecap="round" /><path d="M4.667 13.333h8V10.667h-8a1.333 1.333 0 000 2.666z" stroke="#338732" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                        {tx.iconType === "live" && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="2" fill="#f06060" /><path d="M4.17 4.17a4 4 0 000 5.66M9.83 4.17a4 4 0 010 5.66" stroke="#f06060" strokeWidth="1.1" strokeLinecap="round" /></svg>}
                        {tx.iconType === "dollar" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333v13.334M11.333 3.333H6.333a2.333 2.333 0 000 4.667h3.334a2.333 2.333 0 010 4.667H4" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                      </div>
                      <div className="flex flex-col gap-px">
                        <span className="text-sm font-semibold text-[#0a0c11] leading-5">{tx.title}</span>
                        <span className="text-xs text-[#5b616d] leading-4">{tx.subtitle}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-xs text-[#8c929c] leading-4">{tx.date}</span>
                  </td>
                  <td className="px-4 py-3">
                    {tx.iconType === "dollar" ? (
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${payoutTypeStyle}`}>{tx.type}</span>
                    ) : tx.type === "Live" ? (
                      <span className="bg-[rgba(240,96,96,0.1)] text-[#f06060] text-[11px] font-bold px-[9px] py-[3px] rounded-[20px] capitalize">{tx.type.toLowerCase()}</span>
                    ) : (
                      <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${typeStyles[tx.type]}`}>{tx.type}</span>
                    )}
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-extrabold tabular-nums leading-4 ${tx.negative ? "text-[#ed4030]" : "text-[#409b3f]"}`}>
                      {tx.amount}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-lg ${statusStyles[tx.status]}`}>{tx.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ── Bottom Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-4">
        {/* Earnings Breakdown */}
        <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#0a0c11" strokeWidth="1.5" />
              <path d="M10 4.667V10l2.333 1.333" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Earnings Breakdown</span>
          </div>
          <div className="px-5 py-[18px] flex flex-col justify-between flex-1">
            <div className="flex flex-col gap-3">
              {breakdownData.map((item, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className={`w-2.5 h-2.5 rounded-[5px] shrink-0 ${item.dotColor}`} />
                  <div className="flex-1 flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <div className="flex-1 flex flex-col gap-[3px]">
                        <span className="text-xs text-[#8c929c] leading-4">{item.label}</span>
                        <div className={`h-[5px] rounded-[3px] opacity-70 ${item.color}`} style={{ width: `${item.percent * 4.7}px`, maxWidth: "100%" }} />
                      </div>
                      <span className="text-sm font-semibold text-[#5b616d] leading-6 tabular-nums ml-2">{item.percent}%</span>
                    </div>
                    <span className="text-xs font-medium text-[#5b616d] leading-4 tabular-nums">{item.amount}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center justify-between pt-[15px] border-t border-black/[0.06] mt-4">
              <span className="text-sm font-semibold text-[#5b616d] leading-6">Total</span>
              <span className="text-sm font-extrabold text-[#008ece] leading-6 tabular-nums">$8,520</span>
            </div>
          </div>
        </div>

        {/* Top Earning Sources */}
        <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
          <div className="flex items-center justify-between px-5 py-4 border-b border-black/[0.06]">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 1.667l2.575 5.216 5.758.84-4.166 4.06.983 5.734L10 14.792l-5.15 2.725.983-5.734-4.166-4.06 5.758-.84L10 1.667z" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-sm font-semibold text-[#0a0c11] leading-6">Top Earning Sources</span>
            </div>
            <button className="text-xs font-semibold text-[#4f8ef7] flex items-center gap-1">
              View all
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M4.5 2.5l3.5 3.5-3.5 3.5" stroke="#4f8ef7" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
          <div className="flex flex-col">
            {topSources.map((src) => (
              <div key={src.rank} className="flex items-center gap-3.5 px-5 py-3 border-b border-white/[0.07] last:border-b-0">
                <span className="text-[12.8px] font-bold text-[#5c6180] min-w-[18px] shrink-0">#{src.rank}</span>
                <div className="flex-1 flex items-center gap-1 min-w-0">
                  <div className={`w-8 h-8 rounded-full ${src.iconBg} flex items-center justify-center shrink-0 mr-1.5`}>
                    {src.iconType === "book" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2.667 12V4a1.333 1.333 0 011.333-1.333h8v9.333" stroke="#338732" strokeWidth="1.1" strokeLinecap="round" /><path d="M4.667 13.333h8V10.667h-8a1.333 1.333 0 000 2.666z" stroke="#338732" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                    {src.iconType === "calendar" && <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="2" y="2.667" width="12" height="11.333" rx="1.5" stroke="#007aff" strokeWidth="1.1" /><path d="M2 5.333h12M5.333 1.333v2.667M10.667 1.333v2.667" stroke="#007aff" strokeWidth="1.1" strokeLinecap="round" /></svg>}
                  </div>
                  <div className="flex flex-col gap-px min-w-0">
                    <span className="text-sm font-semibold text-[#0a0c11] leading-5 truncate">{src.title}</span>
                    <span className="text-xs text-[#5b616d] leading-4">{src.subtitle}</span>
                  </div>
                </div>
                <span className="text-[14.3px] font-bold text-[#f5a623] tabular-nums shrink-0">{src.amount}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorEarnings
