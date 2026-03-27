const ArrowLeftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.833 10H4.167M4.167 10l5 5M4.167 10l5-5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const ArrowRightIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.167 10h11.666M15.833 10l-5 5M15.833 10l-5-5" stroke="#414651" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const Pagination = ({ currentPage = 1, totalPages = 10 }) => {
  const getPageNumbers = () => {
    const pages = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
      return pages
    }
    pages.push(1, 2, 3)
    if (currentPage > 4) pages.push("...")
    const middle = []
    for (let i = Math.max(4, currentPage - 1); i <= Math.min(totalPages - 2, currentPage + 1); i++) {
      if (!pages.includes(i)) middle.push(i)
    }
    pages.push(...middle)
    if (currentPage < totalPages - 3) pages.push("...")
    if (!pages.includes(totalPages - 1)) pages.push(totalPages - 1)
    if (!pages.includes(totalPages)) pages.push(totalPages)
    return [...new Set(pages)]
  }

  const pages = getPageNumbers()

  return (
    <div className="flex items-center justify-between pt-4">
      <button className="flex items-center gap-2 h-10 px-3 sm:px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
        <ArrowLeftIcon />
        <span className="text-[14px] font-semibold text-[#414651] leading-5 hidden sm:inline">
          Previous
        </span>
      </button>

      <div className="flex items-center gap-px">
        {pages.map((page, i) =>
          page === "..." ? (
            <span key={`dots-${i}`} className="size-8 sm:size-10 flex items-center justify-center text-[14px] text-[#717680]">
              ...
            </span>
          ) : (
            <button
              key={page}
              className={`size-8 sm:size-10 flex items-center justify-center rounded-lg text-[14px] font-medium leading-5 transition-colors ${
                page === currentPage
                  ? "bg-[#f5f5f5] text-[#181d27] font-semibold"
                  : "text-[#717680] hover:bg-[#f9f9f9]"
              }`}
            >
              {page}
            </button>
          )
        )}
      </div>

      <button className="flex items-center gap-2 h-10 px-3 sm:px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
        <span className="text-[14px] font-semibold text-[#414651] leading-5 hidden sm:inline">
          Next
        </span>
        <ArrowRightIcon />
      </button>
    </div>
  )
}

export default Pagination
