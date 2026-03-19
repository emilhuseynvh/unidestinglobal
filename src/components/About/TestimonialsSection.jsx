import { useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'

const imgPerson1 = "https://www.figma.com/api/mcp/asset/f0039d4e-c7a2-4611-a957-cc99b336f0a0"
const imgArrowLeft = "https://www.figma.com/api/mcp/asset/74bbc4f1-674a-4f61-a8f2-34f7c223544e"
const imgArrowRight = "https://www.figma.com/api/mcp/asset/694fe383-0720-44a3-972e-19503967f19d"

const testimonials = [
  {
    image: imgPerson1,
    quote: "UniDestin completely transformed my IELTS preparation. After struggling for months with a 6.0 score, my tutor Aysel helped me develop a structured approach. In just 8 weeks of live sessions, I achieved my target score!",
    name: "Daniel, 25",
    location: "Yogyakarta, Indonesia"
  },
  {
    image: imgPerson1,
    quote: "The personalized attention I received was incredible. My tutor understood my learning style and adapted the lessons accordingly. I went from barely passing to excelling in my studies.",
    name: "Sarah, 22",
    location: "Berlin, Germany"
  },
  {
    image: imgPerson1,
    quote: "What sets UniDestin apart is the quality of tutors. They don't just teach, they mentor. My tutor helped me not only with academics but also with building confidence for my university interviews.",
    name: "Ahmed, 24",
    location: "Dubai, UAE"
  }
]

const TestimonialsSection = () => {
  const swiperRef = useRef(null)

  return (
    <section className="bg-[#b9cbf5] flex flex-col gap-[48px] items-start overflow-hidden px-[64px] py-[100px] rounded-[32px] w-full mt-[24px]">
      <div className="flex flex-col gap-[16px] items-start w-full">
        <div className="flex gap-[8px] items-center">
          <div className="bg-[#daece7] rounded-[8px] size-[6px]" />
          <p className="font-normal leading-[1.4] text-[14px] text-[#555]">
            Testimonials
          </p>
        </div>
        <h2 className="font-normal leading-[1.2] text-[40px] text-[#111] tracking-[-0.8px] w-[320px]">
          Real Stories from Real Learners
        </h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        onSwiper={(swiper) => { swiperRef.current = swiper }}
        className="w-full"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="flex gap-[80px] items-center w-full">
              <div className="rounded-[12px] overflow-hidden size-[480px] shrink-0">
                <img src={testimonial.image} alt="" className="object-cover size-full" />
              </div>

              <div className="flex flex-col flex-1 h-[513px] items-start justify-between py-[24px]">
                <p className="font-normal leading-[1.2] text-[32px] text-[#111] tracking-[-0.64px] w-full">
                  "{testimonial.quote}"
                </p>

                <div className="flex flex-col gap-[24px] items-start w-full">
                  <div className="flex gap-[8px] items-center w-full">
                    {testimonials.map((_, i) => (
                      <div
                        key={i}
                        className={`flex-1 h-[4px] rounded-full ${i === index ? 'bg-[#daece7]' : 'bg-[#daece7] opacity-30'}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center justify-between w-full">
                    <div className="flex flex-col">
                      <p className="font-normal leading-[1.2] text-[24px] text-[#111] tracking-[-0.24px]">
                        {testimonial.name}
                      </p>
                      <p className="font-normal leading-[1.4] text-[16px] text-[#555]">
                        {testimonial.location}
                      </p>
                    </div>

                    <div className="flex gap-[16px] items-center">
                      <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="bg-white rounded-full size-[44px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <img src={imgArrowLeft} alt="Previous" className="size-[20px]" />
                      </button>
                      <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="bg-white rounded-full size-[44px] flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        <img src={imgArrowRight} alt="Next" className="size-[20px]" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default TestimonialsSection
