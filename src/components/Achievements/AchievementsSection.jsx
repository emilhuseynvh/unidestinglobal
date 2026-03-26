import { useNavigate } from "react-router"
import CertificateCard from "./CertificateCard"
import Pagination from "../MyCourses/Pagination"

const tabs = ["Certifications", "Badges"]

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

const certificates = [
  {
    id: 1,
    name: "Jason Alexander",
    title: "Typography for UI",
    validUntil: "February 21th, 2028",
    issueDate: "February 24, 2024",
  },
  {
    id: 2,
    name: "Jason Alexander",
    title: "Color Palette Guidelines",
    validUntil: "March 15th, 2029",
    issueDate: "February 24, 2024",
  },
  {
    id: 3,
    name: "Jason Alexander",
    title: "Iconography Standards",
    validUntil: "April 10th, 2027",
    issueDate: "February 24, 2024",
  },
  {
    id: 4,
    name: "Jason Alexander",
    title: "Typography for UI",
    validUntil: "February 21th, 2028",
    issueDate: "February 24, 2024",
  },
  {
    id: 5,
    name: "Jason Alexander",
    title: "Color Palette Guidelines",
    validUntil: "March 15th, 2029",
    issueDate: "February 24, 2024",
  },
  {
    id: 6,
    name: "Jason Alexander",
    title: "Iconography Standards",
    validUntil: "April 10th, 2027",
    issueDate: "February 24, 2024",
  },
]

const AchievementsSection = () => {
  const navigate = useNavigate()
  const activeTab = "Certifications"

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#181d27] leading-tight">
          My Achivements
        </h1>
      </div>

      <div className="flex items-center gap-1 border-b border-[#e9eaeb]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => tab === "Badges" && navigate("/achievements/badges")}
            className={`px-3 py-2.5 text-[14px] font-medium leading-5 whitespace-nowrap transition-colors relative ${
              activeTab === tab ? "text-[#007aff]" : "text-[#717680] hover:text-[#414651]"
            }`}
          >
            {tab}
            {activeTab === tab && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007aff] rounded-t-full" />
            )}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[320px] sm:max-w-[360px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for certificates"
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
        {certificates.map((cert) => (
          <CertificateCard key={cert.id} certificate={cert} />
        ))}
      </div>

      <Pagination currentPage={1} totalPages={10} />
    </div>
  )
}

export default AchievementsSection
