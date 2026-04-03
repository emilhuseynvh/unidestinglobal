import { useState } from "react"

const events = [
  { id: 1, title: "IB Biology SL...", time: "9:00 AM", day: 0, startHour: 9, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]" },
  { id: 2, title: "IB Biology HL...", time: "9:00 AM", day: 2, startHour: 9, duration: 1.5, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]" },
  { id: 3, title: "One-on-one..", time: "10:00 AM", day: 1, startHour: 10, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]" },
  { id: 4, title: "Content plan...", time: "11:00 AM", day: 0, startHour: 11, duration: 0.5, color: "bg-[rgba(245,166,35,0.15)]", border: "border-l-[3px] border-l-[#f5a623]" },
  { id: 5, title: "Design sync..", time: "10:30 AM", day: 2, startHour: 10.5, duration: 1, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]" },
  { id: 6, title: "Olivia x Riley", time: "10:00 AM", day: 3, startHour: 10, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]" },
  { id: 7, title: "Friday standup", time: "9:00 AM", day: 4, startHour: 9, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]" },
  { id: 8, title: "Lunch with..", time: "12:00 PM", day: 2, startHour: 12, duration: 1, color: "bg-[rgba(245,166,35,0.15)]", border: "border-l-[3px] border-l-[#f5a623]" },
  { id: 9, title: "House inspe...", time: "11:00 AM", day: 5, startHour: 11, duration: 1.5, color: "bg-[rgba(237,64,48,0.15)]", border: "border-l-[3px] border-l-[#ed4030]" },
  { id: 10, title: "SEO planning", time: "1:30 PM", day: 2, startHour: 13.5, duration: 1, color: "bg-[rgba(79,142,247,0.15)]", border: "border-l-[3px] border-l-[#4f8ef7]" },
  { id: 11, title: "Product demo", time: "1:30 PM", day: 3, startHour: 13.5, duration: 1, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]" },
  { id: 12, title: "Catch up w/ A...", time: "3:30 PM", day: 1, startHour: 15.5, duration: 1, color: "bg-[rgba(52,217,160,0.15)]", border: "border-l-[3px] border-l-[#34d9a0]" },
  { id: 13, title: "Meetup event", time: "3:00 PM", day: 2, startHour: 15, duration: 1, color: "bg-[rgba(245,166,35,0.15)]", border: "border-l-[3px] border-l-[#f5a623]" },
  { id: 14, title: "Ava's engag...", time: "1:30 PM", day: 5, startHour: 13.5, duration: 0.5, color: "bg-[rgba(237,64,48,0.15)]", border: "border-l-[3px] border-l-[#ed4030]" },
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

// Today (daily) view events
const todayEvents = [
  { id: 1, title: "Friday standup", time: "9:00 AM", startHour: 9, duration: 0.5, color: "bg-[rgba(79,142,247,0.08)]", border: "border-l-[3px] border-l-[#4f8ef7]" },
  { id: 2, title: "Olivia x Riley", time: "10:00 AM", startHour: 10, duration: 1.5, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]" },
  { id: 3, title: "Product demo", time: "1:30 PM", startHour: 13.5, duration: 2, color: "bg-[rgba(167,139,250,0.15)]", border: "border-l-[3px] border-l-[#a78bfa]" },
]

// Month view data
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
  "30": [{ title: "Mond...", time: "9:00 AM", color: "blue" }, { title: "Coffe...", time: "11:30 AM", color: "green" }, { title: "Marke...", time: "2:30 PM", color: "purple" }],
  "31": [{ title: "Mond...", time: "9:00 AM", color: "blue" }],
  "1": [{ title: "One-...", time: "10:00 AM", color: "orange" }, { title: "All-ha...", time: "4:00 PM", color: "purple" }, { title: "Dinn...", time: "6:30 PM", color: "green", dot: true }],
  "2": [],
  "3": [{ title: "Friday...", time: "9:00 AM", color: "blue" }],
  "5_sat": [{ title: "Ho...", time: "10:30 AM", color: "red", dot: true }],
  "4": [],
  "6": [{ title: "Mond...", time: "9:00 AM", color: "blue" }, { title: "Cont...", time: "11:00 AM", color: "green" }],
  "7": [{ title: "One-...", time: "10:00 AM", color: "orange" }, { title: "Catch...", time: "2:30 PM", color: "green" }],
  "8": [{ title: "Deep...", time: "9:00 AM", color: "green" }, { title: "Desi...", time: "10:30 AM", color: "purple" }, { title: "SEO pl...", time: "1:30 PM", color: "orange" }],
  "9": [{ title: "Lun...", time: "12:00 PM", color: "green", dot: true }],
  "10": [{ title: "Friday...", time: "9:00 AM", color: "blue" }, { title: "Olivia...", time: "10:00 AM", color: "green" }, { title: "Produ...", time: "1:30 PM", color: "purple" }],
  "5_sat2": [{ title: "Ho...", time: "11:00 AM", color: "red", dot: true }],
  "5_sun": [{ title: "Ava'...", time: "1:00 PM", color: "orange" }],
  "13": [{ title: "Mond...", time: "9:00 AM", color: "blue" }, { title: "Team...", time: "12:15 PM", color: "red" }],
  "14": [],
  "15": [{ title: "Produ...", time: "9:30 AM", color: "orange" }],
  "16": [{ title: "Amél...", time: "10:00 AM", color: "green" }, { title: "All-ha...", time: "4:00 PM", color: "purple" }],
  "17": [{ title: "Friday...", time: "9:00 AM", color: "blue" }, { title: "Coffe...", time: "9:30 AM", color: "green" }, { title: "Desig...", time: "2:30 PM", color: "purple" }],
  "18": [{ title: "Half...", time: "7:00 AM", color: "green", dot: true }],
  "19": [],
  "20": [{ title: "Mond...", time: "9:00 AM", color: "blue" }, { title: "Deep...", time: "9:15 AM", color: "green" }],
  "21": [{ title: "Quart...", time: "11:30 AM", color: "red" }, { title: "Lunch...", time: "1:00 PM", color: "blue" }, { title: "Dinn...", time: "7:00 PM", color: "green", dot: true }],
  "22": [{ title: "Deep...", time: "9:00 AM", color: "green" }, { title: "Desig...", time: "2:30 PM", color: "purple" }],
  "23": [{ title: "Amél...", time: "10:00 AM", color: "green" }],
  "24": [{ title: "Friday...", time: "9:00 AM", color: "blue" }, { title: "Accou...", time: "1:45 PM", color: "orange" }, { title: "Marke...", time: "2:30 PM", color: "purple" }],
  "25": [],
  "26": [{ title: "Half...", time: "7:00 AM", color: "green", dot: true }],
  "27": [{ title: "Mond...", time: "9:00 AM", color: "blue" }],
  "28": [{ title: "Cont...", time: "11:00 AM", color: "green" }, { title: "Lunc...", time: "12:45 AM", color: "blue" }],
  "29": [{ title: "Produ...", time: "9:30 AM", color: "orange" }],
  "30_end": [{ title: "All-ha...", time: "4:00 PM", color: "purple" }, { title: "Team...", time: "5:30 PM", color: "orange" }],
  "31_end": [{ title: "Friday...", time: "9:00 AM", color: "blue" }],
}

