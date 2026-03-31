const HeroSection = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col items-center gap-6 sm:gap-8 pt-8 sm:pt-12 lg:pt-20 px-4 sm:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-5 w-full max-w-[922px]">
          <h1 className="text-[#141219] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-[1.2] sm:leading-[1.3] lg:leading-[1.4] text-center w-full">
            Your study abroad journey, made simpler
          </h1>
          <p className="text-[#141219] text-sm sm:text-base lg:text-lg leading-normal text-center w-full max-w-[600px]">
            Passionate AI/ML educator with 10 years of experience in simplifying complex concepts.
          </p>
        </div>

        <button className="flex items-center justify-center px-5 py-3 sm:py-[14px] bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm">
          <span className="text-black text-sm sm:text-base font-medium leading-[1.24] tracking-[-0.32px]">
            See Study Abroad Programs
          </span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
