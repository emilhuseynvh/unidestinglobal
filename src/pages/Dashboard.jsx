import Header from "../components/Header"
import PageLoader from "../components/PageLoader"
import HeroBanner from "../components/Dashboard/HeroBanner"
import StatsCards from "../components/Dashboard/StatsCards"
import UpcomingTimeline from "../components/Dashboard/UpcomingTimeline"
import MyClasses from "../components/Dashboard/MyClasses"
import RecentTransactions from "../components/Dashboard/RecentTransactions"

const Dashboard = () => {
  return (
    <section className="w-full">
      <Header />
      <PageLoader>
        <HeroBanner />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
          <StatsCards />
          <UpcomingTimeline />
          <MyClasses />
          <RecentTransactions />
        </div>
      </PageLoader>
    </section>
  )
}

export default Dashboard
