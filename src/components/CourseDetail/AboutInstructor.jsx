const AboutInstructor = () => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-4 w-full">
        <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">About the instructor</h3>
        <div className="border border-[#f5f5f5] rounded-2xl p-4 w-fit">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/60?img=33" alt="Wade Warreninger" className="w-[60px] h-[60px] rounded-full object-cover" />
              <div className="flex flex-col gap-0.5">
                <span className="text-base font-medium text-[#333] leading-[1.4]">Wade Warreninger</span>
                <span className="text-sm text-[#808080] leading-[1.4]">Senior UX Designer</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-base text-[#333] leading-[1.4]">2949 Students</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2l2.09 6.26L20.18 9.27l-5.09 3.92L16.18 19.45 12 15.77l-4.18 3.68 1.09-6.26L3.82 9.27l6.09-1.01L12 2z" fill="#F79009" stroke="#F79009" strokeWidth="1" /></svg>
                <span className="text-base text-[#333] leading-[1.4]">4.5 Instructor rates</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2v10z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /><circle cx="8" cy="10" r="1" fill="#333" /><circle cx="12" cy="10" r="1" fill="#333" /><circle cx="16" cy="10" r="1" fill="#333" /></svg>
                <span className="text-base text-[#333] leading-[1.4]">345 Reviews</span>
              </div>
              <div className="flex items-center gap-2">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 20c-2.333-1.667-5-2.5-7.5-2.5a14 14 0 00-2.5.222V6.222a14 14 0 012.5-.222c2.5 0 5.167.833 7.5 2.5m0 11.5c2.333-1.667 5-2.5 7.5-2.5a14 14 0 012.5.222V6.222a14 14 0 00-2.5-.222c-2.5 0-5.167.833-7.5 2.5" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-base text-[#333] leading-[1.4]">131 Courses</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-base text-black leading-[1.4] w-full truncate">
        The UX Master Class is a comprehensive and immersive course designed to equip participants with the knowledge and skills necessary to create exceptional user experiences. In today's digital landscape, user experience (UX) has emerged as a critical factor in determining the success of any product or service. This course is tailored for both aspiring UX designers seeking to establish a strong foundation and experienced professionals aiming to refine their expertise.
      </p>
      <button className="text-[#007aff] text-base font-medium flex items-center gap-2">
        Show more
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="-rotate-90">
          <path d="M15 12.5l-5-5-5 5" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}

export default AboutInstructor
