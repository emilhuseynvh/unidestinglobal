import Header from "../components/Header"
import HelpHero from "../components/Help/HelpHero"
import FAQSection from "../components/Help/FAQSection"
import ContactForm from "../components/Help/ContactForm"

const Help = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-10 md:gap-14">
        <HelpHero />
        <FAQSection />
        <ContactForm />
      </div>
    </section>
  )
}

export default Help
