const imgTutor = "https://www.figma.com/api/mcp/asset/ca73d8cf-ba6a-44d5-b62b-df183c4f540c"
const imgPlay = "https://www.figma.com/api/mcp/asset/8aa06631-763d-43ba-bb73-fca80bbbf8ac"

const TutorProfileCard = () => {
  return (
    <div className="hidden xl:flex flex-col w-[300px] shrink-0 bg-white border border-[#dcdcdc] rounded-2xl p-5 shadow-[0px_11px_60px_0px_rgba(0,0,0,0.08)] sticky top-6 self-start">
      <div className="flex flex-col gap-6">
        <div className="w-full h-[220px] rounded-lg overflow-hidden relative shadow-[0px_0px_60px_0px_rgba(0,0,0,0.06)]">
          <img src={imgTutor} alt="Tutor" className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-[#f8e286] size-14 rounded-[28px] flex items-center justify-center hover:bg-[#f5d86a] transition-colors">
              <img src={imgPlay} alt="Play" className="size-6" />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <button className="w-full bg-[#007aff] rounded-full py-3.5 text-[16px] font-medium text-white text-center leading-[1.24] tracking-[-0.32px] hover:bg-[#0066d6] transition-colors">
            View Schedule
          </button>
          <button className="w-full border border-[#e4e4e4] rounded-full py-3.5 text-[16px] font-medium text-black text-center leading-[1.24] tracking-[-0.32px] hover:bg-[#f9f9f9] transition-colors">
            View Profile
          </button>
        </div>
      </div>
    </div>
  )
}

export default TutorProfileCard
