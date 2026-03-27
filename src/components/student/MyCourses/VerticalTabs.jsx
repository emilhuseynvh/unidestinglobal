import { useNavigate } from "react-router"

const tabs = [
  { label: "All Courses", value: "all" },
  { label: "Today", value: "today" },
  { label: "Active Courses", value: "active" },
  { label: "Past Lessons", value: "past" },
  { label: "My Scheldue", value: "schedule", path: "/student/schedule" },
  { label: "My list", value: "list" },
]

const VerticalTabs = ({ activeTab, onTabChange }) => {
  const navigate = useNavigate()

  const handleClick = (tab) => {
    if (tab.path) {
      navigate(tab.path)
    } else {
      onTabChange(tab.value)
    }
  }

  return (
    <div className="flex lg:flex-col gap-1 overflow-x-auto lg:overflow-visible lg:w-[128px] lg:shrink-0 pb-2 lg:pb-0 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-10 md:px-10 lg:mx-0 lg:px-0">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => handleClick(tab)}
          className={`flex items-center h-9 px-3 py-2 text-[14px] font-semibold leading-[20px] whitespace-nowrap text-left transition-colors rounded-lg lg:rounded-none shrink-0 ${
            activeTab === tab.value
              ? "text-[#270afa] lg:border-l-2 lg:border-[#270afa] bg-[#f5f5ff] lg:bg-transparent"
              : "text-[#717680] hover:text-[#414651] hover:bg-[#f5f5f5] lg:hover:bg-transparent"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}

export default VerticalTabs
