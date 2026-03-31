import { Link } from "react-router"

const StarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.333l1.787 3.62 3.996.584-2.892 2.82.683 3.976L8 10.507l-3.574 1.878.683-3.976-2.892-2.82 3.996-.584L8 1.333z" fill="#F5B731"/>
  </svg>
)

const certificates = [
  {
    company: "Google",
    location: "Sudbury, Ontario, CA",
    title: "Google UX Design",
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems",
    rating: "4.0",
    reviews: 120,
    type: "Professional Certificate",
    duration: "3-6 Months",
    logo: "https://www.figma.com/api/mcp/asset/52121f60-17ba-4c98-afdf-37a0b82aaa5a",
    image: "https://www.figma.com/api/mcp/asset/9a61b49d-dc11-401d-82f8-1e58a0db9109",
  },
  {
    company: "IBM",
    location: "Sudbury, Ontario, CA",
    title: "IBM AI Developer",
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems",
    rating: "4.0",
    reviews: 120,
    type: "Professional Certificate",
    duration: "3-6 Months",
    logo: "https://www.figma.com/api/mcp/asset/e35502e0-924c-46ec-a3c1-47e3f3d65569",
    image: "https://www.figma.com/api/mcp/asset/c342d2b4-5d0b-4e08-b6f0-2fd35b00c22c",
  },
  {
    company: "Microsoft",
    location: "Sudbury, Ontario, CA",
    title: "Microsoft Power BI Data Analyst",
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems",
    rating: "4.0",
    reviews: 120,
    type: "Professional Certificate",
    duration: "3-6 Months",
    logo: "https://www.figma.com/api/mcp/asset/6a0e434c-3d2c-42a8-a133-d0a565f9675f",
    image: "https://www.figma.com/api/mcp/asset/00e98e08-aaa6-4a1e-96b3-727fabcaacc5",
  },
  {
    company: "AWS",
    location: "Sudbury, Ontario, CA",
    title: "AI Data Engineering",
    description: "Laurentian University was once only a regional school serving Sudbury, and while it still serves the area well, it has grown into an international leader in niches such as stressed watershed systems",
    rating: "4.0",
    reviews: 120,
    type: "Professional Certificate",
    duration: "3-6 Months",
    logo: "https://www.figma.com/api/mcp/asset/19772fd8-b4ba-4ef2-b90c-5049cf867bd8",
    image: "https://www.figma.com/api/mcp/asset/b7879564-4126-4d54-9a23-f20528ffd27c",
  },
]

const CertificateCard = ({ cert }) => (
  <div className="bg-white border border-[rgba(0,0,0,0.03)] rounded-xl flex flex-col overflow-hidden group cursor-pointer hover:shadow-md transition-shadow">
    <div className="h-[167px] overflow-hidden">
      <img src={cert.image} alt={cert.title} className="size-full object-cover group-hover:scale-105 transition-transform duration-300" />
    </div>
    <div className="flex flex-col px-4 py-5 gap-5">
      <div className="flex items-center gap-2">
        <div className="size-12 rounded-[30px] border border-[#e6e6e6] bg-white flex items-center justify-center shrink-0 p-2.5">
          <img src={cert.logo} alt={cert.company} className="size-8 object-contain" />
        </div>
        <div className="flex flex-col gap-1 min-w-0">
          <span className="text-[18px] font-medium text-[#0a0c11] leading-6">{cert.company}</span>
          <span className="text-[14px] font-normal text-[#5b616d] leading-5">{cert.location}</span>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h3 className="text-[18px] font-medium text-[#0a0c11] leading-6">{cert.title}</h3>
          <p className="text-[16px] font-normal text-[#5b616d] leading-6 line-clamp-2">{cert.description}</p>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-[#0a0c11] leading-5">{cert.rating}</span>
            <StarIcon />
            <span className="text-[14px] font-normal text-[#8c929c] leading-5">Rating</span>
            <span className="text-[14px] font-normal text-[#8c929c] leading-5">({cert.reviews} Reviews)</span>
          </div>
          <div className="flex items-center gap-1 text-[12px] font-normal text-[#5b616d] leading-[18px]">
            <span>{cert.type}</span>
            <span className="size-1 rounded-full bg-[#5b616d]" />
            <span>{cert.duration}</span>
          </div>
        </div>
      </div>
    </div>
    <div className="px-4 pb-4 pt-3">
      <button className="relative h-12 px-4 rounded-xl overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-xl bg-[rgba(242,242,244,0.8)]" />
        <span className="relative text-[16px] font-medium text-[#0a0c11] leading-6">Learn more</span>
      </button>
    </div>
  </div>
)

const CertificatesSection = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-4 max-w-[647px]">
            <h2 className="text-[40px] sm:text-[50px] font-semibold text-[#0a0c11] leading-[56px] tracking-[-0.2px]">
              Build Skills. Get Certified. Stand Out.
            </h2>
            <p className="text-[16px] font-normal text-[#5b616d] leading-6 max-w-[426px]">
              Complete structured courses and receive certificates that showcase your skills and boost your professional profile.
            </p>
          </div>
          <Link to="/online-library" className="relative h-12 px-4 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 backdrop-blur-xl bg-[#007aff]" />
            <span className="relative text-[16px] font-medium text-white leading-6">All Certificated Courses</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
          {certificates.map((cert, i) => (
            <CertificateCard key={i} cert={cert} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CertificatesSection
