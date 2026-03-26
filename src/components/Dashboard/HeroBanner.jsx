const imgBanner = "https://www.figma.com/api/mcp/asset/99fddf17-40bd-407f-838f-f357665ccf46"
const imgAvatar = "https://www.figma.com/api/mcp/asset/7b6d02e9-63fb-4fdc-abd2-c6d5af8e6ae4"

const HeroBanner = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="relative h-40 sm:h-50 md:h-60 w-full">
        <img
          src={imgBanner}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 md:right-12 flex flex-wrap justify-end gap-2">
          <span className="bg-white/80 backdrop-blur-sm text-[#414651] text-[11px] sm:text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
            🔥 7 day streak
          </span>
          <span className="bg-white/80 backdrop-blur-sm text-[#414651] text-[11px] sm:text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
            🏅 Completed 5 lessons
          </span>
          <span className="bg-white/80 backdrop-blur-sm text-[#414651] text-[11px] sm:text-[12px] font-medium px-3 py-1.5 rounded-full whitespace-nowrap">
            🎯 80%+ in exams
          </span>
        </div>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-8 md:px-10 lg:px-20">
        <div className="flex gap-4 sm:gap-6 items-start">
          <div className="border-[3px] border-white rounded-full size-20 sm:size-28 md:size-40 shrink-0 overflow-hidden shadow-lg -mt-10 sm:-mt-14 md:-mt-20 relative z-10 bg-white">
            <img src={imgAvatar} alt="Chinara" className="size-full object-cover" />
          </div>
          <div className="flex-1 flex flex-col gap-1 pt-3 sm:pt-4 min-w-0">
            <h1 className="text-[20px] sm:text-[24px] font-semibold text-[#181d27] leading-8">
              Good evening, Chinara 👋
            </h1>
            <p className="text-[14px] sm:text-[16px] font-normal text-[#535862] leading-6">
              You have 3 lessons today. Let's keep learning!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
