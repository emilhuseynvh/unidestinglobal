const HealthcareIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 14.6667C26.6667 22.6667 16 29.3333 16 29.3333C16 29.3333 5.33337 22.6667 5.33337 14.6667C5.33337 11.8377 6.45718 9.12458 8.45757 7.12419C10.458 5.12381 13.1711 4 16 4C18.829 4 21.5421 5.12381 23.5425 7.12419C25.5429 9.12458 26.6667 11.8377 26.6667 14.6667Z" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 18.6667C18.2092 18.6667 20 16.8758 20 14.6667C20 12.4575 18.2092 10.6667 16 10.6667C13.7909 10.6667 12 12.4575 12 14.6667C12 16.8758 13.7909 18.6667 16 18.6667Z" stroke="#d97706" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const BusinessIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M26.6667 9.33337H5.33333C3.86057 9.33337 2.66667 10.5273 2.66667 12V25.3334C2.66667 26.8061 3.86057 28 5.33333 28H26.6667C28.1394 28 29.3333 26.8061 29.3333 25.3334V12C29.3333 10.5273 28.1394 9.33337 26.6667 9.33337Z" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21.3333 28V6.66671C21.3333 5.95946 21.0524 5.28119 20.5523 4.78109C20.0522 4.281 19.3739 4.00004 18.6667 4.00004H13.3333C12.6261 4.00004 11.9478 4.281 11.4477 4.78109C10.9476 5.28119 10.6667 5.95946 10.6667 6.66671V28" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const TechnologyIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="10.6667" height="10.6667" rx="2" stroke="#eab308" strokeWidth="2"/>
    <rect x="17.3333" y="4" width="10.6667" height="10.6667" rx="2" stroke="#eab308" strokeWidth="2"/>
    <rect x="4" y="17.3333" width="10.6667" height="10.6667" rx="2" stroke="#eab308" strokeWidth="2"/>
    <rect x="17.3333" y="17.3333" width="10.6667" height="10.6667" rx="2" stroke="#eab308" strokeWidth="2"/>
  </svg>
)

const ManagementIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="4" stroke="#22c55e" strokeWidth="2"/>
    <path d="M10.6667 16H21.3333" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10.6667 10.6667H21.3333" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
    <path d="M10.6667 21.3333H16" stroke="#22c55e" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const categories = [
  {
    name: "Healthcare",
    programs: "2007 Programs",
    bgColor: "bg-[#fff9f2]",
    iconBgColor: "bg-[#fff0de]",
    icon: <HealthcareIcon />
  },
  {
    name: "Business",
    programs: "2007 Programs",
    bgColor: "bg-[#f1f5ff]",
    iconBgColor: "bg-[#e8efff]",
    icon: <BusinessIcon />
  },
  {
    name: "Technology",
    programs: "2007 Programs",
    bgColor: "bg-[#fffcf1]",
    iconBgColor: "bg-[#fff6d3]",
    icon: <TechnologyIcon />
  },
  {
    name: "Management",
    programs: "2007 Programs",
    bgColor: "bg-[#f6fff8]",
    iconBgColor: "bg-[#dcf4e2]",
    icon: <ManagementIcon />
  }
]

const LightningIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.6667 3.33337L5 23.3334H20L18.3333 36.6667L35 16.6667H20L21.6667 3.33337Z" stroke="#1a1a1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const CategoriesSection = () => {
  return (
    <section className="w-full py-24 px-16">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col gap-0.5 items-center text-center text-[#18191b] w-full">
          <h2 className="text-[34px] font-bold leading-[48px]">
            What do you want to study?
          </h2>
          <p className="text-base font-normal leading-6">
            See our most popular categories and attach with your prefer programs
          </p>
        </div>

        <button className="flex items-center justify-center px-5 py-3.5 bg-[#007aff] rounded-full hover:bg-[#0066d6] transition-colors">
          <span className="text-white text-base font-medium tracking-[-0.32px]">
            All programs
          </span>
        </button>

        <div className="flex gap-4 w-full h-[270px]">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} flex flex-col items-center justify-center p-6 rounded-xl flex-1 cursor-pointer hover:shadow-lg transition-shadow`}
            >
              <div className="flex flex-col gap-3 items-center">
                <div className={`${category.iconBgColor} size-20 rounded-full flex items-center justify-center`}>
                  {category.icon}
                </div>
                <div className="flex flex-col gap-1 items-center text-center">
                  <h3 className="text-[#18191b] text-xl font-bold leading-[30px]">
                    {category.name}
                  </h3>
                  <p className="text-[#52565b] text-sm font-normal leading-[21px]">
                    {category.programs}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full bg-[#9bd8a9] rounded-[20px] p-8 flex items-center justify-between relative overflow-hidden">
          <div className="flex items-center gap-6 flex-1">
            <LightningIcon />
            <div className="flex flex-col gap-1">
              <h3 className="text-[#1a1a1a] text-2xl font-semibold tracking-[-0.48px]">
                Best programs for you
              </h3>
              <p className="text-[rgba(26,26,26,0.65)] text-lg font-medium tracking-[-0.36px]">
                Answer a few questions and we'll match you with programs!
              </p>
            </div>
          </div>
          <button className="flex items-center justify-center px-5 py-3.5 bg-white rounded-full hover:bg-gray-50 transition-colors z-10">
            <span className="text-black text-base font-medium tracking-[-0.32px]">
              Get Started
            </span>
          </button>
          <div className="absolute right-0 top-[-100px] opacity-20">
            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 250C100 200 150 150 200 130C250 110 300 120 350 50" stroke="white" strokeWidth="40" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoriesSection
