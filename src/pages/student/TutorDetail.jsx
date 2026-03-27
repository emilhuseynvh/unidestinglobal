import { useNavigate, useParams } from "react-router"
import TutorProfile from "../../components/student/TutorDetail/TutorProfile"
import ResumeSection from "../../components/student/TutorDetail/ResumeSection"
import ReviewsSection from "../../components/student/TutorDetail/ReviewsSection"

const TutorDetail = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const handleTabChange = (tab) => {
    if (tab === "about") return
    if (tab === "courses") navigate(`/student/tutors/${id}/courses`)
    if (tab === "schedule") navigate(`/student/tutors/${id}/schedule`)
  }

  return (
    <section className="w-full overflow-x-hidden">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
        <TutorProfile activeTab="about" onTabChange={handleTabChange} />
        <div className="flex flex-col gap-10 md:gap-14">
          <ResumeSection />
          <ReviewsSection />
        </div>
      </div>
    </section>
  )
}

export default TutorDetail
