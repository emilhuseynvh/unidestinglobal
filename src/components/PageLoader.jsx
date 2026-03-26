import { useState, useEffect } from "react"

const Shimmer = ({ className }) => (
  <div className={`bg-[#e9eaeb] rounded animate-pulse ${className}`} />
)

const DashboardSkeleton = () => (
  <div className="flex flex-col animate-pulse">
    <Shimmer className="h-40 sm:h-50 md:h-60 w-full rounded-none" />
    <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
      <div className="flex gap-4 sm:gap-6 items-start -mt-10 sm:-mt-14 md:-mt-20">
        <Shimmer className="size-20 sm:size-28 md:size-40 rounded-full shrink-0" />
        <div className="flex flex-col gap-2 pt-3 flex-1">
          <Shimmer className="h-7 w-64 max-w-full" />
          <Shimmer className="h-5 w-80 max-w-full" />
        </div>
      </div>
      <div className="flex flex-col gap-8 md:gap-10 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
          {[1, 2, 3, 4].map((i) => <Shimmer key={i} className="h-[214px] rounded-xl" />)}
        </div>
        <div className="flex flex-col gap-4">
          <Shimmer className="h-7 w-60" />
          <Shimmer className="h-[400px] rounded-xl" />
        </div>
        <div className="flex flex-col gap-4">
          <Shimmer className="h-7 w-40" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => <Shimmer key={i} className="h-80 rounded-xl" />)}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Shimmer className="h-7 w-52" />
          <Shimmer className="h-[250px] rounded-xl" />
        </div>
      </div>
    </div>
  </div>
)

const AchievementsSkeleton = () => (
  <div className="flex flex-col gap-6">
    <Shimmer className="h-8 w-52" />
    <div className="flex gap-3">
      <Shimmer className="h-9 w-28 rounded-lg" />
      <Shimmer className="h-9 w-20 rounded-lg" />
    </div>
    <div className="flex items-center justify-between gap-3">
      <Shimmer className="h-10 w-full max-w-[360px] rounded-lg" />
      <Shimmer className="h-10 w-20 rounded-lg" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="flex flex-col gap-3">
          <Shimmer className="aspect-[4/3] rounded-xl" />
          <Shimmer className="h-5 w-40" />
          <Shimmer className="h-4 w-48" />
        </div>
      ))}
    </div>
  </div>
)

const MyCoursesSkeleton = () => (
  <div className="flex flex-col gap-8 md:gap-12">
    <div className="flex flex-col gap-6">
      <Shimmer className="h-6 w-36" />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Shimmer className="h-[215px] flex-1 rounded-xl" />
        <Shimmer className="h-[215px] flex-1 rounded-xl" />
      </div>
    </div>
    <div className="flex flex-col gap-4">
      <div>
        <Shimmer className="h-6 w-32" />
        <Shimmer className="h-4 w-80 mt-2" />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16">
        <div className="flex lg:flex-col gap-2 lg:w-32">
          {[1, 2, 3, 4, 5, 6].map((i) => <Shimmer key={i} className="h-9 w-28 lg:w-full rounded-lg" />)}
        </div>
        <div className="flex-1 flex flex-col gap-6">
          <Shimmer className="h-[106px] rounded-xl" />
          <div className="flex gap-3">
            <Shimmer className="h-10 w-24 rounded-lg" />
            <Shimmer className="h-10 w-28 rounded-lg" />
            <Shimmer className="h-10 w-28 rounded-lg" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((i) => <Shimmer key={i} className="h-[316px] rounded-2xl" />)}
          </div>
        </div>
      </div>
    </div>
  </div>
)

const ScheduleSkeleton = () => (
  <div className="flex flex-col gap-8 md:gap-12">
    <div className="flex flex-col gap-6">
      <Shimmer className="h-6 w-36" />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <Shimmer className="h-[215px] flex-1 rounded-xl" />
        <Shimmer className="h-[215px] flex-1 rounded-xl" />
      </div>
    </div>
    <div className="flex flex-col gap-4 sm:gap-6">
      <Shimmer className="h-6 w-32" />
      <div className="flex gap-3">
        {[1, 2, 3, 4].map((i) => <Shimmer key={i} className="h-9 w-20 rounded-lg" />)}
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Shimmer className="size-12 rounded-xl" />
          <div className="flex flex-col gap-1">
            <Shimmer className="h-5 w-36" />
            <Shimmer className="h-4 w-48" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Shimmer className="h-10 w-10 rounded-lg" />
          <Shimmer className="h-10 w-32 rounded-lg" />
          <Shimmer className="h-10 w-28 rounded-lg" />
          <Shimmer className="h-10 w-28 rounded-lg" />
        </div>
      </div>
      <Shimmer className="h-[500px] rounded-xl" />
    </div>
  </div>
)

const skeletons = {
  dashboard: DashboardSkeleton,
  achievements: AchievementsSkeleton,
  mycourses: MyCoursesSkeleton,
  schedule: ScheduleSkeleton,
}

const PageLoader = ({ children, variant = "dashboard", duration = 1000 }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), duration)
    return () => clearTimeout(timer)
  }, [duration])

  if (loading) {
    const Skeleton = skeletons[variant]
    return <Skeleton />
  }

  return children
}

export default PageLoader
