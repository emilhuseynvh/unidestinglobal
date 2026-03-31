const features = [
  {
    title: "HD Video & Audio",
    description: "Crystal-clear WebRTC video calls with adaptive quality. Low-latency, high-definition experience on any device.",
    icon: "https://www.figma.com/api/mcp/asset/af42834f-ffe0-4b46-9f8f-abd526197c9a",
  },
  {
    title: "Interactive Whiteboard",
    description: "Draw, annotate, and solve problems together in real-time. Supports text, shapes, freehand, and image upload.",
    icon: "https://www.figma.com/api/mcp/asset/56222262-b2ba-4fbe-a6e0-6ada71107356",
  },
  {
    title: "Live Chat",
    description: "Real-time messaging with file sharing. Send links, code snippets, and materials during the lesson.",
    icon: "https://www.figma.com/api/mcp/asset/560b0dc1-4a00-4518-a0c0-23c2f55e24df",
  },
  {
    title: "Screen Sharing",
    description: "Share your screen or a specific window. Perfect for coding, presentations, and document review.",
    icon: "https://www.figma.com/api/mcp/asset/a8f59be1-30f8-4d58-8c69-dd2ff694478c",
  },
  {
    title: "Session Recording",
    description: "Record lessons for later review. All recordings are saved to your dashboard with timestamps.",
    icon: "https://www.figma.com/api/mcp/asset/9189313d-a55e-4468-83b5-17a50753d4c8",
  },
  {
    title: "Material Sharing",
    description: "Upload and share PDFs, images, homework, and study materials directly in the classroom.",
    icon: "https://www.figma.com/api/mcp/asset/7e345522-83ee-405c-910d-4ae1200ae12a",
  },
]

const TutoringFeatures = () => {
  return (
    <section className="py-24">
      <div className="flex flex-wrap gap-x-8 gap-y-16 justify-center">
        {features.map((feature) => (
          <div key={feature.title} className="flex flex-col items-center text-center gap-5 flex-1 min-w-[320px]">
            <div className="size-12 rounded-[10px] border border-[#e9eaeb] bg-white shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex items-center justify-center relative overflow-hidden">
              <img src={feature.icon} alt="" className="size-6" />
              <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3 className="text-[20px] font-semibold text-[#181d27] leading-[30px]">{feature.title}</h3>
              <p className="text-[16px] font-normal text-[#535862] leading-6">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TutoringFeatures
