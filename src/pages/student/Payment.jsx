import { useState } from "react"
import { Link, useNavigate } from "react-router"
import StudentPanelHeader from "../../components/student/StudentPanelHeader"

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState("credit")
  const [saveCard, setSaveCard] = useState(true)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleCheckout = () => {
    setLoading(true)
    setTimeout(() => {
      const success = Math.random() > 0.3
      navigate(success ? "/student/payment/success" : "/student/payment/error")
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex flex-col">
      <StudentPanelHeader />

      <div className="flex-1 flex justify-center px-4 sm:px-8 pt-12 pb-24">
        <div className="w-full max-w-[1400px] flex flex-col lg:flex-row gap-6">
          <div className="flex-1 flex flex-col gap-10 min-w-0">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl font-semibold text-[#333] leading-8">General details</h2>
              <div className="flex flex-col sm:flex-row gap-5">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-base font-medium text-[#0d0d12] leading-6">Country</label>
                  <div className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 flex items-center justify-between">
                    <span className="text-base text-[#808080]">Select a country</span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M6 9l6 6 6-6" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-base font-medium text-[#0d0d12] leading-6">Email address</label>
                  <input type="email" placeholder="Enter your email" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                </div>
              </div>
              <div className="h-px bg-[#e6e6e6]" />
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold text-[#333] leading-8">Payment method</h2>
                <div className="flex items-center gap-1">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="5" y="11" width="14" height="10" rx="2" stroke="#808080" strokeWidth="1.5" /><path d="M8 11V7a4 4 0 018 0v4" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <span className="text-sm font-medium text-[#808080]">Secured connection</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <button onClick={() => setPaymentMethod("credit")} className={`flex-1 rounded-2xl p-5 flex items-center justify-between ${paymentMethod === "credit" ? "bg-white shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]" : "bg-white border border-[#e6e6e6]"}`}>
                  <div className="flex items-center gap-2">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${paymentMethod === "credit" ? "border-[6px] border-[#007aff]" : "border-2 border-[#ccc]"}`} />
                    <span className="text-base font-medium text-[#333]">Credit Card</span>
                  </div>
                  <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="16" viewBox="0 0 64 16" fill="none">
                      <mask id="mask0_27790_118916" maskUnits="userSpaceOnUse" x="15" y="2" width="34" height="12">
                        <path d="M48.7121 2.5H15.5V13.2275H48.7121V2.5Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_27790_118916)">
                        <path d="M29.896 13.0735H27.2109L28.8903 2.68896H31.5753L29.896 13.0735Z" fill="#00579F" />
                        <path d="M39.6292 2.94211C39.0996 2.73199 38.2596 2.5 37.2209 2.5C34.5693 2.5 32.702 3.91399 32.6906 5.93556C32.6686 7.42707 34.0275 8.25549 35.0438 8.75281C36.0827 9.26099 36.4358 9.59269 36.4358 10.0457C36.4252 10.7413 35.5964 11.062 34.8233 11.062C33.7513 11.062 33.1769 10.8967 32.304 10.5096L31.9504 10.3437L31.5747 12.6748C32.2044 12.9617 33.3647 13.2163 34.5693 13.2275C37.3867 13.2275 39.2209 11.8354 39.2426 9.68108C39.2534 8.49894 38.5358 7.59314 36.9888 6.85296C36.0496 6.37781 35.4745 6.05743 35.4745 5.57127C35.4855 5.12931 35.961 4.67663 37.0211 4.67663C37.894 4.65446 38.5353 4.86428 39.0212 5.07425L39.2641 5.18452L39.6292 2.94211Z" fill="#00579F" />
                        <path d="M43.1982 9.3946C43.4194 8.79802 44.2703 6.4891 44.2703 6.4891C44.2591 6.51128 44.4909 5.88151 44.6235 5.4949L44.8112 6.38969C44.8112 6.38969 45.3197 8.8754 45.4301 9.3946H43.1982ZM46.5127 2.68896H44.4357C43.7953 2.68896 43.3087 2.87661 43.0323 3.55056L39.0439 13.0733H41.8613C41.8613 13.0733 42.3252 11.7916 42.4249 11.5156H45.8723C45.9494 11.8802 46.1927 13.0733 46.1927 13.0733H48.6789L46.5127 2.68896Z" fill="#00579F" />
                        <path d="M24.9682 2.68896L22.3386 9.7702L22.0512 8.33403C21.5651 6.6769 20.0404 4.87645 18.3389 3.98122L20.7475 13.0625H23.5869L27.8074 2.68896H24.9682Z" fill="#00579F" />
                        <path d="M19.8965 2.68896H15.5764L15.5322 2.89878C18.9022 3.76053 21.134 5.83776 22.0509 8.33448L21.1118 3.56187C20.9572 2.89863 20.4821 2.71083 19.8965 2.68896Z" fill="#FAA61A" />
                      </g>
                    </svg>
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none"><circle cx="15" cy="8" r="7" fill="#EB001B" fillOpacity="0.8" /><circle cx="25" cy="8" r="7" fill="#F79E1B" fillOpacity="0.8" /><path d="M20 2.36a7 7 0 010 11.28 7 7 0 000-11.28z" fill="#FF5F00" fillOpacity="0.9" /></svg>
                  </div>
                </button>
                <button onClick={() => setPaymentMethod("paypal")} className={`flex-1 rounded-2xl p-5 flex items-center gap-2 ${paymentMethod === "paypal" ? "bg-white shadow-[0px_15px_40px_0px_rgba(0,0,0,0.13)]" : "bg-white border border-[#e6e6e6]"}`}>
                  {paymentMethod === "paypal" && <div className="w-5 h-5 rounded-full border-[6px] border-[#007aff]" />}
                  <span className="text-base font-medium text-[#333]">PayPal</span>
                </button>
              </div>
            </div>

            {paymentMethod === "credit" && (
              <div className="flex flex-col gap-7">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">Card number</label>
                    <input type="text" placeholder="XXXX XXXX XXXX XXXX" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">Card holder</label>
                    <input type="text" placeholder="" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">Expiration date</label>
                    <input type="text" placeholder="MM/YY" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">CVC</label>
                    <input type="text" placeholder="XXX" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSaveCard(!saveCard)}>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${saveCard ? "bg-[#007aff]" : "border-2 border-[#e6e6e6] bg-white"}`}>
                    {saveCard && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className="text-base font-medium text-[#333]">Save card</span>
                </div>
              </div>
            )}

            {paymentMethod === "paypal" && (
              <div className="flex flex-col gap-7">
                <div className="flex flex-col sm:flex-row gap-5">
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">Email address</label>
                    <input type="email" placeholder="Enter your email" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                  </div>
                  <div className="flex-1 flex flex-col gap-1.5">
                    <label className="text-base font-medium text-[#0d0d12] leading-6">Password</label>
                    <input type="password" placeholder="••••••••" className="bg-white border border-[#e6e6e6] rounded-[10px] h-12 px-3 text-base text-[#333] outline-none placeholder:text-[#717680] focus:border-[#007aff] transition-colors" />
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => setSaveCard(!saveCard)}>
                  <div className={`w-6 h-6 rounded-md flex items-center justify-center ${saveCard ? "bg-[#007aff]" : "border-2 border-[#e6e6e6] bg-white"}`}>
                    {saveCard && <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M11.667 3.5L5.25 9.917 2.333 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>}
                  </div>
                  <span className="text-base font-medium text-[#333]">Save PayPal account</span>
                </div>
              </div>
            )}
          </div>

          <div className="w-full lg:w-[480px] shrink-0">
            <div className="bg-[#f5f5f5] rounded-2xl p-5 flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-[#333] leading-8">Order details</h2>
                  <div className="flex flex-col gap-4">
                    {[
                      { title: "Creativity in the World of 3D Design", desc: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&h=100&fit=crop" },
                      { title: "Enhancing User Experience for Optimal Design", desc: "The Figma Master Class is a dynamic and immersive course designed to empower participants with the knowledge and skills necessary to excel in digital design.", img: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=100&h=100&fit=crop" },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3 items-center">
                        <img src={item.img} alt="" className="w-[100px] h-[100px] rounded-xl object-cover shrink-0" />
                        <div className="flex flex-col gap-1 min-w-0">
                          <span className="text-base font-semibold text-[#333] leading-6">{item.title}</span>
                          <span className="text-xs text-[#808080] leading-[1.4] line-clamp-3">{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-semibold text-[#333] leading-8">Summary</h2>
                  <div className="flex items-center justify-between text-base text-[#333]">
                    <span>Creativity in the World of 3D Design</span>
                    <span>$14.99</span>
                  </div>
                  <div className="flex items-center justify-between text-base text-[#333]">
                    <span className="truncate max-w-[264px]">Enhancing User Experience for Optimal Design</span>
                    <span>$14.99</span>
                  </div>
                  <div className="flex items-center justify-between text-xl font-medium text-[#333]">
                    <span>Original price</span>
                    <span>$29.98</span>
                  </div>
                </div>
              </div>
              <div className="h-px bg-[#e6e6e6]" />
              <div className="flex items-center justify-between">
                <span className="text-xl font-semibold text-[#333]">Total</span>
                <span className="text-[28px] font-semibold text-[#333]">$29.98</span>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-xs text-[#333]">By completing your purchase you agree to these <span className="text-[#553efb]">Terms of Service</span>.</p>
                <button onClick={handleCheckout} className="w-full h-12 bg-[#007aff] rounded-2xl text-base font-medium text-white hover:bg-[#0066d6] transition-colors">
                  Complete checkout
                </button>
              </div>
              <span className="text-xs text-[#333] text-center">30-Day Money-Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment
