import { useState } from "react"
import { Link } from "react-router"
import CourseHero from "../../components/tutor/CourseDetail/CourseHero"
import KpiStrip from "../../components/tutor/CourseDetail/KpiStrip"
import CourseTabs from "../../components/tutor/CourseDetail/CourseTabs"
import OverviewTab from "../../components/tutor/CourseDetail/OverviewTab"
import CurriculumTab from "../../components/tutor/CourseDetail/CurriculumTab"
import StudentsTab from "../../components/tutor/CourseDetail/StudentsTab"
import ArtificatsTab from "../../components/tutor/CourseDetail/ArtificatsTab"
import ReviewsTab from "../../components/tutor/CourseDetail/ReviewsTab"
import SettingsTab from "../../components/tutor/CourseDetail/SettingsTab"

const SelfPacedCourseDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <OverviewTab />
      case "Curriculum":
        return <CurriculumTab />
      case "Students":
        return <StudentsTab />
      case "Artificats":
        return <ArtificatsTab />
      case "Reviews":
        return <ReviewsTab />
      case "Settings":
        return <SettingsTab />
      default:
        return <OverviewTab />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm">
        <Link to="/tutor/courses" className="text-[#5b616d] font-medium leading-5 hover:text-[#007aff] transition-colors">My Courses</Link>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[#0a0c11] font-medium leading-5">IB Biology HL — Complete Course</span>
      </div>

      <CourseHero />
      <KpiStrip />
      <CourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </div>
  )
}

export default SelfPacedCourseDetail
