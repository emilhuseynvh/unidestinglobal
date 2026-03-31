const imgImgLibLogo = "https://www.figma.com/api/mcp/asset/a15328eb-e8fc-436c-a53d-d32f70b04661"
const imgImgLibLogo1 = "https://www.figma.com/api/mcp/asset/91b63ac1-125c-43bd-b267-6e850ab3876e"
const imgImgLibLogo2 = "https://www.figma.com/api/mcp/asset/3c6ffeef-0555-4e73-8522-f4639c08a9f7"
const imgImgLibLogo3 = "https://www.figma.com/api/mcp/asset/efb2e334-11ef-4afa-987d-0b61d5870cb6"
const imgImgLibLogo4 = "https://www.figma.com/api/mcp/asset/ccc90114-9493-4cfb-b94a-f8bb3313a4ff"
const imgImgLibLogo5 = "https://www.figma.com/api/mcp/asset/db56452e-d07c-4ec4-8101-4ccccdeaafef"
const imgImgLibLogo6 = "https://www.figma.com/api/mcp/asset/cb3dc490-b14b-4678-b1d6-0edf7477e7e9"
const imgImgLibLogo7 = "https://www.figma.com/api/mcp/asset/2a01a4cf-5216-4143-bf6c-c2dbde3a04dd"
const imgImgLibLogo8 = "https://www.figma.com/api/mcp/asset/5fdd2b47-9db4-42d7-90c0-91566d1fec40"
const imgImgLibLogo9 = "https://www.figma.com/api/mcp/asset/59ef9de6-15d5-4147-8cbc-89358a9c1ca7"

const logos = [
  imgImgLibLogo,
  imgImgLibLogo1,
  imgImgLibLogo2,
  imgImgLibLogo3,
  imgImgLibLogo4,
  imgImgLibLogo5,
  imgImgLibLogo6,
  imgImgLibLogo7,
  imgImgLibLogo8,
  imgImgLibLogo9
]

const PartnersSection = () => {
  return (
    <section className="w-[1312px] mx-auto py-10 px-8">
      <div className="flex flex-col gap-5 items-center max-w-[1204px] mx-auto">
        <p className="text-[#4b5162] text-base font-normal text-center opacity-80 leading-[1.6]">
          Trusted by 13,000+ universities worldwide
        </p>

        <div className="flex flex-wrap items-center justify-center gap-10 py-5 w-full">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="w-[187px] h-12 relative shrink-0"
            >
              <img
                src={logo}
                alt={`Partner logo ${index + 1}`}
                className="absolute block max-w-none size-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
