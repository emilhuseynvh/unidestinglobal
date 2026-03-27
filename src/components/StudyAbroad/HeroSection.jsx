const HeroSection = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto">
      <div className="flex flex-col items-center gap-8 pt-[140px] pb-[140px]">
        <div className="flex flex-col items-center gap-5 w-[922px]">
          <div className="flex flex-wrap justify-center items-end gap-y-2 w-full">
            <h1 className="text-[#141219] text-[48px] font-semibold leading-[1.4] text-center w-full">
              Your study abroad journey, made simpler
            </h1>
          </div>
          <p className="text-[#141219] text-[18px] font-normal leading-normal text-center w-full">
            Passionate AI/ML educator with 10 years of experience in simplifying complex concepts.
          </p>
        </div>

        <button className="flex items-center justify-center px-5 py-[14px] bg-white rounded-[100px] hover:bg-gray-50 transition-colors shadow-sm">
          <span className="text-black text-base font-medium leading-[1.24] tracking-[-0.32px]">
            See Study Abroad Programs
          </span>
        </button>
      </div>
    </section>
  )
}

export default HeroSection
