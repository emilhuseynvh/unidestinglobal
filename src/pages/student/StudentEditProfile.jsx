const languages = [
  { name: "Azerbaijani", active: true },
  { name: "English", active: true },
  { name: "Russian", active: true },
  { name: "Turkish", active: false },
  { name: "French", active: false },
  { name: "Spanish", active: false },
  { name: "German", active: false },
  { name: "+ Add", active: false, isAdd: true },
]

const interests = [
  { name: "Biology", active: true },
  { name: "IB Biology HL/SL", active: true },
  { name: "AP Biology", active: true },
  { name: "Chemistry", active: false },
  { name: "Physics", active: false },
  { name: "+ Add", active: false, isAdd: true },
]

const StudentEditProfile = () => {
  return (
    <div className="max-w-[769px] mx-auto w-full">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Edit Profile</h1>
              <p className="text-sm text-[#5b616d] leading-5">Update your personal information and preferences</p>
            </div>
            <button className="h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors">
              Save Changes
            </button>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Personal Details</span>

            <div className="bg-[#f2f2f4] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex flex-col sm:flex-row items-center gap-6">
              <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0">
                <span className="text-lg font-medium text-white">JA</span>
              </div>
              <div className="flex flex-col gap-2 text-center sm:text-left">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-[#0a0c11] leading-6">Profile picture</span>
                  <span className="text-sm text-[#5b616d] leading-6">Upload a clear photo so your tutors can recognize you easily.</span>
                </div>
                <button className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] self-center sm:self-start flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                    <path d="M3.21025 5.41475L6.75 8.95451V0.5625C6.75 0.25184 7.00184 0 7.3125 0C7.62316 0 7.875 0.25184 7.875 0.5625V8.9545L11.4148 5.41475C11.6344 5.19508 11.9906 5.19508 12.2102 5.41475C12.4299 5.63442 12.4299 5.99058 12.2102 6.21025L7.71025 10.7102C7.60476 10.8157 7.46168 10.875 7.3125 10.875C7.16332 10.875 7.02024 10.8157 6.91475 10.7102L2.41475 6.21025C2.19508 5.99058 2.19508 5.63442 2.41475 5.41475C2.63442 5.19508 2.99058 5.19508 3.21025 5.41475Z" fill="#5B616D" />
                    <path d="M14.0625 13.5C14.3732 13.5 14.625 13.7518 14.625 14.0625C14.625 14.3732 14.3732 14.625 14.0625 14.625H0.5625C0.25184 14.625 0 14.3732 0 14.0625C0 13.7518 0.25184 13.5 0.5625 13.5H14.0625Z" fill="#5B616D" />
                  </svg>
                  Upload photo
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Full name</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="Jason Alexander" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Date of birth</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="15-06-2008" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Email address</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="email" defaultValue="jason@email.com" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Mobile number</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-1 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm text-[#5b616d]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                        <mask id="mask0_28022_4975" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="15">
                          <rect width="20" height="15" fill="white" />
                        </mask>
                        <g mask="url(#mask0_28022_4975)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V15H0V0Z" fill="#DF1C41" />
                          <path d="M20 13.75V15H0V13.75H20ZM20 12.5H0V11.25H20V12.5ZM20 10H0V8.75H20V10ZM20 7.5H0V6.25H20V7.5ZM20 5H0V3.75H20V5ZM20 2.5H0V1.25H20V2.5Z" fill="#F7FCFF" />
                          <rect width="11.25" height="8.75" fill="#2E42A5" />
                          <path d="M9.76367 1.375H10.4189L9.9043 1.89551L10.1035 2.7168L9.46289 2.25488L8.93164 2.625H9.16895L8.6543 3.14551L8.83105 3.875H9.2041L9.46191 3.20508L9.76367 3.875H10.4189L9.9043 4.39551L10.1035 5.2168L9.46289 4.75488L8.93164 5.125H9.16895L8.6543 5.64551L8.83105 6.375H9.2041L9.46191 5.70508L9.76367 6.375H10.4189L9.9043 6.89551L10.1035 7.7168L9.46289 7.25488L8.7998 7.7168L9.02344 6.89551L8.43555 6.375H8.72656L8.21289 6.00488L7.68164 6.375H7.91895L7.4043 6.89551L7.60352 7.7168L6.96289 7.25488L6.2998 7.7168L6.52344 6.89551L5.93555 6.375H6.22656L5.71289 6.00488L5.18164 6.375H5.41895L4.9043 6.89551L5.10352 7.7168L4.46289 7.25488L3.7998 7.7168L4.02344 6.89551L3.43555 6.375H3.72656L3.21289 6.00488L2.68164 6.375H2.91895L2.4043 6.89551L2.60352 7.7168L1.96289 7.25488L1.2998 7.7168L1.52344 6.89551L0.935547 6.375H1.7041L1.96191 5.70508L2.26367 6.375H2.5752L2.77344 5.64551L2.18555 5.125H2.47656L1.96289 4.75488L1.2998 5.2168L1.52344 4.39551L0.935547 3.875H1.7041L1.96191 3.20508L2.26367 3.875H2.5752L2.77344 3.14551L2.18555 2.625H2.47656L1.96289 2.25488L1.2998 2.7168L1.52344 1.89551L0.935547 1.375H1.7041L1.96191 0.705078L2.26367 1.375H2.91895L2.4043 1.89551L2.58105 2.625H2.9541L3.21191 1.95508L3.51367 2.625H3.8252L4.02344 1.89551L3.43555 1.375H4.2041L4.46191 0.705078L4.76367 1.375H5.41895L4.9043 1.89551L5.08105 2.625H5.4541L5.71191 1.95508L6.01367 2.625H6.3252L6.52344 1.89551L5.93555 1.375H6.7041L6.96191 0.705078L7.26367 1.375H7.91895L7.4043 1.89551L7.58105 2.625H7.9541L8.21191 1.95508L8.51367 2.625H8.8252L9.02344 1.89551L8.43555 1.375H9.2041L9.46191 0.705078L9.76367 1.375ZM6.43164 5.125H6.66895L6.1543 5.64551L6.33105 6.375H6.7041L6.96191 5.70508L7.26367 6.375H7.5752L7.77344 5.64551L7.18555 5.125H7.47656L6.96289 4.75488L6.43164 5.125ZM3.93164 5.125H4.16895L3.6543 5.64551L3.83105 6.375H4.2041L4.46191 5.70508L4.76367 6.375H5.0752L5.27344 5.64551L4.68555 5.125H4.97656L4.46289 4.75488L3.93164 5.125ZM7.68164 3.875H7.91895L7.4043 4.39551L7.58105 5.125H7.9541L8.21191 4.45508L8.51367 5.125H8.8252L9.02344 4.39551L8.43555 3.875H8.72656L8.21289 3.50488L7.68164 3.875ZM2.68164 3.875H2.91895L2.4043 4.39551L2.58105 5.125H2.9541L3.21191 4.45508L3.51367 5.125H3.8252L4.02344 4.39551L3.43555 3.875H3.72656L3.21289 3.50488L2.68164 3.875ZM5.18164 3.875H5.41895L4.9043 4.39551L5.08105 5.125H5.4541L5.71191 4.45508L6.01367 5.125H6.3252L6.52344 4.39551L5.93555 3.875H6.22656L5.71289 3.50488L5.18164 3.875ZM3.93164 2.625H4.16895L3.6543 3.14551L3.83105 3.875H4.2041L4.46191 3.20508L4.76367 3.875H5.0752L5.27344 3.14551L4.68555 2.625H4.97656L4.46289 2.25488L3.93164 2.625ZM6.43164 2.625H6.66895L6.1543 3.14551L6.33105 3.875H6.7041L6.96191 3.20508L7.26367 3.875H7.5752L7.77344 3.14551L7.18555 2.625H7.47656L6.96289 2.25488L6.43164 2.625Z" fill="#F7FCFF" />
                        </g>
                      </svg>
                    </span>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 8.75L10 11.25 12.5 8.75" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                  <input type="tel" defaultValue="+994 50 555 55 54" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Country</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <span className="text-base text-[#0a0c11] px-1">Azerbaijan</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">City</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="Baku" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Education</span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">School / Institution</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" defaultValue="Baku European Lyceum" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Grade / Year</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <span className="text-base text-[#0a0c11] px-1">Grade 11</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Curriculum</label>
              <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center justify-between focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                <span className="text-base text-[#0a0c11] px-1">IB Diploma Programme</span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Languages</span>
            <div className="flex flex-wrap gap-3">
              {languages.map((lang) => (
                <button
                  key={lang.name}
                  className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${lang.isAdd
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
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Interests & Subjects</span>
            <div className="flex flex-wrap gap-3">
              {interests.map((sub) => (
                <button
                  key={sub.name}
                  className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${sub.isAdd
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

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">About Me</span>
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Bio</label>
              <div className="border border-black/[0.06] rounded-xl p-3 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                <textarea defaultValue="I'm a Grade 11 IB student passionate about biology and environmental science. I enjoy learning through interactive sessions and group discussions." className="w-full min-h-[96px] text-base text-[#0a0c11] leading-6 outline-none px-1 resize-none" />
              </div>
              <span className="text-xs text-[#8c929c] px-0.5">0/500</span>
            </div>
          </div>
        </div>
      </div>
  )
}

export default StudentEditProfile

