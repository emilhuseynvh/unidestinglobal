const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=48&h=48&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=48&h=48&fit=crop&crop=face",
]

const CamcorderIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.333 8.333l4.259-2.13A.833.833 0 0118.833 7v6a.833.833 0 01-1.241.726l-4.259-2.13M3.333 5h8.334c.92 0 1.666.746 1.666 1.667v6.666c0 .92-.746 1.667-1.666 1.667H3.333c-.92 0-1.666-.747-1.666-1.667V6.667c0-.92.746-1.667 1.666-1.667z" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CamcorderIconWhite = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.333 8.333l4.259-2.13A.833.833 0 0118.833 7v6a.833.833 0 01-1.241.726l-4.259-2.13M3.333 5h8.334c.92 0 1.666.746 1.666 1.667v6.666c0 .92-.746 1.667-1.666 1.667H3.333c-.92 0-1.666-.747-1.666-1.667V6.667c0-.92.746-1.667 1.666-1.667z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 3.333v9.334M3.333 8h9.334" stroke="#A4A7AE" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const LiveDot = () => (
  <span className="size-[6px] rounded-full bg-[#17b26a] inline-block" />
)

const AlertBanner = ({ courseName, groupName, avatarCount }) => {
  return (
    <div className="flex-1 min-w-0 bg-[#ebf5ff] border border-[#c3ddfd] rounded-[12px] p-4 sm:p-6 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <CamcorderIcon />
          <span className="text-[14px] font-semibold text-[#dc2626] leading-[18px]">
            {courseName} is now live
          </span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="flex items-start pr-1">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="size-6 rounded-full border-[1.5px] border-white overflow-hidden -ml-1 first:ml-0"
                >
                  <img src={src} alt="" className="size-full object-cover" />
                </div>
              ))}
              <div className="size-6 rounded-full border-2 border-white bg-[#f5f5f5] -ml-1 flex items-center justify-center">
                <span className="text-[12px] font-semibold text-[#535862] leading-[18px]">
                  +{avatarCount}
                </span>
              </div>
            </div>
            <div className="size-6 rounded-[12px] border border-dashed border-[#d5d7da] bg-white flex items-center justify-center">
              <PlusIcon />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-[6px]">
              <span className="text-[14px] font-medium text-[#007aff] leading-[20px]">
                {courseName}
              </span>
              <div className="flex items-center gap-1 bg-white border border-[#d5d7da] rounded-[6px] px-[6px] py-[2px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <LiveDot />
                <span className="text-[12px] font-medium text-[#414651] leading-[18px]">
                  Live
                </span>
              </div>
            </div>
            <span className="text-[14px] text-[#717680] leading-[20px]">
              {groupName}
            </span>
          </div>
        </div>
      </div>

      <div className="flex gap-3 w-full sm:w-[262px]">
        <button className="flex-1 h-10 bg-[#007aff] rounded-[12px] flex items-center justify-center gap-2 hover:bg-[#0066d6] transition-colors">
          <CamcorderIconWhite />
          <span className="text-[16px] font-medium text-white leading-[1.4]">
            Join
          </span>
        </button>
        <button className="flex-1 h-10 border border-[#333] rounded-[12px] flex items-center justify-center hover:bg-[#f5f5f5] transition-colors">
          <span className="text-[16px] font-medium text-[#333] leading-[1.4]">
            Dismiss
          </span>
        </button>
      </div>
    </div>
  )
}

const TodayCourses = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[18px] font-semibold text-[#181d27] leading-[20px]">
        Today courses
      </h2>
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <AlertBanner
          courseName="General English"
          groupName="Group 7A"
          avatarCount={5}
        />
        <AlertBanner
          courseName="General English"
          groupName="Group 7A"
          avatarCount={5}
        />
      </div>
    </div>
  )
}

export default TodayCourses
