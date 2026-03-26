import TutorCourseCard from "./TutorCourseCard"
import Pagination from "../MyCourses/Pagination"

const courses = [
  {
    id: 1,
    title: "Biology",
    rating: "4.5",
    description: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    instructor: { name: "Albert Flores", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" },
    type: "Group",
    mode: "Offline",
    status: "Pending",
    daysLeft: "Left 3 days",
    days: "Wed / Fri",
    time: "18:00 - 19:00",
    frequency: "Every week",
    students: "5 / 7 students",
    price: "14.99",
    progress: 80,
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=360&h=280&fit=crop",
  },
  {
    id: 2,
    title: "Chemistry",
    rating: "4.8",
    description: "An engaging course focusing on chemical principles and their applications, perfect for aspiring scientists.",
    instructor: { name: "Sofia Martinez", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" },
    type: "Individual",
    mode: "Online",
    status: "Confirmed",
    daysLeft: "Left 5 days",
    days: "Mon / Thu",
    time: "16:00 - 17:30",
    frequency: "Every week",
    students: "4 / 5 students",
    price: "12.99",
    progress: 90,
    image: "https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?w=360&h=280&fit=crop",
  },
  {
    id: 3,
    title: "Physics",
    rating: "4.7",
    description: "Explore the fundamental concepts of physics through interactive experiments and real-world applications.",
    instructor: { name: "Emily Johnson", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=48&h=48&fit=crop&crop=face" },
    type: "Group",
    mode: "Online",
    status: "Course Closed",
    daysLeft: null,
    days: "Tue / Fri",
    time: "10:00 - 11:30",
    frequency: "Every week",
    students: "10 / 10 students",
    price: "18.99",
    progress: 100,
    image: "https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=360&h=280&fit=crop",
  },
]

const TutorCoursesSection = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[20px] sm:text-[24px] font-semibold text-[#333] leading-8">
        My Courses
      </h2>
      <div className="flex flex-col gap-4">
        {courses.map((course) => (
          <TutorCourseCard key={course.id} course={course} />
        ))}
      </div>
      <Pagination currentPage={1} totalPages={10} />
    </div>
  )
}

export default TutorCoursesSection
