const imgBlogImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop"
const imgBlogImage1 = "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop"
const imgImage = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop"
const imgImage1 = "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
const imgImage15 = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=400&h=300&fit=crop"

const bigBlogs = [
  {
    id: 1,
    category: "EDUCATION",
    title: "Eco-Education in Our Lives: We Can  Change the Future",
    date: "December 25",
    image: imgBlogImage
  },
  {
    id: 2,
    category: "EDUCATION",
    title: "Mastering Digital Marketing: Strategies to Boost Your Business",
    date: "December 01",
    image: imgBlogImage1
  }
]

const smallBlogs = [
  {
    id: 3,
    category: "EDUCATION",
    title: "The Impact of Branding on Business Success",
    date: "October 25",
    image: imgImage
  },
  {
    id: 4,
    category: "EDUCATION",
    title: "How Design Thinking Transforms Product Development",
    date: "October 12",
    image: imgImage1
  },
  {
    id: 5,
    category: "EDUCATION",
    title: "The Future of Online Learning: Trends to Watch",
    date: "October 02",
    image: imgImage15
  }
]

const BlogSection = () => {
  return (
    <section className="w-full py-12 md:py-[80px] px-4 sm:px-6 lg:px-[64px]">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-6 md:gap-8 items-start">
        <div className="flex flex-col items-start justify-center w-full max-w-[647px]">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[#1a1a1a] text-[28px] sm:text-[36px] md:text-[48px] font-semibold leading-[1.1] tracking-[-1.92px] w-full">
                Guides for international students
              </p>
              <p className="text-[rgba(27,31,38,0.72)] text-[14px] md:text-[16px] font-normal leading-6 w-full">
                Learn how to pick the right degree, get scholarships, and move abroad!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-4 items-stretch w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-stretch">
            {bigBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-[#f0f2f5] flex flex-col items-start overflow-hidden rounded-[10px] w-full lg:w-[427px]"
              >
                <div className="h-[200px] sm:h-[260px] lg:h-[314px] w-full relative">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <div className="bg-white flex flex-col gap-3 items-start p-4 w-full">
                  <p className="text-[#27282a] text-[12px] font-semibold leading-[18px] w-full">
                    {blog.category}
                  </p>
                  <div className="flex flex-col gap-2 items-start w-full">
                    <p className="text-[#27282a] text-[18px] md:text-[20px] font-semibold leading-[1.4] w-full">
                      {blog.title}
                    </p>
                    <p className="text-[#52565b] text-[12px] font-medium leading-[18px] whitespace-nowrap">
                      {blog.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 items-end flex-1">
            {smallBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white border border-[#f0f2f5] flex items-stretch overflow-hidden rounded-[10px] w-full flex-1"
              >
                <div className="h-full w-[100px] sm:w-[128px] relative shrink-0 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <div className="bg-white flex flex-col gap-2 sm:gap-3 items-start justify-center p-3 sm:p-4 flex-1">
                  <p className="text-[#27282a] text-[12px] font-semibold leading-[18px]">
                    {blog.category}
                  </p>
                  <p className="text-[#27282a] text-[16px] sm:text-[18px] font-semibold leading-6 line-clamp-2">
                    {blog.title}
                  </p>
                  <p className="text-[#52565b] text-[12px] font-medium leading-[18px] whitespace-nowrap">
                    {blog.date}
                  </p>
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
