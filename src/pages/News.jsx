import { useState, useEffect } from "react"
import { Link } from "react-router"
import GuideHeader from "../components/GuideHeader"
import Footer from "../components/Footer"
import NewsHero from "../components/News/NewsHero"
import NewsTabs from "../components/News/NewsTabs"
import ArticleCard from "../components/News/ArticleCard"
import StayUpdated from "../components/News/StayUpdated"
import TrendingSidebar from "../components/News/TrendingSidebar"
import NewsSkeleton from "../components/News/NewsSkeleton"
import Pagination from "../components/student/MyCourses/Pagination"

const articles = [
  {
    id: 1,
    category: "Platform Update",
    title: "Boosting Lead Quality Through Targeted Campaigns",
    description: "Discover how CRM-driven segmentation can increase ROI, conversion by up to 3X...",
    author: { name: "Andrew Chapman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" },
    date: "11 Jan 2022",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  },
  {
    id: 2,
    category: "Tips & Tricks",
    title: "Video: How to Ace Your IELTS Listening Test — Expert Walkthrough",
    description: "Our top IELTS tutor Josef Martinsson walks through a complete listening test session, sharing real-time strategi...",
    author: { name: "Jessica Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" },
    date: "22 Feb 2022",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    category: "Platform Update",
    title: "Creating Value-Driven Content to Attract Customers",
    description: "Explore strategies for developing content that resonates with target audiences and drives traffic...",
    author: { name: "Michael Lee", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face" },
    date: "15 Mar 2022",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    category: "Platform Update",
    title: "Leveraging Social Platforms for Brand Awareness",
    description: "Understand how to utilize social media analytics for optimizing brand reach and customer interaction...",
    author: { name: "Emily Johnson", avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=64&h=64&fit=crop&crop=face" },
    date: "10 Apr 2022",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=300&fit=crop",
  },
]

const News = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <GuideHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 flex flex-col gap-8 md:gap-10 w-full">
        <NewsHero />

        {loading ? (
          <NewsSkeleton />
        ) : (
        <>
        <NewsTabs />

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[22px] sm:text-[26px] font-semibold text-[#181d27] leading-tight">Lastes Articles</h2>
              <div className="flex items-center gap-2">
                <span className="text-[13px] text-[#717680]">Sort by:</span>
                <button className="flex items-center gap-1 text-[14px] font-semibold text-[#181d27] leading-5">
                  Newest
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#414651" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {articles.map((article) => (
                <Link to={`/news/${article.id}`} key={article.id}>
                  <ArticleCard article={article} />
                </Link>
              ))}
            </div>

            <div className="mt-8">
              <Pagination currentPage={1} totalPages={10} />
            </div>
          </div>

          <div className="w-full lg:w-[380px] lg:sticky lg:top-6">
            <TrendingSidebar />
            <div className="w-full lg:w-[380px] shrink-0 mt-6">
            <StayUpdated />
          </div>
          </div>
          
        </div>
        </>
        )}
      </div>
    </div>
  )
}

export default News
