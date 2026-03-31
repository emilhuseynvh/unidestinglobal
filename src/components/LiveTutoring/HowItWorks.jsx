const steps = [
  {
    title: "Find your tutor",
    description: "Browse by subject, language, availability, and rating. Filter for your perfect match.",
    bg: "#ebfbff",
    image: "/img/live-tutoring/Covers.svg",
  },
  {
    title: "Book a lesson",
    description: "Choose a time slot from tutor's calendar. Pay securely with multi-currency support.",
    bg: "#ffebf6",
    image: "/img/live-tutoring/Covers2.svg",
  },
  {
    title: "Join Live Session",
    description: "Connect via HD video with whiteboard, screen share, and real-time chat tools.",
    bg: "#ebfbff",
    image: "/img/live-tutoring/Covers3.svg",
  },
  {
    title: "Rate & Progress",
    description: "Rate your session, track your progress, and book your next lesson.",
    bg: "#ebfffb",
    image: "/img/live-tutoring/Covers4.svg",
  },
]

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="bg-[#fafafa] rounded-2xl px-2 sm:px-8 py-16 sm:py-18 flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4 max-w-[647px]">
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] leading-none tracking-[-1.92px]">
            How Live Tutoring Works
          </h2>
          <p className="text-[16px] font-normal text-[#4d4d4d] leading-[1.4]">
            Start learning in just 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {steps.map((step) => (
            <div key={step.title} className="bg-white border border-[#f5f5f5] rounded-xl p-3 flex flex-col gap-4 items-center">
              <div
                className="w-full h-[179px] rounded-xl flex items-center justify-center overflow-hidden"
                style={{ backgroundColor: step.bg }}
              >
                <img src={step.image} alt={step.title} className="max-h-[130px] object-contain" />
              </div>
              <div className="flex flex-col gap-1 items-center text-center max-w-[285px]">
                <h3 className="text-[16px] font-semibold text-[#111] leading-6">{step.title}</h3>
                <p className="text-[16px] font-normal text-[#727885] leading-[1.4]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
