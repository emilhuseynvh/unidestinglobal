import { useOutletContext } from "react-router"
import SetupCards from "../../components/tutor/Dashboard/SetupCards"
import StatsCards from "../../components/tutor/Dashboard/StatsCards"
import VerifiedBanner from "../../components/tutor/Dashboard/VerifiedBanner"
import LiveStats from "../../components/tutor/Dashboard/LiveStats"
import UpcomingLessons from "../../components/tutor/Dashboard/UpcomingLessons"
import MyStudents from "../../components/tutor/Dashboard/MyStudents"

const TutorDashboard = () => {
  const { profileStatus, profileComplete, isVerified, hasBio, hasIntroVideo, hasAvailability } = useOutletContext()

  if (isVerified && profileComplete) {
    return (
      <div className="px-6 lg:px-10 py-8 flex flex-col gap-10">
        <LiveStats />
        <UpcomingLessons />
        <MyStudents />
      </div>
    )
  }

  if (isVerified && !profileComplete) {
    return (
      <div className="px-6 lg:px-10 py-8 flex flex-col gap-12">
        <VerifiedBanner hasBio={hasBio} hasIntroVideo={hasIntroVideo} hasAvailability={hasAvailability} />
        <SetupCards profileStatus={profileStatus} />
        <StatsCards />
      </div>
    )
  }

  return (
    <div className="px-6 lg:px-10 py-8 flex flex-col gap-12">
      <SetupCards profileStatus={profileStatus} />
      <StatsCards />
    </div>
  )
}

export default TutorDashboard
