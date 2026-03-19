const logos = [
  "https://www.figma.com/api/mcp/asset/0692da6e-03e4-4701-8cb2-99fe7c49c8ad",
  "https://www.figma.com/api/mcp/asset/5f1e263c-4926-42b8-9566-fc1272b7794b",
  "https://www.figma.com/api/mcp/asset/d4d67175-40b8-4eab-aeb3-5bd6eb033fe8",
  "https://www.figma.com/api/mcp/asset/5a5a09c6-b117-49d0-9c46-7abab4ba533f",
  "https://www.figma.com/api/mcp/asset/352a6165-9b13-47be-adf6-f5dfcf4209a6",
  "https://www.figma.com/api/mcp/asset/00163e80-da53-4bb9-8ef2-cb2c87f0dd06",
  "https://www.figma.com/api/mcp/asset/84c65b2f-3560-43c4-ba82-273b4c02d861",
  "https://www.figma.com/api/mcp/asset/16f2dbee-5425-40eb-9520-2ecc89046b68",
  "https://www.figma.com/api/mcp/asset/6150e468-f7ce-4ac8-b68e-030f34283aa7",
  "https://www.figma.com/api/mcp/asset/2ad36a0b-2318-4f7a-a1fa-1b33cbb0529c"
]

const PartnersSection = () => {
  return (
    <section className="flex flex-col items-center py-[40px] px-[32px] w-full">
      <div className="flex flex-col gap-[20px] items-center max-w-[1204px] w-full">
        <p className="font-normal leading-[1.6] opacity-80 text-[16px] text-[#4b5162] text-center w-full">
          160,000+ customers in over 120 countries grow their businesses with Unidestin
        </p>
        <div className="flex flex-wrap gap-[40px] items-center justify-center max-w-[1204px] py-[20px] w-full">
          {logos.map((logo, index) => (
            <div key={index} className="h-[48px] w-[187px] relative">
              <img src={logo} alt="" className="absolute block max-w-none size-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
