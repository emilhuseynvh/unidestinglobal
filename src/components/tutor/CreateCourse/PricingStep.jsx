import { useState } from "react"

const pricingOptions = [
  { id: "one-time", title: "One-time purchase", desc: "Students pay once, access forever" },
  { id: "subscription", title: "Monthly subscription", desc: "Recurring access — great for series content" },
  { id: "free", title: "Free", desc: "Open access — grow your audience" },
]

const guaranteeOptions = ["30-day guarantee", "14-day guarantee", "No guarantee"]

const PricingStep = ({ onNext }) => {
  const [pricingModel, setPricingModel] = useState(null)
  const [selectedGuarantee, setSelectedGuarantee] = useState("")

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 5 — Pricing</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">How will you monetize?</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Choose a pricing model that fits your content and audience. You can offer one-time purchase, subscription, or free access.</p>
          </div>
          <button
            onClick={onNext}
            className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto"
          >
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Pricing Options */}
      <div className="flex flex-col gap-4">
        {pricingOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setPricingModel(opt.id)}
            className={`p-4 rounded-xl border flex items-start gap-2 text-left w-full ${
              pricingModel === opt.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"
            } bg-white`}
          >
            <div className="pt-0.5 shrink-0">
              <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${
                pricingModel === opt.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"
              }`}>
                {pricingModel === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-base font-medium text-[#0a0c11] leading-6">{opt.title}</p>
              <p className="text-sm text-[#5b616d] leading-6">{opt.desc}</p>
            </div>
          </button>
        ))}
      </div>

      {/* Discount / Coupon */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">
            Discount / Coupon <span className="text-[#8c929c] font-normal">(Optional)</span>
          </label>
          <input
            type="text"
            placeholder="EARLY50"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>
        <div className="w-full sm:w-[116px] shrink-0 flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5 whitespace-nowrap">Percentage (%)</label>
          <input
            type="text"
            placeholder="50"
            className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]"
          />
        </div>
      </div>

      {/* Money-back Guarantee */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Money-back guarantee</span>
        <div className="flex flex-wrap gap-3 py-1">
          {guaranteeOptions.map((g) => (
            <button
              key={g}
              onClick={() => setSelectedGuarantee(g)}
              className={`h-10 px-[10px] rounded-[10px] text-sm font-medium transition-colors ${
                selectedGuarantee === g ? "bg-[#0a0c11] text-white" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PricingStep
