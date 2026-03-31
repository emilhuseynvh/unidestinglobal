const imgHero = "https://www.figma.com/api/mcp/asset/2e479bcf-f7c0-4e9c-bd62-cab97d1d4f9b"

const sideArticles = [
  { badge: "Study Abroad", title: "2026 Turkey Scholarships Now Open — Application Guide", date: "Feb 8", time: "4 min", comments: "32" },
  { badge: "Platform Update", title: "New Interactive Whiteboard Features for Live Tutoring", date: "Mar 15", time: "3 min", comments: "45" },
  { badge: "Tips & Tricks", title: "10 IELTS Speaking Tips from Top-Rated Tutors", date: "Apr 22", time: "5 min", comments: "60" },
]

const CalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.333 1.333V3.333M10.667 1.333V3.333M2 6h12M3.333 2.667h9.334c.736 0 1.333.597 1.333 1.333v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#808080" strokeWidth="1.2"/><path d="M8 4.667V8l2 1" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const CommentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10a2 2 0 01-2 2H5.333L2 14.667V4a2 2 0 012-2h8a2 2 0 012 2v6z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const NewsHero = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 py-16 sm:py-22 w-full">
      <div className="flex-1 min-w-0 relative rounded-[32px] overflow-hidden border-4 border-white shadow-[0px_16px_48px_-4px_rgba(26,26,26,0.2)] min-h-[300px] sm:min-h-[340px] md:min-h-[400px]">
        <img src={imgHero} alt="Featured" className="absolute inset-0 size-full object-cover object-top" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 rounded-[32px]" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 flex flex-col gap-4 max-w-[571px]">
          <div className="flex flex-col gap-2">
            <span className="bg-[#f9f5ff] border border-[#e9d7fe] text-[#6941c6] text-[14px] font-medium leading-5 px-3 py-1 rounded-full self-start">
              Education
            </span>
            <h2 className="text-white text-[22px] sm:text-[28px] font-semibold leading-[1.4]">
              UniDestin Launches AI-Powered Personalized Learning Paths for 2026
            </h2>
            <p className="text-[#fafafa] text-[14px] sm:text-[16px] font-normal leading-[1.4]">
              Our new AI engine analyzes student progress, learning style, and goals to create custom study plans. Available for all enrolled students starting March 2026.
            </p>
          </div>
          <div className="flex items-center gap-4 text-[14px] font-medium text-white">
            <span className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.333 1.333V3.333M10.667 1.333V3.333M2 6h12M3.333 2.667h9.334c.736 0 1.333.597 1.333 1.333v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> Feb 8</span>
            <span className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.2"/><path d="M8 4.667V8l2 1" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> 4 min read</span>
            <span className="flex items-center gap-1"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10a2 2 0 01-2 2H5.333L2 14.667V4a2 2 0 012-2h8a2 2 0 012 2v6z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> 32 comments</span>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-auto shrink-0 bg-white rounded-[32px] shadow-[0px_16px_40px_0px_rgba(26,26,26,0.1)] overflow-hidden">
        <div className="border-b border-[rgba(26,26,26,0.1)] px-8 pt-10 pb-8 flex flex-col gap-4">
          {sideArticles.map((article, i) => (
            <div key={i} className="bg-white border border-[#e6e6e6] rounded-2xl p-4 h-auto flex flex-col justify-between cursor-pointer hover:border-[#d5d7da] transition-colors">
              <div className="flex flex-col gap-2">
                <span className="bg-[#f8f9fc] border border-[#d5d9eb] text-[#363f72] text-[14px] font-medium leading-5 px-2.5 py-0.5 rounded-full self-start">
                  {article.badge}
                </span>
                <h3 className="text-[16px] font-semibold text-[#333] leading-6">{article.title}</h3>
              </div>
              <div className="flex items-center gap-4 text-[14px] font-medium text-[#808080]">
                <span className="flex items-center gap-1"><CalIcon /> {article.date}</span>
                <span className="flex items-center gap-1"><ClockIcon /> {article.time}</span>
                <span className="flex items-center gap-1"><CommentIcon /> {article.comments}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NewsHero
