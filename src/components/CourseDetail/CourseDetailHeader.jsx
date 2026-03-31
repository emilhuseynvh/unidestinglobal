import { useState } from "react"

const tabs = ["Overview", "Course content", "Reviews", "About instructor"]

const CourseDetailHeader = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4">
        <p className="text-sm text-[#666]">
          <span className="hover:underline cursor-pointer">Development</span>
          {" > "}
          <span className="hover:underline cursor-pointer">Data Science</span>
          {" > "}
          <span className="text-[#333]">Artificial Intelligence (AI)</span>
        </p>
        <div className="h-px bg-[#e6e6e6]" />
      </div>
      <div className="flex flex-col gap-3 max-w-[804px]">
        <span className="inline-flex items-center px-2 py-1 rounded-full bg-[#f5f5f5] text-xs font-medium text-[#333] w-fit border border-[#e6e6e6]">
          Bestseller
        </span>
        <h1 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">
          UX Master Class: Enhancing User Experience for Optimal Design
        </h1>
      </div>
      <div className="border-b border-[#e9eaeb]">
        <div className="flex gap-3 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-1 pb-3 text-sm font-semibold whitespace-nowrap border-b-2 transition-colors ${
                activeTab === tab
                  ? "border-[#007aff] text-[#007aff]"
                  : "border-transparent text-[#717680] hover:text-[#333]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CourseDetailHeader
