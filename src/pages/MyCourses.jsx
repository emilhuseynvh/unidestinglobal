import Header from "../components/Header"
import PageLoader from "../components/PageLoader"
import TodayCourses from "../components/MyCourses/TodayCourses"
import CoursesSection from "../components/MyCourses/CoursesSection"

const MyCourses = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-12">
        <PageLoader variant="mycourses">
          <TodayCourses />
          <CoursesSection />
        </PageLoader>
      </div>
    </section>
  )
}

export default MyCourses
