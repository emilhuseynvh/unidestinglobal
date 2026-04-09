import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router"
import { useSelector } from "react-redux"
import TutorSidebar from "../components/tutor/TutorSidebar"
import TutorTopbar from "../components/tutor/TutorTopbar"
import Footer from "../components/Footer"
import { useGetTutorStatusQuery } from "../store/api/authApi"

const TutorLayout = () => {
  const navigate = useNavigate()
  const token = useSelector((s) => s.auth.token)
  const user = useSelector((s) => s.auth.user)

  const { data, error, isLoading } = useGetTutorStatusQuery(undefined, {
    skip: !token,
  })

  useEffect(() => {
    if (!token) {
      navigate("/login", { replace: true })
    }
  }, [token, navigate])

  useEffect(() => {
    if (error?.status === 401) {
      navigate("/login", { replace: true })
    }
  }, [error, navigate])

  if (!token) return null

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f9f9fa]">
        <div className="flex flex-col items-center gap-3">
          <svg className="animate-spin h-8 w-8 text-[#007aff]" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
          <span className="text-sm text-[#5b616d]">Loading...</span>
        </div>
      </div>
    )
  }

  const isVerified = data?.success ? data.data.is_verified : false
  const rawStatus = data?.success ? data.data.profile_status : "pending"
  const hasBio = data?.success ? data.data.has_bio : false
  const hasIntroVideo = data?.success ? data.data.has_intro_video : false
  const hasAvailability = data?.success ? data.data.has_availability : false
  const profileComplete = hasBio && hasIntroVideo && hasAvailability
  const profileStatus = isVerified ? "verified" : (rawStatus === "rejected" ? "rejected" : "review")
  const userName = user?.full_name?.split(" ")[0] || "Tutor"

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
            title={profileComplete ? `Welcome Back, ${userName}` : `Welcome to Unidestin, ${userName}`}
            subtitle={profileComplete ? "We hope all is well and you have a great day." : "Let's get your profile live and find your first student."}
          />
          <main className="flex-1">
            <Outlet context={{ profileStatus, profileComplete, isVerified, hasBio, hasIntroVideo, hasAvailability }} />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TutorLayout
