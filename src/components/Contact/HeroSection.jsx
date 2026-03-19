const HeroSection = () => {
  return (
    <section className="bg-[#fafafa] flex flex-col items-center py-[96px] w-full">
      <div className="flex flex-col items-center max-w-[648px] px-[32px] w-full">
        <div className="flex flex-col gap-[48px] items-center w-full">
          <div className="flex flex-col gap-[24px] items-center max-w-[768px] w-full">
            <h1 className="font-semibold leading-[1.4] text-[48px] text-black text-center w-full">
              Connecting Learners Worldwide
            </h1>
            <p className="font-normal leading-[1.4] text-[20px] text-[#4d4d4d] text-center w-full">
              A global education ecosystem connecting students and tutors worldwide through one platform.
            </p>
          </div>
          <button className="bg-[#007aff] flex gap-[8px] items-center justify-center px-[20px] py-[12px] rounded-full hover:bg-[#0066dd] transition-colors">
            <span className="font-semibold leading-[24px] text-[16px] text-white text-center whitespace-nowrap">
              Join UniDestin
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
