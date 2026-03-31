import { useState } from "react"

const terms = [
  {
    title: "Term 1",
    courses: [
      "Algorithms and Data Structures",
      "Machine Learning Fundamentals",
      "Computer Architecture",
      "Mathematics for Computer Science",
    ],
  },
  {
    title: "Term 2",
    courses: [
      "Advanced Machine Learning",
      "Distributed Systems",
      "Natural Language Processing",
      "Software Engineering",
    ],
  },
  {
    title: "Term 3",
    courses: [
      "Research Project / Dissertation",
      "Quantum Computing",
      "Computer Vision",
      "Ethics in AI",
    ],
  },
]

const ProgramCurriculum = () => {
  const [openTerm, setOpenTerm] = useState(0)

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[20px] font-semibold text-black leading-7">Curriculum</h2>
      <div className="flex flex-col gap-4">
        {terms.map((term, index) => (
          <div key={term.title} className="border border-[#e9eaeb] rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenTerm(openTerm === index ? -1 : index)}
              className="w-full flex items-center justify-between px-5 py-4 hover:bg-[#fafafa] transition-colors"
            >
              <span className="text-[16px] font-semibold text-black leading-6">{term.title}</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform ${openTerm === index ? "rotate-180" : ""}`}>
                <path d="M5 7.5l5 5 5-5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {openTerm === index && (
              <div className="px-5 pb-4 flex flex-col gap-3">
                {term.courses.map((course) => (
                  <div key={course} className="flex items-center gap-3 py-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
                      <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-[14px] font-normal text-[#333] leading-[1.4]">{course}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProgramCurriculum
