import GuideHeader from "../components/GuideHeader"
import CourseDetailHeader from "../components/CourseDetail/CourseDetailHeader"
import CourseDetailContent from "../components/CourseDetail/CourseDetailContent"
import PurchaseCard from "../components/CourseDetail/PurchaseCard"
import CourseReviews from "../components/CourseDetail/CourseReviews"
import AboutInstructor from "../components/CourseDetail/AboutInstructor"
import RelatedCourses from "../components/CourseDetail/RelatedCourses"

const CourseDetail = () => {
  return (
    <div className="min-h-screen bg-white">
      <GuideHeader />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[120px] mt-8">
        <CourseDetailHeader />
        <div className="flex flex-col lg:flex-row gap-10 mt-8">
          <div className="flex-1 min-w-0 flex flex-col gap-14">
            <CourseDetailContent />
            <CourseReviews />
            <AboutInstructor />
            <RelatedCourses />
            <div className="h-10" />
          </div>
          <div className="w-full lg:w-[373px] shrink-0">
            <div className="lg:sticky lg:top-8">
              <PurchaseCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
