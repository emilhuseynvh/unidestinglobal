const scholarships = [
  {
    name: "Clarendon Scholarship",
    rating: "4.5",
    amount: "Full tuition + living expenses",
    description: "Oxford's flagship scholarship covering all fees and a generous living grant. Open to all international students based on academic excellence.",
    deadline: "Deadline: Jan 2026",
    type: "Merit-based",
    awarded: "~140 awarded/year",
  },
  {
    name: "Commonwealth Scholarship",
    rating: "4.5",
    amount: "Full tuition + stipend",
    description: "For students from Commonwealth countries. Covers tuition, airfare, and monthly stipend for living costs.",
    deadline: "Deadline: Jan 2026",
    type: "Need-based",
    awarded: "~80 awarded/year",
  },
  {
    name: "Oxford-Weidenfeld Scholarship",
    rating: "4.5",
    amount: "Full tuition + £15,834 living",
    description: "Supports outstanding students from transitioning and emerging economies to pursue graduate studies at Oxford.",
    deadline: "Deadline: Jan 2026",
    type: "Merit-based",
    awarded: "~40 awarded/year",
  },
]

const ProgramScholarships = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[20px] font-semibold text-black leading-7">Available Scholarships</h2>
      <div className="flex flex-col gap-4">
        {scholarships.map((s) => (
          <div key={s.name} className="border border-[#e9eaeb] rounded-xl p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5zM6 12v5c3 3 9 3 12 0v-5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[16px] font-semibold text-black leading-6">{s.name}</span>
                  <span className="text-[14px] font-normal text-[#666] leading-5">{s.amount}</span>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 1.333l2.06 4.18 4.607.673-3.334 3.247.787 4.587L8 11.847l-4.12 2.173.787-4.587L1.333 6.186l4.607-.673L8 1.333z" fill="#F5B731"/>
                </svg>
                <span className="text-[14px] font-medium text-[#333] leading-5">{s.rating}</span>
              </div>
            </div>
            <p className="text-[14px] font-normal text-[#4d4d4d] leading-[1.5]">{s.description}</p>
            <div className="flex items-center gap-4 text-[14px] font-medium text-[#666] leading-[1.4]">
              <span>{s.deadline}</span>
              <span>{s.type}</span>
              <span>{s.awarded}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramScholarships
