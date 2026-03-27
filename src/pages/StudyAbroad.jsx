import Navbar from '../components/GuideHeader'
import HeroSection from '../components/StudyAbroad/HeroSection'
import PartnersSection from '../components/StudyAbroad/PartnersSection'
import JourneySection from '../components/StudyAbroad/JourneySection'
import CategoriesSection from '../components/StudyAbroad/CategoriesSection'
import CoursesSection from '../components/StudyAbroad/CoursesSection'
import BlogSection from '../components/StudyAbroad/BlogSection'
import FAQSection from '../components/StudyAbroad/FAQSection'
import CTASection from '../components/StudyAbroad/CTASection'
import Footer from '../components/Footer'

const StudyAbroad = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-[1440px] w-full mx-auto relative">
        <div style={{ filter: 'drop-shadow(0 27px 60px rgba(0, 0, 0, 0.12))' }} className="absolute top-4 left-[25px] w-[1391px] h-[703px] bg-[#8BC398] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)]" />
        <div className="relative z-10">
          <Navbar />
          <HeroSection />
        </div>
        <div className="relative z-10 mt-[160px]">
          <PartnersSection />
        </div>
      </div>
      <JourneySection />
      <CategoriesSection />
      <CoursesSection />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </div>
  )
}

export default StudyAbroad
