import { Link, Outlet, useLocation } from "react-router"

const profileTabs = [
  { label: "Basic information", path: "/student/panel/edit-profile" },
  { label: "My Bio", path: "/student/panel/edit-profile/bio" },
  { label: "Personalization", path: "/student/panel/edit-profile/personalization" },
  { label: "Parent Information", path: "/student/panel/edit-profile/parent" },
  { label: "Certificates", path: "/student/panel/edit-profile/certificates" },
]

const tabBadges = {
  "Basic information": { badge: "Required", bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  "My Bio": { badge: "Required", bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  "Personalization": { badge: "Required", bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  "Parent Information": { badge: "Required", bg: "bg-[rgba(6,177,241,0.12)]", text: "text-[#008ece]" },
  "Certificates": { badge: "Optional", bg: "bg-[rgba(255,195,10,0.12)]", text: "text-[#e4a000]" },
}

const EditProfileLayout = () => {
  const location = useLocation()

  return (
    <div className="px-6 lg:px-10 py-6 sm:py-8 flex flex-col gap-6">
      <div className="bg-[#f2f2f4] border border-white/[0.07] rounded-[18px] p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7">
        <span className="text-[12.5px] font-medium text-[#9297ad] shrink-0">Profile setup</span>
        <div className="flex-1 h-1.5 bg-[#dddfe4] rounded w-full">
          <div className="h-full bg-[#007aff] rounded" style={{ width: "26%" }} />
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <div className="w-2 h-2 rounded bg-[#34d9a0]" />
          <span className="text-[11px] text-[#9297ad]">26 %</span>
        </div>
      </div>

      <div className="bg-[rgba(242,242,244,0.8)] border border-black/[0.03] rounded-2xl p-1.5 flex flex-wrap items-center gap-1.5 overflow-x-auto">
        {profileTabs.map((tab) => {
          const isActive = location.pathname === tab.path
          const b = tabBadges[tab.label]
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
              <span className={`${b.bg} ${b.text} h-5 px-1 rounded-[6px] text-[10px] font-medium flex items-center`}>{b.badge}</span>
            </Link>
          )
        })}
      </div>

      <Outlet />
    </div>
  )
}

export default EditProfileLayout
