const ctaStats = [
  { value: "70%", label: "Revenue Share" },
  { value: "$500", label: "Avg. Monthly" },
  { value: "320+", label: "Authors" },
]

const LibraryCTA = () => {
  return (
    <section className="py-16">
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 border border-[#e9eaeb] rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-5">
          <div className="size-14 rounded-full bg-[#e8f4fd] flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
              <path d="M4.667 19.833V8.167A2.333 2.333 0 017 5.833h14a2.333 2.333 0 012.333 2.334v11.666A2.333 2.333 0 0121 22.167H7a2.333 2.333 0 01-2.333-2.334z" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.333 10.5h9.334M9.333 14h5.834" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-[24px] sm:text-[28px] font-bold text-[#1a1a1a] leading-tight">
              Share Your Knowledge
            </h3>
            <p className="text-[16px] font-normal text-[#666] leading-[1.4] max-w-[400px]">
              Upload educational materials and earn passive income. PDFs, worksheets, e-books, videos — reach thousands of students.
            </p>
          </div>
          <button className="bg-[#007aff] text-white rounded-full px-6 py-3.5 text-[16px] font-semibold leading-6 hover:bg-[#0066d6] transition-colors">
            Upload resource
          </button>
        </div>

        <div className="flex-1 bg-[#d4edf8] rounded-2xl p-8 sm:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-4">
            <span className="bg-[#d1fadf] text-[#039855] text-[14px] font-medium leading-5 px-3 py-1 rounded-full self-start">
              Tutor Earnings
            </span>
            <h3 className="text-[24px] sm:text-[32px] font-bold text-[#1a1a1a] leading-tight">
              Earn from every Download
            </h3>
            <p className="text-[16px] font-normal text-[#333] leading-[1.4]">
              Set your price for premium content. Free resources boost your profile visibility. Average top authors earn $500+/month.
            </p>
          </div>
          <div className="flex gap-3">
            {ctaStats.map((stat) => (
              <div key={stat.label} className="flex-1 bg-[#c4e4f2] rounded-xl px-4 py-4 flex flex-col items-center gap-1">
                <span className="text-[20px] font-bold text-[#1a1a1a] leading-tight">
                  {stat.value}
                </span>
                <span className="text-[14px] font-normal text-[#333] leading-[1.4] text-center">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LibraryCTA
