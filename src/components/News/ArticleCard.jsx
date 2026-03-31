const ArticleCard = ({ article }) => {
  return (
    <div className="bg-white rounded-2xl p-4 flex flex-col gap-6 cursor-pointer group">
      <div className="w-full h-[200px] sm:h-[221px] rounded-lg overflow-hidden bg-[#f5f5f5]">
        <img src={article.image} alt={article.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-300" />
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="bg-[#f8f9fc] border border-[#d5d9eb] text-[#363f72] text-[14px] font-medium leading-5 px-2.5 py-0.5 rounded-full self-start">
            {article.category}
          </span>
          <h3 className="text-[18px] sm:text-[20px] font-medium text-black leading-[1.4] group-hover:text-[#007aff] transition-colors">
            {article.title}
          </h3>
          <p className="text-[14px] font-normal text-[#71717a] leading-[1.5] tracking-[-0.14px] line-clamp-2">
            {article.description}
          </p>
        </div>

        <div className="h-px bg-[#e9eaeb]" />

        <div className="flex items-center gap-3">
          <div className="size-12 rounded-full overflow-hidden shrink-0 relative">
            <img src={article.author.avatar} alt={article.author.name} className="size-full object-cover" />
            <div className="absolute bottom-0 right-0 size-4">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="5" fill="white"/>
                <path d="M8 1.333A1.26 1.26 0 009.173 2l.147.32a1.26 1.26 0 001.1.68h.347c.76 0 1.273.78.96 1.467l-.14.32a1.26 1.26 0 00.26 1.293l.233.26c.527.587.267 1.52-.487 1.747l-.333.1a1.26 1.26 0 00-.86.973l-.06.347c-.14.753-.98 1.14-1.627.727l-.286-.187a1.26 1.26 0 00-1.314 0l-.286.187c-.647.413-1.487.027-1.627-.727l-.06-.347a1.26 1.26 0 00-.86-.973l-.333-.1c-.754-.227-1.014-1.16-.487-1.747l.233-.26a1.26 1.26 0 00.26-1.293l-.14-.32c-.313-.687.2-1.467.96-1.467h.347a1.26 1.26 0 001.1-.68L6.827 2A1.26 1.26 0 008 1.333z" fill="#007AFF"/>
                <path d="M5.667 8l1.666 1.667L10.667 6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-[14px] font-medium text-black leading-[1.5] tracking-[-0.14px]">
              {article.author.name}
            </span>
            <div className="flex items-center gap-2 text-[14px] font-normal text-[#71717a] leading-[1.5] tracking-[-0.14px]">
              <span>{article.date}</span>
              <span>•</span>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ArticleCard
