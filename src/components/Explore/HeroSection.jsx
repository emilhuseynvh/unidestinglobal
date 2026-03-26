const allTopics = [
  "UX Design", "UI Design", "3D Design", "Figma", "Typography", "Art",
  "Typography", "Web Design", "Art", "UX Design", "Research", "Figma",
]

const PlusIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 6.667v6.666M6.667 10h6.666M17.5 10a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" stroke="#553efb" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center pt-6 relative">
      <div className="flex flex-col items-center pb-[52px] w-full">
        <div className="flex flex-col items-center gap-3 w-full mb-[-52px]">
          <div className="flex flex-col items-center gap-0.5">
            <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#333] leading-8">
              Popular Topics
            </h2>
            <p className="text-[12px] text-[#808080] leading-[1.4]">
              Continue watching the courses.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 py-1 max-w-[720px]">
            {allTopics.map((topic, i) => (
              <button
                key={i}
                className="bg-white border border-[#e6e6e6] rounded-full px-4 py-3 text-[14px] font-semibold text-[#333] leading-[1.4] whitespace-nowrap hover:bg-[#f9f9f9] transition-colors"
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        <div className="relative w-full">
          <div className="w-full h-20 bg-white blur-[18px]" />
        </div>
      </div>
      <button className="flex items-center gap-2 p-1 rounded-2xl -mt-14">
        <PlusIcon />
        <span className="text-[16px] font-medium text-[#553efb] leading-[1.4]">
          Explore More
        </span>
      </button>
    </div>
  )
}

export default HeroSection
