import { useState } from "react"

const imgTrash = "https://www.figma.com/api/mcp/asset/1388b5ab-2c25-445d-b7da-a20afb031c3e"

const lessons = [
  "Introduction to Figma",
  "Design Basics",
  "Creating and Editing Designs",
  "Working with Components",
  "Collaboration and Teamwork",
  "Prototyping and Interactions",
  "Design Systems and Libraries",
  "Creating design libraries",
  "Advanced Techniques and Features",
]

const CartItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="border border-[#e6e6e6] rounded-2xl p-4 flex flex-col gap-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="size-20 sm:size-25 rounded-xl overflow-hidden bg-[#f5f5f5] shrink-0">
            <img src={item.image} alt={item.title} className="size-full object-cover" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="bg-[#f1f9f4] text-[#53a862] text-[12px] font-medium leading-[1.4] px-2 py-1 rounded-full self-start whitespace-nowrap">
              TOP RATED
            </span>
            <h3 className="text-[16px] font-semibold text-[#333] leading-6">{item.title}</h3>
            <span className="text-[16px] font-semibold text-[#553efb] leading-6">${item.price}</span>
          </div>
        </div>
        <button className="size-6 flex items-center justify-center shrink-0 hover:opacity-70 transition-opacity">
          <img src={imgTrash} alt="Remove" className="size-full" />
        </button>
      </div>

      <div className="h-px bg-[#e6e6e6]" />

      <button
        onClick={() => setExpanded(!expanded)}
        className="flex items-center gap-1 self-start"
      >
        <span className="text-[16px] font-medium text-[#808080] leading-6">Course Details</span>
        <svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          className={`transition-transform ${expanded ? "rotate-180" : ""}`}
        >
          <path d="M5 7.5l5 5 5-5" stroke="#808080" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {expanded && (
        <div className="flex flex-col">
          {lessons.map((lesson, i) => (
            <div key={i} className="flex flex-col gap-1 py-3 border-t border-[#f0f0f0] first:border-t-0">
              <span className="text-[14px] sm:text-[16px] font-semibold text-[#181d27] leading-6">
                {i + 1}. {lesson}
              </span>
              <span className="text-[13px] sm:text-[14px] text-[#717680] leading-5">11min</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default CartItem
