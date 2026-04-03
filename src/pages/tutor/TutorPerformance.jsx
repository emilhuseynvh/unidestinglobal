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

const goalTags = [
  { label: "✓ 40+ lessons taught", type: "info" },
  { label: "✓ Avg rating ≥ 4.8", type: "info" },
  { label: "✓ Response rate ≥ 90%", type: "info" },
  { label: "✓ Cancellation < 5%", type: "info" },
  { label: "✓ No-show rate < 1%", type: "info" },
  { label: "⚠ Reschedule rate < 5%", type: "danger" },
  { label: "○ Profile completeness 100%", type: "warning" },
]

const goalTagStyles = {
  info: "bg-[rgba(6,177,241,0.12)] text-[#008ece]",
  danger: "bg-[rgba(237,64,48,0.12)] text-[#df2917]",
  warning: "bg-[rgba(255,195,10,0.12)] text-[#e4a000]",
}

const metrics = [
  { label: "LESSONS TAUGHT", value: "48", goal: "≥ 40", status: "Completed", statusType: "green", valueColor: "text-[#409b3f]" },
  { label: "AVG RATING (90d)", value: "4.9", goal: "≥ 4.8", status: "Completed", statusType: "green", valueColor: "text-[#409b3f]" },
  { label: "RESPONSE RATE", value: "94%", goal: "≥ 90%", status: "Completed", statusType: "green", valueColor: "text-[#409b3f]" },
  { label: "CANCELLATION RATE", value: "2.1%", goal: "< 5%", status: "Completed", statusType: "green", valueColor: "text-[#409b3f]" },
  { label: "NO-SHOW RATE", value: "0.8%", goal: "< 1%", status: "Completed", statusType: "green", valueColor: "text-[#409b3f]" },
  { label: "RESCHEDULE RATE", value: "6.2%", goal: "< 5%", status: "Needs work", statusType: "warning", valueColor: "text-[#ffc30a]" },
  { label: "PROFILE COMPLETENESS", value: "82%", goal: "100%", status: "Incomplete", statusType: "gray", valueColor: "text-[#8c929c]" },
  { label: "TRIAL ACCEPTANCE", value: "72%", goal: "≥ 80%", status: "Below target", statusType: "gray", valueColor: "text-[#8c929c]" },
]


const monthlyData = [
  { month: "Oct", height: 48, past: true },
  { month: "Nov", height: 59, past: true },
  { month: "Dec", height: 53, past: true },
  { month: "Jan", height: 75, past: true },
  { month: "Feb", height: 85, past: true },
  { month: "Mar", height: 128, active: true },
  { month: "Apr", height: 4, future: true },
  { month: "May", height: 4, future: true },
  { month: "Jun", height: 4, future: true },
  { month: "Jul", height: 4, future: true },
  { month: "Aug", height: 4, future: true },
  { month: "Sep", height: 4, future: true },
]

const ratingBars = [
  { stars: 5, percent: 38 },
  { stars: 4, percent: 38 },
  { stars: 3, percent: 38 },
  { stars: 2, percent: 38 },
  { stars: 1, percent: 38 },
]

/* ── Circular Progress Ring ── */