const monthGrid = [
  [{ d: 30, outside: true, key: "30" }, { d: 31, outside: true, key: "31" }, { d: 1, key: "1" }, { d: 2, key: "2" }, { d: 3, key: "3" }, { d: 5, key: "5_sat", label: 5 }, { d: 4, key: "4" }],
  [{ d: 6, key: "6" }, { d: 7, key: "7" }, { d: 8, key: "8" }, { d: 9, key: "9" }, { d: 10, key: "10" }, { d: 5, key: "5_sat2", label: 5 }, { d: 5, key: "5_sun", label: 5 }],
  [{ d: 13, key: "13" }, { d: 14, key: "14" }, { d: 15, key: "15" }, { d: 16, key: "16" }, { d: 17, key: "17" }, { d: 18, key: "18" }, { d: 19, key: "19" }],
  [{ d: 20, key: "20" }, { d: 21, key: "21" }, { d: 22, key: "22" }, { d: 23, key: "23" }, { d: 24, key: "24" }, { d: 25, key: "25" }, { d: 26, key: "26", isToday: true }],
  [{ d: 27, key: "27" }, { d: 28, key: "28" }, { d: 29, key: "29" }, { d: 30, key: "30_end" }, { d: 31, key: "31_end" }, { d: 1, outside: true }, { d: 2, outside: true, events: [{ title: "Mond...", time: "9:00 AM", color: "gray" }] }],
]

