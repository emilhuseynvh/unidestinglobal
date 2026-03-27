const imgExplore = "https://www.figma.com/api/mcp/asset/86025cee-b060-45d1-82cf-8f2b7c7e2ab2"
const imgFrame1116606966 = "https://www.figma.com/api/mcp/asset/64207637-9125-4cfb-811f-a343c17192d8"
const imgVuesaxBoldArrowDown = "https://www.figma.com/api/mcp/asset/8ee87cf3-4ec0-4998-a270-b12b0ea94b91"
const imgLine76 = "https://www.figma.com/api/mcp/asset/de3cee02-55b3-4503-9c34-183536d7c28f"
const imgVector8 = "https://www.figma.com/api/mcp/asset/b73cf0c6-a4c9-45d2-aaa7-7b2d04f0d8e8"
const imgVector9 = "https://www.figma.com/api/mcp/asset/b08011aa-84d5-458e-82f9-3ce1a1459042"
const imgEllipse75 = "https://www.figma.com/api/mcp/asset/50958529-ef5a-435a-9257-9610c1426af7"
const imgPlay = "https://www.figma.com/api/mcp/asset/11544df0-e85d-4588-8172-f0c3fce32d95"

const steps = [
  {
    number: "01",
    title: "Explore Programs",
    description: "Browse our diverse range of skill-based programs"
  },
  {
    number: "02",
    title: "Enroll & Learn",
    description: "Join interactive lessons with industry experts"
  },
  {
    number: "03",
    title: "Apply & Grow",
    description: "Use your new skills in real-world scenarios"
  }
]

const JourneySection = () => {
  return (
    <section className="max-w-[1440px] w-full mx-auto bg-white overflow-hidden relative h-[893px]">
      <div className="absolute left-[784px] top-[128px] w-[480px] h-[633px] rounded-[24px] overflow-hidden">
        <div className="absolute inset-0 bg-[#fafafa] rounded-[24px]" />
        <img
          src={imgFrame1116606966}
          alt="Students"
          className="absolute inset-0 w-full h-full object-cover rounded-[24px]"
        />
      </div>

      <div className="absolute left-[174px] top-[128px] w-[426px] flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <h2 className="text-[#1a1a1a] text-[48px] font-semibold leading-none tracking-[-1.92px]">
            Begin your study abroad journey
          </h2>
          <p className="text-[#141219] text-[18px] font-normal leading-normal">
            Self‑paced courses designed for students — created by tutors who've helped real applicants succeed.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              <div className="flex items-center justify-center size-[60px] bg-[#9bd8a9] rounded-[30px] shrink-0 p-[18px]">
                <img src={imgExplore} alt="explore" className="size-6" />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <span className="text-[#9bd8a9] text-base font-medium">
                  Step {step.number}
                </span>
                <p className="text-[#141219] text-[18px] font-normal">
                  {step.title} – {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute left-[720px] top-[527px] w-[235px] h-[280px] bg-white rounded-[24px] shadow-[-40px_40px_80px_0px_rgba(0,0,0,0.08)] overflow-hidden">
        <p className="absolute left-6 top-6 text-[#141219] text-base font-normal">
          8-15 Jan
        </p>
        <p className="absolute left-6 top-[234px] text-[#141219] text-base font-normal">
          New students
        </p>

        <div className="absolute left-6 top-[54px] flex items-center gap-2">
          <span className="text-[#141219] text-[18px] font-bold">Week</span>
          <img src={imgVuesaxBoldArrowDown} alt="arrow" className="size-4" />
        </div>

        <div className="absolute left-6 top-[98px] w-[186px] h-0 border-t border-[#e5e5e5]" />
        <div className="absolute left-6 top-[122px] w-[186px] h-0 border-t border-[#e5e5e5]" />
        <div className="absolute left-6 top-[146px] w-[186px] h-0 border-t border-[#e5e5e5]" />
        <div className="absolute left-6 top-[170px] w-[186px] h-0 border-t border-[#e5e5e5]" />
        <div className="absolute left-6 top-[194px] w-[186px] h-0 border-t border-[#e5e5e5]" />
        <div className="absolute left-6 top-[218px] w-[186px] h-0 border-t border-[#e5e5e5]" />

        <div className="absolute left-[33px] top-[141px] bg-[#ebf5ed] rounded-[24px] px-2 py-2 flex items-center justify-center">
          <span className="text-[#488d59] text-base font-medium">+60%</span>
        </div>

        <div className="absolute left-6 top-[95px] w-[137px] h-[117.571px]">
          <img src={imgVector8} alt="chart" className="absolute inset-0 w-full h-full" />
        </div>

        <div className="absolute left-[125px] top-[95px] w-[36.5px] h-[81px]">
          <img src={imgVector9} alt="chart line" className="absolute inset-0 w-full h-full" />
        </div>

        <div className="absolute left-[117px] top-[168px] size-4">
          <img src={imgEllipse75} alt="dot" className="absolute inset-0 w-full h-full" />
        </div>

        <div className="absolute left-[136px] top-[50px] size-6">
          <img src={imgPlay} alt="play" className="absolute inset-0 w-full h-full" />
        </div>

        <span className="absolute left-[191px] top-[201px] text-[#141219] text-base font-normal">0</span>
        <span className="absolute left-[191px] top-[155px] text-[#141219] text-base font-normal">2K</span>
        <span className="absolute left-[191px] top-[109px] text-[#141219] text-base font-normal">4K</span>
      </div>
    </section>
  )
}

export default JourneySection
