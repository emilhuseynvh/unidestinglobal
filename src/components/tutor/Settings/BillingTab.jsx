import { useState } from "react"

const cards = [
  { id: 1, brand: "visa", label: "Visa ending in 1234", expiry: "Expiry 06/2025" },
  { id: 2, brand: "mastercard", label: "Mastercard ending in 1234", expiry: "Expiry 06/2025" },
  { id: 3, brand: "applepay", label: "Visa ending in 1234", expiry: "Expiry 06/2025" },
]

const CardIcon = ({ brand }) => {
  if (brand === "visa")
    return (
      <div className="w-[46px] h-8 rounded-md bg-[#1a1f71] flex items-center justify-center">
        <span className="text-white text-[11px] font-bold italic tracking-wide">VISA</span>
      </div>
    )
  if (brand === "mastercard")
    return (
      <div className="w-[46px] h-8 rounded-md border border-[#f5f5f5] bg-white flex items-center justify-center">
        <div className="flex -space-x-1.5">
          <div className="w-4 h-4 rounded-full bg-[#eb001b]" />
          <div className="w-4 h-4 rounded-full bg-[#f79e1b] opacity-80" />
        </div>
      </div>
    )
  return (
    <div className="w-[46px] h-8 rounded-md bg-black flex items-center justify-center">
      <span className="text-white text-[9px] font-semibold">Pay</span>
    </div>
  )
}

const BillingTab = () => {
  const [selected, setSelected] = useState(1)

  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <p className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Billing & Earnings</p>
        <div className="flex flex-col gap-0.5">
          <h2 className="text-lg font-semibold text-[#0a0c11] leading-6">Payment method</h2>
          <p className="text-sm text-[#5b616d] leading-5">Update your billing details and address.</p>
        </div>
        <div className="h-px bg-[#e9eaeb] mt-3" />
      </div>

      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="flex flex-col gap-0.5 sm:max-w-[200px] shrink-0">
          <span className="text-sm font-semibold text-[#0a0c11] leading-5">Card details</span>
          <span className="text-sm text-[#5b616d] leading-6">Select default payment method.</span>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {cards.map((card) => {
            const isActive = selected === card.id
            return (
              <button
                key={card.id}
                onClick={() => setSelected(card.id)}
                className={`w-full rounded-xl p-4 flex items-start gap-1 text-left transition-colors ${
                  isActive ? "border-2 border-[#007aff] bg-white" : "border border-black/[0.06] bg-white"
                }`}
              >
                <div className="flex-1 flex gap-3 items-start">
                  <CardIcon brand={card.brand} />
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-[#0a0c11] leading-5">{card.label}</span>
                      <span className="text-sm text-[#5b616d] leading-5">{card.expiry}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium text-[#5b616d] leading-5 cursor-pointer hover:text-[#0a0c11]">Set as default</span>
                      <span className="text-sm font-medium text-[#007aff] leading-5 cursor-pointer hover:underline">Edit</span>
                    </div>
                  </div>
                </div>
                <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                  isActive ? "border-[#007aff] bg-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"
                }`}>
                  {isActive && <div className="w-2 h-2 rounded-full bg-white" />}
                </div>
              </button>
            )
          })}

          <button className="flex items-center gap-1 text-sm font-medium text-[#5b616d] leading-5 self-center mt-1 hover:text-[#0a0c11]">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            Add new payment method
          </button>
        </div>
      </div>
    </div>
  )
}

export default BillingTab
