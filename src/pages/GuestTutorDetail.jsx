import { useState } from "react"
import { useParams } from "react-router"
import GuideHeader from "../components/GuideHeader"

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 1.667l2.252 4.565 5.039.736-3.646 3.553.86 5.018L10 13.408l-4.505 2.131.86-5.018L2.71 6.968l5.039-.736L10 1.667z" fill="#F79009" stroke="#F79009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const GraduationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 12.5L2.5 8.333 10 4.167l7.5 4.166L10 12.5z" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5 9.583v4.167c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5V9.583" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 16.667c-1.833-1.334-4-2-6.167-2a11.5 11.5 0 00-2.5.278v-11.5a11.5 11.5 0 012.5-.278c2.167 0 4.334.666 6.167 2m0 11.5c1.833-1.334 4-2 6.167-2a11.5 11.5 0 012.5.278v-11.5a11.5 11.5 0 00-2.5-.278c-2.167 0-4.334.666-6.167 2" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const LocationIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 10.833a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10 17.5s6.25-4.375 6.25-9.167a6.25 6.25 0 10-12.5 0C3.75 13.125 10 17.5 10 17.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 12.5a1.667 1.667 0 01-1.667 1.667H5.833L2.5 17.5V4.167A1.667 1.667 0 014.167 2.5h11.666A1.667 1.667 0 0117.5 4.167V12.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BriefcaseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M16.667 5.833H3.333c-.92 0-1.666.746-1.666 1.667v8.333c0 .92.746 1.667 1.666 1.667h13.334c.92 0 1.666-.746 1.666-1.667V7.5c0-.92-.746-1.667-1.666-1.667z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M13.333 17.5V4.167A1.667 1.667 0 0011.667 2.5H8.333a1.667 1.667 0 00-1.666 1.667V17.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2.5 15l5-5 3.333 3.333L17.5 6.667" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12.5 6.667h5v5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ThumbsUpIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5.833 9.167l3.334-7.5a2.5 2.5 0 012.5 2.5v3.333h4.416a1.667 1.667 0 011.65 1.917l-1.15 6.666a1.667 1.667 0 01-1.65 1.417H5.833" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M5.833 9.167v8.333H3.333a1.667 1.667 0 01-1.666-1.667v-5a1.667 1.667 0 011.666-1.666h2.5z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const PlayIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M5 3l14 9-14 9V3z" fill="#0a0c11" />
  </svg>
)

const tutor = {
  id: 1,
  name: "John Doe",
  subtitle: "Passionate AI/ML educator with 10 years of experience in simplifying complex concepts.",
  location: "Mexico City",
  languages: "English, Spain",
  rating: 4.9,
  reviews: 23,
  students: 30,
  lessons: 147,
  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  courseTitle: "UX Master Class: Enhancing User Experience for Optimal Design",
  about: `Hi there! My name is John, and I'm a German teacher with 8 years of experience. I specialize in helping students of all levels develop their speaking, listening, and writing skills through personalized lessons tailored to individual needs. I'm passionate about creating dynamic and engaging learning experiences that make German accessible and enjoyable. Whether you're a beginner or looking to perfect your fluency, I'm here to help.`,
  aboutMore: `Throughout the course, participants will explore the principles of user-centered design and learn how to effectively apply them to their projects. They will delve into various research methodologies, such as user interviews, surveys, and usability testing, to gain valuable insights into user behavior and preferences. By leveraging this knowledge, participants will discover how to craft intuitive and engaging interfaces that meet user needs and exceed their expectations.`,
  highlights: ["Adaptable", "Approachable", "Encouraging", "Engaging"],
  experience: [
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
  ],
  reviewsList: [
    { name: "Sarah M.", date: "2 weeks ago", text: "John is an amazing tutor! His lessons are well-structured and he makes complex topics very easy to understand. Highly recommended!", rating: 5 },
    { name: "David K.", date: "1 month ago", text: "Great experience learning with John. He is patient, knowledgeable, and always prepared. My German improved significantly in just 3 months.", rating: 5 },
    { name: "Emily R.", date: "2 months ago", text: "I've been taking lessons with John for 6 months now and I can confidently say he's one of the best tutors I've had. Very engaging teaching style.", rating: 4 },
  ],
}

