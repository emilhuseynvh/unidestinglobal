import { useState } from "react"
import { Link } from "react-router"

const sections = [
  {
    id: 1,
    title: "Cell Biology",
    completed: true,
    totalLessons: 3,
    doneLessons: 3,
    duration: "40 min",
    lessons: [
      { title: "Introduction to Cell Biology", type: "video", duration: "15 min" },
      { title: "Cell Structure & Function", type: "video", duration: "18 min" },
      { title: "Cell Division", type: "reading", duration: "7 min" },
    ],
  },
  {
    id: 2,
    title: "Ecology",
    completed: false,
    totalLessons: 2,
    doneLessons: 1,
    duration: "40 min",
    lessons: [
      { title: "DNA Structure & Replication", type: "video", duration: "22 min" },
      { title: "Ecology&Environment", type: "reading", duration: "5 min" },
    ],
  },
  {
    id: 3,
    title: "Disease & Bioenergetics",
    completed: false,
    totalLessons: 3,
    doneLessons: 0,
    duration: "40 min",
    lessons: [
      { title: "Infectious Diseases", type: "video", duration: "14 min" },
      { title: "Bioenergetics Overview", type: "video", duration: "16 min" },
      { title: "Metabolism & Enzymes", type: "reading", duration: "10 min" },
    ],
  },
]

