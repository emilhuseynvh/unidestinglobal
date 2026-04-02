import { useState } from "react"

const ratingBars = [
  { stars: 5, percent: 38 },
  { stars: 4, percent: 38 },
  { stars: 3, percent: 38 },
  { stars: 2, percent: 38 },
  { stars: 1, percent: 38 },
]

const reviewsData = [
  {
    name: "Leyla M.",
    initials: "LM",
    gradient: "from-[#007aff] to-[rgba(0,122,255,0.2)]",
    time: "2 days ago",
    stars: 5,
    text: "Went from 5 to 7 in 3 months. The exam technique sections are absolutely incredible. Every IB student should take this course.",
    reply: "Thank you so much, Leyla! So proud of your progress. Keep up the amazing work! \ud83c\udf89",
  },
  {
    name: "Sara R.",
    initials: "SR",
    gradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]",
    time: "2 days ago",
    stars: 5,
    text: "Best IB Biology resource I've found. Clear, structured, and completely exam-focused. The past paper walkthroughs alone are worth the price.",
    reply: null,
  },
  {
    name: "Sara R.",
    initials: "SR",
    gradient: "from-[#409b3f] to-[rgba(64,155,63,0.12)]",
    time: "2 days ago",
    stars: 5,
    text: "Best IB Biology resource I've found. Clear, structured, and completely exam-focused. The past paper walkthroughs alone are worth the price.",
    reply: null,
    showReplyInput: true,
  },
]

const ReviewsTab = () => {
  const [replyText, setReplyText] = useState("")

  return (
    <div className="bg-white border border-black/[0.06] rounded-[18px] overflow-hidden pb-6">
      {/* Header */}
      <div className="flex items-center px-5 py-4 border-b border-black/[0.06]">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFC30A" stroke="#FFC30A" strokeWidth="1"/>
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

        {/* Reviews List */}
        <div className="flex flex-col gap-3">
          {reviewsData.map((review, i) => (
            <div key={i} className={`flex flex-col gap-3 px-3.5 py-3 ${i < reviewsData.length - 1 ? "border-b border-black/[0.03]" : ""}`}>
              {/* Review Header */}
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

              {/* Reply */}
              {review.reply && (
                <div className="bg-[#f9f9fa] border-l-2 border-[#007aff] rounded-r-[10px] px-4 py-2 flex flex-col gap-1">
                  <span className="text-xs font-semibold text-[#008ece] leading-4">Your reply</span>
                  <span className="text-xs text-[#5b616d] leading-4">{review.reply}</span>
                </div>
              )}

              {/* Reply Button */}
              {!review.reply && !review.showReplyInput && (
                <button className="bg-[rgba(0,122,255,0.12)] h-6 px-[10px] rounded-[6px] text-[10px] font-medium text-[#0267d0] leading-4 self-start">Reply</button>
              )}

              {/* Reply Input */}
              {review.showReplyInput && (
                <>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 px-0.5">
                      <span className="text-base font-medium text-[#5b616d] leading-6">Full Description</span>
                      <span className="text-base text-[#8c929c] leading-6">(0/1500)</span>
                    </div>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      placeholder="Reply..."
                      className="w-full min-h-[104px] bg-white border border-black/[0.06] rounded-xl px-3.5 py-2.5 text-xs text-[#0a0c11] leading-4 outline-none resize-none focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
                    />
                  </div>
                  <div className="flex items-center gap-1">
                    <button className="bg-[rgba(0,122,255,0.12)] h-6 px-[10px] rounded-[6px] text-[10px] font-medium text-[#0267d0] leading-4">Save</button>
                    <button className="bg-white h-6 px-[10px] rounded-[6px] text-[10px] font-medium text-[#5b616d] leading-4">Cancel</button>
                  </div>
                </>
              )}
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

export default ReviewsTab
