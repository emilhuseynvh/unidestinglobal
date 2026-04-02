import { useState } from "react"

const Toggle = ({ enabled, onChange }) => (
  <button onClick={onChange} className={`w-10 h-7 rounded-[10px] p-[3px] transition-colors ${enabled ? "bg-[#007aff]" : "bg-[#dddfe4]"}`}>
    <div className={`w-[18px] h-[18px] bg-white rounded-[6px] shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)] transition-transform ${enabled ? "translate-x-[14px]" : "translate-x-0"}`} />
  </button>
)

const SettingsConfirmStep = ({ sectionTitle }) => {
  const [publishNow, setPublishNow] = useState(false)
  const [allowPreview, setAllowPreview] = useState(false)
  const [completionRequired, setCompletionRequired] = useState(false)

  return (
    <>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg font-semibold text-[#0a0c11] leading-6">Settings & confirm</h3>
        <p className="text-sm text-[#8c929c] leading-5 max-w-[460px]">Final settings for this section before adding it to your curriculum.</p>
      </div>

      <div className="flex flex-col gap-3">
        <div className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-[#0a0c11] leading-6">Publish immediately</p>
            <p className="text-sm text-[#5b616d] leading-6">Section will be visible to students once the course is live</p>
          </div>
          <Toggle enabled={publishNow} onChange={() => setPublishNow(!publishNow)} />
        </div>

        <div className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-[#0a0c11] leading-6">Allow section preview</p>
            <p className="text-sm text-[#5b616d] leading-6">Students can preview this section before purchasing</p>
          </div>
          <Toggle enabled={allowPreview} onChange={() => setAllowPreview(!allowPreview)} />
        </div>

        <div className="bg-white border border-black/[0.06] rounded-xl p-4 flex items-start gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium text-[#0a0c11] leading-6">Section completion required</p>
            <p className="text-sm text-[#5b616d] leading-6">Students must finish this section before the next one unlocks</p>
          </div>
          <Toggle enabled={completionRequired} onChange={() => setCompletionRequired(!completionRequired)} />
        </div>
      </div>

      {/* Section Summary */}
      <div className="bg-[#f9f9fa] rounded-2xl p-3 flex gap-2 items-start">
        <div className="w-8 h-8 rounded-full bg-[rgba(0,122,255,0.12)] flex items-center justify-center shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M2.5 12.917c-.833 1.25-.417 2.917.833 3.75s2.917.417 3.75-.833c.833-1.25 2.084-2.084 3.334-2.084s2.5.834 3.333 2.084c.833 1.25 2.5 1.666 3.75.833s1.667-2.5.833-3.75" stroke="#007aff" strokeWidth="1.5" strokeLinecap="round" /><circle cx="10" cy="7.5" r="3.333" stroke="#007aff" strokeWidth="1.5" /></svg>
        </div>
        <div className="flex-1 min-w-0 flex flex-col gap-1 px-1">
          <span className="text-sm text-[#8c929c] leading-5">Section summary</span>
          <span className="text-base font-medium text-[#0a0c11] leading-6">{sectionTitle || "Section 3: DNA Structure"}</span>
          <span className="text-xs text-[#8c929c] leading-4">1 lesson • 10 min total</span>
        </div>
      </div>
    </>
  )
}

export default SettingsConfirmStep
