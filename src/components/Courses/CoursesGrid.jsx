import { useState, useEffect } from "react"
import CourseCard from "./CourseCard"
import CourseCardSkeleton from "./CourseCardSkeleton"
import Pagination from "../student/MyCourses/Pagination"

const allCourses = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  image: `https://images.unsplash.com/photo-${["1581291518857-4e27b48ff24e", "1558655146-9f40138edfeb", "1573164713988-8665fc963095", "1516321318423-f06f85e504b3", "1522202176988-66273c2fd55f", "1531482615713-2afd69097998", "1503676260728-1c00da094a0b", "1454165804606-c3d57bc86b40", "1517245386807-bb43f82c33c4"][i]}?w=400&h=200&fit=crop`,
  avatar: `https://i.pravatar.cc/48?img=${i + 20}`,
  author: ["Jasmine Patel", "Michael Chen", "Aisha Khan", "Jasmine Patel", "Michael Chen", "Aisha Khan", "Jasmine Patel", "Michael Chen", "Aisha Khan"][i],
  rating: [4.8, 4.6, 4.9, 4.8, 4.6, 4.9, 4.8, 4.6, 4.9][i],
  reviews: [120, 89, 156, 120, 89, 156, 120, 89, 156][i],
  lessons: [23, 15, 10, 23, 15, 10, 23, 15, 10][i],
  duration: ["5h 32m", "4h 15m", "3h 45m", "5h 32m", "4h 15m", "3h 45m", "5h 32m", "4h 15m", "3h 45m"][i],
  length: ["1 week", "2 weeks", "3 days", "1 week", "2 weeks", "3 days", "1 week", "3 weeks", "3 days"][i],
  title: ["Advanced Prototyping Techniques", "UI Design Fundamentals", "User Experience Research", "Advanced Prototyping Techniques", "UI Design Fundamentals", "User Experience Research", "Advanced Prototyping Techniques", "UI Design Fundamentals", "User Experience Research"][i],
  description: ["This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.", "A comprehensive course covering the principles of user interface design, from layouts to visual design.", "Explore methods for understanding user behavior and analyzing data to inform design decisions.", "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.", "A comprehensive course covering the principles of user interface design, from layouts to visual design.", "Explore methods for understanding user behavior and analyzing data to inform design decisions.", "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.", "A comprehensive course covering the principles of user interface design, from layouts to visual design.", "Explore methods for understanding user behavior and analyzing data to inform design decisions."][i],
  tags: [["Professional", "Top Rated"], ["Beginner", "Featured"], ["Intermediate", "Highly Rated"], ["Professional", "Top Rated"], ["Beginner", "Featured"], ["Intermediate", "Highly Rated"], ["Professional", "Top Rated"], ["Beginner", "Featured"], ["Intermediate", "Highly Rated"]][i],
  price: [45, 30, 60, 45, 30, 60, 45, 30, 60][i],
  oldPrice: [54.99, 39.99, 79.99, 54.99, 39.99, 79.99, 54.99, 39.99, 79.99][i],
}))

const activeFilters = [
  { label: "Economics", color: "bg-[#007aff]" },
  { label: "On-campus", color: "bg-[#007aff]" },
  { label: "English", color: "bg-[#007aff]" },
  { label: "Online", color: "bg-[#007aff]" },
]

const CoursesGrid = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="flex-1 min-w-0">
      <div className="flex flex-col gap-4 mb-6">
        <div className="flex items-center justify-between">
          <span className="text-sm text-[#666]">{loading ? "Showing..." : "Showing 160 tutors"}</span>
          <div className="flex items-center gap-1.5 text-sm">
            <span className="text-[#333]">Sort by:</span>
            <button className="flex items-center gap-1 font-semibold text-[#333]">
              Most Popular
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          {activeFilters.map((filter) => (
            <span key={filter.label} className={`${filter.color} text-white text-xs font-medium px-2.5 py-1 rounded-full flex items-center gap-1.5`}>
              {filter.label}
              <button className="hover:opacity-80">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </span>
          ))}
          <button className="text-xs text-[#666] hover:text-[#333]">Clear all</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading
          ? Array.from({ length: 9 }).map((_, i) => <CourseCardSkeleton key={i} />)
          : allCourses.map((course) => <CourseCard key={course.id} course={course} />)
        }
      </div>

      <div className="mt-10">
        <Pagination currentPage={currentPage} totalPages={10} />
      </div>
    </div>
  )
}

export default CoursesGrid
