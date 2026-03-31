import CourseCard from "../Courses/CourseCard"

const relatedCourses = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
    avatar: "https://i.pravatar.cc/48?img=25",
    author: "Albert Flores",
    rating: 4.5, reviews: 234, lessons: 23, duration: "5h 32m", length: "1 week",
    title: "100 Days of Code\u2122: The Complete Python Pro Bootcamp",
    description: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    tags: ["Professional", "Top Rated"], price: 56, oldPrice: 64.99,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=400&h=200&fit=crop",
    avatar: "https://i.pravatar.cc/48?img=25",
    author: "Albert Flores",
    rating: 4.5, reviews: 234, lessons: 23, duration: "5h 32m", length: "1 week",
    title: "100 Days of Code\u2122: The Complete Python Pro Bootcamp",
    description: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.",
    tags: ["Professional", "Top Rated"], price: 56, oldPrice: 64.99,
  },
]

const RelatedCourses = () => {
  return (
    <div className="flex flex-col gap-8">
      <h3 className="text-2xl font-semibold text-[#1a1a1a] leading-none tracking-[-0.96px]">Students also bought</h3>
      <div className="flex gap-4 flex-wrap">
        {relatedCourses.map((course) => (
          <div key={course.id} className="w-[315px]">
            <CourseCard course={course} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedCourses
