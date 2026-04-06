import { Outlet } from "react-router"
import StudentHeader from "../components/StudentHeader"
import StudentPanelSidebar from "../components/student/StudentPanelSidebar"
import Footer from "../components/Footer"

const StudentPanelLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <StudentHeader />
      <div className="flex flex-1">
        <aside className="bg-white shrink-0">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <StudentPanelSidebar />
          </div>
        </aside>
        <main className="flex-1 bg-[#f9f9fa]">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default StudentPanelLayout
