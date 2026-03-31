const infoCards = [
  { label: "Tution / Year", value: "$300" },
  { label: "Start Date", value: "Sep 2026" },
  { label: "Language", value: "English" },
  { label: "Degree", value: "Master of Science" },
  { label: "Mode", value: "Full time" },
  { label: "Cohort size", value: "30 Students" },
]

const ProgramOverview = () => {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-col gap-4">
        <h2 className="text-[20px] font-semibold text-black leading-7">Program Overview</h2>
        <div className="flex flex-col gap-4 text-[16px] font-normal text-[#4d4d4d] leading-[1.6]">
          <p>
            The MSc in Computer Science at the University of Oxford is one of the world's most prestigious graduate programs. Designed for students with strong mathematical and computing backgrounds, the program offers advanced study in algorithms, machine learning, computational biology, quantum computing, and software engineering. Students benefit from world-class faculty, cutting-edge research facilities, and an extensive alumni network spanning top technology companies and research institutions globally.
          </p>
          <p>
            Throughout the course, participants will explore the principles of user-centered design and learn how to effectively apply them to their projects. They will delve into various research methodologies, such as user interviews, surveys, and usability testing, to gain valuable insights into user behavior and preferences.
          </p>
        </div>
        <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] self-center flex items-center gap-1">
          Read more
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {infoCards.map((card) => (
          <div key={card.label} className="bg-[#fafafa] rounded-xl p-4 flex flex-col items-center gap-3">
            <div className="size-16 rounded-full bg-white flex items-center justify-center">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M22.667 12l-8 8-4-4" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <rect x="4" y="4" width="24" height="24" rx="4" stroke="#333" strokeWidth="2"/>
              </svg>
            </div>
            <div className="text-center">
              <span className="text-[12px] font-normal text-[#666] leading-[1.4] block">{card.label}</span>
              <span className="text-[16px] font-semibold text-black leading-6">{card.value}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramOverview
