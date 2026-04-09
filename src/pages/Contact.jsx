import Header from '../components/GuideHeader'
import HeroSection from '../components/Contact/HeroSection'
import ContactFormSection from '../components/Contact/ContactFormSection'
import FAQSection from '../components/Contact/FAQSection'

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#fafafa] overflow-x-hidden">
      <div className="max-w-[1440px] w-full mx-auto relative">
        <Header />
        <HeroSection />
        <ContactFormSection />
        <FAQSection />
      </div>
    </div>
  )
}

export default Contact