const CalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.333 1.333V3.333M10.667 1.333V3.333M2 6h12M3.333 2.667h9.334c.736 0 1.333.597 1.333 1.333v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#808080" strokeWidth="1.2"/><path d="M8 4.667V8l2 1" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)
const CommentIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10a2 2 0 01-2 2H5.333L2 14.667V4a2 2 0 012-2h8a2 2 0 012 2v6z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const trending = [
  { badge: "Study Abroad", title: "2026 Turkey Scholarships Now Open — Application Guide", date: "Feb 8", time: "4 min", comments: "32" },
  { badge: "Platform Update", title: "New Interactive Whiteboard Features for Live Tutoring", date: "Mar 15", time: "3 min", comments: "45" },
  { badge: "Tips & Tricks", title: "10 IELTS Speaking Tips from Top-Rated Tutors", date: "Apr 22", time: "5 min", comments: "60" },
]

const TrendingSidebar = () => {
  return (
    <div className="flex flex-col shrink-0 bg-white rounded-[32px] shadow-[0px_16px_40px_0px_rgba(26,26,26,0.1)] overflow-hidden self-start">
      <div className="border-b border-[rgba(26,26,26,0.1)] px-8 pt-10 pb-8 flex flex-col gap-4">
        <h3 className="text-[24px] font-semibold text-[#18191b] leading-8">Trending Now</h3>

        {trending.map((item, i) => (
          <div key={i} className="bg-white border border-[#e6e6e6] rounded-2xl p-4 h-[173px] flex flex-col justify-between cursor-pointer hover:border-[#d5d7da] transition-colors">
            <div className="flex flex-col gap-2">
              <span className="bg-[#f8f9fc] border border-[#d5d9eb] text-[#363f72] text-[14px] font-medium leading-5 px-2.5 py-0.5 rounded-full self-start">
                {item.badge}
              </span>
              <h4 className="text-[16px] font-semibold text-[#333] leading-6">{item.title}</h4>
            </div>
            <div className="flex items-center gap-4 text-[14px] font-medium text-[#808080]">
              <span className="flex items-center gap-1"><CalIcon /> {item.date}</span>
              <span className="flex items-center gap-1"><ClockIcon /> {item.time}</span>
              <span className="flex items-center gap-1"><CommentIcon /> {item.comments}</span>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default TrendingSidebar
