const sessions = [
  { id: 1, title: "Session 1: Cell Biology Foundations & Cell Theory", date: "Thu, Feb 6 · 4:00 PM", attendance: "12/12", status: "completed" },
  { id: 2, title: "Session 2: Molecular Biology", date: "Thu, Feb 13 · 4:00 PM", attendance: "12/12", status: "completed" },
  { id: 3, title: "Session 3: Genetics and Inheritance", date: "Thu, Feb 20 · 4:00 PM", attendance: "12/12", status: "completed" },
  { id: 4, title: "Session 4: Ecology — Energy Flow & Nutrient Cycles", date: "Thu, Feb 27 · 4:00 PM", attendance: "12/12", status: "completed" },
  { id: 5, title: "Session 5: Genetics & Inheritance — Advanced Patterns", date: "Fri, Feb 28 · 10:00 AM", attendance: "12/12", status: "live" },
  { id: 6, title: "Session 6: DNA Replication", date: "Mon, Mar 2 · 2:00 PM", status: "scheduled" },
  { id: 7, title: "Session 7: Evolution — Natural Selection & Speciation", date: "Mon, Mar 10 · 2:00 PM", status: "scheduled" },
]

const PlayIcon = () => (
  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M4.5 3l10.5 6-10.5 6V3z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </button>
)

const EditIcon = () => (
  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.121 2.121 0 013 3L6 15l-4 1 1-4 9.75-9.75z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </button>
)

const DeleteIcon = () => (
  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5z" stroke="#ed4030" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </button>
)

const VideoIcon = () => (
  <button className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0">
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="3" width="11.25" height="12" rx="1.5" stroke="#5b616d" strokeWidth="1.2" /><path d="M12.75 7.5l3.75-2.25v7.5l-3.75-2.25V7.5z" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </button>
)

const SessionsTab = () => {
  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden">
      <div className="p-5 flex flex-col gap-5">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div className="flex flex-col gap-2">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Sessions</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">12 sessions total · 6 completed · 1 live now · 5 upcoming</p>
          </div>
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] shrink-0 self-start sm:self-auto">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 3v12M3 9h12" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Add extra Session
          </button>
        </div>

        {/* Session List */}
        <div className="flex flex-col gap-5">
          {sessions.map((session) => (
            <div
              key={session.id}
              className={`bg-white border rounded-[18px] overflow-hidden px-5 py-4 ${
                session.status === "live" ? "border-[#ed4030]" : "border-black/[0.06]"
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <h3 className="text-base font-semibold text-[#0a0c11] leading-6">{session.title}</h3>
                  <p className="text-sm text-[#5b616d] leading-5">{session.date}</p>
                </div>
                <div className="flex items-center gap-3 sm:gap-4 flex-wrap shrink-0">
                  {/* Attendance */}
                  {session.attendance && (
                    <div className="flex items-center gap-2 opacity-80">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 15.75v-1.5a3 3 0 00-3-3h-4.5a3 3 0 00-3 3v1.5M8 8.25a3 3 0 100-6 3 3 0 000 6zM15.75 15.75v-1.5a3 3 0 00-2.25-2.902M12 2.348a3 3 0 010 5.805" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      <span className="text-xs text-[#5b616d] leading-4">{session.attendance}</span>
                    </div>
                  )}

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

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2">
                    {session.status === "completed" && (
                      <>
                        <PlayIcon />
                        <EditIcon />
                        <DeleteIcon />
                      </>
                    )}
                    {session.status === "live" && (
                      <>
                        <VideoIcon />
                        <EditIcon />
                        <DeleteIcon />
                      </>
                    )}
                    {session.status === "scheduled" && (
                      <>
                        <EditIcon />
                        <DeleteIcon />
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SessionsTab
