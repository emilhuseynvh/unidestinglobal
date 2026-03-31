const Shimmer = ({ className }) => (
  <div className={`bg-[#e9eaeb] rounded animate-pulse ${className}`} />
)

const SkeletonCard = () => (
  <div className="bg-white border border-[#f5f5f5] rounded-2xl px-5 py-6 flex flex-col gap-6 animate-pulse">
    <div className="flex items-center gap-2">
      <Shimmer className="size-12 rounded-full" />
      <div className="flex flex-col gap-2 flex-1">
        <Shimmer className="h-5 w-32" />
        <Shimmer className="h-3 w-40" />
      </div>
    </div>
    <div className="flex flex-col gap-2">
      <Shimmer className="h-5 w-full" />
      <Shimmer className="h-3 w-full" />
      <Shimmer className="h-3 w-3/4" />
      <div className="flex items-center gap-2 mt-1">
        <Shimmer className="h-4 w-20" />
        <Shimmer className="size-1 rounded-full" />
        <Shimmer className="h-4 w-14" />
        <Shimmer className="size-1 rounded-full" />
        <Shimmer className="h-4 w-20" />
      </div>
    </div>
    <div className="flex gap-2">
      <Shimmer className="h-8 w-24 rounded-full" />
      <Shimmer className="h-8 w-20 rounded-full" />
    </div>
    <div className="flex flex-col gap-2">
      <Shimmer className="h-3 w-28" />
      <div className="flex items-center gap-2">
        <Shimmer className="h-7 w-20" />
        <Shimmer className="h-4 w-14" />
      </div>
    </div>
    <Shimmer className="h-10 w-full rounded-full" />
  </div>
)

const ActiveFilters = () => (
  <div className="flex items-center gap-3 flex-wrap">
    {["Economics", "On-campus", "English", "Online"].map((tag) => (
      <span key={tag} className="bg-[#eff6ff] text-[#007aff] text-[14px] font-medium leading-[1.4] px-3 py-1.5 rounded-full flex items-center gap-2">
        {tag}
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M10.5 3.5l-7 7M3.5 3.5l7 7" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    ))}
    <button className="text-[14px] font-normal text-[#999] leading-[1.4]">Clear all</button>
  </div>
)

const ProgramsSkeleton = () => (
  <div className="min-h-screen bg-white flex flex-col">
    <div className="px-4 sm:px-6 pt-6">
      <div className="bg-[#edd780] rounded-[32px] overflow-hidden">
        <div className="flex flex-col items-center gap-12 py-24 sm:py-28 px-4">
          <Shimmer className="h-16 w-[500px] max-w-full rounded-xl" />
          <Shimmer className="h-14 w-[766px] max-w-full rounded-full" />
        </div>
      </div>
    </div>

    <div className="px-4 sm:px-6 md:px-10 lg:px-16 py-8">
      <div className="flex items-center justify-between mb-4">
        <Shimmer className="h-5 w-36" />
        <Shimmer className="h-5 w-36" />
      </div>

      <div className="mb-6">
        <ActiveFilters />
      </div>

      <div className="flex gap-8">
        <div className="hidden lg:block w-[356px] shrink-0">
          <div className="bg-white border border-[#f5f5f5] rounded-2xl px-4 pt-6 pb-8 animate-pulse">
            <Shimmer className="h-7 w-16 mb-6" />
            {[1, 2, 3, 4, 5].map((s) => (
              <div key={s} className="flex flex-col gap-4 mb-8">
                <Shimmer className="h-5 w-28" />
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Shimmer className="size-5 rounded" />
                      <Shimmer className="h-4 w-36" />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 min-w-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ProgramsSkeleton
