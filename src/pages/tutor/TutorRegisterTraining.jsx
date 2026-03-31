import { useState } from "react"
import { Link, useNavigate } from "react-router"
import GuideHeader from "../../components/GuideHeader"
import Footer from "../../components/Footer"
import RegisterSidebar from "../../components/tutor/RegisterSidebar"

const popularLanguages = ["Azerbaijani", "English", "Russian", "Turkish", "French", "Spanish", "Japanese", "Chinese", "German"]

const RequiredTag = () => (
  <span className="bg-[rgba(6,177,241,0.12)] h-5 px-1 rounded-md flex items-center gap-1">
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M10 3L4.5 8.5 2 6" stroke="#008ece" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
    <span className="text-[10px] font-medium text-[#008ece] leading-4">Required</span>
  </span>
)

const RadioOption = ({ selected, title, desc, onClick }) => (
  <button
    onClick={onClick}
    className={`flex-1 border rounded-xl p-4 flex gap-2 items-start text-left transition-colors ${
      selected ? "border-[#007aff] bg-[#f5f9ff]" : "border-black/[0.06] bg-white"
    }`}
  >
    <div className="pt-0.5 shrink-0">
      <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center ${selected ? "border-[#007aff]" : "border-black/[0.09] bg-gradient-to-b from-[#f2f2f4] to-white"}`}>
        {selected && <div className="w-2 h-2 rounded-full bg-[#007aff]" />}
      </div>
    </div>
    <div className="flex flex-col">
      <span className="text-base font-medium text-[#0a0c11] leading-6">{title}</span>
      <span className="text-sm text-[#5b616d] leading-6">{desc}</span>
    </div>
  </button>
)

const TutorRegisterTraining = () => {
  const navigate = useNavigate()
  const [selectedLanguages, setSelectedLanguages] = useState([])
  const [languageSearch, setLanguageSearch] = useState("")
  const [teachMethod, setTeachMethod] = useState("")
  const [teachTarget, setTeachTarget] = useState("")
  const [subject, setSubject] = useState("")
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  const toggleLanguage = (lang) => {
    setSelectedLanguages((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    )
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <GuideHeader />

      <div className="flex-1 px-4 sm:px-8 lg:px-16 py-8">
        <div className="bg-[#f9f9fa] rounded-[20px] max-w-[1312px] mx-auto p-6 sm:p-8 lg:p-11 flex flex-col lg:flex-row gap-8">
          <RegisterSidebar currentStep={2} />

          <div className="flex-1 bg-white rounded-[20px] px-6 sm:px-8 lg:px-11 py-8 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <div className="w-4 h-px bg-[#8c929c]" />
                <span className="text-xs font-medium text-[#8c929c]">STEP 3 OF 3</span>
                <div className="w-4 h-px bg-[#8c929c]" />
                <span className="text-xs font-medium text-[#8c929c]">FINAL STEP</span>
              </div>
              <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Training Information</h1>
            </div>

            <div className="flex flex-col gap-8">
              <div className="h-px bg-[#e6e6e6] max-w-[610px]" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5b616d] uppercase">LANGUAGE OF INSTRUCTION</span>
                    <RequiredTag />
                  </div>
                  <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Which languages do you teach in?</h2>
                </div>
                <div className="bg-[#f2f2f4] border border-black/[0.06] rounded-full h-14 pl-4 pr-2 py-2 flex items-center gap-1 w-full overflow-hidden">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M17.5 17.5l-3.625-3.625m1.958-4.708a6.667 6.667 0 11-13.333 0 6.667 6.667 0 0113.333 0z" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <input type="text" value={languageSearch} onChange={(e) => setLanguageSearch(e.target.value)} placeholder="Search for language" className="flex-1 min-w-0 bg-transparent text-sm font-medium text-[#0a0c11] leading-5 outline-none placeholder:text-[#5b616d] px-2" />
                  <button className="h-10 px-3 rounded-full bg-white border border-black/[0.06] text-sm font-medium text-[#5b616d] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)] hover:bg-[#f5f5f5] transition-colors shrink-0">Search</button>
                </div>
                <div className="flex flex-col gap-4">
                  <span className="text-base text-[#8c929c] leading-6">Popular Languages</span>
                  <div className="flex flex-wrap gap-3">
                    {popularLanguages.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => toggleLanguage(lang)}
                        className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${
                          selectedLanguages.includes(lang)
                            ? "bg-[#0a0c11] text-white"
                            : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11] hover:bg-[#e8e8ec]"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#e6e6e6] max-w-[610px]" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5b616d] uppercase">TEACHING MODE</span>
                    <RequiredTag />
                  </div>
                  <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">How do you prefer to teach?</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <RadioOption selected={teachMethod === "online"} onClick={() => setTeachMethod("online")} title="Online" desc="Live video sessions from anywhere in the world" />
                  <RadioOption selected={teachMethod === "in-person"} onClick={() => setTeachMethod("in-person")} title="In-Person" desc="Face-to-face sessions at a physical location" />
                  <RadioOption selected={teachMethod === "hybrid"} onClick={() => setTeachMethod("hybrid")} title="Hybrid" desc="Flexible mix of online and in-person sessions" />
                </div>
              </div>

              <div className="h-px bg-[#e6e6e6] max-w-[610px]" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5b616d] uppercase">CLASS FORMAT</span>
                    <RequiredTag />
                  </div>
                  <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Who will you teaching?</h2>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <RadioOption selected={teachTarget === "1-on-1"} onClick={() => setTeachTarget("1-on-1")} title="1-on-1" desc="Personalized sessions for a single student" />
                  <RadioOption selected={teachTarget === "group"} onClick={() => setTeachTarget("group")} title="Group" desc="Collaborative classes for multiple students" />
                  <RadioOption selected={teachTarget === "both"} onClick={() => setTeachTarget("both")} title="Both" desc="Offer 1-on-1 and group options together" />
                </div>
              </div>

              <div className="h-px bg-[#e6e6e6] max-w-[610px]" />

              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-[#5b616d] uppercase">SUBJECTS & COURSES</span>
                    <RequiredTag />
                  </div>
                  <h2 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">What do you want to teach?</h2>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Subject</label>
                  <div className="border border-black/[0.09] rounded-xl min-h-[48px] p-3 flex items-center justify-between bg-white shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                    <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Select subject" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0"><path d="M5 7.5l5 5 5-5M5 12.5l5-5 5 5" stroke="#5b616d" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </div>
                </div>
              </div>

              <div className="h-px bg-[#e6e6e6] max-w-[610px]" />

              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#5b616d] uppercase">TUTOR AGREEMENT</span>
                  <RequiredTag />
                </div>

                <div className="bg-[#f9f9fa] rounded-3xl overflow-hidden">
                  <div className="border-b border-black/[0.03] px-5 py-8 flex gap-4">
                    <div className="w-16 h-16 rounded-[14px] bg-[rgba(0,122,255,0.12)] flex items-center justify-center shrink-0">
                      <svg width="36" height="36" viewBox="0 0 36 36" fill="none"><path d="M21 3H9a3 3 0 00-3 3v24a3 3 0 003 3h18a3 3 0 003-3V12l-9-9z" stroke="#007aff" strokeWidth="2" /><path d="M21 3v9h9" stroke="#007aff" strokeWidth="2" /></svg>
                    </div>
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-[22px] font-medium text-[#0a0c11] leading-7 tracking-[-0.2px]">Tutor Agreement</span>
                        <span className="text-sm text-[#8c929c] leading-5">Read and accept the terms to complete your registration on the platform</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-1 rounded-md border border-black/[0.06] bg-white text-[10px] font-medium text-[#5b616d] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">📄 PDF · 2 pages</span>
                        <span className="px-1.5 py-1 rounded-md border border-black/[0.06] bg-white text-[10px] font-medium text-[#5b616d] shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">📅 Updated · 25 Mar 2026</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-[#f2f2f4] px-5 py-6 flex flex-col gap-5 max-h-[315px] overflow-y-auto">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-[#8c929c] uppercase">DOCUMENT REVIEW</span>
                      <div className="flex items-center gap-3">
                        <button className="text-sm font-medium text-[#5b616d] flex items-center gap-1">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M2 10v3a1 1 0 001 1h10a1 1 0 001-1v-3M8 2v8M5 7l3 3 3-3" stroke="#5b616d" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                          Download
                        </button>
                        <button className="text-sm font-medium text-[#007aff] flex items-center gap-1">
                          Open full screen
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M6 2H2v4M14 10v4h-4M2 2l5.5 5.5M14 14l-5.5-5.5" stroke="#007aff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </button>
                      </div>
                    </div>
                    <div className="bg-white rounded-xl p-4 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="text-base font-semibold text-[#0267d0] leading-6">Tutor Connect</span>
                        <span className="text-sm text-[#5b616d]">Effective: March 25, 2026 · v2.4</span>
                      </div>
                      <div className="h-px bg-[#e6e6e6]" />
                      <div className="flex flex-col gap-3">
                        <span className="text-lg font-extrabold text-[#0a0c11] leading-6">Tutor Service Agreement</span>
                        <p className="text-sm text-[#8c929c] leading-5">
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-black/[0.03] px-5 py-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <button
                        type="button"
                        onClick={() => setAgreedToTerms(!agreedToTerms)}
                        className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors shrink-0 ${
                          agreedToTerms ? "bg-[#007aff] border-[#007aff]" : "bg-gradient-to-b from-[#f2f2f4] to-white border-black/[0.09]"
                        }`}
                      >
                        {agreedToTerms && (
                          <svg width="12" height="10" viewBox="0 0 12 10" fill="none"><path d="M1 5L4.5 8.5L11 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        )}
                      </button>
                      <span className="text-xs font-semibold text-[#0a0c11]">I have read and accept the Tutor Agreement</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4 items-center">
                <button
                  disabled={!agreedToTerms}
                  onClick={() => agreedToTerms && navigate("/tutor/register/training/step2")}
                  className={`w-full h-12 rounded-xl text-base font-medium leading-6 transition-colors ${
                    agreedToTerms
                      ? "bg-[#007aff] text-white shadow-[0px_1px_1px_0px_rgba(0,0,0,0.03),inset_0px_3px_3px_0px_rgba(255,255,255,0.12)] hover:bg-[#0066d6]"
                      : "bg-[#f2f2f4] text-[#c3c6cc] cursor-not-allowed"
                  }`}
                >
                  Complete Registration
                </button>
                <p className="text-sm text-[#5b616d] text-center leading-6 max-w-[426px]">
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

export default TutorRegisterTraining
