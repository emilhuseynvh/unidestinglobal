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
    <footer className="w-full pt-10 md:pt-16 pb-4 md:pb-6 px-3 sm:px-4 md:px-6">
      <div className="bg-[#090909] rounded-2xl sm:rounded-3xl md:rounded-[32px] p-6 sm:p-8 md:p-10 lg:p-16 flex flex-col gap-8 items-center w-full">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col gap-10 md:gap-16 items-start w-full">
            <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
              <p className="text-white text-[16px] font-medium leading-6">
                Explore top skills and certifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-start w-full">
                {skillsMenu.map((block, index) => (
                  <div key={index} className="flex flex-col gap-3 items-start">
                    <p className="text-white text-[16px] font-medium leading-6">
                      {block.title}
                    </p>
                    <div className="flex flex-col items-start">
                      {block.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-center py-1 cursor-pointer hover:opacity-80 transition-opacity"
                        >
                          <p className="text-[#999] text-[14px] md:text-[16px] font-medium leading-6">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 items-start w-full">
              {footerMenu.map((block, index) => (
                <div key={index} className="flex flex-col gap-4 items-start">
                  <p className="text-white text-[16px] font-medium leading-6">
                    {block.title}
                  </p>
                  <div className="flex flex-col items-start">
                    {block.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex items-center py-1 cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <p className="text-[#999] text-[14px] md:text-[16px] font-medium leading-6">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-4 w-full">
            <div className="flex flex-col gap-3 items-start">
              <img src="/img/logo.svg" alt="Unidestin" className="h-7 brightness-0 invert" />
              <p className="text-[#999] text-[14px] md:text-[16px] font-medium leading-6 max-w-[280px]">
                Unidestin helps creators build content with clarity, consistency, and purpose.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start lg:items-start w-full lg:w-auto lg:max-w-[538px]">
              <p className="text-white text-[16px] font-medium leading-6">
                Don't miss updates
              </p>
              <div className="flex flex-col items-center relative w-full lg:w-[538px]">
                <div className="bg-[#161616] flex items-start overflow-hidden pl-6 sm:pl-8 pr-32 sm:pr-[152px] py-4 sm:py-[22px] rounded-3xl sm:rounded-[32px] w-full">
                  <p className="text-[#666] text-[16px] font-medium leading-6 flex-1">
                    Email address
                  </p>
                </div>
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#007aff] flex items-center justify-center py-2.5 sm:py-[13px] px-4 sm:px-5 rounded-full hover:bg-[#0066dd] transition-colors">
                  <span className="text-white text-[14px] sm:text-[16px] font-medium leading-[1.24] tracking-[-0.32px] whitespace-nowrap">
                    Subscribe
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#333] flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0 pt-6 md:pt-7 w-full">
          <p className="text-[#666] text-[14px] md:text-[16px] font-medium leading-6 whitespace-nowrap">
            © 2026, All Rights Reserved
          </p>
          <div className="flex gap-3 items-center">
            <div className="flex items-center py-1 cursor-pointer hover:opacity-80 transition-opacity">
              <p className="text-[#666] text-[14px] md:text-[16px] font-medium leading-6 text-center whitespace-nowrap">
                Privacy Policy
              </p>
            </div>
            <div className="bg-[#c6c5c8] rounded-full size-1" />
            <div className="flex items-center py-1 cursor-pointer hover:opacity-80 transition-opacity">
              <p className="text-[#666] text-[14px] md:text-[16px] font-medium leading-6 text-center whitespace-nowrap">
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
