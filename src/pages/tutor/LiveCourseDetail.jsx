import { useState } from "react"
import { Link } from "react-router"
import LiveCourseHero from "../../components/tutor/LiveCourseDetail/LiveCourseHero"
import LiveKpiStrip from "../../components/tutor/LiveCourseDetail/LiveKpiStrip"
import LiveCourseTabs from "../../components/tutor/LiveCourseDetail/LiveCourseTabs"
import LiveOverviewTab from "../../components/tutor/LiveCourseDetail/LiveOverviewTab"
import SessionsTab from "../../components/tutor/LiveCourseDetail/SessionsTab"
import StudentsTab from "../../components/tutor/CourseDetail/StudentsTab"
import DocumentsTab from "../../components/tutor/LiveCourseDetail/DocumentsTab"
import ReviewsTab from "../../components/tutor/CourseDetail/ReviewsTab"
import LiveSettingsTab from "../../components/tutor/LiveCourseDetail/LiveSettingsTab"

const LiveCourseDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <LiveOverviewTab />
      case "Sessions":
        return <SessionsTab />
      case "Attendees":
        return <StudentsTab />
      case "Documents":
        return <DocumentsTab />
      case "Reviews":
        return <ReviewsTab />
      case "Settings":
        return <LiveSettingsTab />
      default:
        return <LiveOverviewTab />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm">
        <Link to="/tutor/courses" className="text-[#5b616d] font-medium leading-5 hover:text-[#007aff] transition-colors">My Courses</Link>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[#0a0c11] font-medium leading-5">IB Biology HL — Complete Course</span>
      </div>

      <LiveCourseHero />
      <LiveKpiStrip />
      <LiveCourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </div>
  )
}

export default LiveCourseDetail
