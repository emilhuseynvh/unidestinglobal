import HeroSection from '../components/FAQ/HeroSection'
import FAQContentSection from '../components/FAQ/FAQContentSection'
import CTABanner from '../components/FAQ/CTABanner'

const FAQ = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="w-[1440px] mx-auto relative">
        <HeroSection />
        <FAQContentSection />
        <CTABanner />
      </div>
    </div>
  )
}

export default FAQ
