import GuideHeader from "../GuideHeader"

const CoursesHero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-6 pt-4">
      <div className="bg-[#dcead0] rounded-[32px] overflow-hidden pb-20">
        <div className="mb-12">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-12 max-w-[648px] mx-auto px-8">
          <div className="flex flex-col gap-6 items-center text-center max-w-[768px]">
            <h1 className="text-[36px] sm:text-[48px] font-semibold text-black leading-[1.4]">
              Explore all courses
            </h1>
            <p className="text-xl text-[#4d4d4d] leading-[1.4]">
              A global education ecosystem connecting students and tutors worldwide through one platform.
            </p>
          </div>
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search for courses"
              className="w-full h-14 pl-8 pr-16 rounded-full bg-white text-base font-medium placeholder:text-[#666] focus:outline-none"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#007aff] flex items-center justify-center hover:bg-[#0066d6] transition-colors">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesHero
