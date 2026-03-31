const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 1.667A8.333 8.333 0 1018.333 10 8.341 8.341 0 0010 1.667zm3.983 6.65l-4.583 4.583a.625.625 0 01-.884 0l-2.5-2.5a.625.625 0 11.884-.884l2.058 2.059 4.141-4.142a.625.625 0 11.884.884z" fill="#0a0c11"/>
  </svg>
)

const features = [
  {
    title: "Learn Anywhere, On Any Device",
    description: "Seamless experience across mobile, tablet, and desktop — start on one device, continue on another without losing progress.",
  },
  {
    title: "Optimized for Speed & Performance",
    description: "Fast loading and smooth interactions on every screen size, even on low-bandwidth connections.",
  },
  {
    title: "Consistent & Intuitive Experience",
    description: "Same clean interface, same powerful features — no matter the device. Less learning curve, more learning.",
  },
]

const DeviceSection = () => {
  return (
    <section className="py-20">
      <div className="bg-[#dcead0] rounded-[32px] px-8 sm:px-16 lg:px-[120px] py-16 sm:py-[100px] flex flex-col lg:flex-row items-center gap-12 relative overflow-hidden">
        <div className="flex flex-col gap-6 lg:w-[481px] shrink-0 relative z-10">
          <h2 className="text-[36px] sm:text-[42px] font-semibold text-[#0a0c11] leading-[48px] tracking-[-0.2px]">
            One Platform. Every Device.
          </h2>
          <div className="flex flex-col">
            {features.map((f) => (
              <div key={f.title} className="flex items-start gap-3 py-4 pr-6">
                <div className="mt-1 shrink-0">
                  <CheckCircleIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[18px] font-medium text-[#0a0c11] leading-6">{f.title}</span>
                  <p className="text-[16px] font-normal text-[#5b616d] leading-6">{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block flex-1 relative min-h-[400px]">
          <div className="absolute right-[-60px] top-[-20px] w-[520px] h-[340px] bg-[#1a1a1a] rounded-xl overflow-hidden shadow-2xl">
            <div className="h-8 bg-[#2a2a2a] flex items-center px-3 gap-1.5">
              <div className="size-2.5 rounded-full bg-[#ff5f57]" />
              <div className="size-2.5 rounded-full bg-[#febc2e]" />
              <div className="size-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="bg-white h-full p-4">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-3 w-20 bg-[#e5e5e5] rounded" />
                <div className="h-3 w-16 bg-[#e5e5e5] rounded" />
                <div className="h-3 w-24 bg-[#e5e5e5] rounded" />
              </div>
              <div className="flex gap-4">
                <div className="flex-1 h-40 bg-[#f5f5f5] rounded-lg" />
                <div className="w-32 flex flex-col gap-2">
                  <div className="h-6 w-20 bg-[#0a0c11] rounded" />
                  <div className="h-3 w-full bg-[#e5e5e5] rounded" />
                  <div className="h-8 w-full bg-[#007aff] rounded" />
                  <div className="h-8 w-full border border-[#e5e5e5] rounded" />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute left-[40px] bottom-[-40px] w-[200px] h-[400px] bg-[#1a1a1a] rounded-[32px] overflow-hidden shadow-2xl z-10 border-4 border-[#333]">
            <div className="h-6 bg-[#1a1a1a] flex items-center justify-center">
              <div className="w-16 h-1.5 bg-[#333] rounded-full" />
            </div>
            <div className="bg-white h-full p-3">
              <div className="h-3 w-16 bg-[#e5e5e5] rounded mb-3" />
              <div className="h-32 bg-[#f5f5f5] rounded-lg mb-3" />
              <div className="h-3 w-full bg-[#e5e5e5] rounded mb-1" />
              <div className="h-3 w-2/3 bg-[#e5e5e5] rounded" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DeviceSection
