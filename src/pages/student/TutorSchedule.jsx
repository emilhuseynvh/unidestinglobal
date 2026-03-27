import { useNavigate, useParams } from "react-router"
import TutorProfile from "../../components/student/TutorDetail/TutorProfile"
import TutorScheduleSection from "../../components/student/TutorDetail/TutorScheduleSection"

const TutorSchedule = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleTabChange = (tab) => {
    if (tab === "schedule") return
    if (tab === "about") navigate(`/student/tutors/${id}`)
    if (tab === "courses") navigate(`/student/tutors/${id}/courses`)
  }

  return (
    <section className="w-full overflow-x-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
        <TutorProfile activeTab="schedule" onTabChange={handleTabChange} />
        <div>
          <TutorScheduleSection />
        </div>
      </div>
    </section>
  )
}

export default TutorSchedule
