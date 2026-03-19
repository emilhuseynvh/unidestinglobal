const imgVision = "https://www.figma.com/api/mcp/asset/29562a75-db3a-4de0-9ca1-1b805d120a04"
const imgMission = "https://www.figma.com/api/mcp/asset/d6767322-4ca9-473a-99a3-7ab6e5c9675c"
const imgIconVision = "https://www.figma.com/api/mcp/asset/36b40d65-2a31-47e8-9181-88ed493e267f"
const imgIconMission = "https://www.figma.com/api/mcp/asset/a6839f7e-925e-4304-b49c-5a04760e422b"
const imgScribble = "https://www.figma.com/api/mcp/asset/3f7e9b4a-10f4-4d04-8d7b-bed1084ac5bd"

const VisionMissionSection = () => {
  return (
    <section className="bg-[#f8f8f8] flex gap-[35px] items-start p-[64px] rounded-[32px] w-full relative mt-[24px]">
      <div className="flex flex-col items-start w-[473px]">
        <h2 className="font-semibold leading-[1.4] text-[48px] text-[#111] w-full">
          The Future We Imagine & How We Work
        </h2>
      </div>

      <div className="flex flex-col gap-[24px] items-start flex-1">
        <div className="bg-white flex gap-[24px] items-start p-[24px] rounded-[12px] w-full">
          <div className="flex-1 h-[240px] rounded-[4px] overflow-hidden">
            <img src={imgVision} alt="" className="object-cover size-full" />
          </div>
          <div className="flex flex-col items-start justify-between flex-1 h-[240px]">
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="overflow-hidden size-[24px]">
                <img src={imgIconVision} alt="" className="size-full" />
              </div>
              <p className="font-normal leading-[1.2] text-[24px] text-[#111] tracking-[-0.24px]">
                Vision
              </p>
            </div>
            <p className="font-normal leading-[1.4] text-[16px] text-[#555] w-full">
              To make mental health support accessible, kind, and stigma-free, so more people feel safe to ask for help and grow with confidence.
            </p>
          </div>
        </div>

        <div className="bg-white flex gap-[24px] items-start p-[24px] rounded-[12px] w-full">
          <div className="flex flex-col items-start justify-between flex-1 h-[240px]">
            <div className="flex flex-col gap-[12px] items-start w-full">
              <div className="overflow-hidden size-[24px]">
                <img src={imgIconMission} alt="" className="size-full" />
              </div>
              <p className="font-normal leading-[1.2] text-[24px] text-[#111] tracking-[-0.24px]">
                Mission
              </p>
            </div>
            <p className="font-normal leading-[1.4] text-[16px] text-[#555] w-full">
              To provide compassionate, evidence-based therapy that normalizes mental health conversations and supports everyday resilience.
            </p>
          </div>
          <div className="flex-1 h-[240px] rounded-[4px] overflow-hidden">
            <img src={imgMission} alt="" className="object-cover size-full" />
          </div>
        </div>
      </div>

      <div className="absolute left-[157px] top-[328px] size-[287px] flex items-center justify-center">
        <div className="rotate-[104deg] -scale-y-100">
          <img src={imgScribble} alt="" className="size-[120px] opacity-50" />
        </div>
      </div>
    </section>
  )
}

export default VisionMissionSection
