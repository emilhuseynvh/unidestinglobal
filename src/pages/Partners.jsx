import PartnersHero from "../components/Partners/PartnersHero"
import PartnersMetrics from "../components/Partners/PartnersMetrics"
import PartnersLogos from "../components/Partners/PartnersLogos"
import FeaturedPartner from "../components/Partners/FeaturedPartner"
import PartnerCategories from "../components/Partners/PartnerCategories"
import PartnerForm from "../components/Partners/PartnerForm"
import PartnersFAQ from "../components/Partners/PartnersFAQ"

const Partners = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <PartnersHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <PartnersMetrics />
        <PartnersLogos />
        <FeaturedPartner />
        <PartnerCategories />
        <PartnerForm />
        <PartnersFAQ />
      </div>
    </div>
  )
}

export default Partners
