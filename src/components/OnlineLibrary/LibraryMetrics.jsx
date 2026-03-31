const metrics = [
  { value: "8500+", label: "Resources" },
  { value: "320+", label: "Contributors" },
  { value: "1.2M", label: "Downloads" },
  { value: "65%", label: "Free Content" },
]

const LibraryMetrics = () => {
  return (
    <section className="py-16">
      <div className="flex flex-wrap justify-between gap-8">
        {metrics.map((metric) => (
          <div key={metric.label} className="flex flex-col gap-3">
            <div className="w-[75px] h-px bg-[#e9eaeb]" />
            <div className="flex flex-col">
              <span className="text-[36px] sm:text-[44px] font-semibold text-[#0d0d12] leading-[64px]">
                {metric.value}
              </span>
              <span className="text-[18px] sm:text-[20px] font-normal text-[#0d0d12] leading-7">
                {metric.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default LibraryMetrics
