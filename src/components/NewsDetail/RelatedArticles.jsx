import { Link } from "react-router"
import ArticleCard from "../News/ArticleCard"

const relatedArticles = [
  {
    id: 2,
    category: "Platform Update",
    title: "Boosting Lead Quality Through Targeted Campaigns",
    description: "Discover how CRM-driven segmentation can increase MQL conversion by up to 32%.",
    author: { name: "Andrew Chapman", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face" },
    date: "11 Jan 2022",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
  },
  {
    id: 3,
    category: "Tips & Tricks",
    title: "Video: How to Ace Your IELTS Listening Test — Expert Walkthrough",
    description: "Our top IELTS tutor Aysel Mammadova walks through a complete Listening test section, sharing real-time strategies and common pitfalls to avoid.",
    author: { name: "Jessica Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" },
    date: "22 Feb 2022",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  },
  {
    id: 4,
    category: "Tips & Tricks",
    title: "Video: How to Ace Your IELTS Listening Test — Expert Walkthrough",
    description: "Our top IELTS tutor Aysel Mammadova walks through a complete Listening test section, sharing real-time strategies and common pitfalls to avoid.",
    author: { name: "Jessica Smith", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&h=64&fit=crop&crop=face" },
    date: "22 Feb 2022",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&h=300&fit=crop",
  },
]

const RelatedArticles = () => {
  return (
    <section className="w-full">
      <h2 className="text-[28px] sm:text-[34px] font-bold leading-[48px] text-[#18191b] mb-8">
        Related Articles
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {relatedArticles.map((article) => (
          <Link to={`/news/${article.id}`} key={article.id}>
            <ArticleCard article={article} />
          </Link>
        ))}
      </div>
    </section>
  )
}

export default RelatedArticles
