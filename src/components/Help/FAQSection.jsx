import { useState } from "react"

const tabs = ["All Courses", "Today", "Active Courses", "Past Lessons", "My Scheldue", "My List"]

const faqs = [
  {
    question: "Are there any age restrictions to use this platform?",
    answer: "Welcome to our Help Center! Here, you'll find answers to frequently asked questions, helpful guides, and useful tips to assist you in getting the most out of our platform.",
  },
  { question: "Are there any promotions or discounts available?" },
  { question: "How do I create an account?" },
  { question: "What payment methods do you accept?" },
  { question: "How do I update my profile information?" },
  { question: "Are there any age restrictions to use this platform?" },
]

const FAQSection = () => {
  const [activeTab, setActiveTab] = useState("All Courses")
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-0.5">
        <h2 className="text-[24px] font-semibold text-[#333] leading-8">FAQs</h2>
        <p className="text-[14px] font-normal text-[#808080] leading-[1.4] max-w-[459px]">
          Have questions? We've got answers! Check out our Frequently Asked Questions (FAQs) to find quick solutions to common queries. Save time and get the information you need right here.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:w-[128px] lg:shrink-0 pb-2 lg:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center h-9 px-3 py-2 text-[14px] font-semibold leading-5 whitespace-nowrap text-left transition-colors rounded-lg lg:rounded-none shrink-0 ${
                activeTab === tab
                  ? "text-[#6941c6] lg:border-l-2 lg:border-[#7f56d9] bg-[#f4f3ff] lg:bg-transparent"
                  : "text-[#717680] hover:text-[#414651] hover:bg-[#f5f5f5] lg:hover:bg-transparent"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex-1 flex flex-col min-w-0 p-1">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={i}>
                <div className="flex flex-col gap-2.5 py-5">
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex items-center justify-between gap-4 w-full text-left"
                  >
                    <span className={`text-[16px] font-medium leading-6 ${isOpen ? "text-[#007aff]" : "text-[#333]"}`}>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M6 9l6 6 6-6" stroke="#007aff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                        <path d="M9 6l6 6-6 6" stroke="#333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    )}
                  </button>
                  {isOpen && faq.answer && (
                    <p className="text-[12px] font-normal text-[#808080] leading-[1.4]">
                      {faq.answer}
                    </p>
                  )}
                </div>
                <div className="h-px bg-[#e9eaeb]" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default FAQSection
