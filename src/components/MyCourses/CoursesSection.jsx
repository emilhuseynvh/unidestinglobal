import { useState } from "react"
import VerticalTabs from "./VerticalTabs"
import FiltersBar from "./FiltersBar"
import FilterTags from "./FilterTags"
import CourseCard from "./CourseCard"
import Pagination from "./Pagination"

const courses = [
  {
    id: 1,
    title: "Spanish Speaking",
    group: "Group 8B",
    badgeType: "live",
    badgeLabel: "Live",
    progress: 85,
    instructor: {
      name: "Maria Gonzalez",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&h=96&fit=crop&crop=face",
    },
    date: "15 Feb 2022",
    time: "14:00 - 15:00",
    action: "join",
  },
  {
    id: 2,
    title: "Mandarin Speaking",
    group: "Group 9A",
    badgeType: "warning",
    badgeLabel: "Left 4 days",
    progress: 85,
    instructor: {
      name: "Li Wei",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
    },
    date: "16 Feb 2022",
    time: "10:00 - 11:00",
    action: "remind",
  },
  {
    id: 3,
    title: "French Speaking",
    group: "Group 7C",
    badgeType: "danger",
    badgeLabel: "Left 2 days",
    progress: 85,
    instructor: {
      name: "Jean Dupont",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    },
    date: "17 Feb 2022",
    time: "13:00 - 14:00",
    action: "remind",
  },
  {
    id: 4,
    title: "Spanish Speaking",
    group: "Group 8B",
    badgeType: "live",
    badgeLabel: "Live",
    progress: 85,
    instructor: {
      name: "Maria Gonzalez",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=96&h=96&fit=crop&crop=face",
    },
    date: "15 Feb 2022",
    time: "14:00 - 15:00",
    action: "join",
  },
  {
    id: 5,
    title: "Mandarin Speaking",
    group: "Group 9A",
    badgeType: "warning",
    badgeLabel: "Left 4 days",
    progress: 85,
    instructor: {
      name: "Li Wei",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=96&h=96&fit=crop&crop=face",
    },
    date: "16 Feb 2022",
    time: "10:00 - 11:00",
    action: "remind",
  },
  {
    id: 6,
    title: "French Speaking",
    group: "Group 7C",
    badgeType: "danger",
    badgeLabel: "Left 2 days",
    progress: 85,
    instructor: {
      name: "Jean Dupont",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=96&h=96&fit=crop&crop=face",
    },
    date: "17 Feb 2022",
    time: "13:00 - 14:00",
    action: "remind",
  },
]

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState("all")

  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-[18px] font-semibold text-[#181d27] leading-5">
          My courses
        </h2>
        <p className="text-[14px] text-[#717680] leading-5 mt-1">
          Continue watching the courses you have already started watching.
        </p>
      </div>

      <div className="lg:hidden">
        <VerticalTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="hidden lg:block">
          <VerticalTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <FiltersBar />

          <div className="mt-4 sm:mt-6">
            <FilterTags />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-4 sm:mt-6">
            {courses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>

          <div className="mt-5">
            <Pagination currentPage={1} totalPages={10} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursesSection
