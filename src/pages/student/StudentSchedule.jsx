import { useState } from "react"
import { Link } from "react-router"

const events = [
  { id: 1, title: "IB Biology HL — Lesson 14", time: "9:00 AM", day: 0, startHour: 9, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]", tutor: "Leyla Mammadova", seats: "12 / 15", schedule: "Every Thursday · 4:00 PM", sessionDur: "60 min", price: "$25 / session" },
  { id: 2, title: "AP Biology — Lesson 8", time: "9:00 AM", day: 2, startHour: 9, duration: 1.5, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]", tutor: "Aynur Karimova", seats: "12 / 15", schedule: "Every Thursday · 4:00 PM", sessionDur: "60 min", price: "$25 / session" },
  { id: 3, title: "GCSE Biology — Trial", time: "10:00 AM", day: 1, startHour: 10, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]", tutor: "Nihat Karimov", seats: "8 / 14", schedule: "Every Tuesday · 10:00 AM", sessionDur: "45 min", price: "$20 / session" },
  { id: 4, title: "Content planning", time: "11:00 AM", day: 0, startHour: 11, duration: 0.5, color: "bg-[rgba(245,166,35,0.15)]", border: "border-l-[3px] border-l-[#f5a623]", tutor: "Ali Guliyev", seats: "6 / 10", schedule: "Every Monday · 11:00 AM", sessionDur: "30 min", price: "$15 / session" },
  { id: 5, title: "Design sync", time: "10:30 AM", day: 2, startHour: 10.5, duration: 1, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]", tutor: "Sara Rzayeva", seats: "5 / 8", schedule: "Every Wednesday · 10:30 AM", sessionDur: "60 min", price: "$30 / session" },
  { id: 6, title: "Uni Entrance — Lesson 21", time: "10:00 AM", day: 3, startHour: 10, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]", tutor: "Anar Hasanov", seats: "10 / 12", schedule: "Every Thursday · 10:00 AM", sessionDur: "60 min", price: "$25 / session" },
  { id: 7, title: "IB Biology SL — Lesson 7", time: "9:00 AM", day: 4, startHour: 9, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]", tutor: "Leyla Mammadova", seats: "12 / 15", schedule: "Every Friday · 9:00 AM", sessionDur: "60 min", price: "$25 / session" },
  { id: 8, title: "Lunch study group", time: "12:00 PM", day: 2, startHour: 12, duration: 1, color: "bg-[rgba(245,166,35,0.15)]", border: "border-l-[3px] border-l-[#f5a623]", tutor: "Ali Guliyev", seats: "4 / 6", schedule: "Every Wednesday · 12:00 PM", sessionDur: "60 min", price: "$15 / session" },
  { id: 9, title: "AP Biology — Lesson 9", time: "1:30 PM", day: 2, startHour: 13.5, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]", tutor: "Sara Rzayeva", seats: "12 / 15", schedule: "Every Wednesday · 1:30 PM", sessionDur: "60 min", price: "$25 / session" },
  { id: 10, title: "Product demo", time: "1:30 PM", day: 3, startHour: 13.5, duration: 1, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]", tutor: "Fidan Isayeva", seats: "8 / 10", schedule: "Every Thursday · 1:30 PM", sessionDur: "60 min", price: "$20 / session" },
  { id: 11, title: "Catch up session", time: "3:30 PM", day: 1, startHour: 15.5, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]", tutor: "Anar Hasanov", seats: "1 / 1", schedule: "Every Tuesday · 3:30 PM", sessionDur: "60 min", price: "$30 / session" },
]

const todaySessions = [
  { time: "9:00", period: "AM", title: "IB Biology HL — Lesson 14", student: "Leyla M.", duration: "60 min", badge: "1:1", badgeColor: "bg-[rgba(79,142,247,0.12)] text-[#4f8ef7]" },
  { time: "2:30", period: "PM", title: "GCSE Biology — Trial", student: "Nihat K.", duration: "45 min", badge: "Trial", badgeColor: "bg-[rgba(245,166,35,0.13)] text-[#f5a623]" },
  { time: "5:00", period: "PM", title: "AP Biology — Lesson 8", student: "Sara R.", duration: "60 min", badge: "1:1", badgeColor: "bg-[rgba(79,142,247,0.12)] text-[#4f8ef7]" },
]

const upcomingSessions = [
  { date: "Mar 27", time: "10am", title: "Uni Entrance — Lesson 21", student: "Anar H." },
  { date: "Mar 28", time: "9am", title: "IB Biology HL — Lesson 15", student: "Leyla M." },
  { date: "Mar 29", time: "11am", title: "AP Biology — Lesson 9", student: "Sara R." },
]

const hours = [9, 10, 11, 12, 13, 14, 15, 16]
const days = [
  { short: "Mon", date: 23 },
  { short: "Tue", date: 24 },
  { short: "Wed", date: 25 },
  { short: "Thu", date: 26, isToday: true },
  { short: "Fri", date: 27 },
  { short: "Sat", date: 28 },
  { short: "Sun", date: 29 },
]

const formatHour = (h) => {
  if (h === 12) return "12 PM"
  if (h > 12) return `${h - 12} PM`
  return `${h} AM`
}

const todayEvents = [
  { id: 1, title: "IB Biology HL — Lesson 14", time: "9:00 AM", startHour: 9, duration: 0.5, color: "bg-[rgba(79,142,247,0.08)]", border: "border-l-[3px] border-l-[#4f8ef7]", tutor: "Leyla Mammadova", seats: "12 / 15", schedule: "Every Thursday · 4:00 PM", sessionDur: "60 min", price: "$25 / session" },
  { id: 2, title: "Uni Entrance — Lesson 21", time: "10:00 AM", startHour: 10, duration: 1.5, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]", tutor: "Anar Hasanov", seats: "10 / 12", schedule: "Every Thursday · 10:00 AM", sessionDur: "60 min", price: "$25 / session" },
  { id: 3, title: "Product demo", time: "1:30 PM", startHour: 13.5, duration: 2, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]", tutor: "Fidan Isayeva", seats: "8 / 10", schedule: "Every Thursday · 1:30 PM", sessionDur: "60 min", price: "$20 / session" },
]

const monthDayHeaders = ["Mon", "Tues", "Wed", "Thu", "Fri", "Sat", "Sun"]

const colorMap = {
  blue: "bg-[rgba(79,142,247,0.12)] text-[#4f8ef7]",
  green: "bg-[rgba(52,217,160,0.12)] text-[#34d9a0]",
  purple: "bg-[rgba(167,139,250,0.12)] text-[#a78bfa]",
  orange: "bg-[rgba(245,166,35,0.12)] text-[#f5a623]",
  red: "bg-[rgba(237,64,48,0.12)] text-[#ed4030]",
  gray: "bg-[rgba(140,146,156,0.12)] text-[#8c929c]",
}

