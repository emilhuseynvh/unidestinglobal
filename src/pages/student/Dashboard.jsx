import PageLoader from "../../components/PageLoader"
import HeroBanner from "../../components/student/Dashboard/HeroBanner"
import StatsCards from "../../components/student/Dashboard/StatsCards"
import UpcomingTimeline from "../../components/student/Dashboard/UpcomingTimeline"
import MyClasses from "../../components/student/Dashboard/MyClasses"
import RecentTransactions from "../../components/student/Dashboard/RecentTransactions"

const Dashboard = () => {
  return (
    <section className="w-full">
      
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
