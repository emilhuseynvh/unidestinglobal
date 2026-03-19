const imgBlogImage = "https://www.figma.com/api/mcp/asset/44c55036-ecf0-4d68-9873-fdec4e5413dd"
const imgBlogImage1 = "https://www.figma.com/api/mcp/asset/9769fdbc-d4e6-4a9c-b4b5-2fb53d80a849"
const imgImage = "https://www.figma.com/api/mcp/asset/dd1549ca-66da-4f21-a837-e1b753998ba2"
const imgImage1 = "https://www.figma.com/api/mcp/asset/57c37513-e2b5-4606-ade9-fc817b77d89d"
const imgImage15 = "https://www.figma.com/api/mcp/asset/e5221821-9f88-4f44-aea8-1d73b95ce1d1"

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
    <section className="w-full py-[80px] px-[64px]">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-8 items-start">
        <div className="flex flex-col items-start justify-center w-[647px]">
          <div className="flex flex-col items-start justify-center w-full">
            <div className="flex flex-col gap-4 items-start w-full">
              <p className="text-[#1a1a1a] text-[48px] font-semibold leading-none tracking-[-1.92px] w-full">
                Guides for international students
              </p>
              <p className="text-[rgba(27,31,38,0.72)] text-[16px] font-normal leading-6 w-full">
                Learn how to pick the right degree, get scholarships, and move abroad!
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-4 items-stretch w-full">
          <div className="flex gap-4 items-stretch">
            {bigBlogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-[#f0f2f5] flex flex-col items-start overflow-hidden rounded-[10px] w-[427px]"
              >
                <div className="h-[314px] w-full relative">
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
                    <p className="text-[#27282a] text-[20px] font-semibold leading-[30px] w-full">
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
                <div className="h-full w-[128px] relative shrink-0 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  />
                </div>
                <div className="bg-white flex flex-col gap-3 items-start justify-center p-4 flex-1">
                  <p className="text-[#27282a] text-[12px] font-semibold leading-[18px]">
                    {blog.category}
                  </p>
                  <p className="text-[#27282a] text-[18px] font-semibold leading-6 line-clamp-2">
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
