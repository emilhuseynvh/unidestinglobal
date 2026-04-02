const tabs = [
  { label: "Overview", count: null },
  { label: "Sessions", count: 12 },
  { label: "Attendees", count: 12 },
  { label: "Documents", count: null },
  { label: "Reviews", count: 38 },
  { label: "Settings", count: null },
]

const LiveCourseTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-[18px] p-1.5 flex flex-wrap items-center gap-1.5">
      {tabs.map((tab) => (
        <button
          key={tab.label}
          onClick={() => setActiveTab(tab.label)}
          className={`h-11 px-3 rounded-xl text-base font-medium flex items-center gap-1 transition-colors ${
            activeTab === tab.label
              ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
              : "text-[#8c929c]"
          }`}
        >
          {tab.label}
          {tab.count !== null && (
            <span className="bg-[rgba(0,122,255,0.12)] h-5 px-[6px] rounded-[6px] text-[10px] font-medium text-[#0267d0] flex items-center justify-center">{tab.count}</span>
          )}
        </button>
      ))}
    </div>
  )
}

export default LiveCourseTabs
