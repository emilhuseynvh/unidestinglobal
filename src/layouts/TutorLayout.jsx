import { Outlet } from "react-router"
import TutorSidebar from "../components/tutor/TutorSidebar"
import TutorTopbar from "../components/tutor/TutorTopbar"
import Footer from "../components/Footer"

const tutorData = {
  profileStatus: "verified",
  has_info: true,
}

const TutorLayout = () => {
  const isVerified = tutorData.profileStatus === "verified"
  const hasInfo = tutorData.has_info

  return (
    <div className="min-h-screen flex flex-col bg-[#f9f9fa]">
      <div className="flex flex-1 min-h-0">
        <aside className="bg-white shrink-0">
          <div className="sticky top-0 h-screen overflow-y-auto">
            <TutorSidebar isVerified={isVerified} />
          </div>
        </aside>
        <div className="flex-1 min-w-0 flex flex-col">
          <TutorTopbar
            title={hasInfo ? "Welcome Back, Chinara" : "Welcome to Unidestin, Chinara"}
            subtitle={hasInfo ? "We hope all is well and you have a great day." : "Let's get your profile live and find your first student."}
          />
          <main className="flex-1">
            <Outlet context={{ profileStatus: tutorData.profileStatus, has_info: tutorData.has_info }} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TutorLayout
