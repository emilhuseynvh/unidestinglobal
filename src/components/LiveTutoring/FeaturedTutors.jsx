import { Link } from "react-router"

const imgTutor = "https://www.figma.com/api/mcp/asset/43b90276-1d7b-44c7-a866-a959f022f8ed"
const imgChartUp = "https://www.figma.com/api/mcp/asset/96435c11-ed10-4121-9af4-be5a6eebc0e0"
const imgThumbsUp = "https://www.figma.com/api/mcp/asset/a87ff849-f9ea-489d-a5b6-9fba7c256b62"

const tutors = [
  { name: "Samira L.", subject: "Mathematics tutor", helped: 14, rating: 4.8, reviews: 18 },
  { name: "Samira L.", subject: "Mathematics tutor", helped: 14, rating: 4.8, reviews: 18 },
  { name: "Samira L.", subject: "Mathematics tutor", helped: 14, rating: 4.8, reviews: 18 },
  { name: "Samira L.", subject: "Mathematics tutor", helped: 14, rating: 4.8, reviews: 18 },
]

const FeaturedTutors = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="flex flex-col gap-8">
        <div className="flex items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] leading-none tracking-[-1.92px]">
              Featured Tutors
            </h2>
            <p className="text-[16px] font-normal text-[#4d4d4d] leading-[1.4]">
              Top-rated tutors available for live sessions
            </p>
          </div>
          <Link to="/find-a-tutor" className="text-[16px] font-medium text-[#007aff] leading-[1.4] whitespace-nowrap shrink-0">
            View all tutors
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {tutors.map((tutor, i) => (
            <div key={i} className="flex flex-col gap-3 pb-3">
              <div className="w-full aspect-square rounded-t-2xl overflow-hidden">
                <img src={imgTutor} alt={tutor.name} className="size-full object-cover" />
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-0">
                  <div className="flex items-start gap-2">
                    <img src={imgChartUp} alt="" className="size-5 shrink-0 mt-0.5" />
                    <span className="text-[16px] font-normal text-[#666] leading-[1.4]">
                      Helped {tutor.helped} students get admitted
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={imgThumbsUp} alt="" className="size-5 shrink-0 mt-0.5" />
                    <span className="text-[16px] font-normal text-[#666] leading-[1.4]">
                      Rated {tutor.rating} by {tutor.reviews} students
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-[24px] font-semibold text-black leading-8">{tutor.name}</h3>
                  <span className="text-[16px] font-medium text-[#666] leading-6">{tutor.subject}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedTutors
