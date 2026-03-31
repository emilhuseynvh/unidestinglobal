const Shimmer = ({ className }) => (
  <div className={`bg-[#e9eaeb] rounded animate-pulse ${className}`} />
)

const SkeletonCard = () => (
  <div className="bg-white rounded-2xl p-4 flex flex-col gap-6 animate-pulse">
    <Shimmer className="w-full h-[221px] rounded-lg" />
    <div className="flex flex-col gap-4">
      <Shimmer className="h-6 w-28 rounded-full" />
      <Shimmer className="h-6 w-full" />
      <Shimmer className="h-4 w-3/4" />
      <Shimmer className="h-px w-full" />
      <div className="flex items-center gap-3">
        <Shimmer className="size-12 rounded-full" />
        <div className="flex flex-col gap-2 flex-1">
          <Shimmer className="h-4 w-32" />
          <Shimmer className="h-3 w-40" />
        </div>
      </div>
    </div>
  </div>
)

const SkeletonTrending = () => (
  <div className="rounded-[32px] bg-white shadow-[0px_16px_40px_0px_rgba(26,26,26,0.1)] overflow-hidden animate-pulse">
    <div className="px-8 pt-10 pb-8 flex flex-col gap-4">
      <Shimmer className="h-8 w-40" />
      {[1, 2, 3].map((i) => (
        <Shimmer key={i} className="h-[173px] rounded-2xl" />
      ))}
    </div>
  </div>
)

const NewsSkeleton = () => (
  <div className="flex flex-col gap-8 md:gap-10">
    <div className="flex items-center gap-3 animate-pulse">
      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
        <Shimmer key={i} className="h-8 w-20 rounded-lg" />
      ))}
    </div>

    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-6 animate-pulse">
          <Shimmer className="h-8 w-40" />
          <Shimmer className="h-5 w-32" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {[1, 2, 3, 4].map((i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
      <div className="w-full lg:w-[380px] shrink-0">
        <SkeletonTrending />
      </div>
    </div>
  </div>
)

export default NewsSkeleton
