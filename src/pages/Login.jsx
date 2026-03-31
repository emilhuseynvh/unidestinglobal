import { useState } from "react"
import { Link } from "react-router"
import GuideHeader from "../components/GuideHeader"
import Footer from "../components/Footer"

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.171 8.368H17.5V8.333H10v3.333h4.709A4.998 4.998 0 015 10a5 5 0 015-5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667a8.333 8.333 0 100 16.666c4.584 0 8.333-3.75 8.333-8.333 0-.559-.057-1.104-.162-1.632z" fill="#FFC107" />
    <path d="M2.627 6.121l2.74 2.009A4.998 4.998 0 0110 5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667c-3.555 0-6.628 2.075-8.073 5.087l.7-.633z" fill="#FF3D00" />
    <path d="M10 18.333c2.583 0 4.93-.988 6.704-2.596l-2.552-2.16A4.972 4.972 0 0110 15a4.998 4.998 0 01-4.701-3.306l-2.727 2.1A8.328 8.328 0 0010 18.333z" fill="#4CAF50" />
    <path d="M18.171 8.368H17.5V8.333H10v3.333h4.709a5.015 5.015 0 01-1.703 2.244l2.552 2.16c-.18.163 2.775-2.027 2.775-6.07 0-.559-.057-1.104-.162-1.632z" fill="#1976D2" />
  </svg>
)

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen bg-[#f9f9fa] flex flex-col">
      <GuideHeader />

      <div className="flex-1 flex items-start justify-center px-4 pt-8 sm:pt-16 pb-16">
        <div className="bg-white rounded-[20px] w-full max-w-[1090px] py-8 px-4 sm:px-8">
          <div className="flex flex-col items-center gap-8 max-w-[426px] mx-auto">
            <div className="flex flex-col gap-4 items-center text-center">
              <h1 className="text-[25px] font-semibold text-[#0a0c11] leading-9 tracking-[-0.2px]">
                Login to Unidestin
              </h1>
              <div className="flex flex-col items-center">
                <span className="text-sm text-[#5b616d] leading-6">Don't have an account?</span>
                <div className="flex items-center gap-2">
                  <Link to="/register" className="text-sm font-medium text-[#007aff] leading-5">Sign up as a student</Link>
                  <span className="text-sm text-[#5b616d]">or</span>
                  <Link to="/register" className="text-sm font-medium text-[#007aff] leading-5">Sign up as a tutor</Link>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col gap-6">
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email adress</label>
                  <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Password</label>
                  <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="•••••••••••"
                      className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <button
                    type="button"
                    onClick={() => setRememberMe(!rememberMe)}
                    className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors ${
                      rememberMe ? "bg-[#007aff] border-[#007aff]" : "bg-gradient-to-b from-[#f2f2f4] to-white border-black/[0.09]"
                    }`}
                  >
                    {rememberMe && (
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    )}
                  </button>
                  <span className="text-sm font-medium text-[#0a0c11] leading-6">Remember for 30 days</span>
                </label>
                <button className="text-sm font-medium text-[#007aff] leading-5">Forgot password?</button>
              </div>

              <div className="flex flex-col gap-4">
                <button className="w-full h-12 rounded-xl bg-[#007aff] text-base font-medium text-white leading-6 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors">
                  Login
                </button>
                <button className="w-full h-12 rounded-xl border border-black/[0.06] bg-[#f2f2f4]/80 text-base font-medium text-[#0a0c11] leading-6 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#e8e8ec] transition-colors flex items-center justify-center gap-2">
                  <GoogleIcon />
                  Continue with Google
                </button>
                <p className="text-sm text-[#5b616d] text-center leading-6">
                  By clicking Log in or Continue with, you agree to Unidestin{" "}
                  <Link to="/terms" className="text-[#0a0c11] underline">Terms of Use</Link>
                  {" "}and{" "}
                  <Link to="/privacy-policy" className="text-[#0a0c11] underline">Privacy Policy</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Login
