const reviews = [
  {
    name: "Aisha Nasser",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face",
    date: "2 weeks ago",
    rating: 5,
    text: "This program completely transformed my career. The faculty is incredibly supportive and the curriculum is perfectly balanced between theory and practice.",
  },
  {
    name: "Karam Ali",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face",
    date: "1 month ago",
    rating: 4,
    text: "Great program with excellent research opportunities. The only downside is the high cost of living in Oxford, but scholarships help a lot.",
  },
]

const ProgramReviews = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-3">
        <h2 className="text-[20px] font-semibold text-black leading-7">Reviews (142)</h2>
        <div className="flex items-center gap-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10 1.667l2.583 5.25 5.75.833-4.166 4.083.983 5.75L10 14.792l-5.15 2.791.983-5.75L1.667 7.75l5.75-.833L10 1.667z" fill="#F5B731"/>
          </svg>
          <span className="text-[16px] font-semibold text-black">4.8</span>
        </div>
      </div>

      <div className="bg-[#f5f5f5] rounded-xl px-4 py-3 flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0">
          <path d="M9.167 15.833a6.667 6.667 0 100-13.333 6.667 6.667 0 000 13.333zM17.5 17.5l-3.625-3.625" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        <input type="text" placeholder="Search for reviews" className="flex-1 bg-transparent text-[16px] font-medium text-[#0d0d12] placeholder:text-[#808080] outline-none leading-6" />
      </div>

      <div className="flex flex-col gap-6">
        {reviews.map((review) => (
          <div key={review.name} className="flex flex-col gap-3 pb-6 border-b border-[#e9eaeb] last:border-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={review.avatar} alt={review.name} className="size-10 rounded-full object-cover" />
                <div className="flex flex-col">
                  <span className="text-[14px] font-semibold text-black leading-5">{review.name}</span>
                  <span className="text-[12px] font-normal text-[#808080] leading-4">{review.date}</span>
                </div>
              </div>
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 1.333l2.06 4.18 4.607.673-3.334 3.247.787 4.587L8 11.847l-4.12 2.173.787-4.587L1.333 6.186l4.607-.673L8 1.333z" fill={i < review.rating ? "#F5B731" : "#e0e0e0"}/>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-[14px] font-normal text-[#4d4d4d] leading-[1.5]">{review.text}</p>
          </div>
        ))}
      </div>

      <button className="text-[#007aff] text-[14px] font-medium leading-[1.4] self-center">
        Show all reviews
      </button>
    </section>
  )
}

export default ProgramReviews
