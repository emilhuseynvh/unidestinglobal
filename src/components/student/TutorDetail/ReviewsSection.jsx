const imgAvatar1 = "https://www.figma.com/api/mcp/asset/4ca6793d-c814-4cff-b900-a17d41c189ad"
const imgAvatar2 = "https://www.figma.com/api/mcp/asset/9cc46b64-b674-43a3-80f7-5b19bfdba6e7"
const imgAvatar3 = "https://www.figma.com/api/mcp/asset/99ef6a92-f2be-4807-9c7f-ae5256a9f8a0"
const imgStarSm = "https://www.figma.com/api/mcp/asset/dd4ca7ec-201c-49bf-897a-580d15eebcf0"
const imgStarLg = "https://www.figma.com/api/mcp/asset/51eff513-5e41-4e0b-9fe6-7017a1e951e4"
const imgSearch = "https://www.figma.com/api/mcp/asset/1927881e-eead-43d9-b02a-383fb047b2f7"
const imgKebab = "https://www.figma.com/api/mcp/asset/2f233687-06fd-4e51-a7f7-f9b34bc6919a"

const reviews = [
  {
    id: 1,
    name: "Wade Warren",
    rating: "4.5",
    date: "Today, 13:34",
    text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    avatar: imgAvatar1,
  },
  {
    id: 2,
    name: "Brooklyn Simmons",
    rating: "4.5",
    date: "Today, 13:34",
    text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    avatar: imgAvatar2,
  },
  {
    id: 3,
    name: "Arlene McCoy",
    rating: "4.5",
    date: "Today, 13:34",
    text: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    avatar: imgAvatar3,
  },
]

const ReviewCard = ({ review }) => (
  <div className={`rounded-2xl p-3 flex gap-3 w-full ${
    review.id === 1
      ? "bg-white shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]"
      : "border border-[#e6e6e6] shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]"
  }`}>
    <div className="size-15 rounded-full overflow-hidden shrink-0">
      <img src={review.avatar} alt={review.name} className="size-full object-cover" />
    </div>
    <div className="flex-1 flex flex-col gap-5 min-w-0">
      <div className="flex items-start gap-1">
        <div className="flex-1 flex flex-col gap-1 min-w-0">
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[16px] font-medium text-[#333] leading-6">{review.name}</span>
            <div className="flex items-center gap-0.5">
              <img src={imgStarSm} alt="" className="size-4" />
              <span className="text-[12px] font-normal text-[#808080] leading-[1.4]">{review.rating}</span>
            </div>
          </div>
          <span className="text-[12px] font-normal text-[#333] leading-[1.4]">{review.date}</span>
        </div>
      </div>
      <p className="text-[12px] font-normal text-[#808080] leading-[1.4]">{review.text}</p>
    </div>
  </div>
)

const ReviewsSection = () => {
  return (
    <div className="flex flex-col gap-9 items-center w-full">
      <div className="flex flex-col gap-6 items-start w-full">
        <div className="flex flex-wrap items-center gap-3">
          <h2 className="text-[24px] sm:text-[28px] font-semibold text-[#333] leading-[1.4]">
            My students reviews (142)
          </h2>
          <div className="flex items-center gap-[3px]">
            <img src={imgStarLg} alt="" className="size-7" />
            <span className="text-[20px] font-medium text-[#808080] leading-[1.4]">4.5</span>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-white border border-[#d5d7da] rounded-lg px-3.5 py-2.5 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] w-full">
          <div className="size-5 shrink-0 relative">
            <img src={imgSearch} alt="" className="size-full opacity-60" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="flex-1 min-w-0 text-[16px] font-normal text-[#181d27] leading-6 outline-none placeholder:text-[#717680]"
          />
          <div className="hidden sm:block border border-[#e9eaeb] rounded px-1 py-px">
            <span className="text-[12px] font-medium text-[#717680] leading-[18px]">⌘K</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 p-1 w-full">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      <button className="flex items-center gap-2 p-1 rounded-2xl">
        <span className="text-[16px] font-medium text-[#007aff] leading-[1.4]">Show more</span>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5l5 5 5-5" stroke="#007aff" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default ReviewsSection
