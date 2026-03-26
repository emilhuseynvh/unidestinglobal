const imgLogo = "https://www.figma.com/api/mcp/asset/e5eb3a87-5859-45a4-810d-dc0a893fbe69"

const ContactForm = () => {
  return (
    <div className="bg-[rgba(173,193,244,0.21)] rounded-2xl px-5 sm:px-8 py-12 sm:py-16 flex flex-col items-center gap-8">
      <div className="flex flex-col items-center gap-6">
        <div className="h-[43px] w-[56px] relative">
          <img src={imgLogo} alt="Unidestin" className="absolute inset-0 size-full object-contain" />
        </div>
        <div className="flex flex-col items-center gap-1 text-center">
          <h2 className="text-[24px] font-semibold text-[#333] leading-8">
            Have a specific question?
          </h2>
          <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">
            Write us your question!
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-[574px]">
        <div className="flex flex-col gap-6 items-start w-full">
          <div className="flex flex-col gap-7 items-start w-full">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">First name</label>
                <input
                  type="text"
                  placeholder="First name"
                  className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] font-normal text-[#333] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Last name</label>
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] font-normal text-[#333] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Email adress</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] font-normal text-[#333] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors"
              />
            </div>
          </div>
          <button className="w-full h-12 bg-[#007aff] rounded-2xl text-white text-[16px] font-medium leading-[1.4] hover:bg-[#0066d6] transition-colors">
            Send message
          </button>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
