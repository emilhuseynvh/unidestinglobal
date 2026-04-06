import { useState } from "react"
import { Link } from "react-router"
import StudentLiveCourseHero from "../../components/student/LiveCourseDetail/StudentLiveCourseHero"
import StudentLiveKpiStrip from "../../components/student/LiveCourseDetail/StudentLiveKpiStrip"
import StudentLiveAlert from "../../components/student/LiveCourseDetail/StudentLiveAlert"
import StudentLiveCourseTabs from "../../components/student/LiveCourseDetail/StudentLiveCourseTabs"
import StudentLiveOverviewTab from "../../components/student/LiveCourseDetail/StudentLiveOverviewTab"
import StudentLiveSessionsTab from "../../components/student/LiveCourseDetail/StudentLiveSessionsTab"
import StudentLiveDocumentsTab from "../../components/student/LiveCourseDetail/StudentLiveDocumentsTab"
import StudentLiveReviewsTab from "../../components/student/LiveCourseDetail/StudentLiveReviewsTab"

const StudentLiveCourseDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Overview":
        return <StudentLiveOverviewTab />
      case "Sessions":
        return <StudentLiveSessionsTab />
      case "Documents":
        return <StudentLiveDocumentsTab />
      case "Reviews":
        return <StudentLiveReviewsTab />
      default:
        return <StudentLiveOverviewTab />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm">
        <Link to="/student/panel/courses" className="text-[#5b616d] font-medium leading-5 hover:text-[#007aff] transition-colors">My Courses</Link>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span className="text-[#0a0c11] font-medium leading-5">AP Biology Weekly Group — Spring 2026</span>
      </div>

      <StudentLiveCourseHero />
      <StudentLiveKpiStrip />
      <StudentLiveAlert />
      <StudentLiveCourseTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {renderTabContent()}
    </div>
  )
}

export default StudentLiveCourseDetail
