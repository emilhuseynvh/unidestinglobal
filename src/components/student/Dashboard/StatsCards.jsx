const imgChartIcon = "https://www.figma.com/api/mcp/asset/2b417c1b-7cdd-4835-9655-885f67160cb7"
const imgChart = "https://www.figma.com/api/mcp/asset/d781d7e8-dedf-45f4-a181-7ad6b97a0ce9"
const imgChartIcon2 = "https://www.figma.com/api/mcp/asset/1eac6550-011f-46c3-a7a8-ee1f06cf3835"
const imgInfoIcon = "https://www.figma.com/api/mcp/asset/7b21efb5-562c-46cb-8e69-e46d299044ab"
const imgTrendingUp = "https://www.figma.com/api/mcp/asset/5f1fcef0-640f-42b2-97b2-619f0dd7b582"
const imgMoreIcon = "https://www.figma.com/api/mcp/asset/4a51a4c2-1678-461c-a0c9-a88c2065f1f7"

const barHeights = [24, 51, 30, 63, 100, 41, 51]

const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <div className="bg-[#e7f3ed] rounded-xl p-5 h-[215px] flex flex-col">
        <div className="flex items-start justify-between">
          <span className="text-[18px] font-medium text-[#0a0d11] leading-normal tracking-[-0.8px]">Total Spent</span>
          <img src={imgChartIcon} alt="" className="size-6" />
        </div>
        <div className="flex items-center gap-2 mt-1">
          <span className="text-[32px] font-semibold text-[#0a0d11] leading-normal tracking-[-0.8px]">$240</span>
          <span className="bg-[#d6e2dc] text-[#536a5e] text-[14px] font-semibold px-1.5 py-1 rounded leading-[1.5] tracking-[-0.2px]">
            +12% vs last month
          </span>
        </div>
        <div className="flex-1 relative mt-1">
          <img src={imgChart} alt="" className="absolute inset-0 size-full object-contain object-bottom" />
        </div>
      </div>

      <div className="bg-[#e6f3f9] border border-[#f5f5f5] rounded-xl p-5 h-[214px] flex flex-col">
        <div className="flex items-start justify-between">
          <span className="text-[18px] font-medium text-[#0a0d11] leading-normal tracking-[-0.8px]">Performance</span>
          <img src={imgChartIcon2} alt="" className="size-6" />
        </div>
        <div className="flex items-center gap-2 mt-1 pb-4">
          <span className="text-[32px] font-semibold text-[#0a0d11] leading-normal tracking-[-0.8px]">75 %</span>
          <img src={imgInfoIcon} alt="" className="size-5 opacity-50" />
        </div>
        <div className="flex-1 flex items-end gap-2">
          {barHeights.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col justify-end h-full relative">
              <div className="absolute inset-0 bg-[rgba(146,159,177,0.2)] opacity-50 rounded-xl" />
              <div className="relative bg-[#54abd3] rounded-xl" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#ede9fa] border border-[#f5f5f5] rounded-xl p-4 h-[214px] flex flex-col justify-between">
        <span className="text-[18px] font-medium text-[#0a0d11] leading-normal tracking-[-0.8px]">Active Courses</span>
        <div className="flex flex-col gap-2">
          <span className="text-[32px] font-semibold text-[#0a0d11] leading-normal tracking-[-0.8px]">45</span>
          <div className="bg-[#6349b8] h-6 flex items-center gap-0.5 pl-2 pr-3 rounded-full self-start">
            <img src={imgTrendingUp} alt="" className="size-4" />
            <span className="text-[14px] font-semibold text-white leading-[1.5] tracking-[-0.2px] pl-1">+5.2%</span>
          </div>
        </div>
      </div>

      <div className="bg-[#ffe4b0] border border-[#f5f5f5] rounded-xl p-4 h-[214px] flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <span className="text-[18px] font-medium text-[#0a0d11] leading-normal tracking-[-0.8px]">Upcoming Lessons</span>
          <img src={imgMoreIcon} alt="" className="size-6 cursor-pointer hover:opacity-70 transition-opacity" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[32px] font-semibold text-[#0a0d11] leading-normal tracking-[-0.8px]">3</span>
          <div className="bg-[#ae760a] h-6 flex items-center gap-0.5 pl-2 pr-3 rounded-full self-start">
            <img src={imgTrendingUp} alt="" className="size-4" />
            <span className="text-[14px] font-semibold text-white leading-[1.5] tracking-[-0.2px] pl-1">This week</span>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-[16px] text-[#535862] leading-[1.4]">
            Next Lesson: <span className="font-medium text-black">English Speaking</span>
          </p>
          <p className="text-[16px] text-[#535862] leading-[1.4]">
            Today - <span className="font-medium text-black">18:00 - 19:00</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default StatsCards