const monthEvents = {
  "30": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }, { title: "Study grp...", time: "11:30 AM", color: "green" }],
  "31": [{ title: "AP Bio...", time: "9:00 AM", color: "blue" }],
  "1": [{ title: "GCSE Bio...", time: "10:00 AM", color: "orange" }, { title: "Group stdy...", time: "4:00 PM", color: "purple" }],
  "2": [],
  "3": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }],
  "5_sat": [{ title: "Exam prp...", time: "10:30 AM", color: "red", dot: true }],
  "4": [],
  "6": [{ title: "IB Bio HL...", time: "9:00 AM", color: "blue" }, { title: "Content...", time: "11:00 AM", color: "green" }],
  "7": [{ title: "GCSE Bio...", time: "10:00 AM", color: "orange" }, { title: "Catch up...", time: "2:30 PM", color: "green" }],
  "8": [{ title: "AP Bio...", time: "9:00 AM", color: "green" }, { title: "Design...", time: "10:30 AM", color: "purple" }, { title: "AP Bio...", time: "1:30 PM", color: "orange" }],
  "9": [{ title: "Uni Entr...", time: "10:00 AM", color: "green" }],
  "10": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }, { title: "Uni Entr...", time: "10:00 AM", color: "green" }, { title: "Product...", time: "1:30 PM", color: "purple" }],
  "5_sat2": [],
  "5_sun": [{ title: "Study...", time: "1:00 PM", color: "orange" }],
  "13": [{ title: "IB Bio HL...", time: "9:00 AM", color: "blue" }, { title: "Team rev...", time: "12:15 PM", color: "red" }],
  "14": [],
  "15": [{ title: "AP Bio...", time: "9:30 AM", color: "orange" }],
  "16": [{ title: "Uni Entr...", time: "10:00 AM", color: "green" }, { title: "Group stdy...", time: "4:00 PM", color: "purple" }],
  "17": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }, { title: "Study grp...", time: "9:30 AM", color: "green" }, { title: "Design...", time: "2:30 PM", color: "purple" }],
  "18": [{ title: "Exam prp...", time: "7:00 AM", color: "green", dot: true }],
  "19": [],
  "20": [{ title: "IB Bio HL...", time: "9:00 AM", color: "blue" }, { title: "AP Bio...", time: "9:15 AM", color: "green" }],
  "21": [{ title: "GCSE Bio...", time: "11:30 AM", color: "red" }, { title: "Lunch stdy...", time: "1:00 PM", color: "blue" }],
  "22": [{ title: "AP Bio...", time: "9:00 AM", color: "green" }, { title: "Design...", time: "2:30 PM", color: "purple" }],
  "23": [{ title: "Uni Entr...", time: "10:00 AM", color: "green" }],
  "24": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }, { title: "Catch up...", time: "1:45 PM", color: "orange" }],
  "25": [],
  "26": [{ title: "Exam prp...", time: "7:00 AM", color: "green", dot: true }],
  "27": [{ title: "IB Bio HL...", time: "9:00 AM", color: "blue" }],
  "28": [{ title: "Content...", time: "11:00 AM", color: "green" }, { title: "Lunch stdy...", time: "12:45 PM", color: "blue" }],
  "29": [{ title: "AP Bio...", time: "9:30 AM", color: "orange" }],
  "30_end": [{ title: "Group stdy...", time: "4:00 PM", color: "purple" }],
  "31_end": [{ title: "IB Bio SL...", time: "9:00 AM", color: "blue" }],
}

const monthGrid = [
  [{ d: 30, outside: true, key: "30" }, { d: 31, outside: true, key: "31" }, { d: 1, key: "1" }, { d: 2, key: "2" }, { d: 3, key: "3" }, { d: 4, key: "4" }, { d: 5, key: "5_sat" }],
  [{ d: 6, key: "6" }, { d: 7, key: "7" }, { d: 8, key: "8" }, { d: 9, key: "9" }, { d: 10, key: "10" }, { d: 11, key: "5_sat2" }, { d: 12, key: "5_sun" }],
  [{ d: 13, key: "13" }, { d: 14, key: "14" }, { d: 15, key: "15" }, { d: 16, key: "16" }, { d: 17, key: "17" }, { d: 18, key: "18" }, { d: 19, key: "19" }],
  [{ d: 20, key: "20" }, { d: 21, key: "21" }, { d: 22, key: "22" }, { d: 23, key: "23" }, { d: 24, key: "24" }, { d: 25, key: "25" }, { d: 26, key: "26", isToday: true }],
  [{ d: 27, key: "27" }, { d: 28, key: "28" }, { d: 29, key: "29" }, { d: 30, key: "30_end" }, { d: 31, key: "31_end" }, { d: 1, outside: true }, { d: 2, outside: true }],
]

