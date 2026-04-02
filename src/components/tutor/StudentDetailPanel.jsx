import { useState, useEffect } from "react"

const StudentDetailPanel = ({ isOpen, onClose, student }) => {
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)
  const [msgTitle, setMsgTitle] = useState("")
  const [msgBody, setMsgBody] = useState("")

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setAnimating(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    } else {
      document.body.style.overflow = ""
      setVisible(false)
      const timer = setTimeout(() => setAnimating(false), 300)
      return () => clearTimeout(timer)
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen && !animating) return null
  if (!student) return null

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`} onClick={handleClose} />

      <div className={`relative w-full max-w-[580px] my-4 mr-4 bg-white rounded-[18px] shadow-[0px_20px_60px_-12px_rgba(0,0,0,0.15)] overflow-y-auto transition-transform duration-300 ease-out ${visible ? "translate-x-0" : "translate-x-[calc(100%+16px)]"}`}>
        <div className="p-6 flex flex-col gap-6">
          {/* Close */}
          <button onClick={handleClose} className="absolute top-5 right-5 w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
          </button>

          {/* Profile */}
          <div className="flex flex-col items-center gap-3 pt-4">
            <div className={`w-16 h-16 rounded-full bg-gradient-to-b ${student.avatarGradient || "from-[#e4a000] to-[rgba(255,195,10,0.2)]"} border-2 border-white shadow-lg flex items-center justify-center`}>
              <span className="text-xl font-semibold text-white">{student.name.split(" ").map(n => n[0]).join("")}</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">{student.name}</h2>
              <p className="text-sm text-[#8c929c] leading-5">{student.email} · Joined Jan 14, 2026</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="bg-[rgba(6,177,241,0.12)] h-6 px-2 rounded-lg text-xs font-medium text-[#008ece] flex items-center">{student.status}</span>
              <span className="bg-[rgba(6,177,241,0.12)] h-6 px-2 rounded-lg text-xs font-medium text-[#008ece] flex items-center">{student.subject}</span>
            </div>
          </div>

          {/* KPI Strip */}
          <div className="flex border-t border-black/[0.06]">
            <div className="flex-1 py-4 flex flex-col">
              <span className="text-[22px] font-bold text-[#0a0c11] leading-7">20</span>
              <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[1px]">Sessions</span>
            </div>
            <div className="flex-1 py-4 flex flex-col border-l border-black/[0.06] pl-4">
              <span className="text-[22px] font-bold text-[#0a0c11] leading-7">$460</span>
              <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[1px]">Revenue</span>
            </div>
            <div className="flex-1 py-4 flex flex-col border-l border-black/[0.06] pl-4">
              <span className="text-[22px] font-bold text-[#22c55e] leading-7">88%</span>
              <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[1px]">Progress</span>
            </div>
          </div>

          {/* Details */}
          <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
            <div className="px-5 py-4 border-b border-black/[0.06]">
              <span className="text-base font-semibold text-[#0a0c11] leading-6">Details</span>
            </div>
            <div className="px-5 py-3">
              {[
                { label: "Subject", value: student.subject },
                { label: "Last session", value: student.lastSession || "5 days ago" },
                { label: "Total spent", value: "$460" },
                { label: "Avg per session", value: "$48" },
              ].map((row, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 3 ? "border-b border-black/[0.06]" : ""}`}>
                  <span className="text-sm text-[#5b616d] leading-5">{row.label}</span>
                  <span className="text-sm font-semibold text-[#0a0c11] leading-5">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Sessions */}
          <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
            <div className="px-5 py-4 border-b border-black/[0.06]">
              <span className="text-base font-semibold text-[#0a0c11] leading-6">Recent Sessions</span>
            </div>
            <div className="px-5 py-3">
              {[
                { date: "Mar 7, 2026", subject: "Uni Entrance", price: "$48" },
                { date: "Feb 28, 2026", subject: "Uni Entrance", price: "$48" },
                { date: "Jan 14, 2026", subject: "Uni Entrance", price: "$48" },
              ].map((session, i) => (
                <div key={i} className={`flex items-center justify-between py-3 ${i < 2 ? "border-b border-black/[0.06]" : ""}`}>
                  <span className="text-sm text-[#5b616d] leading-5">{session.date} · {session.subject}</span>
                  <span className="text-sm font-semibold text-[#007aff] leading-5">{session.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Send Message */}
          <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
            <div className="px-5 py-4 border-b border-black/[0.06]">
              <span className="text-base font-semibold text-[#0a0c11] leading-6">Send Message</span>
            </div>
            <div className="p-5 flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#0a0c11] leading-5">Message Title</label>
                <input type="text" value={msgTitle} onChange={(e) => setMsgTitle(e.target.value)} placeholder="e.g. IB Biology HL - Midterm Exam 2026" className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-sm text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#0a0c11] leading-5">Message Body</label>
                <textarea value={msgBody} onChange={(e) => setMsgBody(e.target.value)} placeholder="Write your message here..." className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-sm text-[#0a0c11] leading-5 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
              </div>
              <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] self-start">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3.75" width="13.5" height="10.5" rx="1.5" stroke="white" strokeWidth="1.2" /><path d="M2.25 5.25L9 9.75l6.75-4.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Send message
              </button>
            </div>
          </div>

          {/* Export */}
          <div className="flex justify-end">
            <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 11.25l3.75-3.75M9 11.25v-9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Export session history
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentDetailPanel
