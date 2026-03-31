const partnerLogos = [
  { src: "/img/guest/partner-logo-1.svg", alt: "Partner 1" },
  { src: "/img/guest/partner-logo-2.svg", alt: "Partner 2" },
  { src: "/img/guest/partner-logo-3.svg", alt: "Partner 3" },
  { src: "/img/guest/partner-logo-4.svg", alt: "Partner 4" },
  { src: "/img/guest/partner-logo-5.svg", alt: "Partner 5" },
  { src: "/img/guest/partner-logo-6.svg", alt: "Partner 6" },
  { src: "/img/guest/partner-logo-7.svg", alt: "Partner 7" },
  { src: "/img/guest/partner-logo-8.svg", alt: "Partner 8" },
  { src: "/img/guest/partner-logo-9.svg", alt: "Partner 9" },
  { src: "/img/guest/partner-logo-10.svg", alt: "Partner 10" },
]

const LightningIcon = () => (
  <svg width="25" height="37" viewBox="0 0 25.0976 36.469" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.3707 0.350555C14.8418 -0.30914 15.8822 0.0242219 15.8822 0.834922V14.9011H24.2628C24.9407 14.9011 25.3348 15.6673 24.9408 16.219L10.727 36.1185C10.2557 36.7781 9.21547 36.4448 9.21547 35.6341V21.5678H0.83479C0.15699 21.5678 -0.237276 20.8018 0.156691 20.2501L14.3707 0.350555Z" fill="#FF832D" />
  </svg>
)

const PartnersSection = () => {
  return (
    <section className="py-20">
      <div className="bg-[#f2f2f4] border border-black/[0.03] rounded-[32px] px-8 sm:px-16 py-16 sm:py-[100px] flex flex-col gap-16 items-center">
        <h2 className="text-[42px] sm:text-[62px] font-semibold text-[#0a0c11] leading-[1.1] tracking-[-0.2px] text-center max-w-[440px]">
          Trusted by Our Partners
        </h2>

        <div className="flex flex-col gap-5 items-center w-full max-w-[1204px]">
          <p className="text-base text-[#5b616d] text-center opacity-80 leading-6">
            160,000+ customers in over 120 countries grow their businesses with Unidestin
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 py-5 w-full">
            {partnerLogos.map((logo) => (
              <img
                key={logo.src}
                src={logo.src}
                alt={logo.alt}
                className="h-12 w-[187px] object-contain"
              />
            ))}
          </div>
        </div>

        <div className="bg-[#ececf0] rounded-[20px] p-6 sm:p-8 flex flex-col gap-6 sm:gap-8 sm:flex-row items-center w-full max-w-[1096px]">
          <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 sm:gap-6 flex-1 text-center sm:text-left">
            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
              <LightningIcon />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-lg sm:text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">
                Learn or Teach. Journey Starts Here.
              </p>
              <p className="text-sm sm:text-lg font-medium text-[#5b616d] leading-6">
                Join a growing community of students and tutors learning and teaching.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 items-center shrink-0 w-full sm:w-auto">
            <button className="h-12 px-4 w-full sm:w-auto rounded-xl border border-black/[0.06] bg-[#f2f2f4]/80 backdrop-blur-[12px] text-base font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ec] transition-colors">
              Become a Tutor
            </button>
            <button className="h-12 px-4 w-full sm:w-auto rounded-xl border border-black/[0.09] bg-[#007aff] backdrop-blur-[12px] text-base font-medium text-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
