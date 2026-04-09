import { useState, useRef } from "react"
import { Link, useNavigate } from "react-router"
import { useDispatch, useSelector } from "react-redux"
import GuideHeader from "../../components/GuideHeader"
import Footer from "../../components/Footer"
import RegisterSidebar from "../../components/tutor/RegisterSidebar"
import { updateTutor } from "../../store/slices/registerSlice"
import { tutorEducationSchema, validateAll } from "../../validations/registerSchema"

const CalendarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <rect x="2.5" y="3.333" width="15" height="13.334" rx="2" stroke="#8c929c" strokeWidth="1.5" />
    <path d="M13.333 1.667v3.333M6.667 1.667v3.333M2.5 8.333h15" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const FileIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="#8c929c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const emptyEducation = { degree: "", field_of_study: "", institution: "", education_start_date: "", education_end_date: "", file: null, filePreview: null }

const EducationForm = ({ edu, index, onChange, onFileChange, onRemove, showRemove }) => {
  const fileRef = useRef(null)

  const handleFile = (e) => {
    const file = e.target.files?.[0]
    if (file) onFileChange(index, file)
  }

  return (
    <div className="flex flex-col gap-7 pb-6 border-b border-black/[0.03] last:border-0">
      {showRemove && (
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-[#0a0c11]">Education {index + 1}</span>
          <button onClick={() => onRemove(index)} className="text-xs font-medium text-[#ed4030]">Remove</button>
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Degree</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="text" value={edu.degree} onChange={(e) => onChange(index, "degree", e.target.value)} placeholder="Bachelor, Master, PHD" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Field of Study</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <input type="text" value={edu.field_of_study} onChange={(e) => onChange(index, "field_of_study", e.target.value)} placeholder="e.g Mathematics" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Institution Name</label>
        <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center focus-within:border-[#007aff] focus-within:border-2 transition-colors">
          <input type="text" value={edu.institution} onChange={(e) => onChange(index, "institution", e.target.value)} placeholder="University name" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">Start date</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-2 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <CalendarIcon />
            <input type="text" value={edu.education_start_date} onChange={(e) => onChange(index, "education_start_date", e.target.value)} placeholder="Select date" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" onFocus={(e) => e.target.type = "date"} onBlur={(e) => { if (!e.target.value) e.target.type = "text" }} />
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-[#5b616d] leading-6 px-0.5">End date</label>
          <div className="border border-black/[0.06] rounded-xl min-h-[48px] p-3 flex items-center gap-2 focus-within:border-[#007aff] focus-within:border-2 transition-colors">
            <CalendarIcon />
            <input type="text" value={edu.education_end_date} onChange={(e) => onChange(index, "education_end_date", e.target.value)} placeholder="Select date" className="w-full text-base text-[#0a0c11] leading-6 outline-none placeholder:text-[#8c929c] px-1" onFocus={(e) => e.target.type = "date"} onBlur={(e) => { if (!e.target.value) e.target.type = "text" }} />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <span className="text-base font-medium text-[#0a0c11] leading-6">Upload your diploma</span>
        {edu.filePreview ? (
          <div className="border border-black/[0.06] rounded-xl p-4 flex items-center gap-4">
            <div className="w-11 h-11 rounded-full bg-[#e8efff] flex items-center justify-center shrink-0">
              <FileIcon />
            </div>
            <div className="flex-1 min-w-0 flex flex-col">
              <span className="text-sm font-semibold text-[#0a0c11] leading-6 truncate">{edu.file?.name}</span>
              <span className="text-xs text-[#8c929c] leading-4">{(edu.file?.size / 1024 / 1024).toFixed(1)} MB</span>
            </div>
            <button onClick={() => { onFileChange(index, null); fileRef.current.value = "" }} className="text-xs font-medium text-[#ed4030] shrink-0">Remove</button>
          </div>
        ) : (
          <div
            onClick={() => fileRef.current?.click()}
            className="border border-dashed border-black/[0.06] rounded-xl p-4 flex flex-col items-center gap-2.5 cursor-pointer hover:bg-[#fafafa] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center">
              <FileIcon />
            </div>
            <div className="text-center text-sm">
              <span className="text-[#0267d0]">Click to upload</span>
              <span className="text-[#8c929c]"> or drag and drop</span>
              <p className="text-[#8c929c]">PDF, PNG, JPG (max 6 MB)</p>
            </div>
          </div>
        )}
        <input ref={fileRef} type="file" accept="image/*,.pdf" onChange={handleFile} className="hidden" />
      </div>
    </div>
  )
}

const TutorRegisterEducation = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const tutorState = useSelector((s) => s.register.tutor)

  const [educations, setEducations] = useState([
    {
      degree: tutorState.degree || "",
      field_of_study: tutorState.field_of_study || "",
      institution: tutorState.institution || "",
      education_start_date: tutorState.education_start_date || "",
      education_end_date: tutorState.education_end_date || "",
      file: null,
      filePreview: null,
    },
  ])
  const [errors, setErrors] = useState({})

  const handleFieldChange = (index, field, value) => {
    setEducations((prev) => prev.map((edu, i) => i === index ? { ...edu, [field]: value } : edu))
  }

  const handleFileChange = (index, file) => {
    if (!file) {
      setEducations((prev) => prev.map((edu, i) => i === index ? { ...edu, file: null, filePreview: null } : edu))
      return
    }
    const reader = new FileReader()
    reader.onload = (e) => {
      setEducations((prev) => prev.map((edu, i) => i === index ? { ...edu, file, filePreview: e.target.result } : edu))
    }
    reader.readAsDataURL(file)
  }

  const addEducation = () => {
    setEducations((prev) => [...prev, { ...emptyEducation }])
  }

  const removeEducation = (index) => {
    setEducations((prev) => prev.filter((_, i) => i !== index))
  }

  const handleSubmit = () => {
    const primary = educations[0]
    const formData = {
      degree: primary.degree,
      field_of_study: primary.field_of_study,
      institution: primary.institution,
      education_start_date: primary.education_start_date,
      education_end_date: primary.education_end_date,
    }
    const fieldErrors = validateAll(tutorEducationSchema, formData)
    if (Object.keys(fieldErrors).length > 0) {
      setErrors(fieldErrors)
      return
    }
    setErrors({})

    const eduArray = educations.map((edu) => ({
      degree: edu.degree,
      field_of_study: edu.field_of_study,
      institution: edu.institution,
      start_date: edu.education_start_date,
      end_date: edu.education_end_date || null,
      document: null,
    }))
    dispatch(updateTutor({ educations: eduArray }))
    navigate("/tutor/register/training")
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
                <span className="text-xs font-medium text-[#8c929c]">STEP 2 OF 3</span>
                <div className="w-4 h-px bg-[#8c929c]" />
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-[22px] font-semibold text-[#0a0c11] leading-7 tracking-[-0.2px]">Education</h1>
                <p className="text-base text-[#5b616d] leading-6">Continue watching the courses you have already started watching.</p>
              </div>
            </div>

            <div className="h-px bg-[#e6e6e6]" />

            <div className="flex flex-col gap-8">
              {educations.map((edu, i) => (
                <EducationForm
                  key={i}
                  edu={edu}
                  index={i}
                  onChange={handleFieldChange}
                  onFileChange={handleFileChange}
                  onRemove={removeEducation}
                  showRemove={educations.length > 1}
                />
              ))}

              <button onClick={addEducation} className="flex items-center gap-2 text-base font-medium text-[#0a0c11] self-start hover:text-[#007aff] transition-colors">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 4.167v11.666M4.167 10h11.666" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Add another education
              </button>

              {Object.keys(errors).length > 0 && (
                <div className="flex flex-col gap-1">
                  {Object.values(errors).map((v, i) => (
                    <span key={i} className="text-xs text-[#ed4030] leading-4">{v}</span>
                  ))}
                </div>
              )}

              <div className="flex flex-col gap-4 items-center">
                <button
                  onClick={handleSubmit}
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
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default TutorRegisterEducation
