const imgIcon1 = "https://www.figma.com/api/mcp/asset/6c0b36d4-5c3a-4c40-ae4b-ab397b2d9b7f"
const imgIcon2 = "https://www.figma.com/api/mcp/asset/2ac5bf9e-8f21-41f3-a692-d7821e99f854"
const imgIcon3 = "https://www.figma.com/api/mcp/asset/5d008ea3-e2da-4498-b534-da2c66c923b4"
const imgIcon4 = "https://www.figma.com/api/mcp/asset/ce70be72-78b1-4a60-b106-d94fb3166adc"
const imgIcon5 = "https://www.figma.com/api/mcp/asset/bbb82223-4f21-44d7-95f3-d49f77ff23e3"
const imgIcon6 = "https://www.figma.com/api/mcp/asset/8030a899-1315-4c93-bb53-70bc325320a6"

const features = [
  {
    icon: imgIcon1,
    title: "Share team inboxes",
    description: "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
  },
  {
    icon: imgIcon2,
    title: "Deliver instant answers",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
  },
  {
    icon: imgIcon3,
    title: "Manage your team with reports",
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  },
  {
    icon: imgIcon4,
    title: "Connect with customers",
    description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
  },
  {
    icon: imgIcon5,
    title: "Connect the tools you already use",
    description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive developer tools."
  },
  {
    icon: imgIcon6,
    title: "Our people make the difference",
    description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
  }
]

const FeaturesSection = () => {
  return (
    <section className="flex flex-col items-center py-[96px] w-full">
      <div className="flex flex-col items-start max-w-[1280px] px-[32px] w-full">
        <div className="flex flex-wrap gap-[64px_32px] items-start w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-[20px] items-center flex-1 min-w-[320px]">
              <div className="bg-white border border-[#e9eaeb] rounded-[10px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] size-[48px] flex items-center justify-center">
                <img src={feature.icon} alt="" className="size-[24px]" />
              </div>
              <div className="flex flex-col gap-[8px] items-center text-center w-full">
                <p className="font-semibold leading-[30px] text-[#181d27] text-[20px] w-full">
                  {feature.title}
                </p>
                <p className="font-normal leading-[24px] text-[#535862] text-[16px] w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