const SessionDetailModal = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] w-full max-w-[520px] flex flex-col gap-6 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
          <h2 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">{event.title}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Course Image */}
        <div className="flex flex-col gap-3">
          <div className="w-full h-[214px] rounded-[18px] overflow-hidden border-4 border-white shadow-[0px_16px_48px_-4px_rgba(26,26,26,0.2)]">
            <img src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=520&h=220&fit=crop" alt="Course" className="w-full h-full object-cover" />
          </div>

          {/* Course Details */}
          <div className="bg-white border border-black/[0.06] rounded-[18px] p-6 flex flex-col gap-[10px]">
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-[rgba(64,155,63,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#338732] flex items-center gap-1">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Live
              </span>
              <span className="bg-[rgba(237,64,48,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#df2917] flex items-center">Live Class Course</span>
              <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">Advanced</span>
              <span className="bg-[rgba(255,195,10,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#e4a000] flex items-center">Biology</span>
              <span className="flex items-center gap-1.5 text-[12.5px] text-[#f06060]">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><circle cx="6.5" cy="6.5" r="5.5" stroke="#f06060" strokeWidth="1.2" /><path d="M6.5 3.25v3.25l2.167 1.083" stroke="#f06060" strokeWidth="1.2" strokeLinecap="round" /></svg>
                Next: Apr 3, 2026
              </span>
            </div>
            <h3 className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">AP Biology Weekly Group — Spring 2026</h3>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[500px]">Interactive weekly live sessions covering AP Biology curriculum with Q&A, practice problems, and exam strategy. Recordings included.</p>
            <div className="flex items-center gap-1">
              <div className="w-5 h-5 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center">
                <span className="text-[10px] font-medium text-white">L</span>
              </div>
              <span className="text-xs font-medium text-[#5b616d] leading-4">{event.tutor || "Leyla Mammadova"}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs text-[#5b616d] leading-4">
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10.667 14v-1.333a2.667 2.667 0 00-2.667-2.667H4a2.667 2.667 0 00-2.667 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM14 14v-1.333a2.667 2.667 0 00-2-2.58M10 2.087a2.667 2.667 0 010 5.16" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {event.seats || "12 / 15 seats filled"}
              </span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 14c-1.467-1.067-3.2-1.6-4.933-1.6-.573 0-1.147.06-1.734.178V3.822A9.2 9.2 0 013.067 3.6C4.8 3.6 6.533 4.133 8 5m0 9c1.467-1.067 3.2-1.6 4.933-1.6.587 0 1.16.06 1.734.178V3.822A9.2 9.2 0 0012.933 3.6C11.2 3.6 9.467 4.133 8 5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {event.schedule || "Every Thursday · 4:00 PM"}
              </span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#5b616d" strokeWidth="1.2" /><path d="M8 4v4l2.667 1.333" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" /></svg>
                {event.sessionDur || "60 min per session"}
              </span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#5b616d]" />
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333v13.334M11.333 3.333H6.333a2.333 2.333 0 000 4.667h3.334a2.333 2.333 0 010 4.667H4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                {event.price || "$25 / session"}
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6 items-end">
          <div className="h-px w-full bg-black/[0.06]" />
          <div className="flex items-center gap-3">
            <button className="h-10 px-[10px] rounded-[10px] text-sm font-medium text-[#df2917] flex items-center gap-1.5">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#df2917" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Cancel session
            </button>
            <Link to="/student/panel/courses/live/1" className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] no-underline">
              Go to Course Page
            </Link>
            <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="2.25" width="11.25" height="12" rx="1.5" stroke="white" strokeWidth="1.2" /><path d="M12.75 7.5l3.75-2.25v7.5l-3.75-2.25V7.5z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Join Session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const StudentSchedule = () => {
  const [activeView, setActiveView] = useState("week")
  const [selectedEvent, setSelectedEvent] = useState(null)

  const currentTimeOffset = ((14 + 20 / 60) - 9) * 96

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Calendar Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-4 sm:pb-6 flex flex-col gap-[6px]">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Schedule</h1>
          <p className="text-sm text-[#5b616d] leading-5">Manage sessions, availability and bookings</p>
        </div>

        {/* Date Navigation */}
        <div className="px-4 sm:px-6 lg:px-10 pb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-base font-semibold text-[#0a0c11]">
                {activeView === "today" ? "March 26" : "March 2026"}
              </span>
              {activeView === "month" && (
                <span className="h-[22px] px-2 rounded-md border border-black/[0.06] bg-white text-xs font-medium text-[#0a0c11] flex items-center">Month</span>
              )}
              {activeView === "today" && (
                <span className="h-[22px] px-2 rounded-md border border-black/[0.06] bg-white text-xs font-medium text-[#0a0c11] flex items-center">Today</span>
              )}
              {activeView === "week" && (
                <span className="bg-[#007aff] text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">26</span>
              )}
            </div>
            <span className="text-sm text-[#5b616d]">
              {activeView === "month" ? "March 1, 2026 – March 31, 2026" : activeView === "today" ? "Friday" : "March 23, 2026 – March 29, 2026"}
            </span>
          </div>
          <div className="flex items-center bg-[rgba(242,242,244,0.8)] border border-black/[0.06] rounded-lg p-1 self-start sm:self-auto">
            {["month", "week", "today"].map((view) => (
              <button
                key={view}
                onClick={() => setActiveView(view)}
                className={`h-7 px-3 rounded-md text-xs font-medium capitalize transition-all ${activeView === view
                  ? "bg-white text-[#0a0c11] shadow-[0px_1px_2px_rgba(0,0,0,0.06)]"
                  : "text-[#5b616d] hover:text-[#0a0c11]"
                  }`}
              >
                {view.charAt(0).toUpperCase() + view.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar Grid */}
        <div className="flex-1 overflow-auto px-4 sm:px-6 lg:px-10 pb-6">
          {activeView === "month" ? (
            <div className="border border-[#e9eaeb] rounded-xl overflow-hidden min-w-[640px]">
              <div className="grid grid-cols-7 border-b border-[#e9eaeb]">
                {monthDayHeaders.map((d) => (
                  <div key={d} className="py-2.5 text-center text-xs font-medium text-[#8c929c] border-r border-[#e9eaeb] last:border-r-0">{d}</div>
                ))}
              </div>
              {monthGrid.map((week, wi) => (
                <div key={wi} className="grid grid-cols-7">
                  {week.map((cell, ci) => {
                    const cellEvents = cell.events || monthEvents[cell.key] || []
                    const maxShow = 3
                    const shown = cellEvents.slice(0, maxShow)
                    const moreCount = cellEvents.length - maxShow
                    return (
                      <div
                        key={ci}
                        className={`min-h-[140px] p-2 border-r border-b border-[#e9eaeb] last:border-r-0 flex flex-col gap-1 ${cell.outside ? "bg-[#fdfdfd]" : "bg-white"}`}
                      >
                        {cell.isToday ? (
                          <span className="w-6 h-6 rounded-full bg-[#007aff] text-white text-xs font-semibold flex items-center justify-center">{cell.d}</span>
                        ) : (
                          <span className={`text-xs font-semibold leading-[18px] pl-1 ${cell.outside ? "text-[#c3c6cc]" : "text-[#414651]"}`}>{cell.label ?? cell.d}</span>
                        )}
                        <div className="flex flex-col gap-[3px] mt-0.5">
                          {shown.map((ev, ei) => (
                            <div
                              key={ei}
                              onClick={() => setSelectedEvent({ title: ev.title, time: ev.time })}
                              className={`${colorMap[ev.color]} rounded-md px-1.5 py-[2px] flex items-center gap-1 truncate cursor-pointer hover:opacity-80 transition-opacity`}
                            >
                              {ev.dot && <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${ev.color === "green" ? "bg-[#34d9a0]" : ev.color === "red" ? "bg-[#ed4030]" : "bg-[#4f8ef7]"}`} />}
                              <span className="text-[11px] font-medium truncate">{ev.title}</span>
                              <span className="text-[11px] opacity-70 shrink-0 ml-auto">{ev.time}</span>
                            </div>
                          ))}
                          {moreCount > 0 && (
                            <span className="text-[11px] text-[#8c929c] pl-1.5 cursor-pointer hover:text-[#007aff]">{moreCount} more...</span>
                          )}
                        </div>
                      </div>
                    )
                  })}
                </div>
              ))}
            </div>
          ) : activeView === "today" ? (
            <div className="border border-black/[0.06] rounded-xl overflow-hidden">
              <div className="relative">
                {hours.map((hour) => (
                  <div key={hour} className="flex border-b border-black/[0.03] last:border-b-0" style={{ height: 96 }}>
                    <div className="w-[72px] shrink-0 flex items-start justify-end pr-3 pt-1">
                      <span className="text-xs text-[#8c929c] whitespace-nowrap">{formatHour(hour)}</span>
                    </div>
                    <div className="flex-1 border-l border-black/[0.06] relative">
                      <div className="absolute inset-x-0 top-1/2 border-b border-black/[0.03]" />
                    </div>
                  </div>
                ))}
                <div className="absolute left-0 right-0 flex items-center z-20 pointer-events-none" style={{ top: currentTimeOffset }}>
                  <span className="text-[10px] font-semibold text-[#007aff] w-[72px] text-right pr-2 shrink-0">2:20 PM</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#007aff] -ml-[5px] shrink-0" />
                  <div className="flex-1 h-0.5 bg-[#007aff]" />
                </div>
                {todayEvents.map((event) => {
                  const top = (event.startHour - 9) * 96
                  const height = event.duration * 96
                  return (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`absolute ${event.color} ${event.border} rounded-lg p-2.5 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity z-10`}
                      style={{ top: top + 2, height: height - 4, left: 72, right: 0 }}
                    >
                      <p className="text-sm font-semibold text-[#0a0c11]">{event.title}</p>
                      <p className="text-xs text-[#5b616d]">{event.time}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            <div className="border border-black/[0.06] rounded-xl overflow-hidden min-w-[640px]">
              <div className="flex border-b border-black/[0.06]">
                <div className="w-[72px] shrink-0" />
                {days.map((day) => (
                  <div key={day.short + day.date} className="flex-1 flex flex-col items-center py-3 border-r border-black/[0.06] last:border-r-0">
                    <span className="text-xs text-[#8c929c]">{day.short}</span>
                    {day.isToday ? (
                      <span className="bg-[#007aff] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mt-0.5">{day.date}</span>
                    ) : (
                      <span className="text-sm font-semibold text-[#0a0c11] mt-0.5">{day.date}</span>
                    )}
                  </div>
                ))}
              </div>
              <div className="relative">
                {hours.map((hour) => (
                  <div key={hour} className="flex border-b border-black/[0.03] last:border-b-0" style={{ height: 96 }}>
                    <div className="w-[72px] shrink-0 flex items-start justify-end pr-3 pt-1">
                      <span className="text-xs text-[#8c929c] whitespace-nowrap">{formatHour(hour)}</span>
                    </div>
                    {days.map((day) => (
                      <div key={day.short + day.date + hour} className="flex-1 border-r border-black/[0.06] last:border-r-0 relative">
                        <div className="absolute inset-x-0 top-1/2 border-b border-black/[0.03]" />
                      </div>
                    ))}
                  </div>
                ))}
                <div className="absolute left-[72px] right-0 flex items-center z-20 pointer-events-none" style={{ top: currentTimeOffset }}>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#007aff] -ml-[5px]" />
                  <div className="flex-1 h-0.5 bg-[#007aff]" />
                </div>
                {events.map((event) => {
                  const top = (event.startHour - 9) * 96
                  const height = event.duration * 96
                  return (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`absolute ${event.color} ${event.border} rounded-lg p-1.5 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity z-10`}
                      style={{
                        top: top + 2,
                        height: height - 4,
                        left: `calc(72px + (100% - 72px) / 7 * ${event.day})`,
                        width: `calc((100% - 72px) / 7)`,
                        paddingRight: 6,
                        paddingLeft: 6,
                      }}
                    >
                      <p className="text-xs font-semibold text-[#0a0c11] truncate">{event.title}</p>
                      <p className="text-[10px] text-[#5b616d]">{event.time}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right Rail */}
      <div className="w-full lg:w-[300px] border-t lg:border-t-0 lg:border-l border-black/[0.06] shrink-0 bg-white lg:overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
          {/* Today's Sessions */}
          <div className="px-4 pt-4 pb-[17px] flex flex-col gap-3 border-b border-black/[0.03] sm:border-r lg:border-r-0 border-black/[0.03]">
            <div className="flex items-center gap-[7px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2.667" width="12" height="11.333" rx="1.5" stroke="#0a0c11" strokeWidth="1.2" />
                <path d="M5.333 1.333v2.667M10.667 1.333v2.667M2 6h12" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold text-[#0a0c11] leading-4">Today — Thu Mar 26</span>
            </div>
            <div className="flex flex-col">
              {todaySessions.map((session, i) => (
                <div key={i} className={`flex items-start gap-3 pt-[10px] pb-[11px] ${i < todaySessions.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
                  <div className="min-w-[42px] flex flex-col items-center">
                    <span className="text-xs font-semibold text-[#0a0c11] leading-4">{session.time}</span>
                    <span className="text-[10px] text-[#8c929c] leading-4 mt-0.5">{session.period}</span>
                  </div>
                  <div className="w-px h-[30px] bg-black/[0.06] shrink-0" />
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#0a0c11] leading-4 truncate">{session.title}</span>
                    <div className="flex items-center gap-[5px]">
                      <span className="text-xs text-[#5b616d] leading-4">{session.student}</span>
                      <div className="w-[3px] h-[3px] rounded-full bg-[#5b616d] shrink-0" />
                      <span className="text-xs text-[#5b616d] leading-4">{session.duration}</span>
                    </div>
                  </div>
                  <span className={`${session.badgeColor} text-[10.5px] font-bold rounded-[20px] px-[7px] py-0.5 shrink-0 leading-none`}>
                    {session.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming 7 Days */}
          <div className="px-4 pt-4 pb-[17px] flex flex-col gap-3 border-b border-black/[0.03]">
            <div className="flex items-center gap-[7px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#0a0c11" strokeWidth="1.2" />
                <path d="M8 4.667V8l2.333 1.333" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-semibold text-[#0a0c11] leading-4">Upcoming 7 days</span>
            </div>
            <div className="flex flex-col">
              {upcomingSessions.map((session, i) => (
                <div key={i} className={`flex items-start gap-3 pt-[10px] pb-[11px] ${i < upcomingSessions.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
                  <div className="min-w-[42px] flex flex-col items-center">
                    <span className="text-xs font-semibold text-[#0a0c11] leading-4">{session.date}</span>
                    <span className="text-[10px] text-[#8c929c] leading-4 mt-0.5">{session.time}</span>
                  </div>
                  <div className="w-px h-[30px] bg-black/[0.06] shrink-0" />
                  <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#0a0c11] leading-4 truncate">{session.title}</span>
                    <span className="text-xs text-[#5b616d] leading-4">{session.student}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedEvent && <SessionDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  )
}

export default StudentSchedule
