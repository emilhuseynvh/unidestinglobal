const imgImage = "https://www.figma.com/api/mcp/asset/8a0121ed-c249-4761-8253-dd9318da0d8f"

const stats = [
  { number: "54M", description: "Students already enroll for using it." },
  { number: "3.2K+", description: "Courses are available with various categories." },
  { number: "600", description: "Experienced author who will teach you." }
]

const ImpactSection = () => {
  return (
    <section className="bg-[#dee8e0] flex items-start justify-between px-[64px] py-[128px] rounded-[32px] w-full">
      <div className="flex flex-col gap-[24px] items-start max-w-[768px] w-[473px]">
        <h2 className="font-semibold leading-[1.4] text-[48px] text-black w-full">
          Creating impact around the world
        </h2>
        <p className="font-normal leading-[1.4] text-[20px] text-[#4d4d4d] w-full">
          With our global catalog spanning the latest skills and topics, people and organizations everywhere are able to adapt to change and thrive.
        </p>
      </div>

      <div className="flex gap-[64px] items-center">
        <div className="h-[322px] overflow-hidden rounded-[16px] w-[332px]">
          <img
            src={imgImage}
            alt=""
            className="object-cover size-full"
          />
        </div>

        <div className="flex flex-col h-[322px] items-start justify-between w-[210px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col gap-[4px] items-start w-full">
              <p className="leading-[1.2] text-[#252525] text-[32px] font-medium whitespace-nowrap">
                {stat.number}
              </p>
              <p className="font-normal leading-[1.5] text-[#7c7c7c] text-[16px]">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ImpactSection
