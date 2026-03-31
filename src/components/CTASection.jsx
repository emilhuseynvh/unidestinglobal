const imgVector = "/img/guest/cta-decoration.svg"

const CTASection = () => {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 lg:px-[175px] py-10 md:py-[72px]">
      <div className="bg-[#9bd8a9] overflow-hidden relative rounded-[20px] md:rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] w-full min-h-[300px] sm:min-h-[350px] md:h-[424px]">
        <div className="absolute hidden md:flex h-[634.705px] items-center justify-center right-0 top-[-205px] w-[787.876px]">
          <div className="rotate-[-16.89deg]">
            <div className="h-[455.265px] relative w-[685.152px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>

        <div className="absolute hidden md:flex h-[479.705px] items-center justify-center left-[-216px] top-[12px] w-[657.345px]">
          <div className="rotate-[-16.89deg]">
            <div className="h-[322.454px] relative w-[589.066px]">
              <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>

        <div className="relative flex flex-col gap-6 md:gap-10 items-center justify-center px-6 py-12 sm:py-16 md:py-0 md:absolute md:left-1/2 md:-translate-x-1/2 md:top-[137px] w-full md:w-[648px]">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col items-center w-full">
              <div className="flex flex-wrap gap-y-2 items-end justify-center w-full">
                <p className="text-[#141219] text-[28px] sm:text-[36px] md:text-[48px] font-bold leading-[1.15] text-center">
                  Where will you go for studing?
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <button className="bg-black flex items-center justify-center py-[13px] px-5 rounded-full hover:bg-gray-800 transition-colors">
              <span className="text-white text-[14px] md:text-[16px] font-medium leading-[1.24] text-center tracking-[-0.32px] whitespace-nowrap">
                Get started
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTASection
