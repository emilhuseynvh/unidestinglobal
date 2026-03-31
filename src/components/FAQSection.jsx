import { useState } from 'react'

const faqItems = [
  {
    id: 1,
    question: "Is this course beginner-friendly?",
    answer: "Yes. Tokko is designed for beginners and experienced creators alike, with everything explained step by step."
  },
  {
    id: 2,
    question: "Will this work for my niche?",
    answer: "Absolutely! Our programs are designed to be versatile and can be applied to any field of study or career path you're interested in."
  },
  {
    id: 3,
    question: "What if I don't see results?",
    answer: "We offer a comprehensive support system and resources. If you follow our guidance and still don't see results, we'll work with you to find a solution."
  },
  {
    id: 4,
    question: "Which plan should I choose?",
    answer: "It depends on your goals. Our basic plan is great for getting started, while premium plans offer more personalized guidance and resources."
  },
  {
    id: 5,
    question: "Can I access this on mobile?",
    answer: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops."
  }
]

const FAQSection = () => {
  const [openId, setOpenId] = useState(1)

  const toggleItem = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="w-full py-[88px] px-[64px]">
      <div className="flex flex-col gap-[64px] items-center max-w-[1440px] mx-auto w-full">
        <p className="text-[#1a1a1a] text-[48px] font-semibold leading-none tracking-[-1.92px] text-center w-[426px]">
          Let's clear a few things up
        </p>

        <div className="flex flex-col gap-4 items-start w-[648px]">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`bg-[rgba(26,26,26,0.05)] flex gap-8 items-start overflow-hidden pl-8 pr-2 py-2 cursor-pointer w-full transition-all duration-300 ${
                openId === item.id ? 'rounded-[32px]' : 'rounded-[100px]'
              }`}
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex-1 flex flex-col gap-2 items-start py-4">
                <p className="text-[#1a1a1a] text-[18px] font-medium leading-[1.24] tracking-[-0.36px] w-full">
                  {item.question}
                </p>
                <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[rgba(26,26,26,0.65)] text-[16px] font-medium leading-[1.24] tracking-[-0.32px] max-w-[400px] w-full">
                    {item.answer}
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-center justify-center p-4 rounded-full shadow-[0px_12px_20px_0px_rgba(26,26,26,0.1)] shrink-0">
                <div className={`size-5 relative transition-transform duration-300 ${openId === item.id ? 'rotate-45' : 'rotate-0'}`}>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 4V16" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 10H16" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection
