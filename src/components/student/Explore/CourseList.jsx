import CourseCard from "./CourseCard"
import Pagination from "../MyCourses/Pagination"

const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M17.5 17.5l-3.625-3.625M15.833 9.167a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#717680" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const FilterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 10h10M2.5 5h15M7.5 15h5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const SortIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M5 12.5l2.5 2.5 2.5-2.5M7.5 15V5M15 7.5L12.5 5 10 7.5M12.5 5v10" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const courses = [
  {
    id: 1,
    title: "Biology",
    rating: "4.5",
    description: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    instructor: { name: "Albert Flores", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" },
    type: "Group",
    mode: "Online",
    status: "Pending",
    daysLeft: "Left 3 days",
    days: "Wed / Fri",
    time: "18:00 - 19:00",
    frequency: "Every week",
    students: "5 / 7 students",
    price: "14.99",
    progress: 80,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=360&h=280&fit=crop",
  },
  {
    id: 2,
    title: "Chemistry",
    rating: "4.6",
    description: "Dive into the world of chemical reactions and compounds in this engaging and thorough course that blends theory with practical applications.",
    instructor: { name: "Maria Johnson", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" },
    type: "Individual",
    mode: "Online",
    status: "Pending",
    daysLeft: "Left 3 days",
    days: "Mon / Thu",
    time: "17:00 - 18:30",
    frequency: "Every week",
    students: "6 / 8 students",
    price: "19.99",
    progress: 80,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=360&h=280&fit=crop",
  },
  {
    id: 3,
    title: "Mathematics",
    rating: "4.7",
    description: "Explore the fundamentals of Algebra and Geometry through interactive lessons and problem-solving strategies that enhance analytical thinking.",
    instructor: { name: "Evelyn Carter", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=48&h=48&fit=crop&crop=face" },
    type: "Group",
    mode: "Offline",
    status: "Pending",
    daysLeft: null,
    days: "Tue / Thu",
    time: "15:00 - 16:30",
    frequency: "Every week",
    students: "5 / 10 students",
    price: "24.99",
    progress: 50,
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=360&h=280&fit=crop",
  },
  {
    id: 4,
    title: "Physics",
    rating: "4.6",
    description: "Unravel the mysteries of the universe in this captivating course that covers everything from classical mechanics to modern physics concepts.",
    instructor: { name: "David Smith", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" },
    type: "Individual",
    mode: "Online",
    status: "Course Closed",
    daysLeft: null,
    days: "Sun / Wed",
    time: "16:00 - 17:30",
    frequency: "Every week",
    students: "6 / 6 students",
    price: "22.99",
    progress: 100,
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=360&h=280&fit=crop",
  },
]

const CourseList = () => {
  return (
    <div className="flex flex-col gap-5 sm:gap-6">
      <div>
        <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#181d27] leading-tight">
          All courses
        </h2>
        <p className="text-[14px] text-[#717680] leading-5 mt-1">
          Continue watching the courses you have already started watching.
        </p>
      </div>

      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3 py-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full max-w-[320px] sm:max-w-[360px]">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search for courses"
            className="flex-1 min-w-0 text-[14px] sm:text-[16px] text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
          />
          <div className="hidden sm:block border border-[#e9eaeb] rounded px-1 py-px">
            <span className="text-[12px] font-medium text-[#717680] leading-[18px]">⌘K</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1.5 h-10 px-3 sm:px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
            <FilterIcon />
            <span className="hidden sm:inline text-[14px] font-semibold text-[#414651] leading-5">Filters</span>
          </button>
          <button className="flex items-center gap-1.5 h-10 px-3 sm:px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
            <SortIcon />
            <span className="hidden sm:inline text-[14px] font-semibold text-[#414651] leading-5">Sort</span>
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      <Pagination currentPage={1} totalPages={10} />
    </div>
  )
}

export default CourseList
