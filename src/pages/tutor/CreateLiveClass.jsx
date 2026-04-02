import { useState } from "react"
import { Link } from "react-router"
import CreateCourseStepper from "../../components/tutor/CreateCourse/CreateCourseStepper"
import LiveClassBasicInfoStep from "../../components/tutor/CreateCourse/LiveClassBasicInfoStep"
import CoverMediaStep from "../../components/tutor/CreateCourse/CoverMediaStep"
import ReviewPublishStep from "../../components/tutor/CreateCourse/ReviewPublishStep"
import ScheduleStep from "../../components/tutor/CreateCourse/ScheduleStep"
import CapacityPriceStep from "../../components/tutor/CreateCourse/CapacityPriceStep"

const liveSteps = [
  { number: 1, title: "Class Details", desc: "Title, description, level" },
  { number: 2, title: "Cover & Media", desc: "Thumbnail and branding" },
  { number: 3, title: "Schedule", desc: "Date, time, recurrence" },
  { number: 4, title: "Capacity & Price", desc: "Seats and enrollment fee" },
  { number: 5, title: "Review & Publish", desc: "Final check and go live" },
]

const CreateLiveClass = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <LiveClassBasicInfoStep onNext={() => setCurrentStep(2)} />
      case 2:
        return <CoverMediaStep onNext={() => setCurrentStep(3)} />
      case 3:
        return <ScheduleStep onNext={() => setCurrentStep(4)} />
      case 4:
        return <CapacityPriceStep onNext={() => setCurrentStep(5)} />
      case 5:
        return <ReviewPublishStep />
      default:
        return <LiveClassBasicInfoStep onNext={() => setCurrentStep(2)} />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6 bg-[#f9f9fa] min-h-screen">
      <Link to="/tutor/courses" className="text-sm font-medium text-[#5b616d] flex items-center gap-1.5 hover:text-[#007aff] transition-colors self-start no-underline">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Back to My Courses
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[220px] shrink-0">
          <CreateCourseStepper currentStep={currentStep} steps={liveSteps} />
        </div>
        <div className="flex-1 min-w-0">
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}

export default CreateLiveClass
