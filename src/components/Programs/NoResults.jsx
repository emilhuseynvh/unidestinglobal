const imgSearch = "https://www.figma.com/api/mcp/asset/3f8f2115-4eb6-435e-8fec-bf5cb63e3d2d"

const popularSearches = [
  "UX Design", "UI Design", "3D Design", "Figma", "Typography",
  "Art", "Typography", "Web Design", "Art", "UX Design",
  "Research", "Figma",
]

const NoResults = ({ onClearFilters }) => {
  return (
    <div className="flex flex-col gap-16 items-center py-16">
      <div className="flex flex-col gap-8 items-center max-w-[584px]">
        <div className="flex flex-col gap-16 items-center w-full">
          <img src={imgSearch} alt="" className="w-[174px] h-auto" />
          <div className="flex flex-col gap-2 items-center w-full text-center">
            <h3 className="text-[20px] font-semibold text-black leading-[1.4]">
              No Results Found
            </h3>
            <p className="text-[16px] font-normal text-[#4d4d4d] leading-[1.4]">
              We couldn't find anything matching your search. Try adjusting your filters or search terms.
            </p>
          </div>
        </div>
        <button
          onClick={onClearFilters}
          className="border border-[#999] rounded-full px-5 py-3 text-[16px] font-semibold text-black leading-6 hover:bg-[#f5f5f5] transition-colors"
        >
          Clear all filters
        </button>
      </div>

      <div className="flex flex-col gap-4 items-center max-w-[584px]">
        <span className="text-[14px] font-medium text-[#808080] leading-[1.4] text-center">
          Popular searches
        </span>
        <div className="flex flex-wrap gap-4 items-center justify-center py-1">
          {popularSearches.map((tag, i) => (
            <button
              key={`${tag}-${i}`}
              className="bg-white border border-[#e6e6e6] rounded-full px-4 py-3 text-[14px] font-semibold text-[#333] leading-[1.4] hover:bg-[#f5f5f5] transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NoResults
