import { useState } from "react"

const ratingBars = [
  { stars: 5, percent: 62 },
  { stars: 4, percent: 24 },
  { stars: 3, percent: 8 },
  { stars: 2, percent: 4 },
  { stars: 1, percent: 2 },
]

const reviewsData = [
  {
    name: "Leyla M.",
    initials: "LM",
    gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]",
    time: "2 days ago",
    stars: 5,
    text: "Went from 5 to 7 in 3 months. The exam technique sections are absolutely incredible. Every IB student should take this course.",
  },
  {
    name: "Sara R.",
    initials: "SR",
    gradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]",
    time: "5 days ago",
    stars: 5,
    text: "Best IB Biology resource I've found. Clear, structured, and completely exam-focused. The past paper walkthroughs alone are worth the price.",
  },
  {
    name: "Anar H.",
    initials: "AH",
    gradient: "from-[#e4a000] to-[rgba(255,195,10,0.2)]",
    time: "1 week ago",
    stars: 4,
    text: "Great sessions with very clear explanations. The only reason I'm giving 4 stars instead of 5 is that sometimes the pace is a bit fast for complex topics.",
  },
]

const StudentLiveReviewsTab = () => {
  const [reviewText, setReviewText] = useState("")
  const [rating, setRating] = useState(0)

  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden pb-6">
      {/* Header */}
      <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFC30A" stroke="#FFC30A" strokeWidth="1" />
          </svg>
          <span className="text-base font-semibold text-[#0a0c11] leading-6">Reviews</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-5 py-3.5 flex flex-col gap-4">
        {/* Rating Summary */}
        <div className="bg-white border border-black/[0.03] rounded-xl p-5 flex gap-4 max-w-[649px]">
          <div className="flex flex-col items-center gap-1 shrink-0">
            <span className="text-[42px] font-bold text-[#ffc30a] leading-[48px] tracking-[-0.2px]">4.9</span>
            <span className="text-base text-[#0a0c11] leading-6">★★★★★</span>
            <span className="text-xs text-[#8c929c] leading-4">142 reviews</span>
          </div>
          <div className="flex-1 flex flex-col gap-1">
            {ratingBars.map((bar) => (
              <div key={bar.stars} className="flex items-center gap-1">
                <span className="text-[10px] font-medium text-[#8c929c] leading-4 w-2 shrink-0">{bar.stars}</span>
                <div className="flex-1 bg-[#f2f2f4] h-1.5 rounded-full">
                  <div className="bg-[#ffc30a] h-1.5 rounded-full" style={{ width: `${bar.percent}%` }} />
                </div>
                <span className="text-[10px] font-medium text-[#8c929c] leading-4 w-7 text-right shrink-0">{bar.percent} %</span>
              </div>
            ))}
          </div>
        </div>

        {/* Write a Review */}
        <div className="bg-[#f9f9fa] border border-black/[0.03] rounded-xl p-4 flex flex-col gap-3">
          <span className="text-sm font-semibold text-[#0a0c11] leading-5">Write a Review</span>
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button key={star} onClick={() => setRating(star)} className="text-lg leading-5">
                <span className={star <= rating ? "text-[#ffc30a]" : "text-[#d1d3d7]"}>★</span>
              </button>
            ))}
          </div>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your experience with this course..."
            className="w-full min-h-[80px] bg-white border border-black/[0.06] rounded-xl px-3.5 py-2.5 text-xs text-[#0a0c11] leading-4 outline-none resize-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
          <button className="h-8 px-3 rounded-lg bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-xs font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] self-start">
            Submit Review
          </button>
        </div>

        {/* Reviews List */}
        <div className="flex flex-col gap-3">
          {reviewsData.map((review, i) => (
            <div key={i} className={`flex flex-col gap-3 px-3.5 py-3 ${i < reviewsData.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-b ${review.gradient} border border-black/[0.03] flex items-center justify-center`}>
                    <span className="text-xs font-medium text-white leading-4">{review.initials}</span>
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-semibold text-[#0a0c11] leading-4">{review.name}</span>
                    <span className="text-[10px] text-[#8c929c] leading-4">{review.time}</span>
                  </div>
                  <span className="ml-auto text-sm text-[#0a0c11] leading-5">{"★".repeat(review.stars)}</span>
                </div>
                <p className="text-xs text-[#5b616d] leading-4">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Load More */}
      <div className="flex justify-center">
        <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-white backdrop-blur-[12px] text-sm font-medium text-[#5b616d] flex items-center gap-1.5 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M9 1.5v3M9 13.5v3M3.75 9h-2.25M16.5 9h-2.25M4.575 4.575L3.15 3.15M14.85 14.85l-1.425-1.425M4.575 13.425L3.15 14.85M14.85 3.15l-1.425 1.425" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
          Load more
        </button>
      </div>
    </div>
  )
}

export default StudentLiveReviewsTab
