const imgSearch = "https://www.figma.com/api/mcp/asset/8c36d2fb-1700-4a3c-b7cb-d32ede7f2a63"

const HelpHero = () => {
  return (
    <div className="bg-[#eef2fd] rounded-2xl px-5 sm:px-8 py-16 sm:py-24 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-3.5 text-center text-[#333]">
        <h1 className="text-[24px] sm:text-[28px] font-semibold leading-[1.4]">
          How can we help you?
        </h1>
        <p className="text-[14px] sm:text-[16px] font-normal leading-[1.4] max-w-[519px]">
          Welcome to our Help Center! Here, you'll find answers to frequently asked questions, helpful guides, and useful tips to assist you in getting the most out of our platform.
        </p>
      </div>
      <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[400px]">
        <div className="size-5 shrink-0 relative">
          <img src={imgSearch} alt="" className="size-full" />
        </div>
        <input
          type="text"
          placeholder="Describe your issue"
          className="flex-1 min-w-0 text-[16px] font-normal text-[#181d27] leading-6 outline-none placeholder:text-[#717680] bg-transparent"
        />
        <div className="border border-[#e9eaeb] rounded px-1 py-px">
          <span className="text-[12px] font-medium text-[#717680] leading-[18px]">⌘K</span>
        </div>
      </div>
    </div>
  )
}

export default HelpHero
