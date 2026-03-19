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
      <div className="w-[1440px] mx-auto relative px-[24px] pt-[16px]">
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
