const StudentEditParent = () => {
  return (
    <div className="max-w-[769px] mx-auto w-full">
      <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
            <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 5 — Already complete</span>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Parent information</h1>
              <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Your account was created successfully. Here's what we have on file from your registration.</p>
            </div>
            <button className="h-10 px-4 rounded-[10px] bg-[#007aff] text-sm font-medium text-white shrink-0 hover:bg-[#0066d6] transition-colors">
              Save Changes
            </button>
          </div>
        </div>

        <div className="h-px bg-[#e6e6e6]" />

        <div className="flex flex-col gap-7">
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Full name</label>
            <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
              <input type="text" placeholder="ex. John Doe" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1 placeholder:text-[#8c929c]" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email address</label>
              <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                <input type="email" placeholder="Enter your email" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1 placeholder:text-[#8c929c]" />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Mobile number</label>
              <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-1 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-sm text-[#5b616d]">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                      <mask id="mask0_28022_6833" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="15">
                        <rect width="20" height="15" fill="white" />
                      </mask>
                      <g mask="url(#mask0_28022_6833)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V15H0V0Z" fill="#DF1C41" />
                        <path d="M20 13.75V15H0V13.75H20ZM20 12.5H0V11.25H20V12.5ZM20 10H0V8.75H20V10ZM20 7.5H0V6.25H20V7.5ZM20 5H0V3.75H20V5ZM20 2.5H0V1.25H20V2.5Z" fill="#F7FCFF" />
                        <rect width="11.25" height="8.75" fill="#2E42A5" />
                        <path d="M9.76367 1.375H10.4189L9.9043 1.89551L10.1035 2.7168L9.46289 2.25488L8.93164 2.625H9.16895L8.6543 3.14551L8.83105 3.875H9.2041L9.46191 3.20508L9.76367 3.875H10.4189L9.9043 4.39551L10.1035 5.2168L9.46289 4.75488L8.93164 5.125H9.16895L8.6543 5.64551L8.83105 6.375H9.2041L9.46191 5.70508L9.76367 6.375H10.4189L9.9043 6.89551L10.1035 7.7168L9.46289 7.25488L8.7998 7.7168L9.02344 6.89551L8.43555 6.375H8.72656L8.21289 6.00488L7.68164 6.375H7.91895L7.4043 6.89551L7.60352 7.7168L6.96289 7.25488L6.2998 7.7168L6.52344 6.89551L5.93555 6.375H6.22656L5.71289 6.00488L5.18164 6.375H5.41895L4.9043 6.89551L5.10352 7.7168L4.46289 7.25488L3.7998 7.7168L4.02344 6.89551L3.43555 6.375H3.72656L3.21289 6.00488L2.68164 6.375H2.91895L2.4043 6.89551L2.60352 7.7168L1.96289 7.25488L1.2998 7.7168L1.52344 6.89551L0.935547 6.375H1.7041L1.96191 5.70508L2.26367 6.375H2.5752L2.77344 5.64551L2.18555 5.125H2.47656L1.96289 4.75488L1.2998 5.2168L1.52344 4.39551L0.935547 3.875H1.7041L1.96191 3.20508L2.26367 3.875H2.5752L2.77344 3.14551L2.18555 2.625H2.47656L1.96289 2.25488L1.2998 2.7168L1.52344 1.89551L0.935547 1.375H1.7041L1.96191 0.705078L2.26367 1.375H2.91895L2.4043 1.89551L2.58105 2.625H2.9541L3.21191 1.95508L3.51367 2.625H3.8252L4.02344 1.89551L3.43555 1.375H4.2041L4.46191 0.705078L4.76367 1.375H5.41895L4.9043 1.89551L5.08105 2.625H5.4541L5.71191 1.95508L6.01367 2.625H6.3252L6.52344 1.89551L5.93555 1.375H6.7041L6.96191 0.705078L7.26367 1.375H7.91895L7.4043 1.89551L7.58105 2.625H7.9541L8.21191 1.95508L8.51367 2.625H8.8252L9.02344 1.89551L8.43555 1.375H9.2041L9.46191 0.705078L9.76367 1.375ZM6.43164 5.125H6.66895L6.1543 5.64551L6.33105 6.375H6.7041L6.96191 5.70508L7.26367 6.375H7.5752L7.77344 5.64551L7.18555 5.125H7.47656L6.96289 4.75488L6.43164 5.125ZM3.93164 5.125H4.16895L3.6543 5.64551L3.83105 6.375H4.2041L4.46191 5.70508L4.76367 6.375H5.0752L5.27344 5.64551L4.68555 5.125H4.97656L4.46289 4.75488L3.93164 5.125ZM7.68164 3.875H7.91895L7.4043 4.39551L7.58105 5.125H7.9541L8.21191 4.45508L8.51367 5.125H8.8252L9.02344 4.39551L8.43555 3.875H8.72656L8.21289 3.50488L7.68164 3.875ZM2.68164 3.875H2.91895L2.4043 4.39551L2.58105 5.125H2.9541L3.21191 4.45508L3.51367 5.125H3.8252L4.02344 4.39551L3.43555 3.875H3.72656L3.21289 3.50488L2.68164 3.875ZM5.18164 3.875H5.41895L4.9043 4.39551L5.08105 5.125H5.4541L5.71191 4.45508L6.01367 5.125H6.3252L6.52344 4.39551L5.93555 3.875H6.22656L5.71289 3.50488L5.18164 3.875ZM3.93164 2.625H4.16895L3.6543 3.14551L3.83105 3.875H4.2041L4.46191 3.20508L4.76367 3.875H5.0752L5.27344 3.14551L4.68555 2.625H4.97656L4.46289 2.25488L3.93164 2.625ZM6.43164 2.625H6.66895L6.1543 3.14551L6.33105 3.875H6.7041L6.96191 3.20508L7.26367 3.875H7.5752L7.77344 3.14551L7.18555 2.625H7.47656L6.96289 2.25488L6.43164 2.625Z" fill="#F7FCFF" />
                      </g>
                    </svg>
                  </span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M7.5 8.75L10 11.25 12.5 8.75" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </div>
                <input type="tel" placeholder="+1 (XXX) YYY-ZZZZ" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1 placeholder:text-[#8c929c]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentEditParent
