import { Link } from "react-router"

const Header = () => {
  return (
    <nav className="w-[1440px] mx-auto flex items-center justify-center pt-8 px-[176px]">
      <div className="bg-white flex items-center gap-8 px-6 py-3 rounded-[20px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03)]">
        <a href="/" className="flex items-center w-[146px] h-[25px]">
          <img src="img/logo.svg" alt="Unidestin Logo" />
        </a>

        <div className="flex items-center gap-[6px]">
          <a href="#" className="flex items-center justify-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <span className="text-[#5b616d] text-base font-medium px-1 leading-6">Explore</span>
          </a>
          <a href="#" className="flex items-center justify-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <span className="text-[#5b616d] text-base font-medium px-1 leading-6">Find a tutor</span>
          </a>
          <Link to="/study-abroad" className="flex items-center justify-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <span className="text-[#5b616d] text-base font-medium px-1 leading-6">Study abroad</span>
          </Link>
          <a href="#" className="flex items-center justify-center h-12 px-3 py-1 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <span className="text-[#5b616d] text-base font-medium px-1 leading-6">Services</span>
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="h-12 px-3 py-1 bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] border border-[rgba(0,0,0,0.06)] rounded-xl shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[rgba(242,242,244,1)] transition-colors">
            <span className="text-[#0a0c11] text-base font-medium px-1 leading-6">Become a tutor</span>
          </button>
          <button className="h-12 px-3 py-1 bg-[#007aff] backdrop-blur-[12px] border border-[rgba(0,0,0,0.09)] rounded-xl shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
            <span className="text-white text-base font-medium px-1 leading-6">Login</span>
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="8.5" stroke="#5b616d" strokeWidth="1.5"/>
              <path d="M3.5 12H20.5" stroke="#5b616d" strokeWidth="1.5"/>
              <path d="M12 3.5C13.8 5.5 15 8.5 15 12C15 15.5 13.8 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
              <path d="M12 3.5C10.2 5.5 9 8.5 9 12C9 15.5 10.2 18.5 12 20.5" stroke="#5b616d" strokeWidth="1.5"/>
            </svg>
          </button>
          <button className="flex items-center justify-center size-12 rounded-xl hover:bg-[rgba(0,0,0,0.03)] transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="3" y="4" width="18" height="16" rx="2" stroke="#5b616d" strokeWidth="1.5"/>
              <path d="M3 8H21" stroke="#5b616d" strokeWidth="1.5"/>
              <path d="M8 2V5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M16 2V5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header
