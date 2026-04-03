const BasicInfoTab = () => {
  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Personal Details</p>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">Basic Information</h2>
          <p className="text-sm text-[#5b616d] leading-5">Update your photo and details here.</p>
        </div>
        <div className="h-px bg-[#e9eaeb] mt-3" />
      </div>

      <div className="bg-[#f9f9fa] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex items-center gap-2.5">
        <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0 backdrop-blur-[12px]">
          <span className="text-lg font-medium text-white">CH</span>
        </div>
        <div className="flex flex-col gap-2.5 flex-1">
          <div className="flex flex-col gap-1">
            <span className="text-base font-semibold text-[#0a0c11] leading-6">Profile picture</span>
            <p className="text-sm text-[#5b616d] leading-6">A clear, friendly headshot increases bookings by 70%. Use natural lighting and smile.</p>
          </div>
          <button className="self-start h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M15.75 11.25v3a1.5 1.5 0 01-1.5 1.5h-10.5a1.5 1.5 0 01-1.5-1.5v-3M5.25 7.5L9 3.75l3.75 3.75M9 3.75v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Upload photo
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-7">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Full name</label>
            <input
              type="text"
              defaultValue="Chinara"
              className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Date of birth</label>
            <input
              type="text"
              defaultValue="19-04-1995"
              className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email adress</label>
            <input
              type="email"
              defaultValue="chinara@example.com"
              className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-4 text-sm font-medium text-[#5b616d] leading-6 outline-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Mobile number</label>
            <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2">
              <div className="flex items-center gap-2 shrink-0">
                <span className="text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="15" viewBox="0 0 20 15" fill="none">
                    <mask id="mask0_28010_32247" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="15">
                      <rect width="20" height="15" fill="white" />
                    </mask>
                    <g mask="url(#mask0_28010_32247)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H20V15H0V0Z" fill="#DF1C41" />
                      <path d="M20 13.75V15H0V13.75H20ZM20 12.5H0V11.25H20V12.5ZM20 10H0V8.75H20V10ZM20 7.5H0V6.25H20V7.5ZM20 5H0V3.75H20V5ZM20 2.5H0V1.25H20V2.5Z" fill="#F7FCFF" />
                      <rect width="11.25" height="8.75" fill="#2E42A5" />
                      <path d="M9.76367 1.37695H10.4189L9.9043 1.89746L10.1035 2.71875L9.46289 2.25684L8.93164 2.62695H9.16895L8.6543 3.14746L8.83105 3.87695H9.2041L9.46191 3.20703L9.76367 3.87695H10.4189L9.9043 4.39746L10.1035 5.21875L9.46289 4.75684L8.93164 5.12695H9.16895L8.6543 5.64746L8.83105 6.37695H9.2041L9.46191 5.70703L9.76367 6.37695H10.4189L9.9043 6.89746L10.1035 7.71875L9.46289 7.25684L8.7998 7.71875L9.02344 6.89746L8.43555 6.37695H8.72656L8.21289 6.00684L7.68164 6.37695H7.91895L7.4043 6.89746L7.60352 7.71875L6.96289 7.25684L6.2998 7.71875L6.52344 6.89746L5.93555 6.37695H6.22656L5.71289 6.00684L5.18164 6.37695H5.41895L4.9043 6.89746L5.10352 7.71875L4.46289 7.25684L3.7998 7.71875L4.02344 6.89746L3.43555 6.37695H3.72656L3.21289 6.00684L2.68164 6.37695H2.91895L2.4043 6.89746L2.60352 7.71875L1.96289 7.25684L1.2998 7.71875L1.52344 6.89746L0.935547 6.37695H1.7041L1.96191 5.70703L2.26367 6.37695H2.5752L2.77344 5.64746L2.18555 5.12695H2.47656L1.96289 4.75684L1.2998 5.21875L1.52344 4.39746L0.935547 3.87695H1.7041L1.96191 3.20703L2.26367 3.87695H2.5752L2.77344 3.14746L2.18555 2.62695H2.47656L1.96289 2.25684L1.2998 2.71875L1.52344 1.89746L0.935547 1.37695H1.7041L1.96191 0.707031L2.26367 1.37695H2.91895L2.4043 1.89746L2.58105 2.62695H2.9541L3.21191 1.95703L3.51367 2.62695H3.8252L4.02344 1.89746L3.43555 1.37695H4.2041L4.46191 0.707031L4.76367 1.37695H5.41895L4.9043 1.89746L5.08105 2.62695H5.4541L5.71191 1.95703L6.01367 2.62695H6.3252L6.52344 1.89746L5.93555 1.37695H6.7041L6.96191 0.707031L7.26367 1.37695H7.91895L7.4043 1.89746L7.58105 2.62695H7.9541L8.21191 1.95703L8.51367 2.62695H8.8252L9.02344 1.89746L8.43555 1.37695H9.2041L9.46191 0.707031L9.76367 1.37695ZM6.43164 5.12695H6.66895L6.1543 5.64746L6.33105 6.37695H6.7041L6.96191 5.70703L7.26367 6.37695H7.5752L7.77344 5.64746L7.18555 5.12695H7.47656L6.96289 4.75684L6.43164 5.12695ZM3.93164 5.12695H4.16895L3.6543 5.64746L3.83105 6.37695H4.2041L4.46191 5.70703L4.76367 6.37695H5.0752L5.27344 5.64746L4.68555 5.12695H4.97656L4.46289 4.75684L3.93164 5.12695ZM7.68164 3.87695H7.91895L7.4043 4.39746L7.58105 5.12695H7.9541L8.21191 4.45703L8.51367 5.12695H8.8252L9.02344 4.39746L8.43555 3.87695H8.72656L8.21289 3.50684L7.68164 3.87695ZM2.68164 3.87695H2.91895L2.4043 4.39746L2.58105 5.12695H2.9541L3.21191 4.45703L3.51367 5.12695H3.8252L4.02344 4.39746L3.43555 3.87695H3.72656L3.21289 3.50684L2.68164 3.87695ZM5.18164 3.87695H5.41895L4.9043 4.39746L5.08105 5.12695H5.4541L5.71191 4.45703L6.01367 5.12695H6.3252L6.52344 4.39746L5.93555 3.87695H6.22656L5.71289 3.50684L5.18164 3.87695ZM3.93164 2.62695H4.16895L3.6543 3.14746L3.83105 3.87695H4.2041L4.46191 3.20703L4.76367 3.87695H5.0752L5.27344 3.14746L4.68555 2.62695H4.97656L4.46289 2.25684L3.93164 2.62695ZM6.43164 2.62695H6.66895L6.1543 3.14746L6.33105 3.87695H6.7041L6.96191 3.20703L7.26367 3.87695H7.5752L7.77344 3.14746L7.18555 2.62695H7.47656L6.96289 2.25684L6.43164 2.62695Z" fill="#F7FCFF" />
                    </g>
                  </svg>
                </span>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M6 8l4 4 4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <span className="text-sm font-medium text-[#5b616d] leading-6 px-1">+1 55 555 55 54</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoTab
