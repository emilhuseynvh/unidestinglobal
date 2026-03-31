const StarIcon = () => (
  <svg width="29" height="29" viewBox="0 0 29 29" fill="none">
    <path d="M14.5 3l3.09 6.26 6.91 1.01-5 4.87 1.18 6.88L14.5 18.77l-6.18 3.25 1.18-6.88-5-4.87 6.91-1.01L14.5 3z" fill="#F79009" stroke="#F79009" strokeWidth="1" />
  </svg>
)

const reviews = [
  { name: "Wade Warren", date: "Today, 13:34", rating: 4.5, text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.", avatar: "https://i.pravatar.cc/60?img=11" },
  { name: "Brooklyn Simmons", date: "Today, 13:34", rating: 4.5, text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.", avatar: "https://i.pravatar.cc/60?img=12" },
  { name: "Arlene McCoy", date: "Today, 13:34", rating: 4.5, text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.", avatar: "https://i.pravatar.cc/60?img=13" },
]

const CourseReviews = () => {
  return (
    <div className="flex flex-col gap-6 items-center">
      <div className="flex flex-col gap-6 w-full">
        <div className="flex items-center gap-3">
          <h3 className="text-[32px] font-semibold text-[#333] leading-[1.4]">Reviews (142)</h3>
          <div className="flex items-center gap-1">
            <StarIcon />
            <span className="text-xl font-medium text-[#808080]">4.5</span>
          </div>
        </div>
        <div className="bg-[#f5f5f5] rounded-2xl h-14 flex items-center gap-2 px-4">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <input type="text" placeholder="Search for reviews" className="bg-transparent flex-1 text-base font-medium placeholder:text-[#808080] focus:outline-none" />
        </div>
      </div>
      <div className="flex flex-col gap-3 w-full">
        {reviews.map((review, i) => (
          <div key={i} className={`rounded-2xl p-3 flex gap-3 ${i === 0 ? "shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]" : "border border-[#e6e6e6] shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]"}`}>
            <img src={review.avatar} alt={review.name} className="w-[60px] h-[60px] rounded-full object-cover shrink-0" />
            <div className="flex flex-col gap-5 flex-1 min-w-0">
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-1">
                    <span className="text-base font-medium text-[#333]">{review.name}</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333l1.802 3.652 4.031.589-2.916 2.842.688 4.014L8 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L8 1.168z" fill="#F79009" /></svg>
                    <span className="text-xs text-[#808080]">{review.rating}</span>
                  </div>
                  <span className="text-xs text-[#333]">{review.date}</span>
                </div>
              </div>
              <p className="text-xs text-[#808080] leading-[1.4]">{review.text}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="text-[#007aff] text-base font-medium">Show more ↓</button>
    </div>
  )
}

export default CourseReviews
