const sessions = [
  { id: 1, title: "Session 1: Cell Biology Foundations & Cell Theory", date: "Thu, Feb 6 · 4:00 PM", status: "completed" },
  { id: 2, title: "Session 2: Molecular Biology", date: "Thu, Feb 13 · 4:00 PM", status: "completed" },
  { id: 3, title: "Session 3: Genetics and Inheritance", date: "Thu, Feb 20 · 4:00 PM", status: "completed" },
  { id: 4, title: "Session 4: Ecology — Energy Flow & Nutrient Cycles", date: "Thu, Feb 27 · 4:00 PM", status: "completed" },
  { id: 5, title: "Session 5: Genetics & Inheritance — Advanced Patterns", date: "Fri, Feb 28 · 10:00 AM", status: "live" },
  { id: 6, title: "Session 6: DNA Replication", date: "Mon, Mar 2 · 2:00 PM", status: "scheduled" },
  { id: 7, title: "Session 7: Evolution — Natural Selection & Speciation", date: "Mon, Mar 10 · 2:00 PM", status: "scheduled" },
]

const StudentLiveSessionsTab = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
        <div className="flex flex-col gap-2">
          <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Sessions</h2>
          <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">12 sessions total · 6 completed · 1 live now · 5 upcoming</p>
        </div>
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] shrink-0 self-start sm:self-auto">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 12.75v2.25a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5v-2.25M5.25 8.25L9 12l3.75-3.75M9 12V2.25" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Download all recordings
        </button>
      </div>

      {/* Session List */}
      <div className="flex flex-col gap-5">
        {sessions.map((session) => (
          <div
            key={session.id}
            className={`bg-white border rounded-[18px] overflow-hidden ${
              session.status === "live" ? "border-[#ed4030]" : "border-black/[0.06]"
            }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-4">
              <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                <h3 className="text-base font-semibold text-[#0a0c11] leading-6">{session.title}</h3>
                <p className="text-sm text-[#5b616d] leading-5">{session.date}</p>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                {/* Status Badge */}
                {session.status === "completed" && (
                  <span className="bg-[rgba(64,155,63,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#338732] flex items-center gap-1">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Completed
                  </span>
                )}
                {session.status === "live" && (
                  <span className="bg-[rgba(237,64,48,0.12)] h-6 px-1.5 rounded-lg text-xs font-medium text-[#df2917] flex items-center">
                    <span className="font-semibold">● </span>LIVE NOW
                  </span>
                )}
                {session.status === "scheduled" && (
                  <span className="h-6 px-1.5 rounded-lg border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-xs font-medium text-[#0a0c11] flex items-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                    Scheduled
                  </span>
                )}

                {/* Recording link for completed */}
                {session.status === "completed" && (
                  <button className="flex items-center gap-1.5 text-xs font-medium text-[#5caaff]">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><rect x="1.333" y="2.667" width="10" height="10.667" rx="1.5" stroke="#5caaff" strokeWidth="1.2" /><path d="M11.333 6.667l3.334-2v6.666l-3.334-2V6.667z" stroke="#5caaff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    Recording
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentLiveSessionsTab
