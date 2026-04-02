const RequiredTag = () => (
  <span className="bg-[rgba(6,177,241,0.12)] h-5 px-1 rounded-md flex items-center gap-1">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l2 2 4-4 2-2" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <span className="text-[10px] font-medium text-[#008ece] leading-4">Required</span>
  </span>
)

const OptionalTag = () => (
  <span className="px-1.5 py-1 rounded-md border border-black/[0.06] bg-[rgba(242,242,244,0.8)] text-[10px] font-medium text-[#0a0c11] leading-4 backdrop-blur-[12px]">Optional</span>
)

const ClockIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <circle cx="6" cy="6" r="5" stroke="#c3c6cc" strokeWidth="1" />
    <path d="M6 3v3l2 1" stroke="#c3c6cc" strokeWidth="1" strokeLinecap="round" />
  </svg>
)

const WaitingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6.5" stroke="#e4a000" strokeWidth="1.5" />
    <path d="M8 4.5V8l2 1.5" stroke="#e4a000" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const statusCards = {
  verified: {
    type: "verified",
    iconBg: "bg-[rgba(34,197,94,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M16.667 5L7.5 14.167 3.333 10" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Profile Verified",
    titleColor: "text-[#22c55e]",
    description: "Your profile has been submitted and is currently being reviewed by our team. We will notify you as soon as the process is complete.",
    bg: "bg-[rgba(34,197,94,0.08)]",
    border: "border-[rgba(34,197,94,0.2)]",
  },
  review: {
    type: "review",
    iconBg: "bg-[rgba(255,195,10,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 7.5v3.333M10 14.167h.008M8.575 3.217L1.517 15a1.667 1.667 0 001.425 2.5h14.116a1.667 1.667 0 001.425-2.5L11.425 3.217a1.667 1.667 0 00-2.85 0z" fill="#e4a000" />
      </svg>
    ),
    title: "Profile Under Review",
    titleColor: "text-[#e4a000]",
    description: "Your profile has been submitted and is currently being reviewed by our team. We will notify you as soon as the process is complete.",
    bg: "bg-[#fffeea]",
    border: "border-[rgba(255,195,10,0.2)]",
  },
  rejected: {
    type: "rejected",
    iconBg: "bg-[rgba(237,64,48,0.12)]",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 7.5v3.333M10 14.167h.008M8.575 3.217L1.517 15a1.667 1.667 0 001.425 2.5h14.116a1.667 1.667 0 001.425-2.5L11.425 3.217a1.667 1.667 0 00-2.85 0z" fill="#ed4030" />
      </svg>
    ),
    title: "Profile Unverified",
    titleColor: "text-[#ed4030]",
    description: "We couldn't verify your information.",
    bg: "bg-[rgba(237,64,48,0.12)]",
    border: "border-[rgba(237,64,48,0.2)]",
  },
}

