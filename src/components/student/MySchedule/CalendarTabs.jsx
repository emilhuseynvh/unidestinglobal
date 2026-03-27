const tabs = ["All events", "Shared", "Public", "Archived"]

const CalendarTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex items-center gap-1 border-b border-[#e9eaeb] overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-3 py-2.5 text-[14px] font-medium leading-5 whitespace-nowrap transition-colors relative shrink-0 ${
            activeTab === tab
              ? "text-[#007aff]"
              : "text-[#717680] hover:text-[#414651]"
          }`}
        >
          {tab}
          {activeTab === tab && (
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#007aff] rounded-t-full" />
          )}
        </button>
      ))}
    </div>
  )
}

export default CalendarTabs
