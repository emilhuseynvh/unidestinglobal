import { useState } from "react"

const tabs = ["All", "Education", "Study Abroad", "Technology", "Tips & Tricks", "Platforms", "Events"]

const NewsTabs = () => {
  const [active, setActive] = useState("All")

  return (
    <div className="flex items-start gap-3 overflow-x-auto">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`flex items-center justify-center h-8 px-1 pb-3 text-[14px] font-semibold leading-5 whitespace-nowrap shrink-0 ${
            active === tab
              ? "text-[#007aff] border-b-2 border-[#007aff]"
              : "text-[#717680]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}

export default NewsTabs
