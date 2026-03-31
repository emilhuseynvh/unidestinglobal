import GuideHeader from "../GuideHeader"

const chips = ["News", "Discussions", "Announcements", "Campaigns"]

const SparklesIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M9 1.5l1.286 3.857L14.143 6.643l-3.857 1.286L9 11.786 7.714 7.929 3.857 6.643l3.857-1.286L9 1.5zM3.75 12l.643 1.929L6.321 14.571l-1.929.643L3.75 17.143l-.643-1.929L1.179 14.571l1.929-.643L3.75 12zM14.25 10.5l.643 1.929 1.929.643-1.929.643-.643 1.929-.643-1.929-1.929-.643 1.929-.643.643-1.929z" fill="#333" />
  </svg>
)

const CommunityHero = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-6 pt-4 pb-6">
      <div className="bg-[#a2d6f0] rounded-[32px] overflow-hidden pb-26">
        <div className="mb-12">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-5 max-w-[804px] mx-auto px-4 text-center">
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-[36px] sm:text-[48px] font-semibold text-[#141219] leading-[1.4]">
              Unidestin Community
            </h1>
            <p className="text-base text-[#333] leading-[1.4] max-w-[622px]">
              Connect with students and tutors worldwide. Share knowledge, discuss topics, join study groups, and stay updated with the latest news and campaigns.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {chips.map((chip) => (
              <button key={chip} className="flex items-center gap-2 px-3 py-2.5 rounded-3xl bg-[#95cde9] text-sm font-medium text-[#333] hover:bg-[#82c3e2] transition-colors">
                <SparklesIcon />
                {chip}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CommunityHero
