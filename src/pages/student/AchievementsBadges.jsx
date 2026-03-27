import { useNavigate } from "react-router"
import PageLoader from "../../components/PageLoader"
import BadgesSection from "../../components/student/Achievements/BadgesSection"

const tabs = ["Certifications", "Badges"]

const AchievementsBadges = () => {
  const navigate = useNavigate()

  const handleTabChange = (tab) => {
    if (tab === "Certifications") navigate("/student/achievements")
  }

  return (
    <section className="w-full">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-6">
        <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#181d27] leading-tight">
          My Achivements
        </h1>

        <div className="flex items-center gap-1 border-b border-[#e9eaeb]">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => tab === "Certifications" && handleTabChange(tab)}
              className={`px-3 py-2.5 text-[14px] font-medium leading-5 whitespace-nowrap transition-colors relative ${
                tab === "Badges" ? "text-[#007aff]" : "text-[#717680] hover:text-[#414651]"
              }`}
            >
              {tab}
              {tab === "Badges" && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007aff] rounded-t-full" />
              )}
            </button>
          ))}
        </div>

        <PageLoader variant="achievements">
          <BadgesSection />
        </PageLoader>
      </div>
    </section>
  )
}

export default AchievementsBadges
