import { Link, useLocation } from "react-router"

const menuItems = [
  { label: "Profile", path: "/student/settings/profile" },
  { label: "Password", path: "/student/settings/password" },
  { label: "Billing", path: "/student/settings/billing" },
  { label: "Parents details", path: "/student/settings/parents" },
  { label: "Notifications", path: "/student/settings/notifications", badge: "2" },
]

const SettingsSidebar = () => {
  const location = useLocation()

  return (
    <nav className="flex flex-col gap-1 lg:w-[160px] lg:shrink-0">
      <p className="text-[14px] font-semibold text-[#717680] leading-5 px-3 py-2">My details</p>
      <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-10 md:px-10 lg:mx-0 lg:px-0">
      {menuItems.map((item) => {
        const isActive = location.pathname === item.path || (item.path === "/student/settings/profile" && location.pathname === "/student/settings")
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 h-9 px-3 py-2 text-[14px] font-semibold leading-5 whitespace-nowrap transition-colors rounded-lg lg:rounded-none shrink-0 ${
              isActive
                ? "text-[#6941c6] lg:border-l-2 lg:border-[#7f56d9]"
                : "text-[#717680] hover:text-[#414651]"
            }`}
          >
            {item.label}
            {item.badge && (
              <span className="bg-[#fafafa] border border-[#e9eaeb] text-[#414651] text-[12px] font-medium leading-[18px] px-2 py-0.5 rounded-full">
                {item.badge}
              </span>
            )}
          </Link>
        )
      })}
      </div>
    </nav>
  )
}

export default SettingsSidebar
