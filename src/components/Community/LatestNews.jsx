const mainArticle = {
  image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=500&h=300&fit=crop",
  category: "Education",
  readTime: "5 min read",
  title: "UniDestin Launches AI-Powered Study Recommendations for 2026",
  description: "Discover how CRM-driven segmentation can increase MQL conversion by up to 32%.",
  date: "Apr 22",
  duration: "5 min",
  comments: 60,
}

const sideArticles = [
  { category: "Study Abroad", color: "text-[#007aff]", title: "2026 Turkey Scholarships Now Open — Application Guide", date: "Feb 8", duration: "4 min", comments: 32 },
  { category: "Platform Update", color: "text-[#007aff]", title: "New Interactive Whiteboard Features for Live Tutoring", date: "Mar 15", duration: "3 min", comments: 45 },
  { category: "Tips & Tricks", color: "text-[#007aff]", title: "10 IELTS Speaking Tips from Top-Rated Tutors", date: "Apr 22", duration: "5 min", comments: 60 },
]

const LatestNews = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8">
      <div className="flex-1 min-w-0">
        <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4] mb-6">Latest News & Articles</h2>
        <div className="flex flex-col sm:flex-row gap-6">
          <div className="sm:w-1/2 flex flex-col gap-4">
            <div className="rounded-xl overflow-hidden h-[200px]">
              <img src={mainArticle.image} alt={mainArticle.title} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-[#007aff]">{mainArticle.category}</span>
                <span className="text-xs text-[#808080]">{mainArticle.readTime}</span>
              </div>
              <h3 className="text-lg font-semibold text-[#333] leading-[1.4]">{mainArticle.title}</h3>
              <p className="text-sm text-[#666] leading-[1.4]">{mainArticle.description}</p>
              <div className="flex items-center gap-3 text-xs text-[#808080]">
                <span className="flex items-center gap-1">📅 {mainArticle.date}</span>
                <span className="flex items-center gap-1">🕐 {mainArticle.duration}</span>
                <span className="flex items-center gap-1">💬 {mainArticle.comments}</span>
              </div>
            </div>
          </div>
          <div className="sm:w-1/2 flex flex-col gap-5">
            {sideArticles.map((article, i) => (
              <div key={i} className="flex flex-col gap-2 pb-5 border-b border-[#f0f0f0] last:border-0">
                <span className={`text-xs font-medium ${article.color}`}>{article.category}</span>
                <h4 className="text-base font-medium text-[#333] leading-[1.4]">{article.title}</h4>
                <div className="flex items-center gap-3 text-xs text-[#808080]">
                  <span>📅 {article.date}</span>
                  <span>🕐 {article.duration}</span>
                  <span>💬 {article.comments}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:w-[300px] shrink-0">
        <div className="bg-[#007aff] rounded-2xl px-6 py-10 flex flex-col gap-8 h-full">
          <div className="flex flex-col gap-4">
            <h3 className="text-2xl font-semibold text-white leading-8">Join the Community</h3>
            <p className="text-lg text-[#fafafa] leading-7">
              Create an account to participate in discussions, join study groups, and earn badges.
            </p>
          </div>
          <button className="h-12 px-4 rounded-xl bg-white text-base font-medium text-[#5b616d] self-start shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f0f0f0] transition-colors">
            Sign up
          </button>
        </div>
      </div>
    </div>
  )
}

export default LatestNews
