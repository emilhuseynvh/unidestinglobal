import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"

const classes = [
  {
    id: 1,
    title: "English Speaking",
    group: "Class 7A",
    badge: "Live",
    badgeBg: "bg-[#ecfdf3]",
    badgeBorder: "border-[#abefc6]",
    badgeDot: "bg-[#17b26a]",
    badgeText: "text-[#067647]",
    instructor: { name: "Andrew Chapman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=48&h=48&fit=crop&crop=face" },
    date: "11 Jan 2022",
    time: "10:00 - 11:00",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=260&fit=crop",
    joinable: true,
  },
  {
    id: 2,
    title: "Spanish Speaking",
    group: "Class 8B",
    badge: "Left 6 days",
    badgeBg: "bg-[#fef3f2]",
    badgeBorder: "border-[#fecdca]",
    badgeDot: "bg-[#f04438]",
    badgeText: "text-[#b42318]",
    instructor: { name: "Maria Gonzalez", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face" },
    date: "15 Feb 2022",
    time: "14:00 - 15:00",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=260&fit=crop",
  },
  {
    id: 3,
    title: "French Speaking",
    group: "Class 9C",
    badge: "Left 4 days",
    badgeBg: "bg-[#fef3f2]",
    badgeBorder: "border-[#fecdca]",
    badgeDot: "bg-[#f04438]",
    badgeText: "text-[#b42318]",
    instructor: { name: "Jean Dupont", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" },
    date: "20 Mar 2022",
    time: "09:00 - 10:00",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=260&fit=crop",
  },
  {
    id: 4,
    title: "German Speaking",
    group: "Class 5D",
    badge: "Left 2 days",
    badgeBg: "bg-[#fef3f2]",
    badgeBorder: "border-[#fecdca]",
    badgeDot: "bg-[#f04438]",
    badgeText: "text-[#b42318]",
    instructor: { name: "Hans Müller", avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=48&h=48&fit=crop&crop=face" },
    date: "25 Apr 2022",
    time: "16:00 - 17:00",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=260&fit=crop",
  },
]

const ClassCard = ({ cls }) => (
  <div className="border border-[#e9eaeb] rounded-xl overflow-hidden bg-white h-full">
    <div className="relative h-[180px] sm:h-[200px] p-3">
      <img src={cls.image} alt={cls.title} className="size-full object-cover rounded-lg" />
      {cls.joinable && (
        <div className="absolute bottom-5 left-5 right-5">
          <button className="w-full h-10 bg-[#007aff] rounded-xl text-white text-[14px] font-medium flex items-center justify-center gap-2 hover:bg-[#0066d6] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="white" strokeWidth="1.2"/><path d="M8 5.5v5M5.5 8h5" stroke="white" strokeWidth="1.2" strokeLinecap="round"/></svg>
            Join lesson
          </button>
        </div>
      )}
    </div>

    <div className="px-4 pb-4 flex flex-col gap-3">
      <div className={`inline-flex items-center gap-1 ${cls.badgeBg} border ${cls.badgeBorder} rounded-md px-1.5 py-0.5 self-start`}>
        <span className={`size-1.5 rounded-full ${cls.badgeDot}`} />
        <span className={`text-[12px] font-medium ${cls.badgeText} leading-[18px]`}>{cls.badge}</span>
      </div>

      <div>
        <h3 className="text-[18px] font-semibold text-[#181d27] leading-6">{cls.title}</h3>
        <p className="text-[14px] text-[#717680] leading-5 mt-0.5">{cls.group}</p>
      </div>

      <div className="flex items-center gap-2.5 pt-3 border-t border-[#e9eaeb]">
        <img src={cls.instructor.avatar} alt="" className="size-8 rounded-full object-cover shrink-0" />
        <div className="flex-1 min-w-0">
          <p className="text-[14px] font-medium text-[#181d27] leading-5">{cls.instructor.name}</p>
          <div className="flex items-center gap-1 text-[12px] text-[#717680] leading-4 mt-0.5">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="1.5" y="2" width="9" height="8" rx="1" stroke="#717680" strokeWidth="1"/><path d="M1.5 4h9M4 1v2M8 1v2" stroke="#717680" strokeWidth="1" strokeLinecap="round"/></svg>
            <span>{cls.date}</span>
            <span>•</span>
            <span>{cls.time}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const MyClasses = () => {
  const prevRef = useRef(null)
  const nextRef = useRef(null)

  return (
    <div className="flex flex-col gap-5 overflow-hidden">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-[18px] sm:text-[22px] font-semibold text-[#181d27] leading-tight">My Classes</h2>
          <p className="text-[13px] sm:text-[14px] text-[#717680] leading-5 mt-1">Continue watching the courses you have already started watching.</p>
        </div>
        <div className="flex items-center gap-2">
          <button ref={prevRef} className="size-9 flex items-center justify-center rounded-full border border-[#e9eaeb] hover:bg-[#f5f5f5] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button ref={nextRef} className="size-9 flex items-center justify-center rounded-full border border-[#e9eaeb] hover:bg-[#f5f5f5] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 4l4 4-4 4" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={16}
        slidesPerView={1}
        className="w-full overflow-hidden"
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current
          swiper.params.navigation.nextEl = nextRef.current
        }}
      >
        {classes.map((cls) => (
          <SwiperSlide key={cls.id} className="h-auto">
            <ClassCard cls={cls} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default MyClasses
