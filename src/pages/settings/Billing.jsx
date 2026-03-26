import { useState } from "react"

const paymentMethods = [
  { id: 1, type: "Visa", icon: "VISA", last4: "1234", expiry: "06/2025", isDefault: true },
  { id: 2, type: "Mastercard", icon: "MC", last4: "1234", expiry: "06/2025", isDefault: false },
  { id: 3, type: "Apple Pay", icon: "AP", last4: "1234", expiry: "06/2025", isDefault: false },
]

const invoices = [
  { name: "Basic Plan – Dec 2025", amount: "USD $10.00", date: "Dec 1, 2025" },
  { name: "Basic Plan – Nov 2025", amount: "USD $10.00", date: "Nov 1, 2025" },
  { name: "Basic Plan – Oct 2025", amount: "USD $10.00", date: "Oct 1, 2025" },
  { name: "Basic Plan – Sep 2025", amount: "USD $10.00", date: "Sep 1, 2025" },
  { name: "Basic Plan – Aug 2025", amount: "USD $10.00", date: "Aug 1, 2025" },
  { name: "Basic Plan – Jul 2025", amount: "USD $10.00", date: "Jul 1, 2025" },
  { name: "Basic Plan – Jun 2025", amount: "USD $10.00", date: "Jun 1, 2025" },
]

const cardIcons = {
  Visa: (
    <div className="size-10 rounded-lg border border-[#e9eaeb] flex items-center justify-center bg-white shrink-0">
      <span className="text-[12px] font-bold text-[#1a1f71] italic">VISA</span>
    </div>
  ),
  Mastercard: (
    <div className="size-10 rounded-lg border border-[#e9eaeb] flex items-center justify-center bg-white shrink-0">
      <div className="flex -space-x-1.5">
        <div className="size-4 rounded-full bg-[#eb001b]" />
        <div className="size-4 rounded-full bg-[#f79e1b]" />
      </div>
    </div>
  ),
  "Apple Pay": (
    <div className="size-10 rounded-lg border border-[#e9eaeb] flex items-center justify-center bg-white shrink-0">
      <span className="text-[11px] font-semibold text-[#181d27]"> Pay</span>
    </div>
  ),
}

const Billing = () => {
  const [selected, setSelected] = useState(1)

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-[18px] font-semibold text-[#181d27] leading-7">Payment method</h2>
        <p className="text-[14px] font-normal text-[#535862] leading-5">Update your billing details and address.</p>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
        <div className="sm:w-[200px] shrink-0">
          <label className="text-[14px] font-semibold text-[#414651] leading-5">
            Card details <span className="text-[#7f56d9]">*</span>
          </label>
          <p className="text-[14px] font-normal text-[#535862] leading-5">Select default payment method.</p>
        </div>

        <div className="flex-1 flex flex-col gap-3">
          {paymentMethods.map((method) => (
            <div
              key={method.id}
              onClick={() => setSelected(method.id)}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-colors ${
                selected === method.id ? "border-[#007aff]" : "border-[#e9eaeb] hover:border-[#d5d7da]"
              }`}
            >
              {cardIcons[method.type]}
              <div className="flex-1 min-w-0">
                <p className="text-[14px] font-medium text-[#181d27] leading-5">
                  {method.type} ending in {method.last4}
                </p>
                <p className="text-[14px] font-normal text-[#535862] leading-5">Expiry {method.expiry}</p>
                <div className="flex items-center gap-3 mt-1">
                  <button className="text-[14px] font-normal text-[#535862] leading-5 hover:text-[#414651]">Set as default</button>
                  <button className="text-[14px] font-semibold text-[#007aff] leading-5 hover:underline">Edit</button>
                </div>
              </div>
              <div className="shrink-0 mt-1">
                {selected === method.id ? (
                  <div className="size-5 rounded-md bg-[#007aff] border border-[#007aff] flex items-center justify-center">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                ) : (
                  <div className="size-5 rounded-md border border-[#dfe1e7]" />
                )}
              </div>
            </div>
          ))}

          <button className="flex items-center gap-2 text-[14px] font-medium text-[#414651] leading-5 self-center mt-2 hover:text-[#181d27] transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 3.333v9.334M3.333 8h9.334" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
            Add new payment method
          </button>
        </div>
      </div>

      <div className="border-t border-[#e9eaeb]" />

      <div className="flex flex-col gap-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-[18px] font-semibold text-[#181d27] leading-7">Billing history</h3>
            <p className="text-[14px] font-normal text-[#535862] leading-5">Access all your previous invoices.</p>
          </div>
          <button className="flex items-center gap-2 h-10 px-4 border border-[#d5d7da] rounded-lg text-[14px] font-medium text-[#414651] hover:bg-[#f9f9f9] transition-colors shrink-0">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10v2.667A1.333 1.333 0 0112.667 14H3.333A1.333 1.333 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Download all
          </button>
        </div>

        <div className="border border-[#e9eaeb] rounded-xl overflow-hidden">
          <div className="hidden sm:grid grid-cols-[auto_1fr_140px_140px_100px_40px] items-center border-b border-[#e9eaeb] bg-[#fafafa]">
            <div className="px-4 py-3"><div className="size-5 rounded-md border border-[#d5d7da]" /></div>
            <div className="px-4 py-3 text-[12px] font-medium text-[#717680]">Invoice ↓</div>
            <div className="px-4 py-3 text-[12px] font-medium text-[#717680]">Amount</div>
            <div className="px-4 py-3 text-[12px] font-medium text-[#717680]">Date</div>
            <div className="px-4 py-3 text-[12px] font-medium text-[#717680]">Status</div>
            <div className="px-4 py-3" />
          </div>

          {invoices.map((inv, i) => (
            <div key={i} className="sm:grid grid-cols-[auto_1fr_140px_140px_100px_40px] items-center border-b border-[#e9eaeb] last:border-b-0">
              <div className="px-4 py-3 hidden sm:block"><div className="size-5 rounded-md border border-[#d5d7da]" /></div>
              <div className="px-4 py-3 text-[14px] font-medium text-[#181d27] leading-5">{inv.name}</div>
              <div className="px-4 py-2 sm:py-3 text-[14px] text-[#414651] leading-5">{inv.amount}</div>
              <div className="px-4 py-2 sm:py-3 text-[14px] text-[#414651] leading-5">{inv.date}</div>
              <div className="px-4 py-2 sm:py-3">
                <span className="inline-flex items-center gap-1 text-[12px] font-medium text-[#067647] bg-[#ecfdf3] border border-[#abefc6] rounded-full px-2 py-0.5">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 7.5 2 5" stroke="#067647" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Paid
                </span>
              </div>
              <div className="px-4 py-2 sm:py-3">
                <button className="size-8 flex items-center justify-center rounded-lg hover:bg-[#f5f5f5] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M14 10v2.667A1.333 1.333 0 0112.667 14H3.333A1.333 1.333 0 012 12.667V10M4.667 6.667L8 10l3.333-3.333M8 10V2" stroke="#717680" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Billing
