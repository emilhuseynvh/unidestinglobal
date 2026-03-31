const HomeHero = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 pt-14">
      <div className="relative border-4 border-white rounded-[32px] overflow-hidden shadow-[0px_16px_48px_-4px_rgba(26,26,26,0.2)] h-[500px] sm:h-[600px] md:h-[738px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 size-full object-cover"
        >
          <source src="/img/guest/home/guest-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-col items-center gap-6">
              <h1 className="text-[48px] sm:text-[60px] md:text-[72px] font-semibold text-white leading-[0.96] tracking-[-2.88px]">
                Learning starts here.
              </h1>
              <p className="text-[16px] sm:text-[18px] font-medium text-white leading-[1.24] tracking-[-0.36px] max-w-[480px]">
                A place to learn, grow, and teach. Built for students and instructors.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative h-12 px-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-xl bg-[rgba(242,242,244,0.8)]" />
                <span className="relative text-[16px] font-medium text-[#0a0c11] leading-6">
                  Become a tutor
                </span>
              </button>
              <button className="relative h-12 px-4 rounded-xl overflow-hidden">
                <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
                <span className="relative text-[16px] font-medium text-white leading-6">
                  Start Learning
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
