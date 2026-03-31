import { useState } from 'react'

const faqItems = [
  { id: 1, question: "Is this course beginner-friendly?", answer: "Yes. Tokko is designed for beginners and experienced creators alike, with everything explained step by step." },
  { id: 2, question: "Will this work for my niche?", answer: "Absolutely! Our programs are designed to be versatile and can be applied to any field of study or career path you're interested in." },
  { id: 3, question: "What if I don't see results?", answer: "We offer a comprehensive support system and resources. If you follow our guidance and still don't see results, we'll work with you to find a solution." },
  { id: 4, question: "Which plan should I choose?", answer: "It depends on your goals. Our basic plan is great for getting started, while premium plans offer more personalized guidance and resources." },
  { id: 5, question: "Can I access this on mobile?", answer: "Yes! Our platform is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktops." },
]

const FAQSection = () => {
  const [openId, setOpenId] = useState(1)

  return (
    <section className="w-full py-12 sm:py-16 lg:py-[88px] px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col gap-8 sm:gap-12 lg:gap-16 items-center max-w-[1440px] mx-auto w-full">
        <h2 className="text-[#1a1a1a] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-none tracking-[-1.92px] text-center w-full max-w-[426px]">
          Let's clear a few things up
        </h2>

        <div className="flex flex-col gap-3 sm:gap-4 w-full max-w-[648px]">
          {faqItems.map((item) => (
            <div
              key={item.id}
              className={`bg-[rgba(26,26,26,0.05)] flex gap-4 sm:gap-8 items-start overflow-hidden pl-4 sm:pl-8 pr-2 py-2 cursor-pointer w-full transition-all duration-300 ${
                openId === item.id ? 'rounded-[24px] sm:rounded-[32px]' : 'rounded-full'
              }`}
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
            >
              <div className="flex-1 flex flex-col gap-2 py-3 sm:py-4 min-w-0">
                <p className="text-[#1a1a1a] text-base sm:text-lg font-medium leading-[1.24] tracking-[-0.36px]">
                  {item.question}
                </p>
                <div className={`overflow-hidden transition-all duration-300 ${openId === item.id ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[rgba(26,26,26,0.65)] text-sm sm:text-base font-medium leading-[1.24] tracking-[-0.32px]">
                    {item.answer}
                  </p>
                </div>
              </div>
              <div className="bg-white flex items-center justify-center p-3 sm:p-4 rounded-full shadow-[0px_12px_20px_0px_rgba(26,26,26,0.1)] shrink-0">
                <div className={`w-4 h-4 sm:w-5 sm:h-5 relative transition-transform duration-300 ${openId === item.id ? 'rotate-45' : 'rotate-0'}`}>
                  <svg width="100%" height="100%" viewBox="0 0 20 20" fill="none">
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