const availabilityDays = ["M", "T", "W", "T", "F", "S", "S"]
const availabilityTimes = ["9am", "11am", "1pm", "3pm", "5pm"]
const availabilityGrid = [
  [true, true, true, true, false, false, false],
  [true, false, true, true, false, false, false],
  [true, true, true, true, false, false, false],
  [true, false, true, false, false, false, false],
  [true, true, true, true, false, false, false],
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

        {/* Student Profile */}
        <div className="flex flex-col items-center gap-[17px]">
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-b from-[#e4a000] to-[rgba(255,195,10,0.2)] border border-black/[0.03] flex items-center justify-center">
              <span className="text-lg font-medium text-white">AH</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Leyla Mammadova</span>
              <span className="text-base text-[#5b616d] leading-6">leyla@email.com · Joined Jan 14, 2026</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <span className="bg-[rgba(255,195,10,0.12)] h-7 px-2.5 rounded-lg text-xs font-medium text-[#e4a000] inline-flex items-center">1-on-1 session</span>
            <span className="bg-[rgba(6,177,241,0.12)] h-7 px-2.5 rounded-lg text-xs font-medium text-[#008ece] inline-flex items-center">Scheduled</span>
            <span className="bg-[rgba(64,155,63,0.12)] h-7 px-2.5 rounded-lg text-xs font-medium text-[#338732] inline-flex items-center">Online</span>
          </div>
        </div>

        {/* Details Card */}
        <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
          <div className="bg-[#f9f9fa] border-b border-black/[0.03] px-5 py-4">
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Details</span>
          </div>
          <div className="p-5 flex flex-col gap-5">
            {[
              { label: "Student", value: "Leyla M." },
              { label: "Date & Time", value: "Mar 28, 9:00 AM AZT" },
              { label: "Duration", value: "60 minutes" },
              { label: "Subject", value: "IB Biology HL" },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-2 border-b border-black/[0.06]">
                <span className="text-sm text-[#5b616d] leading-5">{row.label}</span>
                <span className="text-base font-medium text-[#0a0c11] leading-6">{row.value}</span>
              </div>
            ))}
            <div className="flex items-center justify-between px-4 py-2 border-b border-black/[0.06]">
              <span className="text-sm text-[#5b616d] leading-5">Rate</span>
              <span className="text-base font-medium text-[#007aff] leading-6">$20 / session</span>
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
            <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <rect x="2.5" y="3.75" width="13" height="11.5" rx="1.5" stroke="#0a0c11" strokeWidth="1.2" />
                <path d="M2.5 7h13M5.5 2v3M12.5 2v3" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              Reschedule
            </button>
            <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.24928 2.8125H4.62572C3.96375 2.8125 3.43269 2.81249 3.00325 2.84758C2.56201 2.88363 2.17875 2.95951 1.82553 3.13948C1.26104 3.4271 0.802101 3.88604 0.514481 4.45053C0.334507 4.80375 0.258628 5.18701 0.222577 5.62825C0.187491 6.05769 0.187495 6.58875 0.1875 7.25072V10.7493C0.187495 11.4113 0.187491 11.9423 0.222577 12.3718C0.258628 12.813 0.334507 13.1963 0.514481 13.5495C0.802101 14.114 1.26104 14.5729 1.82553 14.8605C2.17875 15.0405 2.56201 15.1164 3.00325 15.1524C3.43269 15.1875 3.96374 15.1875 4.6257 15.1875H9.2493C9.91126 15.1875 10.4423 15.1875 10.8718 15.1524C11.313 15.1164 11.6963 15.0405 12.0495 14.8605C12.614 14.5729 13.0729 14.114 13.3605 13.5495C13.5405 13.1963 13.6164 12.813 13.6524 12.3718C13.6753 12.0921 13.6832 11.7693 13.686 11.3953L15.7426 13.2649C16.5375 13.9875 17.8125 13.4235 17.8125 12.3492V5.65095C17.8125 4.57662 16.5375 4.0126 15.7426 4.73527L13.686 6.60486C13.6832 6.23081 13.6753 5.90797 13.6524 5.62825C13.6164 5.18701 13.5405 4.80375 13.3605 4.45053C13.0729 3.88604 12.614 3.4271 12.0495 3.13948C11.6963 2.95951 11.313 2.88363 10.8718 2.84758C10.4423 2.81249 9.91125 2.8125 9.24928 2.8125ZM13.6875 8.12391V9.87624L16.4993 12.4324C16.5227 12.4537 16.542 12.46 16.5573 12.4621C16.5753 12.4646 16.5977 12.4622 16.6205 12.4521C16.6433 12.442 16.6602 12.4271 16.6705 12.412C16.6792 12.3993 16.6875 12.3808 16.6875 12.3492V5.65095C16.6875 5.61939 16.6792 5.60083 16.6705 5.5881C16.6602 5.57306 16.6433 5.55814 16.6205 5.54806C16.5977 5.53798 16.5753 5.53554 16.5573 5.53803C16.542 5.54014 16.5227 5.54648 16.4993 5.5677L13.6875 8.12391ZM12.5625 7.275C12.5625 6.58315 12.5621 6.0981 12.5312 5.71986C12.5008 5.34819 12.4438 5.12946 12.3581 4.96127C12.1784 4.60846 11.8915 4.32163 11.5387 4.14186C11.3705 4.05617 11.1518 3.99921 10.7801 3.96884C10.4019 3.93794 9.91685 3.9375 9.225 3.9375H4.65C3.95815 3.9375 3.4731 3.93794 3.09486 3.96884C2.72319 3.99921 2.50446 4.05617 2.33627 4.14186C1.98346 4.32163 1.69663 4.60846 1.51686 4.96127C1.43117 5.12946 1.37421 5.34819 1.34384 5.71986C1.31294 6.0981 1.3125 6.58315 1.3125 7.275V10.725C1.3125 11.4168 1.31294 11.9019 1.34384 12.2801C1.37421 12.6518 1.43117 12.8705 1.51686 13.0387C1.69663 13.3915 1.98346 13.6784 2.33627 13.8581C2.50446 13.9438 2.72319 14.0008 3.09486 14.0312C3.4731 14.0621 3.95816 14.0625 4.65 14.0625H9.225C9.91685 14.0625 10.4019 14.0621 10.7801 14.0312C11.1518 14.0008 11.3705 13.9438 11.5387 13.8581C11.8915 13.6784 12.1784 13.3915 12.3581 13.0387C12.4438 12.8705 12.5008 12.6518 12.5312 12.2801C12.5621 11.9019 12.5625 11.4168 12.5625 10.725V7.275Z" fill="white" />
              </svg>
              Join Session
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const BookSessionModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/40" />
      <div
        className="relative bg-white rounded-2xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03),0px_32px_32px_0px_rgba(0,0,0,0.03),0px_56px_56px_0px_rgba(0,0,0,0.03)] w-full max-w-[520px] flex flex-col gap-6 p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex flex-col">
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
            <h2 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">Book new session</h2>
            <button onClick={onClose} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white backdrop-blur-[12px] flex items-center justify-center shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M13.5 4.5l-9 9M4.5 4.5l9 9" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5 p-5">
          <div className="flex flex-col gap-7">
            {/* Student */}
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Student</label>
              <input
                type="text"
                placeholder="e.g. IB Biology HL - Midterm Exam 2026"
                className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
              />
            </div>

            {/* Date & Time */}
            <div className="flex gap-3">
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Date</label>
                <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#8c929c" strokeWidth="1.2" />
                    <path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                  <span className="text-base text-[#8c929c] leading-6 px-1">26.03.2026</span>
                </div>
              </div>
              <div className="flex-1 flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Time</label>
                <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <circle cx="10" cy="10" r="8" stroke="#8c929c" strokeWidth="1.2" />
                    <path d="M10 5.833V10l3 1.667" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="text-base text-[#8c929c] leading-6 px-1">26.03.2026</span>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Note</label>
              <textarea
                placeholder="Topics to cover, student goals..."
                className="bg-white border border-black/[0.06] rounded-[10px] min-h-[96px] px-3 py-2 text-sm text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] resize-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
              />
            </div>
          </div>

          {/* Send message button */}
          <button className="self-start h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
              <g clip-path="url(#clip0_28010_40795)">
                <path d="M9 7.125C8.58579 7.125 8.25 7.46079 8.25 7.875C8.25 8.28921 8.58579 8.625 9 8.625C9.41421 8.625 9.75008 8.28921 9.75008 7.875C9.75008 7.46079 9.41421 7.125 9 7.125Z" fill="white" />
                <path d="M5.25 7.875C5.25 7.46079 5.58579 7.125 6 7.125C6.41421 7.125 6.75008 7.46079 6.75008 7.875C6.75008 8.28921 6.41429 8.625 6.00008 8.625C5.58586 8.625 5.25 8.28921 5.25 7.875Z" fill="white" />
                <path d="M12 7.125C11.5858 7.125 11.25 7.46079 11.25 7.875C11.25 8.28921 11.5858 8.625 12 8.625C12.4142 8.625 12.7501 8.28921 12.7501 7.875C12.7501 7.46079 12.4142 7.125 12 7.125Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3245 0.9375H5.67555C4.96122 0.937495 4.3908 0.937492 3.9301 0.975132C3.45759 1.01374 3.05118 1.09473 2.67791 1.28492C2.07814 1.59051 1.59052 2.07814 1.28492 2.67791C1.09473 3.05118 1.01374 3.45759 0.975135 3.9301C0.937495 4.3908 0.937499 4.96121 0.937503 5.67554L0.937502 15.6864C0.93748 15.8649 0.93746 16.0353 0.949973 16.1729C0.962111 16.3063 0.992613 16.523 1.14063 16.7095C1.31733 16.9321 1.5855 17.0626 1.86974 17.0642C2.10786 17.0655 2.29712 16.9559 2.40961 16.883C2.52557 16.808 2.65966 16.7028 2.80009 16.5926L4.73298 15.0763C4.9318 14.9204 4.97235 14.8918 5.01105 14.8724C5.0557 14.85 5.10313 14.8336 5.1521 14.8237C5.19455 14.8151 5.24407 14.8125 5.49677 14.8125H12.3245C13.0388 14.8125 13.6092 14.8125 14.0699 14.7749C14.5424 14.7363 14.9488 14.6553 15.3221 14.4651C15.9219 14.1595 16.4095 13.6719 16.7151 13.0721C16.9053 12.6988 16.9863 12.2924 17.0249 11.8199C17.0625 11.3592 17.0625 10.7888 17.0625 10.0745V5.67553C17.0625 4.96122 17.0625 4.39078 17.0249 3.9301C16.9863 3.45759 16.9053 3.05118 16.7151 2.67791C16.4095 2.07814 15.9219 1.59051 15.3221 1.28492C14.9488 1.09473 14.5424 1.01374 14.0699 0.975132C13.6092 0.937492 13.0388 0.937495 12.3245 0.9375ZM3.18865 2.2873C3.37689 2.19138 3.61878 2.12932 4.02171 2.0964C4.43122 2.06294 4.95565 2.0625 5.7 2.0625H12.3C13.0444 2.0625 13.5688 2.06294 13.9783 2.0964C14.3812 2.12932 14.6231 2.19138 14.8114 2.2873C15.1994 2.48504 15.515 2.80056 15.7127 3.18865C15.8086 3.37689 15.8707 3.61877 15.9036 4.02171C15.9371 4.43122 15.9375 4.95565 15.9375 5.7V10.05C15.9375 10.7944 15.9371 11.3188 15.9036 11.7283C15.8707 12.1312 15.8086 12.3731 15.7127 12.5614C15.515 12.9494 15.1994 13.265 14.8114 13.4627C14.6231 13.5586 14.3812 13.6207 13.9783 13.6536C13.5688 13.6871 13.0444 13.6875 12.3 13.6875L5.45769 13.6875C5.26561 13.6873 5.09617 13.6872 4.92909 13.721C4.78217 13.7507 4.63987 13.7999 4.50594 13.8672C4.35362 13.9437 4.22038 14.0484 4.06934 14.1671L2.06255 15.7412L2.0625 5.7C2.0625 4.95565 2.06294 4.43121 2.0964 4.02171C2.12932 3.61877 2.19139 3.37689 2.2873 3.18865C2.48504 2.80056 2.80056 2.48504 3.18865 2.2873Z" fill="white" />
              </g>
              <defs>
                <clipPath id="clip0_28010_40795">
                  <rect width="18" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
            Send message
          </button>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-6 items-end">
          <div className="h-px w-full bg-black/[0.06]" />
          <div className="flex items-center gap-3">
            <button onClick={onClose} className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
              Cancel
            </button>
            <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M15 5.25L6.75 13.5 3 9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const TutorSchedule = () => {
  const [activeView, setActiveView] = useState("week")
  const [showBookModal, setShowBookModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState(null)

  const currentTimeOffset = ((14 + 20 / 60) - 9) * 96

  return (
    <div className="flex flex-col lg:flex-row h-full">
      {/* Calendar Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="px-4 sm:px-6 lg:px-10 pt-6 sm:pt-8 pb-4 sm:pb-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
          <div className="flex flex-col gap-[6px]">
            <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Schedule</h1>
            <p className="text-sm text-[#5b616d] leading-5">Manage sessions, availability and bookings</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button className="h-10 px-[14px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-sm font-medium text-[#0a0c11] flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ea] transition-colors">
              Availability
            </button>
            <button onClick={() => setShowBookModal(true)} className="h-10 px-[14px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 3v12M3 9h12" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              Book session
            </button>
          </div>
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
            /* Month View */
            <div className="border border-[#e9eaeb] rounded-xl overflow-hidden min-w-[640px]">
              {/* Day Headers */}
              <div className="grid grid-cols-7 border-b border-[#e9eaeb]">
                {monthDayHeaders.map((d) => (
                  <div key={d} className="py-2.5 text-center text-xs font-medium text-[#8c929c] border-r border-[#e9eaeb] last:border-r-0">{d}</div>
                ))}
              </div>
              {/* Weeks */}
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
            /* Today / Daily View */
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

                {/* Current Time Marker */}
                <div
                  className="absolute left-0 right-0 flex items-center z-20 pointer-events-none"
                  style={{ top: currentTimeOffset }}
                >
                  <span className="text-[10px] font-semibold text-[#007aff] w-[72px] text-right pr-2 shrink-0">2:20 PM</span>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#007aff] -ml-[5px] shrink-0" />
                  <div className="flex-1 h-0.5 bg-[#007aff]" />
                </div>

                {/* Events */}
                {todayEvents.map((event) => {
                  const top = (event.startHour - 9) * 96
                  const height = event.duration * 96
                  return (
                    <div
                      key={event.id}
                      onClick={() => setSelectedEvent(event)}
                      className={`absolute ${event.color} ${event.border} rounded-lg p-2.5 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity z-10`}
                      style={{
                        top: top + 2,
                        height: height - 4,
                        left: 72,
                        right: 0,
                      }}
                    >
                      <p className="text-sm font-semibold text-[#0a0c11]">{event.title}</p>
                      <p className="text-xs text-[#5b616d]">{event.time}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          ) : (
            /* Week View */
            <div className="border border-black/[0.06] rounded-xl overflow-hidden min-w-[640px]">
              {/* Day Headers */}
              <div className="flex border-b border-black/[0.06]">
                <div className="w-[72px] shrink-0" />
                {days.map((day) => (
                  <div key={day.short + day.date} className="flex-1 flex flex-col items-center py-3 border-r border-black/[0.06] last:border-r-0">
                    <span className="text-xs text-[#8c929c]">{day.short}</span>
                    {day.isToday ? (
                      <span className="bg-[#007aff] text-white rounded-full w-7 h-7 flex items-center justify-center text-sm font-semibold mt-0.5">
                        {day.date}
                      </span>
                    ) : (
                      <span className="text-sm font-semibold text-[#0a0c11] mt-0.5">{day.date}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Time Grid */}
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

                {/* Current Time Marker */}
                <div
                  className="absolute left-[72px] right-0 flex items-center z-20 pointer-events-none"
                  style={{ top: currentTimeOffset }}
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#007aff] -ml-[5px]" />
                  <div className="flex-1 h-0.5 bg-[#007aff]" />
                </div>

                {/* Events */}
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
          <div className="px-4 pt-4 pb-[17px] flex flex-col gap-3 border-b border-black/[0.03] sm:border-r-0">
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

          {/* Availability This Week */}
          <div className="px-4 pt-4 pb-[17px] flex flex-col gap-3 border-b border-black/[0.03] sm:border-r lg:border-r-0 border-black/[0.03]">
            <div className="flex items-center gap-[7px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2" y="2.667" width="12" height="11.333" rx="1.5" stroke="#0a0c11" strokeWidth="1.2" />
                <path d="M5.333 1.333v2.667M10.667 1.333v2.667M2 6h12" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-xs font-semibold text-[#0a0c11] leading-4">Availability This Week</span>
            </div>
            <div className="grid gap-[3px]" style={{ gridTemplateColumns: "36px repeat(7, 1fr)", gridTemplateRows: "12px repeat(5, 24px)" }}>
              {/* Header row */}
              <div />
              {availabilityDays.map((day, i) => (
                <div key={i} className="flex items-center justify-center text-[10px] font-bold text-[#5c6180] uppercase tracking-[0.4px]">
                  {day}
                </div>
              ))}
              {/* Time rows */}
              {availabilityTimes.map((time, rowIdx) => (
                <>
                  <div key={`label-${rowIdx}`} className="flex items-center justify-end pr-[5px] text-[9.5px] text-[#5c6180]">
                    {time}
                  </div>
                  {availabilityGrid[rowIdx].map((available, colIdx) => (
                    <div
                      key={`cell-${rowIdx}-${colIdx}`}
                      className={`rounded-[5px] ${available
                        ? "bg-[rgba(6,177,241,0.2)] border border-[rgba(6,177,241,0.4)]"
                        : "bg-[#f9f9fa] border border-black/[0.06]"
                        }`}
                    />
                  ))}
                </>
              ))}
            </div>
            <button className="w-full h-8 bg-[rgba(0,122,255,0.12)] text-[#0267d0] text-xs font-medium rounded-lg flex items-center justify-center gap-1.5 hover:bg-[rgba(0,122,255,0.18)] transition-colors">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M12.667 4L5.75 10.917 3.333 8.5" stroke="#0267d0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Save Availability
            </button>
          </div>

          {/* This Week's Stats */}
          <div className="px-4 pt-4 pb-[17px] flex flex-col gap-3 border-b border-black/[0.03]">
            <div className="flex items-center gap-[7px]">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M4 12V7.333M8 12V4M12 12V9.333" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-semibold text-[#0a0c11] leading-4">This Week's Stats</span>
            </div>
            <div className="grid grid-cols-2 gap-x-1.5 gap-y-3">
              <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-xl px-3 py-2.5 flex flex-col gap-0.5 items-center">
                <p className="text-base font-semibold text-[#4f8ef7] leading-6">3</p>
                <p className="text-[10px] text-[#5b616d] leading-4">Sessions today</p>
              </div>
              <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-xl px-3 py-2.5 flex flex-col gap-0.5 items-center">
                <p className="text-base font-semibold text-[#f5a623] leading-6">$180</p>
                <p className="text-[10px] text-[#5b616d] leading-4">Today's earnings</p>
              </div>
              <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-xl px-3 py-2.5 flex flex-col gap-0.5 items-center">
                <p className="text-base font-semibold text-[#34d9a0] leading-6">12</p>
                <p className="text-[10px] text-[#5b616d] leading-4">This week</p>
              </div>
              <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-xl px-3 py-2.5 flex flex-col gap-0.5 items-center">
                <p className="text-base font-semibold text-[#a78bfa] leading-6">8</p>
                <p className="text-[10px] text-[#5b616d] leading-4">Open slots left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showBookModal && <BookSessionModal onClose={() => setShowBookModal(false)} />}
      {selectedEvent && <SessionDetailModal event={selectedEvent} onClose={() => setSelectedEvent(null)} />}
    </div>
  )
}

export default TutorSchedule
