import { useState } from "react"

const tabs = ["Certifications", "Badges"]

const certificates = [
  { id: 1, name: "Jason Alexander", title: "IB Biology HL — Complete Exam Prep", validUntil: "February 21, 2028", issueDate: "February 24, 2026" },
  { id: 2, name: "Jason Alexander", title: "GCSE Biology Foundation to A*", validUntil: "March 15, 2029", issueDate: "March 10, 2026" },
  { id: 3, name: "Jason Alexander", title: "AP Biology Weekly Group", validUntil: "April 10, 2027", issueDate: "January 5, 2026" },
  { id: 4, name: "Jason Alexander", title: "Typography for UI", validUntil: "February 21, 2028", issueDate: "February 24, 2026" },
  { id: 5, name: "Jason Alexander", title: "Color Palette Guidelines", validUntil: "March 15, 2029", issueDate: "February 24, 2026" },
  { id: 6, name: "Jason Alexander", title: "Iconography Standards", validUntil: "April 10, 2027", issueDate: "February 24, 2026" },
]

const badges = [
  { id: 1, title: "Lifelong Learner", issuedOn: "March 22, 2025", label: "Lifelong\nLearner", sublabel: "2025", bgColor: "bg-[#7c8dc5]", iconType: "star" },
  { id: 2, title: "Streak Master", issuedOn: "June 15, 2025", label: "Streak\nMaster", sublabel: "Unidestin", bgColor: "bg-[#8b9ad4]", iconType: "diamond" },
  { id: 3, title: "Quick Learner", issuedOn: "January 22, 2025", label: "Quick\nLearner", sublabel: "Unidestin", bgColor: "bg-[#6b7fc4]", iconType: "shield" },
  { id: 4, title: "Fast Finisher", issuedOn: "April 11, 2025", label: "Fast\nFinisher", sublabel: "2025", bgColor: "bg-[#7b8dc6]", iconType: "award" },
]

const badgeIcons = {
  star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  diamond: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 9l10 13L22 9 12 2z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  award: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="6" fill="white" stroke="white" strokeWidth="1.5" /><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
}

