import { useOutletContext } from "react-router"
import SetupCards from "../../components/tutor/Dashboard/SetupCards"
import StatsCards from "../../components/tutor/Dashboard/StatsCards"
import VerifiedBanner from "../../components/tutor/Dashboard/VerifiedBanner"
import GetFirstStudent from "../../components/tutor/Dashboard/GetFirstStudent"
import ProfileNotLiveBanner from "../../components/tutor/Dashboard/ProfileNotLiveBanner"
import LiveStats from "../../components/tutor/Dashboard/LiveStats"
import UpcomingLessons from "../../components/tutor/Dashboard/UpcomingLessons"
import MyStudents from "../../components/tutor/Dashboard/MyStudents"

const TutorDashboard = () => {
  const { profileStatus, has_info } = useOutletContext()

  if (has_info) {
    return (
      <div className="px-6 lg:px-10 py-8 flex flex-col gap-10">
        <LiveStats />
        <UpcomingLessons />
        <MyStudents />
      </div>
    )
  }

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-12">
      {profileStatus === "verified" && <VerifiedBanner />}
      <SetupCards profileStatus={profileStatus} />
      <StatsCards />
      {profileStatus === "verified" && (
        <>
          <GetFirstStudent />
          <ProfileNotLiveBanner />
        </>
      )}
    </div>
  )
}

export default TutorDashboard
