import { Outlet } from "react-router"
import StudentHeader from "../components/StudentHeader"
import Footer from "../components/Footer"

const StudentLayout = () => {
  return (
    <>
      <StudentHeader />
      <Outlet />
      <Footer />
    </>
  )
}

export default StudentLayout
