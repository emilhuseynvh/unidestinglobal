import Navbar from '../components/GuideHeader'
import HeroSection from '../components/StudyAbroad/HeroSection'
import PartnersSection from '../components/StudyAbroad/PartnersSection'
import JourneySection from '../components/StudyAbroad/JourneySection'
import CategoriesSection from '../components/StudyAbroad/CategoriesSection'
import CoursesSection from '../components/StudyAbroad/CoursesSection'
import BlogSection from '../components/StudyAbroad/BlogSection'
import FAQSection from '../components/StudyAbroad/FAQSection'
import CTASection from '../components/StudyAbroad/CTASection'

const StudyAbroad = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="px-3 sm:px-4 lg:px-6 pt-3 sm:pt-4">
        <div className="bg-[#8BC398] rounded-[26px] overflow-hidden pb-16 sm:pb-24 lg:pb-32">
          <Navbar />
          <HeroSection />
        </div>
      </div>
      <div className="mt-8 sm:mt-12 lg:mt-16">
        <PartnersSection />
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
