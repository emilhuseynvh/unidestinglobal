import GuideHeader from "../components/GuideHeader"
import HomeHero from "../components/Home/HomeHero"
import MeetTutors from "../components/Home/MeetTutors"
import CoursesSection from "../components/Home/CoursesSection"
import LiveClassesSection from "../components/Home/LiveClassesSection"
import StudyAbroadSection from "../components/Home/StudyAbroadSection"
import CertificatesSection from "../components/Home/CertificatesSection"
import DeviceSection from "../components/Home/DeviceSection"
import PartnersSection from "../components/Home/PartnersSection"

const Home = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <GuideHeader />
      <HomeHero />
      <div className="px-4 sm:px-6 lg:px-16">
        <MeetTutors />
        <CoursesSection />
        <LiveClassesSection />
        <StudyAbroadSection />
        <CertificatesSection />
        <DeviceSection />
        <PartnersSection />
      </div>
    </div>
  )
}

export default Home
