import { useState } from "react"
import CalendarTabs from "./CalendarTabs"
import CalendarHeader from "./CalendarHeader"
import CalendarGrid from "./CalendarGrid"
import WeeklyCalendarGrid from "./WeeklyCalendarGrid"
import DailyCalendarGrid from "./DailyCalendarGrid"

const CalendarSection = () => {
  const [activeTab, setActiveTab] = useState("All events")
  const [view, setView] = useState("month")

  return (
    <div className="flex flex-col gap-4 sm:gap-6">
      <h2 className="text-[18px] font-semibold text-[#181d27] leading-5">
        My calendar
      </h2>
      <CalendarTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <CalendarHeader view={view} onViewChange={setView} />
      {view === "month" && <CalendarGrid />}
      {view === "week" && <WeeklyCalendarGrid />}
      {view === "day" && <DailyCalendarGrid />}
    </div>
  )
}

export default CalendarSection
