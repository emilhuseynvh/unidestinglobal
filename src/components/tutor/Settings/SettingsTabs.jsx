const tabs = [
  {
    key: "basic",
    label: "Basic information",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.3" /><path d="M9 8v4M9 6h.007" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
  {
    key: "password",
    label: "Password",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="3.75" y="8.25" width="10.5" height="7.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M6 8.25V5.25a3 3 0 016 0v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  },
  {
    key: "billing",
    label: "Billing & Earnings",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3.75" width="13.5" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.3" /><path d="M2.25 7.5h13.5" stroke="currentColor" strokeWidth="1.3" /></svg>,
  },
  {
    key: "notifications",
    label: "Notifications",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M13.5 6.75a4.5 4.5 0 10-9 0c0 5.25-2.25 6.75-2.25 6.75h13.5s-2.25-1.5-2.25-6.75zM10.3 15.75a1.5 1.5 0 01-2.6 0" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  },
]

const SettingsTabs = ({ activeTab, onTabChange }) => {
  return (
    <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex items-center gap-1.5 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          onClick={() => onTabChange(tab.key)}
          className={`h-9 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1.5 whitespace-nowrap transition-all shrink-0 ${
            activeTab === tab.key
              ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
              : "text-[#8c929c]"
          }`}
        >
          <span className={activeTab === tab.key ? "text-[#0a0c11]" : "text-[#8c929c]"}>{tab.icon}</span>
          {tab.label}
          {tab.badge && activeTab !== tab.key && (
            <span className="bg-[rgba(6,177,241,0.12)] h-5 px-1.5 rounded-[6px] text-[10px] font-medium text-[#008ece] flex items-center gap-1 leading-4">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M6 1v10M1 6h10" stroke="#008ece" strokeWidth="1.2" strokeLinecap="round" /></svg>
              {tab.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  )
}

export default SettingsTabs
