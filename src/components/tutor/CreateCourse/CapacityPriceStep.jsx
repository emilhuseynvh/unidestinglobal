import { useState } from "react"

const feeOptions = [
  { id: "per-session", title: "Per Session" },
  { id: "full-series", title: "For full series" },
  { id: "per-month", title: "Per month" },
]

const MIN_PRICE = 10
const MAX_PRICE = 30

const CapacityPriceStep = ({ onNext }) => {
  const [seats, setSeats] = useState(2)
  const [feeType, setFeeType] = useState(null)
  const [price, setPrice] = useState("")
  const [priceError, setPriceError] = useState("")

  const handlePriceChange = (e) => {
    const val = e.target.value
    if (val === "") { setPrice(""); setPriceError(""); return }
    const num = Number(val)
    if (isNaN(num)) return
    setPrice(val)
    if (num < MIN_PRICE || num > MAX_PRICE) {
      setPriceError(`Price must be between $${MIN_PRICE} and $${MAX_PRICE}`)
    } else {
      setPriceError("")
    }
  }

  const handlePriceBlur = () => {
    if (price === "") return
    const num = Number(price)
    if (num < MIN_PRICE) setPrice(String(MIN_PRICE))
    else if (num > MAX_PRICE) setPrice(String(MAX_PRICE))
    setPriceError("")
  }

  return (
    <div className="bg-white rounded-2xl p-6 flex flex-col gap-8">
      {/* Step Header */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="w-4 h-0.5 rounded-sm bg-[#c3c6cc]" />
          <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 4 of 5 — Capacity & Price</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="flex flex-col gap-[10.9px]">
            <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Set capacity & enrollment fee</h2>
            <p className="text-sm text-[#5b616d] leading-5 max-w-[460px]">Limit seats to create exclusivity, or open it to all. Set your per-session or series enrollment fee.</p>
          </div>
          <button onClick={onNext} className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] shrink-0 self-start sm:self-auto">
            Save & Continue
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px bg-black/[0.06]" />

      {/* Seats Slider */}
      <div className="bg-[#f9f9fa] border border-dashed border-black/[0.09] rounded-xl p-8 flex flex-col items-center gap-4">
        <div className="flex flex-col items-center gap-1.5 max-w-[376px]">
          <div className="flex flex-col items-center">
            <span className="text-[62px] font-bold text-[#0a0c11] leading-[68px] tracking-[-0.2px]">{seats}</span>
            <span className="text-lg font-medium text-[#8c929c] leading-6">Seats</span>
          </div>
          <span className="text-sm text-[#5b616d] leading-5 text-center">Max students per session</span>
        </div>
        <div className="w-full flex flex-col gap-2">
          <input
            type="range"
            min="2"
            max="50"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full h-1.5 bg-[#dddfe4] rounded appearance-none cursor-pointer accent-[#007aff] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-[#007aff] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:shadow-[0px_2px_3px_-1.5px_rgba(0,0,0,0.15)] [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-white"
          />
          <div className="flex items-center justify-between text-xs text-[#5b616d] leading-4">
            <span>2</span>
            <span>50</span>
          </div>
        </div>
      </div>

      {/* Enrollment Fee */}
      <div className="flex flex-col gap-3">
        <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Enrollment Fee</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {feeOptions.map((opt) => (
            <button key={opt.id} onClick={() => setFeeType(opt.id)} className={`p-4 rounded-xl border flex items-center gap-2 text-left ${feeType === opt.id ? "border-[rgba(0,122,255,0.4)]" : "border-black/[0.06]"} bg-white`}>
              <div className="pt-0.5 shrink-0">
                <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${feeType === opt.id ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
                  {feeType === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                </div>
              </div>
              <span className="text-base font-medium text-[#0a0c11] leading-6">{opt.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2 px-0.5">
          <label className="text-base font-medium text-[#5b616d] leading-6">Price</label>
          <span className="text-sm font-medium text-[#007aff] leading-5">${MIN_PRICE} – ${MAX_PRICE}</span>
        </div>
        <div className={`bg-white border rounded-xl min-h-[48px] px-3 flex items-center gap-2 ${priceError ? "border-[#ed4030]" : "border-black/[0.06]"}`}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M10 1.667v16.666M14.167 4.167H7.917a2.917 2.917 0 000 5.833h4.166a2.917 2.917 0 010 5.833H5" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <input type="text" value={price} onChange={handlePriceChange} onBlur={handlePriceBlur} placeholder="0" className="flex-1 bg-transparent text-sm text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c]" />
        </div>
        {priceError && <span className="text-xs text-[#ed4030] leading-4 px-0.5">{priceError}</span>}
      </div>

      {/* Discount + What for */}
      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Discount</label>
          <div className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center gap-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="8.5" stroke="#8c929c" strokeWidth="1.2" /><path d="M7 13l6-6M7.5 8a.5.5 0 100-1 .5.5 0 000 1zM12.5 13a.5.5 0 100-1 .5.5 0 000 1z" stroke="#8c929c" strokeWidth="1.2" strokeLinecap="round" /></svg>
            <input type="text" placeholder="0" className="flex-1 bg-transparent text-sm text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c]" />
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">What for?</label>
          <input type="text" placeholder="Write a note" className="bg-white border border-black/[0.06] rounded-xl min-h-[48px] px-3 text-sm text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] focus:shadow-[0px_0px_0px_3px_rgba(0,122,255,0.2)]" />
        </div>
      </div>
    </div>
  )
}

export default CapacityPriceStep
