const imgSparkle = "https://www.figma.com/api/mcp/asset/0d994bc6-a966-448d-9dbd-299bd26d7382"

const meta = [
  { label: "Feb 10, 2026" },
  { label: "6 min read" },
  { label: "34 comments" },
  { label: "8500 reviews" },
]

const ArticleHeader = () => {
  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col gap-8">
        <div className="flex items-center">
          <span className="text-[14px] font-medium text-[#333] leading-[1.4]">
            Development  &gt; Data Science &gt; Artificial Intelligence (AI)
          </span>
        </div>
        <div className="h-px bg-[#e9eaeb]" />
      </div>

      <div className="flex flex-col gap-2 max-w-[804px]">
        <span className="bg-[#f1f9f4] text-[#53a862] text-[12px] font-normal leading-[1.4] px-2 py-1 rounded-full self-start">
          Education
        </span>
        <h1 className="text-[26px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">
          UniDestin Launches AI-Powered Personalized Learning Paths for 2026
        </h1>
        <div className="flex flex-wrap gap-3 mt-1">
          {meta.map((item, i) => (
            <span key={i} className="bg-[#f5f5f5] rounded-3xl px-3 py-2.5 flex items-center gap-2 text-[14px] font-medium text-[#333] leading-[1.4]">
              <img src={imgSparkle} alt="" className="size-[18px]" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ArticleHeader
