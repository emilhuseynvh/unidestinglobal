import { useState, useEffect } from "react"
import Footer from "../components/Footer"
import TutorHero from "../components/GuestTutors/TutorHero"
import TutorFilters from "../components/GuestTutors/TutorFilters"
import TutorCard from "../components/GuestTutors/TutorCard"
import TutorProfileCard from "../components/GuestTutors/TutorProfileCard"
import Pagination from "../components/student/MyCourses/Pagination"

const tutors = [
  {
    id: 1, name: "Lina C.", rating: "4.8",
    subtitle: "Biology and Chemistry Tutor",
    description: "Engaging lessons tailored for your learning style – Dive deep into organic and inorganic chemistry with fun experiments.",
    badges: ["Super Tutor", "Excellence Certified"],
    reviews: 15, students: 25, lessons: 120, price: "14.99",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=240&h=280&fit=crop&crop=face",
  },
  {
    id: 2, name: "James T.", rating: "4.8",
    subtitle: "Mathematics and Physics Instructor",
    description: "Master complex mathematical concepts through interactive problem-solving sessions and real-world applications.",
    badges: ["Top Rated", "Distinction Qualified"],
    reviews: 30, students: 45, lessons: 200, price: "18.99",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=240&h=280&fit=crop&crop=face",
  },
  {
    id: 3, name: "Sofia P.", rating: "4.8",
    subtitle: "English Language Coach",
    description: "Improve your fluency and comprehension with personalized lessons focusing on conversations and writing skills.",
    badges: ["Highly Recommended", "Language Expert"],
    reviews: 25, students: 30, lessons: 160, price: "16.99",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=240&h=280&fit=crop&crop=face",
  },
  {
    id: 4, name: "Daniel M.", rating: "4.8",
    subtitle: "History, Art & Social Studies Specialist",
    description: "Explore history through engaging storytelling in creating a critical analysis of events and their impacts.",
    badges: ["Outstanding Tutor", "Certified Educator"],
    reviews: 20, students: 36, lessons: 180, price: "15.99",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=240&h=280&fit=crop&crop=face",
  },
]

const Shimmer = ({ className }) => (
  <div className={`bg-[#e9eaeb] rounded animate-pulse ${className}`} />
)

const SkeletonCard = () => (
  <div className="bg-[#f5f5f5] border border-[#e6e6e6] rounded-2xl p-4 flex gap-4 animate-pulse">
    <Shimmer className="w-40 h-36 rounded-lg shrink-0" />
    <div className="flex-1 flex flex-col gap-3">
      <Shimmer className="h-6 w-32" />
      <Shimmer className="h-4 w-48" />
      <Shimmer className="h-4 w-full max-w-[360px]" />
      <div className="flex gap-2">
        <Shimmer className="h-6 w-20 rounded-md" />
        <Shimmer className="h-6 w-28 rounded-md" />
      </div>
      <div className="flex gap-4">
        <Shimmer className="h-4 w-20" />
        <Shimmer className="h-4 w-24" />
        <Shimmer className="h-4 w-20" />
      </div>
    </div>
    <Shimmer className="h-6 w-24 shrink-0" />
  </div>
)

const FilterTags = () => (
  <div className="flex flex-wrap items-center gap-2">
    <span className="flex items-center gap-1.5 bg-[#007aff] text-white text-[13px] font-medium px-3 py-1.5 rounded-full">
      Economics <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="flex items-center gap-1.5 bg-[#007aff] text-white text-[13px] font-medium px-3 py-1.5 rounded-full">
      $100 - $350 <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <span className="flex items-center gap-1.5 bg-[#007aff] text-white text-[13px] font-medium px-3 py-1.5 rounded-full">
      English <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M9 3L3 9M3 3l6 6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
    </span>
    <button className="text-[13px] font-medium text-[#717680] hover:text-[#414651] transition-colors">Clear all</button>
  </div>
)

const GuestTutors = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="px-4 sm:px-6 md:px-8 pt-2 sm:pt-4">
        <TutorHero />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 py-8 md:py-12 flex flex-col gap-8 w-full">

        <div className="flex items-center justify-between">
          <span className="text-[14px] text-[#717680] leading-5">Showing 950 tutors</span>
          <div className="flex items-center gap-2">
            <span className="text-[13px] text-[#717680]">Sort by:</span>
            <button className="flex items-center gap-1 text-[14px] font-medium text-[#181d27] leading-5">
              Most Popular
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>

        <div className="flex gap-4 lg:gap-6 items-start">
          <div className="hidden lg:block">
            <TutorFilters />
          </div>

          <div className="flex-1 flex flex-col gap-4 min-w-0">
            {loading ? (
              <>
                <FilterTags />
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </>
            ) : (
              <>
                {tutors.map((tutor) => (
                  <TutorCard key={tutor.id} tutor={tutor} />
                ))}
                <Pagination currentPage={1} totalPages={10} />
              </>
            )}
          </div>

          {!loading && <TutorProfileCard />}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GuestTutors
