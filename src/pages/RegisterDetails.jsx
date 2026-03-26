import { useNavigate } from "react-router"
import RegisterSidebar from "../components/RegisterSidebar"

const imgLogo = "https://www.figma.com/api/mcp/asset/1c56e870-8ef7-42d7-9eff-43fa5de39875"
const imgFlag = "https://www.figma.com/api/mcp/asset/6dc7b64a-e062-4922-b3cb-a20740f29131"

const RegisterDetails = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white flex">
      <RegisterSidebar currentStep={1} />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[480px] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="h-[43px] w-[56px] relative">
              <img src={imgLogo} alt="Unidestin" className="absolute inset-0 size-full object-contain" />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-[24px] font-semibold text-[#333] leading-8">Your details</h1>
              <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">
                Continue watching the courses you have already started watching.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Full name</label>
                  <input type="text" placeholder="Enter your name" className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Date of birth</label>
                  <input type="text" placeholder="Select date" className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Email adress</label>
                  <input type="email" placeholder="Enter your email" className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Phone number</label>
                  <div className="w-full h-12 bg-white border border-[#e6e6e6] rounded-[10px] flex items-center px-3 gap-2">
                    <div className="flex items-center gap-1 shrink-0">
                      <img src={imgFlag} alt="US" className="w-5 h-[15px]" />
                      <span className="text-[16px] font-medium text-[#999] tracking-[0.16px]">+1</span>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M4 6l4 4 4-4" stroke="#999" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <input type="tel" placeholder="Phone number" className="flex-1 min-w-0 text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#818898]" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Password</label>
                  <input type="password" placeholder="••••••••" className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#717680] focus:border-[#007aff] transition-colors" />
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Confirm password</label>
                  <input type="password" placeholder="••••••••" className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#717680] focus:border-[#007aff] transition-colors" />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <button onClick={() => navigate("/register/verify")} className="w-full h-12 bg-[#0080ff] rounded-full text-[16px] font-medium text-white leading-6 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] hover:bg-[#0066dd] transition-colors">
                Continue
              </button>
              <button className="w-full h-12 bg-white border border-[#e4e4e7] rounded-full text-[14px] font-medium text-[#09090b] leading-5 shadow-[0px_1px_2px_0px_rgba(14,18,27,0.03)] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.171 8.368H17.5V8.333H10v3.333h4.709A4.998 4.998 0 015 10a5 5 0 015-5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667a8.333 8.333 0 100 16.666c4.584 0 8.333-3.75 8.333-8.333 0-.559-.057-1.104-.162-1.632z" fill="#FFC107"/><path d="M2.627 6.121l2.74 2.009A4.998 4.998 0 0110 5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667c-3.555 0-6.628 2.075-8.073 5.087l.7-.633z" fill="#FF3D00"/><path d="M10 18.333c2.583 0 4.93-.988 6.704-2.596l-2.552-2.16A4.972 4.972 0 0110 15a4.998 4.998 0 01-4.701-3.306l-2.727 2.1A8.328 8.328 0 0010 18.333z" fill="#4CAF50"/><path d="M18.171 8.368H17.5V8.333H10v3.333h4.709a5.015 5.015 0 01-1.703 2.244l2.552 2.16c-.18.163 2.775-2.027 2.775-6.07 0-.559-.057-1.104-.162-1.632z" fill="#1976D2"/></svg>
                Sign up with Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterDetails
