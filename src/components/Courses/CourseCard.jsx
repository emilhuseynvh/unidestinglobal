const StarFull = () => (
  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
    <path d="M4.049.927l.93 1.888 2.083.304-1.507 1.47.356 2.075L4.049 5.6 2.187 6.664l.356-2.076L1.036 3.12l2.082-.304L4.049.927z" fill="#F79009" />
    <path d="M8.049.927l.93 1.888 2.083.304-1.507 1.47.356 2.075L8.049 5.6 6.187 6.664l.356-2.076L5.036 3.12l2.082-.304L8.049.927z" fill="#F79009" />
    <path d="M12.049.927l.93 1.888 2.083.304-1.507 1.47.356 2.075-1.862-1.064-1.862 1.064.356-2.076L9.036 3.12l2.082-.304 .93-1.888z" fill="#F79009" />
  </svg>
)

import { Link } from "react-router"

const CourseCard = ({ course }) => {
  return (
    <Link to={`/courses/${course.id}`} className="rounded-2xl border border-[#e6e6e6] bg-white pb-5 hover:shadow-lg transition-shadow flex flex-col">
      <div className="h-[173px] bg-[#e5e5e5] overflow-hidden rounded-t-2xl">
        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col gap-6 px-5 pt-3 flex-1">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <img src={course.avatar} alt={course.author} className="w-6 h-6 rounded-full object-cover" />
            <span className="text-sm font-medium text-[#333] leading-[1.4]">{course.author}</span>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-xs font-semibold text-[#18191b] leading-[18px]">{course.rating}</span>
                <div className="flex gap-[2px]">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M8 1.333l1.802 3.652 4.031.589-2.916 2.842.688 4.014L8 10.327l-3.605 1.937.688-4.014-2.916-2.842 4.031-.59L8 1.168z" fill={j < Math.round(course.rating) ? "#0077EE" : "#E5E5E5"} />
                    </svg>
                  ))}
                </div>
              </div>
              <span className="text-xs font-medium text-[#71757a] leading-[18px]">({course.reviews})</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-medium text-[#666] leading-[1.4]">
              <span>{course.lessons} lessons</span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#999]" />
              <span>{course.duration}</span>
              <span className="w-[3px] h-[3px] rounded-full bg-[#999]" />
              <span>{course.length}</span>
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium text-[#333] leading-6 truncate">{course.title}</p>
              <p className="text-xs text-[#4d4d4d] leading-[1.4] line-clamp-2">{course.description}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-auto">
          <div className="flex gap-2">
            {course.tags.map((tag) => (
              <span key={tag} className="px-2 py-1.5 rounded-[15px] border-[0.5px] border-[#e6e6e6] text-sm font-medium text-[#333] leading-[1.4]">
                {tag}
              </span>
            ))}
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-semibold text-[#27282a] leading-[30px]">${course.price}</span>
            <span className="text-sm text-[#27282a] line-through leading-5">${course.oldPrice}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CourseCard
