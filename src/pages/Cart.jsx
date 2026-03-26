import Header from "../components/Header"
import CartItem from "../components/Cart/CartItem"
import CartSummary from "../components/Cart/CartSummary"
import TutorCourseCard from "../components/TutorDetail/TutorCourseCard"

const cartItems = [
  {
    id: 1,
    title: "Creativity in the World of 3D Design",
    price: "14.99",
    image: "https://www.figma.com/api/mcp/asset/db86447b-9d42-4e00-817e-f3e9b24518b3",
  },
  {
    id: 2,
    title: "Enhancing User Experience for Optimal Design",
    price: "14.99",
    image: "https://www.figma.com/api/mcp/asset/bf33e449-8a5b-4f36-8c42-1229d2e2a080",
  },
]

const suggestedCourses = [
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

const Cart = () => {
  return (
    <section className="w-full">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20 py-8 md:py-12 flex flex-col gap-8 md:gap-10">
        <h1 className="text-[22px] sm:text-[26px] font-semibold text-[#181d27] leading-tight">
          My Cart ({cartItems.length})
        </h1>

        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex flex-col gap-4 min-w-0 p-1 w-full lg:w-[770px] shrink-0">
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          <div className="flex-1 min-w-0 lg:sticky lg:top-6 self-start">
            <CartSummary items={cartItems} />
          </div>
        </div>

        <div className="flex flex-col gap-5 w-full lg:w-[770px]">
          <h2 className="text-[24px] font-semibold text-[#333] leading-8">
            You might also like
          </h2>
          <div className="flex flex-col gap-4 p-1">
            {suggestedCourses.map((course) => (
              <TutorCourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Cart
