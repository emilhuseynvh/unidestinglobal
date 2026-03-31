import { useState } from "react"
import { Link } from "react-router"

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.333l1.787 3.62 3.996.584-2.892 2.82.683 3.976L8 10.507l-3.574 1.878.683-3.976-2.892-2.82 3.996-.584L8 1.333z" fill="#F5B731"/>
  </svg>
)

const LocationIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <path d="M7 7.583a1.75 1.75 0 100-3.5 1.75 1.75 0 000 3.5z" stroke="#0a0c11" strokeWidth="1.2"/>
    <path d="M7 12.833s4.667-3.383 4.667-6.416a4.667 4.667 0 10-9.334 0C2.333 9.45 7 12.833 7 12.833z" stroke="#0a0c11" strokeWidth="1.2"/>
  </svg>
)

const tabs = ["All", "Canada", "Turkey", "Germany", "China", "United States"]

const universities = [
  {
    name: "Western University",
    location: "London, Ontario, CA",
    rating: "4.0",
    reviews: 120,
    description: "Since 1878, Western University has been a choice destination for minds seeking the best education at a research university in Canada.",
    image: "https://www.figma.com/api/mcp/asset/ae877a84-fbd2-4f5b-aab2-7ba511f903e1",
    logo: "https://www.figma.com/api/mcp/asset/9edfd08e-17ff-4399-9971-a8066010ac6b",
    scholarship: true,
  },
  {
    name: "Laurentian University",
    location: "Sudbury, Ontario, CA",
    rating: "4.0",
    reviews: 120,
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader.",
    image: "https://www.figma.com/api/mcp/asset/ee5b9b1e-dd77-458b-be13-dab05f343178",
    logo: "https://www.figma.com/api/mcp/asset/1065df4c-2f51-47b9-88c6-527d2a289a13",
    scholarship: false,
  },
  {
    name: "Western University",
    location: "London, Ontario, CA",
    rating: "4.0",
    reviews: 120,
    description: "Since 1878, Western University has been a choice destination for minds seeking the best education at a research university in Canada.",
    image: "https://www.figma.com/api/mcp/asset/6e3f08dc-1a87-4d08-9a84-8eb5b6423328",
    logo: "https://www.figma.com/api/mcp/asset/9edfd08e-17ff-4399-9971-a8066010ac6b",
    scholarship: false,
  },
]

const UniversityCard = ({ uni }) => (
  <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-xl flex flex-col overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
    <div className="relative h-[183px] overflow-hidden">
      <img src={uni.image} alt={uni.name} className="size-full object-cover group-hover:scale-105 transition-transform duration-300" />
      {uni.scholarship && (
        <div className="absolute top-3 left-3 bg-white rounded-md px-1.5 py-1 flex items-center gap-1 h-6">
          <LocationIcon />
          <span className="text-[10px] font-medium text-[#0a0c11] leading-4">Scholarships Available</span>
        </div>
      )}
    </div>
    <div className="flex flex-col px-4 py-5 gap-5">
      <div className="flex items-center gap-2">
        <div className="size-12 rounded-[30px] border border-[#e6e6e6] overflow-hidden shrink-0">
          <img src={uni.logo} alt={uni.name} className="size-full object-cover" />
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[20px] font-medium text-black leading-6">{uni.name}</span>
          <span className="text-[14px] font-normal text-[#666] leading-5">{uni.location}</span>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-[#0a0c11] leading-5">{uni.rating}</span>
          <StarIcon />
          <span className="text-[14px] font-normal text-[#8c929c] leading-5">Rating</span>
          <span className="text-[14px] font-normal text-[#8c929c] leading-5">({uni.reviews} Reviews)</span>
        </div>
        <p className="text-[16px] font-normal text-[#27282a] leading-6 line-clamp-3">{uni.description}</p>
      </div>
    </div>
    <div className="px-4 pb-4 pt-3">
      <button className="relative h-12 px-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-xl bg-[rgba(242,242,244,0.8)]" />
        <span className="relative text-[16px] font-medium text-[#0a0c11] leading-6">Explore</span>
      </button>
    </div>
  </div>
)

const StudyAbroadSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4 max-w-[647px]">
            <h2 className="text-[40px] sm:text-[50px] font-semibold text-[#0a0c11] leading-[56px] tracking-[-0.2px]">
              Your study abroad journey, made simpler
            </h2>
            <p className="text-[16px] font-normal text-[#5b616d] leading-6 max-w-[426px]">
              Explore universities, understand your chances, and choose the right path — all based on your profile and goals.
            </p>
          </div>
          <Link to="/programs" className="relative h-12 px-4 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
            <span className="relative text-[16px] font-medium text-white leading-6">Explore Study Abroad options</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-8 w-full overflow-hidden">
          <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-[18px] shadow-sm p-1.5 flex items-center gap-1.5 overflow-x-auto max-w-full scrollbar-hide">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`h-[44px] px-4 rounded-xl text-[16px] font-medium leading-6 whitespace-nowrap transition-colors ${
                  activeTab === i
                    ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]"
                    : "text-[#8c929c] hover:text-[#5b616d]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {universities.map((uni, i) => (
              <UniversityCard key={i} uni={uni} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default StudyAbroadSection
