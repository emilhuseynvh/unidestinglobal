const sections = [
  {
    icon: "🎓",
    title: "Academic Requirements",
    items: [
      "A strong undergraduate degree (First or Upper Second Class) in Computer Science or a closely related discipline",
      "Strong mathematical background, particularly in linear algebra, calculus, probability and statistics",
    ],
  },
  {
    icon: "🌐",
    title: "Language Requirements",
    items: [
      "IELTS: 7.5 overall (minimum 7.0 in each component)",
      "TOEFL iBT: 110 overall (minimum 22 in listening, 24 in reading, 25 in speaking, 24 in writing)",
    ],
  },
  {
    icon: "📄",
    title: "Required Documents",
    items: [
      "Official academic transcripts",
      "Two academic references",
      "Personal statement (max 2 pages)",
      "CV / Resume",
      "Valid passport copy",
    ],
  },
  {
    icon: "✅",
    title: "Additional",
    items: [
      "GRE scores recommended but not required",
      "Relevant work or research experience is advantageous",
    ],
  },
]

const ProgramRequirements = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[20px] font-semibold text-black leading-7">Requirements</h2>
      <div className="flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.title} className="flex flex-col gap-3">
            <h3 className="text-[16px] font-semibold text-black leading-6">
              {section.icon} {section.title}
            </h3>
            <ul className="flex flex-col gap-2 pl-1">
              {section.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[14px] font-normal text-[#4d4d4d] leading-[1.5]">
                  <span className="text-[#666] mt-1.5 shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramRequirements
