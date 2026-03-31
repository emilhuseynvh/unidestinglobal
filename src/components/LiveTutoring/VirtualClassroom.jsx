const participants = [
  { name: "Jessica Kline", image: "https://www.figma.com/api/mcp/asset/150568cc-b9c9-43cd-839a-805083894699", hasVideo: true },
  { name: "Serena Davis", image: "https://www.figma.com/api/mcp/asset/0be4fc39-6475-46eb-9b13-0c09823aea32", hasVideo: true },
  { name: "Babak Shammas", image: "https://www.figma.com/api/mcp/asset/603636eb-65ae-41f8-9715-b21c7244e282", hasVideo: false },
  { name: "Miguel Silva", image: "https://www.figma.com/api/mcp/asset/0ffbf0e2-02b2-48b2-a3d5-4a2bcf5d9a88", hasVideo: false },
  { name: "Krystal McKinney", image: "https://www.figma.com/api/mcp/asset/a2e8e47f-9dba-4450-a3df-ce02a2c7f854", hasVideo: true },
  { name: "Aadi Kapoor", image: "https://www.figma.com/api/mcp/asset/00bbd06e-f50e-4444-9390-21acc087b67d", hasVideo: true },
  { name: "Babak Shammas", image: "https://www.figma.com/api/mcp/asset/b86bc426-6cc7-447e-a9f1-0d6783161cc0", hasVideo: true },
  { name: "Keiko Tannaka", image: "https://www.figma.com/api/mcp/asset/83639afa-5e33-41e3-bee3-a481143123ba", hasVideo: false },
  { name: "Daniela Mandera", image: "https://www.figma.com/api/mcp/asset/8231f843-0cd0-4dc8-9f18-5ef747faf1c6", hasVideo: true },
]

const toolbarItems = ["Chat", "People", "Raise", "React", "View", "Notes", "Apps", "More"]

const VirtualClassroom = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="bg-[#fafafa] rounded-2xl px-8 py-16 sm:py-18 flex flex-col items-center gap-16">
        <div className="text-center flex flex-col gap-4 max-w-[647px]">
          <h2 className="text-[36px] sm:text-[48px] font-semibold text-[#1a1a1a] leading-none tracking-[-1.92px]">
            Your Virtual Classroom
          </h2>
          <p className="text-[16px] font-normal text-[#4d4d4d] leading-[1.4]">
            A sneak peek at the live lesson experience
          </p>
        </div>

        <div className="w-full max-w-[1112px] flex flex-col gap-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-[14px] font-normal text-[#616161]">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="10" r="8" stroke="#616161" strokeWidth="1.5"/>
                <path d="M10 6v4l2.5 1.5" stroke="#616161" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span>03:32</span>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <div className="flex items-center gap-1">
                {toolbarItems.map((item) => (
                  <div key={item} className="flex flex-col items-center gap-1 px-1.5 py-1.5 w-[52px]">
                    <div className="size-6 rounded bg-[#f0f0f0]" />
                    <span className="text-[10px] font-normal text-[#616161] leading-3">{item}</span>
                  </div>
                ))}
              </div>

              <div className="w-px h-8 bg-[#e0e0e0]" />

              <div className="flex items-center gap-1">
                {["Camera", "Mic", "Share"].map((item) => (
                  <div key={item} className="flex flex-col items-center gap-1 px-1.5 py-1.5 w-[52px]">
                    <div className="size-6 rounded bg-[#f0f0f0]" />
                    <span className="text-[10px] font-normal text-[#616161] leading-3">{item}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#c4314b] text-white rounded px-3 py-1.5 text-[14px] font-semibold leading-5 flex items-center gap-2">
                <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                  <path d="M16.5 7.917v3.166M2.5 7.917v3.166M4.75 11.083h9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Leave meeting
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
            {participants.map((p, i) => (
              <div key={i} className="relative rounded-md overflow-hidden aspect-video">
                {p.hasVideo ? (
                  <img src={p.image} alt={p.name} className="size-full object-cover" />
                ) : (
                  <div className="size-full bg-[#f5f5f5] flex items-center justify-center">
                    <img src={p.image} alt={p.name} className="size-20 sm:size-[120px] rounded-full object-cover" />
                  </div>
                )}
                <div className="absolute bottom-2 left-2 bg-white/75 backdrop-blur-sm rounded px-2 py-1">
                  <span className="text-[12px] font-semibold text-[#242424] leading-4">{p.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default VirtualClassroom
