const imgAvatar1 = "https://www.figma.com/api/mcp/asset/53f8d390-77cc-450e-ba71-fa2b7fbac279"
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/39e7a4c2-5718-45cb-bfbe-3baaf1921dc7"
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/2383aec3-82b8-45c7-b82d-7249b0bb9bf5"
const imgAvatar4 = "https://www.figma.com/api/mcp/asset/d9380d4e-4a1f-412e-a339-fcd09ea43614"
const imgAvatar5 = "https://www.figma.com/api/mcp/asset/836157a9-5597-4e3e-8700-53bbedaded6a"
const imgAvatarOR = "https://www.figma.com/api/mcp/asset/9eaf5ce9-a698-4b83-99e3-54059f99e3cf"

const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="2.667" width="12" height="10.667" rx="1.333" stroke="#535862" strokeWidth="1.2"/>
    <path d="M2 5.333h12M5.333 1.333V4M10.667 1.333V4" stroke="#535862" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
)

const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <circle cx="8" cy="8" r="6" stroke="#535862" strokeWidth="1.2"/>
    <path d="M8 5.333V8l2 1" stroke="#535862" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BellIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12 5.333a4 4 0 00-8 0c0 4.667-2 6-2 6h12s-2-1.333-2-6zM9.153 14a1.333 1.333 0 01-2.306 0" stroke="#535862" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CopyIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <rect x="6" y="6" width="10" height="10" rx="1.5" stroke="#535862" strokeWidth="1.5"/>
    <path d="M12 6V4.5A1.5 1.5 0 0010.5 3h-6A1.5 1.5 0 003 4.5v6A1.5 1.5 0 004.5 12H6" stroke="#535862" strokeWidth="1.5"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5M14.25 4.5v10.5a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const EditIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
    <path d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z" stroke="#535862" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const avatars = [imgAvatar1, imgAvatar2, imgAvatar3, imgAvatar4, imgAvatar5]

const EventDetail = () => {
  return (
    <div className="flex flex-col gap-5 px-4 py-5">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-[16px] font-semibold text-[#181d27] leading-6">Product demo</h3>
        <div className="flex items-center gap-0.5 shrink-0">
          <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors"><CopyIcon /></button>
          <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors"><TrashIcon /></button>
          <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors"><EditIcon /></button>
        </div>
      </div>

      <div className="flex flex-col gap-2.5">
        <div className="flex items-center gap-2.5">
          <CalendarIcon />
          <span className="text-[14px] text-[#535862] leading-5">Friday, Jan 10, 2025</span>
        </div>
        <div className="flex items-center gap-2.5">
          <ClockIcon />
          <span className="text-[14px] text-[#535862] leading-5">1:30 PM - 3:30 PM</span>
        </div>
        <div className="flex items-center gap-2.5">
          <BellIcon />
          <span className="text-[14px] text-[#535862] leading-5">10 min before</span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex items-center">
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <div
                key={i}
                className="size-8 rounded-full border-[1.5px] border-white overflow-hidden -mr-2 relative"
                style={{ zIndex: avatars.length - i }}
              >
                <img src={src} alt="" className="size-full object-cover" />
              </div>
            ))}
            <div
              className="size-8 rounded-full border-[1.5px] border-white overflow-hidden -mr-2 relative z-0"
            >
              <img src={imgAvatarOR} alt="" className="size-full object-cover" />
            </div>
          </div>
          <button className="size-7 rounded-full border border-dashed border-[#d5d7da] bg-white flex items-center justify-center hover:bg-[#f9f9f9] transition-colors ml-3">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 3.5v7M3.5 7h7" stroke="#A4A7AE" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-[13px] leading-[18px]">
          <span className="font-semibold text-[#181d27]">6 guests</span>
          <span className="text-[#717680]">|</span>
          <span className="text-[#535862]">5 yes</span>
          <span className="text-[#717680]">|</span>
          <span className="text-[#535862]">1 awaiting</span>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb] pt-4 flex flex-col gap-2.5">
        <h4 className="text-[14px] font-semibold text-[#181d27] leading-5">About this event</h4>
        <p className="text-[14px] text-[#535862] leading-5">
          Sienna is inviting you to a scheduled Zoom meeting.
        </p>
        <p className="text-[14px] text-[#535862] leading-5">
          Topic: Product demo for the new dashboard and Q&A session.
        </p>
        <p className="text-[14px] leading-5">
          <span className="text-[#535862]">Join Zoom Meeting: </span>
          <a href="#" className="text-[#7f56d9] hover:underline break-all">
            https://us02web.zoom.us/j/86341980512
          </a>
        </p>
      </div>
    </div>
  )
}

export default EventDetail
