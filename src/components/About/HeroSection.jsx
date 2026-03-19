import Header from '../Header'

const HeroSection = () => {
  return (
    <section className="bg-[#b9cbf5] overflow-hidden relative rounded-[32px] w-full min-h-[500px]">
      <Header />

      <div className="flex flex-col items-center mt-[68px] pb-[120px] px-[64px]">
        <div className="flex flex-col gap-[48px] items-center">
          <div className="flex flex-col gap-[8px] items-center text-center leading-[1.4]">
            <h1 className="text-[#141219] text-[48px] font-semibold w-[781px]">
              Connecting Learners Worldwide
            </h1>
            <p className="text-[#4d4d4d] text-[20px] font-normal w-[622px]">
              A global education ecosystem connecting students and tutors worldwide through one platform.
            </p>
          </div>
          <div className="flex items-start">
            <button className="bg-white flex gap-[8px] items-center justify-center px-[20px] py-[12px] rounded-full hover:bg-gray-50 transition-colors">
              <span className="text-black text-[16px] font-semibold leading-[24px] text-center whitespace-nowrap">
                Join UniDestin
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
