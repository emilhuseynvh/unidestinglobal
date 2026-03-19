import { useState } from 'react'

const imgPlus = "https://www.figma.com/api/mcp/asset/fab8aa06-c859-48af-b3aa-219f1a8c22df"

const faqData = {
  Leaner: [
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
  ],
  Structor: [
    {
      question: "How do I become a tutor?",
      answer: "Simply sign up and complete your profile with your expertise and qualifications."
    },
    {
      question: "What are the payment terms?",
      answer: "Tutors receive payments weekly, with a transparent commission structure."
    },
    {
      question: "Can I set my own schedule?",
      answer: "Yes, you have full control over your availability and teaching schedule."
    },
    {
      question: "What subjects can I teach?",
      answer: "You can teach any subject you're qualified in. We support a wide range of topics."
    },
    {
      question: "Is there tutor support?",
      answer: "Yes, we provide 24/7 support for all our tutors through dedicated channels."
    }
  ]
}

const FAQContentSection = () => {
  const [activeCategory, setActiveCategory] = useState('Leaner')
  const [openIndex, setOpenIndex] = useState(0)

  const categories = ['Leaner', 'Structor']

  return (
    <section className="flex flex-col items-start pb-[44px] pt-[64px] px-[175px] w-full">
      <div className="flex gap-[16px] items-start w-full">
        <div className="flex flex-col gap-[24px] items-start w-[205px]">
          <p className="font-medium leading-[1.3] text-[#0d0d12] text-[24px] text-center whitespace-nowrap">
            Categories
          </p>
          <div className="flex flex-col items-start w-full">
            {categories.map((category) => (
              <div
                key={category}
                className={`flex h-[40px] items-center px-[16px] py-[4px] w-full cursor-pointer border-l ${
                  activeCategory === category
                    ? 'border-[#0080ff] text-[#0080ff]'
                    : 'border-[#dfe1e7] text-[#666d80]'
                }`}
                onClick={() => {
                  setActiveCategory(category)
                  setOpenIndex(0)
                }}
              >
                <p className="flex-1 font-medium leading-[1.6] text-[16px]">
                  {category}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-[16px] items-start w-[869px]">
          {faqData[activeCategory].map((faq, index) => (
            <div
              key={index}
              className={`bg-[rgba(26,26,26,0.05)] flex gap-[32px] items-start overflow-hidden pl-[32px] pr-[8px] py-[8px] w-full cursor-pointer ${
                openIndex === index ? 'rounded-[32px]' : 'rounded-full'
              }`}
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

export default FAQContentSection
