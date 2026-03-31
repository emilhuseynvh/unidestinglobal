import { useState } from "react"

const filters = ["All Topics", "Q&A", "IELTS/TOEFL", "Programming", "Study Abroad", "Tips", "Feedback"]

const discussions = [
  {
    author: "Aysel M.",
    role: "Student",
    time: "2 hours ago",
    title: "IELTS Writing Task 2 — How to consistently score 7+?",
    description: "I've been scoring 6.0-6.5 on Writing Task 2 consistently. I've tried several strategies but can't seem to break through. Has anyone successfully improved from 6.0 to 7+? What specific techniques helped you?",
    replies: 23,
    views: 340,
    avatar: "https://i.pravatar.cc/40?img=1",
    pinned: false,
  },
  {
    author: "Nigar A.",
    role: "Tutor",
    time: "2 hours ago",
    title: "📌 AMA: IELTS Expert — Ask me anything about IELTS prep!",
    description: "Hi everyone! I'm Ayten, an IELTS tutor with 8+ years of experience and a band 8 score. I'll be answering all your questions about IELTS preparation today.",
    replies: 23,
    views: 340,
    avatar: "https://i.pravatar.cc/40?img=5",
    pinned: true,
  },
]

const Discussions = () => {
  const [activeFilter, setActiveFilter] = useState("All Topics")

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">Discussions</h2>
      <div className="flex gap-2 overflow-x-auto pb-1">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-3 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeFilter === filter
                ? "bg-[#0a0c11] text-white"
                : "bg-[#f5f5f5] text-[#333] hover:bg-[#e8e8ec]"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {discussions.map((d, i) => (
          <div key={i} className="flex flex-col gap-3 py-5 border-b border-[#f0f0f0]">
            <div className="flex items-center gap-2">
              <img src={d.avatar} alt={d.author} className="w-8 h-8 rounded-full object-cover" />
              <span className="text-sm font-medium text-[#333]">{d.author}</span>
              <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${d.role === "Tutor" ? "bg-[#e8f5e9] text-[#2e7d32]" : "bg-[#e3f2fd] text-[#1565c0]"}`}>
                {d.role}
              </span>
              <span className="text-xs text-[#808080]">{d.time}</span>
            </div>
            <h3 className="text-base font-semibold text-[#333]">{d.title}</h3>
            <p className="text-sm text-[#666] leading-[1.4]">{d.description}</p>
            <div className="flex items-center gap-4 text-xs text-[#808080]">
              <span>💬 {d.replies} replies</span>
              <span>👁 {d.views} views</span>
              <span>🔖 Save</span>
              <span>↗ Share</span>
            </div>
          </div>
        ))}
      </div>
      <button className="text-[#007aff] text-base font-medium self-center">Load more</button>
    </div>
  )
}

export default Discussions
