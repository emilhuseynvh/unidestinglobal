import GuideHeader from "../GuideHeader"

const PartnersHero = () => {
  return (
    <section className="px-4 sm:px-6 pt-6">
      <div className="bg-[#a2d6f0] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] overflow-hidden relative">
        <div className="px-4 sm:px-16">
          <GuideHeader />
        </div>
        <div className="flex flex-col items-center gap-8 py-20 sm:py-28 md:py-32 px-4">
          <div className="flex flex-col items-center gap-5 max-w-[648px] text-center">
            <h1 className="text-[36px] sm:text-[48px] md:text-[64px] font-bold text-[#141219] leading-none">
              Our Global Partners
            </h1>
            <p className="text-[16px] font-normal text-[#333] leading-[1.4] max-w-[585px]">
              UniDestin collaborates with world-class universities, corporations, and education organizations across 30+ countries to deliver transformative learning experiences.
            </p>
          </div>
          <button className="bg-white rounded-full px-5 py-3.5 text-[16px] font-medium text-black leading-[1.24] tracking-[-0.32px] hover:bg-gray-50 transition-colors">
            Become a Partner
          </button>
        </div>
      </div>
    </section>
  )
}

export default PartnersHero
