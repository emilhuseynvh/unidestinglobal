import CommunityHero from "../components/Community/CommunityHero"
import CommunityStats from "../components/Community/CommunityStats"
import LatestNews from "../components/Community/LatestNews"
import Discussions from "../components/Community/Discussions"
import Announcements from "../components/Community/Announcements"
import StudyGroups from "../components/Community/StudyGroups"
import ActiveCampaigns from "../components/Community/ActiveCampaigns"

const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      <CommunityHero />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[141px]">
        <CommunityStats />
        <div className="border-b border-[#e9eaeb] mb-10">
          <div className="flex gap-4 overflow-x-auto pb-3">
            {["News", "Discussions", "Announcements", "Study Groups", "Campaigns"].map((tab, i) => (
              <button key={tab} className={`text-sm font-medium whitespace-nowrap ${i === 0 ? "text-[#007aff]" : "text-[#808080] hover:text-[#333]"}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-16">
          <LatestNews />
          <Discussions />
          <Announcements />
          <StudyGroups />
          <ActiveCampaigns />
        </div>
        <div className="h-20" />
      </div>
    </div>
  )
}

export default Community
