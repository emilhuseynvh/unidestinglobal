const ResourceCard = ({ resource }) => {
  return (
    <div className="bg-[#fafafa] border border-[#e4e4e7] rounded-2xl p-4 flex flex-col gap-6 group">
      <div className="relative w-full h-[188px] rounded-lg overflow-hidden bg-white">
        <img
          src={resource.image}
          alt={resource.title}
          className="size-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <button className="absolute top-4 right-4 bg-white border border-[#e4e4e7] rounded-lg size-12 flex items-center justify-center hover:bg-gray-50 transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M14.167 2.5H5.833A1.667 1.667 0 004.167 4.167v13.75l5.833-3.75 5.833 3.75V4.167A1.667 1.667 0 0014.167 2.5z" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <div className="flex items-center gap-2 opacity-80 flex-wrap">
        <span className={`text-[14px] font-medium leading-5 px-2.5 py-0.5 rounded-full border ${resource.categoryColor}`}>
          {resource.category}
        </span>
        <span className="text-[14px] font-medium leading-5 px-2.5 py-0.5 rounded-full border bg-[#fafafa] border-[#e9eaeb] text-[#414651]">
          {resource.isFree ? "FREE" : "Premium"}
        </span>
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.667l2.583 5.25 5.75.833-4.166 4.083.983 5.75L10 14.792l-5.15 2.791.983-5.75L1.667 7.75l5.75-.833L10 1.667z" fill="#F5B731"/>
          </svg>
          <span className="text-[14px] font-normal text-[#555] leading-[1.5] tracking-[-0.14px]">
            {resource.rating}<span className="text-black"> ({resource.reviews})</span>
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-medium text-black leading-6 group-hover:text-[#1770dc] transition-colors">
            {resource.title}
          </h3>
          <div className="flex items-center gap-2">
            <img src={resource.author.avatar} alt={resource.author.name} className="size-8 rounded-full object-cover" />
            <span className="text-[14px] font-medium text-black leading-[1.4]">{resource.author.name}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1 py-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 1.333A6.667 6.667 0 1014.667 8 6.674 6.674 0 008 1.333zm2.467 8.534a.667.667 0 01-.92.193L7.88 8.933a.667.667 0 01-.307-.56V4.667a.667.667 0 111.334 0v3.386l1.367.893a.667.667 0 01.193.92z" fill="#808080"/>
              </svg>
              <span className="text-[14px] font-medium text-[#808080] leading-[1.4]">{resource.downloads}</span>
            </div>
            <div className="flex items-center gap-1 py-1">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M14 4.667l-4.667 4.666L6.667 6.667 2 11.333" stroke="#808080" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-[14px] font-medium text-[#808080] leading-[1.4]">{resource.pages}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          <span className="bg-[#f4f4f5] text-[14px] font-normal text-black opacity-80 leading-[1.5] tracking-[-0.14px] px-2 py-1 rounded">
            {resource.format}
          </span>
          <div className="size-1.5 rounded-full bg-[#d9d9d9]" />
          <span className="bg-[#f4f4f5] text-[14px] font-normal text-black opacity-80 leading-[1.5] tracking-[-0.14px] px-2 py-1 rounded">
            {resource.level}
          </span>
          <div className="size-1.5 rounded-full bg-[#d9d9d9]" />
          <span className="bg-[#f4f4f5] text-[14px] font-normal text-black opacity-80 leading-[1.5] tracking-[-0.14px] px-2 py-1 rounded">
            {resource.language}
          </span>
        </div>
      </div>

      <button className="bg-[#1770dc] text-white rounded-lg w-[150px] h-12 flex items-center justify-center gap-2 text-[16px] font-semibold leading-[1.6] tracking-[-0.16px] hover:bg-[#1260c0] transition-colors mt-auto">
        {resource.price || "Download"}
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M4.167 10h11.666M10 4.167L15.833 10 10 15.833" stroke="white" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default ResourceCard
