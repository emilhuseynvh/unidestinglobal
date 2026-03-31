const logos = [
  "/img/guest/partner-logo-1.svg",
  "/img/guest/partner-logo-2.svg",
  "/img/guest/partner-logo-3.svg",
  "/img/guest/partner-logo-4.svg",
  "/img/guest/partner-logo-5.svg",
  "/img/guest/partner-logo-6.svg",
  "/img/guest/partner-logo-7.svg",
  "/img/guest/partner-logo-8.svg",
  "/img/guest/partner-logo-9.svg",
  "/img/guest/partner-logo-10.svg"
]

const PartnersSection = () => {
  return (
    <section className="max-w-[1312px] w-full mx-auto py-10 px-4 sm:px-8">
      <div className="flex flex-col gap-5 items-center max-w-[1204px] mx-auto">
        <p className="text-[#4b5162] text-base font-normal text-center opacity-80 leading-[1.6]">
          Trusted by 13,000+ universities worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-5 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[140px] sm:w-[187px] h-10 sm:h-12 relative shrink-0"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="absolute block max-w-none size-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
