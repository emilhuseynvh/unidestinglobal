const imgLightning = "https://www.figma.com/api/mcp/asset/2d5c05bf-c632-4ca1-9452-4ca7d325da32"

const CTABanner = () => {
  return (
    <section className="bg-[#f5f5f5] flex gap-[32px] items-center overflow-hidden p-[32px] rounded-[20px] w-full mt-[24px]">
      <div className="flex flex-1 gap-[24px] items-center">
        <div className="overflow-hidden size-[40px] shrink-0">
          <img src={imgLightning} alt="" className="size-full" />
        </div>
        <div className="flex flex-col flex-1 gap-[4px] items-start font-medium leading-[1.24]">
          <p className="text-[#1a1a1a] text-[24px] tracking-[-0.48px] w-full">
            Learn or Teach. Journey Starts Here.
          </p>
          <p className="text-[18px] text-[rgba(26,26,26,0.65)] tracking-[-0.36px] w-full">
            Join a growing community of students and tutors learning and teaching.
          </p>
        </div>
      </div>

      <div className="flex gap-[8px] items-center justify-center shrink-0">
        <button className="bg-[#007aff] flex items-center justify-center py-[14px] px-[20px] rounded-full hover:bg-[#0066dd] transition-colors">
          <span className="font-medium leading-[1.24] text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">
            Start learning
          </span>
        </button>
        <button className="bg-[rgba(26,26,26,0.1)] flex items-center justify-center py-[14px] px-[20px] rounded-full hover:bg-[rgba(26,26,26,0.15)] transition-colors">
          <span className="font-medium leading-[1.24] text-[#1a1a1a] text-[16px] text-center tracking-[-0.32px] whitespace-nowrap">
            Become a tutor
          </span>
        </button>
      </div>
    </section>
  )
}

export default CTABanner
