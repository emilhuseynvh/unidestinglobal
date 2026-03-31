const campaigns = [
  {
    title: "50% OFF All Courses",
    subtitle: "Use code: WINTER50 · Valid till Feb 14",
    code: "WINTER50",
    decorationPosition: "right",
  },
  {
    title: "First Lesson Free",
    subtitle: "Use code: FIRST10 · Valid till Feb 14",
    code: "FIRST10",
    decorationPosition: "left",
  },
]

const ActiveCampaigns = () => {
  return (
    <div className="flex flex-col gap-9 items-center">
      <div className="text-center flex flex-col gap-2 items-center">
        <h2 className="text-[32px] font-semibold text-black leading-[1.4]">Active Campaigns</h2>
        <p className="text-base text-[#4d4d4d] leading-[1.4] max-w-[642px]">
          Connect with students and tutors worldwide. Share knowledge, discuss topics, join study groups, and stay updated with the latest news and campaigns.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
        {campaigns.map((campaign, i) => (
          <div
            key={i}
            className="bg-[#a2d6f0] rounded-[26px] shadow-[0px_27px_60px_0px_rgba(0,0,0,0.12)] overflow-hidden relative h-[424px] flex flex-col items-center justify-center gap-10 px-10"
          >
            <img
              src="/img/guest/campaign-decoration.svg"
              alt=""
              className={`absolute w-[590px] h-[322px] rotate-[-17deg] opacity-30 pointer-events-none select-none ${
                campaign.decorationPosition === "right"
                  ? "right-[-150px] top-[-37px]"
                  : "left-[-133px] top-[-104px]"
              }`}
            />
            <div className="relative z-10 flex flex-col items-center gap-5 text-center max-w-[571px]">
              <h3 className="text-[48px] sm:text-[64px] font-bold text-[#141219] leading-tight">
                {campaign.title}
              </h3>
              <p className="text-base text-[#141219] leading-[1.4]">
                {campaign.subtitle}
              </p>
            </div>
            <button className="relative z-10 px-5 py-3 rounded-full bg-[#89caeb] text-base font-medium text-black tracking-[-0.32px] hover:bg-[#7abfdf] transition-colors">
              {campaign.code}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActiveCampaigns
