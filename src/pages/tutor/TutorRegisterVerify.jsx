import { useState } from "react"
import { useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import GuideHeader from "../../components/GuideHeader"
import Footer from "../../components/Footer"
import RegisterSidebar from "../../components/tutor/RegisterSidebar"
import { useVerifyOtpMutation, useResendOtpMutation } from "../../store/api/authApi"
import { setEmailVerified } from "../../store/slices/registerSlice"
import { toast } from "react-toastify"

const TutorRegisterVerify = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const email = useSelector((s) => s.register.user.email)
  const [verifyOtp, { isLoading }] = useVerifyOtpMutation()
  const [resendOtp, { isLoading: isResending }] = useResendOtpMutation()

  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const [resendMsg, setResendMsg] = useState("")

  const handleVerify = async () => {
    if (code.length !== 6) {
      setError("Verification code must be 6 digits")
      return
    }
    try {
      await verifyOtp({ email, code }).unwrap()
      dispatch(setEmailVerified(true))
      toast.success("Email verified successfully")
      navigate("/tutor/register/education")
    } catch (err) {
      const msg = err?.data?.message || "Invalid or expired verification code"
      setError(msg)
      toast.error(msg)
    }
  }

  const handleResend = async () => {
    setResendMsg("")
    setError("")
    try {
      const res = await resendOtp({ email }).unwrap()
      setResendMsg(res.message || "Code resent successfully")
      toast.success("Code resent successfully")
    } catch (err) {
      const msg = err?.data?.message || "Failed to resend code"
      setError(msg)
      toast.error(msg)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleVerify()
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GuideHeader />

      <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8">
        <div className="bg-[#f9f9fa] rounded-[20px] max-w-[1312px] mx-auto p-6 sm:p-8 lg:p-11 flex flex-col lg:flex-row gap-8">
          <RegisterSidebar currentStep={1} />

          <div className="flex-1 bg-white rounded-[20px] px-6 sm:px-8 lg:px-11 pt-8 lg:pt-11 pb-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-[#8c929c]" />
                <span className="text-xs font-medium text-[#8c929c]">STEP 1.5 OF 3</span>
                <div className="w-4 h-px bg-[#8c929c]" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Check your inbox</h1>
                <p className="text-base text-[#5b616d] leading-6">
                  Enter the 6-digit code we sent to <span className="font-medium text-[#0a0c11]">{email}</span> to continue your registration.
                </p>
              </div>
            </div>

            <div className="h-px bg-[#e6e6e6]" />

            <div className="flex flex-col gap-6 max-w-[400px]">
              {error && (
                <div className="bg-[rgba(237,64,48,0.08)] border border-[rgba(237,64,48,0.2)] rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="#ed4030" strokeWidth="1.5" /><path d="M10 7v3M10 13h.01" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <span className="text-sm text-[#df2917] leading-5">{error}</span>
                </div>
              )}
              {resendMsg && (
                <div className="bg-[rgba(64,155,63,0.08)] border border-[rgba(64,155,63,0.2)] rounded-xl px-4 py-3 flex items-center gap-3">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="#409b3f" strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke="#409b3f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-sm text-[#338732] leading-5">{resendMsg}</span>
                </div>
              )}

              <div className="flex flex-col gap-1">
                <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Verification code</label>
                <div className={`border rounded-xl min-h-[48px] px-3 flex items-center transition-colors ${error ? "border-[#ed4030]" : "border-black/[0.06] focus-within:border-[#007aff] focus-within:border-2"}`}>
                  <input
                    type="text"
                    maxLength={6}
                    value={code}
                    onChange={(e) => { setCode(e.target.value.replace(/\D/g, "")); if (error) setError("") }}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter 6-digit code"
                    className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1 tracking-[4px]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <button
                  disabled={isLoading}
                  onClick={handleVerify}
                  className={`w-full h-12 rounded-xl text-base font-medium text-white leading-6 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] transition-colors ${
                    isLoading ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" /><path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Verifying...
                    </span>
                  ) : "Verify & Continue"}
                </button>
                <button
                  disabled={isResending}
                  onClick={handleResend}
                  className="text-sm font-medium text-[#007aff] leading-5 hover:underline disabled:opacity-60 self-center"
                >
                  {isResending ? "Sending..." : "Didn't receive the code? Resend"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TutorRegisterVerify
