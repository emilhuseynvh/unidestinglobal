const imgBezier = "https://www.figma.com/api/mcp/asset/4c9b2b87-4840-4d74-bf09-815a69ade0a9"
const imgColorSwatch = "https://www.figma.com/api/mcp/asset/4e65b760-5ca9-462b-af47-aff816b2bdaa"
const imgGrid3 = "https://www.figma.com/api/mcp/asset/49efd576-24b8-4a27-9899-c503e5f74516"
const imgCrop = "https://www.figma.com/api/mcp/asset/c7ebebc7-c057-47a1-9ded-d12b4c72fecc"

const categories = [
  { name: "Universities", count: 45, icon: imgBezier, bg: "#fff9f2", iconBg: "#fff0de" },
  { name: "Corporate", count: 18, icon: imgColorSwatch, bg: "#f1f5ff", iconBg: "#e8efff" },
  { name: "EdTech", count: 12, icon: imgGrid3, bg: "#fffcf1", iconBg: "#fff6d3" },
  { name: "Government", count: 6, icon: imgCrop, bg: "#f6fff8", iconBg: "#dcf4e2" },
]

const PartnerCategories = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="flex flex-col items-center gap-8">
        <div className="text-center flex flex-col gap-1">
          <h2 className="text-[28px] sm:text-[34px] font-bold text-[#18191b] leading-[48px]">
            Partner Category
          </h2>
          <p className="text-[16px] font-normal text-[#18191b] leading-6">
            See our most popular categories and attach with your prefer programs
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {categories.map((cat) => (
            <div
              key={cat.name}
              className="flex flex-col items-center justify-between p-6 rounded-xl h-[270px]"
              style={{ backgroundColor: cat.bg }}
            >
              <div className="flex flex-col items-center gap-3">
                <div
                  className="size-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: cat.iconBg }}
                >
                  <img src={cat.icon} alt={cat.name} className="size-8" />
                </div>
                <div className="flex flex-col items-center gap-1 text-center">
                  <span className="text-[20px] font-bold text-[#18191b] leading-[30px]">
                    {cat.name}
                  </span>
                  <span className="text-[14px] font-normal text-[#52565b] leading-[21px]">
                    {cat.count}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PartnerCategories