const setupCards = [
  {
    iconBg: "bg-[#f2f2f4]",
    activeIconBg: "bg-[#e3f6e2]",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M13.333 17.5v-1.667a3.333 3.333 0 00-3.333-3.333H5.833a3.333 3.333 0 00-3.333 3.333V17.5M8.333 9.167a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667zM16.667 7.5l-2.5 2.5M14.167 7.5l2.5 2.5" stroke={active ? "#409b3f" : "#8c929c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Write your bio",
    tag: "required",
    description: "A strong bio builds trust. Mention your qualifications, teaching style, and what makes you unique.",
    action: "Write a Bio",
    time: "~ 5 min",
  },
  {
    iconBg: "bg-[#f2f2f4]",
    activeIconBg: "bg-[#dff3ff]",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="1.667" y="4.167" width="12.5" height="11.667" rx="1.5" stroke={active ? "#007aff" : "#8c929c"} strokeWidth="1.5" />
        <path d="M14.167 8.333l4.166-2.5v8.334l-4.166-2.5V8.333z" stroke={active ? "#007aff" : "#8c929c"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Record intro video",
    tag: "required",
    description: (active) => (
      <>
        <span className={active ? "text-[#5b616d]" : "text-[#c3c6cc]"}>Tutors with a video get </span>
        <span className={`font-semibold ${active ? "text-[#0a0c11]" : "text-[#8c929c]"}`}>5× more views</span>
        <span className={active ? "text-[#5b616d]" : "text-[#c3c6cc]"}>. Just 60–90 seconds is enough — be yourself!</span>
      </>
    ),
    action: "Upload video",
    time: "~ 10 min",
  },
  {
    iconBg: "bg-[#f2f2f4]",
    activeIconBg: "bg-[#e8efff]",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M11.667 1.667H5a1.667 1.667 0 00-1.667 1.666v13.334A1.667 1.667 0 005 18.333h10a1.667 1.667 0 001.667-1.666V6.667l-5-5z" stroke={active ? "#3b82f6" : "#8c929c"} strokeWidth="1.5" /><path d="M11.667 1.667v5h5" stroke={active ? "#3b82f6" : "#8c929c"} strokeWidth="1.5" />
      </svg>
    ),
    title: "Upload certificates",
    tag: "optional",
    description: "Verified credentials boost trust and let you charge higher rates. Add degrees, diplomas, or teaching certs.",
    action: "Upload docs",
    time: "~ 5 min",
  },
  {
    iconBg: "bg-[#f2f2f4]",
    activeIconBg: "bg-[rgba(237,64,48,0.12)]",
    icon: (active) => (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke={active ? "#ed4030" : "#8c929c"} strokeWidth="1.5" /><path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke={active ? "#ed4030" : "#8c929c"} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Set your availability",
    tag: "required",
    description: "Open your calendar so students can book sessions. You control when you teach — flexible or fixed.",
    action: "Set hours",
    time: "~ 3 min",
  },
]

const StatusCard = ({ status }) => {
  const card = statusCards[status]
  if (!card) return null

  return (
    <div className={`${card.bg} border ${card.border} rounded-[18px] p-[23px] flex flex-col gap-4 overflow-hidden h-[239px]`}>
      <div className={`w-11 h-11 rounded-full ${card.iconBg} flex items-center justify-center`}>{card.icon}</div>
      <div className="flex flex-col gap-1 flex-1">
        <h3 className={`text-sm font-semibold leading-6 ${card.titleColor}`}>{card.title}</h3>
        <p className="text-xs text-[#5b616d] leading-[19.2px]">{card.description}</p>
      </div>
      {status === "verified" && (
        <div className="flex items-center gap-1.5 border-t border-white/[0.07] pt-4">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="#22c55e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span className="text-xs font-semibold text-[#22c55e] leading-4">Done</span>
        </div>
      )}
      {status === "review" && (
        <div className="flex items-center gap-1.5 border-t border-white/[0.07] pt-4">
          <WaitingIcon />
          <span className="text-xs font-semibold text-[#e4a000] leading-4">Waiting...</span>
        </div>
      )}
      {status === "rejected" && (
        <div className="border-t border-white/[0.07] pt-4">
          <button className="flex items-center gap-0.5 text-sm font-medium text-[#007aff] leading-5">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Contunie as a student
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </button>
        </div>
      )}
    </div>
  )
}

const SetupCards = ({ profileStatus = "review" }) => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-semibold text-[#0a0c11] leading-6">Complete your setup</h2>
        <p className="text-sm text-[#5b616d] leading-5">Finish these steps to go live and appear in search results</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatusCard status={profileStatus} />
          {setupCards.map((card, i) => {
            const active = profileStatus === "verified"
            return (
            <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] p-[23px] flex flex-col gap-4 overflow-hidden h-[239px]">
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-full ${active && card.activeIconBg ? card.activeIconBg : card.iconBg} flex items-center justify-center`}>{typeof card.icon === "function" ? card.icon(active) : card.icon}</div>
                {card.tag === "required" && <RequiredTag />}
                {card.tag === "optional" && <OptionalTag />}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className={`text-sm font-semibold leading-6 ${active ? "text-[#0a0c11]" : "text-[#8c929c]"}`}>{card.title}</h3>
                  <p className={`text-xs leading-4 ${active ? "text-[#5b616d]" : "text-[#c3c6cc]"}`}>{typeof card.description === "function" ? card.description(active) : card.description}</p>
                </div>
              </div>
              {card.action && (
                <div className="flex items-center justify-between border-t border-black/[0.03] pt-4">
                  <button className={`flex items-center gap-0.5 text-sm font-medium leading-5 ${active ? "text-[#007aff]" : "text-[#c3c6cc]"}`}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke={active ? "#007aff" : "#c3c6cc"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    {card.action}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke={active ? "#007aff" : "#c3c6cc"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </button>
                  <div className="flex items-center gap-1">
                    <ClockIcon />
                    <span className="text-xs text-[#c3c6cc] leading-4">{card.time}</span>
                  </div>
                </div>
              )}
            </div>
            )
          })}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {setupCards.slice(2).map((card, i) => {
            const active = profileStatus === "verified"
            return (
            <div key={i} className="bg-white border border-black/[0.06] rounded-[18px] p-[23px] flex flex-col gap-4 overflow-hidden h-[239px]">
              <div className="flex items-start justify-between">
                <div className={`w-11 h-11 rounded-full ${active && card.activeIconBg ? card.activeIconBg : card.iconBg} flex items-center justify-center`}>{typeof card.icon === "function" ? card.icon(active) : card.icon}</div>
                {card.tag === "required" && <RequiredTag />}
                {card.tag === "optional" && <OptionalTag />}
              </div>
              <div className="flex flex-col gap-1 flex-1">
                <h3 className={`text-sm font-semibold leading-6 ${active ? "text-[#0a0c11]" : "text-[#8c929c]"}`}>{card.title}</h3>
                <p className={`text-xs leading-4 ${active ? "text-[#5b616d]" : "text-[#c3c6cc]"}`}>{card.description}</p>
              </div>
              <div className="flex items-center justify-between border-t border-black/[0.03] pt-4">
                <button className={`flex items-center gap-0.5 text-sm font-medium leading-5 ${active ? "text-[#007aff]" : "text-[#c3c6cc]"}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 12l4-4-4-4" stroke={active ? "#007aff" : "#c3c6cc"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {card.action}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3.333 8h9.334M8 3.333L12.667 8 8 12.667" stroke={active ? "#007aff" : "#c3c6cc"} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </button>
                <div className="flex items-center gap-1">
                  <ClockIcon />
                  <span className="text-xs text-[#c3c6cc] leading-4">{card.time}</span>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SetupCards
