import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"

const languages = [
  { name: "Azerbaijani", active: true },
  { name: "English", active: true },
  { name: "Russian", active: true },
  { name: "Turkish", active: false },
  { name: "French", active: false },
  { name: "Spanish", active: false },
  { name: "Japanese", active: false },
  { name: "Chinese", active: false },
  { name: "German", active: false },
  { name: "+ Add", active: false, isAdd: true },
]

const subjects = [
  { name: "Biology", active: true },
  { name: "IB Biology HL/SL", active: true },
  { name: "AP Biology", active: true },
  { name: "+ Add", active: false, isAdd: true },
]

const EditProfileBasic = () => {
  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={26} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 1 of 5 — Already complete</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7">Basic information</h1>
                <p className="text-sm text-[#5b616d] leading-5">Your account was created successfully. Here's what we have on file from your registration.</p>
              </div>
              <button className="h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors">
                Save Changes
              </button>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Personal Details</span>

            <div className="bg-[#f2f2f4] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex items-center gap-6">
              <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0 backdrop-blur-[12px]">
                <span className="text-lg font-medium text-white">CH</span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-[#0a0c11] leading-6">Profile picture</span>
                  <span className="text-sm text-[#5b616d] leading-6">A clear, friendly headshot increases bookings by 70%. Use natural lighting and smile.</span>
                </div>
                <button className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] self-start flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Upload photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Full name</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="Chinara" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Date of birth</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="19-04-1985" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Email adress</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="email" defaultValue="chinara@example.com" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Mobile number</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-1 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <div className="flex items-center gap-2 shrink-0">
                    <img src="/img/guest/flag-us.svg" alt="US" className="w-5 h-[15px]" />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 8.75L10 11.25L12.5 8.75" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <input type="tel" defaultValue="+1 55 555 55 54" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Education Details</span>

            <div className="bg-[#f9f9fa] border border-black/[0.06] rounded-[18px] p-[17px] flex items-center gap-4">
              <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 12.5L2.5 8.333 10 4.167l7.5 4.166L10 12.5z" stroke="#3b82f6" strokeWidth="1.5" /><path d="M5 9.583v4.167c0 1.38 2.239 2.5 5 2.5s5-1.12 5-2.5V9.583" stroke="#3b82f6" strokeWidth="1.5" /></svg>
              </div>
              <div className="flex flex-col flex-1 min-w-0">
                <span className="text-base font-semibold text-[#0a0c11] leading-6 truncate">BSc Molecular Biology — Baku State University</span>
                <span className="text-xs text-[#8c929c] leading-4">Uploaded · PDF, 1.2 MB</span>
              </div>
              <span className="bg-[rgba(34,197,94,0.12)] text-[10px] font-medium text-[#22c55e] px-2 py-1 rounded-md shrink-0">✓ Verified</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Degree</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <span className="text-base text-[#0a0c11] px-1">Bachelor's</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Field of Study</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="Biology" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Institution Name</label>
              <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                <span className="text-base text-[#0a0c11] px-1">Baku State University</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Start date</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-2 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke="#8c929c" strokeWidth="1.5" /><path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <input type="text" defaultValue="12-09-2012" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">End date</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-2 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke="#8c929c" strokeWidth="1.5" /><path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <input type="text" defaultValue="24-06-2016" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <button className="h-12 px-4 rounded-xl border border-black/[0.06] bg-white text-base font-medium text-[#5b616d] self-start flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4.167v11.666M4.167 10h11.666" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Add another education
            </button>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Language of Instruction</span>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${
                    lang.isAdd
                      ? "border border-black/[0.06] bg-white text-[#5b616d]"
                      : lang.active
                      ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]"
                      : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"
                  }`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Subjects & Courses</span>
            <div className="flex flex-wrap gap-3">
              {subjects.map((sub) => (
                <button
                  key={sub.name}
                  className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${
                    sub.isAdd
                      ? "border border-black/[0.06] bg-white text-[#5b616d]"
                      : sub.active
                      ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]"
                      : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"
                  }`}
                >
                  {sub.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileBasic
