import ProgramCard from "../Programs/ProgramCard"

const similarPrograms = [
  {
    id: 101, university: "Stanford University", location: "Stanford, California, USA",
    title: "Computer Science: Artificial Intelligence",
    description: "The Stanford AI Program offers cutting-edge insights and practical experience in the field of artificial intelligence.",
    degree: "Masters Degree", duration: "2 years", deadline: "22 Mar 2026",
    tags: ["On-campus", "Part-time"], price: "$1,200", oldPrice: "$2,000",
  },
  {
    id: 102, university: "Stanford University", location: "Stanford, California, USA",
    title: "Computer Science: Artificial Intelligence",
    description: "The Stanford AI Program offers cutting-edge insights and practical experience in the field of artificial intelligence.",
    degree: "Masters Degree", duration: "2 years", deadline: "22 Mar 2026",
    tags: ["On-campus", "Full-time"], price: "$1,200", oldPrice: "$2,000",
  },
]

const SimilarPrograms = () => {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[24px] font-semibold text-black leading-tight">Similar Programs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {similarPrograms.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>
    </section>
  )
}

export default SimilarPrograms
