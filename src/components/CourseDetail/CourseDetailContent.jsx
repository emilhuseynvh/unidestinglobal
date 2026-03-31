import { useState } from "react"

const ChalkboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="#666" strokeWidth="1.2" />
    <path d="M6 17h8M10 14v3" stroke="#666" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

const PlayCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <circle cx="10" cy="10" r="8.5" stroke="#353566" strokeWidth="1.2" />
    <path d="M8 7l5 3-5 3V7z" fill="#353566" />
  </svg>
)

const TrophyIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M6.5 3h7v5.5a3.5 3.5 0 01-7 0V3zM6.5 5H4a2 2 0 002 2h.5M13.5 5H16a2 2 0 01-2 2h-.5M10 12v2.5M7 16.5h6" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronIcon = ({ open }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={`transition-transform ${open ? "rotate-180" : ""}`}>
    <path d="M6 9l6 6 6-6" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const sections = [
  {
    title: "1. Introduction to Figma",
    expanded: true,
    lessons: [
      { icon: "chalkboard", name: "Building an AI tool in 5 minutes: A quick demo", preview: true, duration: "7:20" },
      { icon: "chalkboard", name: "What does the course cover", preview: true, duration: "2:40" },
      { icon: "trophy", name: "Quiz" },
    ],
  },
  { title: "2. Design Basics", lectures: "2 lectures", duration: "1h 28m" },
  { title: "3. Creating and Editing Designs", lectures: "2 lectures", duration: "1h 28m" },
  { title: "4. Working with Components", lectures: "2 lectures", duration: "1h 28m" },
  { title: "5. Collaboration and Teamwork", lectures: "2 lectures", duration: "1h 28m" },
  { title: "6. Prototyping and Interactions", lectures: "2 lectures", duration: "1h 28m" },
  { title: "7. Design Systems and Libraries", lectures: "2 lectures", duration: "1h 28m" },
]

const CourseDetailContent = () => {
  const [showFullDesc, setShowFullDesc] = useState(false)
  const [expandedSection, setExpandedSection] = useState(0)

  return (
    <div className="flex flex-col gap-14">
      <div className="flex flex-col gap-6">
        <div className="relative rounded-2xl overflow-hidden h-[409px]">
          <img
            src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=410&fit=crop"
            alt="Course preview"
            className="w-full h-full object-cover"
          />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-[#d6aef2] flex items-center justify-center">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
              <path d="M5 3l14 9-14 9V3z" fill="#333" />
            </svg>
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333] leading-[1.4]">Description</h3>
          <div className="flex flex-col gap-5 items-center">
            <p className="text-base text-[#333] leading-[1.4] w-full">
              The UX Master Class is a comprehensive and immersive course designed to equip participants with the knowledge and skills necessary to create exceptional user experiences. In today's digital landscape, user experience (UX) has emerged as a critical factor in determining the success of any product or service. This course is tailored for both aspiring UX designers seeking to establish a strong foundation and experienced professionals aiming to refine their expertise.
            </p>
            {showFullDesc ? (
              <p className="text-base text-[#333] leading-[1.4] w-full">
                Throughout the course, participants will explore the principles of user-centered design and learn how to effectively apply them to their projects. They will delve into various research methodologies, such as user interviews, surveys, and usability testing, to gain valuable insights into user behavior and preferences. By leveraging this knowledge, participants will discover how to craft intuitive and engaging interfaces that meet user needs and exceed their expectations.
              </p>
            ) : (
              <p className="text-base text-[#333] leading-[1.4] w-full truncate">
                Throughout the course, participants will explore the principles of user-centered design and learn how to effectively apply them to their projects. They will delve into various research methodologies...
              </p>
            )}
            <button onClick={() => setShowFullDesc(!showFullDesc)} className="text-[#007aff] text-base font-medium flex items-center gap-2">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className={`transition-transform ${showFullDesc ? "rotate-180" : "-rotate-90"}`}>
                <path d="M15 12.5l-5-5-5 5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333] leading-[1.4]">What you'll learn</h3>
          <ul className="text-base text-[#333] leading-[1.4] list-disc ml-6 flex flex-col gap-0.5">
            <li>You will master the Python programming language by building 100 unique projects over 100 days.</li>
            <li>You will be able to program in Python professionally</li>
            <li>Create a portfolio of 100 Python projects to apply for developer jobs</li>
            <li>Be able to use Python for data science and machine learning</li>
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-[#333] leading-[1.4]">Requirements</h3>
          <ul className="text-base text-[#333] leading-[1.4] list-disc ml-6 flex flex-col gap-0.5">
            <li>The UX Master Class is a comprehensive and immersive course designed to equip participants with the knowledge and skills necessary to create exceptional user experiences.</li>
            <li>The UX Master Class is a comprehensive and immersive course designed to equip participants with the knowledge and skills necessary to create exceptional user experiences.</li>
          </ul>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden h-[409px]">
        <img
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&h=410&fit=crop"
          alt="Course image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-5">
        <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">Course content</h3>
        <div className="flex items-center gap-1 text-sm text-[#666] leading-5">
          <span>10 sections</span>
          <span className="w-1 h-1 rounded-full bg-[#666]" />
          <span>15 lectures</span>
          <span className="w-1 h-1 rounded-full bg-[#666]" />
          <span>12h 28m total length</span>
        </div>
        <div className="border border-[#f5f5f5] rounded-2xl overflow-hidden">
          {sections.map((section, i) => (
            <div key={i} className={i > 0 ? "border-t border-[#f0f0f0]" : ""}>
              <div className="px-5 py-4">
                <button
                  onClick={() => setExpandedSection(expandedSection === i ? -1 : i)}
                  className="flex items-center justify-between w-full"
                >
                  <span className="text-base font-medium text-[#333] leading-[1.4]">{section.title}</span>
                  <ChevronIcon open={expandedSection === i} />
                </button>

                {expandedSection === i && section.lessons && (
                  <div className="mt-4 flex flex-col gap-[18px]">
                    {section.lessons.map((lesson, j) => (
                      <div key={j} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          {lesson.icon === "chalkboard" ? <ChalkboardIcon /> : <TrophyIcon />}
                          <span className="text-sm text-[#666] leading-5">{lesson.name}</span>
                        </div>
                        {lesson.preview && (
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              <PlayCircleIcon />
                              <span className="text-sm text-[#353566] underline leading-5">Preview</span>
                            </div>
                            <span className="text-sm text-[#666] leading-5">{lesson.duration}</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {expandedSection === i && section.lectures && (
                  <div className="mt-2 flex items-center gap-1 text-sm text-[#666] leading-5">
                    <span>{section.lectures}</span>
                    <span className="w-1 h-1 rounded-full bg-[#666]" />
                    <span>{section.duration}</span>
                  </div>
                )}

                {expandedSection !== i && section.lectures && (
                  <div className="mt-2 flex items-center gap-1 text-sm text-[#666] leading-5">
                    <span>{section.lectures}</span>
                    <span className="w-1 h-1 rounded-full bg-[#666]" />
                    <span>{section.duration}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className="flex justify-center py-3">
            <button className="text-[#007aff] text-base font-medium flex items-center gap-2">
              Show more
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="-rotate-90">
                <path d="M15 12.5l-5-5-5 5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetailContent
