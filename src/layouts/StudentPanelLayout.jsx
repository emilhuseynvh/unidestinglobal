import { Outlet } from "react-router"
import StudentPanelHeader from "../components/student/StudentPanelHeader"
import StudentPanelSidebar from "../components/student/StudentPanelSidebar"
import Footer from "../components/Footer"

const StudentPanelLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fa]">
      <StudentPanelHeader />
      <div className="flex flex-1 min-h-0 px-4 sm:px-6 gap-4">
        <aside className="shrink-0 hidden lg:block">
          <div className="sticky top-4 overflow-y-auto max-h-[calc(100vh-2rem)]">
            <StudentPanelSidebar />
          </div>
        </aside>
        <main className="flex-1 min-w-0">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default StudentPanelLayout
