const imgCursorClick = "https://www.figma.com/api/mcp/asset/ecc4eaa9-7bed-41b4-9692-b28f8f28d719"

const benefits = [
  "Access to 50K+ students",
  "Co-branded programs",
  "Joint marketing",
  "Analytics & reporting",
  "Revenue sharing model",
  "Dedicated support",
]

const PartnerForm = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="bg-[#fafafa] rounded-[32px] p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-8 lg:w-[480px] shrink-0">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="size-1.5 rounded bg-[#007aff]" />
              <span className="text-[14px] font-normal text-[#555] leading-[1.4]">
                Partnership
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] leading-none tracking-[-1.92px]">
                Become a UniDestin Partner
              </h2>
              <p className="text-[16px] font-normal text-[#666] leading-[1.4] max-w-[400px]">
                Join our growing network of 85+ education partners. Together, we create opportunities for students worldwide.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[18px]">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M9.35 2C9.35 1.58579 9.01421 1.25 8.6 1.25C8.18579 1.25 7.85 1.58579 7.85 2V5C7.85 5.41421 8.18579 5.75 8.6 5.75C9.01421 5.75 9.35 5.41421 9.35 5V2Z" fill="#9CCEE7" />
                  <path d="M14.5303 3.73033C14.8232 3.43744 14.8232 2.96256 14.5303 2.66967C14.2374 2.37678 13.7626 2.37678 13.4697 2.66967L11.0697 5.06967C10.7768 5.36256 10.7768 5.83744 11.0697 6.13033C11.3626 6.42322 11.8374 6.42322 12.1303 6.13033L14.5303 3.73033Z" fill="#9CCEE7" />
                  <path d="M4.33033 3.26967C4.03744 2.97678 3.56256 2.97678 3.26967 3.26967C2.97678 3.56256 2.97678 4.03744 3.26967 4.33033L5.06967 6.13033C5.36256 6.42322 5.83744 6.42322 6.13033 6.13033C6.42322 5.83744 6.42322 5.36256 6.13033 5.06967L4.33033 3.26967Z" fill="#9CCEE7" />
                  <path d="M2 7.85C1.58579 7.85 1.25 8.18579 1.25 8.6C1.25 9.01421 1.58579 9.35 2 9.35H5C5.41421 9.35 5.75 9.01421 5.75 8.6C5.75 8.18579 5.41421 7.85 5 7.85H2Z" fill="#9CCEE7" />
                  <path d="M6.13033 12.1303C6.42322 11.8374 6.42322 11.3626 6.13033 11.0697C5.83744 10.7768 5.36256 10.7768 5.06967 11.0697L2.66967 13.4697C2.37678 13.7626 2.37678 14.2374 2.66967 14.5303C2.96256 14.8232 3.43744 14.8232 3.73033 14.5303L6.13033 12.1303Z" fill="#9CCEE7" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M10.148 7.38639C8.42588 6.74978 6.74982 8.42578 7.38646 10.1479L11.526 21.3457C12.2499 23.3039 15.0587 23.1848 15.6143 21.1724L16.7187 17.1716C16.7796 16.9513 16.9517 16.7792 17.172 16.7183L21.1724 15.6141C23.1848 15.0586 23.3039 12.2497 21.3458 11.5258L10.148 7.38639ZM8.7934 9.62781C8.60103 9.10744 9.10748 8.60095 9.6279 8.79333L20.8257 12.9328C21.4174 13.1515 21.3814 14.0003 20.7733 14.1682L16.7729 15.2724C16.0438 15.4737 15.4741 16.0433 15.2728 16.7725L14.1683 20.7732C14.0005 21.3813 13.1517 21.4173 12.9329 20.8256L8.7934 9.62781Z" fill="#9CCEE7" />
                </svg>
                <span className="text-[16px] font-normal text-black leading-[1.4]">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0 bg-white rounded-xl p-6 flex flex-col gap-8 w-full">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex-1 flex flex-col gap-1.5">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">
                  Organization name
                </label>
                <input
                  type="text"
                  placeholder="e.g. University of Europe"
                  className="border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-[16px] text-[#0d0d12] leading-[1.4] placeholder:text-[#808080] outline-none focus:border-[#007aff] transition-colors"
                />
              </div>
              <div className="flex-1 flex flex-col gap-1.5 relative">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">
                  Type
                </label>
                <div className="relative">
                  <select className="border border-[#e6e6e6] rounded-[10px] h-12 px-3 pr-10 text-[16px] text-[#0d0d12] leading-[1.4] outline-none focus:border-[#007aff] transition-colors appearance-none bg-white w-full">
                    <option>University</option>
                    <option>Corporate</option>
                    <option>EdTech</option>
                    <option>Government</option>
                  </select>
                  <svg className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 7.5l5 5 5-5" stroke="#0d0d12" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[16px] font-medium text-[#0d0d12] leading-6">
                Contact person
              </label>
              <input
                type="text"
                placeholder="Full name"
                className="border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-[16px] text-[#0d0d12] leading-[1.4] placeholder:text-[#808080] outline-none focus:border-[#007aff] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[16px] font-medium text-[#0d0d12] leading-6">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-[16px] text-[#0d0d12] leading-[1.4] placeholder:text-[#808080] outline-none focus:border-[#007aff] transition-colors"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-[#414651] leading-5">
                Message
              </label>
              <textarea
                placeholder="Tell us about your partnership goals..."
                rows={5}
                className="border border-[#d5d7da] rounded-lg px-3.5 py-3 text-[16px] text-[#0d0d12] leading-6 placeholder:text-[#717680] outline-none focus:border-[#007aff] transition-colors resize-y shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
              />
            </div>
          </div>

          <button className="bg-[#007aff] text-white rounded-full px-5 py-4 text-[16px] font-semibold leading-6 self-start hover:bg-[#0066d6] transition-colors">
            Submit Inquiry
          </button>
        </div>
      </div>
    </section>
  )
}

export default PartnerForm
