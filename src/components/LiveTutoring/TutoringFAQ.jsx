import { useState } from "react"

const faqData = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes, our live tutoring sessions are designed for all levels. Tutors adapt their teaching style to match your current knowledge and learning pace.",
  },
  {
    question: "Will this work for my niche?",
    answer: "We cover a wide range of subjects including IELTS, TOEFL, Programming, Mathematics, Science, Languages, and more. If you can't find a specific subject, contact us.",
  },
  {
    question: "What if I don't have access?",
    answer: "All you need is a stable internet connection and a device with a camera and microphone. Our platform works on any modern browser.",
  },
  {
    question: "What topics does it cover?",
    answer: "Our tutors cover academic subjects, test preparation, professional skills, language learning, and creative arts.",
  },
  {
    question: "Can I access this on mobile?",
    answer: "Yes, our virtual classroom is fully responsive and works on mobile devices, tablets, and desktop computers.",
  },
]

const TutoringFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-12">
        <h2 className="text-[28px] sm:text-[36px] font-bold text-black text-center leading-tight">
          Questions You<br />Might Have
        </h2>

        <div className="flex flex-col gap-4 w-full max-w-[648px]">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`bg-[rgba(26,26,26,0.05)] flex gap-8 items-start overflow-hidden pl-8 pr-2 py-2 cursor-pointer ${isOpen ? "rounded-[32px]" : "rounded-full"}`}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex-1 flex flex-col gap-2 py-4">
                  <span className="text-[18px] font-medium text-[#1a1a1a] leading-[1.24] tracking-[-0.36px]">
                    {faq.question}
                  </span>
                  {isOpen && (
                    <p className="text-[16px] font-medium text-[rgba(26,26,26,0.65)] leading-[1.24] tracking-[-0.32px] max-w-[400px]">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="bg-white rounded-full p-4 shadow-[0px_12px_20px_0px_rgba(26,26,26,0.1)] shrink-0">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    {isOpen ? (
                      <path d="M4 10h12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                    ) : (
                      <path d="M10 4v12M4 10h12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                    )}
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default TutoringFAQ
