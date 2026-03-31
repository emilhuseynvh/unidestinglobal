import { useState, useEffect } from "react"
import LibraryHero from "../components/OnlineLibrary/LibraryHero"
import LibrarySkeleton from "../components/OnlineLibrary/LibrarySkeleton"
import LibraryMetrics from "../components/OnlineLibrary/LibraryMetrics"
import LibraryCategories from "../components/OnlineLibrary/LibraryCategories"
import LibraryFilters from "../components/OnlineLibrary/LibraryFilters"
import ResourceCard from "../components/OnlineLibrary/ResourceCard"
import LibraryCTA from "../components/OnlineLibrary/LibraryCTA"
import Pagination from "../components/student/MyCourses/Pagination"

const resources = [
  {
    id: 1,
    category: "IETLS",
    categoryColor: "bg-[#eff8ff] border-[#b2ddff] text-[#175cd3]",
    isFree: true,
    rating: "4.9/5",
    reviews: 214,
    title: "IELTS Academic Writing Task 2 — 50 Model Essays",
    author: { name: "Nigar Aliyeva", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" },
    downloads: "12,400",
    pages: "86 pages",
    format: "PDF 2.4 MB",
    level: "All Levels",
    language: "English",
    price: null,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    category: "Programming",
    categoryColor: "bg-[#f0fdf4] border-[#bbf7d0] text-[#15803d]",
    isFree: false,
    rating: "4.8/5",
    reviews: 150,
    title: "Python Crash Course — Interactive E-Book",
    author: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" },
    downloads: "8,900",
    pages: "120 pages",
    format: "PDF 3.1 MB",
    level: "Intermediate",
    language: "English",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    category: "Business",
    categoryColor: "bg-[#eff8ff] border-[#b2ddff] text-[#175cd3]",
    isFree: true,
    rating: "4.7/5",
    reviews: 300,
    title: "Digital Marketing Strategy — Complete Slide Deck",
    author: { name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&h=64&fit=crop&crop=face" },
    downloads: "15,000",
    pages: "200 pages",
    format: "E-book 5.0 MB",
    level: "All Levels",
    language: "English",
    price: null,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    category: "IETLS",
    categoryColor: "bg-[#eff8ff] border-[#b2ddff] text-[#175cd3]",
    isFree: true,
    rating: "4.9/5",
    reviews: 214,
    title: "IELTS Academic Writing Task 2 — 50 Model Essays",
    author: { name: "Nigar Aliyeva", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" },
    downloads: "12,400",
    pages: "86 pages",
    format: "Audio 2.4 MB",
    level: "All Levels",
    language: "English",
    price: null,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: 5,
    category: "TOEFL",
    categoryColor: "bg-[#fffbeb] border-[#fef3c7] text-[#b45309]",
    isFree: false,
    rating: "4.8/5",
    reviews: 150,
    title: "TOEFL Speaking: 30 Complete Practice Tests",
    author: { name: "John Doe", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" },
    downloads: "8,900",
    pages: "120 pages",
    format: "PDF 3.1 MB",
    level: "Intermediate",
    language: "English",
    price: "$4.99",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
  {
    id: 6,
    category: "SAT",
    categoryColor: "bg-[#fef3f2] border-[#fecdca] text-[#b42318]",
    isFree: true,
    rating: "4.7/5",
    reviews: 300,
    title: "SAT Math Prep: 10 Full-Length Practice Tests",
    author: { name: "Jane Smith", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&h=64&fit=crop&crop=face" },
    downloads: "15,000",
    pages: "200 pages",
    format: "Video 5.0 MB",
    level: "All Levels",
    language: "English",
    price: null,
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=400&h=300&fit=crop",
  },
]

const OnlineLibrary = () => {
  const [showFilters, setShowFilters] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) return <LibrarySkeleton />

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <LibraryHero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <LibraryMetrics />
        <LibraryCategories />
      </div>

      <div className="px-4 sm:px-6 md:px-10 lg:px-16">
        <section className="py-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <h2 className="text-[16px] font-normal text-[#555] leading-6">
                Showing <span className="font-semibold text-[#1a1a1a]">160 tutors</span>
              </h2>
            </div>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden flex items-center gap-2 text-[14px] font-semibold text-[#1a1a1a] border border-[#e9eaeb] rounded-lg px-4 py-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 4h12M4 8h8M6 12h4" stroke="#333" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                Filter & Sort
              </button>
              <div className="hidden lg:flex items-center gap-2">
                <span className="text-[16px] font-medium text-[#7c7c7c] leading-6">Sort by:</span>
                <button className="flex items-center gap-1 text-[16px] font-semibold text-[#1a1a1a] leading-6">
                  Most Popular
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 6l4 4 4-4" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex gap-8">
            <aside className={`${showFilters ? "fixed inset-0 z-50 bg-white p-6 overflow-y-auto" : "hidden"} lg:block lg:relative lg:w-[280px] lg:shrink-0`}>
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-[20px] font-semibold text-[#1a1a1a]">Filters</h2>
                <button onClick={() => setShowFilters(false)} className="text-[#333]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>
              <LibraryFilters />
            </aside>

            <div className="flex-1 min-w-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
              <div className="mt-8">
                <Pagination currentPage={1} totalPages={10} />
              </div>
            </div>
          </div>
        </section>

        <LibraryCTA />
      </div>
    </div>
  )
}

export default OnlineLibrary
