import { useState } from "react"
import { Link, useNavigate } from "react-router"

const steps = [
  { num: 1, title: "Your details", desc: "Provide an email and password" },
  { num: 2, title: "Verify your mail", desc: "Enter your verification code" },
  { num: 3, title: "Parent Information", desc: "Provide parent details" },
  { num: 4, title: "Let's us know you!", desc: "Description" },
]

const Register = () => {
  const [selected, setSelected] = useState("student")
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#e5e5e5] flex relative">
      <div className="hidden lg:flex flex-col justify-between bg-[#f7f9fb] w-[280px] xl:w-[320px] shrink-0 rounded-2xl m-4 p-6 pt-8 pb-6">
        <div className="flex flex-col gap-11">
          <Link to="/">
            <img src="https://www.figma.com/api/mcp/asset/55a81b1a-cad6-48b3-80eb-6471a28c39d9" alt="Unidestin" className="h-[17px] w-[100px]" />
          </Link>
          <div className="flex flex-col">
            {steps.map((step, i) => (
              <div key={step.num} className="flex items-start gap-4">
                <div className="flex flex-col items-center shrink-0">
                  <div className="size-6 rounded-full border-[0.5px] border-[#c6c5c8] flex items-center justify-center">
                    <span className={`text-[16px] font-medium leading-[1.4] ${step.num === 1 ? "text-[#007aff]" : "text-[#b3b3b3]"}`}>
                      {step.num}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-7 border-l border-dashed border-[#c6c5c8] my-1" />
                  )}
                </div>
                <div className="flex flex-col gap-1 pt-0.5">
                  <p className="text-[16px] font-normal text-black leading-[1.4]">
                    {step.title}
                  </p>
                  <p className="text-[16px] font-normal text-[#808080] leading-[1.4]">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link to="/" className="flex items-center gap-2 text-[16px] font-medium text-[#666] leading-[1.4] hover:text-[#333] transition-colors">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M12.5 15l-5-5 5-5" stroke="#666" strokeWidth="1.667" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Back to unidestin.com
        </Link>
      </div>

      <div className="fixed inset-0 bg-black/40 z-40" />
      <div className="flex-1 flex items-center justify-center p-4 sm:p-8 relative z-50">
        <div className="bg-white border border-[#e6e6e6] rounded-2xl w-full max-w-[860px] p-6 sm:p-8 flex flex-col gap-8">
          <div className="flex items-center justify-between p-1">
            <h2 className="text-[20px] font-semibold text-[#333] leading-[1.4]">
              Choose an account type
            </h2>
            <Link to="/login" className="size-5 flex items-center justify-center hover:opacity-70 transition-opacity shrink-0">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M15 5L5 15M5 5l10 10" stroke="#333" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={() => setSelected("student")}
              className={`flex items-start gap-1 p-4 rounded-xl border transition-colors text-left ${
                selected === "student" ? "border-[#007aff]" : "border-[#e9eaeb] hover:border-[#d5d7da]"
              }`}
            >
              <div className="flex flex-1 gap-4 items-start min-w-0">
                <div className="size-8 rounded-md bg-white border border-[#e9eaeb] flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="https://www.figma.com/api/mcp/asset/c685586f-edf7-4939-b04a-3cbda158220d" alt="" className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[16px] font-medium text-[#414651] leading-6">I want to learn</span>
                    <span className="text-[12px] font-medium text-[#d9a055] bg-[#fcf7f1] rounded-full px-2 py-1 leading-[1.4]">Student account</span>
                  </div>
                  <p className="text-[14px] font-normal text-[#535862] leading-5">
                    Includes up to 10 users, 20 GB individual data and access to all features.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                {selected === "student" ? (
                  <div className="size-5 rounded-md bg-[#0080ff] border border-[#0080ff] flex items-center justify-center overflow-hidden">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                ) : (
                  <div className="size-5 rounded-md border border-[#dfe1e7] bg-white" />
                )}
              </div>
            </button>

            <button
              onClick={() => setSelected("tutor")}
              className={`flex items-start gap-1 p-4 rounded-xl border transition-colors text-left ${
                selected === "tutor" ? "border-[#007aff]" : "border-[#e9eaeb] hover:border-[#d5d7da]"
              }`}
            >
              <div className="flex flex-1 gap-4 items-start min-w-0">
                <div className="size-8 rounded-md bg-white border border-[#e9eaeb] flex items-center justify-center shrink-0 overflow-hidden">
                  <img src="https://www.figma.com/api/mcp/asset/a707eb01-7be3-4418-a462-52f3b6045ec7" alt="" className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[16px] font-medium text-[#414651] leading-6">I want to teach</span>
                    <span className="text-[12px] font-medium text-[#53a862] bg-[#f1f9f4] rounded-full px-2 py-1 leading-[1.4]">Tutor account</span>
                  </div>
                  <p className="text-[14px] font-normal text-[#535862] leading-5">
                    Includes up to 10 users, 20 GB individual data and access to all features.
                  </p>
                </div>
              </div>
              <div className="shrink-0">
                {selected === "tutor" ? (
                  <div className="size-5 rounded-md bg-[#0080ff] border border-[#0080ff] flex items-center justify-center overflow-hidden">
                    <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                ) : (
                  <div className="size-5 rounded-md border border-[#dfe1e7] bg-white" />
                )}
              </div>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-baseline gap-1">
              <span className="text-[14px] font-normal text-[#535862]">Already have an account?</span>
              <Link to="/login" className="text-[14px] font-semibold text-[#007aff] hover:underline">Login</Link>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/login" className="h-12 px-4 border border-[#dfe1e7] rounded-full text-[16px] font-medium text-[rgba(0,0,5,0.95)] leading-6 flex items-center justify-center hover:bg-[#f5f5f5] transition-colors">
                Cancel
              </Link>
              <button onClick={() => navigate("/register/details")} className="h-12 px-4 bg-[#0080ff] rounded-full text-[16px] font-medium text-white leading-6 flex items-center justify-center shadow-[0px_1px_3px_0px_rgba(13,13,18,0.05),0px_1px_2px_0px_rgba(13,13,18,0.04)] hover:bg-[#0066dd] transition-colors">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
