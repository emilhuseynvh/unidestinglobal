const CourseCardSkeleton = () => {
  return (
    <div className="rounded-2xl border border-[#e6e6e6] bg-white pb-5 flex flex-col animate-pulse">
      <div className="h-[173px] bg-[#e9eaeb] rounded-t-2xl" />
      <div className="flex flex-col gap-6 px-5 pt-3 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#e9eaeb]" />
            <div className="h-3 w-24 bg-[#e9eaeb] rounded" />
          </div>
          <div className="flex flex-col gap-2">
            <div className="h-3 w-32 bg-[#e9eaeb] rounded" />
            <div className="h-3 w-40 bg-[#e9eaeb] rounded" />
            <div className="h-4 w-full bg-[#e9eaeb] rounded mt-1" />
            <div className="h-3 w-full bg-[#e9eaeb] rounded" />
            <div className="h-3 w-3/4 bg-[#e9eaeb] rounded" />
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex gap-2">
            <div className="h-8 w-24 bg-[#e9eaeb] rounded-[15px]" />
            <div className="h-8 w-20 bg-[#e9eaeb] rounded-[15px]" />
          </div>
          <div className="flex items-center gap-2">
            <div className="h-5 w-12 bg-[#e9eaeb] rounded" />
            <div className="h-3 w-14 bg-[#e9eaeb] rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseCardSkeleton
