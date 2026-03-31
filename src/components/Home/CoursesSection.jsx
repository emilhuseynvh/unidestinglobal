import { useState } from "react"
import { Link } from "react-router"

const imgCourse = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop"

const CheckCircleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M10 1.667A8.333 8.333 0 1018.333 10 8.341 8.341 0 0010 1.667zm3.983 6.65l-4.583 4.583a.625.625 0 01-.884 0l-2.5-2.5a.625.625 0 11.884-.884l2.058 2.059 4.141-4.142a.625.625 0 11.884.884z" fill="#22C55E"/>
  </svg>
)

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.333l1.787 3.62 3.996.584-2.892 2.82.683 3.976L8 10.507l-3.574 1.878.683-3.976-2.892-2.82 3.996-.584L8 1.333z" fill="#F5B731"/>
  </svg>
)

const BookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M2.667 2h3.666C7.253 2 8 2.747 8 3.667v9.666c0-.736-.597-1.333-1.333-1.333H2.667V2zM13.333 2H9.667C8.747 2 8 2.747 8 3.667v9.666c0-.736.597-1.333 1.333-1.333h4V2z" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const UsersIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M11.333 14v-1.333A2.667 2.667 0 008.667 10H3.333a2.667 2.667 0 00-2.666 2.667V14M6 7.333A2.667 2.667 0 106 2a2.667 2.667 0 000 5.333zM14.667 14v-1.333a2.667 2.667 0 00-2-2.58M10.667 2.087a2.667 2.667 0 010 5.166" stroke="#0a0c11" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tabs = ["All", "Popular", "In English", "Free", "Beginner", "Short Courses"]

const courses = [
  {
    title: "Learn UI/UX Step by Step",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Ali Guliyev",
    rating: "4.0",
    reviews: 120,
    level: "Beginner",
    duration: "6h 40m",
    lessons: 23,
    language: "English",
    price: "$45",
    oldPrice: "$54.99",
    enrolled: 34,
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Ali Guliyev",
    rating: "4.0",
    reviews: 120,
    level: "Advanced",
    duration: "6h 40m",
    lessons: 23,
    language: "German",
    price: "$45",
    oldPrice: "$54.99",
    enrolled: 34,
  },
  {
    title: "Learn UI/UX Step by Step",
    description: "This course takes a deep dive into prototyping tools and methodologies, providing hands-on experience in creating interactive designs.",
    author: "Ali Guliyev",
    rating: "4.0",
    reviews: 120,
    level: "Beginner",
    duration: "6h 40m",
    lessons: 23,
    language: "English",
    price: "$45",
    oldPrice: "$54.99",
    enrolled: 34,
  },
]

const CourseCard = ({ course }) => (
  <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-2xl pb-4 flex flex-col gap-4 overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
    <div className="relative h-[173px] overflow-hidden rounded-t-2xl">
      <img src={imgCourse} alt={course.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="flex flex-col gap-6 px-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-[#0a0c11] leading-5">{course.rating}</span>
          <StarIcon />
          <span className="text-[14px] font-normal text-[#8c929c] leading-5">Rating</span>
          <span className="text-[14px] font-normal text-[#8c929c] leading-5">({course.reviews} Reviews)</span>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-semibold text-[#0a0c11] leading-6 truncate">{course.title}</h3>
          <p className="text-[12px] font-normal text-[#8c929c] leading-4 line-clamp-2">{course.description}</p>
          <div className="flex items-center gap-1">
            <div className="size-5 rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] flex items-center justify-center">
              <span className="text-[10px] font-medium text-white">A</span>
            </div>
            <span className="text-[12px] font-medium text-[#5b616d]">{course.author}</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-[14px] font-medium text-[#5b616d] leading-5">
          <span>{course.level}</span>
          <span className="size-[3px] rounded-full bg-[#5b616d]" />
          <span>{course.duration}</span>
          <span className="size-[3px] rounded-full bg-[#5b616d]" />
          <span>{course.lessons} lessons</span>
          <span className="size-[3px] rounded-full bg-[#5b616d]" />
          <span>{course.language}</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[rgba(242,242,244,0.8)] rounded-lg px-2 py-1 flex items-center gap-1.5 h-8">
            <BookIcon />
            <span className="text-[12px] font-medium text-[#0a0c11]">Self-paced</span>
          </div>
          <div className="bg-[rgba(242,242,244,0.8)] rounded-lg px-2 py-1 flex items-center gap-1.5 h-8">
            <UsersIcon />
            <span className="text-[12px] font-medium text-[#0a0c11]">{course.enrolled} Enrolled</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[20px] font-semibold text-[#27282a] leading-[30px]">{course.price}</span>
        <span className="text-[14px] font-normal text-[#27282a] leading-5 line-through">{course.oldPrice}</span>
      </div>
    </div>
  </div>
)

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1312px] mx-auto flex flex-col items-center gap-8 md:gap-12">
        <div className="flex flex-col items-center gap-6 md:gap-8 text-center">
          <div className="flex flex-col items-center gap-4 max-w-[647px]">
            <h2 className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[50px] font-semibold text-[#0a0c11] leading-[1.15] tracking-[-0.2px]">
              Learn what you need — at your own pace
            </h2>
            <p className="text-[16px] font-normal text-[#5b616d] leading-6 max-w-[426px]">
              Self-paced courses designed for students — created by tutors who've helped real applicants succeed.
            </p>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Learn anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Go at your speed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircleIcon />
                <span className="text-[16px] font-normal text-[#5b616d] leading-6">Lifetime access</span>
              </div>
            </div>
          </div>
          <Link to="/online-library" className="relative h-12 px-4 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
            <span className="relative text-[16px] font-medium text-white leading-6">All Self-paced Courses</span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-6 md:gap-8 w-full overflow-hidden">
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
            {courses.map((course, i) => (
              <CourseCard key={i} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
