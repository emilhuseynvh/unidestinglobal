const mainAnnouncement = {
  image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
  title: "Platform Maintenance — Feb 15, 2026",
  description: "UniDestin will undergo scheduled maintenance on Saturday, February 15th from 02:00 to 06:00 GMT+4. Live sessions during this period will be rescheduled automatically.",
  date: "Feb 10",
  duration: "5 min",
}

const sideAnnouncements = [
  { title: "New Certificate Verification System Launched", description: "New Certificate Verification System Launched", link: "Read more" },
  { title: "UniDestin Reaches 50,000 Students!", description: "Thank you to our amazing community! We've hit 50K registered students across 80+ countries...", link: "Read more" },
  { title: "New Certificate Verification System Launched", description: "New Certificate Verification System Launched", link: "Read more" },
]

const Announcements = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-[28px] sm:text-[32px] font-semibold text-[#333] leading-[1.4]">Announcements</h2>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden h-[240px]">
            <img src={mainAnnouncement.image} alt={mainAnnouncement.title} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-semibold text-[#333]">{mainAnnouncement.title}</h3>
            <p className="text-sm text-[#666] leading-[1.4]">{mainAnnouncement.description}</p>
            <div className="flex items-center gap-3 text-xs text-[#808080]">
              <span>📅 {mainAnnouncement.date}</span>
              <span>🕐 {mainAnnouncement.duration}</span>
            </div>
            <button className="text-[#007aff] text-sm font-medium self-start mt-1">Read more →</button>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col gap-5">
          {sideAnnouncements.map((a, i) => (
            <div key={i} className="flex flex-col gap-2 pb-5 border-b border-[#f0f0f0] last:border-0">
              <h4 className="text-base font-semibold text-[#333]">{a.title}</h4>
              <p className="text-sm text-[#666] leading-[1.4]">{a.description}</p>
              <button className="text-[#007aff] text-sm font-medium self-start">{a.link} →</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Announcements
