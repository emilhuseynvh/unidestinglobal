const imgImage1 = "https://images.unsplash.com/photo-1562774053-701939374585?w=630&h=366&fit=crop"
const imgImage2 = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=96&h=96&fit=crop"
const imgImage3 = "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=96&h=96&fit=crop"
const imgImage4 = "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?w=630&h=366&fit=crop"
const imgImage = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=630&h=366&fit=crop"
const imgImage5 = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=96&h=96&fit=crop"
const imgIcon = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=20&h=20&fit=crop"
const imgVector1 = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=20&h=20&fit=crop"
const imgStars = "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=85&h=10&fit=crop"

const filters = ["Turkey", "Germany", "China", "United States", "Australia"]

const universities = [
  {
    id: 1,
    name: "Werstern University",
    location: "London, Ontario, CA",
    rating: "4.5",
    reviews: "(234)",
    description: "Since 1878, Western University has been a choice destination for minds seeking the best education at a research university in Canada. ",
    image: imgImage1,
    logo: imgImage2,
    badge: "Scholarships Available"
  },
  {
    id: 2,
    name: "Laurentian University",
    location: "Sudbury, Ontario, CA",
    rating: "4.5",
    reviews: "(234)",
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems",
    image: imgImage4,
    logo: imgImage3,
    badge: null
  },
  {
    id: 3,
    name: "Werstern University",
    location: "London, Ontario, CA",
    rating: "4.5",
    reviews: "(234)",
    description: "Since 1878, Western University has been a choice destination for minds seeking the best education at a research university in Canada. ",
    image: imgImage,
    logo: imgImage2,
    badge: null
  },
  {
    id: 4,
    name: "Lakehead University",
    location: "Thunder Bay, Ontario, CA",
    rating: "4.5",
    reviews: "(234)",
    description: "Lakehead University is small enough to offer the personalized approach to supports and education that allows students to thrive. And they're big enough to embody a truly global perspective.",
    image: imgImage,
    logo: imgImage5,
    badge: null
  }
]

const CoursesSection = () => {
  return (
    <section className="w-full py-10 sm:py-[80px] px-4 sm:px-8 lg:px-[64px]">
      <div className="max-w-[1312px] mx-auto flex flex-col gap-8 items-center">
        <div className="flex flex-col items-center justify-center w-full sm:w-[647px]">
          <div className="flex flex-col gap-5 items-center justify-center w-full">
            <div className="flex flex-col gap-4 items-center text-center w-full">
              <p className="text-[#1a1a1a] text-[32px] sm:text-[48px] font-semibold leading-none tracking-[-1.92px] w-full">
                Explore study abroad countries
              </p>
              <p className="text-[rgba(27,31,38,0.72)] text-[16px] font-normal leading-6 w-full">
                Roam through our detailed breakdowns of the study destinations around the world!
              </p>
            </div>
            <div className="flex items-start">
              <div className="flex gap-2 items-center justify-center p-1 rounded-[16px]">
                <p className="text-[#007aff] text-[16px] font-medium leading-[1.4] whitespace-nowrap">
                  Explore study abroad options
                </p>
                <div className="overflow-hidden size-5 relative">
                  <img src={imgIcon} alt="arrow" className="absolute block max-w-none size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 items-center w-full">
          <div className="bg-white border border-[#f0f2f5] flex flex-wrap gap-3 items-center px-3 py-2 rounded-[33px] shadow-[4px_5px_11px_0px_rgba(0,0,0,0.05)]">
            <div className="flex h-10 items-center justify-center p-4 w-[54px] relative">
              <div className="absolute bg-[#9bd8a9] flex items-center justify-center left-[7px] p-6 rounded-full size-10 top-0">
                <div className="overflow-hidden size-5 relative">
                  <img src={imgVector1} alt="graduation cap" className="absolute block max-w-none size-full" />
                </div>
              </div>
            </div>
            <div className="bg-[#f2f2f7] flex gap-2 items-center justify-center px-3 py-2.5 rounded-[38px]">
              <p className="text-[#007aff] text-[16px] font-medium leading-6 whitespace-nowrap">
                Canada
              </p>
            </div>
            <div className="flex flex-wrap items-center">
              {filters.map((filter, index) => (
                <div
                  key={index}
                  className="flex gap-2 items-center justify-center px-3 py-1.5 rounded-[38px] cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <p className="text-[#71757a] text-[16px] font-medium leading-6 whitespace-nowrap">
                    {filter}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch w-full">
            {universities.map((university) => (
              <div
                key={university.id}
                className="bg-white border border-[#e2e4e7] flex flex-col items-start overflow-hidden rounded-[12px] w-full relative"
              >
                <div className="aspect-[315/183] w-full relative overflow-hidden">
                  <img
                    src={university.image}
                    alt={university.name}
                    className="absolute max-w-none object-cover size-full"
                  />
                </div>

                <div className="flex flex-col items-end w-full flex-1 justify-between">
                  <div className="flex flex-col gap-5 items-start px-4 py-5 w-full">
                    <div className="flex gap-2 items-center w-full">
                      <div className="border border-[#e6e6e6] rounded-[30px] size-12 relative shrink-0 overflow-hidden">
                        <img
                          src={university.logo}
                          alt={`${university.name} logo`}
                          className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[30px] size-full"
                        />
                      </div>
                      <div className="flex flex-col gap-1 items-start flex-1">
                        <p className="text-black text-[20px] font-medium leading-6 w-full">
                          {university.name}
                        </p>
                        <p className="text-[#666] text-[14px] font-normal leading-5 w-full">
                          {university.location}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 items-start w-full">
                      <div className="flex gap-2 items-center">
                        <div className="flex gap-1 items-center">
                          <p className="text-[#18191b] text-[12px] font-semibold leading-[18px] text-center whitespace-nowrap">
                            {university.rating}
                          </p>
                          <div className="h-2.5 w-[84.632px] relative">
                            <img src={imgStars} alt="rating" className="absolute block max-w-none size-full" />
                          </div>
                        </div>
                        <p className="text-[#71757a] text-[12px] font-medium leading-[18px] text-center whitespace-nowrap">
                          {university.reviews}
                        </p>
                      </div>

                      <div className="flex flex-col items-start w-full">
                        <p className="text-[#27282a] text-[16px] font-normal leading-6 overflow-hidden text-ellipsis w-full line-clamp-3">
                          {university.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pb-4 pt-3 px-4 w-full">
                    <div className="border border-[#0077ee] flex flex-1 items-center justify-center py-[13px] px-5 rounded-full">
                      <p className="text-[#007aff] text-[16px] font-medium leading-[1.24] text-center tracking-[-0.32px] whitespace-nowrap">
                        Explore
                      </p>
                    </div>
                  </div>
                </div>

                {university.badge && (
                  <div className="absolute flex items-start left-3 top-[12.5px]">
                    <div className="bg-[#f6faff] flex gap-1.5 items-center justify-center px-3 py-1.5 rounded-full">
                      <p className="text-[#0077ee] text-[14px] font-medium leading-[1.24] text-center tracking-[-0.28px] whitespace-nowrap">
                        {university.badge}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CoursesSection
