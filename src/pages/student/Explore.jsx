import { useState, useEffect } from "react"
import HeroSection from "../../components/student/Explore/HeroSection"
import CourseList from "../../components/student/Explore/CourseList"

const SkeletonCard = () => (
  <div className="border border-[#e9eaeb] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 animate-pulse">
    <div className="w-full sm:w-[160px] md:w-[180px] h-[140px] sm:h-[160px] rounded-lg bg-[#e9eaeb] shrink-0" />
    <div className="flex-1 flex flex-col gap-3 min-w-0">
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1 flex flex-col gap-2">
          <div className="h-5 w-32 bg-[#e9eaeb] rounded" />
          <div className="h-4 w-full max-w-[400px] bg-[#f0f0f0] rounded" />
          <div className="h-4 w-3/4 max-w-[300px] bg-[#f0f0f0] rounded" />
        </div>
        <div className="h-6 w-16 bg-[#e9eaeb] rounded" />
      </div>
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-full bg-[#e9eaeb]" />
        <div className="h-4 w-24 bg-[#f0f0f0] rounded" />
      </div>
      <div className="flex gap-2">
        <div className="h-6 w-14 bg-[#f0f0f0] rounded" />
        <div className="h-6 w-16 bg-[#f0f0f0] rounded" />
        <div className="h-6 w-20 bg-[#f0f0f0] rounded" />
      </div>
      <div className="flex gap-4">
        <div className="h-4 w-16 bg-[#f0f0f0] rounded" />
        <div className="h-4 w-24 bg-[#f0f0f0] rounded" />
        <div className="h-4 w-20 bg-[#f0f0f0] rounded" />
        <div className="h-4 w-24 bg-[#f0f0f0] rounded" />
      </div>
    </div>
    <div className="flex flex-col items-center gap-1 shrink-0">
      <div className="size-14 sm:size-16 rounded-full bg-[#e9eaeb]" />
      <div className="h-3 w-12 bg-[#f0f0f0] rounded" />
    </div>
  </div>
)

const LoadingSkeleton = () => (
  <div className="flex flex-col gap-5 sm:gap-6">
    <div className="flex flex-col gap-2 animate-pulse">
      <div className="h-7 w-40 bg-[#e9eaeb] rounded" />
      <div className="h-4 w-72 bg-[#f0f0f0] rounded" />
    </div>
    <div className="flex items-center justify-between gap-3 animate-pulse">
      <div className="h-10 w-full max-w-[320px] sm:max-w-[360px] bg-[#f0f0f0] rounded-lg" />
      <div className="flex gap-2">
        <div className="h-10 w-10 sm:w-24 bg-[#f0f0f0] rounded-lg" />
        <div className="h-10 w-10 sm:w-20 bg-[#f0f0f0] rounded-lg" />
      </div>
    </div>
    <div className="flex flex-col gap-3 sm:gap-4">
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
)

const Explore = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-12">
        <HeroSection />
        {loading ? <LoadingSkeleton /> : <CourseList />}
      </div>
    </section>
  )
}

export default Explore
