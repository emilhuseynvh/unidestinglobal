import { useState, useEffect, useRef } from "react"
import { Link } from "react-router"
import ProfileTabs from "../../components/tutor/EditProfile/ProfileTabs"
import ProfileProgressBar from "../../components/tutor/EditProfile/ProfileProgressBar"
import { useGetMeQuery, useUpdateProfileMutation } from "../../store/api/authApi"
import { toast } from "react-toastify"

const allLanguages = ["Azerbaijani", "English", "Russian", "Turkish", "French", "Spanish", "Japanese", "Chinese", "German"]

const EditProfileBasic = () => {
  const { data: meData, isLoading: meLoading } = useGetMeQuery()
  const [updateProfile, { isLoading: saving }] = useUpdateProfileMutation()

  const user = meData?.data
  const tutor = user?.tutor

  const fileInputRef = useRef(null)
  const [form, setForm] = useState({ full_name: "", date_of_birth: "", email: "", phone: "", country: "", city: "" })
  const [languages, setLanguages] = useState([])
  const [subjects, setSubjects] = useState([])
  const [educations, setEducations] = useState([])
  const [avatarPreview, setAvatarPreview] = useState(null)
  const [avatarFile, setAvatarFile] = useState(null)

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      setAvatarFile(file)
      const reader = new FileReader()
      reader.onload = (ev) => setAvatarPreview(ev.target.result)
      reader.readAsDataURL(file)
    }
  }

  const toDateInput = (val) => val ? val.split("T")[0] : ""

  useEffect(() => {
    if (user) {
      setForm({
        full_name: user.full_name || "",
        date_of_birth: toDateInput(user.date_of_birth),
        email: user.email || "",
        phone: user.phone || "",
        country: user.country || "",
        city: user.city || "",
      })
      setLanguages(tutor?.languages || [])
      setSubjects(tutor?.subjects || [])
      setEducations((tutor?.educations || []).map((e) => ({
        ...e,
        start_date: toDateInput(e.start_date),
        end_date: toDateInput(e.end_date),
      })))
    }
  }, [user])

  const handleChange = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const toggleLang = (lang) => setLanguages((p) => p.includes(lang) ? p.filter((l) => l !== lang) : [...p, lang])
  const toggleSubject = (sub) => setSubjects((p) => p.includes(sub) ? p.filter((s) => s !== sub) : [...p, sub])

  const handleEduChange = (i, field, val) => setEducations((p) => p.map((e, idx) => idx === i ? { ...e, [field]: val } : e))
  const handleEduFile = (i, file) => setEducations((p) => p.map((e, idx) => idx === i ? { ...e, document: file } : e))
  const addEducation = () => setEducations((p) => [...p, { degree: "", field_of_study: "", institution: "", start_date: "", end_date: "", document: null }])
  const removeEducation = (i) => setEducations((p) => p.filter((_, idx) => idx !== i))

  const handleSave = async () => {
    const payload = {}

    if (form.full_name !== (user.full_name || "")) payload.full_name = form.full_name
    if (form.date_of_birth !== toDateInput(user.date_of_birth)) payload.date_of_birth = form.date_of_birth
    if (form.phone !== (user.phone || "")) payload.phone = form.phone
    if (form.country !== (user.country || "")) payload.country = form.country
    if (form.city !== (user.city || "")) payload.city = form.city

    const tutorPayload = {}
    const origLangs = tutor?.languages || []
    if (languages.length !== origLangs.length || languages.some((l) => !origLangs.includes(l))) {
      tutorPayload.languages = languages
    }

    const origSubjects = tutor?.subjects || []
    if (subjects.length !== origSubjects.length || subjects.some((s) => !origSubjects.includes(s))) {
      tutorPayload.subjects = subjects
    }

    const origEdus = (tutor?.educations || []).map((e) => ({
      degree: e.degree || "",
      field_of_study: e.field_of_study || "",
      institution: e.institution || "",
      start_date: toDateInput(e.start_date),
      end_date: toDateInput(e.end_date) || null,
      document: e.document || null,
    }))
    const currentEdus = educations.map((e) => ({
      degree: e.degree || "",
      field_of_study: e.field_of_study || "",
      institution: e.institution || "",
      start_date: e.start_date || "",
      end_date: e.end_date || null,
      document: e.document || null,
    }))
    const edusChanged = currentEdus.length !== origEdus.length || currentEdus.some((e, i) => {
      const o = origEdus[i]
      if (!o) return true
      return e.degree !== o.degree || e.field_of_study !== o.field_of_study || e.institution !== o.institution || e.start_date !== o.start_date || e.end_date !== o.end_date || e.document !== o.document
    })
    if (edusChanged) {
      tutorPayload.educations = currentEdus.map((e, i) => {
        const { document, ...rest } = e
        const ed = { ...rest }
        if (document instanceof File) ed.document = document
        else if (document === null && origEdus[i]?.document) ed.document = ""
        return ed
      })
    }

    if (Object.keys(tutorPayload).length > 0) payload.tutor = tutorPayload
    if (avatarFile) payload.avatar = avatarFile

    if (Object.keys(payload).length === 0) {
      toast.info("No changes to save")
      return
    }

    try {
      await updateProfile(payload).unwrap()
      toast.success("Profile saved successfully")
    } catch (err) {
      toast.error(err?.data?.message || "Failed to save profile")
    }
  }

  if (meLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <svg className="animate-spin h-8 w-8 text-[#007aff]" viewBox="0 0 24 24" fill="none"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
      </div>
    )
  }

  const progress = [!!form.full_name, !!form.date_of_birth, !!form.email, languages.length > 0, subjects.length > 0].filter(Boolean).length * 20

  return (
    <div className="flex flex-col bg-[#f9f9fa] min-h-full">
      <div className="px-6 py-3 border-b border-[#e9eaeb]">
        <Link to="/tutor/dashboard" className="flex items-center gap-1 text-sm font-medium text-[#5b616d]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8l4-4" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          Back to Dashboard
        </Link>
      </div>
      <ProfileProgressBar progress={progress} />
      <div className="md:px-6 px-3 lg:px-10">
        <ProfileTabs />
      </div>

      <div className="max-w-[769px] mx-auto w-full px-4 sm:px-6 py-6">
        <div className="bg-white rounded-[18px] p-6 flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="w-4 h-0.5 rounded-full bg-[#c3c6cc]" />
              <span className="text-[11px] font-bold text-[#c3c6cc] uppercase tracking-[1.1px]">Step 1 of 5 — Already complete</span>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7">Basic information</h1>
                <p className="text-sm text-[#5b616d] leading-5">Your account was created successfully. Here's what we have on file from your registration.</p>
              </div>
              <button onClick={handleSave} disabled={saving} className={`h-10 px-4 rounded-[10px] text-sm font-medium text-white shrink-0 transition-colors ${saving ? "bg-[#5caaff] cursor-not-allowed" : "bg-[#007aff] hover:bg-[#0066d6]"}`}>
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Personal Details</span>
            <div className="bg-[#f2f2f4] border border-dashed border-black/[0.09] rounded-xl px-4 py-8 flex items-center gap-6">
              {avatarPreview || user?.avatar ? (
                <img src={avatarPreview || user.avatar} alt="Avatar" className="w-[90px] h-[90px] rounded-full object-cover border-2 border-[#007aff] shrink-0" />
              ) : (
                <div className="w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#007aff] to-[rgba(0,122,255,0.2)] border border-black/[0.03] flex items-center justify-center shrink-0 backdrop-blur-[12px]">
                  <span className="text-lg font-medium text-white">{form.full_name?.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase() || "?"}</span>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-1">
                  <span className="text-base font-semibold text-[#0a0c11] leading-6">Profile picture</span>
                  <span className="text-sm text-[#5b616d] leading-6">A clear, friendly headshot increases bookings by 70%. Use natural lighting and smile.</span>
                </div>
                <button onClick={() => fileInputRef.current?.click()} className="h-10 px-3 rounded-[10px] border border-black/[0.06] bg-white text-sm font-medium text-[#5b616d] self-start flex items-center gap-1.5 shadow-[0px_2px_1.5px_0px_rgba(0,0,0,0.03)]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  {avatarPreview || user?.avatar ? "Change photo" : "Upload photo"}
                </button>
                <input ref={fileInputRef} type="file" accept="image/*" onChange={handleAvatarChange} className="hidden" />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Full name</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="text" value={form.full_name} onChange={handleChange("full_name")} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Date of birth</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="date" value={form.date_of_birth} onChange={handleChange("date_of_birth")} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Email address</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center bg-[#f9f9fa]">
                  <input type="email" value={form.email} disabled className="w-full text-base text-[#8c929c] leading-6 outline-none px-1 bg-transparent" />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Mobile number</label>
                <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                  <input type="tel" value={form.phone} onChange={handleChange("phone")} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-6">
            <span className="text-[11px] font-medium text-[#8c929c] uppercase tracking-[2px] leading-3">Education Details</span>
            {educations.map((edu, i) => (
              <div key={i} className="flex flex-col gap-4 pb-4 border-b border-black/[0.03] last:border-0">
                {educations.length > 1 && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0a0c11]">Education {i + 1}</span>
                    <button onClick={() => removeEducation(i)} className="text-xs font-medium text-[#ed4030]">Remove</button>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Degree</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="text" value={edu.degree} onChange={(e) => handleEduChange(i, "degree", e.target.value)} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Field of Study</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="text" value={edu.field_of_study} onChange={(e) => handleEduChange(i, "field_of_study", e.target.value)} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Institution Name</label>
                  <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                    <input type="text" value={edu.institution} onChange={(e) => handleEduChange(i, "institution", e.target.value)} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Start date</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="date" value={edu.start_date} onChange={(e) => handleEduChange(i, "start_date", e.target.value)} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">End date</label>
                    <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
                      <input type="date" value={edu.end_date || ""} onChange={(e) => handleEduChange(i, "end_date", e.target.value)} className="w-full text-base text-[#0a0c11] leading-6 outline-none px-1" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[#5b616d] leading-5 px-0.5">Diploma / Certificate</label>
                  {edu.document ? (
                    <div className="border border-black/[0.06] rounded-xl p-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 1.5H4.5A1.5 1.5 0 003 3v12a1.5 1.5 0 001.5 1.5h9A1.5 1.5 0 0015 15V5.5L11 1.5z" stroke="#3b82f6" strokeWidth="1.5" /><path d="M11 1.5v4h4" stroke="#3b82f6" strokeWidth="1.5" /></svg>
                      </div>
                      <div className="flex flex-col flex-1 min-w-0">
                        {typeof edu.document === "string" ? (
                          <>
                            <a href={edu.document} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-[#0a0c11] leading-5 truncate hover:text-[#007aff]">View uploaded document</a>
                            <span className="text-xs text-[#5b616d] leading-4">Click to open</span>
                          </>
                        ) : (
                          <>
                            <span className="text-sm font-semibold text-[#0a0c11] leading-5 truncate">{edu.document.name}</span>
                            <span className="text-xs text-[#5b616d] leading-4">{(edu.document.size / 1024 / 1024).toFixed(1)} MB</span>
                          </>
                        )}
                      </div>
                      <button onClick={() => handleEduFile(i, null)} className="text-xs font-medium text-[#ed4030] shrink-0">Remove</button>
                    </div>
                  ) : (
                    <label className="border border-dashed border-black/[0.06] rounded-xl p-4 flex flex-col items-center gap-2 cursor-pointer hover:bg-[#fafafa] transition-colors">
                      <div className="w-10 h-10 rounded-full bg-[#f5f5f5] flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M15.75 11.25v2.25a1.5 1.5 0 01-1.5 1.5H3.75a1.5 1.5 0 01-1.5-1.5v-2.25M12.75 6L9 2.25 5.25 6M9 2.25v9" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </div>
                      <div className="text-center text-sm">
                        <span className="text-[#0267d0] font-medium">Click to upload</span>
                        <span className="text-[#8c929c]"> or drag and drop</span>
                        <p className="text-[#8c929c] text-xs">PDF, PNG, JPG (max 6 MB)</p>
                      </div>
                      <input type="file" accept=".pdf,.jpg,.jpeg,.png" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) handleEduFile(i, f); e.target.value = "" }} />
                    </label>
                  )}
                </div>
              </div>
            ))}
            <button onClick={addEducation} className="h-12 px-4 rounded-xl border border-black/[0.06] bg-white text-base font-medium text-[#5b616d] self-start flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4.167v11.666M4.167 10h11.666" stroke="#5b616d" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Add another education
            </button>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Language of Instruction</span>
            <div className="flex flex-wrap gap-3">
              {allLanguages.map((lang) => (
                <button key={lang} onClick={() => toggleLang(lang)} className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${languages.includes(lang) ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"}`}>
                  {lang}
                </button>
              ))}
            </div>
          </div>

          <div className="h-px bg-[#e6e6e6]" />

          <div className="flex flex-col gap-4">
            <span className="text-[11px] font-medium text-[#5b616d] uppercase tracking-[2px] leading-3">Subjects & Courses</span>
            <div className="flex flex-wrap gap-3">
              {(subjects.length > 0 ? subjects : ["Biology"]).map((sub) => (
                <button key={sub} onClick={() => toggleSubject(sub)} className={`h-10 px-3.5 rounded-[10px] text-sm font-medium transition-colors ${subjects.includes(sub) ? "bg-[rgba(0,122,255,0.12)] text-[#0267d0]" : "bg-[rgba(242,242,244,0.8)] text-[#0a0c11]"}`}>
                  {sub}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfileBasic
