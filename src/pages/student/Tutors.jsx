import { useState, useEffect } from "react"
import TutorFilters from "../../components/student/Tutors/TutorFilters"
import TutorList from "../../components/student/Tutors/TutorList"

const SkeletonCard = () => (
  <div className="border border-[#e9eaeb] rounded-xl p-3 sm:p-4 flex flex-col sm:flex-row gap-4 animate-pulse">
    <div className="w-full sm:w-[140px] md:w-[160px] h-[180px] sm:h-[160px] rounded-lg bg-[#e9eaeb] shrink-0" />
    <div className="flex-1 flex flex-col gap-3 min-w-0">
      <div className="h-5 w-28 bg-[#e9eaeb] rounded" />
      <div className="h-4 w-full max-w-[400px] bg-[#f0f0f0] rounded" />
      <div className="h-4 w-2/3 bg-[#f0f0f0] rounded" />
      <div className="flex gap-2">
        <div className="h-6 w-20 bg-[#f0f0f0] rounded" />
        <div className="h-6 w-28 bg-[#f0f0f0] rounded" />
      </div>
      <div className="flex gap-4">
        <div className="h-4 w-16 bg-[#f0f0f0] rounded" />
        <div className="h-4 w-24 bg-[#f0f0f0] rounded" />
        <div className="h-4 w-20 bg-[#f0f0f0] rounded" />
      </div>
    </div>
    <div className="flex sm:flex-col items-center sm:items-end gap-3 shrink-0">
      <div className="h-7 w-24 bg-[#e9eaeb] rounded" />
      <div className="h-10 w-28 bg-[#e9eaeb] rounded-full" />
    </div>
  </div>
)

const LoadingSkeleton = () => (
  <div className="flex flex-col gap-4 animate-pulse">
    <div className="flex justify-end">
      <div className="h-10 w-40 bg-[#f0f0f0] rounded-lg" />
    </div>
    <div className="flex flex-col gap-3 sm:gap-4">
      {[1, 2, 3, 4].map((i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  </div>
)

const Tutors = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full">
      
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-6 md:gap-8">
        <div>
          <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#181d27] leading-tight">
            Explore Tutors
          </h1>
          <p className="text-[14px] text-[#717680] leading-5 mt-1">
            Continue watching the courses you have already started watching.
          </p>
        </div>
        <TutorFilters />
        {loading ? <LoadingSkeleton /> : <TutorList />}
      </div>
    </section>
  )
}

export default Tutors
