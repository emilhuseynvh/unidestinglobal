const imgChevron = "https://www.figma.com/api/mcp/asset/94b90102-b141-45d7-b46f-a9b43dc9737d"

const ContactFormSection = () => {
  return (
    <section className="bg-[#fafafa] flex items-center justify-center px-[64px] py-[100px] w-full">
      <div className="bg-white flex gap-[80px] items-center p-[64px] rounded-[32px] w-full max-w-[1312px]">
        <div className="flex flex-col h-full items-start justify-between w-[480px] shrink-0">
          <div className="flex flex-col gap-[16px] items-start w-full">
            <div className="flex gap-[8px] items-center">
              <div className="bg-[#73ba80] rounded-[8px] size-[6px]" />
              <p className="font-normal leading-[1.4] text-[14px] text-[#555]">
                Contact
              </p>
            </div>
            <div className="flex flex-col gap-[8px] items-start w-full">
              <h2 className="font-semibold leading-none text-[#1a1a1a] text-[48px] tracking-[-1.92px] w-[426px]">
                Tell Us How We Can Help
              </h2>
              <p className="font-normal leading-[1.4] text-[16px] text-[#888] w-[400px]">
                Share what you need, and our team will get back to you with gentle, practical guidance.
              </p>
            </div>
          </div>

          <div className="bg-white flex flex-col gap-[24px] items-start p-[24px] rounded-[12px] w-full mt-[40px]">
            <p className="font-normal leading-[1.4] text-[20px] text-[#111] tracking-[-0.2px] w-full">
              Contact us anytime if you need clarity or reassurance.
            </p>
            <div className="flex flex-col gap-[32px] items-start w-full">
              <div className="flex gap-[32px] items-end w-full">
                <div className="flex flex-col gap-[4px] items-start justify-center flex-1">
                  <p className="font-normal leading-[1.4] text-[14px] text-[#888]">
                    Email
                  </p>
                  <p className="font-normal leading-[1.4] text-[16px] text-[#111]">
                    hello@findpeace.co
                  </p>
                </div>
                <div className="flex flex-col gap-[4px] items-start justify-center flex-1">
                  <p className="font-normal leading-[1.4] text-[14px] text-[#888]">
                    Phone
                  </p>
                  <p className="font-normal leading-[1.4] text-[16px] text-[#111]">
                    +62 812-0000-0000
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-[4px] items-start justify-center w-full">
                <p className="font-normal leading-[1.4] text-[14px] text-[#888]">
                  Address
                </p>
                <p className="font-normal leading-[1.4] text-[16px] text-[#111]">
                  FindPeace Mental Health Center, Yogyakarta, Indonesia.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white flex flex-col gap-[32px] items-start justify-center p-[24px] rounded-[12px] flex-1">
          <div className="flex flex-col gap-[24px] items-start w-full">
            <div className="flex gap-[24px] items-center w-full">
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#fafafa] w-full px-[16px] py-[12px] rounded-[8px] text-[16px] text-[#888] placeholder:text-[#888] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="our@email.com"
                  className="bg-[#fafafa] w-full px-[16px] py-[12px] rounded-[8px] text-[16px] text-[#888] placeholder:text-[#888] outline-none"
                />
              </div>
            </div>

            <div className="flex gap-[24px] items-center w-full">
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+01 000-000-000"
                  className="bg-[#fafafa] w-full px-[16px] py-[12px] rounded-[8px] text-[16px] text-[#888] placeholder:text-[#888] outline-none"
                />
              </div>
              <div className="flex flex-col gap-[8px] items-start justify-center flex-1">
                <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                  Subject
                </label>
                <div className="bg-[#fafafa] flex gap-[16px] items-center px-[16px] py-[12px] rounded-[8px] w-full cursor-pointer">
                  <span className="flex-1 text-[16px] text-[#888]">Select Subject</span>
                  <img src={imgChevron} alt="" className="size-[20px]" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start justify-center w-full">
              <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                Preferred Contact Method
              </label>
              <div className="bg-[#fafafa] flex gap-[16px] items-center px-[16px] py-[12px] rounded-[8px] w-full cursor-pointer">
                <span className="flex-1 text-[16px] text-[#888]">Select Contact Method</span>
                <img src={imgChevron} alt="" className="size-[20px]" />
              </div>
            </div>

            <div className="flex flex-col gap-[8px] items-start justify-center w-full">
              <label className="font-normal leading-[1.4] text-[14px] text-[#555] w-full">
                How Can We Help You?
              </label>
              <textarea
                placeholder="Type Your Concern Here"
                className="bg-[#fafafa] w-full px-[16px] py-[12px] rounded-[8px] text-[16px] text-[#888] placeholder:text-[#888] outline-none h-[120px] resize-none"
              />
            </div>
          </div>

          <button className="bg-[#007aff] flex items-center justify-center px-[20px] py-[14px] rounded-full hover:bg-[#0066dd] transition-colors">
            <span className="font-medium leading-[1.24] text-[16px] text-center text-white tracking-[-0.32px] whitespace-nowrap">
              Send Message
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ContactFormSection
