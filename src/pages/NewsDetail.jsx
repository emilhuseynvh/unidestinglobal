import GuideHeader from "../components/GuideHeader"
import Footer from "../components/Footer"
import ArticleHeader from "../components/NewsDetail/ArticleHeader"
import ArticleContent from "../components/NewsDetail/ArticleContent"
import RelatedArticles from "../components/NewsDetail/RelatedArticles"

const NewsDetail = () => {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <GuideHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 py-8 md:py-12 flex flex-col gap-8 w-full">
        <ArticleHeader />
        <ArticleContent />
        <RelatedArticles />
      </div>
    </div>
  )
}

export default NewsDetail
