import HeroSection from '../components/About/HeroSection'
import FeaturesSection from '../components/About/FeaturesSection'
import ImpactSection from '../components/About/ImpactSection'
import VisionMissionSection from '../components/About/VisionMissionSection'
import PartnersSection from '../components/About/PartnersSection'
import TestimonialsSection from '../components/About/TestimonialsSection'
import CTABanner from '../components/About/CTABanner'

const About = () => {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <div className="max-w-[1440px] w-full mx-auto relative px-4 sm:px-6 pt-4">
        <HeroSection />
        <FeaturesSection />
        <ImpactSection />
        <VisionMissionSection />
        <PartnersSection />
        <TestimonialsSection />
        <CTABanner />
      </div>
    </div>
  )
}

export default About
