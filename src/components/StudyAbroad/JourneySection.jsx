const ExploreIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
    <path d="M16.24 7.76l-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const steps = [
  { number: "01", title: "Explore Programs", description: "Browse our diverse range of skill-based programs" },
  { number: "02", title: "Enroll & Learn", description: "Join interactive lessons with industry experts" },
  { number: "03", title: "Apply & Grow", description: "Use your new skills in real-world scenarios" },
]

const JourneySection = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto bg-white px-4 sm:px-8 lg:px-0 py-12 lg:py-0 lg:relative lg:min-h-[893px]">
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0">
        <div className="w-full lg:absolute lg:left-[174px] lg:top-[128px] lg:w-[426px] flex flex-col gap-10 lg:gap-16">
          <div className="flex flex-col gap-4">
            <h2 className="text-[#1a1a1a] text-[32px] sm:text-[40px] lg:text-[48px] font-semibold leading-none tracking-[-1.92px]">
              Begin your study abroad journey
            </h2>
            <p className="text-[#141219] text-base sm:text-lg leading-normal">
              Self‑paced courses designed for students — created by tutors who've helped real applicants succeed.
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-4 sm:gap-6 items-start">
                <div className="flex items-center justify-center w-12 h-12 sm:w-[60px] sm:h-[60px] bg-[#9bd8a9] rounded-full shrink-0">
                  <ExploreIcon />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[#9bd8a9] text-sm sm:text-base font-medium">Step {step.number}</span>
                  <p className="text-[#141219] text-base sm:text-lg">{step.title} – {step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full max-w-[480px] lg:absolute lg:left-[784px] lg:top-[128px] lg:w-[480px] h-[350px] sm:h-[450px] lg:h-[633px] rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=960&h=1266&fit=crop"
            alt="Students studying abroad"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="hidden lg:block absolute left-[720px] top-[527px] w-[235px] h-[280px] bg-white rounded-3xl shadow-[-40px_40px_80px_0px_rgba(0,0,0,0.08)] overflow-hidden p-6">
        <div className="flex flex-col gap-2">
          <span className="text-[#141219] text-base">8-15 Jan</span>
          <div className="flex items-center gap-2">
            <span className="text-[#141219] text-lg font-bold">Week</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#141219" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-0 relative h-[140px]">
          {[0, 1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-full h-6 border-t border-[#e5e5e5]" />
          ))}
          <svg className="absolute left-0 top-0 w-full h-full" viewBox="0 0 186 140" fill="none">
            <path d="M0 120 C30 110, 50 80, 80 70 S120 30, 137 20" stroke="#9bd8a9" strokeWidth="2" fill="none" />
            <path d="M100 60 C110 40, 125 20, 137 20" stroke="#d4e8d8" strokeWidth="2" fill="none" />
            <circle cx="117" cy="45" r="6" fill="#9bd8a9" />
          </svg>
          <div className="absolute left-[20px] top-[45px] bg-[#ebf5ed] rounded-full px-2 py-1">
            <span className="text-[#488d59] text-sm font-medium">+60%</span>
          </div>
          <div className="absolute right-0 top-0 flex flex-col justify-between h-full text-right">
            <span className="text-xs text-[#999]">4K</span>
            <span className="text-xs text-[#999]">2K</span>
            <span className="text-xs text-[#999]">0</span>
          </div>
        </div>
        <span className="text-[#141219] text-base mt-2 block">New students</span>
      </div>
    </section>
  )
}

export default JourneySection
