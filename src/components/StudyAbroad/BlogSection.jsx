const imgBlogImage = "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=854&h=628&fit=crop"
const imgBlogImage1 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=854&h=628&fit=crop"
const imgImage = "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=256&h=256&fit=crop"
const imgImage1 = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=256&h=256&fit=crop"
const imgImage15 = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=256&h=256&fit=crop"

const bigBlogs = [
  { id: 1, category: "EDUCATION", title: "Eco-Education in Our Lives: We Can Change the Future", date: "December 25", image: imgBlogImage },
  { id: 2, category: "EDUCATION", title: "Mastering Digital Marketing: Strategies to Boost Your Business", date: "December 01", image: imgBlogImage1 },
]

const smallBlogs = [
  { id: 3, category: "EDUCATION", title: "The Impact of Branding on Business Success", date: "October 25", image: imgImage },
  { id: 4, category: "EDUCATION", title: "How Design Thinking Transforms Product Development", date: "October 12", image: imgImage1 },
  { id: 5, category: "EDUCATION", title: "The Future of Online Learning: Trends to Watch", date: "October 02", image: imgImage15 },
]

const BlogSection = () => {
  return (
    <section className="w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-8 lg:px-16">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-6 sm:gap-8">
        <div className="flex flex-col gap-4 w-full max-w-[647px]">
          <h2 className="text-[#1a1a1a] text-[28px] sm:text-[36px] lg:text-[48px] font-semibold leading-none tracking-[-1.92px]">
            Guides for international students
          </h2>
          <p className="text-[rgba(27,31,38,0.72)] text-sm sm:text-base leading-6">
            Learn how to pick the right degree, get scholarships, and move abroad!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0 lg:w-[869px]">
            {bigBlogs.map((blog) => (
              <div key={blog.id} className="border border-[#f0f2f5] flex flex-col overflow-hidden rounded-[10px]">
                <div className="h-[200px] sm:h-[260px] lg:h-[314px] w-full">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white flex flex-col gap-3 p-4">
                  <span className="text-[#27282a] text-xs font-semibold leading-[18px]">{blog.category}</span>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[#27282a] text-base sm:text-xl font-semibold leading-[1.4] sm:leading-[30px]">{blog.title}</h3>
                    <span className="text-[#52565b] text-xs font-medium">{blog.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 flex-1 min-w-0">
            {smallBlogs.map((blog) => (
              <div key={blog.id} className="bg-white border border-[#f0f2f5] flex overflow-hidden rounded-[10px] flex-1 min-h-[120px] lg:min-h-[140px]">
                <div className="w-[100px] sm:w-[128px] shrink-0">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-col gap-2 sm:gap-3 justify-center p-3 sm:p-4 flex-1 min-w-0">
                  <span className="text-[#27282a] text-xs font-semibold">{blog.category}</span>
                  <h4 className="text-[#27282a] text-sm sm:text-lg font-semibold leading-tight sm:leading-6 line-clamp-2">{blog.title}</h4>
                  <span className="text-[#52565b] text-xs font-medium">{blog.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
