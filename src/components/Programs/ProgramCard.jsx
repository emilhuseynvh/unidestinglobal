import { Link } from "react-router"

const imgUniversity = "https://www.figma.com/api/mcp/asset/2d2414cd-3b8b-4e97-b514-12f4b6e72c5a"

const ProgramCard = ({ program }) => {
  return (
    <Link to={`/programs/${program.id}`} className="bg-white border border-[#f5f5f5] rounded-2xl px-5 py-6 flex flex-col gap-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-2">
          <div className="size-16 rounded-[30px] border border-[#e6e6e6] overflow-hidden shrink-0">
            <img src={program.logo || imgUniversity} alt={program.university} className="size-full object-cover" />
          </div>
          <div className="flex flex-col gap-1 min-w-0">
            <span className="text-[16px] font-medium text-black leading-6 truncate">{program.university}</span>
            <span className="text-[14px] font-normal text-[#666] leading-5 truncate">{program.location}</span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] font-medium text-[#333] leading-6 truncate">{program.title}</h3>
          <p className="text-[12px] font-normal text-[#4d4d4d] leading-[1.4] line-clamp-2">{program.description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[14px] font-medium text-[#666] leading-[1.4]">{program.degree}</span>
            <span className="size-[3px] rounded-full bg-[#666]" />
            <span className="text-[14px] font-medium text-[#666] leading-[1.4]">{program.duration}</span>
            <span className="size-[3px] rounded-full bg-[#666]" />
            <span className="text-[14px] font-medium text-[#ea4335] leading-[1.4]">{program.deadline}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3 mt-auto">
        <div className="flex gap-2 flex-wrap">
          {program.tags.map((tag) => (
            <span key={tag} className="border border-[#e6e6e6] rounded-[15px] px-2 py-1.5 text-[14px] font-medium text-[#333] leading-[1.4]">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <span className="text-[12px] font-normal text-[#666] leading-[1.4]">Annual tuition fee</span>
            <div className="flex items-center gap-2">
              <span className="text-[20px] font-semibold text-[#27282a] leading-[30px]">{program.price}</span>
              {program.oldPrice && (
                <span className="text-[14px] font-normal text-[#27282a] leading-5 line-through">{program.oldPrice}</span>
              )}
            </div>
          </div>
          <button className="bg-[#007aff] text-white rounded-full px-4 py-2.5 text-[16px] font-medium leading-[1.4] text-center w-full hover:bg-[#0066d6] transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </Link>
  )
}

export default ProgramCard
