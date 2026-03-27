import { useState } from "react"

const imgBriefcase = "https://www.figma.com/api/mcp/asset/bf4ec938-b226-43d1-b492-7f565f12d8a1"

const resumeTabs = ["Experiences", "Educations", "Certifications"]

const experiences = [
  {
    title: "UI/UX Design",
    company: "EdTech",
    type: "Full-Time",
    period: "Jul 2020 - Present (1y 2m)",
    location: "Tokyo, Japan",
    description: "Created and executed website for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
  },
  {
    title: "Product Management",
    company: "FinTech",
    type: "Part-Time",
    period: "Mar 2021 - Jun 2022 (1y 3m)",
    location: "New York, USA",
    description: "Led cross-functional teams to launch a mobile banking app that improved user experience and increased customer retention by 25%.",
  },
  {
    title: "Graphic Design",
    company: "HealthTech",
    type: "Freelance",
    period: "Jan 2022 - Present (1y 10m)",
    location: "Remote",
    description: "Developed branding materials and promotional content for a telehealth startup, enhancing their visual presence and user engagement.",
  },
]

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState("Experiences")

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-col gap-6 items-center w-full">
        <div className="flex flex-col gap-9 items-center w-full">
          <div className="flex flex-col gap-6 items-start w-full">
            <h2 className="text-[24px] font-semibold text-[#333] leading-8">
              Resume
            </h2>

            <div className="border-b border-[#e9eaeb] flex items-start gap-3 w-full">
              {resumeTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex items-center justify-center h-8 px-1 pb-3 text-[14px] font-semibold leading-5 whitespace-nowrap ${
                    activeTab === tab
                      ? "text-[#6941c6] border-b-2 border-[#7f56d9]"
                      : "text-[#717680]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-8 items-start p-1 w-full">
            {experiences.map((exp, i) => (
              <div key={i} className="flex gap-4 sm:gap-6 items-start w-full">
                <div className="bg-[#a2d6f0] rounded-full size-11 flex items-center justify-center shrink-0">
                  <img src={imgBriefcase} alt="" className="size-5" />
                </div>
                <div className="flex-1 flex flex-col gap-4 min-w-0">
                  <div className="flex flex-col gap-2">
                    <p className="text-[18px] sm:text-[20px] font-medium text-black leading-[1.4]">
                      {exp.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[14px] sm:text-[16px] font-normal text-[#666] leading-[1.4]">
                      <span>{exp.company}</span>
                      <span className="size-1 rounded-full bg-[#666]" />
                      <span>{exp.type}</span>
                      <span className="size-1 rounded-full bg-[#666]" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-[14px] sm:text-[16px] font-normal text-[#666] leading-[1.4]">
                      {exp.location}
                    </p>
                  </div>
                  <p className="text-[14px] sm:text-[16px] font-normal text-[#252525] leading-[1.4]">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 p-1 rounded-2xl">
          <span className="text-[16px] font-medium text-[#007aff] leading-[1.4]">Show more</span>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ResumeSection