const tabs = ["About me", "My students reviews", "Schedule", "Resume", "My courses"]
const resumeTabs = ["Experiences", "Educations", "Certifications"]

const GuestTutorDetail = () => {
  const { id } = useParams()
  const [activeTab, setActiveTab] = useState("About me")
  const [activeResumeTab, setActiveResumeTab] = useState("Experiences")
  const [showFullAbout, setShowFullAbout] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <div className="relative px-4 sm:px-6 lg:px-[25px] pt-4">
        <div className="bg-[#b9cbf5] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] overflow-hidden pb-32">
          <div className="relative z-10 mb-12">
            <GuideHeader />
          </div>
          <div className="max-w-[920px] mx-auto px-4 flex flex-col items-center text-center gap-5">
            <div className="flex flex-col items-center gap-5">
              <h1 className="text-[48px] sm:text-[64px] font-bold text-[#141219] leading-tight">
                I'm {tutor.name}
              </h1>
              <p className="text-lg text-[#141219] max-w-[571px]">
                {tutor.subtitle}
              </p>
            </div>
            <div className="flex items-center gap-6 text-[#f7f8fc]">
              <span className="flex items-center gap-2 text-base font-medium">
                <LocationIcon />
                {tutor.location}
              </span>
              <span className="flex items-center gap-2 text-base font-medium">
                <MessageIcon />
                {tutor.languages}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-[141px] mt-8">
        <div className="flex flex-col lg:flex-row gap-10">
          <div className="flex-1 min-w-0">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded-md text-xs font-medium bg-[#f8f9fc] border border-[#d5d9eb] text-[#363f72] w-fit">
                    Super Tutor
                  </span>
                  <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">
                    {tutor.courseTitle}
                  </h2>
                </div>
                <div className="border-b border-[#e9eaeb]">
                  <div className="flex gap-3 overflow-x-auto">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-1 pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                          activeTab === tab
                            ? "border-[#007aff] text-[#007aff]"
                            : "border-transparent text-[#717680] hover:text-[#333]"
                        }`}
                      >
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-14">
                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">About me</h3>
                  <div className="flex flex-col gap-5">
                    <p className="text-base text-[#333] leading-[1.4]">{tutor.about}</p>
                    {showFullAbout && (
                      <p className="text-base text-[#333] leading-[1.4]">{tutor.aboutMore}</p>
                    )}
                    {!showFullAbout && (
                      <p className="text-base text-[#333] leading-[1.4] truncate">{tutor.aboutMore}</p>
                    )}
                    <button
                      onClick={() => setShowFullAbout(!showFullAbout)}
                      className="text-[#007aff] text-base font-medium self-start flex items-center gap-2"
                    >
                      {showFullAbout ? "Show less" : "Show more"}
                      <svg width="9" height="18" viewBox="0 0 9 18" fill="none" className={`transition-transform ${showFullAbout ? "rotate-90" : "-rotate-90"}`}>
                        <path d="M8 1L1 9l7 8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">Highlights</h3>
                  <div className="flex flex-wrap gap-3">
                    {tutor.highlights.map((h) => (
                      <span key={h} className="px-3 py-1.5 rounded-full bg-[#efefef] text-sm font-medium text-[#54416c] tracking-[-0.28px]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col gap-6 w-full">
                    <div className="flex items-center gap-3">
                      <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">My students reviews (142)</h3>
                      <div className="flex items-center gap-1">
                        <StarIcon />
                        <span className="text-xl font-medium text-[#808080]">4.5</span>
                      </div>
                    </div>
                    <div className="bg-[#f5f5f5] rounded-2xl h-14 flex items-center gap-2 px-4">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <input
                        type="text"
                        placeholder="Search for reviews"
                        className="bg-transparent flex-1 text-base font-medium placeholder:text-[#808080] focus:outline-none"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3 w-full">
                    {tutor.reviewsList.map((review, i) => (
                      <div key={i} className={`rounded-2xl p-3 flex gap-3 ${i === 0 ? "shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]" : "border border-[#e6e6e6] shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]"}`}>
                        <div className="w-[60px] h-[60px] rounded-full bg-[#e5e5e5] shrink-0 overflow-hidden">
                          <img src={`https://i.pravatar.cc/120?img=${i + 10}`} alt={review.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-5 flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex flex-col gap-1">
                              <div className="flex items-center gap-1">
                                <span className="text-base font-medium text-[#333]">{review.name}</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                  <path d="M8 1.333l1.802 3.652 4.031.589-2.916 2.842.688 4.014L8 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L8 1.168z" fill="#F79009" stroke="#F79009" strokeWidth="1" />
                                </svg>
                                <span className="text-xs text-[#808080]">4.5</span>
                              </div>
                              <span className="text-xs text-[#333]">{review.date}</span>
                            </div>
                            <button className="text-[#808080] p-1">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <circle cx="12" cy="5" r="1.5" fill="currentColor" />
                                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
                                <circle cx="12" cy="19" r="1.5" fill="currentColor" />
                              </svg>
                            </button>
                          </div>
                          <p className="text-xs text-[#808080] leading-[1.4]">{review.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#007aff] text-base font-medium flex items-center gap-2">
                    Show more
                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" className="-rotate-90">
                      <path d="M8 1L1 9l7 8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-6 items-center">
                  <div className="flex flex-col gap-6 w-full">
                    <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">Resume</h3>
                    <div className="border-b border-[#e9eaeb]">
                      <div className="flex gap-3">
                        {resumeTabs.map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveResumeTab(tab)}
                            className={`px-1 pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                              activeResumeTab === tab
                                ? "border-[#007aff] text-[#007aff]"
                                : "border-transparent text-[#717680] hover:text-[#333]"
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-8 w-full">
                    {tutor.experience.map((exp, i) => (
                      <div key={i} className="flex gap-6">
                        <div className="w-11 h-11 rounded-full bg-[#a2d6f0] flex items-center justify-center shrink-0">
                          <BriefcaseIcon />
                        </div>
                        <div className="flex flex-col gap-4 min-w-0 flex-1">
                          <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium text-[#252525] leading-[1.35]">{exp.title}</p>
                            <div className="flex flex-wrap items-center gap-2 text-base text-[#7c7c7c] leading-[1.5]">
                              <span>{exp.company}</span>
                              <span className="w-1 h-1 rounded-full bg-[#7c7c7c]" />
                              <span>{exp.type}</span>
                              <span className="w-1 h-1 rounded-full bg-[#7c7c7c]" />
                              <span>{exp.period}</span>
                            </div>
                            <p className="text-base text-[#7c7c7c] leading-[1.5]">{exp.location}</p>
                          </div>
                          <p className="text-base text-[#252525] leading-[1.5]">{exp.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="text-[#007aff] text-base font-medium flex items-center gap-2">
                    Show more
                    <svg width="9" height="18" viewBox="0 0 9 18" fill="none" className="-rotate-90">
                      <path d="M8 1L1 9l7 8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col gap-8">
                  <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">Schedule</h3>
                  <div className="rounded-xl border border-[#e9eaeb] overflow-hidden shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                    <div className="border-b border-[#e9eaeb] p-5 flex items-center gap-3">
                      <div className="border border-[#e9eaeb] rounded-lg overflow-hidden w-16 shrink-0">
                        <div className="bg-[#fafafa] text-center py-1 text-xs font-semibold text-[#717680]">JAN</div>
                        <div className="text-center py-0.5 text-lg font-bold text-[#6941c6]">10</div>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-semibold text-[#181d27]">January 2025</span>
                          <span className="px-1.5 py-0.5 rounded-md border border-[#d5d7da] bg-white text-xs font-medium text-[#414651] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">Week 1</span>
                        </div>
                        <span className="text-sm text-[#535862]">Jan 1, 2025 – Jan 31, 2025</span>
                      </div>
                    </div>
                    <div className="overflow-auto">
                      <div className="min-w-[700px]">
                        <div className="flex border-b border-[#e9eaeb] shadow-[0px_1px_3px_0px_rgba(10,13,18,0.1)]">
                          <div className="w-[72px] shrink-0 border-r border-[#e9eaeb]" />
                          {["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"].map((day, i) => {
                            const dates = [6, 7, 8, 9, 10, 11, 12]
                            const isFri = i === 4
                            return (
                              <div key={day} className="flex-1 flex items-center justify-center gap-1 p-2 border-r border-b border-[#e9eaeb] bg-white">
                                <span className="text-xs font-medium text-[#535862]">{day}</span>
                                {isFri ? (
                                  <span className="w-6 h-6 rounded-full bg-[#7f56d9] text-white text-xs font-semibold flex items-center justify-center">{dates[i]}</span>
                                ) : (
                                  <span className="text-xs font-semibold text-[#414651]">{dates[i]}</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                        <div className="relative">
                          {["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM"].map((time) => (
                            <div key={time} className="flex h-24">
                              <div className="w-[72px] shrink-0 border-r border-[#e9eaeb] bg-[#fdfdfd] relative">
                                <span className="absolute -top-2 right-2 text-xs font-medium text-[#717680]">{time}</span>
                              </div>
                              {[0, 1, 2, 3, 4, 5, 6].map((col) => (
                                <div key={col} className="flex-1 border-r border-b border-[#e9eaeb] bg-white" />
                              ))}
                            </div>
                          ))}

                          <div className="absolute top-[54px] left-[calc(72px+(100%-72px)*0/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-md px-2 py-1.5 h-[42px]">
                              <p className="text-xs font-semibold text-[#414651] truncate">Monday standup</p>
                            </div>
                          </div>

                          <div className="absolute top-[144px] left-[calc(72px+(100%-72px)*1/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#fdf2fa] border border-[#fcceee] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#c11574] truncate">One-on-one with Eva</p>
                              <p className="text-xs text-[#dd2590]">10:00 AM</p>
                            </div>
                          </div>

                          <div className="absolute top-[54px] left-[calc(72px+(100%-72px)*2/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#eff8ff] border border-[#b2ddff] rounded-md px-2 py-1.5 h-[132px]">
                              <p className="text-xs font-semibold text-[#1570ef] truncate">Deep work</p>
                              <p className="text-xs text-[#175cd3]">9:00 AM</p>
                            </div>
                          </div>

                          <div className="absolute top-[198px] left-[calc(72px+(100%-72px)*2/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#eef4ff] border border-[#c7d7fe] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#3538cd] truncate">Design sync</p>
                              <p className="text-xs text-[#444ce7]">10:30 AM</p>
                            </div>
                          </div>

                          <div className="absolute top-[294px] left-[calc(72px+(100%-72px)*0/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#eff8ff] border border-[#b2ddff] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#1570ef] truncate">Content planning</p>
                              <p className="text-xs text-[#175cd3]">11:00 AM</p>
                            </div>
                          </div>

                          <div className="absolute top-[390px] left-[calc(72px+(100%-72px)*3/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#edfcf2] border border-[#aaf0c4] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#087443] truncate">Lunch with Olivia</p>
                              <p className="text-xs text-[#099250]">12:00 PM</p>
                            </div>
                          </div>

                          <div className="absolute top-[54px] left-[calc(72px+(100%-72px)*4/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#fafafa] border border-[#e9eaeb] rounded-md px-2 py-1.5 h-[42px]">
                              <p className="text-xs font-semibold text-[#414651] truncate">Friday standup</p>
                            </div>
                          </div>

                          <div className="absolute top-[192px] left-[calc(72px+(100%-72px)*4/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#f9f5ff] border border-[#e9d7fe] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#6941c6] truncate">Olivia x Riley</p>
                              <p className="text-xs text-[#7f56d9]">10:00 AM</p>
                            </div>
                          </div>

                          <div className="absolute top-[294px] left-[calc(72px+(100%-72px)*5/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#fef6ee] border border-[#f9dbaf] rounded-md px-2 py-1.5 h-[42px]">
                              <p className="text-xs font-semibold text-[#b93815] truncate">House inspection</p>
                            </div>
                          </div>

                          <div className="absolute top-[486px] left-[calc(72px+(100%-72px)*2/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#eef4ff] border border-[#c7d7fe] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#3538cd] truncate">SEO planning</p>
                              <p className="text-xs text-[#444ce7]">1:30 PM</p>
                            </div>
                          </div>

                          <div className="absolute top-[486px] left-[calc(72px+(100%-72px)*4/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#eef4ff] border border-[#c7d7fe] rounded-md px-2 py-1.5 h-[180px]">
                              <p className="text-xs font-semibold text-[#3538cd] truncate">Product demo</p>
                              <p className="text-xs text-[#444ce7]">1:30 PM</p>
                            </div>
                          </div>

                          <div className="absolute top-[582px] left-[calc(72px+(100%-72px)*1/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#f4f3ff] border border-[#d9d6fe] rounded-md px-2 py-1.5 h-[132px]">
                              <p className="text-xs font-semibold text-[#5925dc] truncate">Catch up w/ Alex</p>
                              <p className="text-xs text-[#6938ef]">3:30 PM</p>
                            </div>
                          </div>

                          <div className="absolute top-[582px] left-[calc(72px+(100%-72px)*2/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#fefbe8] border border-[#feee95] rounded-md px-2 py-1.5 h-[180px]">
                              <p className="text-xs font-semibold text-[#a15c07] truncate">Meetup event</p>
                              <p className="text-xs text-[#ca8504]">3:00 PM</p>
                            </div>
                          </div>

                          <div className="absolute top-[534px] left-[calc(72px+(100%-72px)*6/7)] w-[calc((100%-72px)/7)] p-1.5 z-10">
                            <div className="bg-[#f4f3ff] border border-[#d9d6fe] rounded-md px-2 py-1.5 h-[84px]">
                              <p className="text-xs font-semibold text-[#5925dc] truncate">Ava's engagement</p>
                              <p className="text-xs text-[#6938ef]">9:00 AM</p>
                            </div>
                          </div>

                          <div className="absolute left-0 right-0 flex items-center z-20" style={{ top: "556px" }}>
                            <span className="text-xs font-medium text-[#7f56d9] w-[68px] text-right pr-1">2:20 PM</span>
                            <div className="w-2 h-2 rounded-full bg-[#7f56d9] -mr-1" />
                            <div className="flex-1 h-0.5 bg-[#7f56d9]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[430px] shrink-0">
            <div className="lg:sticky lg:top-8">
              <div className="bg-white rounded-2xl shadow-[0px_11px_60px_0px_rgba(0,0,0,0.08)] p-6 flex flex-col gap-6">
                <div className="flex flex-col gap-6">
                  <div className="relative rounded-lg overflow-hidden bg-[#333] h-[220px]">
                    <img
                      src={tutor.image}
                      alt={tutor.name}
                      className="w-full h-full object-cover opacity-60"
                    />
                    <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#adc1f4] rounded-full flex items-center justify-center">
                      <PlayIcon />
                    </button>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-semibold tracking-tight">{tutor.rating}</span>
                        <StarIcon />
                      </div>
                      <span className="text-sm text-[#5b616d]">{tutor.reviews} reviews</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-semibold tracking-tight">{tutor.students}</span>
                        <GraduationIcon />
                      </div>
                      <span className="text-sm text-[#5b616d]">students</span>
                    </div>
                    <div className="flex flex-col items-center flex-1 gap-1">
                      <div className="flex items-center gap-1">
                        <span className="text-2xl font-semibold tracking-tight">{tutor.lessons}</span>
                        <BookIcon />
                      </div>
                      <span className="text-sm text-[#5b616d]">lessons</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <button className="h-12 w-full rounded-xl bg-[#007aff] text-white text-base font-medium shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
                    Book trial lesson
                  </button>
                  <button className="h-12 w-full rounded-xl border border-black/[0.06] bg-[#f2f2f4]/80 text-base font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ec] transition-colors">
                    Send message
                  </button>
                  <button className="h-12 w-full rounded-xl border border-black/[0.06] bg-[#f2f2f4]/80 text-base font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ec] transition-colors">
                    Save to favorites
                  </button>
                </div>

                <div className="bg-[#f9f9f9] rounded-2xl p-4 flex flex-col gap-3">
                  <div className="flex items-start gap-2">
                    <ChartIcon />
                    <span className="text-base text-[#5b5e63]">Helped 14 students get admitted</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <ThumbsUpIcon />
                    <span className="text-base text-[#5b5e63]">Rated 4.9 by 23 students</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6">
          <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">My courses</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Advanced Prototyping Techniques", desc: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.", lessons: 23, duration: "5h 32m", length: "1 week", rating: 4.8, reviews: 120, price: 45, oldPrice: 54.99, tags: ["Professional", "Top Rated"] },
              { title: "Design Systems Fundamentals", desc: "Learn how to build scalable design systems that maintain consistency across products and teams.", lessons: 18, duration: "4h 15m", length: "2 weeks", rating: 4.7, reviews: 89, price: 39, oldPrice: 49.99, tags: ["Beginner", "Best Seller"] },
              { title: "UX Research Methods", desc: "Master the essential research techniques to understand user behavior and inform design decisions.", lessons: 15, duration: "3h 45m", length: "1 week", rating: 4.9, reviews: 156, price: 55, oldPrice: 69.99, tags: ["Advanced", "New"] },
            ].map((course, i) => (
              <div key={i} className="rounded-2xl border border-[#e6e6e6] overflow-hidden bg-white pb-5 hover:shadow-lg transition-shadow">
                <div className="h-[173px] bg-[#e5e5e5] overflow-hidden">
                  <img src={`https://images.unsplash.com/photo-${i === 0 ? "1581291518857-4e27b48ff24e" : i === 1 ? "1558655146-9f40138edfeb" : "1573164713988-8665fc963095"}?w=400&h=200&fit=crop`} alt={course.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-6 px-5 pt-3">
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <img src={tutor.image} alt={tutor.name} className="w-6 h-6 rounded-full object-cover" />
                      <span className="text-sm font-medium text-[#333]">{tutor.name}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-semibold text-[#18191b]">{course.rating}</span>
                        <div className="flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <svg key={j} width="10" height="10" viewBox="0 0 12 12" fill={j < Math.round(course.rating) ? "#F79009" : "#e5e5e5"}>
                              <path d="M6 1l1.35 2.74 3.02.44-2.19 2.13.52 3.01L6 7.77l-2.7 1.55.52-3.01L1.63 4.18l3.02-.44L6 1z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-xs font-medium text-[#71757a]">({course.reviews})</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[#666]">
                        <span>{course.lessons} lessons</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-[#666]" />
                        <span>{course.duration}</span>
                        <span className="w-[3px] h-[3px] rounded-full bg-[#666]" />
                        <span>{course.length}</span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <p className="text-base font-medium text-[#333] leading-6 truncate">{course.title}</p>
                        <p className="text-xs text-[#4d4d4d] leading-[1.4] line-clamp-2">{course.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="flex gap-2">
                      {course.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1.5 rounded-[15px] border border-[#e6e6e6] text-sm font-medium text-[#333]">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-semibold text-[#27282a] leading-[30px]">${course.price}</span>
                      <span className="text-sm text-[#27282a] line-through">${course.oldPrice}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="text-[#007aff] text-base font-medium self-center flex items-center gap-2">
            See all
            <svg width="9" height="18" viewBox="0 0 9 18" fill="none" className="-rotate-90">
              <path d="M8 1L1 9l7 8" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="mt-20 mb-10">
          <div className="bg-[#b9cbf5] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] overflow-hidden relative py-24 px-6">
            <img
              src="/img/guest/cta-decoration.svg"
              alt=""
              className="absolute right-[-50px] top-[-50px] w-[590px] h-[322px] rotate-[-17deg] opacity-30 pointer-events-none select-none"
            />
            <img
              src="/img/guest/cta-decoration.svg"
              alt=""
              className="absolute left-[-200px] top-[8px] w-[590px] h-[322px] rotate-[-17deg] opacity-30 pointer-events-none select-none"
            />
            <div className="relative z-10 flex flex-col items-center gap-10 max-w-[571px] mx-auto">
              <div className="flex flex-col items-center gap-5 text-center">
                <h2 className="text-[48px] sm:text-[64px] font-bold text-[#141219] leading-tight">
                  Learn or Teach.
                </h2>
                <p className="text-lg text-[#141219]">
                  Join a growing community of students and tutors learning and teaching.
                </p>
              </div>
              <button className="h-12 px-4 rounded-xl bg-black text-white text-base font-medium shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#222] transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuestTutorDetail
