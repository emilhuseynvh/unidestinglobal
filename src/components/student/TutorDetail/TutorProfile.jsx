import { useState } from "react"

const imgTutor = "https://www.figma.com/api/mcp/asset/80b3e694-0f24-4d1c-870d-c986a2f421d1"
const imgPlay = "https://www.figma.com/api/mcp/asset/bdf5e38e-b9fd-4ccf-9c83-7a6ed4710bb8"
const imgAlertIcon = "https://www.figma.com/api/mcp/asset/086b6172-2e18-4850-b860-f667ac8be021"

const pageTabs = [
  { label: "About me", path: "about" },
  { label: "My Courses", path: "courses" },
  { label: "My Schedule", path: "schedule" },
]

const TutorProfile = ({ activeTab = "about", onTabChange }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="flex flex-col gap-8 overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="flex-1 min-w-0 flex flex-col gap-3">
          <div className="flex flex-col gap-0.5">
            <h1 className="text-[24px] sm:text-[28px] font-semibold text-[#333] leading-[1.4]">
              I'm Lina C.
            </h1>
            <p className="text-[14px] font-normal text-[#808080] leading-[1.4]">
              🚀 Private English Tutor (10 Years+ Experience) | Learn to Speak Like a Natural!
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-1">
            <span className="bg-[#f8f9fc] border border-[#d5d9eb] rounded-md px-1.5 py-0.5 text-[12px] font-medium text-[#363f72] leading-[18px]">
              Super Tutor
            </span>
            <span className="bg-[#f8f9fc] border border-[#d5d9eb] rounded-md px-1.5 py-0.5 text-[12px] font-medium text-[#363f72] leading-[18px]">
              Excellence Certified
            </span>
            <span className="bg-[#fef3f2] border border-[#fecdca] rounded-md pl-1 pr-1.5 py-0.5 text-[12px] font-medium text-[#b42318] leading-[18px] flex items-center gap-1">
              <img src={imgAlertIcon} alt="" className="size-3" />
              Left 3 days
            </span>
          </div>

          <div className="flex flex-col gap-5 mt-1">
            <p className={`text-[16px] font-normal text-[#333] leading-[1.4] ${expanded ? "" : "line-clamp-5"}`}>
              Hi there! My name is John, and I'm a German teacher with 8 years of experience. I specialize in helping students of all levels develop their speaking, listening, and writing skills through personalized lessons tailored to individual needs. I'm passionate about creating dynamic and engaging learning experiences that make German accessible and enjoyable. Whether you're a beginner or looking to perfect your fluency, I'm here to
            </p>
            <p className={`text-[16px] font-normal text-[#333] leading-[1.4] ${expanded ? "" : "line-clamp-1"}`}>
              Throughout the course, participants will explore the principles of user-centered design and learn h...
            </p>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center gap-2 p-1 self-start"
            >
              <span className="text-[16px] font-medium text-[#007aff] leading-[1.4]">
                {expanded ? "Show less" : "Show more"}
              </span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform ${expanded ? "rotate-180" : ""}`}>
                <path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="w-full lg:w-[380px] shrink-0 bg-white border border-[#dcdcdc] rounded-2xl p-5 shadow-[0px_11px_60px_0px_rgba(0,0,0,0.08)] flex flex-col gap-6 self-start lg:sticky lg:top-6">
          <div className="w-full h-[220px] rounded-lg overflow-hidden relative shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)]">
            <img
              src={imgTutor}
              alt="Tutor intro video"
              className="absolute inset-0 size-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-[#007aff] size-14 rounded-[28px] flex items-center justify-center hover:bg-[#0066d6] transition-colors">
                <img src={imgPlay} alt="Play" className="size-6" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <button className="w-full h-12 bg-[#007aff] rounded-2xl text-white text-[16px] font-medium leading-[1.4] hover:bg-[#0066d6] transition-colors">
              Book trial lesson
            </button>
            <button className="w-full h-12 border border-[#c6c5c8] rounded-2xl text-black text-[16px] font-medium leading-[1.4] hover:bg-[#f9f9f9] transition-colors">
              Save to my list
            </button>
          </div>
        </div>
      </div>

      <div className="border-b border-[#e9eaeb] flex items-start gap-3 overflow-x-auto">
        {pageTabs.map((tab) => (
          <button
            key={tab.path}
            onClick={() => onTabChange?.(tab.path)}
            className={`flex items-center justify-center h-8 px-1 pb-3 text-[14px] font-semibold leading-5 whitespace-nowrap shrink-0 ${
              activeTab === tab.path
                ? "text-[#6941c6] border-b-2 border-[#7f56d9]"
                : "text-[#717680] hover:text-[#414651]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export default TutorProfile
