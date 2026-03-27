import GuideHeader from "../GuideHeader"

const TutorHero = () => {
  return (
    <div className="bg-[#b9cbf5] overflow-hidden relative rounded-2xl sm:rounded-3xl md:rounded-[32px] w-full min-h-[400px] sm:min-h-[450px] md:min-h-[500px]">
      <div className="relative z-10">
        <GuideHeader />
      </div>

      <div className="flex flex-col items-center px-4 sm:px-8 pb-10 sm:pb-14 pt-6 sm:pt-10 relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8 max-w-[648px] w-full">
          <div className="flex flex-col items-center gap-4 sm:gap-6 text-center max-w-[768px] w-full">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-semibold text-black leading-[1.4]">
              Find a tutor
            </h1>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#4d4d4d] leading-[1.4]">
              A global education ecosystem connecting students and tutors worldwide through one platform.
            </p>
          </div>

          <div className="relative w-full">
            <div className="bg-white rounded-[32px] overflow-hidden flex items-center pl-6 sm:pl-8 pr-14 py-4">
              <input
                type="text"
                placeholder="Search for tutor"
                className="flex-1 min-w-0 text-[16px] font-medium text-[#181d27] leading-6 outline-none placeholder:text-[#666]"
              />
            </div>
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#f5f5f5] rounded-full p-2.5 hover:bg-[#e9eaeb] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TutorHero
