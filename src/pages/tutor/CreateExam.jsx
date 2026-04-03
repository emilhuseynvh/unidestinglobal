import { useState } from "react"
import { Link } from "react-router"
import ExamTypeStepper from "../../components/tutor/CreateExam/ExamTypeStepper"
import ExamTypeStep from "../../components/tutor/CreateExam/ExamTypeStep"
import BasicDetailsStep from "../../components/tutor/CreateExam/BasicDetailsStep"
import QuestionsStep from "../../components/tutor/CreateExam/QuestionsStep"
import AssignStudentsStep from "../../components/tutor/CreateExam/AssignStudentsStep"
import SettingsStep from "../../components/tutor/CreateExam/SettingsStep"
import ReviewPublishStep from "../../components/tutor/CreateExam/ReviewPublishStep"

const CreateExam = () => {
  const [currentStep, setCurrentStep] = useState(1)

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <ExamTypeStep onNext={() => setCurrentStep(2)} />
      case 2:
        return <BasicDetailsStep onNext={() => setCurrentStep(3)} />
      case 3:
        return <QuestionsStep onNext={() => setCurrentStep(4)} />
      case 4:
        return <AssignStudentsStep onNext={() => setCurrentStep(5)} />
      case 5:
        return <SettingsStep onNext={() => setCurrentStep(6)} />
      case 6:
        return <ReviewPublishStep onGoToStep={setCurrentStep} />
      default:
        return <ExamTypeStep onNext={() => setCurrentStep(2)} />
    }
  }

  return (
    <div className="px-6 lg:px-10 py-6 flex flex-col gap-6 bg-[#f9f9fa] min-h-screen">
      <Link to="/tutor/exams" className="text-sm font-medium text-[#5b616d] flex items-center gap-1.5 hover:text-[#007aff] transition-colors self-start no-underline">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12l-4-4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        Back to Exams
      </Link>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[220px] shrink-0">
          <ExamTypeStepper currentStep={currentStep} />
        </div>
        <div className="flex-1 min-w-0">
          {renderStepContent()}
        </div>
      </div>
    </div>
  )
}

export default CreateExam
