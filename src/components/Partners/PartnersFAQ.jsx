import { useState } from "react"

const faqData = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes. Tokko is designed for beginners and experienced creators alike, with everything explained step by step.",
  },
  {
    question: "Will this work for my niche?",
    answer: "Absolutely. Our partnership programs are designed to be flexible and adaptable across various educational niches and industries.",
  },
  {
    question: "How long does the partnership process take?",
    answer: "The onboarding process typically takes 2-4 weeks, depending on the complexity of the partnership and integration requirements.",
  },
  {
    question: "What kind of support do partners receive?",
    answer: "Partners receive dedicated account management, marketing support, technical integration assistance, and regular performance reviews.",
  },
]

const PartnersFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-16 sm:py-22">
      <div className="flex flex-col items-center gap-16">
        <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] text-center tracking-[-1.92px] leading-none">
          Questions You Might Have
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
                      <>
                        <path d="M4 10h12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                      </>
                    ) : (
                      <>
                        <path d="M10 4v12M4 10h12" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" />
                      </>
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

export default PartnersFAQ
