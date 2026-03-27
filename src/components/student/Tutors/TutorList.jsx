import TutorCard from "./TutorCard"
import Pagination from "../MyCourses/Pagination"

const ChevronDownIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M4 6l4 4 4-4" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

const tutors = [
  {
    id: 1,
    name: "Lina C.",
    rating: "4.5",
    description: "Engaging lessons tailored for your learning style – Dive deep into organic and inorganic chemistry with fun experiments.",
    badges: ["Super Tutor", "Excellence Certified"],
    days: "Wed / Fri",
    time: "18:00 - 19:00",
    frequency: "Every week",
    students: "5 / 7 students",
    price: "14.99",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=320&h=320&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Mark T.",
    rating: "4.8",
    description: "Master complex mathematical concepts through interactive problem-solving sessions and real-world applications.",
    badges: ["Expert Educator", "Gold Star Rated"],
    days: "Tue / Thu",
    time: "17:00 - 18:00",
    frequency: "Every week",
    students: "8 / 10 students",
    price: "14.99",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=320&h=320&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Sara K.",
    rating: "4.7",
    description: "Unlock the secrets of creative writing with personalized guidance and feedback on your stories and essays.",
    badges: ["Creative Mentor", "Top Notch"],
    days: "Mon / Wed",
    time: "16:00 - 17:30",
    frequency: "Every week",
    students: "6 / 8 students",
    price: "14.99",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320&h=320&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "James L.",
    rating: "4.6",
    description: "Explore the fundamentals of programming with hands-on projects and collaborative coding sessions.",
    badges: ["Technology Coach", "Industry Approved"],
    days: "Fri / Sat",
    time: "10:00 - 11:30",
    frequency: "Every week",
    students: "7 / 9 students",
    price: "14.99",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&h=320&fit=crop&crop=face",
  },
]

const TutorList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-end">
        <button className="flex items-center gap-1.5 h-10 px-4 border border-[#d5d7da] rounded-lg shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] hover:bg-[#f9f9f9] transition-colors">
          <span className="text-[14px] font-medium text-[#414651] leading-5 whitespace-nowrap">Sort by: Top picks</span>
          <ChevronDownIcon />
        </button>
      </div>

      <div className="flex flex-col gap-3 sm:gap-4">
        {tutors.map((tutor) => (
          <TutorCard key={tutor.id} tutor={tutor} />
        ))}
      </div>

      <Pagination currentPage={1} totalPages={10} />
    </div>
  )
}

export default TutorList
