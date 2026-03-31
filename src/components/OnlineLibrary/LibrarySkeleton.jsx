const Shimmer = ({ className }) => (
  <div className={`bg-[#e9eaeb] rounded animate-pulse ${className}`} />
)

const SkeletonMetric = () => (
  <div className="flex flex-col gap-3 animate-pulse">
    <Shimmer className="w-[75px] h-px" />
    <Shimmer className="h-12 w-24" />
    <Shimmer className="h-5 w-20" />
  </div>
)

const SkeletonCategory = () => (
  <div className="rounded-xl h-[270px] bg-[#f5f5f5] animate-pulse flex flex-col items-center justify-center gap-3 p-6">
    <Shimmer className="size-20 rounded-full" />
    <Shimmer className="h-6 w-28" />
    <Shimmer className="h-4 w-20" />
  </div>
)

const SkeletonFilter = () => (
  <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 pt-6 pb-8 animate-pulse">
    <Shimmer className="h-7 w-20 mb-6" />
    <div className="flex flex-col gap-8">
      {[1, 2, 3].map((section) => (
        <div key={section} className="flex flex-col gap-4">
          <Shimmer className="h-5 w-24" />
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Shimmer className="size-5 rounded" />
                <Shimmer className="h-4 w-28" />
              </div>
              <Shimmer className="h-4 w-10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  </div>
)

const SkeletonCard = () => (
  <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-4 flex flex-col gap-6 animate-pulse">
    <Shimmer className="w-full h-[188px] rounded-lg" />
    <div className="flex items-center gap-2">
      <Shimmer className="h-6 w-16 rounded-full" />
      <Shimmer className="h-6 w-14 rounded-full" />
      <Shimmer className="h-5 w-24" />
    </div>
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <Shimmer className="h-6 w-full" />
        <Shimmer className="h-6 w-3/4" />
        <div className="flex items-center gap-2">
          <Shimmer className="size-8 rounded-full" />
          <Shimmer className="h-4 w-28" />
        </div>
        <div className="flex items-center gap-4">
          <Shimmer className="h-4 w-20" />
          <Shimmer className="h-4 w-20" />
        </div>
      </div>
      <div className="flex items-center gap-1">
        <Shimmer className="h-7 w-24 rounded" />
        <Shimmer className="h-7 w-20 rounded" />
        <Shimmer className="h-7 w-16 rounded" />
      </div>
    </div>
    <Shimmer className="h-12 w-[150px] rounded-lg" />
  </div>
)

const LibrarySkeleton = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <div className="px-4 sm:px-6 pt-6">
      <Shimmer className="w-full h-[500px] rounded-[26px]" />
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
      <div className="py-16 flex flex-wrap justify-between gap-8">
        {[1, 2, 3, 4].map((i) => (
          <SkeletonMetric key={i} />
        ))}
      </div>

      <div className="py-16">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center flex flex-col items-center gap-2">
            <Shimmer className="h-10 w-64" />
            <Shimmer className="h-5 w-96" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[1, 2, 3, 4].map((i) => (
              <SkeletonCategory key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>

    <div className="px-4 sm:px-6 md:px-10 lg:px-16">
      <div className="py-8">
        <div className="flex items-center justify-between mb-6 animate-pulse">
          <Shimmer className="h-5 w-40" />
          <Shimmer className="h-5 w-32" />
        </div>
        <div className="flex gap-8">
          <div className="hidden lg:block w-[280px] shrink-0">
            <SkeletonFilter />
          </div>
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default LibrarySkeleton
