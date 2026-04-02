import { Link, useLocation } from "react-router"

const tabs = [
  {
    label: "Basic information",
    path: "/tutor/edit-profile",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M9 6v3M9 12h.008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    tag: null,
  },
  {
    label: "My Bio",
    path: "/tutor/edit-profile/bio",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 2.25a2.122 2.122 0 013 3L5.625 15.375l-4.125 1.125 1.125-4.125L12.75 2.25z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    tag: "required",
  },
  {
    label: "Intro Video",
    path: "/tutor/edit-profile/video",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="1.5" y="3.75" width="11.25" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.5" /><path d="M12.75 7.5l3.75-2.25v7.5l-3.75-2.25V7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>,
    tag: "required",
  },
  {
    label: "Availability",
    path: "/tutor/edit-profile/availability",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" /><path d="M9 4.5V9l3 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>,
    tag: "required",
  },
  {
    label: "Certificates",
    path: "/tutor/edit-profile/certificates",
    icon: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M10.5 1.5H4.5a1.5 1.5 0 00-1.5 1.5v12a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5V6l-4.5-4.5z" stroke="currentColor" strokeWidth="1.5" /><path d="M10.5 1.5V6H15" stroke="currentColor" strokeWidth="1.5" /></svg>,
    tag: "optional",
  },
]

const ProfileTabs = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex items-center gap-1.5 overflow-x-auto">
      {tabs.map((tab) => {
        const isActive = currentPath === tab.path
        return (
          <Link
            key={tab.path}
            to={tab.path}
            className={`flex items-center gap-1.5 h-9 px-2.5 rounded-[10px] text-sm font-medium whitespace-nowrap shrink-0 transition-all ${
              isActive
                ? "bg-white border border-black/[0.06] text-[#0a0c11] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_0px_rgba(0,0,0,0.03)]"
                : "text-[#8c929c]"
            }`}
          >
            <span className={isActive ? "text-[#0a0c11]" : "text-[#8c929c]"}>{tab.icon}</span>
            {tab.label}
            {tab.tag === "required" && (
              <span className="bg-[rgba(6,177,241,0.12)] h-5 px-1 rounded-md flex items-center gap-1">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 6l2 2 4-4 2-2" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-[10px] font-medium text-[#008ece] leading-4">Required</span>
              </span>
            )}
            {tab.tag === "optional" && (
              <span className="bg-[rgba(255,195,10,0.12)] h-5 px-1 rounded-md flex items-center">
                <span className="text-[10px] font-medium text-[#e4a000] leading-4">Optional</span>
              </span>
            )}
          </Link>
        )
      })}
    </div>
  )
}

export default ProfileTabs
