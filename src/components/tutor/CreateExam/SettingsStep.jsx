import { useState } from "react"

const Toggle = ({ enabled, onToggle }) => (
  <button onClick={onToggle} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${enabled ? "bg-[#007aff]" : "bg-gradient-to-b from-[#ececf0] to-[#f9f9fa]"}`}>
    <div className={`w-[32px] h-[18px] rounded-[6px] flex items-center px-0.5 transition-colors ${enabled ? "bg-[#007aff] justify-end" : "bg-[#dddfe4]"}`}>
      <div className="w-[18px] h-[14px] rounded-full bg-white shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)]" />
    </div>
  </button>
)

const SectionCard = ({ icon, title, children }) => (
  <div className="bg-white border border-black/[0.03] rounded-[18px] overflow-hidden">
    <div className="bg-[#f9f9fa] border-b border-black/[0.06] px-5 py-4 flex items-center gap-2">
      {icon}
      <span className="text-base font-semibold text-[#0a0c11] leading-6">{title}</span>
    </div>
    <div className="p-5 flex flex-col gap-3">
      {children}
    </div>
  </div>
)

const ToggleRow = ({ title, subtitle, enabled, onToggle }) => (
  <div className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-center gap-2">
    <div className="flex-1 min-w-0 flex flex-col">
      <span className="text-base font-medium text-[#0a0c11] leading-6">{title}</span>
      <span className="text-sm text-[#5b616d] leading-6">{subtitle}</span>
    </div>
    <Toggle enabled={enabled} onToggle={onToggle} />
  </div>
)

const ClockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#0a0c11" strokeWidth="1.5" /><path d="M12 7v5l3 3" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
const LockIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#0a0c11" strokeWidth="1.5" /><path d="M8 11V7a4 4 0 018 0v4" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
const StarIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.27 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" stroke="#0a0c11" strokeWidth="1.5" strokeLinejoin="round" /></svg>
const BellIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 8A6 6 0 106 8c0 7-3 9-3 9h18s-3-2-3-9zM13.73 21a2 2 0 01-3.46 0" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
const CalendarIcon = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#8c929c" strokeWidth="1.2" /><path d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" /></svg>
const ChevronDownIcon = () => <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>

const SettingsStep = ({ onNext }) => {
  const [shuffleQuestions, setShuffleQuestions] = useState(false)
  const [shuffleAnswers, setShuffleAnswers] = useState(false)
  const [preventCopy, setPreventCopy] = useState(true)
  const [autoGrade, setAutoGrade] = useState(false)
  const [showScore, setShowScore] = useState(true)
  const [notifyLive, setNotifyLive] = useState(false)
  const [sendReminder, setSendReminder] = useState(false)
  const [notifySubmissions, setNotifySubmissions] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 5 of 6 — Settings</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Configure exam settings</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Set the schedule, time limit, access controls, and grading preferences.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Schedule & Timing */}
      <SectionCard icon={<ClockIcon />} title="Schedule & Timing">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Exam date & time</label>
            <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2 cursor-pointer">
              <CalendarIcon />
              <span className="text-base text-[#8c929c] leading-6 px-1">Select date</span>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Late submission cutoff</label>
            <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center justify-between cursor-pointer">
              <span className="text-base text-[#8c929c] leading-6 px-1">No late submissions</span>
              <ChevronDownIcon />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">The limit</label>
          <input type="text" defaultValue="60 minutes" className="w-[135px] bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#8c929c] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
        </div>
      </SectionCard>

      {/* Access & Security */}
      <SectionCard icon={<LockIcon />} title="Access & Security">
        <ToggleRow title="Shuffle question order" subtitle="Randomize for each student" enabled={shuffleQuestions} onToggle={() => setShuffleQuestions(!shuffleQuestions)} />
        <ToggleRow title="Shuffle answer options" subtitle="Randomize MCQ options" enabled={shuffleAnswers} onToggle={() => setShuffleAnswers(!shuffleAnswers)} />
        <ToggleRow title="Prevent copy-paste" subtitle="Disable clipboard in exam" enabled={preventCopy} onToggle={() => setPreventCopy(!preventCopy)} />
      </SectionCard>

      {/* Grading */}
      <SectionCard icon={<StarIcon />} title="Grading">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Passing score</label>
          <input type="text" defaultValue="60 %" className="w-[135px] bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#8c929c] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
        </div>
        <ToggleRow title="Auto-grade MCQ & T/F" subtitle="Grade automatically on submit" enabled={autoGrade} onToggle={() => setAutoGrade(!autoGrade)} />
        <ToggleRow title="Show score after submit" subtitle="Students see result immediately" enabled={showScore} onToggle={() => setShowScore(!showScore)} />
      </SectionCard>

      {/* Notifications */}
      <SectionCard icon={<BellIcon />} title="Notifications">
        <ToggleRow title="Notify students when live" subtitle="Push + email when exam starts" enabled={notifyLive} onToggle={() => setNotifyLive(!notifyLive)} />
        <ToggleRow title="Send 24h reminder" subtitle="Remind students before exam" enabled={sendReminder} onToggle={() => setSendReminder(!sendReminder)} />
        <ToggleRow title="Notify me on submissions" subtitle="Alert when student submits" enabled={notifySubmissions} onToggle={() => setNotifySubmissions(!notifySubmissions)} />
      </SectionCard>
    </div>
  )
}

export default SettingsStep
