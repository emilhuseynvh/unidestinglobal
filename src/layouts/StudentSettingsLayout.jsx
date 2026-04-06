import { Link, Outlet, useLocation } from "react-router"

const settingsTabs = [
  { label: "Basic information", path: "/student/panel/settings" },
  { label: "Password", path: "/student/panel/settings/password", badge: "Required" },
  { label: "Billing & Earnings", path: "/student/panel/settings/billing", badge: "Required" },
  { label: "Notifications", path: "/student/panel/settings/notifications", badge: "Required" },
]

const StudentSettingsLayout = () => {
  const location = useLocation()

  return (
    <div className="px-6 sm:px-10 lg:px-16 xl:px-24 py-6 sm:py-8 flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
        <div className="flex flex-col gap-0.5">
          <h1 className="text-lg font-semibold text-[#0a0c11] leading-6">Settings</h1>
          <p className="text-sm text-[#5b616d] leading-5">Manage sessions, availability and bookings</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            Cancel
          </button>
          <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 5.25L6.75 13.5 3 9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            Save Changes
          </button>
        </div>
      </div>

      <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex flex-wrap items-center gap-1.5 overflow-x-auto">
        {settingsTabs.map((tab) => {
          const isActive = location.pathname === tab.path
          return (
            <Link
              key={tab.label}
              to={tab.path}
              className={`h-9 px-[10px] rounded-[10px] text-sm font-medium flex items-center gap-1.5 whitespace-nowrap shrink-0 no-underline ${
                isActive
                  ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03)]"
                  : "text-[#8c929c]"
              }`}
            >
              {tab.label}
              {tab.badge && (
                <span className="bg-[rgba(6,177,241,0.12)] text-[#008ece] h-5 px-1 rounded-[6px] text-[10px] font-medium flex items-center">{tab.badge}</span>
              )}
            </Link>
          )
        })}
      </div>

      <Outlet />
    </div>
  )
}

export default StudentSettingsLayout
