const CTASection = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-[175px] py-10 sm:py-14 lg:py-[72px]">
      <div className="bg-[#9bd8a9] overflow-hidden relative rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] w-full min-h-[280px] sm:min-h-[350px] lg:h-[424px] flex items-center justify-center">
        <img
          src="/img/guest/cta-decoration.svg"
          alt=""
          className="absolute right-[-50px] top-[-80px] w-[590px] h-[322px] rotate-[-17deg] opacity-30 pointer-events-none select-none hidden sm:block"
        />
        <img
          src="/img/guest/cta-decoration.svg"
          alt=""
          className="absolute left-[-216px] top-[12px] w-[590px] h-[322px] rotate-[-17deg] opacity-30 pointer-events-none select-none hidden sm:block"
        />

        <div className="relative z-10 flex flex-col gap-8 sm:gap-10 items-center px-6 sm:px-10 py-10 sm:py-0 w-full max-w-[648px]">
          <h2 className="text-[#141219] text-[28px] sm:text-[40px] lg:text-[48px] font-bold leading-[1.2] text-center">
            Where will you go for studing?
          </h2>
          <button className="bg-black flex items-center justify-center py-3 px-5 rounded-full hover:bg-gray-800 transition-colors">
            <span className="text-white text-base font-medium leading-[1.24] tracking-[-0.32px]">
              Get started
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
