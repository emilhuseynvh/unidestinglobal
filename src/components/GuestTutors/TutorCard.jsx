const badgeStyles = [
  "bg-[#f8f9fc] border-[#d5d9eb] text-[#363f72]",
  "bg-[#f4f3ff] border-[#d9d6fe] text-[#5925dc]",
]

const ReviewsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M5.333 1.333v2M10.667 1.333v2M2 6h12M3.333 2.667h9.334c.736 0 1.333.597 1.333 1.333v9.333c0 .737-.597 1.334-1.333 1.334H3.333A1.333 1.333 0 012 13.333V4c0-.736.597-1.333 1.333-1.333z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const StudentsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#808080" strokeWidth="1.2"/><path d="M8 4.667V8l2 1" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

const LessonsIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10a2 2 0 01-2 2H5.333L2 14.667V4a2 2 0 012-2h8a2 2 0 012 2v6z" stroke="#808080" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
)

import { Link } from "react-router"

const TutorCard = ({ tutor }) => {
  return (
    <Link to={`/find-a-tutor/${tutor.id}`} className="block bg-[#f5f5f5] border border-[#e6e6e6] rounded-2xl p-3 sm:p-4 hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row items-start justify-between gap-3 sm:gap-4">
        <div className="flex gap-3 sm:gap-4 items-start w-full sm:w-auto">
          <div className="w-28 sm:w-40 self-stretch rounded-lg overflow-hidden bg-[#e9eaeb] shrink-0">
            <img src={tutor.image} alt={tutor.name} className="size-full object-cover" />
          </div>

          <div className="flex flex-col gap-3 min-w-0">
            <div className="flex flex-col gap-2">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-0.5">
                  <span className="text-[18px] sm:text-[20px] font-semibold text-[#333] leading-[1.4]">{tutor.name}</span>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.333l1.802 3.652 4.031.589-2.916 2.842.688 4.014L8 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L8 1.168z" fill="#F79009" stroke="#F79009" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="text-[12px] font-normal text-[#808080] leading-[1.4]">{tutor.rating}</span>
                </div>
                <span className="text-[14px] font-normal text-[#999] leading-[1.4]">{tutor.subtitle}</span>
              </div>
              <p className="text-[12px] font-normal text-[#808080] leading-[1.4] line-clamp-2">{tutor.description}</p>
            </div>

            <div className="flex flex-wrap gap-1">
              {tutor.badges.map((badge, i) => (
                <span key={i} className={`px-1.5 py-0.5 rounded-md text-[12px] font-medium border leading-[18px] ${badgeStyles[i % badgeStyles.length]}`}>
                  {badge}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              <span className="flex items-center gap-1 text-[14px] font-medium text-[#808080] leading-[1.4]">
                <ReviewsIcon />{tutor.reviews} reviews
              </span>
              <span className="flex items-center gap-1 text-[14px] font-medium text-[#808080] leading-[1.4]">
                <StudentsIcon />{tutor.students} students
              </span>
              <span className="flex items-center gap-1 text-[14px] font-medium text-[#808080] leading-[1.4]">
                <LessonsIcon />{tutor.lessons} lessons
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-baseline gap-1.5 shrink-0">
          <span className="text-[20px] font-semibold text-black leading-[1.4]">${tutor.price}</span>
          <span className="text-[14px] font-normal text-[#666] leading-[1.4]">/ 1 hour</span>
        </div>
      </div>
    </Link>
  )
}

export default TutorCard
