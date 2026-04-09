import { useState } from "react"
import { Link, useNavigate } from "react-router"
import GuideHeader from "../components/GuideHeader"
import Footer from "../components/Footer"
import { useLoginMutation } from "../store/api/authApi"
import { useDispatch } from "react-redux"
import { setCredentials } from "../store/slices/authSlice"
import { toast } from "react-toastify"
import { loginSchema, validateField, validateAll } from "../validations/loginSchema"

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M18.171 8.368H17.5V8.333H10v3.333h4.709A4.998 4.998 0 015 10a5 5 0 015-5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667a8.333 8.333 0 100 16.666c4.584 0 8.333-3.75 8.333-8.333 0-.559-.057-1.104-.162-1.632z" fill="#FFC107" />
    <path d="M2.627 6.121l2.74 2.009A4.998 4.998 0 0110 5c1.275 0 2.434.478 3.317 1.261l2.357-2.357A9.972 9.972 0 0010 1.667c-3.555 0-6.628 2.075-8.073 5.087l.7-.633z" fill="#FF3D00" />
    <path d="M10 18.333c2.583 0 4.93-.988 6.704-2.596l-2.552-2.16A4.972 4.972 0 0110 15a4.998 4.998 0 01-4.701-3.306l-2.727 2.1A8.328 8.328 0 0010 18.333z" fill="#4CAF50" />
    <path d="M18.171 8.368H17.5V8.333H10v3.333h4.709a5.015 5.015 0 01-1.703 2.244l2.552 2.16c-.18.163 2.775-2.027 2.775-6.07 0-.559-.057-1.104-.162-1.632z" fill="#1976D2" />
  </svg>
)

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [form, setForm] = useState({ email: "", password: "" })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [rememberMe, setRememberMe] = useState(false)
  const [apiError, setApiError] = useState("")

  const [login, { isLoading }] = useLoginMutation()

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (apiError) setApiError("")
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(loginSchema, form, field)
    if (err) setErrors((prev) => ({ ...prev, [field]: err }))
  }

  const handleSubmit = async () => {
    const validationErrors = validateAll(loginSchema, form)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setTouched({ email: true, password: true })
      return
    }

    setErrors({})
    setApiError("")

    try {
      const res = await login({ email: form.email, password: form.password }).unwrap()
      dispatch(setCredentials({ token: res.data.token, user: res.data.user }))
      toast.success("Login successful")

      const role = res.data.user?.role
      if (role === "tutor") {
        navigate("/tutor")
      } else {
        navigate("/student")
      }
    } catch (err) {
      const message = err?.data?.message || "Login failed. Please check your credentials."
      setApiError(message)
      toast.error(message)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit()
  }

  const inputClass =
    "w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1"

  const wrapperClass = (field) =>
    `border rounded-xl min-h-[48px] px-3 flex items-center transition-colors ${
      touched[field] && errors[field]
        ? "border-[#ed4030] focus-within:border-[#ed4030]"
        : "border-black/[0.06] focus-within:border-[#007aff] focus-within:border-2"
    }`

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
              <div className="flex items-center gap-1">
                <span className="text-sm text-[#5b616d] leading-6">Don't have an account?</span>
                <Link to="/register" className="text-sm font-medium text-[#007aff] leading-5">Register</Link>
              </div>
            </div>

            {apiError && (
              <div className="w-full bg-[rgba(237,64,48,0.08)] border border-[rgba(237,64,48,0.2)] rounded-xl px-4 py-3 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="#ed4030" strokeWidth="1.5" /><path d="M10 7v3M10 13h.01" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="text-sm text-[#df2917] leading-5">{apiError}</span>
              </div>
            )}

            <div className="w-full flex flex-col gap-6" onKeyDown={handleKeyDown}>
              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email address</label>
                  <div className={wrapperClass("email")}>
                    <input
                      type="email"
                      value={form.email}
                      onChange={handleChange("email")}
                      onBlur={handleBlur("email")}
                      placeholder="Enter your email"
                      className={inputClass}
                    />
                  </div>
                  {touched.email && errors.email && (
                    <span className="text-xs text-[#ed4030] leading-4 px-0.5">{errors.email}</span>
                  )}
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Password</label>
                  <div className={wrapperClass("password")}>
                    <input
                      type="password"
                      value={form.password}
                      onChange={handleChange("password")}
                      onBlur={handleBlur("password")}
                      placeholder="•••••••••••"
                      className={inputClass}
                    />
                  </div>
                  {touched.password && errors.password && (
                    <span className="text-xs text-[#ed4030] leading-4 px-0.5">{errors.password}</span>
                  )}
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
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className={`w-full h-12 rounded-xl text-base font-medium text-white leading-6 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] transition-colors ${
                    isLoading ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" /><path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Logging in...
                    </span>
                  ) : "Login"}
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
