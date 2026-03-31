import { useState, useEffect } from "react"
import { Link } from "react-router"

const GuideHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [menuOpen])

  return (
    <>
      <nav className="w-full max-w-[1440px] mx-auto flex items-center justify-center pt-4 sm:pt-6 md:pt-8 px-4 sm:px-6 md:px-10 lg:px-16 relative z-50">
        <div className="bg-white flex items-center justify-between gap-3 lg:gap-6 w-full px-4 sm:px-6 py-3 rounded-[20px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]">
          <Link to="/" className="flex items-center shrink-0">
            <img src="/img/logo.svg" alt="Unidestin Logo" className="h-[22px] sm:h-[25px]" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            <Link to="/courses" className="flex items-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6 whitespace-nowrap">Explore</span>
            </Link>
            <Link to="/find-a-tutor" className="flex items-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6 whitespace-nowrap">Find a tutor</span>
            </Link>
            <Link to="/study-abroad" className="flex items-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6 whitespace-nowrap">Study abroad</span>
            </Link>
            <a href="#" className="flex items-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6 whitespace-nowrap">Services</span>
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button className="hidden lg:flex h-12 px-3 py-1 bg-[rgba(242,242,244,0.8)] backdrop-blur-md border border-[rgba(0,0,0,0.06)] rounded-xl shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[rgba(242,242,244,1)] transition-colors items-center">
              <span className="text-[#0a0c11] text-base font-medium px-1 leading-6 whitespace-nowrap">Become a tutor</span>
            </button>
            <Link to="/login" className="hidden md:flex h-12 px-3 py-1 bg-[#007aff] backdrop-blur-md border border-[rgba(0,0,0,0.09)] rounded-xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors items-center">
              <span className="text-white text-base font-medium px-1 leading-6">Login</span>
            </Link>
            <button className="hidden sm:flex items-center justify-center size-10 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="8.5" stroke="#5b616d" strokeWidth="1.5"/>
                <path d="M3.5 12H20.5" stroke="#5b616d" strokeWidth="1.5"/>
                <path d="M12 3.5C13.8 5.5 15 8.5 15 12C15 15.5 13.8 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
                <path d="M12 3.5C10.2 5.5 9 8.5 9 12C9 15.5 10.2 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
              </svg>
            </button>
            <button className="hidden sm:flex items-center justify-center size-10 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center justify-center size-10 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors lg:hidden"
            >
              {menuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 12h18M3 6h18M3 18h18" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-16 relative z-40 lg:hidden mt-2">
          <div className="bg-white rounded-2xl shadow-[0px_8px_24px_0px_rgba(0,0,0,0.1)] overflow-y-auto">
          <div className="flex flex-col p-4 sm:p-6 gap-1">
            <Link to="/courses" onClick={() => setMenuOpen(false)} className="flex items-center h-12 px-4 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6">Explore</span>
            </Link>
            <Link to="/find-a-tutor" className="flex items-center h-12 px-4 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6">Find a tutor</span>
            </Link>
            <Link to="/study-abroad" onClick={() => setMenuOpen(false)} className="flex items-center h-12 px-4 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6">Study abroad</span>
            </Link>
            <a href="#" className="flex items-center h-12 px-4 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
              <span className="text-[#5b616d] text-base font-medium leading-6">Services</span>
            </a>
            <div className="border-t border-[#e9eaeb] my-3" />
            <div className="flex flex-col gap-3">
              <button className="h-12 bg-[rgba(242,242,244,0.8)] border border-[rgba(0,0,0,0.06)] rounded-xl">
                <span className="text-[#0a0c11] text-base font-medium leading-6">Become a tutor</span>
              </button>
              <Link to="/login" onClick={() => setMenuOpen(false)} className="h-12 bg-[#007aff] rounded-xl flex items-center justify-center">
                <span className="text-white text-base font-medium leading-6">Login</span>
              </Link>
            </div>
            <div className="flex items-center gap-2 sm:hidden mt-3">
              <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="8.5" stroke="#5b616d" strokeWidth="1.5"/>
                  <path d="M3.5 12H20.5" stroke="#5b616d" strokeWidth="1.5"/>
                  <path d="M12 3.5C13.8 5.5 15 8.5 15 12C15 15.5 13.8 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
                  <path d="M12 3.5C10.2 5.5 9 8.5 9 12C9 15.5 10.2 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
                </svg>
              </button>
              <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        </div>
      )}
    </>
  )
}

export default GuideHeader
