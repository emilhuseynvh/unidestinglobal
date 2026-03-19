const imgUni = "https://www.figma.com/api/mcp/asset/d1e0bc22-2cef-47b7-8ef3-ab1078de67ee"
const imgVector = "https://www.figma.com/api/mcp/asset/3c748ed7-ba04-48eb-bf14-f7a94c50158c"

const skillsMenu = [
  {
    title: "Web Development",
    items: ["Web Development", "JavaScript", "React JS", "Angular", "Java"]
  },
  {
    title: "Certifications by Skill",
    items: ["Cybersecurity Certification", "Project Management Certification", "Data Analytics Certification", "HR Management Certification", "See all Certifications"]
  },
  {
    title: "IT Certifications",
    items: ["Amazon AWS", "AWS Certified Cloud Practitioner", "AZ-900: Microsoft Azure Fundamentals", "AWS Certified Solutions Architect", "Kubernetes"]
  },
  {
    title: "Business Analytics & Intelligence",
    items: ["Microsoft Excel", "SQL", "Microsoft Power BI", "Data Analysis", "Business Analysis"]
  }
]

const footerMenu = [
  {
    title: "About",
    items: ["About us", "Contact us", "Partners", "FAQ"]
  },
  {
    title: "Services",
    items: ["Live Tutoring", "Certificate Courses", "Study Abroad", "Online Library", "Community"]
  },
  {
    title: "Resources",
    items: ["Study tips", "Events", "Education news", "Terms of service"]
  },
  {
    title: "Unidestin social",
    items: ["Facebook", "Instagram", "Linkedin", "Youtube"]
  }
]

const Footer = () => {
  return (
    <footer className="w-full pt-[64px] pb-[24px] px-[24px]">
      <div className="bg-[#090909] rounded-[32px] p-[64px] flex flex-col gap-[32px] items-center w-full">
        <div className="flex flex-col gap-[80px] items-start w-full">
          <div className="flex flex-col gap-[64px] items-start w-full">
            <div className="flex flex-col gap-[30px] items-start w-full">
              <p className="text-white text-[16px] font-medium leading-[24px]">
                Explore top skills and certifications
              </p>
              <div className="flex gap-[16px] items-start w-full">
                {skillsMenu.map((block, index) => (
                  <div
                    key={index}
                    className={`flex flex-col gap-[12px] items-start ${index === 0 ? 'w-[205px]' : index === 3 ? 'w-[206px]' : 'w-[316px]'}`}
                  >
                    <p className="text-white text-[16px] font-medium leading-[24px] w-full">
                      {block.title}
                    </p>
                    <div className="flex flex-col items-start w-full">
                      {block.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center py-[4px] cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <p className="text-[#999] text-[16px] font-medium leading-[24px] whitespace-nowrap">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-[16px] items-start w-full">
              {footerMenu.map((block, index) => (
                <div
                  key={index}
                  className={`flex flex-col gap-[16px] items-start ${index === 0 ? 'w-[205px]' : index === 1 ? 'w-[316px]' : index === 2 ? 'w-[315px]' : 'flex-1'}`}
                >
                  <p className="text-white text-[16px] font-medium leading-[24px] w-full">
                    {block.title}
                  </p>
                  <div className="flex flex-col items-start w-full">
                    {block.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center py-[4px] cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <p className="text-[#999] text-[16px] font-medium leading-[24px] whitespace-nowrap">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-end justify-between w-full">
            <div className="flex flex-col gap-[12px] items-start flex-1">
              <div className="h-[32px] w-[186px] relative">
                <div className="absolute inset-[0.6%_15.77%_0.73%_0]">
                  <img alt="" className="absolute block max-w-none size-full" src={imgUni} />
                </div>
                <div className="absolute inset-[0_0_0_36.65%]">
                  <img alt="" className="absolute block max-w-none size-full" src={imgVector} />
                </div>
              </div>
              <p className="text-[#999] text-[16px] font-medium leading-[24px] max-w-[280px]">
                Unidestin helps creators build content with clarity, consistency, and purpose.
              </p>
            </div>

            <div className="flex flex-col gap-[12px] items-start">
              <p className="text-white text-[16px] font-medium leading-[24px]">
                Don't miss updates
              </p>
              <div className="flex flex-col items-center relative w-[538px]">
                <div className="bg-[#161616] flex items-start overflow-hidden pl-[32px] pr-[152px] py-[22px] rounded-[32px] w-full">
                  <p className="text-[#666] text-[16px] font-medium leading-[24px] flex-1">
                    Email address
                  </p>
                </div>
                <button className="absolute right-[8px] top-1/2 -translate-y-1/2 bg-[#007aff] flex items-center justify-center py-[13px] px-[20px] rounded-full hover:bg-[#0066dd] transition-colors">
                  <span className="text-white text-[16px] font-medium leading-[1.24] tracking-[-0.32px] whitespace-nowrap">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] flex items-center justify-between pt-[28px] w-full">
          <p className="text-[#666] text-[16px] font-medium leading-[24px] whitespace-nowrap">
            © 2026, All Rights Reserved
          </p>
          <div className="flex gap-[12px] items-center">
            <div className="flex items-center py-[4px] cursor-pointer hover:opacity-80 transition-opacity">
              <p className="text-[#666] text-[16px] font-medium leading-[24px] text-center whitespace-nowrap">
                Privacy Policy
              </p>
            </div>
            <div className="bg-[#c6c5c8] rounded-full size-[4px]" />
            <div className="flex items-center py-[4px] cursor-pointer hover:opacity-80 transition-opacity">
              <p className="text-[#666] text-[16px] font-medium leading-[24px] text-center whitespace-nowrap">
                Licenses
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
