import { Link, useLocation } from "react-router"

const icons = {
  dashboard: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2.25 9.75l4.5-6 4.5 6 4.5-4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /><path d="M2.25 2.25v12.375c0 .621.504 1.125 1.125 1.125H15.75" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  courses: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M1.5 13.5V4.5a1.5 1.5 0 011.5-1.5h3.75a3 3 0 013 3v9M16.5 13.5V4.5a1.5 1.5 0 00-1.5-1.5h-3.75a3 3 0 00-3 3v9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  exams: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M5.25 2.25h-1.5A1.5 1.5 0 002.25 3.75v11.5a1.5 1.5 0 001.5 1.5h9a1.5 1.5 0 001.5-1.5v-11.5a1.5 1.5 0 00-1.5-1.5h-1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><rect x="5.25" y="1.5" width="5.5" height="2.25" rx="1" stroke="currentColor" strokeWidth="1.3" /><path d="M5.25 8.25h5.5M5.25 11.25h3.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  schedule: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><rect x="2.25" y="3" width="13.5" height="12.75" rx="2" stroke="currentColor" strokeWidth="1.3" /><path d="M2.25 7.5h13.5M6 1.5v3M12 1.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  transactions: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5v15M13.5 4.5H7.5a2.25 2.25 0 000 4.5h3a2.25 2.25 0 010 4.5H4.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  performance: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M3.75 15V9M7.5 15V3M11.25 15V7.5M15 15V10.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /></svg>,
  achievements: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="7.5" r="4.5" stroke="currentColor" strokeWidth="1.3" /><path d="M5.25 11.25L4.5 16.5l4.5-2.25 4.5 2.25-.75-5.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  edit: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="7.5" cy="5.25" r="3" stroke="currentColor" strokeWidth="1.3" /><path d="M2.25 15.75c0-2.9 2.35-5.25 5.25-5.25" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" /><path d="M12.75 9.75l-3.75 3.75-.75 2.25 2.25-.75 3.75-3.75a1.06 1.06 0 00-1.5-1.5z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><circle cx="9" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.3" /><path d="M14.55 11.25a1.24 1.24 0 00.25 1.37l.04.04a1.5 1.5 0 11-2.12 2.12l-.05-.04a1.24 1.24 0 00-1.36-.25 1.24 1.24 0 00-.75 1.13v.13a1.5 1.5 0 01-3 0v-.07a1.24 1.24 0 00-.81-1.13 1.24 1.24 0 00-1.37.25l-.04.04a1.5 1.5 0 11-2.12-2.12l.04-.05a1.24 1.24 0 00.25-1.36 1.24 1.24 0 00-1.13-.75H2.25a1.5 1.5 0 010-3h.07a1.24 1.24 0 001.13-.81 1.24 1.24 0 00-.25-1.37l-.04-.04a1.5 1.5 0 112.12-2.12l.05.04a1.24 1.24 0 001.36.25h.06a1.24 1.24 0 00.75-1.13V2.25a1.5 1.5 0 013 0v.07a1.24 1.24 0 00.75 1.13 1.24 1.24 0 001.37-.25l.04-.04a1.5 1.5 0 112.12 2.12l-.04.05a1.24 1.24 0 00-.25 1.36v.06a1.24 1.24 0 001.13.75h.13a1.5 1.5 0 010 3h-.07a1.24 1.24 0 00-1.13.75z" stroke="currentColor" strokeWidth="1.3" /></svg>,
}

const sections = [
  {
    title: "MAIN",
    items: [
      { icon: "dashboard", label: "Dashboard", path: "/student" },
      { icon: "courses", label: "My Courses", path: "/student/panel/courses" },
      { icon: "exams", label: "Exams", path: "/student/panel/exams" },
      { icon: "schedule", label: "Schedule", path: "/student/panel/schedule" },
    ],
  },
  {
    title: "ANALYTICS",
    items: [
      { icon: "transactions", label: "Transactions", path: "/student/panel/transactions" },
      { icon: "performance", label: "Performance", path: "/student/panel/performance" },
      { icon: "achievements", label: "Achievements", path: "/student/panel/achievements" },
    ],
  },
  {
    title: "SETTINGS",
    items: [
      { icon: "edit", label: "Edit profile", path: "/student/panel/edit-profile" },
      { icon: "settings", label: "Settings", path: "/student/panel/settings" },
    ],
  },
]

const StudentPanelSidebar = () => {
  const location = useLocation()
  const currentPath = location.pathname

  return (
    <nav className="hidden lg:flex flex-col w-[211px] shrink-0 backdrop-blur-[48px] bg-white border border-black/[0.03] rounded-3xl">
      <div className="p-3">
        <div className="bg-[#0267d0] border border-[rgba(0,122,255,0.12)] rounded-[20px] px-4 py-2.5 flex items-center">
          <span className="text-sm font-extrabold text-white leading-6">My Learning</span>
        </div>
      </div>

      <div className="px-3 flex flex-col gap-2">
        {sections.map((section) => (
          <div key={section.title}>
            <div className="pt-6 pb-2 px-2">
              <span className="text-[11px] font-medium text-[#8c929c] leading-3 tracking-[2px] uppercase">{section.title}</span>
            </div>
            <div className="flex flex-col">
              {section.items.map((item) => {
                const isActive = currentPath === item.path || (item.path === "/student" && currentPath === "/student")
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-0.5 h-10 px-2 rounded-[10px] transition-colors ${
                      isActive ? "bg-[rgba(242,242,244,0.8)]" : "hover:bg-[rgba(242,242,244,0.4)]"
                    }`}
                  >
                    <div className="pl-0.5 flex items-center justify-center">
                      <span className={isActive ? "text-[#0a0c11]" : "text-[#5b616d]"}>
                        {icons[item.icon]}
                      </span>
                    </div>
                    <span className={`flex-1 text-sm font-medium leading-6 px-1.5 ${
                      isActive ? "text-[#0a0c11]" : "text-[#5b616d]"
                    }`}>
                      {item.label}
                    </span>
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </nav>
  )
}

export default StudentPanelSidebar