const TutorPerformance = () => {
  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-8">
      {/* ── Super Tutor Progress Banner ── */}
      <div className="bg-white border border-black/[0.06] rounded-[18px] p-[25px] flex flex-wrap gap-y-6 gap-x-9 items-start">
        <div className="flex-1 min-w-[300px]">
          <div className="flex gap-4 items-start">
            <div className="w-16 h-16 rounded-full bg-[rgba(6,177,241,0.12)] flex items-center justify-center shrink-0">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 4l2.472 6.528H26l-6 4.944L22.472 22 16 17.556 9.528 22 12 15.472l-6-4.944h7.528L16 4z" stroke="#008ece" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 flex-1">
              <span className="text-lg font-semibold text-[#0a0c11] leading-6">Super Tutor Progress — 5 of 7 goals met</span>
              <span className="text-sm text-[#5b616d] leading-5">Complete 2 more goals to earn your Super Tutor badge and boost search visibility by up to 40%.</span>
              <div className="flex flex-wrap gap-[11px] mt-1">
                {goalTags.map((tag, i) => (
                  <span key={i} className={`h-6 px-2 rounded-lg text-xs font-medium inline-flex items-center ${goalTagStyles[tag.type]}`}>
                    {tag.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-[126px] shrink-0 flex flex-col gap-[9px] items-end">
          <div className="flex flex-col gap-0.5 items-end w-full">
            <div className="flex items-baseline justify-end w-full">
              <span className="text-[42px] font-semibold text-[#007aff] leading-[48px] tracking-[-0.2px]">71</span>
              <span className="text-lg text-[#5b616d]">%</span>
            </div>
            <span className="text-xs text-[#5b616d] leading-4 text-right pb-[5px]">Super Tutor score</span>
            <div className="w-full h-[5px] bg-[#f2f2f4] rounded-[3px] overflow-hidden">
              <div className="h-full bg-[#007aff] rounded-[3px]" style={{ width: "71%" }} />
            </div>
          </div>
          <button className="w-full h-8 rounded-lg bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-xs font-medium text-white flex items-center justify-center shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            Complete profile
          </button>
        </div>
      </div>

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

      {/* ── Super Tutor Metrics (Last 90 Days) ── */}
      <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
        <div className="flex items-center justify-between px-5 py-[15px] border-b border-black/[0.06]">
          <div className="flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="10" cy="10" r="8" stroke="#0a0c11" strokeWidth="1.5" />
              <path d="M10 5v5l3 1.667" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Super Tutor Metrics (Last 90 Days)</span>
          </div>
          <span className="text-xs text-[#5b616d] leading-4">Rolling 90-day window</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={i} className="h-[118px] relative border-b border-r border-black/[0.06] p-[18px]">
              <span className="text-xs font-semibold text-[#5b616d] leading-4">{m.label}</span>
              <div className="mt-[3px]">
                <span className={`text-[22px] font-semibold leading-7 tracking-[-0.2px] ${m.valueColor}`}>{m.value}</span>
              </div>
              <div className="mt-[3px]">
                <span className="text-[11px] text-[#5c6180]">Goal: </span>
                <span className="text-[11px] font-bold text-[#9297ad]">{m.goal}</span>
              </div>
              <div className="mt-[2px]">
                <span className={`text-[10px] font-semibold px-2 py-[3px] rounded-[20px] inline-flex items-center leading-4 ${
                  m.statusType === "green" ? "bg-[rgba(64,155,63,0.12)] text-[#409b3f]" :
                  m.statusType === "warning" ? "bg-[rgba(255,195,10,0.12)] text-[#ffc30a]" :
                  "bg-[#dddfe4] text-[#5b616d]"
                }`}>
                  {m.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Bottom Section ── */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {/* Sessions per Month */}
        <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-[15px] border-b border-black/[0.06]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 16V9M8 16V4M12 16V7M16 16V11" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Sessions per Month</span>
          </div>
          <div className="px-5 py-[18px]">
            <div className="flex items-end gap-1.5 h-[140px] px-1">
              {monthlyData.map((d, i) => (
                <div key={i} className="flex-1 flex flex-col items-center justify-end h-full">
                  <div
                    className={`w-full rounded-t-[5px] ${
                      d.active ? "bg-[#06b1f1]" :
                      d.past ? "bg-[rgba(6,177,241,0.2)] opacity-55" :
                      "bg-[#c3c6cc] opacity-30"
                    }`}
                    style={{ height: d.height }}
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-1.5 px-1 pt-[5px]">
              {monthlyData.map((d, i) => (
                <div key={i} className="flex-1 text-center">
                  <span className={`text-[10px] font-medium ${d.active ? "font-bold text-[#06b1f1]" : "text-[#5b616d]"}`}>{d.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Rating */}
        <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden flex flex-col">
          <div className="flex items-center gap-2 px-5 py-[15px] border-b border-black/[0.06]">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 1.667l2.575 5.216 5.758.84-4.166 4.06.983 5.734L10 14.792l-5.15 2.725.983-5.734-4.166-4.06 5.758-.84L10 1.667z" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold text-[#0a0c11] leading-6">Rating</span>
          </div>
          <div className="p-5 flex gap-4 items-start flex-1">
            <div className="flex flex-col items-center gap-1 shrink-0">
              <span className="text-[42px] font-bold text-[#ffc30a] leading-[48px] tracking-[-0.2px]">4.9</span>
              <span className="text-base text-[#0a0c11] leading-6">★★★★★</span>
              <span className="text-xs text-[#8c929c] leading-4">142 reviews</span>
            </div>
            <div className="flex-1 flex flex-col gap-1 justify-center">
              {ratingBars.map((bar) => (
                <div key={bar.stars} className="flex items-center gap-1">
                  <span className="text-[10px] font-medium text-[#8c929c] w-2.5 text-right shrink-0 leading-4">{bar.stars}</span>
                  <div className="flex-1 h-1.5 bg-[#f2f2f4] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#ffc30a]" style={{ width: `${bar.percent}%` }} />
                  </div>
                  <span className="text-[10px] font-medium text-[#8c929c] w-7 text-right tabular-nums shrink-0 leading-4">{bar.percent} %</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorPerformance
