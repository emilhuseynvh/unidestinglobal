import { useState } from "react"
import { Link } from "react-router"

const imgCourse = "https://www.figma.com/api/mcp/asset/f89d6da7-98f9-4092-807b-2bcccd64ce90"

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 1.667A8.333 8.333 0 1018.333 10 8.341 8.341 0 0010 1.667zm3.983 6.65l-4.583 4.583a.625.625 0 01-.884 0l-2.5-2.5a.625.625 0 11.884-.884l2.058 2.059 4.141-4.142a.625.625 0 11.884.884z" fill="#22C55E"/>
  </svg>
)

const CalendarIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M4.667 1.167v1.166M9.333 1.167v1.166M1.75 5.542h10.5M12.25 4.958v4.375c0 1.75-.875 2.917-2.917 2.917H4.667c-2.042 0-2.917-1.167-2.917-2.917V4.958c0-1.75.875-2.916 2.917-2.916h4.666c2.042 0 2.917 1.166 2.917 2.916z" stroke="#F5A623" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const VideoIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1" y="3.5" width="10" height="9" rx="1.5" fill="#E74C3C"/>
    <path d="M11 7l4-2.5v7L11 9" fill="#E74C3C"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.333 14v-1.333A2.667 2.667 0 008.667 10H3.333a2.667 2.667 0 00-2.666 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333z" stroke="#F5A623" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const OnlineIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.333A6.667 6.667 0 1014.667 8 6.674 6.674 0 008 1.333zm3.187 5.32l-3.667 3.667a.5.5 0 01-.707 0l-2-2a.5.5 0 11.707-.707l1.647 1.647 3.313-3.314a.5.5 0 11.707.707z" fill="#22C55E"/>
  </svg>
)

const tabs = ["All", "Popular", "In English", "Weekend", "Beginner", "Seats available"]

const liveClasses = [
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Leyla Mammadova",
    level: "Intermediate",
    date: "3 April 09:00 AM",
    language: "English",
    seats: "8/14 seats filled",
    registration: "26 Mar - 31 Mar",
    price: "$45",
    oldPrice: "$54.99",
  },
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Leyla Mammadova",
    level: "Intermediate",
    date: "3 April 09:00 AM",
    language: "German",
    seats: "8/14 seats filled",
    registration: "26 Mar - 31 Mar",
    price: "$45",
    oldPrice: "$54.99",
  },
  {
    title: "AP Biology Weekly Group — Spring 2026",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Leyla Mammadova",
    level: "Intermediate",
    date: "3 April 09:00 AM",
    language: "English",
    seats: "8/14 seats filled",
    registration: "26 Mar - 31 Mar",
    price: "$45",
    oldPrice: "$54.99",
  },
]

const LiveClassCard = ({ course }) => (
  <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-2xl pb-4 flex flex-col gap-4 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
    <div className="relative h-[173px] overflow-hidden rounded-t-2xl">
      <img src={imgCourse} alt={course.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-[15px] left-[15px] bg-[#ed4030] rounded-md px-1.5 py-1 flex items-center gap-1 h-6">
        <CalendarIcon />
        <span className="text-[10px] font-medium text-white leading-4">Registration period: {course.registration}</span>
      </div>
    </div>
    <div className="flex flex-col gap-6 px-4">
      <div className="flex flex-col gap-3">
        <div className="bg-[rgba(255,195,10,0.12)] rounded-lg px-1.5 py-1 self-start h-6 flex items-center">
          <span className="text-[12px] font-medium text-[#e4a000] leading-4">Filling up fast</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold text-[#0a0c11] leading-6">{course.title}</h3>
          <p className="text-[12px] font-normal text-[#8c929c] leading-4 line-clamp-2">{course.description}</p>
          <div className="flex items-center gap-1">
            <div className="size-5 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] flex items-center justify-center">
              <span className="text-[10px] font-medium text-white">L</span>
            </div>
            <span className="text-[12px] font-medium text-[#5b616d]">{course.author}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[14px] font-medium text-[#5b616d] leading-5">
          <span>{course.level}</span>
          <span className="size-[3px] rounded-full bg-[#5b616d]" />
          <span>{course.date}</span>
          <span className="size-[3px] rounded-full bg-[#5b616d]" />
          <span>{course.language}</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <div className="bg-[rgba(242,242,244,0.8)] rounded-lg px-2 py-1 flex items-center gap-1.5 h-8">
            <VideoIcon />
            <span className="text-[12px] font-medium text-[#0a0c11]">Live Class</span>
          </div>
          <div className="bg-[rgba(242,242,244,0.8)] rounded-lg px-2 py-1 flex items-center gap-1.5 h-8">
            <UsersIcon />
            <span className="text-[12px] font-medium text-[#0a0c11]">{course.seats}</span>
          </div>
          <div className="bg-[rgba(242,242,244,0.8)] rounded-lg px-2 py-1 flex items-center gap-1.5 h-8">
            <OnlineIcon />
            <span className="text-[12px] font-medium text-[#0a0c11]">Online</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[20px] font-semibold text-[#27282a] leading-[30px]">{course.price}</span>
        <span className="text-[14px] font-normal text-[#27282a] leading-5 line-through">{course.oldPrice}</span>
      </div>
    </div>
  </div>
)

const LiveClassesSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4 max-w-[647px]">
            <h2 className="text-[40px] sm:text-[50px] font-semibold text-[#0a0c11] leading-[56px] tracking-[-0.2px]">
              Learn live with expert tutors
            </h2>
            <p className="text-[16px] font-normal text-[#5b616d] leading-6 max-w-[426px]">
              Join scheduled classes, interact in real time, and learn together with a group.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Fixed schedule</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Real-time interaction</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Group learning</span>
              </div>
            </div>
          </div>
          <Link to="/live-tutoring" className="relative h-12 px-4 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
            <span className="relative text-[16px] font-medium text-white leading-6">Explore Live Class Courses</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 w-full overflow-hidden">
          <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-[18px] shadow-sm p-1.5 flex items-center gap-1.5 overflow-x-auto max-w-full scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`h-[44px] px-4 rounded-xl text-[16px] font-medium leading-6 whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]"
                    : "text-[#8c929c] hover:text-[#5b616d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {liveClasses.map((course, i) => (
              <LiveClassCard key={i} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default LiveClassesSection
