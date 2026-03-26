import { useNavigate } from "react-router"
import RegisterSidebar from "../components/RegisterSidebar"

const imgLogo = "https://www.figma.com/api/mcp/asset/56ede561-1ad8-4567-b680-ee1e9741da93"

const RegisterVerify = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-white flex">
      <RegisterSidebar currentStep={2} />

      <div className="flex-1 flex items-center justify-center p-4 sm:p-8">
        <div className="w-full max-w-[400px] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="h-[43px] w-[56px] relative">
              <img src={imgLogo} alt="Unidestin" className="absolute inset-0 size-full object-contain" />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-[24px] font-semibold text-[#333] leading-8">Check your inbox</h1>
              <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">
                Enter the 6-digit code we sent to <span className="font-medium text-black">chinaranaq@gmail.com</span> to finish your sign up.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <input
              type="text"
              placeholder="Enter 6-digit code"
              className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors"
            />

            <div className="flex flex-col gap-4 items-center">
              <button onClick={() => navigate("/register/parent")} className="w-full h-12 bg-[#0080ff] rounded-full text-[16px] font-medium text-white leading-6 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] hover:bg-[#0066dd] transition-colors">
                Sign up
              </button>
              <button className="text-[16px] font-medium text-[#0080ff] leading-[1.4] hover:underline">
                Resend code
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterVerify
