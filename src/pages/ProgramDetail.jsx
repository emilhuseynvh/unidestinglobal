import { useState } from "react"
import GuideHeader from "../components/GuideHeader"
import ProgramHeader from "../components/ProgramDetail/ProgramHeader"
import ProgramSidebar from "../components/ProgramDetail/ProgramSidebar"
import ProgramOverview from "../components/ProgramDetail/ProgramOverview"
import ProgramCurriculum from "../components/ProgramDetail/ProgramCurriculum"
import ProgramRequirements from "../components/ProgramDetail/ProgramRequirements"
import ProgramFees from "../components/ProgramDetail/ProgramFees"
import ProgramScholarships from "../components/ProgramDetail/ProgramScholarships"
import ProgramGallery from "../components/ProgramDetail/ProgramGallery"
import ProgramReviews from "../components/ProgramDetail/ProgramReviews"
import SimilarPrograms from "../components/ProgramDetail/SimilarPrograms"
import Footer from "../components/Footer"

const tabs = ["Overview", "Curriculum", "Requirements", "Fees", "Scholarships", "Gallery", "Reviews"]

const ProgramDetail = () => {
  const [activeTab, setActiveTab] = useState("Overview")

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full">
        <GuideHeader />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full py-8">
        <ProgramHeader />

        <div className="flex items-center gap-6 border-b border-[#e9eaeb] mt-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-3 text-[16px] font-medium leading-6 whitespace-nowrap transition-colors border-b-2 ${
                activeTab === tab
                  ? "text-[#007aff] border-[#007aff]"
                  : "text-[#666] border-transparent hover:text-[#333]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 w-full py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex-1 min-w-0 flex flex-col gap-12">
            <ProgramOverview />
            <ProgramCurriculum />
            <ProgramRequirements />
            <ProgramFees />
            <ProgramScholarships />
            <ProgramGallery />
            <ProgramReviews />
          </div>
          <div className="hidden lg:block w-[373px] shrink-0">
            <ProgramSidebar />
          </div>
        </div>

        <div className="mt-16">
          <SimilarPrograms />
        </div>
      </div>
    </div>
  )
}

export default ProgramDetail
