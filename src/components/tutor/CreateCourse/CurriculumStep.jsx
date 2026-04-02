import { useState } from "react"
import AddSectionModal from "./AddSectionModal"
import SectionList from "./SectionList"

const CurriculumStep = ({ onNext }) => {
  const [showTip, setShowTip] = useState(true)
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 3 of 5 — Curriculum</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Build your curriculum</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Organise your content into sections and lessons. Drag to reorder. Mark lessons as free previews to attract students.</p>
          </div>
          <button
            onClick={onNext}
            className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Best Practice Toast */}
      {showTip && (
        <div className="bg-black/[0.03] backdrop-blur-[12px] rounded-3xl p-3">
          <div className="bg-white rounded-2xl p-3 flex gap-2 items-start shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),0px_3px_3px_0px_rgba(0,0,0,0.03),0px_20px_20px_-12px_rgba(0,0,0,0.03),0px_32px_32px_-16px_rgba(0,0,0,0.03),0px_56px_56px_-28px_rgba(0,0,0,0.03)]">
            <div className="w-8 h-8 rounded-full bg-[rgba(0,122,255,0.12)] flex items-center justify-center shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#007aff" strokeWidth="1.5" /><path d="M10 9v4M10 7h.008" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
            <div className="flex-1 min-w-0 px-1">
              <p className="text-base font-medium text-[#0a0c11] leading-6">Best practice:</p>
              <p className="text-sm text-[#8c929c] leading-5">
                Courses with <span className="font-semibold text-[#5b616d]">5+ sections</span> and <span className="font-semibold text-[#5b616d]">at least 2 free preview lessons</span> have 60% higher conversion rates. Aim for 8–15 min video length per lesson.
              </p>
            </div>
            <button onClick={() => setShowTip(false)} className="w-8 h-8 rounded-full border border-black/[0.06] bg-white flex items-center justify-center shrink-0 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)] backdrop-blur-[12px]">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M12.75 5.25l-7.5 7.5M5.25 5.25l7.5 7.5" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </button>
          </div>
        </div>
      )}

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Section List */}
      <SectionList />

      {/* Add Section Button */}
      <button
        onClick={() => setShowModal(true)}
        className="h-12 w-full rounded-xl border border-dashed border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-base font-medium text-[#0a0c11] flex items-center justify-center gap-2 shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]"
      >
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3.333v13.334M3.333 10h13.334" stroke="#0a0c11" strokeWidth="1.5" strokeLinecap="round" /></svg>
        Add new section
      </button>

      <AddSectionModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  )
}

export default CurriculumStep
