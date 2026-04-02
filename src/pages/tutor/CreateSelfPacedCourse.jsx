import { useState } from "react"
import { Link } from "react-router"
import CreateCourseStepper from "../../components/tutor/CreateCourse/CreateCourseStepper"
import BasicInfoStep from "../../components/tutor/CreateCourse/BasicInfoStep"
import CoverMediaStep from "../../components/tutor/CreateCourse/CoverMediaStep"
import CurriculumStep from "../../components/tutor/CreateCourse/CurriculumStep"
import PricingStep from "../../components/tutor/CreateCourse/PricingStep"
import ReviewPublishStep from "../../components/tutor/CreateCourse/ReviewPublishStep"

const CreateSelfPacedCourse = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BasicInfoStep onNext={() => setCurrentStep(2)} />
      case 2:
        return <CoverMediaStep onNext={() => setCurrentStep(3)} />
      case 3:
        return <CurriculumStep onNext={() => setCurrentStep(4)} />
      case 4:
        return <PricingStep onNext={() => setCurrentStep(5)} />
      case 5:
        return <ReviewPublishStep />
      default:
        return <BasicInfoStep onNext={() => setCurrentStep(2)} />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6 bg-[#f9f9fa] min-h-screen">
      {/* Back Link */}
      <Link to="/tutor/courses" className="text-sm font-medium text-[#5b616d] flex items-center gap-1.5 hover:text-[#007aff] transition-colors self-start no-underline">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Back to My Courses
      </Link>

      {/* Stepper + Content */}
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[220px] shrink-0">
          <CreateCourseStepper currentStep={currentStep} />
        </div>
        <div className="flex-1 min-w-0">
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}

export default CreateSelfPacedCourse
