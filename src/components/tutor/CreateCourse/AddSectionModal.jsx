import { useState, useEffect } from "react"

const modalSteps = [
  { number: 1, label: "Section Info" },
  { number: 2, label: "Add Lessons" },
  { number: 3, label: "Settings & Confirm" },
]

import LessonTypeSelector from "./modal/LessonTypeSelector"
import LessonDetailsForm from "./modal/LessonDetailsForm"
import QuizDetailsForm from "./modal/QuizDetailsForm"
import ArticleDetailsForm from "./modal/ArticleDetailsForm"
import ResourceDetailsForm from "./modal/ResourceDetailsForm"
import SettingsConfirmStep from "./modal/SettingsConfirmStep"

const AddSectionModal = ({ isOpen, onClose }) => {
  const [modalStep, setModalStep] = useState(1)
  const [sectionTitle, setSectionTitle] = useState("")
  const [sectionDesc, setSectionDesc] = useState("")
  const [lessonTitle, setLessonTitle] = useState("")
  const [lessonType, setLessonType] = useState(null)
  const [selectedDuration, setSelectedDuration] = useState("")
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setAnimating(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true))
      })
    } else {
      document.body.style.overflow = ""
      setVisible(false)
      const timer = setTimeout(() => setAnimating(false), 300)
      return () => clearTimeout(timer)
    }
    return () => { document.body.style.overflow = "" }
  }, [isOpen])

  if (!isOpen && !animating) return null

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => {
      setModalStep(1)
      setSectionTitle("")
      setSectionDesc("")
      onClose()
    }, 300)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${visible ? "opacity-100" : "opacity-0"}`}
        onClick={handleClose}
      />

      {/* Slide-in Panel */}
      <div className={`relative w-full max-w-[672px] my-4 mr-4 bg-white rounded-[18px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)] overflow-y-auto transition-transform duration-300 ease-out ${visible ? "translate-x-0" : "translate-x-[calc(100%+16px)]"}`}>
        <div className="p-5 flex flex-col gap-6 min-h-full">
          {/* Header + Close */}
          <div className="flex flex-col gap-6 border-b border-black/[0.06] pb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">Add new section</h2>
              <button onClick={handleClose} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] backdrop-blur-[12px]">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-black/[0.06]" />

            {/* Mini Stepper */}
            <div className="flex items-center justify-between px-1">
              {modalSteps.map((step) => (
                <div key={step.number} className="flex flex-col items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-base font-medium border ${
                    step.number === modalStep
                      ? "bg-[rgba(0,122,255,0.12)] border-[rgba(0,122,255,0.2)] text-[#007aff]"
                      : step.number < modalStep
                        ? "bg-[#E3EEE4] border-[rgba(64,155,63,0.2)] text-[#338732]"
                        : "bg-[#f2f2f4] border-black/[0.06] text-[#8c929c]"
                  }`}>
                    {step.number < modalStep ? (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13.333 4L6 11.333 2.667 8" stroke="#338732" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    ) : (
                      step.number
                    )}
                  </div>
                  <span className={`text-base font-medium leading-6 ${
                    step.number === modalStep ? "text-[#007aff]" : step.number < modalStep ? "text-[#0a0c11]" : "text-[#8c929c]"
                  }`}>
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Form Content */}
          <div className="flex-1 flex flex-col gap-6">
            {modalStep === 1 && (
              <>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Section title & info</h3>
                  <p className="text-sm text-[#8c929c] leading-5 max-w-[460px]">Give this section a clear title that describes what students will learn.</p>
                </div>
                <div className="flex flex-col gap-7">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
                      Section Title <span className="text-[#8c929c] font-normal">(0/80)</span>
                    </label>
                    <input
                      type="text"
                      value={sectionTitle}
                      onChange={(e) => setSectionTitle(e.target.value)}
                      placeholder="e.g. Section 1: Cell Biology"
                      className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
                    />
                    <p className="text-sm text-[#8c929c] leading-5 px-0.5">Keep it short and descriptive — students scan section titles before enrolling.</p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
                      Full Description <span className="text-[#8c929c] font-normal">(0/280)</span>
                    </label>
                    <textarea
                      value={sectionDesc}
                      onChange={(e) => setSectionDesc(e.target.value)}
                      placeholder="What will students learn  this section? Any prerequisites?"
                      className="bg-white border border-black/[0.06] rounded-xl min-h-[104px] px-3 py-2.5 text-base text-[#0a0c11] leading-6 outline-none resize-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
                    />
                  </div>
                </div>
              </>
            )}

            {modalStep === 2 && (
              <>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Add lessons</h3>
                  <p className="text-sm text-[#8c929c] leading-5 max-w-[460px]">Populate this section with video lessons, quizzes, articles, or resource files. You can add more after creating the section.</p>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Add lesson type:</h3>
                  <LessonTypeSelector selected={lessonType} onSelect={setLessonType} />
                </div>
                {lessonType === "video" && (
                  <LessonDetailsForm lessonTitle={lessonTitle} setLessonTitle={setLessonTitle} selectedDuration={selectedDuration} setSelectedDuration={setSelectedDuration} />
                )}
                {lessonType === "quiz" && (
                  <QuizDetailsForm lessonTitle={lessonTitle} setLessonTitle={setLessonTitle} />
                )}
                {lessonType === "article" && (
                  <ArticleDetailsForm lessonTitle={lessonTitle} setLessonTitle={setLessonTitle} />
                )}
                {lessonType === "resource" && (
                  <ResourceDetailsForm lessonTitle={lessonTitle} setLessonTitle={setLessonTitle} />
                )}
              </>
            )}

            {modalStep === 3 && (
              <SettingsConfirmStep sectionTitle={sectionTitle} />
            )}
          </div>

          {/* Footer */}
          <div className="flex flex-col gap-6 mt-auto">
            <div className="h-px bg-black/[0.06]" />
            <div className="flex items-center justify-end gap-3">
              <button onClick={handleClose} className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                Cancel
              </button>
              <button
                onClick={() => modalStep < 3 ? setModalStep(modalStep + 1) : handleClose()}
                className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]"
              >
                {modalStep === 3 ? "Add Section" : "Continue"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddSectionModal
