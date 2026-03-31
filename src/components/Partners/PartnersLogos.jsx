const logos = [
  { src: "https://www.figma.com/api/mcp/asset/c5d0ee30-63a1-479d-b80b-c8e451ea64e0", alt: "Partner 1" },
  { src: "https://www.figma.com/api/mcp/asset/951659e2-b9c0-4346-bb36-f6bee5d61e73", alt: "Partner 2" },
  { src: "https://www.figma.com/api/mcp/asset/c19160e0-2875-483d-b615-17dc20c866f1", alt: "Partner 3" },
  { src: "https://www.figma.com/api/mcp/asset/f3a215dc-03d2-4681-975f-67f884c20f49", alt: "Partner 4" },
  { src: "https://www.figma.com/api/mcp/asset/e9aeacb8-2067-4417-9d54-6c64a2192798", alt: "Partner 5" },
  { src: "https://www.figma.com/api/mcp/asset/bcdcfbcc-d948-4794-a4e4-54bc47e9988a", alt: "Partner 6" },
  { src: "https://www.figma.com/api/mcp/asset/0366673f-5d6e-4d3b-b25b-173a72897ab7", alt: "Partner 7" },
  { src: "https://www.figma.com/api/mcp/asset/ec1a18e1-02ef-449d-b270-0f9a79efd676", alt: "Partner 8" },
  { src: "https://www.figma.com/api/mcp/asset/156e1a06-c90c-41dc-8f4d-b0ee12a71a5e", alt: "Partner 9" },
  { src: "https://www.figma.com/api/mcp/asset/782d899d-bc76-44d7-8b60-91c8ffb7b3b5", alt: "Partner 10" },
]

const PartnersLogos = () => {
  return (
    <section className="py-10">
      <p className="text-[16px] font-normal text-[#4b5162] text-center leading-[1.6] opacity-80 mb-5">
        160,000+ customers in over 120 countries grow their businesses with Unidestin
      </p>
      <div className="flex flex-wrap items-center justify-center gap-10 py-5">
        {logos.map((logo, i) => (
          <div key={i} className="w-[187px] h-12 shrink-0">
            <img src={logo.src} alt={logo.alt} className="size-full object-contain" />
          </div>
        ))}
      </div>
    </section>
  )
}

export default PartnersLogos
