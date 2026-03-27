import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router"

const navItems = [
  { label: "Dashboard", path: "/student/dashboard" },
  { label: "Explore", path: "/student/explore" },
  { label: "My Courses", path: "/student/my-courses" },
  { label: "Homeworks", path: "/student/homeworks" },
  { label: "Scheldue", path: "/student/schedule" },
  { label: "Achivements", path: "/student/achievements" },
  { label: "Tutors", path: "/student/tutors" },
]

const CartIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SettingsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06A1.65 1.65 0 0019.32 9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const StudentHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notifOpen, setNotifOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [cartOpen, setCartOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  return (
    <header className="w-full border-b border-[#e9eaeb] bg-white relative z-50">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-20 h-16 md:h-[72px]">
        <div className="flex items-center gap-6 lg:gap-10">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/img/logo.svg" alt="Unidestin Logo" className="h-[22px] sm:h-[25px]" />
          </Link>

          <nav className="hidden lg:flex items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`px-3 py-2 text-[14px] leading-5 whitespace-nowrap transition-colors ${
                  location.pathname === item.path
                    ? "text-[#181d27] font-semibold"
                    : "text-[#535862] font-medium hover:text-[#181d27]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden sm:block relative"
            onMouseEnter={() => setCartOpen(true)}
            onMouseLeave={() => setCartOpen(false)}
          >
            <button className="flex items-center justify-center size-10 rounded-lg hover:bg-[#f5f5f5] transition-colors">
              <CartIcon />
            </button>
            {cartOpen && (
              <div className="absolute right-0 top-full mt-1 w-[360px] bg-white border border-[#e9eaeb] rounded-2xl shadow-[0px_12px_40px_0px_rgba(0,0,0,0.12)] z-50 p-5 flex flex-col gap-4">
                <h3 className="text-[20px] font-semibold text-[#181d27] leading-7">Cart</h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-3">
                    <div className="size-16 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0">
                      <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=128&h=128&fit=crop" alt="" className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[15px] font-semibold text-[#181d27] leading-5">Figma Master Class</span>
                      <span className="text-[13px] text-[#717680] leading-5">Albert Flores</span>
                      <span className="text-[15px] font-semibold text-[#7f56d9] leading-5">$14.99</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="size-16 rounded-lg overflow-hidden bg-[#f5f5f5] shrink-0">
                      <img src="https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=128&h=128&fit=crop" alt="" className="size-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-0.5 min-w-0">
                      <span className="text-[15px] font-semibold text-[#181d27] leading-5">Creativity in the World of 3D Design</span>
                      <span className="text-[13px] text-[#717680] leading-5">Albert Flores</span>
                      <span className="text-[15px] font-semibold text-[#7f56d9] leading-5">$14.99</span>
                    </div>
                  </div>
                </div>
                <Link to="/student/cart" className="w-full h-11 bg-[#007aff] rounded-full text-white text-[15px] font-medium hover:bg-[#0066d6] transition-colors flex items-center justify-center">
                  Go to cart
                </Link>
              </div>
            )}
          </div>
          <div className="hidden sm:block relative"
            onMouseEnter={() => setNotifOpen(true)}
            onMouseLeave={() => setNotifOpen(false)}
          >
            <button className="flex items-center justify-center size-10 rounded-lg hover:bg-[#f5f5f5] transition-colors">
              <ChatIcon />
            </button>
            {notifOpen && (
              <div className="absolute right-0 top-full mt-1 w-[400px] bg-white border border-[#e9eaeb] rounded-2xl shadow-[0px_12px_40px_0px_rgba(0,0,0,0.12)] z-50 overflow-hidden">
                <div className="flex items-center justify-between px-5 pt-5 pb-3">
                  <h3 className="text-[20px] font-semibold text-[#181d27] leading-7">Notification</h3>
                  <button className="text-[14px] font-medium text-[#007aff] hover:underline">Clear</button>
                </div>
                <div className="flex flex-col">
                  <div className="flex gap-3 px-5 py-3 hover:bg-[#f9f9f9] transition-colors cursor-pointer">
                    <div className="size-10 rounded-full bg-[#e9eaeb] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1 11.41L5.59 10l1.41-1.41L9 10.59l4-4L14.41 8 9 13.41z" fill="#535862"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold text-[#181d27] leading-5">New Deal Assigned</span>
                        <span className="text-[12px] text-[#717680] shrink-0">12:03 PM</span>
                      </div>
                      <p className="text-[13px] text-[#535862] leading-5 mt-0.5">You've been assigned to "Acme Retargeting Plan" — due this Friday.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 px-5 py-3 bg-[#ede9fa] cursor-pointer">
                    <div className="size-10 rounded-full bg-[#7f56d9] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l-1.5 4.5H4l3.75 2.75L6.25 14 10 11.25 13.75 14l-1.5-4.75L16 6.5h-4.5L10 2z" fill="white"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold text-[#181d27] leading-5">System Update</span>
                        <span className="text-[12px] text-[#717680] shrink-0">11:03 AM</span>
                      </div>
                      <p className="text-[13px] text-[#535862] leading-5 mt-0.5">"Mid-Market Expansion" moved to Negotiation Stage.</p>
                    </div>
                  </div>

                  <div className="flex gap-3 px-5 py-3 hover:bg-[#f9f9f9] transition-colors cursor-pointer">
                    <div className="size-10 rounded-full bg-[#e9eaeb] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 6.667a5 5 0 00-10 0c0 5.833-2.5 7.5-2.5 7.5h15S15 12.5 15 6.667zM11.442 17.5a1.667 1.667 0 01-2.884 0" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold text-[#181d27] leading-5">Reminder</span>
                        <span className="text-[12px] text-[#717680] shrink-0">10:21 AM</span>
                      </div>
                      <p className="text-[13px] text-[#535862] leading-5 mt-0.5">Follow up with Rachel (Orbix Group).</p>
                    </div>
                  </div>

                  <div className="flex gap-3 px-5 py-3 hover:bg-[#f9f9f9] transition-colors cursor-pointer">
                    <div className="size-10 rounded-full bg-[#e9eaeb] flex items-center justify-center shrink-0">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="7.5" stroke="#535862" strokeWidth="1.5"/><path d="M10 6.667V10M10 13.333h.008" stroke="#535862" strokeWidth="1.5" strokeLinecap="round"/></svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-[14px] font-semibold text-[#181d27] leading-5">System Alert</span>
                        <span className="text-[12px] text-[#717680] shrink-0">10:18 AM</span>
                      </div>
                      <p className="text-[13px] text-[#535862] leading-5 mt-0.5">3 tasks overdue in Q3 pipeline.</p>
                    </div>
                  </div>
                </div>
                <div className="border-t border-[#e9eaeb] px-5 py-3">
                  <Link to="/student/settings/notifications" className="w-full h-10 border border-[#d5d7da] rounded-lg text-[14px] font-medium text-[#181d27] hover:bg-[#f9f9f9] transition-colors flex items-center justify-center">
                    All notifications
                  </Link>
                </div>
              </div>
            )}
          </div>
          <Link to="/student/settings" className="hidden sm:flex items-center justify-center size-10 rounded-lg hover:bg-[#f5f5f5] transition-colors">
            <SettingsIcon />
          </Link>
          <div
            className="relative ml-1 sm:ml-2"
            onMouseEnter={() => setProfileOpen(true)}
            onMouseLeave={() => setProfileOpen(false)}
          >
            <div className="size-9 sm:size-10 rounded-full overflow-hidden cursor-pointer shrink-0">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face"
                alt="Avatar"
                className="size-full object-cover"
              />
            </div>
            {profileOpen && (
              <div className="absolute right-0 top-full mt-1 w-[220px] bg-white border border-[#e9eaeb] rounded-xl shadow-[0px_12px_40px_0px_rgba(0,0,0,0.12)] z-50 py-2">
                <button className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#181d27] leading-5 hover:bg-[#f9f9f9] transition-colors">
                  Account settings
                </button>
                <button className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#181d27] leading-5 hover:bg-[#f9f9f9] transition-colors">
                  Billing
                </button>
                <button className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#181d27] leading-5 hover:bg-[#f9f9f9] transition-colors">
                  Back to Unidestin
                </button>
                <div className="border-t border-[#e9eaeb] my-1" />
                <Link to="/student/help" className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#181d27] leading-5 hover:bg-[#f9f9f9] transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#535862" strokeWidth="1.2"/><circle cx="8" cy="8" r="1" fill="#535862"/><path d="M8 2v1M8 13v1M2 8h1M13 8h1M3.76 3.76l.7.7M11.54 11.54l.7.7M3.76 12.24l.7-.7M11.54 4.46l.7-.7" stroke="#535862" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  Help
                </Link>
                <button className="w-full text-left px-4 py-2.5 text-[14px] font-medium text-[#181d27] leading-5 hover:bg-[#f9f9f9] transition-colors flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 14H12.667A1.333 1.333 0 0014 12.667V3.333A1.333 1.333 0 0012.667 2H10M6.667 11.333L10 8 6.667 4.667M10 8H2" stroke="#535862" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Log out
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center justify-center size-10 rounded-lg hover:bg-[#f5f5f5] transition-colors lg:hidden ml-1"
          >
            {menuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18M6 6l12 12" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12h18M3 6h18M3 18h18" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 top-16 md:top-[72px] bg-white z-40 lg:hidden overflow-y-auto">
          <div className="flex flex-col p-4 sm:p-6 gap-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center h-12 px-4 rounded-xl transition-colors ${
                  location.pathname === item.path
                    ? "text-[#181d27] font-semibold bg-[#f5f5f5]"
                    : "text-[#535862] font-medium hover:bg-[#f5f5f5]"
                }`}
              >
                <span className="text-base leading-6">{item.label}</span>
              </Link>
            ))}

            <div className="border-t border-[#e9eaeb] my-3" />

            <div className="flex items-center gap-2 sm:hidden">
              <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[#f5f5f5] transition-colors">
                <CartIcon />
              </button>
              <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[#f5f5f5] transition-colors">
                <ChatIcon />
              </button>
              <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[#f5f5f5] transition-colors">
                <SettingsIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default StudentHeader;
