import { useState } from 'react'

const imgPlus = "https://www.figma.com/api/mcp/asset/66a0642d-7a1f-4fc5-a3d6-b9da1b7b0c88"

const faqData = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes. Tokko is designed for beginners and experienced creators alike, with everything explained step by step."
  },
  {
    question: "Will this work for my niche?",
    answer: "Absolutely! Our courses are designed to be applicable across various industries and niches."
  },
  {
    question: "What if I don't see results?",
    answer: "We offer a 30-day money-back guarantee if you're not satisfied with the results."
  },
  {
    question: "Which plan should I choose?",
    answer: "We recommend starting with the basic plan and upgrading as your needs grow."
  },
  {
    question: "Can I access this on mobile?",
    answer: "Yes, our platform is fully responsive and works great on all devices."
  }
]

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="flex flex-col items-center px-[64px] py-[88px] w-full">
      <div className="flex flex-col gap-[64px] items-center max-w-[1440px] w-full">
        <h2 className="font-semibold leading-none text-[#1a1a1a] text-[48px] text-center tracking-[-1.92px]">
          Questions You Might Have
        </h2>

        <div className="flex flex-col gap-[16px] items-start w-[648px]">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className={`bg-[rgba(26,26,26,0.05)] flex gap-[32px] items-start overflow-hidden pl-[32px] pr-[8px] py-[8px] w-full cursor-pointer ${openIndex === index ? 'rounded-[32px]' : 'rounded-full'}`}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            >
              <div className="flex flex-col flex-1 gap-[8px] items-start py-[16px]">
                <p className="font-medium leading-[1.24] text-[#1a1a1a] text-[18px] tracking-[-0.36px] w-full">
                  {faq.question}
                </p>
                {openIndex === index && (
                  <p className="max-w-[400px] text-[16px] text-[rgba(26,26,26,0.65)] tracking-[-0.32px] w-full">
                    {faq.answer}
                  </p>
                )}
              </div>
              <div className="bg-white flex items-center justify-center p-[16px] rounded-full shadow-[0px_12px_20px_0px_rgba(26,26,26,0.1)]">
                <img
                  src={imgPlus}
                  alt=""
                  className={`size-[20px] transition-transform duration-300 ${openIndex === index ? 'rotate-45' : ''}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
