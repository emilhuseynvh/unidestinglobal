import Header from "../components/Header"
import PageLoader from "../components/PageLoader"
import AchievementsSection from "../components/Achievements/AchievementsSection"

const Achievements = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12">
        <PageLoader variant="achievements">
          <AchievementsSection />
        </PageLoader>
      </div>
    </section>
  )
}

export default Achievements