const CertificateCard = ({ certificate }) => (
  <div className="flex flex-col gap-3">
    <div className="border border-black/[0.06] rounded-xl overflow-hidden bg-white p-3 sm:p-4 aspect-[4/3] flex items-center justify-center">
      <div className="w-full h-full border border-dashed border-[#d5d7da] rounded-lg flex flex-col items-center justify-center gap-3 px-4 py-6 relative">
        <div className="absolute top-3 right-[-12px] w-8 h-24">
          <div className="w-full h-full bg-[#007aff] rounded-b-sm" />
          <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[16px] border-r-[16px] border-b-[12px] border-l-[#007aff] border-r-[#007aff] border-b-white" />
        </div>
        <div className="flex flex-col items-center gap-0.5 text-center">
          <p className="text-[14px] sm:text-[16px] font-bold text-[#0a0c11] leading-tight tracking-wide uppercase">Certificate</p>
          <p className="text-[10px] sm:text-[11px] font-semibold text-[#5b616d] uppercase tracking-wider">of Appreciation</p>
        </div>
        <p className="text-[8px] sm:text-[9px] text-[#8c929c] text-center leading-tight max-w-[180px]">This hereby presented to certify that</p>
        <p className="text-[18px] sm:text-[22px] font-['Georgia',serif] italic text-[#0a0c11] leading-tight">{certificate.name}</p>
        <p className="text-[7px] sm:text-[8px] text-[#8c929c] text-center leading-tight max-w-[200px]">For outstanding contribution and excellence in the field of design and digital innovation.</p>
        <div className="flex items-end justify-between w-full mt-2 px-2">
          <div className="flex flex-col items-center gap-1">
            <div className="w-12 h-px bg-[#5b616d]" />
            <p className="text-[6px] sm:text-[7px] text-[#8c929c]">Chief Learning Officer</p>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <p className="text-[6px] sm:text-[7px] text-[#8c929c]">{certificate.issueDate}</p>
          </div>
          <div className="size-5 sm:size-6 rounded-full bg-[#007aff] flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-0.5">
      <p className="text-sm font-medium text-[#0a0c11] leading-6">{certificate.title}</p>
      <p className="text-xs text-[#8c929c] leading-5">Valid until {certificate.validUntil}</p>
    </div>
  </div>
)

const BadgeCard = ({ badge }) => (
  <div className="flex flex-col gap-3">
    <div className="border border-black/[0.06] rounded-xl overflow-hidden bg-[#f9f9fa] aspect-[4/3] flex items-center justify-center p-6 sm:p-8">
      <div className={`size-32 sm:size-40 rounded-full flex items-center justify-center ${badge.bgColor}`}>
        <div className="flex flex-col items-center gap-1 text-center">
          {badgeIcons[badge.iconType]}
          <p className="text-[14px] sm:text-[16px] font-bold text-white leading-tight uppercase tracking-wide whitespace-pre-line">{badge.label}</p>
          {badge.sublabel && <p className="text-[10px] sm:text-[11px] font-medium text-white/80">{badge.sublabel}</p>}
        </div>
      </div>
    </div>
    <div className="flex flex-col gap-0.5">
      <p className="text-sm font-medium text-[#0a0c11] leading-6">{badge.title}</p>
      <p className="text-xs text-[#8c929c] leading-5">Issued On : {badge.issuedOn}</p>
    </div>
  </div>
)

const StudentAchievements = () => {
  const [activeTab, setActiveTab] = useState("Certifications")
  const [search, setSearch] = useState("")

  const currentItems = activeTab === "Certifications" ? certificates : badges

  return (
    <div className="px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-6 sm:gap-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
        <div className="flex flex-col gap-[10.9px]">
          <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">My Achievements</h1>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your account was created successfully. Here's what we have on file from your registration.</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="8" cy="8" r="5.5" stroke="white" strokeWidth="1.3" /><path d="M15 15l-3-3" stroke="white" strokeWidth="1.3" strokeLinecap="round" /></svg>
          Gain new Certificates
        </button>
      </div>

      <div className="bg-white border border-black/[0.03] rounded-2xl p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-xl p-1 flex items-center gap-1.5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`h-8 px-2 rounded-lg text-xs font-medium flex items-center gap-1 transition-colors ${
                activeTab === tab
                  ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                  : "text-[#8c929c]"
              }`}
            >
              {tab}
              {tab === "Badges" && (
                <span className="bg-[rgba(0,122,255,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center justify-center">24</span>
              )}
            </button>
          ))}
        </div>
        <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-10 pl-4 pr-2 flex items-center gap-1.5 w-full sm:w-[287px] min-w-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
          <input
            type="text"
            placeholder="Search course by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent flex-1 text-sm font-medium outline-none placeholder:text-[#5b616d] text-[#0a0c11] px-2 min-w-0"
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div className="flex items-center gap-3">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            All subjects
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.05] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_1px_2px_0px_rgba(255,255,255,0.03)]">
            Sort: Recent
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 6.75l4.5 4.5 4.5-4.5" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <span className="text-xs text-[#8c929c] whitespace-nowrap">
          Showing <span className="font-medium text-[#5b616d]">{currentItems.length}</span> {activeTab === "Certifications" ? "certificates" : "badges"}
        </span>
      </div>

      {activeTab === "Certifications" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {certificates.map((cert) => (
            <CertificateCard key={cert.id} certificate={cert} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {badges.map((badge) => (
            <BadgeCard key={badge.id} badge={badge} />
          ))}
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 px-1 pt-2">
        <div className="flex items-center gap-3">
          <button className="w-8 h-8 rounded-lg bg-[#f2f2f4] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11.25 4.5L6.75 9l4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
          <button className="w-8 h-8 rounded-lg border border-black/[0.05] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] flex items-center justify-center text-[13px] font-semibold text-[#0a0c11]">1</button>
          <button className="w-8 h-8 rounded-lg bg-[#f2f2f4] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M6.75 4.5L11.25 9l-4.5 4.5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
        <div className="flex-1 flex items-center justify-end gap-2">
          <span className="hidden sm:inline text-[13px] font-medium text-[#8c929c] leading-5">Results per page:</span>
          <button className="h-8 px-2 rounded-lg border border-black/[0.05] bg-white backdrop-blur-[12px] flex items-center gap-1 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03)]">
            <span className="text-xs font-semibold text-[#5b616d] leading-4">6</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default StudentAchievements
