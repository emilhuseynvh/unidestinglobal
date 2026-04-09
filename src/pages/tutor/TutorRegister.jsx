import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import GuideHeader from "../../components/GuideHeader"
import Footer from "../../components/Footer"
import RegisterSidebar from "../../components/tutor/RegisterSidebar"
import { tutorDetailsSchema, validateField, validateAll } from "../../validations/registerSchema"
import { updateUser } from "../../store/slices/registerSlice"
import { useSendOtpMutation } from "../../store/api/authApi"
import { toast } from "react-toastify"

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Field = ({ label, error, children }) => (
  <div className="flex flex-col gap-1">
    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">{label}</label>
    {children}
    {error && <span className="text-xs text-[#ed4030] leading-4 px-0.5">{error}</span>}
  </div>
)

const inputWrap = (hasError) =>
  `border rounded-xl min-h-[48px] px-3 flex items-center transition-colors ${
    hasError ? "border-[#ed4030] focus-within:border-[#ed4030]" : "border-black/[0.06] focus-within:border-[#007aff] focus-within:border-2"
  }`

const inputCls = "w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1"

const TutorRegister = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const registerState = useSelector((s) => s.register)
  const [sendOtp, { isLoading }] = useSendOtpMutation()
  const fileInputRef = useRef(null)

  const [form, setForm] = useState({
    full_name: registerState.user.full_name || "",
    date_of_birth: registerState.user.date_of_birth || "",
    email: registerState.user.email || "",
    phone: registerState.user.phone || "",
    password: registerState.user.password || "",
    password_confirmation: "",
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [apiError, setApiError] = useState("")
  const [avatarPreview, setAvatarPreview] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (ev) => setAvatarPreview(ev.target.result)
      reader.readAsDataURL(file)
    }
  }

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
    if (apiError) setApiError("")
  }

  const handleBlur = (field) => () => {
    setTouched((prev) => ({ ...prev, [field]: true }))
    const err = validateField(tutorDetailsSchema, form, field)
    if (err) setErrors((prev) => ({ ...prev, [field]: err }))
  }

  const err = (field) => touched[field] && errors[field]

  const handleSubmit = async () => {
    const fieldErrors = validateAll(tutorDetailsSchema, form)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      const allTouched = {}
      Object.keys(fieldErrors).forEach((k) => { allTouched[k] = true })
      setTouched(allTouched)
      return
    }

    dispatch(updateUser(form))
    setApiError("")

    try {
      await sendOtp({ email: form.email }).unwrap()
      toast.success("Verification code sent to your email")
      navigate("/tutor/register/verify")
    } catch (e) {
      const msg = e?.data?.message || e?.data?.errors?.email?.[0] || "Something went wrong"
      setApiError(msg)
      toast.error(msg)
    }
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GuideHeader />

      <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8">
        <div className="bg-[#f9f9fa] rounded-[20px] max-w-[1312px] mx-auto p-6 sm:p-8 lg:p-11 flex flex-col lg:flex-row gap-8">
          <RegisterSidebar currentStep={0} />

          <div className="flex-1 bg-white rounded-[20px] px-6 sm:px-8 lg:px-11 pt-8 lg:pt-11 pb-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-[#8c929c]" />
                <span className="text-xs font-medium text-[#8c929c]">STEP 1 OF 3</span>
                <div className="w-4 h-px bg-[#8c929c]" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Personal Information</h1>
                <p className="text-base text-[#5b616d] leading-6">Continue watching the courses you have already started watching.</p>
              </div>
            </div>

            <div className="h-px bg-[#e6e6e6]" />

            {apiError && (
              <div className="bg-[rgba(237,64,48,0.08)] border border-[rgba(237,64,48,0.2)] rounded-xl px-4 py-3 flex items-center gap-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><circle cx="10" cy="10" r="7.5" stroke="#ed4030" strokeWidth="1.5" /><path d="M10 7v3M10 13h.01" stroke="#ed4030" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="text-sm text-[#df2917] leading-5">{apiError}</span>
              </div>
            )}

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Full name" error={err("full_name")}>
                    <div className={inputWrap(err("full_name"))}>
                      <input type="text" value={form.full_name} onChange={handleChange("full_name")} onBlur={handleBlur("full_name")} placeholder="ex. John Doe" className={inputCls} />
                    </div>
                  </Field>
                  <Field label="Date of birth" error={err("date_of_birth")}>
                    <div className={inputWrap(err("date_of_birth"))}>
                      <input type="date" value={form.date_of_birth} onChange={handleChange("date_of_birth")} onBlur={handleBlur("date_of_birth")} className={inputCls} />
                    </div>
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Email address" error={err("email")}>
                    <div className={inputWrap(err("email"))}>
                      <input type="email" value={form.email} onChange={handleChange("email")} onBlur={handleBlur("email")} placeholder="Enter your email" className={inputCls} />
                    </div>
                  </Field>
                  <Field label="Mobile number" error={err("phone")}>
                    <div className={inputWrap(err("phone"))}>
                      <input type="tel" value={form.phone} onChange={handleChange("phone")} onBlur={handleBlur("phone")} placeholder="Phone number" className={inputCls} />
                    </div>
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Password" error={err("password")}>
                    <div className={inputWrap(err("password"))}>
                      <input type="password" value={form.password} onChange={handleChange("password")} onBlur={handleBlur("password")} placeholder="•••••••••••" className={inputCls} />
                    </div>
                  </Field>
                  <Field label="Confirm Password" error={err("password_confirmation")}>
                    <div className={inputWrap(err("password_confirmation"))}>
                      <input type="password" value={form.password_confirmation} onChange={handleChange("password_confirmation")} onBlur={handleBlur("password_confirmation")} placeholder="•••••••••••" className={inputCls} />
                    </div>
                  </Field>
                </div>
              </div>

              <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-medium text-[#0a0c11] leading-6">Profile Picture</span>
                  <span className="text-base text-[#5b616d] leading-6">Choose your best picture that represent you</span>
                </div>
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="border border-dashed border-black/[0.06] rounded-xl p-4 flex flex-col items-center gap-2.5 cursor-pointer hover:bg-[#fafafa] transition-colors"
                >
                  {avatarPreview ? (
                    <img src={avatarPreview} alt="Avatar" className="w-20 h-20 rounded-full object-cover border-2 border-[#007aff]" />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#dddfe4] flex items-center justify-center">
                      <UserIcon />
                    </div>
                  )}
                  <div className="text-center text-sm">
                    <span className="text-[#0267d0]">{avatarPreview ? "Change photo" : "Click to upload"}</span>
                    {!avatarPreview && <span className="text-[#8c929c]"> or drag and drop</span>}
                    <p className="text-[#8c929c]">SVG, PNG, JPG (max 800x400px)</p>
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  className={`w-full h-12 rounded-xl text-base font-medium text-white leading-6 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] transition-colors ${
                    isLoading ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" /><path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                      Sending code...
                    </span>
                  ) : "Continue"}
                </button>
                <p className="text-sm text-[#5b616d] text-center leading-6 max-w-[426px]">
                  By clicking Log in or Continue with, you agree to Unidestin{" "}
                  <Link to="/terms" className="text-[#0a0c11] underline">Terms of Use</Link>
                  {" "}and{" "}
                  <Link to="/privacy-policy" className="text-[#0a0c11] underline">Privacy Policy</Link>
                </p>
              </div>

              <div className="flex items-baseline gap-1 justify-center">
                <span className="text-sm text-[#5b616d]">Already have an account?</span>
                <Link to="/login" className="text-sm font-medium text-[#007aff]">Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TutorRegister
