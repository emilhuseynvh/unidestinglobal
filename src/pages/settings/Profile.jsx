const Profile = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 flex flex-col gap-0.5 min-w-0">
          <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Profile</h2>
          <p className="text-[14px] font-normal text-[#535862] leading-5 truncate">Update your  photo and details here.</p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <button className="h-12 px-5 border border-[#c6c5c8] rounded-2xl text-[16px] font-medium text-black leading-[1.4] hover:bg-[#f9f9f9] transition-colors">
            Cancel
          </button>
          <button className="h-12 px-5 bg-[#007aff] rounded-2xl text-[16px] font-medium text-white leading-[1.4] hover:bg-[#0066d6] transition-colors">
            Save
          </button>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-8">
        <label className="text-[14px] font-semibold text-[#414651] leading-5 sm:w-[200px] shrink-0 sm:pt-2">
          Username <span className="text-[#7f56d9]">*</span>
        </label>
        <div className="flex-1 sm:max-w-[512px]">
          <input
            type="text"
            defaultValue="Chinara Naghiyeva"
            className="w-full h-11 px-3.5 bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none focus:border-[#007aff] transition-colors"
          />
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <div className="sm:w-[200px] shrink-0">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            Your photo <span className="text-[#7f56d9]">*</span>
          </label>
          <p className="text-[14px] font-normal text-[#535862] leading-5">This will be displayed on your profile.</p>
        </div>
        <div className="flex-1 flex items-start justify-between gap-4">
          <div className="size-16 rounded-full overflow-hidden shrink-0">
            <img
              src="https://www.figma.com/api/mcp/asset/2b9d85de-8b72-4578-930f-aa315811b885"
              alt="Profile"
              className="size-full object-cover"
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="text-[14px] font-semibold text-[#535862] leading-5 hover:text-[#414651] transition-colors">Delete</button>
            <button className="text-[14px] font-semibold text-[#6941c6] leading-5 hover:underline">Update</button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <div className="sm:w-[200px] shrink-0">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            Your bio <span className="text-[#7f56d9]">*</span>
            <svg className="inline ml-1 -mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6.5" stroke="#717680" strokeWidth="1.2"/><path d="M8 10.667V8M8 5.333h.007" stroke="#717680" strokeWidth="1.2" strokeLinecap="round"/></svg>
          </label>
          <p className="text-[14px] font-normal text-[#535862] leading-5">Write a short introduction.</p>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <div className="flex-1 max-w-[240px] bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center justify-between px-3.5 py-2.5 cursor-pointer hover:border-[#a4a7ae] transition-colors">
              <span className="text-[16px] font-medium text-[#181d27] leading-6">Regular</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M5 7.5l5 5 5-5" stroke="#535862" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="flex items-center gap-1">
              <button className="size-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/65cf4cdd-dcc9-43e4-8b09-722428348faf" alt="Bold" className="w-[11px] h-[14px]" />
              </button>
              <button className="size-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/c098450d-eaa1-4f89-b640-a657461af6c8" alt="Italic" className="w-[12px] h-[14px]" />
              </button>
              <button className="size-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/b653dd6f-88b3-48e1-81aa-cd7ef3d0017b" alt="Link" className="w-5 h-[10px]" />
              </button>
              <button className="size-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/26db99e6-86ff-452c-b2a0-119bc0ae9e64" alt="List" className="w-[18px] h-[15px]" />
              </button>
              <button className="size-8 flex items-center justify-center rounded-md hover:bg-[#f5f5f5] transition-colors overflow-hidden">
                <img src="https://www.figma.com/api/mcp/asset/a6f57b56-8392-43ab-b3b0-0c3e8143d989" alt="Numbers" className="w-[19px] h-[16px]" />
              </button>
            </div>
          </div>
          <div className="relative">
            <textarea
              placeholder="Add a short bio..."
              className="w-full h-[154px] px-3.5 py-3 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] text-[16px] text-[#181d27] leading-6 outline-none resize-y placeholder:text-[#717680] focus:border-[#007aff] transition-colors"
            />
          </div>
          <p className="text-[14px] font-normal text-[#535862] leading-5">400 characters left</p>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <label className="text-[14px] font-semibold text-[#414651] leading-5 sm:w-[200px] sm:max-w-[280px] sm:min-w-[200px] shrink-0">
          My Interests
        </label>
        <div className="flex-1 flex flex-col gap-4 sm:max-w-[512px]">
          <div className="bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center px-3.5 py-2.5">
            <input
              type="text"
              defaultValue="Product Designer"
              className="flex-1 min-w-0 text-[16px] font-normal text-[#181d27] leading-6 outline-none"
            />
          </div>
          <label className="flex items-start gap-2 cursor-pointer">
            <div className="pt-0.5 shrink-0">
              <div className="size-4 rounded bg-[#7f56d9] border border-[#7f56d9] flex items-center justify-center overflow-hidden">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M8.333 2.5L3.75 7.083 1.667 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
            </div>
            <span className="text-[14px] font-medium text-[#414651] leading-5">Show my job title in my profile</span>
          </label>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
        <div className="sm:w-[200px] sm:max-w-[280px] sm:min-w-[200px] shrink-0">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">Alternative contact email</label>
          <p className="text-[14px] font-normal text-[#535862] leading-5">Enter an alternative email if you'd like to be contacted via a different email.</p>
        </div>
        <div className="flex-1 sm:max-w-[512px]">
          <div className="bg-white border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex items-center gap-2 px-3.5 py-2.5">
            <img src="https://www.figma.com/api/mcp/asset/2abfa99b-6248-432f-b171-d045a1a94d9f" alt="" className="size-5 shrink-0" />
            <input
              type="email"
              placeholder="you@example.com"
              className="flex-1 min-w-0 text-[16px] font-normal text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-8">
        <div className="sm:max-w-[280px] sm:min-w-[200px] shrink-0">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">Delete account</label>
          <p className="text-[14px] font-normal text-[#535862] leading-5">Enter an alternative email if you'd like to be contacted via a different email.</p>
        </div>
        <button className="h-12 px-5 bg-[#ea4335] rounded-2xl text-[16px] font-medium text-white leading-[1.4] hover:bg-[#d5382b] transition-colors whitespace-nowrap shrink-0 self-start sm:self-auto">
          Delete my account
        </button>
      </div>
    </div>
  )
}

export default Profile
