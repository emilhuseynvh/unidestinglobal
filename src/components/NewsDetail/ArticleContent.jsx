const imgHero = "https://www.figma.com/api/mcp/asset/d8880448-4ba5-43ed-b487-db9473941722"
const imgSecond = "https://www.figma.com/api/mcp/asset/ac4f9f5b-e51e-4c62-8cb9-afec98ce3713"

const tocItems = [
  { num: 1, label: "Introduction", active: true },
  { num: 2, label: "What Are Learning Path?" },
  { num: 3, label: "How AI Personalization Works" },
  { num: 4, label: "Key Features" },
  { num: 5, label: "Getting Started" },
  { num: 6, label: "Pricing & Availability" },
  { num: 7, label: "FAQ" },
]

const ArticleContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-16">
      <div className="flex flex-col gap-8 flex-1 min-w-0 max-w-[758px]">
        <div className="w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden bg-[#d9d9d9]">
          <img src={imgHero} alt="" className="size-full object-cover" />
        </div>

        <div className="h-px bg-[#dfe1e7]" />

        <div className="flex flex-col gap-4 text-[18px] font-normal text-[#666d80] leading-7">
          <p>
            After seven months of non-stop building, we're excited to announce{" "}
            <span className="text-[#3e6ff3]">Automations</span>, our powerful new feature that allows you to build and automate any process right inside of Tendly.
          </p>
          <p>
            Build systems that automatically route leads based on their potential, or auto identify customers based on their subscription and product usage data. Run AI-driven actions, perform complex calculations, auto-assign tasks to teammates and so much more.
          </p>
          <p>
            Plus, we've integrated with popular tools like Outreach, Slack, Mailchimp, Typeform and more to make your workflows even more dynamic. We can't wait for you to use it.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0d0d12] leading-[44px]">
            Automate, iterate, accelerate
          </h2>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            Your company is fast-growing and always changing. You need a CRM that helps you accelerate, not slow you down.
          </p>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            We've painstakingly-built Automations to be powerful enough to give you full control over your automation process to build incredible new systems. We've also made it's intuitive enough to work right out of the box. Here's how:
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-medium text-[#0d0d12] leading-8">
            A beautiful, powerful visual canvas
          </h3>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            With Automations, you can visualize and build out your GTM processes as fast as you can think. It's your toolbox for crafting complex workflows with drag-and-drop simplicity. Map your ideas, trigger actions and see your GTM systems come to life.
          </p>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            You can even build workflows in real-time with teammates, collaborating just as you would in Miro or FigJam.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-medium text-[#0d0d12] leading-8">
            Out-of-the-box power with templates
          </h3>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            Want a quick start with your automations? No problem. Easily implement pre-built workflows tailored for both sales-led and product-led strategies.
          </p>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            Dive into a library of over 20+{" "}
            <span className="text-[#3e6ff3]">ready-to-use templates</span>{" "}
            designed for your specific needs, from product-led growth to sales-led growth, RevOps, deal flow and beyond. Tweak them as you go to create your perfect automation setup.
          </p>
        </div>

        <div className="w-full h-[280px] sm:h-[360px] md:h-[400px] rounded-2xl overflow-hidden bg-[#d9d9d9]">
          <img src={imgSecond} alt="" className="size-full object-cover" />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[24px] font-medium text-[#0d0d12] leading-8">
            Integrations with Slack, Outreach, Mailchimp and more
          </h3>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            We know that automations and workflows can't happen in a vacuum – so that's why we've built five out-of-the-box integrations with some of the popular tools in today's stack, including Outreach, Slack, Mailchimp, MixMax, and Typeform.
          </p>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            We also have a "Send HTTP Request" block that allows you to send data to and trigger events in any other tool in your stack.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0d0d12] leading-[44px]">
            Tendly AI: Bring unstructured data into your automations
          </h2>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            When we were building out Automations, one key insight guided us: next-generation automation isn't just about replacing manual steps, it's also about amplifying human capabilities. What if you could automate tasks that require a human touch?
          </p>
          <p className="text-[18px] font-normal text-[#666d80] leading-7">
            Enter our AI blocks. These aren't just LLM prompt blocks – these are custom-built to seamlessly weave unstructured data directly into your workflows. The idea here is to turn AI into a tangible asset that make your GTM operations smarter and more efficient. Here's how:
          </p>
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-3 w-[380px] xl:w-[426px] shrink-0 sticky top-6">
        <h4 className="text-[18px] font-semibold text-[#0d0d12] leading-7 text-center">
          Table of content
        </h4>
        <div className="flex flex-col gap-3 px-2">
          {tocItems.map((item) => (
            <div key={item.num} className="flex items-center rounded-lg overflow-hidden cursor-pointer">
              <ol start={item.num} className={`list-decimal ml-6 text-[16px] font-normal leading-6 ${item.active ? "text-[#007aff]" : "text-[#666d80]"}`}>
                <li><span className="ml-1">{item.label}</span></li>
              </ol>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleContent
