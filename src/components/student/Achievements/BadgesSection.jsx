import BadgeCard from "./BadgeCard"
import Pagination from "../MyCourses/Pagination"

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SortIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 10h10M2.5 5h15M7.5 15h5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const DiamondIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 2L2 9l10 13L22 9 12 2z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ShieldIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const AwardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="8" r="6" fill="white" stroke="white" strokeWidth="1.5"/>
    <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const badges = [
  {
    id: 1,
    title: "Lifelong Learner",
    issuedOn: "March 22th, 2025",
    label: "Lifelong\nLearner",
    sublabel: "2025",
    bgColor: "bg-[#7c8dc5]",
    icon: <StarIcon />,
  },
  {
    id: 2,
    title: "Streak Master",
    issuedOn: "June 15th, 2025",
    label: "Streak\nMaster",
    sublabel: "Unidestin",
    bgColor: "bg-[#8b9ad4]",
    icon: <DiamondIcon />,
  },
  {
    id: 3,
    title: "Quick Learner",
    issuedOn: "January 22th, 2025",
    label: "Quick\nLearner",
    sublabel: "Unidestin",
    bgColor: "bg-[#6b7fc4]",
    icon: <ShieldIcon />,
  },
  {
    id: 4,
    title: "Fast Finisher",
    issuedOn: "April 11th, 2025",
    label: "Fast\nFinisher",
    sublabel: "2025",
    bgColor: "bg-[#7b8dc6]",
    icon: <AwardIcon />,
  },
]

const BadgesSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[320px] sm:max-w-[360px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for badges"
            className="flex-1 min-w-0 text-[14px] sm:text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
          />
          <div className="hidden sm:block border border-[#e9eaeb] rounded px-1 py-px">
            <span className="text-[12px] font-medium text-[#717680] leading-[18px]">⌘K</span>
          </div>
        </div>
        <button className="flex items-center gap-1.5 h-10 px-3 sm:px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
          <SortIcon />
          <span className="hidden sm:inline text-[14px] font-semibold text-[#414651] leading-5">Sort</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {badges.map((badge) => (
          <BadgeCard key={badge.id} badge={badge} />
        ))}
      </div>

      <Pagination currentPage={1} totalPages={1} />
    </div>
  )
}

export default BadgesSection