export default function StudentCourseDetail() {
  const [activeTab, setActiveTab] = useState("overview")
  const [expandedSection, setExpandedSection] = useState(2)

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id)
  }

  return (
    <div className="space-y-6">
      <Link
        to="/student/panel/courses"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#5b616d] hover:text-[#007aff] transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M10 12L6 8l4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to My Courses
      </Link>

      <div className="grid grid-cols-3 gap-4">
        {[
          { value: "7/18", label: "Lessons done", color: "text-[#007aff]" },
          { value: "4.5 h", label: "Content", color: "text-[#007aff]" },
          { value: "40 %", label: "Complete", color: "text-[#34d9a0]" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-white border border-black/[0.03] rounded-2xl py-4 text-center"
          >
            <div className={`text-[22px] font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-[#5b616d] mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-4">
        <div className="rounded-[18px] overflow-hidden relative">
          <img src="https://www.figma.com/api/mcp/asset/ad6d9a1c-144f-4586-9cef-0628cf5f8297" alt="Course" className="w-full aspect-video object-cover" />
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90px] h-[90px] flex items-center justify-center">
            <svg width="90" height="90" viewBox="0 0 90 90" fill="none">
              <circle cx="45" cy="45" r="44" fill="white" fillOpacity="0.9" />
              <path d="M36 28v34l28-17-28-17z" fill="#0a0c11" />
            </svg>
          </button>
          <div className="absolute bottom-3 left-3 right-3 rounded-xl backdrop-blur-[38px] bg-black/[0.07] px-5 py-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[7px] flex-1">
                <button className="shrink-0">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M12 9v14l12-7-12-7z" fill="white" /></svg>
                </button>
                <span className="text-base text-white">0:51</span>
                <div className="flex-1 h-1 bg-white/20 rounded-full mx-2 relative">
                  <div className="h-full w-[8%] bg-[#007aff] rounded-full" />
                  <div className="absolute top-1/2 -translate-y-1/2 left-[8%] w-3 h-3 bg-white rounded-full shadow-md" />
                </div>
                <span className="text-base text-white">11:00</span>
              </div>
              <div className="flex items-center gap-2 ml-4">
                <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 5L6 9H2v6h4l5 4V5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="currentColor" strokeWidth="1.5" /></svg>
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-white/80 hover:text-white">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M8 3H5a2 2 0 00-2 2v3m18 0V5a2 2 0 00-2-2h-3m0 18h3a2 2 0 002-2v-3M3 16v3a2 2 0 002 2h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-black/[0.06] rounded-[18px] flex flex-col overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M2 17V6a2 2 0 012-2h4.5a4 4 0 014 4V22M22 17V6a2 2 0 00-2-2h-4.5a4 4 0 00-4 4V22" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Course Content</span>
          </div>

          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5">
            {sections.map((section) => (
              <div key={section.id} className={`border rounded-[18px] overflow-hidden ${section.completed ? "bg-[rgba(64,155,63,0.12)] border-[rgba(64,155,63,0.2)]" : "bg-white border-black/[0.06]"}`}>
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center gap-4 px-5 py-4 text-left"
                >
                  {section.completed && (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="shrink-0">
                      <circle cx="12" cy="12" r="10" fill="#34c759" />
                      <path d="M8 12l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-base font-semibold text-[#0a0c11] leading-6">Section {section.id}: {section.title}</div>
                    <div className="text-sm text-[#5b616d] leading-5">{section.totalLessons} lessons • {section.duration}</div>
                  </div>
                  <span className="text-sm text-[#5b616d] shrink-0">{section.doneLessons}/{section.totalLessons}</span>
                  <div className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 5l4 4-4 4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </button>

                {expandedSection === section.id && section.lessons.length > 0 && (
                  <div className="px-5 pb-5 flex flex-col gap-3">
                    {section.lessons.map((lesson, idx) => (
                      <div key={idx} className="bg-white border border-black/[0.06] rounded-xl h-[68px] px-4 flex items-center gap-2 cursor-pointer hover:bg-[#f9f9fa] transition-colors">
                        <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${lesson.type === "video" ? "bg-[#e8efff]" : "bg-[rgba(255,195,10,0.12)]"}`}>
                          {lesson.type === "video" ? (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7 5v10l8-5-8-5z" fill="#4f8ef7" /></svg>
                          ) : (
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 15V6a1.5 1.5 0 011.5-1.5h3A2.5 2.5 0 0111 7v9.5M16 15V6a1.5 1.5 0 00-1.5-1.5h-3A2.5 2.5 0 009 7v9.5" stroke="#e4a000" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          )}
                        </div>
                        <span className="text-base font-medium text-[#0a0c11] leading-6 flex-1 truncate">{lesson.title}</span>
                        <span className="text-sm text-[#5b616d] leading-5 shrink-0">{lesson.duration}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="bg-[rgba(0,122,255,0.12)] border border-[rgba(0,122,255,0.2)] rounded-[18px] px-5 py-4 flex items-center justify-between">
              <span className="text-base font-semibold text-[#007aff] leading-6">Continue - Ecology&Environment</span>
              <div className="w-8 h-8 rounded-full bg-[#007aff] border border-black/[0.09] flex items-center justify-center shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 5l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-[18px] p-1.5 inline-flex items-center gap-1.5">
        {[
          { id: "overview", label: "Overview" },
          { id: "note", label: "Note", badge: 24 },
          { id: "reviews", label: "Reviews", badge: 142 },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`h-11 px-3 rounded-xl text-base font-medium flex items-center gap-1 transition-all ${
              activeTab === tab.id
                ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                : "text-[#8c929c]"
            }`}
          >
            {tab.label}
            {tab.badge && (
              <span className="bg-[rgba(0,122,255,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center leading-4">
                {tab.badge}
              </span>
            )}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <div className="bg-white border border-black/[0.03] rounded-2xl p-6 space-y-5">
          <div className="flex items-center gap-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M1.5 12.75V3.75a1.5 1.5 0 011.5-1.5h3.375a2.625 2.625 0 012.625 2.625v9.375M16.5 12.75V3.75a1.5 1.5 0 00-1.5-1.5h-3.375A2.625 2.625 0 009 4.875v9.375" stroke="#007aff" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-base font-semibold text-[#1a1c21]">Course Description</span>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(237,64,48,0.12)] text-[#df2917]">Published</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(0,122,255,0.12)] text-[#007aff]">Self-Paced Course</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(64,155,63,0.12)] text-[#338732]">Advanced</span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-[rgba(245,166,35,0.12)] text-[#e4a000]">Biology</span>
          </div>

          <h1 className="text-[22px] font-semibold text-[#1a1c21]">
            IB Biology HL — Complete Exam Preparation 2026
          </h1>

          <p className="text-sm text-[#5b616d] leading-relaxed">
            Comprehensive IB Biology HL preparation covering all six core topics: Cell Biology, Molecular Biology, Genetics, Ecology, Evolution, and Human Physiology.
          </p>

          <div className="flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#007aff] to-[#34d9a0]" />
            <span className="text-xs font-medium text-[#1a1c21]">Leyla Mammadova</span>
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[#5b616d]">
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.75a3.5 3.5 0 100 7 3.5 3.5 0 000-7zM2.63 11.375a4.375 4.375 0 018.74 0" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              86 students
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1.75 9.625V3.5a1.25 1.25 0 011.25-1.25H5.5a2.25 2.25 0 012.25 2.25v7.25M12.25 9.625V3.5A1.25 1.25 0 0011 2.25H8.5A2.25 2.25 0 006.25 4.5v7.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              24 lessons
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <rect x="1.75" y="1.75" width="10.5" height="10.5" rx="2" stroke="currentColor" strokeWidth="1.1" />
                <path d="M1.75 5.25h10.5" stroke="currentColor" strokeWidth="1.1" />
              </svg>
              4 sections
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5.25" stroke="currentColor" strokeWidth="1.1" />
                <path d="M7 4.375V7l1.75 1.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              +5.6 hours
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.75l1.615 3.27 3.61.525-2.613 2.548.617 3.594L7 9.904l-3.229 1.783.617-3.594L1.775 5.545l3.61-.526L7 1.75z" fill="#f5a623" stroke="#f5a623" strokeWidth="0.8" />
              </svg>
              4.9 142 reviews
            </span>
            <span className="flex items-center gap-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1.75v10.5M4.375 3.5h5.25M3.5 6.125h7M4.375 8.75h5.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" />
              </svg>
              $49 one-time
            </span>
          </div>
        </div>
      )}

      {activeTab === "note" && (
        <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
          <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Note</span>
          </div>
          <div className="p-5 flex flex-col gap-5">
            <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-black/[0.03]">
                <span className="text-base font-semibold text-[#0a0c11] leading-6">Create a note at 0:51</span>
                <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 4.5v9M4.5 9h9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <span className="h-7 px-1.5 rounded-lg bg-black text-xs font-medium text-white flex items-center justify-center shrink-0 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">0:51</span>
              <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-[18px] px-5 py-4 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-base font-semibold text-[#0a0c11] leading-6">Section 2: Ecology</span>
                    <span className="text-sm text-[#5b616d] leading-5">DNA Structure & Replication</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-3.75 1.05L3.3 12.3l9.45-10.05z" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                    <button className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3 4.5h12M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5M14.25 4.5v10.5a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V4.5" stroke="#ed4030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </button>
                  </div>
                </div>
                <div className="bg-white border border-black/[0.06] rounded-lg px-3 py-2">
                  <span className="text-xs text-[#8c929c] leading-4">Your note</span>
                  <p className="text-sm font-medium text-[#0a0c11] leading-5">Search Replication</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "reviews" && (
        <div className="flex flex-col items-start gap-3">
          <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden w-full">
            <div className="flex items-center gap-2 px-5 py-4 border-b border-black/[0.06]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14l-5-4.87 6.91-1.01L12 2z" fill="#ffc30a" /></svg>
              <span className="text-base font-semibold text-[#0a0c11] leading-6">Reviews</span>
            </div>

            <div className="p-5 flex flex-col gap-4">
              <div className="bg-white border border-black/[0.03] rounded-xl p-5 flex gap-4 items-start">
                <div className="flex flex-col items-center gap-1 shrink-0">
                  <span className="text-[42px] font-bold text-[#ffc30a] leading-[48px] tracking-[-0.2px]">4.9</span>
                  <span className="text-base text-[#0a0c11] leading-6">★★★★★</span>
                  <span className="text-xs text-[#8c929c] leading-4">142 reviews</span>
                </div>
                <div className="flex-1 flex flex-col gap-1 justify-center">
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className="flex items-center gap-1">
                      <span className="text-[10px] font-medium text-[#8c929c] w-2.5 text-right shrink-0 leading-4">{star}</span>
                      <div className="flex-1 h-1.5 bg-[#f2f2f4] rounded-full overflow-hidden">
                        <div className="h-full rounded-full bg-[#ffc30a]" style={{ width: "38%" }} />
                      </div>
                      <span className="text-[10px] font-medium text-[#8c929c] w-7 text-right tabular-nums shrink-0 leading-4">38 %</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col">
                <div className="border-b border-black/[0.03] px-3.5 py-3 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center backdrop-blur-[12px]">
                        <span className="text-xs font-medium text-white leading-4">LM</span>
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className="text-xs font-semibold text-[#0a0c11] leading-4">Leyla M.</span>
                        <span className="text-[10px] text-[#8c929c] leading-4">2 days ago</span>
                      </div>
                      <span className="text-sm text-[#0a0c11] leading-5">★★★★★</span>
                    </div>
                    <p className="text-xs text-[#5b616d] leading-4">Went from 5 to 7 in 3 months. The exam technique sections are absolutely incredible. Every IB student should take this course.</p>
                  </div>
                  <div className="bg-[#f9f9fa] border-l-2 border-[#007aff] rounded-r-[10px] px-4 py-2 flex flex-col gap-1">
                    <span className="text-xs font-semibold text-[#008ece] leading-4">Your reply</span>
                    <p className="text-xs text-[#5b616d] leading-4">Thank you so much, Leyla! So proud of your progress. Keep up the amazing work! 🎉</p>
                  </div>
                </div>

                <div className="border-b border-black/[0.03] px-3.5 py-3 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#409b3f] to-[rgba(64,155,63,0.12)] border border-black/[0.03] flex items-center justify-center backdrop-blur-[12px]">
                        <span className="text-xs font-medium text-white leading-4">SR</span>
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className="text-xs font-semibold text-[#0a0c11] leading-4">Sara R.</span>
                        <span className="text-[10px] text-[#8c929c] leading-4">2 days ago</span>
                      </div>
                      <span className="text-sm text-[#0a0c11] leading-5">★★★★★</span>
                    </div>
                    <p className="text-xs text-[#5b616d] leading-4">Best IB Biology resource I've found. Clear, structured, and completely exam-focused. The past paper walkthroughs alone are worth the price.</p>
                  </div>
                  <button className="bg-[rgba(0,122,255,0.12)] h-6 px-2.5 rounded-[6px] text-[10px] font-medium text-[#0267d0] self-start leading-4">Reply</button>
                </div>

                <div className="px-3.5 py-3 flex flex-col gap-3">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-b from-[#409b3f] to-[rgba(64,155,63,0.12)] border border-black/[0.03] flex items-center justify-center backdrop-blur-[12px]">
                        <span className="text-xs font-medium text-white leading-4">SR</span>
                      </div>
                      <div className="flex flex-col gap-0.5 flex-1">
                        <span className="text-xs font-semibold text-[#0a0c11] leading-4">Sara R.</span>
                        <span className="text-[10px] text-[#8c929c] leading-4">2 days ago</span>
                      </div>
                      <span className="text-sm text-[#0a0c11] leading-5">★★★★★</span>
                    </div>
                    <p className="text-xs text-[#5b616d] leading-4">Best IB Biology resource I've found. Clear, structured, and completely exam-focused. The past paper walkthroughs alone are worth the price.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 px-0.5">
                      <span className="text-base font-medium text-[#5b616d] leading-6">Full Description</span>
                      <span className="text-base text-[#8c929c] leading-6">(0/1500)</span>
                    </div>
                    <textarea placeholder="Reply..." className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3.5 py-2.5 text-xs text-[#0a0c11] leading-4 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="bg-[rgba(0,122,255,0.12)] h-6 px-2.5 rounded-[6px] text-[10px] font-medium text-[#0267d0] leading-4">Save</button>
                    <button className="bg-white h-6 px-2.5 rounded-[6px] text-[10px] font-medium text-[#5b616d] leading-4">Cancel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 self-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 2.25v13.5M2.25 9h13.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Load more
          </button>
        </div>
      )}
    </div>
  )
}