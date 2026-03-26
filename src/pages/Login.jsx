import { useState } from "react"
import { Link } from "react-router"

const Login = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("12345678")
  const [rememberMe, setRememberMe] = useState(false)

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="hidden lg:flex flex-col justify-end bg-[#f7f9fb] w-[340px] xl:w-[400px] shrink-0 p-6 pb-6 pt-8 rounded-2xl m-4 relative overflow-hidden">
        <div className="absolute left-[-136px] top-[77px] w-[523px] h-[451px] flex items-center justify-center">
          <img
            src="https://www.figma.com/api/mcp/asset/6b7106d6-54af-43c4-9fa4-f69d5457fe65"
            alt=""
            className="w-[459px] h-[251px] -rotate-[31deg] opacity-100"
          />
        </div>

        <div className="flex flex-col gap-8 relative z-10">
          <div className="bg-white border border-[#f5f5f5] rounded-xl p-4 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <span className="text-[12px] font-medium text-[#d9a055] bg-[#fcf7f1] rounded-full px-2 py-1 leading-[1.4]">Student account</span>
              <button className="size-9 flex items-center justify-center rounded-lg overflow-hidden p-2">
                <img src="https://www.figma.com/api/mcp/asset/d1b8bdf3-9c27-44a6-bb0e-b5f9392be9e1" alt="" className="size-5" />
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-[14px] font-semibold text-[#181d27] leading-5">Need help with something?</p>
              <p className="text-[14px] font-normal text-[#535862] leading-5">Our expert team are ready to help.</p>
            </div>
            <button className="h-10 bg-white border border-[#dfe1e7] rounded-full text-[16px] font-medium text-[#0d0d12] leading-6 hover:bg-[#f9f9f9] transition-colors">
              Log in as a teacher
            </button>
          </div>

          <Link to="/" className="flex items-center gap-2 text-[16px] font-medium text-[#666] leading-[1.4] hover:text-[#333] transition-colors">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15l-5-5 5-5" stroke="#666" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
            Back to unidestin.com
          </Link>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-[360px] flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-6">
            <div className="h-[43px] w-[56px] relative">
              <img src="https://www.figma.com/api/mcp/asset/20504ef9-beaf-4f56-8462-913bf1f3be0c" alt="Unidestin" className="absolute inset-0 size-full object-contain" />
            </div>
            <div className="flex flex-col items-center gap-1 text-center">
              <h1 className="text-[24px] font-semibold text-[#333] leading-8">Welcome Back! 👋</h1>
              <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">
                Continue watching the courses you have already started watching.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-7">
              <div className="flex flex-col gap-1.5">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Email adress</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#808080] focus:border-[#007aff] transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[16px] font-medium text-[#0d0d12] leading-6">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full h-12 px-3 bg-white border border-[#e6e6e6] rounded-[10px] text-[16px] text-[#181d27] leading-[1.4] outline-none placeholder:text-[#717680] focus:border-[#007aff] transition-colors"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <button
                  type="button"
                  onClick={() => setRememberMe(!rememberMe)}
                  className={`size-5 rounded-[6px] border flex items-center justify-center transition-colors ${rememberMe ? "bg-[#007aff] border-[#007aff]" : "bg-white border-[#dfe1e7]"}`}
                >
                  {rememberMe && (
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  )}
                </button>
                <span className="text-[14px] font-medium text-[#4d4d4d] leading-[1.4]">Remember for 30 days</span>
              </label>
              <button className="text-[14px] font-semibold text-[#0080ff] leading-[1.4] hover:underline">
                Forgot password
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <button className="w-full h-12 bg-[#007aff] rounded-full text-[16px] font-medium text-white leading-6 shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] hover:bg-[#0066dd] transition-colors">
                Log in
              </button>
              <button className="w-full h-12 bg-white border border-[#e4e4e7] rounded-full text-[14px] font-medium text-[#09090b] leading-5 shadow-[0px_1px_2px_0px_rgba(14,18,27,0.03)] hover:bg-[#f5f5f5] transition-colors flex items-center justify-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M18.171 8.368H17.5V8.333H10v3.333h4.709A4.998 4.998 0 015 10a5 5 0 015-5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667a8.333 8.333 0 100 16.666c4.584 0 8.333-3.75 8.333-8.333 0-.559-.057-1.104-.162-1.632z" fill="#FFC107"/><path d="M2.627 6.121l2.74 2.009A4.998 4.998 0 0110 5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667c-3.555 0-6.628 2.075-8.073 5.087l.7-.633z" fill="#FF3D00"/><path d="M10 18.333c2.583 0 4.93-.988 6.704-2.596l-2.552-2.16A4.972 4.972 0 0110 15a4.998 4.998 0 01-4.701-3.306l-2.727 2.1A8.328 8.328 0 0010 18.333z" fill="#4CAF50"/><path d="M18.171 8.368H17.5V8.333H10v3.333h4.709a5.015 5.015 0 01-1.703 2.244l2.552 2.16c-.18.163 2.775-2.027 2.775-6.07 0-.559-.057-1.104-.162-1.632z" fill="#1976D2"/></svg>
                Sign up with Google
              </button>
            </div>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="text-[14px] font-normal text-[#535862] leading-[1.4]">Don't have an account?</span>
            <Link to="/register" className="text-[14px] font-semibold text-[#007aff] leading-[1.4] hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
