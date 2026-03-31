import CoursesHero from "../components/Courses/CoursesHero"
import CoursesFilters from "../components/Courses/CoursesFilters"
import CoursesGrid from "../components/Courses/CoursesGrid"

const Courses = () => {
  return (
    <div className="min-h-screen bg-white">
      <CoursesHero />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-6 mt-8">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="hidden lg:block">
            <CoursesFilters />
          </div>
          <CoursesGrid />
        </div>
        <div className="h-20" />
      </div>
    </div>
  )
}

export default Courses
