import { Link } from "react-router"

const CoursePublished = () => {
  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="flex flex-col items-center gap-4 max-w-[376px]">
        <div className="w-[88px] h-[88px] rounded-full bg-[rgba(64,155,63,0.12)] flex items-center justify-center relative">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 3.333C10.795 3.333 3.333 10.795 3.333 20S10.795 36.667 20 36.667 36.667 29.205 36.667 20 29.205 3.333 20 3.333z" stroke="#409b3f" strokeWidth="2.5" />
            <path d="M13.333 20l4.167 4.167 9.167-9.167" stroke="#409b3f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div className="absolute inset-[-8px] rounded-[58px] border border-dashed border-[#409b3f]" />
        </div>
        <div className="flex flex-col items-center gap-1">
          <h1 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px] text-center">Published! You're live.</h1>
          <p className="text-sm text-[#8c929c] leading-5 text-center">Your content is now searchable and students can enroll. Share it to boost your first enrollments.</p>
        </div>
        <div className="flex gap-3 mt-4">
          <button className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
            Share my Course
          </button>
          <Link to="/tutor/courses" className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center justify-center shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] no-underline">
            Back to My Courses
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CoursePublished
