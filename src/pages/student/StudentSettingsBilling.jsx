import { useState } from "react"

const cards = [
  { id: 1, brand: "Visa", number: "1234", expiry: "06/2025" },
  { id: 2, brand: "Mastercard", number: "1234", expiry: "06/2025" },
  { id: 3, brand: "Visa", number: "1234", expiry: "06/2025" },
]

const StudentSettingsBilling = () => {
  const [selected, setSelected] = useState(0)
  const [showNewCard, setShowNewCard] = useState(false)

  return (
    <div className="bg-white border border-black/[0.03] rounded-2xl p-6 flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Billing & Earnings</span>
        <div className="flex flex-col gap-0.5">
          <span className="text-lg font-semibold text-[#0a0c11] leading-6">Payment method</span>
          <span className="text-sm text-[#5b616d] leading-5">Update your billing details and address.</span>
        </div>
        <div className="h-px bg-[#e9eaeb]" />
      </div>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        <div className="lg:w-[280px] shrink-0 flex flex-col">
          <span className="text-sm font-semibold text-[#0a0c11] leading-5">Card details</span>
          <span className="text-sm text-[#5b616d] leading-6">Select default payment method.</span>
        </div>

        <div className="flex-1 flex flex-col gap-4 min-w-0">
          {cards.map((card, i) => (
            <div
              key={card.id}
              onClick={() => setSelected(i)}
              className={`rounded-xl p-4 flex items-start gap-1 cursor-pointer transition-colors ${
                selected === i ? "border-2 border-[#007aff] bg-white" : "border border-black/[0.06] bg-white"
              }`}
            >
              <div className="flex-1 flex gap-3 items-start">
                <div className="w-[46px] h-8 rounded-md border border-[#f5f5f5] bg-white flex items-center justify-center shrink-0">
                  {card.brand === "Visa" ? (
                    <svg width="28" height="10" viewBox="0 0 28 10" fill="none"><path d="M10.2 0.5L6.7 9.5H4.4L2.7 2.3C2.6 1.8 2.4 1.6 2 1.4C1.3 1.1 0.5 0.8 0 0.6L0.1 0.5H3.7C4.2 0.5 4.6 0.8 4.7 1.4L5.5 5.8L7.8 0.5H10.2ZM18.5 6.5C18.5 4.1 15.1 3.9 15.1 2.9C15.1 2.6 15.4 2.2 16 2.1C16.9 2 17.9 2.2 18.7 2.5L19.1 0.8C18.3 0.5 17.3 0.3 16.3 0.3C14 0.3 12.4 1.5 12.4 3.1C12.4 4.4 13.5 5 14.3 5.5C15.2 5.9 15.5 6.2 15.5 6.6C15.5 7.2 14.8 7.5 14.2 7.5C13.2 7.5 12.3 7.2 11.6 6.9L11.2 8.6C12 8.9 13 9.1 14.1 9.1C16.6 9.1 18.5 8 18.5 6.5ZM24.2 9.5H26.3L24.5 0.5H22.6C22.2 0.5 21.8 0.7 21.6 1.1L18.2 9.5H20.5L21 8.2H23.8L24.2 9.5ZM21.6 6.5L22.8 3.2L23.5 6.5H21.6ZM12 0.5L10.2 9.5H8L9.8 0.5H12Z" fill="#1A1F71" /></svg>
                  ) : (
                    <svg width="26" height="16" viewBox="0 0 26 16" fill="none"><circle cx="9.5" cy="8" r="7" fill="#EB001B" fillOpacity="0.8" /><circle cx="16.5" cy="8" r="7" fill="#F79E1B" fillOpacity="0.8" /><path d="M13 2.36a7 7 0 010 11.28 7 7 0 000-11.28z" fill="#FF5F00" fillOpacity="0.9" /></svg>
                  )}
                </div>
                <div className="flex flex-col gap-2 flex-1 min-w-0">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-[#0a0c11] leading-5">{card.brand} ending in {card.number}</span>
                    <span className="text-sm text-[#5b616d] leading-5">Expiry {card.expiry}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="text-sm font-semibold text-[#5b616d]">Set as default</button>
                    <button className="text-sm font-semibold text-[#007aff]">Edit</button>
                  </div>
                </div>
              </div>
              <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${selected === i ? "border-[6px] border-[#007aff]" : "border-2 border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`} />
            </div>
          ))}

          <button onClick={() => setShowNewCard(true)} className="text-sm font-medium text-[#5b616d] flex items-center gap-1 self-start">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.333v9.334M3.333 8h9.334" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" /></svg>
            Add new payment method
          </button>

          {showNewCard && (
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-[#0a0c11] leading-5">New card details</span>
                <span className="text-sm text-[#5b616d] leading-5">Add new payment method.</span>
              </div>
              <div className="flex flex-col gap-7">
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Name on card</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="text" defaultValue="Chinara Naghiyeva" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
                    </div>
                  </div>
                  <div className="w-[112px] shrink-0 flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Expiry date</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="text" defaultValue="06 / 2026" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Card number</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-2 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <div className="w-[34px] h-6 rounded border border-[#f5f5f5] bg-white flex items-center justify-center shrink-0">
                        <svg width="22" height="14" viewBox="0 0 22 14" fill="none"><circle cx="8" cy="7" r="6" fill="#EB001B" fillOpacity="0.8" /><circle cx="14" cy="7" r="6" fill="#F79E1B" fillOpacity="0.8" /><path d="M11 2.07a6 6 0 010 9.86 6 6 0 000-9.86z" fill="#FF5F00" fillOpacity="0.9" /></svg>
                      </div>
                      <input type="text" defaultValue="1234 1234 1234 1234" className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                    </div>
                  </div>
                  <div className="w-[110px] shrink-0 flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">CVV</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="password" defaultValue="•••" className="w-full text-sm text-[#5b616d] leading-6 outline-none px-1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[#e9eaeb]" />
              <div className="flex items-center justify-end gap-2">
                <button onClick={() => setShowNewCard(false)} className="h-10 px-[10px] rounded-[10px] border border-black/[0.06] bg-[rgba(242,242,244,0.8)] backdrop-blur-[12px] text-sm font-medium text-[#0a0c11] shadow-[0px_2px_1.5px_-0.5px_rgba(0,0,0,0.03),inset_0px_2px_3px_0px_rgba(255,255,255,0.03)]">
                  Cancel
                </button>
                <button className="h-10 px-[10px] rounded-[10px] bg-[#007aff] backdrop-blur-[12px] border border-black/[0.09] text-sm font-medium text-white flex items-center gap-1.5 shadow-[0px_1px_1px_-0.5px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15 5.25L6.75 13.5 3 9.75" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default StudentSettingsBilling
