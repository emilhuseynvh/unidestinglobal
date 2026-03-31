import { useState, useEffect } from "react"
import ProgramsHero from "../components/Programs/ProgramsHero"
import ProgramsFilters from "../components/Programs/ProgramsFilters"
import ProgramCard from "../components/Programs/ProgramCard"
import ProgramsSkeleton from "../components/Programs/ProgramsSkeleton"
import Pagination from "../components/student/MyCourses/Pagination"
import NoResults from "../components/Programs/NoResults"

const programs = [
  {
    id: 1, university: "Stanford University", location: "Stanford, California, USA",
    title: "Computer Science: Artificial Intelligence", description: "The Stanford AI Program offers cutting-edge insights and practical experience in the field of artificial intelligence, preparing students for innovative careers.",
    degree: "Masters Degree", duration: "2 years", deadline: "22 Mar 2026",
    tags: ["On-campus", "Part-time"], price: "$1,200", oldPrice: "$2,000",
  },
  {
    id: 2, university: "Stanford University", location: "Stanford, California, USA",
    title: "Computer Science: Artificial Intelligence", description: "The Stanford AI Program offers cutting-edge insights and practical experience in the field of artificial intelligence, preparing students for innovative careers.",
    degree: "Masters Degree", duration: "2 years", deadline: "22 Mar 2026",
    tags: ["On-campus", "Part-time"], price: "$1,200", oldPrice: "$2,000",
  },
  {
    id: 3, university: "Stanford University", location: "Stanford, California, USA",
    title: "Computer Science: Artificial Intelligence", description: "The Stanford AI Program offers cutting-edge insights and practical experience in the field of artificial intelligence, preparing students for innovative careers.",
    degree: "Masters Degree", duration: "2 years", deadline: "22 Mar 2026",
    tags: ["On-campus", "Part-time"], price: "$1,200", oldPrice: "$2,000",
  },
  {
    id: 4, university: "University of California, Berkeley", location: "Berkeley, California, USA",
    title: "Data Science and Analytics", description: "UC Berkeley's program focuses on data-driven decision making, taught by leading experts in the field of data science.",
    degree: "Masters Degree", duration: "2 years", deadline: "20 Jun 2026",
    tags: ["On-campus", "Full-time"], price: "$1,700", oldPrice: "$3,200",
  },
  {
    id: 5, university: "Stanford University", location: "Stanford, California, USA",
    title: "Artificial Intelligence", description: "Stanford's program offers cutting-edge research opportunities and a strong emphasis on AI ethics, guided by industry leaders.",
    degree: "Masters Degree", duration: "2 years", deadline: "15 Sep 2025",
    tags: ["On-campus", "Full-time"], price: "$2,000", oldPrice: "$4,000",
  },
  {
    id: 6, university: "Massachusetts Institute of Technology (MIT)", location: "Cambridge, Massachusetts, USA",
    title: "Computer Science and Machine Learning", description: "MIT's program emphasizes hands-on projects and interdisciplinary collaboration with faculty known for their pioneering work in the field.",
    degree: "Masters Degree", duration: "2 years", deadline: "1 Aug 2025",
    tags: ["On-campus", "Full-time"], price: "$2,500", oldPrice: "$5,000",
  },
  {
    id: 7, university: "California Institute of Technology", location: "Pasadena, California, USA",
    title: "Computational Science", description: "Caltech offers an advanced curriculum in computational science, emphasizing interdisciplinary approaches to complex problems.",
    degree: "Masters Degree", duration: "2 years", deadline: "10 Jul 2026",
    tags: ["On-campus", "Part-time"], price: "$2,000", oldPrice: "$4,000",
  },
  {
    id: 8, university: "Massachusetts Institute of Technology", location: "Cambridge, Massachusetts, USA",
    title: "Artificial Intelligence", description: "MIT's program focuses on innovative AI research and practical applications, preparing students for leadership in technology.",
    degree: "Masters Degree", duration: "2 years", deadline: "15 Aug 2025",
    tags: ["On-campus", "Full-time"], price: "$3,200", oldPrice: "$6,400",
  },
  {
    id: 9, university: "Stanford University", location: "Stanford, California, USA",
    title: "Data Science", description: "Stanford's data science program blends statistics, computer science, and domain expertise to tackle real-world challenges.",
    degree: "Masters Degree", duration: "2 years", deadline: "01 Sep 2025",
    tags: ["On-campus", "Full-time"], price: "$3,500", oldPrice: "$7,000",
  },
]

const Programs = () => {
  const [loading, setLoading] = useState(true)
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredPrograms = searchQuery
    ? programs.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.university.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : programs

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <ProgramsSkeleton />

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <ProgramsHero />
      <div className="px-4 sm:px-6">
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[16px] font-normal text-[#555] leading-6">
              Showing <span className="font-semibold text-[#1a1a1a]">160 tutors</span>
            </span>
            <div className="flex items-center gap-4">
              <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-[14px] font-semibold text-[#1a1a1a] border border-[#e9eaeb] rounded-lg px-4 py-2">
                Filter & Sort
              </button>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-[16px] font-medium text-[#7c7c7c] leading-6">Sort by:</span>
                <button className="flex items-center gap-1 text-[16px] font-semibold text-[#1a1a1a] leading-6">
                  Most Popular
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className={`${showFilters ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden"} lg:block lg:relative lg:w-[356px] lg:shrink-0`}>
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Filters</h2>
                <button onClick={() => setShowFilters(false)}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#333" strokeWidth="2" strokeLinecap="round"/></svg>
                </button>
              </div>
              <ProgramsFilters />
            </aside>

            <div className="flex-1 min-w-0">
              {filteredPrograms.length > 0 ? (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                    {filteredPrograms.map((program) => (
                      <ProgramCard key={program.id} program={program} />
                    ))}
                  </div>
                  <div className="mt-8">
                    <Pagination currentPage={1} totalPages={10} />
                  </div>
                </>
              ) : (
                <NoResults onClearFilters={() => setSearchQuery("")} />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Programs
