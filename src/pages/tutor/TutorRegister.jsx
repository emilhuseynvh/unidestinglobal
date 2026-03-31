import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router"
import GuideHeader from "../../components/GuideHeader"
import Footer from "../../components/Footer"
import RegisterSidebar from "../../components/tutor/RegisterSidebar"

const UserIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const TutorRegister = () => {
  const [form, setForm] = useState({
    fullName: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  })
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
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

            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Full name</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="text" value={form.fullName} onChange={handleChange("fullName")} placeholder="ex. John Doe" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Date of birth</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="date" value={form.dateOfBirth} onChange={handleChange("dateOfBirth")} placeholder="Select date" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Email adress</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="email" value={form.email} onChange={handleChange("email")} placeholder="Enter your email" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Mobile number</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-1 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <div className="flex items-center gap-2 shrink-0">
                        <img src="/img/guest/flag-us.svg" alt="US" className="w-5 h-[15px]" />
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path d="M7.5 8.75L10 11.25L12.5 8.75" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <input type="tel" value={form.mobile} onChange={handleChange("mobile")} placeholder="+1 (XXX) YYY-ZZZZ" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Password</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="password" value={form.password} onChange={handleChange("password")} placeholder="•••••••••••" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Confirm Password</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] px-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="password" value={form.confirmPassword} onChange={handleChange("confirmPassword")} placeholder="•••••••••••" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    </div>
                  </div>
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
                  <div className="w-12 h-12 rounded-full bg-[#dddfe4] flex items-center justify-center">
                    <UserIcon />
                  </div>
                  <div className="text-center text-sm">
                    <span className="text-[#0267d0]">Click to upload</span>
                    <span className="text-[#8c929c]"> or drag and drop</span>
                    <p className="text-[#8c929c]">SVG, PNG, JPG (max 800x400px)</p>
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" className="hidden" />
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <button
                  onClick={() => navigate("/tutor/register/education")}
                  className="w-full h-12 rounded-xl bg-[#007aff] text-base font-medium text-white leading-6 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6] transition-colors"
                >
                  Continue
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
